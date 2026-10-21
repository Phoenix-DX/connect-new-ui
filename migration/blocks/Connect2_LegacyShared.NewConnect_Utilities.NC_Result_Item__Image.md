# Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_model, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect_Utilities.NC_Result_Item__Image";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.label,
_idProps: {
service: idService,
name: "Label"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: "",
"data-item": model.variables.htmlDataItemIn
},
style: model.getCachedValue(idService.getId("Result_Item.Style"), function () {
return (("display-flex align-items-center gap-base " + ((model.variables.in_IsReverseImageAndContentIn) ? ("flex-direction-row-reverse ") : (""))) + model.variables.customClassIn);
}, function () {
return model.variables.in_IsReverseImageAndContentIn;
}, function () {
return model.variables.customClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "Result_Item"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReverseImageAndContentInDataFetchStatus, model.variables._customClassInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: (("min-width: " + (model.variables.in_ResultItemVisualWidthIn).toString()) + "px")
},
gridProperties: {
classes: "OSInline"
},
style: "result-item__visual",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.showPlaceholderForImageIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.imagePlaceholder,
style: "center display-flex",
_idProps: {
service: idService,
name: "ImagePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "center display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isLoadingIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("5gTbx+daNUeVsYrjHFFp7A.style"), function () {
return ((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;") + ((model.variables.in_IsRoundImageIn) ? ((("width: " + (model.variables.in_ImageHeightIn).toString()) + "px;")) : ((("border-radius: " + (model.variables.in_BorderRadiusIn).toString()) + "px; "))));
}, function () {
return model.variables.in_ImageHeightIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_BorderRadiusIn;
})
},
style: model.getCachedValue(idService.getId("5gTbx+daNUeVsYrjHFFp7A.Style"), function () {
return ("skeleton-item " + ((model.variables.in_IsRoundImageIn) ? ("border-radius-circle") : ("")));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsRoundImageInDataFetchStatus)
})];
}, function () {
return [$if(((model.variables.in_SignedURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Photo.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (((model.variables.in_IsRoundImageIn) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_square.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}),
style: model.getCachedValue(idService.getId("Result_Item_Photo.style"), function () {
return ((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;") + ((model.variables.in_IsRoundImageIn) ? ((("width: " + (model.variables.in_ImageHeightIn).toString()) + "px;")) : ((("border-radius: " + (model.variables.in_BorderRadiusIn).toString()) + "px; "))));
}, function () {
return model.variables.in_ImageHeightIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_BorderRadiusIn;
})
},
style: model.getCachedValue(idService.getId("Result_Item_Photo.Style"), function () {
return ((model.variables.in_IsRoundImageIn) ? ("img-circle img-cover img-cover--top-center") : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
type: /*External*/ 1,
url: model.variables.in_SignedURLIn,
_idProps: {
service: idService,
name: "Result_Item_Photo"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsRoundImageInDataFetchStatus),
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SignedURLInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Default_NoData.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (((model.variables.in_IsRoundImageIn) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_square.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}),
style: model.getCachedValue(idService.getId("Result_Item_Default_NoData.style"), function () {
return ((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;") + ((model.variables.in_IsRoundImageIn) ? ((("width: " + (model.variables.in_ImageHeightIn).toString()) + "px;")) : ((("border-radius: " + (model.variables.in_BorderRadiusIn).toString()) + "px; "))));
}, function () {
return model.variables.in_ImageHeightIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_BorderRadiusIn;
})
},
style: model.getCachedValue(idService.getId("Result_Item_Default_NoData.Style"), function () {
return ((model.variables.in_IsRoundImageIn) ? ("img-circle img-cover img-cover--top-center") : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
type: /*External*/ 1,
url: model.getCachedValue(idService.getId("Result_Item_Default_NoData.Url"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (((model.variables.in_IsRoundImageIn) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_square.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}),
_idProps: {
service: idService,
```
(… 92 more lines in `migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc.js`)
