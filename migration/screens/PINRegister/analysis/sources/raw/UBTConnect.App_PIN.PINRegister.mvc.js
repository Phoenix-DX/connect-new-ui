define("UBTConnect.App_PIN.PINRegister.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBT_AppManager.controller$AppManager_Logout", "UBTConnect.referencesHealth$UBT_AppManager", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBT_AppManagerController, NavigationHandlerController, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UseOverlay", "useOverlayVar", "UseOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromStructure = function (str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
useOverlayVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_PIN.PINRegister");
});
define("UBTConnect.App_PIN.PINRegister.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBT_AppManager.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.PINRegister.mvc$model", "UBTConnect.App_PIN.PINRegister.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBT_AppManager.controller$AppManager_Logout", "UBTConnect.referencesHealth$UBT_AppManager", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBT_AppManagerController, NavigationHandlerController, React, OSView, UBTConnect_App_PIN_PINRegister_mvc_model, UBTConnect_App_PIN_PINRegister_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "App_PIN.PINRegister";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_PIN_PINRegister_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_PIN_PINRegister_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "PINRegister";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, {
inputs: {
In_HasOverlay: model.variables.useOverlayVar
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
placeholder_Header: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_PIN/PINRegister/Link OnClick");
return controller.onClick_BackToLogin$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: "Back to login",
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small,
TextOptions: model.getCachedValue(idService.getId("dg8txTu+7kSxNyUGWGI_YQ.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.inherit,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowLeftAlt
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}))];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_view, {
inputs: {
UseOverlay: model.variables.useOverlayVar,
EnableName: true
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
inputs: {
In_ShowLockScreen: false,
In_IgnorePolicy: true,
In_IgnoreLockScreen: true
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
uuid: "5",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.useOverlayVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_PIN.PINRegister.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_PIN.PINRegister.mvc$debugger", "UBTConnect.App_PIN.controller", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBT_AppManager.controller$AppManager_Logout", "UBTConnect.referencesHealth$UBT_AppManager", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBT_AppManagerController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_PIN_PINRegister_mvc_Debugger, _flow_UBTConnect_App_PINController) {
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
Controller.prototype._onClick_BackToLogin$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_BackToLogin");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:exjhsnf9d0mfjIfBTwMNrw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.UGk3vN9Q+kWubvvxxBgxlw/ClientActions.exjhsnf9d0mfjIfBTwMNrw:J0ZJ7W1ZZ9NSMhKIC8QpOQ", "UBTConnect", "OnClick_BackToLogin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dgP+V83_10qt+cisNkzrug", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qUhDDjKAQkatmOAwOCUJaw", callContext.id);
// Execute Action: AllowUpcomingNavigation
NavigationHandlerController.default.allowUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4pj2DUUUekCCCIqM2G3vKA", callContext.id);
// Execute Action: AppManager_Logout
model.flush();
return UBT_AppManagerController.default.appManager_Logout$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yU8Sim7MiUqv0kAGKfNBqw", callContext.id);
// Destination: /UBTConnect/Login
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:exjhsnf9d0mfjIfBTwMNrw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:exjhsnf9d0mfjIfBTwMNrw", callContext.id);
throw ex;

});
};

Controller.prototype.onClick_BackToLogin$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_BackToLogin$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw:bpWaB45r1qkJPgqYmZEd1g", "UBTConnect", "App_PIN", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UGk3vN9Q+kWubvvxxBgxlw:/NRWebFlows.nNfN+O0Nd0iiUZeo8OglHw/NodesShownInESpaceTree.UGk3vN9Q+kWubvvxxBgxlw:eybzOGXao4gllT9oSV81iQ", "UBTConnect", "PINRegister", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UGk3vN9Q+kWubvvxxBgxlw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nNfN+O0Nd0iiUZeo8OglHw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_App_PINController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_PIN.PINRegister.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"nyP_2SKJHUS7ykxO+byohw": {
getter: function (varBag, idService) {
return varBag.model.variables.useOverlayVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FpEaSN+84UK4ONqeM2HW8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"A0M8QM6U1UW+jShd+jtRCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"fWLWc9XpUkKRlp2VximLGw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"e62gND+AN0emIrf9VGdjfQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
