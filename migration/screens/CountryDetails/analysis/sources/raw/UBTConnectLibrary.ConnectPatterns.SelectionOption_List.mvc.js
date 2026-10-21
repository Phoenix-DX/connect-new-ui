define("UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.controller$GetFlagURLByCountryCode", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$SelectionOption_ItemList", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$Merge_StyleOptions"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LastItem_Merged_StyleOptions", "lastItem_Merged_StyleOptionsVar", "LastItem_Merged_StyleOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec());
}, false, UBTConnectLibraryModel.ContainerOptionsRec), 
this.attr("SelectionOption_ItemList", "selectionOption_ItemListIn", "SelectionOption_ItemList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SelectionOption_ItemList());
}, false, UBTConnectLibraryModel.SelectionOption_ItemList), 
this.attr("_selectionOption_ItemListInDataFetchStatus", "_selectionOption_ItemListInDataFetchStatus", "_selectionOption_ItemListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isMultiselect", "isMultiselectIn", "isMultiselect", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isMultiselectInDataFetchStatus", "_isMultiselectInDataFetchStatus", "_isMultiselectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Item_StyleOptions", "item_StyleOptionsIn", "Item_StyleOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec());
}, false, UBTConnectLibraryModel.ContainerOptionsRec), 
this.attr("_item_StyleOptionsInDataFetchStatus", "_item_StyleOptionsInDataFetchStatus", "_item_StyleOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("LastItem_StyleOptions", "lastItem_StyleOptionsIn", "LastItem_StyleOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec());
}, false, UBTConnectLibraryModel.ContainerOptionsRec), 
this.attr("_lastItem_StyleOptionsInDataFetchStatus", "_lastItem_StyleOptionsInDataFetchStatus", "_lastItem_StyleOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IconSizeId", "iconSizeIdIn", "IconSizeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_IconSize.nonStandard_16;
}, false), 
this.attr("_iconSizeIdInDataFetchStatus", "_iconSizeIdInDataFetchStatus", "_iconSizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("SelectionOption_ItemList" in inputs) {
this.variables.selectionOption_ItemListIn = inputs.SelectionOption_ItemList;
if("_selectionOption_ItemListInDataFetchStatus" in inputs) {
this.variables._selectionOption_ItemListInDataFetchStatus = inputs._selectionOption_ItemListInDataFetchStatus;
}

}

if("isMultiselect" in inputs) {
this.variables.isMultiselectIn = inputs.isMultiselect;
if("_isMultiselectInDataFetchStatus" in inputs) {
this.variables._isMultiselectInDataFetchStatus = inputs._isMultiselectInDataFetchStatus;
}

}

if("Item_StyleOptions" in inputs) {
this.variables.item_StyleOptionsIn = inputs.Item_StyleOptions;
if("_item_StyleOptionsInDataFetchStatus" in inputs) {
this.variables._item_StyleOptionsInDataFetchStatus = inputs._item_StyleOptionsInDataFetchStatus;
}

}

if("LastItem_StyleOptions" in inputs) {
this.variables.lastItem_StyleOptionsIn = inputs.LastItem_StyleOptions;
if("_lastItem_StyleOptionsInDataFetchStatus" in inputs) {
this.variables._lastItem_StyleOptionsInDataFetchStatus = inputs._lastItem_StyleOptionsInDataFetchStatus;
}

}

