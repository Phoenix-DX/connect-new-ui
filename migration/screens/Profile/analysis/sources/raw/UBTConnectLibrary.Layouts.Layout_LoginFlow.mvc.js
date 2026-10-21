define("UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc$model"], function (OutSystems, UBTConnectLibraryModel, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_HasOverlay", "in_HasOverlayIn", "In_HasOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HasOverlayInDataFetchStatus", "_in_HasOverlayInDataFetchStatus", "_in_HasOverlayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsCommonBlock", "in_IsCommonBlockIn", "In_IsCommonBlock", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsCommonBlockInDataFetchStatus", "_in_IsCommonBlockInDataFetchStatus", "_in_IsCommonBlockInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel.hasValidationWidgets || UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_HasOverlay" in inputs) {
this.variables.in_HasOverlayIn = inputs.In_HasOverlay;
if("_in_HasOverlayInDataFetchStatus" in inputs) {
this.variables._in_HasOverlayInDataFetchStatus = inputs._in_HasOverlayInDataFetchStatus;
}

}

if("In_ExtendedClass" in inputs) {
this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
if("_in_ExtendedClassInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
}

}

if("In_IsCommonBlock" in inputs) {
this.variables.in_IsCommonBlockIn = inputs.In_IsCommonBlock;
if("_in_IsCommonBlockInDataFetchStatus" in inputs) {
this.variables._in_IsCommonBlockInDataFetchStatus = inputs._in_IsCommonBlockInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Layouts.Layout_LoginFlow");
});
define("UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$model", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc$view"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_model, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvc_view) {
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
        View.displayName = "Layouts.Layout_LoginFlow";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.in_IsCommonBlockIn, false, this, function () {
return [];
}, function () {
return [React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("ubt-layout--login " + model.variables.in_ExtendedClassIn),
visible: true,
_idProps: {
service: idService,
name: "Main"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
}, $if(model.variables.in_HasOverlayIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-layout--login__svg",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onPathCalculated$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/SVG_Background_LoginWrapper OnPathCalculated");
controller.onPathCalculated$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header,
style: "ubt-layout--login__header",
_idProps: {
service: idService,
name: "Placeholder_Header"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Content,
style: "ubt-layout--login__content",
_idProps: {
service: idService,
name: "Placeholder_Content"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_CommonUI_Inside_Layout,
_idProps: {
service: idService,
name: "Placeholder_CommonUI_Inside_Layout"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$debugger"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_Debugger) {
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
Controller.prototype._onReady2$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady2");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:lds2pQ69mU6PZaatKTic4Q:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.DDy0SM8dr0ycjeZVLVxL4g/ClientActions.lds2pQ69mU6PZaatKTic4Q:8bAPsc9AHocBDHzJ7tahBg", "UBTConnectLibrary", "OnReady2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_Dt8jCi_I0uDU4HCEn59mA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EFBARQsVcUW+R46h2CGwdQ", callContext.id);
// Trigger Event: OnReady
return controller.onReady$Action(idService.getId("Main"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:u8PkMH_7lkiuSThfgLYkAg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:lds2pQ69mU6PZaatKTic4Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:lds2pQ69mU6PZaatKTic4Q", callContext.id);
throw ex;

});
};

Controller.prototype.onReady2$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady2$Action, callContext);

};
Controller.prototype.onPathCalculated$Action = function () {
return Promise.resolve();
};
Controller.prototype.onReady$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ:LSOi3iQzjd8avvO2ZKIsMw", "UBTConnectLibrary", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:DDy0SM8dr0ycjeZVLVxL4g:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.DDy0SM8dr0ycjeZVLVxL4g:jsVqkYfAFetBC2cMvKiPMA", "UBTConnectLibrary", "Layout_LoginFlow", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:DDy0SM8dr0ycjeZVLVxL4g", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_LoginFlow On Ready");
return controller.onReady2$Action(callContext);

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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"GKvoaMLThEa3OMSFKjF_QQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasOverlayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ecyFFKp9RUiyzWuSQiX3bw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vzcp1Tl6SUmgp5_oUIJJjw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsCommonBlockIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CsY16S7QyE+nE0WY3SKYjg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Main"));
})(varBag.model, idService);
}
},
"aZGDPH_rhEi0jDOUf9LKhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasOverlay"));
})(varBag.model, idService);
}
},
"zHztFsseREiENYPwEfA5yQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"dJ3_MSUKhUOW56Ooejy56Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"a573hb7JDESUlpGgj+YDtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
