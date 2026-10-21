# UBTConnect_Utils.CW_Share.ShareableObject_Generic

- Kind: shared; build screens using it: BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, MessageDetail, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/blocks/sources/UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_Sharing_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$controller", "UBTConnect_Utils.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_Sharing_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_model, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_controller, UBTConnect_UtilsClientVariables, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "CW_Share.ShareableObject_Generic";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_controller;
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
style: "shareable-object-generic",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
In_BorderRadius: model.variables.borderRadiusVar,
ImageURL: model.variables.in_ShareableObjectIn.signedURLAttr,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
EntityType: model.variables.in_ShareableObjectIn.connectEntityTypeIdAttr,
_entityTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
ImageSize: model.getCachedValue(idService.getId("RjLW+GkLPkGUcuW5DUdSBQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.auto;
rec.widthAttr = model.variables.imageWidthVar;
return rec;
}();
}, function () {
return model.variables.imageWidthVar;
}),
EntityId: model.variables.in_ShareableObjectIn.idAttr,
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus)
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.event_OnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
}
},
style: "text-align-left margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("ahhnmeUJlkWG4WSRtbW94Q.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_HighlightOptions: model.getCachedValue(idService.getId("ahhnmeUJlkWG4WSRtbW94Q.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.bold;
return rec;
}();
}),
In_Text: model.variables.in_ShareableObjectIn.titleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
In_HighlightWords: ""
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(((model.variables.in_ShareableObjectIn.subtitleAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightWords: "",
In_Text: model.variables.in_ShareableObjectIn.subtitleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
In_HighlightOptions: model.getCachedValue(idService.getId("RaFCE2sVLUeMi8tbgmm7Qg.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.bold;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("RaFCE2sVLUeMi8tbgmm7Qg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.regular;
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
_dependencies: []
})];
}, function () {
return [];
}), $if(((model.variables.in_ShareableObjectIn.locationAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("_OxrM2yDgE+DjYXDU_1m9w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: model.variables.in_ShareableObjectIn.locationAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("G6f6_Yg5s0mL7FkRyQAv9w.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
SpacingSize: UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall
},
events: {
_handleError: function (ex) {
```
(… 52 more lines in `migration/blocks/sources/UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc.js`)
