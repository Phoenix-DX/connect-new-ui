define("UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect_Search_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Search_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect_Utils.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$App_Subscription_NavigateToUpgrade"], function (OutSystems, UBTConnect_UtilsModel, Connect_Search_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ImageShapeId", "imageShapeIdVar", "ImageShapeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ImageHeightId", "imageHeightIdVar", "ImageHeightId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ImageWidthId", "imageWidthIdVar", "ImageWidthId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_SearchResult", "in_SearchResultIn", "In_SearchResult", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Search_CSModel.SearchResultRec());
}, false, Connect_Search_CSModel.SearchResultRec), 
this.attr("_in_SearchResultInDataFetchStatus", "_in_SearchResultInDataFetchStatus", "_in_SearchResultInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SearchTerm", "in_SearchTermIn", "In_SearchTerm", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SearchTermInDataFetchStatus", "_in_SearchTermInDataFetchStatus", "_in_SearchTermInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageHeightId", "in_ImageHeightIdIn", "In_ImageHeightId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ImageHeightIdInDataFetchStatus", "_in_ImageHeightIdInDataFetchStatus", "_in_ImageHeightIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageWidthId", "in_ImageWidthIdIn", "In_ImageWidthId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ImageWidthIdInDataFetchStatus", "_in_ImageWidthIdInDataFetchStatus", "_in_ImageWidthIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowSubscriptionWarning", "in_ShowSubscriptionWarningIn", "In_ShowSubscriptionWarning", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowSubscriptionWarningInDataFetchStatus", "_in_ShowSubscriptionWarningInDataFetchStatus", "_in_ShowSubscriptionWarningInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageURL", "in_ImageURLIn", "In_ImageURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ImageURLInDataFetchStatus", "_in_ImageURLInDataFetchStatus", "_in_ImageURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TitleFontSize", "in_TitleFontSizeIn", "In_TitleFontSize", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
}, false), 
this.attr("_in_TitleFontSizeInDataFetchStatus", "_in_TitleFontSizeInDataFetchStatus", "_in_TitleFontSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_LocationTopPadding", "in_LocationTopPaddingIn", "In_LocationTopPadding", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
}, false), 
this.attr("_in_LocationTopPaddingInDataFetchStatus", "_in_LocationTopPaddingInDataFetchStatus", "_in_LocationTopPaddingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_SearchResult" in inputs) {
this.variables.in_SearchResultIn = inputs.In_SearchResult;
if("_in_SearchResultInDataFetchStatus" in inputs) {
this.variables._in_SearchResultInDataFetchStatus = inputs._in_SearchResultInDataFetchStatus;
}

}

if("In_SearchTerm" in inputs) {
this.variables.in_SearchTermIn = inputs.In_SearchTerm;
if("_in_SearchTermInDataFetchStatus" in inputs) {
this.variables._in_SearchTermInDataFetchStatus = inputs._in_SearchTermInDataFetchStatus;
}

}

if("In_ImageHeightId" in inputs) {
this.variables.in_ImageHeightIdIn = inputs.In_ImageHeightId;
if("_in_ImageHeightIdInDataFetchStatus" in inputs) {
this.variables._in_ImageHeightIdInDataFetchStatus = inputs._in_ImageHeightIdInDataFetchStatus;
}

}

if("In_ImageWidthId" in inputs) {
this.variables.in_ImageWidthIdIn = inputs.In_ImageWidthId;
if("_in_ImageWidthIdInDataFetchStatus" in inputs) {
this.variables._in_ImageWidthIdInDataFetchStatus = inputs._in_ImageWidthIdInDataFetchStatus;
}

}

if("In_ShowSubscriptionWarning" in inputs) {
this.variables.in_ShowSubscriptionWarningIn = inputs.In_ShowSubscriptionWarning;
if("_in_ShowSubscriptionWarningInDataFetchStatus" in inputs) {
this.variables._in_ShowSubscriptionWarningInDataFetchStatus = inputs._in_ShowSubscriptionWarningInDataFetchStatus;
}

}

