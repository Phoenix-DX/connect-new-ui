define("UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-kebab-menu";
}, false), 
this.attr("isEnable", "isEnableIn", "isEnable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_isEnableInDataFetchStatus", "_isEnableInDataFetchStatus", "_isEnableInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_DisableShare", "in_DisableShareIn", "In_DisableShare", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_DisableShareInDataFetchStatus", "_in_DisableShareInDataFetchStatus", "_in_DisableShareInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("isEnable" in inputs) {
this.variables.isEnableIn = inputs.isEnable;
if("_isEnableInDataFetchStatus" in inputs) {
this.variables._isEnableInDataFetchStatus = inputs._isEnableInDataFetchStatus;
}

}

if("In_DisableShare" in inputs) {
this.variables.in_DisableShareIn = inputs.In_DisableShare;
if("_in_DisableShareInDataFetchStatus" in inputs) {
this.variables._in_DisableShareInDataFetchStatus = inputs._in_DisableShareInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.KebabButtonMenu");
});
define("UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_model, UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.KebabButtonMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_controller;
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
ExtendedClasses: model.variables.mainContainerClassVar
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
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view, {
inputs: {
usePrimaryButon: true,
Position: UBTConnectLibraryModel.staticEntities.position.left,
In_ContextMenuOptions: model.getCachedValue(idService.getId("lPWUNg9q_kenNBChci3apg.In_ContextMenuOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContextMenuOptionsRec();
rec.hasSendGiftAttr = false;
rec.hasMarkAsReadAttr = false;
rec.hasShareAttr = !(model.variables.in_DisableShareIn);
rec.editAttr = function () {
var rec = new UBTConnectLibraryModel.TextBooleanRecord();
rec.hasEditAttr = true;
rec.labelAttr = "Edit Profile";
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_DisableShareIn;
}),
_in_ContextMenuOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DisableShareInDataFetchStatus),
isEnabled: model.variables.isEnableIn,
_isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnableInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Edit$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_Edit");
controller.edit$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Share$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_Share");
controller.share$Action(controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isEnableIn), asPrimitiveValue(model.variables._isEnableInDataFetchStatus), asPrimitiveValue(model.variables._in_DisableShareInDataFetchStatus), asPrimitiveValue(model.variables.in_DisableShareIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_Debugger) {
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

Controller.prototype.edit$Action = function () {
return Promise.resolve();
};
Controller.prototype.share$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:4wLhWrx+MkK9GlHuC3mzvg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.4wLhWrx+MkK9GlHuC3mzvg:U4RRBtpEcmivDBe1kYAXYQ", "UBTConnectLibrary", "KebabButtonMenu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:4wLhWrx+MkK9GlHuC3mzvg", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg", callContext.id);
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Ps3fdb6K5k25hmfZ1HDb0Q": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GDTmrS4WOEec7yfcTAZKSA": {
getter: function (varBag, idService) {
return varBag.model.variables.isEnableIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vVmQw6nFlE2TdQrh7Ibkhg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_DisableShareIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"shP3zY7z2UGvQIjCEEbwoA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
