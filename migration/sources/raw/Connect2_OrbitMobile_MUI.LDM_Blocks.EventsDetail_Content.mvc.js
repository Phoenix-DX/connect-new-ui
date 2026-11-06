define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model"], function (OutSystems, Connect2_OrbitMobile_MUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ActiveBannerHeight", "activeBannerHeightVar", "ActiveBannerHeight", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 210;
}, false), 
this.attr("In_MinBannerHeight", "in_MinBannerHeightIn", "In_MinBannerHeight", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 210;
}, false), 
this.attr("_in_MinBannerHeightInDataFetchStatus", "_in_MinBannerHeightInDataFetchStatus", "_in_MinBannerHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_MinBannerHeight" in inputs) {
this.variables.in_MinBannerHeightIn = inputs.In_MinBannerHeight;
if("_in_MinBannerHeightInDataFetchStatus" in inputs) {
this.variables._in_MinBannerHeightInDataFetchStatus = inputs._in_MinBannerHeightInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LDM_Blocks.EventsDetail_Content");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "LDM_Blocks.EventsDetail_Content";
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
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_controller;
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
style: "event-details-content",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "event-details-content-top",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.banner_Placeholder,
extendedProperties: {
style: (("height: " + (model.variables.activeBannerHeightVar).toString()) + "px;")
},
style: "event-detail-content-banner",
_idProps: {
service: idService,
name: "Banner_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.guestView_Placeholder,
style: "event-detail-content-guestview",
_idProps: {
service: idService,
name: "GuestView_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content_Placeholder,
style: "event-detail-content-content",
_idProps: {
service: idService,
name: "Content_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$debugger"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_Debugger) {
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:l+FQUN3gFkiqXHRW+9_mtA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.yzu+hQVqeEuzeIefcm7Y3g/ClientActions.l+FQUN3gFkiqXHRW+9_mtA:02qIU0EyFexQp9v8OQ9E7w", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aDJMBSXC7UCG6yZt5GeX0Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XALKzwABbkWHEBb7Xay9Cw", callContext.id);
// Execute Action: SetActiveHeight
controller._setActiveHeight$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G6mReUmTskyK4cZxtfaY7Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:l+FQUN3gFkiqXHRW+9_mtA", callContext.id);
}

};
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1gSrU7PFMkmD5_pImJBXwQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.yzu+hQVqeEuzeIefcm7Y3g/ClientActions.1gSrU7PFMkmD5_pImJBXwQ:UwU9zJTmsW3f6tTh6iZL+g", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oUCQks86QEq0ITfA9YN79g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_PeMzIyZ2U6Oe7w1ucet7w", callContext.id);
// Execute Action: SetActiveHeight
controller._setActiveHeight$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GSl5m_S45kK+f+JoR28ujA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1gSrU7PFMkmD5_pImJBXwQ", callContext.id);
}

};
Controller.prototype._setActiveHeight$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetActiveHeight");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:W3eN0nE8CEmrwfO_r7kU7Q:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.yzu+hQVqeEuzeIefcm7Y3g/ClientActions.W3eN0nE8CEmrwfO_r7kU7Q:75HaohbIsHXfwlF4VOgAuA", "Connect2_OrbitMobile_MUI", "SetActiveHeight", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zKrMLnwqO0WVt4lEVflbMA", callContext.id);
// Has value changed?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LOsedugiy06P8r2Pg23edA", callContext.id) && ((model.variables.in_MinBannerHeightIn) !== (model.variables.activeBannerHeightVar)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XJl9+jr6f0mUzWiDpISZgA", callContext.id);
// ActiveBannerHeight = In_MinBannerHeight
model.variables.activeBannerHeightVar = model.variables.in_MinBannerHeightIn;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8qeN01vU00Ws+3DJZyAhpA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8qeN01vU00Ws+3DJZyAhpA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:W3eN0nE8CEmrwfO_r7kU7Q", callContext.id);
}

};

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.setActiveHeight$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setActiveHeight$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ:_P7gfhFmARrzYcq0IncBSg", "Connect2_OrbitMobile_MUI", "LDM_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yzu+hQVqeEuzeIefcm7Y3g:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.yzu+hQVqeEuzeIefcm7Y3g:EKXkrl4K623L39841VgqCg", "Connect2_OrbitMobile_MUI", "EventsDetail_Content", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yzu+hQVqeEuzeIefcm7Y3g", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/EventsDetail_Content On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/EventsDetail_Content On Parameters Changed");
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"GMf6PfjMTU6VjvFVmtMH0A": {
getter: function (varBag, idService) {
return varBag.model.variables.activeBannerHeightVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"xJr38x2rjEOEgQVfGgpFgQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MinBannerHeightIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sAoC2fnKUU+e3qmy5X1piQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Banner_Placeholder"));
})(varBag.model, idService);
}
},
"0aZ2tEpz4ECW3pXPpTQv7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("GuestView_Placeholder"));
})(varBag.model, idService);
}
},
"Bp32YF79rkSjmMAlbtiQVg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content_Placeholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