if("In_ImageURL" in inputs) {
this.variables.in_ImageURLIn = inputs.In_ImageURL;
if("_in_ImageURLInDataFetchStatus" in inputs) {
this.variables._in_ImageURLInDataFetchStatus = inputs._in_ImageURLInDataFetchStatus;
}

}

if("In_TitleFontSize" in inputs) {
this.variables.in_TitleFontSizeIn = inputs.In_TitleFontSize;
if("_in_TitleFontSizeInDataFetchStatus" in inputs) {
this.variables._in_TitleFontSizeInDataFetchStatus = inputs._in_TitleFontSizeInDataFetchStatus;
}

}

if("In_LocationTopPadding" in inputs) {
this.variables.in_LocationTopPaddingIn = inputs.In_LocationTopPadding;
if("_in_LocationTopPaddingInDataFetchStatus" in inputs) {
this.variables._in_LocationTopPaddingInDataFetchStatus = inputs._in_LocationTopPaddingInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_Search.SearchResult_Item");
});
define("UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect_Search_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$model", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Search_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect_Utils.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$App_Subscription_NavigateToUpgrade"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect_Search_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_model, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "CW_Search.SearchResult_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_controller;
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
Options: model.getCachedValue(idService.getId("EHDbPjVSWEGPJpQzdr70zA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
return rec;
}();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "connect-search-result"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
controller.onClick$Action(model.variables.in_SearchResultIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("kSFC3QlF9U2cAQA61r32yg.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.verticalAlignAttr = UBTConnect_UtilsModel.staticEntities.uBT_VerticalAlign.center;
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
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("CQQwTeVVMkGsAjOb+2BS1g.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.spacingSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
rec.verticalAlignAttr = UBTConnect_UtilsModel.staticEntities.uBT_VerticalAlign.center;
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
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityId: model.variables.in_SearchResultIn.idAttr,
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchResultInDataFetchStatus),
In_BorderRadius: model.variables.imageShapeIdVar,
ImageSize: model.getCachedValue(idService.getId("I5mMZ2zYOk6ZxIxW8nuOjg.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = model.variables.imageHeightIdVar;
rec.widthAttr = model.variables.imageWidthIdVar;
return rec;
}();
}, function () {
return model.variables.imageHeightIdVar;
}, function () {
return model.variables.imageWidthIdVar;
}),
EntityType: model.variables.in_SearchResultIn.typeAttr,
_entityTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchResultInDataFetchStatus),
ImageURL: model.variables.in_ImageURLIn,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageURLInDataFetchStatus)
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightOptions: model.getCachedValue(idService.getId("3tKQy56fW0iM86KnFcIkPQ.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.bold;
return rec;
}();
}),
In_HighlightWords: model.variables.in_SearchTermIn,
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchTermInDataFetchStatus),
In_Text: model.variables.in_SearchResultIn.nameAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchResultInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("3tKQy56fW0iM86KnFcIkPQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = model.variables.in_TitleFontSizeIn;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}, function () {
return model.variables.in_TitleFontSizeIn;
}),
_in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TitleFontSizeInDataFetchStatus)
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
_dependencies: []
}), $if(model.variables.in_ShowSubscriptionWarningIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("kMbabv3NOkSjDkZvroiGXw.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.blueDark;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
return rec;
}();
}),
Text: "Subscription upgrade needed"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
return controller.onClick_UpgradeSubscription$Action(controller.callContext(eventHandlerContext));
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
uuid: "5",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.blueDark,
In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_16,
In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.infoFill
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}, function () {
return [$if(((model.variables.in_SearchResultIn.additionalInformationAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("YQI+rLW+akWxiTRJwuXptw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_HighlightWords: model.variables.in_SearchTermIn,
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchTermInDataFetchStatus),
In_Text: model.variables.in_SearchResultIn.additionalInformationAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchResultInDataFetchStatus),
In_HighlightOptions: model.getCachedValue(idService.getId("YQI+rLW+akWxiTRJwuXptw.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.bold;
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
_dependencies: []
})];
}, function () {
return [];
}), $if(((model.variables.in_SearchResultIn.locationAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("a8jpVdist0aW1clARiF5_g.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = model.variables.in_LocationTopPaddingIn;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_LocationTopPaddingIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocationTopPaddingInDataFetchStatus)
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
SpacingSize: UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall,
Text: model.variables.in_SearchResultIn.locationAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchResultInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("ddDILGz9uUW8pUa1P0SALQ.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_16,
In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.homePinFill,
In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7
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
alias: "11"
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
_dependencies: [asPrimitiveValue(model.variables._in_SearchResultInDataFetchStatus), asPrimitiveValue(model.variables.in_SearchResultIn.locationAttr)]
})];
}, function () {
return [];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_LocationTopPaddingIn), asPrimitiveValue(model.variables.in_ShowSubscriptionWarningIn), asPrimitiveValue(model.variables.in_TitleFontSizeIn), asPrimitiveValue(model.variables.in_SearchTermIn), asPrimitiveValue(model.variables.in_ImageURLIn), asPrimitiveValue(model.variables.imageWidthIdVar), asPrimitiveValue(model.variables.imageHeightIdVar), asPrimitiveValue(model.variables.imageShapeIdVar), asPrimitiveValue(model.variables._in_LocationTopPaddingInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowSubscriptionWarningInDataFetchStatus), asPrimitiveValue(model.variables._in_TitleFontSizeInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchTermInDataFetchStatus), asPrimitiveValue(model.variables._in_ImageURLInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchResultInDataFetchStatus), asPrimitiveValue(model.variables.in_SearchResultIn.locationAttr), asPrimitiveValue(model.variables.in_SearchResultIn.additionalInformationAttr), asPrimitiveValue(model.variables.in_SearchResultIn.nameAttr), asPrimitiveValue(model.variables.in_SearchResultIn.typeAttr), asPrimitiveValue(model.variables.in_SearchResultIn.idAttr)]
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Actions,
_idProps: {
service: idService,
name: "Placeholder_Actions"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect_Search_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$debugger", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Search_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect_Utils.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$App_Subscription_NavigateToUpgrade"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect_Search_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_Debugger) {
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
Controller.prototype._onClick_UpgradeSubscription$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_UpgradeSubscription");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:FqAfBaYzN0ynsfAqdZ_zow:/NRWebFlows.nBTWhgPUTUqt+FvVSXmGKw/NodesShownInESpaceTree.G5Ejfac3g0+AnJA+3ZvCPg/ClientActions.FqAfBaYzN0ynsfAqdZ_zow:j8AkqABiEfabyqMuL26cag", "UBTConnect_Utils", "OnClick_UpgradeSubscription", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Gsi77zj5Tkiv9FhycgeyWQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mYwYtqtF+0GxXUmI_giHiA", callContext.id);
// Execute Action: App_Subscription_NavigateToUpgrade
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_NavigateToUpgrade$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:arvDt6SEHEOOq2LObwMxGg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:FqAfBaYzN0ynsfAqdZ_zow", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:FqAfBaYzN0ynsfAqdZ_zow", callContext.id);
throw ex;

});
};
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Z7nkLtmDpECWDTFtP3YY2A:/NRWebFlows.nBTWhgPUTUqt+FvVSXmGKw/NodesShownInESpaceTree.G5Ejfac3g0+AnJA+3ZvCPg/ClientActions.Z7nkLtmDpECWDTFtP3YY2A:eJZx1pcuZS+sqzPsWGByzA", "UBTConnect_Utils", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hxCiwXPuDEqQZk6oJJ90Og", callContext.id);
// Member?
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:g3+0xBzGv0CxgxdTtTszWw", callContext.id) && (model.variables.in_SearchResultIn.typeAttr === UBTConnect_UtilsModel.staticEntities.connect_Entity.member))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TlUKt1g4UUiP4h6yxSfxog", callContext.id);
// ImageHeightId = Square
model.variables.imageHeightIdVar = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.square;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TlUKt1g4UUiP4h6yxSfxog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ImageWidthId = Medium_60
model.variables.imageWidthIdVar = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.medium_60;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TlUKt1g4UUiP4h6yxSfxog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ImageShapeId = Rounded
model.variables.imageShapeIdVar = UBTConnect_UtilsModel.staticEntities.uBT_Shape.rounded;
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HB0qO3tSp0686quOuJqd0w", callContext.id);
// ImageHeightId = Auto
model.variables.imageHeightIdVar = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.auto;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HB0qO3tSp0686quOuJqd0w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ImageWidthId = ListThumbnail_104
model.variables.imageWidthIdVar = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.listThumbnail_104;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HB0qO3tSp0686quOuJqd0w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ImageShapeId = Soft
model.variables.imageShapeIdVar = UBTConnect_UtilsModel.staticEntities.uBT_Shape.soft;
}

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Td5UravQKE62jLkQQuk+RQ", callContext.id) && ((model.variables.in_ImageHeightIdIn) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IGB_FOlx50urERsCg04ieA", callContext.id);
// ImageHeightId = In_ImageHeightId
model.variables.imageHeightIdVar = model.variables.in_ImageHeightIdIn;
}

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_++pWj8TREKCSCrgCdZIrQ", callContext.id) && ((model.variables.in_ImageWidthIdIn) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:k4bjUOAbgky7eBJDuK2i1w", callContext.id);
// ImageWidthId = In_ImageWidthId
model.variables.imageWidthIdVar = model.variables.in_ImageWidthIdIn;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Jbnzq1YCd0SnOwxpPA0G8w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Jbnzq1YCd0SnOwxpPA0G8w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Z7nkLtmDpECWDTFtP3YY2A", callContext.id);
}

};

