define("UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("StackButtonsVertically", "stackButtonsVerticallyIn", "StackButtonsVertically", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_stackButtonsVerticallyInDataFetchStatus", "_stackButtonsVerticallyInDataFetchStatus", "_stackButtonsVerticallyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("StackButtonsVertically" in inputs) {
this.variables.stackButtonsVerticallyIn = inputs.StackButtonsVertically;
if("_stackButtonsVerticallyInDataFetchStatus" in inputs) {
this.variables._stackButtonsVerticallyInDataFetchStatus = inputs._stackButtonsVerticallyInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Common_Blocks_PopupDialogs.Dialog_CustomChoice");
});
define("UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$model", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_model, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_controller, UBTConnectClientVariables, OSWidgets, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "App_Common_Blocks_PopupDialogs.Dialog_CustomChoice";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_controller;
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
style: model.getCachedValue(idService.getId("ULvM4lxCskm6dNB3JDo+9g.Style"), function () {
return ("connect-dialog-popup connect-dialog-popup--custom-choice" + ((model.variables.stackButtonsVerticallyIn) ? (" connect-dialog-popup--vertical-buttons") : ("")));
}, function () {
return model.variables.stackButtonsVerticallyIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._stackButtonsVerticallyInDataFetchStatus)
}, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
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
dialogHeader: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Ko7eTTPupUOJBtR4pAWOcw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Header,
_idProps: {
service: idService,
name: "Placeholder_Header"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
}
})];
}),
dialogBody: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("eLjWtyRpRk+JWo97ijruwA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.medium;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Body,
_idProps: {
service: idService,
name: "Placeholder_Body"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})];
}),
buttonLabel_Confirm: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_ButtonLabel,
_idProps: {
service: idService,
name: "Placeholder_ButtonLabel"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
buttonLabel_Dismiss: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_DismissButtonLabe,
_idProps: {
service: idService,
name: "Placeholder_DismissButtonLabe"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aNCkfMPHe0G71usPGtmFQw:/NRWebFlows.aNCkfMPHe0G71usPGtmFQw:CZKw43qiY3TqcnTnSU8qNg", "UBTConnect", "App_Common_Blocks_PopupDialogs", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:U2rVNrX74kuVIheg8XRC2w:/NRWebFlows.aNCkfMPHe0G71usPGtmFQw/NodesShownInESpaceTree.U2rVNrX74kuVIheg8XRC2w:cqro6T7C8dm1Srv0WFCtAQ", "UBTConnect", "Dialog_CustomChoice", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:U2rVNrX74kuVIheg8XRC2w", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aNCkfMPHe0G71usPGtmFQw", callContext.id);
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

define("UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"koCnrYt7w0Gn1wxFsW0YHg": {
getter: function (varBag, idService) {
return varBag.model.variables.stackButtonsVerticallyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HRG0++aphUCnJe7Urz8E9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"1qRp17we9UuwrLMyBQlfZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"VrCCr7OYE0Waip56O4e5rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"mSNB+uqoBkSIgwYaKR28Og": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"s+Q7IiYRrEOtuav0LE+fKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"jr40UReCkkCO_kGp2hS0sw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Body"));
})(varBag.model, idService);
}
},
"l6rm4zqEAkG00CYRAua8LA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"UynjDIz5EkiPAok_svfL8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ButtonLabel"));
})(varBag.model, idService);
}
},
"80zdWKzTxU2nC61yAYc+5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
},
"IRzdlCdwwU20FCKUJZTkHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DismissButtonLabe"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