if("IconSizeId" in inputs) {
this.variables.iconSizeIdIn = inputs.IconSizeId;
if("_iconSizeIdInDataFetchStatus" in inputs) {
this.variables._iconSizeIdInDataFetchStatus = inputs._iconSizeIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.SelectionOption_List");
});
define("UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$model", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.controller$GetFlagURLByCountryCode", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$SelectionOption_ItemList", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$Merge_StyleOptions"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_model, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.SelectionOption_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.selectionOption_ItemListIn,
style: "list list-group ubt-options-list",
tag: "div",
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectionOption_ItemListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
ExtendedClasses: "",
Options: model.getCachedValue(idService.getId("Yhe302TwH0eRPsJEDbJPxw.Options"), function () {
return ((((model.variables.selectionOption_ItemListIn.getCurrentRowNumber(callContext.iterationContext) + 1) === model.variables.selectionOption_ItemListIn.length)) ? (model.variables.lastItem_Merged_StyleOptionsVar) : (model.variables.item_StyleOptionsIn));
}, function () {
return model.variables.selectionOption_ItemListIn.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.selectionOption_ItemListIn.length;
}, function () {
return model.variables.lastItem_Merged_StyleOptionsVar;
}, function () {
return model.variables.item_StyleOptionsIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectionOption_ItemListInDataFetchStatus, model.variables._item_StyleOptionsInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
return controller.selectionOption_ItemOptionOnChange$Action(controller.callContext(eventHandlerContext));
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("Ou0b9i9onE6b4HySr1jBnw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
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
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: left;"
},
style: "text-align-left",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((((model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).iconIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())) || ((model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).countryCodeAttr) !== (""))), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).displayTextAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectionOption_ItemListInDataFetchStatus),
SpacingSize: UBTConnectLibraryModel.staticEntities.uBT_Size.small,
TextOptions: model.getCachedValue(idService.getId("KU1pDQNOI0i_aLiU2UTvvQ.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = OS.BuiltinFunctions.nullTextIdentifier();
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [$if((model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).countryCodeAttr === ""), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).iconIdAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectionOption_ItemListInDataFetchStatus),
In_SizeId: model.variables.iconSizeIdIn,
_in_SizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconSizeIdInDataFetchStatus),
In_ColorId: model.getCachedValue(idService.getId("WAG3er6Xu0qs6c3WAfu6mQ.In_ColorId"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, {
inputs: {
FallbackOptions: model.getCachedValue(idService.getId("gYdkvCIB9k2aM8DdKQOirQ.FallbackOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
rec.iconIdAttr = model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).iconIdAttr;
return rec;
}();
}, function () {
return model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).iconIdAttr;
}),
_fallbackOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectionOption_ItemListInDataFetchStatus),
ExtendedClass: "country-flag",
In_BorderOptions: model.getCachedValue(idService.getId("gYdkvCIB9k2aM8DdKQOirQ.In_BorderOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ImageBorderOptionsRec();
rec.borderRadiusAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.circle;
rec.borderColorIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5;
rec.borderSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_ImageSize: model.getCachedValue(idService.getId("gYdkvCIB9k2aM8DdKQOirQ.In_ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.extraSmall_32;
rec.widthAttr = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square;
return rec;
}();
}),
ImageURL: model.getCachedValue(idService.getId("gYdkvCIB9k2aM8DdKQOirQ.ImageURL"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getFlagURLByCountryCode$Action(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).countryCodeAttr, callContext).out_CountryFlagURLOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).countryCodeAttr;
}),
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectionOption_ItemListInDataFetchStatus)
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.iconSizeIdIn), asPrimitiveValue(model.variables._iconSizeIdInDataFetchStatus), asPrimitiveValue(model.variables._selectionOption_ItemListInDataFetchStatus), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).iconIdAttr), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).countryCodeAttr)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("F0uLF+sEa0OUZuwVEcXOUw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = OS.BuiltinFunctions.nullTextIdentifier();
return rec;
}();
}),
In_Text: model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).displayTextAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectionOption_ItemListInDataFetchStatus)
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}))];
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
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isMultiselectIn, false, this, function () {
return [$if(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).isSelectedAttr, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.checkboxFill,
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.primary
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
uuid: "9",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.checkboxOutlineBlank,
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5
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
uuid: "10",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [$if(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).isSelectedAttr, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.radioChecked,
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.primary
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
uuid: "11",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.radioUnchecked
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
uuid: "12",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isMultiselectIn), asPrimitiveValue(model.variables.iconSizeIdIn), asPrimitiveValue(model.variables._isMultiselectInDataFetchStatus), asPrimitiveValue(model.variables._iconSizeIdInDataFetchStatus), asPrimitiveValue(model.variables._selectionOption_ItemListInDataFetchStatus), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).isSelectedAttr), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).displayTextAttr), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).iconIdAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isMultiselectIn), asPrimitiveValue(model.variables.iconSizeIdIn), asPrimitiveValue(model.variables._isMultiselectInDataFetchStatus), asPrimitiveValue(model.variables._iconSizeIdInDataFetchStatus), asPrimitiveValue(model.variables._selectionOption_ItemListInDataFetchStatus), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).isSelectedAttr), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).displayTextAttr), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).iconIdAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.isMultiselectIn), asPrimitiveValue(model.variables.iconSizeIdIn), asPrimitiveValue(model.variables._isMultiselectInDataFetchStatus), asPrimitiveValue(model.variables._iconSizeIdInDataFetchStatus), asPrimitiveValue(model.variables._item_StyleOptionsInDataFetchStatus), asPrimitiveValue(model.variables._selectionOption_ItemListInDataFetchStatus), asPrimitiveValue(model.variables.item_StyleOptionsIn), asPrimitiveValue(model.variables.lastItem_Merged_StyleOptionsVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$debugger", "UBTConnectLibrary.controller$GetFlagURLByCountryCode", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$SelectionOption_ItemList", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$Merge_StyleOptions"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_Debugger) {
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
Controller.prototype._selectionOption_ItemOptionOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SelectionOption_ItemOptionOnChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.SelectionOption_List.SelectionOption_ItemOptionOnChange$vars"))());
var listDuplicateVar = new OS.DataTypes.VariableHolder();
var listFilterVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listDuplicateVar = listDuplicateVar;
varBag.listFilterVar = listFilterVar;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:mFUeSGuOTkSe4f6UsvrseA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.4M6IAt6xrUu766i2933NLg/ClientActions.mFUeSGuOTkSe4f6UsvrseA:zsrZMtsWgUpr8RE48rcdoQ", "UBTConnectLibrary", "SelectionOption_ItemOptionOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5XvmNIqpP0yA_tiysXjgyA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Hw91ffNAp0iF5rtmce32yA", callContext.id);
// CurrentClickedId = SelectionOption_ItemList.Current.Id
vars.value.currentClickedIdVar = model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).idAttr;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ty0rxbvBBk+lYVLc_E1eSg", callContext.id) && model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).isEnabledAttr)) {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rPDX6mvmlk+04YkypvUhdw", callContext.id) && model.variables.isMultiselectIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eyVd3VLrvEasQVvDdsOSlw", callContext.id);
// SelectionOption_ItemList.Current.isSelected = notSelectionOption_ItemList.Current.isSelected
model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).isSelectedAttr = !(model.variables.selectionOption_ItemListIn.getCurrent(callContext.iterationContext).isSelectedAttr);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EbpMlf+UcUio0wob8aN9ow", callContext.id);
// Execute Action: ListDuplicate
listDuplicateVar.value = OS.SystemActions.listDuplicate(model.variables.selectionOption_ItemListIn, callContext);

