define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$model", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Options", "optionsVar", "Options", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SelectionOption_ItemList());
}, false, UBTConnectModel.SelectionOption_ItemList), 
this.attr("Filter_Common_Control_Choice", "filter_Common_Control_ChoiceIn", "Filter_Common_Control_Choice", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ChoiceRec());
}, false, UBTConnectModel.Filter_Common_Control_ChoiceRec), 
this.attr("_filter_Common_Control_ChoiceInDataFetchStatus", "_filter_Common_Control_ChoiceInDataFetchStatus", "_filter_Common_Control_ChoiceInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Filter_Common_Control_Choice" in inputs) {
this.variables.filter_Common_Control_ChoiceIn = inputs.Filter_Common_Control_Choice;
if("_filter_Common_Control_ChoiceInDataFetchStatus" in inputs) {
this.variables._filter_Common_Control_ChoiceInDataFetchStatus = inputs._filter_Common_Control_ChoiceInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item");
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$view", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_model, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_controller;
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
Options: model.getCachedValue(idService.getId("Choice.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
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
name: "Choice",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(((model.variables.filter_Common_Control_ChoiceIn.titleAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("fOkcPx5FU0Kme_jz1YSr7A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("ulGqGWEojk+C7amSkLuGtQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
ExtendedClasses: "text-align-left",
In_Text: model.variables.filter_Common_Control_ChoiceIn.titleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._filter_Common_Control_ChoiceInDataFetchStatus)
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._filter_Common_Control_ChoiceInDataFetchStatus), asPrimitiveValue(model.variables.filter_Common_Control_ChoiceIn.titleAttr)]
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, {
inputs: {
SelectionOption_ItemList: model.variables.optionsVar,
isMultiselect: false,
LastItem_StyleOptions: model.getCachedValue(idService.getId("7SfooChdF06AdF9WkgBk4g.LastItem_StyleOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
return rec;
}();
return rec;
}();
}),
Item_StyleOptions: model.getCachedValue(idService.getId("7SfooChdF06AdF9WkgBk4g.Item_StyleOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSelectionChange$Action: function (selectedItemsIn, clickedItemIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/SelectionOption_List OnSelectionChange");
return controller.onChange_Selection$Action(selectedItemsIn, clickedItemIdIn, controller.callContext(eventHandlerContext));
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.optionsVar), asPrimitiveValue(model.variables._filter_Common_Control_ChoiceInDataFetchStatus), asPrimitiveValue(model.variables.filter_Common_Control_ChoiceIn.titleAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$debugger", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_Debugger) {
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RWieJBQvZU+axjrr4DzPrg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UtqvzajqKESs_+g7sEkxnw/ClientActions.RWieJBQvZU+axjrr4DzPrg:NHcDqU_ou8T5oq5y0uim7w", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d509SZU8iEaucmgoKlQC8Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6+anK03bxE6yB+o1omu+8A", callContext.id);
// Execute Action: DefineOptions
controller._defineOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yQEKZouLlku60zAB7ZciDQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RWieJBQvZU+axjrr4DzPrg", callContext.id);
}

};
Controller.prototype._defineOptions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DefineOptions");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LSuMNeTHdk+JPpUvcLowkA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UtqvzajqKESs_+g7sEkxnw/ClientActions.LSuMNeTHdk+JPpUvcLowkA:7swfgXeih4oegwohVV97zw", "UBTConnect", "DefineOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ugyLqaImLkW+s9Hm5x6HPw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jb02IsThyUyDHnLiMFgRHg", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.optionsVar, callContext);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dYutvlrkYEOj6dS+kfYBcw", callContext.id) && ((model.variables.filter_Common_Control_ChoiceIn.noneLabelAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oyC5hDlbNUKGeqy4rpphng", callContext.id);
// Execute Action: None
OS.SystemActions.listAppend(model.variables.optionsVar, function () {
var rec = new UBTConnectLibraryModel.SelectionOption_ItemRec();
rec.idAttr = UBTConnectModel.staticEntities.choice.none;
rec.displayTextAttr = model.variables.filter_Common_Control_ChoiceIn.noneLabelAttr;
rec.isSelectedAttr = (model.variables.filter_Common_Control_ChoiceIn.selectedChoiceIdAttr === UBTConnectModel.staticEntities.choice.none);
return rec;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8w4ZfwWVMU23It5yS2liag", callContext.id);
// Execute Action: Yes
OS.SystemActions.listAppend(model.variables.optionsVar, function () {
var rec = new UBTConnectLibraryModel.SelectionOption_ItemRec();
rec.idAttr = UBTConnectModel.staticEntities.choice.yes;
rec.displayTextAttr = model.variables.filter_Common_Control_ChoiceIn.yesLabelAttr;
rec.isSelectedAttr = (model.variables.filter_Common_Control_ChoiceIn.selectedChoiceIdAttr === UBTConnectModel.staticEntities.choice.yes);
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B9wDAZkhkkiBYhlTqcW34A", callContext.id);
// Execute Action: No
OS.SystemActions.listAppend(model.variables.optionsVar, function () {
var rec = new UBTConnectLibraryModel.SelectionOption_ItemRec();
rec.idAttr = UBTConnectModel.staticEntities.choice.no;
rec.displayTextAttr = model.variables.filter_Common_Control_ChoiceIn.noLabelAttr;
rec.isSelectedAttr = (model.variables.filter_Common_Control_ChoiceIn.selectedChoiceIdAttr === UBTConnectModel.staticEntities.choice.no);
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:di2zF2T53kiL63PmaottIg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LSuMNeTHdk+JPpUvcLowkA", callContext.id);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xPr+NZF6EkSG5xMmU5ERGw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UtqvzajqKESs_+g7sEkxnw/ClientActions.xPr+NZF6EkSG5xMmU5ERGw:2ScwDfajHR_I_+B8Dz8P1g", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bQtGEBXbUEWZc+XaZc2N_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rZsF3Tb8SUq733WIML0kMw", callContext.id);
// Execute Action: DefineOptions
controller._defineOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LHI5ObusWEaXIQrm8kuT6A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xPr+NZF6EkSG5xMmU5ERGw", callContext.id);
}

};
Controller.prototype._onChange_Selection$Action = function (selectedItemsIn, clickedItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Selection");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.OnChange_Selection$vars"))());
vars.value.selectedItemsInLocal = selectedItemsIn.clone();
vars.value.clickedItemIdInLocal = clickedItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:F1IBgxlGV0yKRHWvHphJuQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UtqvzajqKESs_+g7sEkxnw/ClientActions.F1IBgxlGV0yKRHWvHphJuQ:H1NWufNJH5G0R8Ry_p2HCg", "UBTConnect", "OnChange_Selection", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rNcYTqPvm02wlnKFmjfutA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yoqvEviV206kkm_6kVVdsQ", callContext.id);
// Trigger Event: OnChange
return controller.onChange$Action(model.variables.filter_Common_Control_ChoiceIn.titleAttr, OS.BuiltinFunctions.textToIdentifier(vars.value.clickedItemIdInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_pAVejBQwkS_OdhbZrIixw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:F1IBgxlGV0yKRHWvHphJuQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:F1IBgxlGV0yKRHWvHphJuQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.OnChange_Selection$vars", [{
name: "SelectedItems",
attrName: "selectedItemsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.SelectionOption_ItemList();
},
complexType: UBTConnectModel.SelectionOption_ItemList
}, {
name: "ClickedItemId",
attrName: "clickedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.defineOptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._defineOptions$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onChange_Selection$Action = function (selectedItemsIn, clickedItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Selection$Action, callContext, selectedItemsIn, clickedItemIdIn);

};
Controller.prototype.onChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A:aO+UykmPPS6VEpIYdNjDCA", "UBTConnect", "App_CommonBlocks_Filter", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UtqvzajqKESs_+g7sEkxnw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UtqvzajqKESs_+g7sEkxnw:47MvBK7hnC3u27kW_GqdBA", "UBTConnect", "FilterSheet_OptionChoice_Item", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UtqvzajqKESs_+g7sEkxnw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionChoice_Item On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionChoice_Item On Parameters Changed");
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"3Yjpip+_GECZQGJKB5Hr5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedItemsInLocal;
}
},
"sawF5RjanUqw4F9e2cYFHQ": {
getter: function (varBag, idService) {
return varBag.vars.value.clickedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UeIm1NZBQEmcNc1fmXfqzQ": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsVar;
}
},
"M56LIOnZD0uiETqBIw_t_w": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_Common_Control_ChoiceIn;
}
},
"YCmZZCN_zEOHQKQsyPmFuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Choice"));
})(varBag.model, idService);
}
},
"WZqr6V0VZ0muuV6SO9Qq7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"fQVZ2tdW0UqlvfLYG_uETg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
