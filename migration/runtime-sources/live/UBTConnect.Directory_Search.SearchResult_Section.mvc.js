define("UBTConnect.Directory_Search.SearchResult_Section.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Search_CS.model", "UBTConnectLibrary.model", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$model", "Connect_Search_CS.model$SearchResultRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Search_CS", "UBTConnect.model$SearchResultList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, Connect_Search_CSModel, UBTConnectLibraryModel, UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Utils_CW_Search_SearchResult_Item_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Type", "typeIn", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Items", "itemsIn", "Items", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SearchResultList());
}, false, UBTConnectModel.SearchResultList), 
this.attr("_itemsInDataFetchStatus", "_itemsInDataFetchStatus", "_itemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideSeparator", "hideSeparatorIn", "HideSeparator", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideSeparatorInDataFetchStatus", "_hideSeparatorInDataFetchStatus", "_hideSeparatorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SearchTerm", "searchTermIn", "SearchTerm", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_searchTermInDataFetchStatus", "_searchTermInDataFetchStatus", "_searchTermInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Search_SearchResult_Item_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Type" in inputs) {
this.variables.typeIn = inputs.Type;
if("_typeInDataFetchStatus" in inputs) {
this.variables._typeInDataFetchStatus = inputs._typeInDataFetchStatus;
}

}

if("Items" in inputs) {
this.variables.itemsIn = inputs.Items;
if("_itemsInDataFetchStatus" in inputs) {
this.variables._itemsInDataFetchStatus = inputs._itemsInDataFetchStatus;
}

}

if("HideSeparator" in inputs) {
this.variables.hideSeparatorIn = inputs.HideSeparator;
if("_hideSeparatorInDataFetchStatus" in inputs) {
this.variables._hideSeparatorInDataFetchStatus = inputs._hideSeparatorInDataFetchStatus;
}

}

if("SearchTerm" in inputs) {
this.variables.searchTermIn = inputs.SearchTerm;
if("_searchTermInDataFetchStatus" in inputs) {
this.variables._searchTermInDataFetchStatus = inputs._searchTermInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Search.SearchResult_Section");
});
define("UBTConnect.Directory_Search.SearchResult_Section.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Search_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Search.SearchResult_Section.mvc$model", "UBTConnect.Directory_Search.SearchResult_Section.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$view", "Connect_Search_CS.model$SearchResultRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Search_CS", "UBTConnect.model$SearchResultList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Search_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Search_SearchResult_Section_mvc_model, UBTConnect_Directory_Search_SearchResult_Section_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view) {
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
        View.displayName = "Directory_Search.SearchResult_Section";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Search_SearchResult_Section_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Search_SearchResult_Section_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.hideSeparatorIn, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("W3A1h7m30kynnNoOQYpIGQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = ((model.variables.hideSeparatorIn) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (UBTConnectModel.staticEntities.uBT_Size.base));
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
}, function () {
return model.variables.hideSeparatorIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideSeparatorInDataFetchStatus)
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
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("dF6C0xZtFUavJwZ5IMedQQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("bRFAdH4JtkqsE0fsS_l6pA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.bold;
return rec;
}();
}),
In_Text: model.variables.typeIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._typeInDataFetchStatus),
In_PaddingOptions: model.getCachedValue(idService.getId("bRFAdH4JtkqsE0fsS_l6pA.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("FMd2mnyva0G4Qzhx2LLJEw.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("FMd2mnyva0G4Qzhx2LLJEw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_Text: ((model.variables.itemsIn.length).toString() + " Results"),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._itemsInDataFetchStatus)
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
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.itemsIn.length), asPrimitiveValue(model.variables._itemsInDataFetchStatus), asPrimitiveValue(model.variables._typeInDataFetchStatus), asPrimitiveValue(model.variables.typeIn)]
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.itemsIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._itemsInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view, {
inputs: {
In_SearchResult: model.variables.itemsIn.getCurrent(callContext.iterationContext),
_in_SearchResultInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._itemsInDataFetchStatus),
In_SearchTerm: model.variables.searchTermIn,
_in_SearchTermInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._searchTermInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function (searchResultIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Search/SearchResult_Item OnClick");
controller.onItemClick$Action(searchResultIn, controller.callContext(eventHandlerContext));
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
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Actions: PlaceholderContent.Empty
},
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.searchTermIn), asPrimitiveValue(model.variables._searchTermInDataFetchStatus), asPrimitiveValue(model.variables._itemsInDataFetchStatus)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchTermIn), asPrimitiveValue(model.variables.itemsIn), asPrimitiveValue(model.variables._searchTermInDataFetchStatus), asPrimitiveValue(model.variables._itemsInDataFetchStatus), asPrimitiveValue(model.variables._typeInDataFetchStatus), asPrimitiveValue(model.variables.typeIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Search.SearchResult_Section.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Search_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Search.SearchResult_Section.mvc$debugger", "Connect_Search_CS.model$SearchResultRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Search_CS", "UBTConnect.model$SearchResultList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Search_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Search_SearchResult_Section_mvc_Debugger) {
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

Controller.prototype.onItemClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SL8K4QWPmUuYK_Un+Uh_LA:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA:3Wo_76LXOCU7x0L+1+Cyxw", "UBTConnect", "Directory_Search", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_hLchvIyH0SzXF2Shx4Euw:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree._hLchvIyH0SzXF2Shx4Euw:UnlMChR7XGKJbCjnPfPIlw", "UBTConnect", "SearchResult_Section", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_hLchvIyH0SzXF2Shx4Euw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SL8K4QWPmUuYK_Un+Uh_LA", callContext.id);
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

define("UBTConnect.Directory_Search.SearchResult_Section.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"CTiuAkmDnEGiGNNrNfuviw": {
getter: function (varBag, idService) {
return varBag.model.variables.typeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ANLFSLaNRk6yoBvbyBoZFg": {
getter: function (varBag, idService) {
return varBag.model.variables.itemsIn;
}
},
"+Z271Ml56EqeYvrChggZkw": {
getter: function (varBag, idService) {
return varBag.model.variables.hideSeparatorIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JealtlPtAkCFEv6weY87PA": {
getter: function (varBag, idService) {
return varBag.model.variables.searchTermIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wYaD4tPMz0mIEgWdKo_bpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideSeparator_"));
})(varBag.model, idService);
}
},
"FOyC2RgQOUOBplcS+vjCiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"kStperw7Z0KI_5qdTOW+Kg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"pRqKfJyeNkmneTUJ0cXT+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"+6vuISHJMkiKQ71ucK2P1w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Actions"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
