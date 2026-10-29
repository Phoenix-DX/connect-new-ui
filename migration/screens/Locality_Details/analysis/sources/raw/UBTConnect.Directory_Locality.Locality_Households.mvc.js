define("UBTConnect.Directory_Locality.Locality_Households.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_LocalityId", "in_LocalityIdIn", "In_LocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_BretherenCount", "in_BretherenCountIn", "In_BretherenCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_BretherenCountInDataFetchStatus", "_in_BretherenCountInDataFetchStatus", "_in_BretherenCountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholdCount", "in_HouseholdCountIn", "In_HouseholdCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_HouseholdCountInDataFetchStatus", "_in_HouseholdCountInDataFetchStatus", "_in_HouseholdCountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_LocalityId" in inputs) {
this.variables.in_LocalityIdIn = inputs.In_LocalityId;
if("_in_LocalityIdInDataFetchStatus" in inputs) {
this.variables._in_LocalityIdInDataFetchStatus = inputs._in_LocalityIdInDataFetchStatus;
}

}

if("In_BretherenCount" in inputs) {
this.variables.in_BretherenCountIn = inputs.In_BretherenCount;
if("_in_BretherenCountInDataFetchStatus" in inputs) {
this.variables._in_BretherenCountInDataFetchStatus = inputs._in_BretherenCountInDataFetchStatus;
}

}

if("In_HouseholdCount" in inputs) {
this.variables.in_HouseholdCountIn = inputs.In_HouseholdCount;
if("_in_HouseholdCountInDataFetchStatus" in inputs) {
this.variables._in_HouseholdCountInDataFetchStatus = inputs._in_HouseholdCountInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Locality.Locality_Households");
});
define("UBTConnect.Directory_Locality.Locality_Households.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.Locality_Households.mvc$model", "UBTConnect.Directory_Locality.Locality_Households.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Locality_Locality_Households_mvc_model, UBTConnect_Directory_Locality_Locality_Households_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_view) {
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
        View.displayName = "Directory_Locality.Locality_Households";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Locality_Locality_Households_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Locality_Locality_Households_mvc_controller;
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
Options: model.getCachedValue(idService.getId("oVYoNvrfJkqNm+iikhpTcw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral4;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("EmjHXsgy20GBGKGng4yNVQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
ExtendedClasses: "locality-count",
Options: model.getCachedValue(idService.getId("LocalityCounter.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
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
name: "LocalityCounter",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("BrethrenCounter.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
rec.rightSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "locality-brethren-count"
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
name: "BrethrenCounter",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: ((model.variables.in_BretherenCountIn).toString() + " Brethren"),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BretherenCountInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("Ffw6su_9tk6B6PLSH0410w.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.personFill,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.purple
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("HouseholdsCounter.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
rec.leftSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
name: "HouseholdsCounter",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: ((model.variables.in_HouseholdCountIn).toString() + " Households"),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdCountInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("cYC++iC3E06NhHMpOYTzHw.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
uuid: "7",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.household
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
uuid: "8",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_HouseholdCountInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdCountIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HouseholdCountIn), asPrimitiveValue(model.variables._in_HouseholdCountInDataFetchStatus), asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HouseholdCountIn), asPrimitiveValue(model.variables._in_HouseholdCountInDataFetchStatus), asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
}), React.createElement(UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_view, {
inputs: {
In_LocalityId: model.variables.in_LocalityIdIn,
_in_LocalityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocalityIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_NavigateToHouseholdDetails$Action: function (event_HouseholdIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/Locality_Households_HouseholdList Event_NavigateToHouseholdDetails");
controller.event_NavigateToHouseholdDetails$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_LocalityIdIn), asPrimitiveValue(model.variables.in_HouseholdCountIn), asPrimitiveValue(model.variables._in_LocalityIdInDataFetchStatus), asPrimitiveValue(model.variables._in_HouseholdCountInDataFetchStatus), asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Locality.Locality_Households.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.Locality_Households.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_Locality_Households_mvc_Debugger) {
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

Controller.prototype.event_NavigateToHouseholdDetails$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:pjuDw7rfqU2P1+4BfmKJjw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.pjuDw7rfqU2P1+4BfmKJjw:QcSIgTflwGBHw1_93ZHKKA", "UBTConnect", "Locality_Households", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pjuDw7rfqU2P1+4BfmKJjw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
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

define("UBTConnect.Directory_Locality.Locality_Households.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"oaYhLEBeH0mmZ6zWEqIaKg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LocalityIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"92jiG_A6ME2Pg0ESl2zn0g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BretherenCountIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ECZXXBZATUegC9lV13P5SQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdCountIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"cPUBtORkF0KPp11sQrK9yQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4eGhahPtAES9a19MF1fXbw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ausGcOpT+0SJei6yiiNI2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LocalityCounter"));
})(varBag.model, idService);
}
},
"ENv+ObyyHU+ELn+2bB4vPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"oWqXd0pX60SIxiuxJ7C+IQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BrethrenCounter"));
})(varBag.model, idService);
}
},
"IbL4rRj2uUCjY2f9IUAWpw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"E0joLA+Q6Ead20qXXOxjPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"rmf_JKpov06U+24z42MjvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HouseholdsCounter"));
})(varBag.model, idService);
}
},
"TjXZQTokgEqTp8cO6eXqUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"XgJxOpC1E0uEqGEotSozvg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
