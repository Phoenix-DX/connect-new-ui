# UBTConnect_Utils.CW_Search.SearchResult_Item

- Kind: shared; build screens using it: BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, Search, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/blocks/sources/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
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
```
(… 235 more lines in `migration/blocks/sources/UBTConnect_Utils.CW_Search.SearchResult_Item.mvc.js`)