// Foreach ListDuplicate.DuplicatedList
callContext.iterationContext.registerIterationStart(listDuplicateVar.value.duplicatedListOut);
try {var duplicatedListIterator = callContext.iterationContext.getIterator(listDuplicateVar.value.duplicatedListOut);
var duplicatedListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kfyHMdveXk2gVk8hDQ9I5A", callContext.id) && (duplicatedListIndex < listDuplicateVar.value.duplicatedListOut.length))) {
duplicatedListIterator.currentRowNumber = duplicatedListIndex;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PrPZvg96WkKLk73+iI43zw", callContext.id);
// SelectionOption_ItemList[ListDuplicate.DuplicatedList.CurrentRowNumber].isSelected = ListDuplicate.DuplicatedList.Current.Id = CurrentClickedId
model.variables.selectionOption_ItemListIn.getItem(listDuplicateVar.value.duplicatedListOut.getCurrentRowNumber(callContext.iterationContext)).isSelectedAttr = (listDuplicateVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()).idAttr === vars.value.currentClickedIdVar);
duplicatedListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listDuplicateVar.value.duplicatedListOut);
}

}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5RBT1UtggkemUZk2qgCGCQ", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.selectionOption_ItemListIn, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:i0C2IjRZbUmY35gzcUQOJQ", callContext.id);
// Trigger Event: OnSelectionChange
return controller.onSelectionChange$Action(listFilterVar.value.filteredListOut, vars.value.currentClickedIdVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jJUKGwlmCkaqR_1N7yrhow", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:T6uVgu5Z7Uqd24NKtweCHA", callContext.id);
// Trigger Event: NotEnabledOnClick
return controller.notEnabledOnClick$Action(vars.value.currentClickedIdVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YDGDfyJm9E+YBBGESpTrhw", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:mFUeSGuOTkSe4f6UsvrseA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:mFUeSGuOTkSe4f6UsvrseA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.SelectionOption_List.SelectionOption_ItemOptionOnChange$vars", [{
name: "CurrentClickedId",
attrName: "currentClickedIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ItemIndex",
attrName: "itemIndexVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:uPA+akOyO0uOYF3QRu+1Rg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.4M6IAt6xrUu766i2933NLg/ClientActions.uPA+akOyO0uOYF3QRu+1Rg:kmFS8_EgIevvPUfb_0GTxQ", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZLuL_VfFokerEd+UmMyO6w", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FgfLFhug4k2b24Uv6I3itw", callContext.id);
// Execute Action: GetLastStyleOption
controller._getLastStyleOption$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:namFEWXU0Em6vocbK0sUlg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:uPA+akOyO0uOYF3QRu+1Rg", callContext.id);
}

};
Controller.prototype._getLastStyleOption$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetLastStyleOption");
callContext = controller.callContext(callContext);
var merge_StyleOptionsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.merge_StyleOptionsVar = merge_StyleOptionsVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:JvmWz2DVFkqINMuK7895Lw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.4M6IAt6xrUu766i2933NLg/ClientActions.JvmWz2DVFkqINMuK7895Lw:5kfawP6TTsFT7bn0anBWFA", "UBTConnectLibrary", "GetLastStyleOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PHoAFv94TESaVYpo+CAfmg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bngyNP0xX0yo6uj83tPIkg", callContext.id);
// Execute Action: Merge_StyleOptions
merge_StyleOptionsVar.value = UBTConnectLibraryController.default.merge_StyleOptions$Action(model.variables.item_StyleOptionsIn, model.variables.lastItem_StyleOptionsIn, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:H0pWhKTOyEO1E0OYoiS3Qg", callContext.id);
// LastItem_Merged_StyleOptions = Merge_StyleOptions.Result_StyleOptions
model.variables.lastItem_Merged_StyleOptionsVar = merge_StyleOptionsVar.value.result_StyleOptionsOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fIHnQUXF7U+K+KuC9xm+HQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:JvmWz2DVFkqINMuK7895Lw", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:e7fU4WWGZkC81GNNP+Nu_A:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.4M6IAt6xrUu766i2933NLg/ClientActions.e7fU4WWGZkC81GNNP+Nu_A:CbCyaWZW7+uDT4oh1qMQAg", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uwDqwbmcnUijuVeq84BrZQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KhV20o2si0aGuJUnVymHug", callContext.id);
// Execute Action: GetLastStyleOption
controller._getLastStyleOption$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ru53_T3HA0yqgH1ZF_sJ7g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:e7fU4WWGZkC81GNNP+Nu_A", callContext.id);
}

};