Controller.prototype.onClick_UpgradeSubscription$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_UpgradeSubscription$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.onClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:nBTWhgPUTUqt+FvVSXmGKw:/NRWebFlows.nBTWhgPUTUqt+FvVSXmGKw:hecrYdaYxbqpiMH8xwqweA", "UBTConnect_Utils", "CW_Search", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:G5Ejfac3g0+AnJA+3ZvCPg:/NRWebFlows.nBTWhgPUTUqt+FvVSXmGKw/NodesShownInESpaceTree.G5Ejfac3g0+AnJA+3ZvCPg:vQruRXCLMOfxgH1Fe7+SrA", "UBTConnect_Utils", "SearchResult_Item", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:G5Ejfac3g0+AnJA+3ZvCPg", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:nBTWhgPUTUqt+FvVSXmGKw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Search/SearchResult_Item On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"rwEPY1ypfk6giISBrkortg": {
getter: function (varBag, idService) {
return varBag.model.variables.imageShapeIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Rlf4igLMpEW5o05cKE08+g": {
getter: function (varBag, idService) {
return varBag.model.variables.imageHeightIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dS4fgIbbp0aVwLcBiny2qg": {
getter: function (varBag, idService) {
return varBag.model.variables.imageWidthIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UDWJsZyjqEevIRHe2SIqVA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchResultIn;
}
},
"FcWZF9OPCkmMbf2iWC4L6g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchTermIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"as4GZdkeUUKS1oDqm0PgPg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageHeightIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"E2qBRgTZw0iZkKXCde3rVg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageWidthIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"e4gr7Se3yUOoTpNDO0UZbg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowSubscriptionWarningIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"u6vVZI22ME+agn2I0gDkGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GcE5Nku8bUG7UiiIjAELBg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TitleFontSizeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"S507DCWelkSo3WD7NtX0Uw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LocationTopPaddingIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Yl0xmarvN0qlc4_hwFXdAA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"UAWIkBzqG0a6lPNJXGYthw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"vs95HamgVUep0b52xtWm0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"RQ_ToS3e50qwIdSH81ygbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"NotQMZsaKkKFyukrUH2nvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowSubscriptionWarning"));
})(varBag.model, idService);
}
},
"Ptr8tdIGI0+9JDNNtle4ew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"uQXBvOIflEaRwuFpxYjavw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasAdditionalInfo"));
})(varBag.model, idService);
}
},
"zYRtXY13mUOYOxVlTrWFFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasLocation"));
})(varBag.model, idService);
}
},
"XXSmSGh2EEGmb+HQLnvnIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"mNZZthhZwEGjGYv9nf42Pg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"g5x3lZnXy0mRcERnh2hB7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"oJ_w3XaDuEe8RIDztF+Tdg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Actions"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