Controller.prototype.selectionOption_ItemOptionOnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectionOption_ItemOptionOnChange$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.getLastStyleOption$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLastStyleOption$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.notEnabledOnClick$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSelectionChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:4M6IAt6xrUu766i2933NLg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.4M6IAt6xrUu766i2933NLg:SjVLFq82iMBJcTKiiJ7kmw", "UBTConnectLibrary", "SelectionOption_List", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:4M6IAt6xrUu766i2933NLg", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/SelectionOption_List On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/SelectionOption_List On Parameters Changed");
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"FlvE7qYDJ0exa+Hyog2_9A": {
getter: function (varBag, idService) {
return varBag.vars.value.currentClickedIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ikLOF1CLzUeOKNYL1C1q2A": {
getter: function (varBag, idService) {
return varBag.vars.value.itemIndexVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"EbpMlf+UcUio0wob8aN9ow": {
getter: function (varBag, idService) {
return varBag.listDuplicateVar.value;
}
},
"5RBT1UtggkemUZk2qgCGCQ": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"bngyNP0xX0yo6uj83tPIkg": {
getter: function (varBag, idService) {
return varBag.merge_StyleOptionsVar.value;
}
},
"++Gdxgw_6USTy7OgWjDG3w": {
getter: function (varBag, idService) {
return varBag.model.variables.lastItem_Merged_StyleOptionsVar;
}
},
"OrXb305xTUeF1h_R0r_jGg": {
getter: function (varBag, idService) {
return varBag.model.variables.selectionOption_ItemListIn;
}
},
"5kRkVHy9K0y44W_p_bj++Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isMultiselectIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4deaMEsc+UaT6ahJIb99OQ": {
getter: function (varBag, idService) {
return varBag.model.variables.item_StyleOptionsIn;
}
},
"hjV1CUUi50KLqL6GNOCt2Q": {
getter: function (varBag, idService) {
return varBag.model.variables.lastItem_StyleOptionsIn;
}
},
"ithkqofunE2TuF+3p2XkLg": {
getter: function (varBag, idService) {
return varBag.model.variables.iconSizeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"au6rWn_nEkmQbu30xijvDw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"5iiPcbGoI0mngJmf3gJZKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"ADhYMCmHykyY_dW_duRSHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasIconOrCountry"));
})(varBag.model, idService);
}
},
"oopEu7Jo70630GeGUKrj4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"u2XJlaAUZECwvPTu9YsqcA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DoesntHaveCountry"));
})(varBag.model, idService);
}
},
"HicoWQZ5LEWuhXCot8KZsA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"Ns0W3WojXUC0V9TzfVAa1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsCheckbox"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
