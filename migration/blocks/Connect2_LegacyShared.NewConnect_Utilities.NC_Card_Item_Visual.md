# Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_model, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect_Utilities.NC_Card_Item_Visual";
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
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "position-relative",
visible: true,
_idProps: {
service: idService,
name: "Result_Visual"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_FloatingPill,
style: ("position-absolute absolute-" + model.variables.in_FloatingPillPositionIn),
_idProps: {
service: idService,
name: "Placeholder_FloatingPill"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FloatingPillPositionInDataFetchStatus)
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_OverlayText,
style: ("position-absolute absolute-" + model.variables.in_FloatingOverlayTextPositionIn),
_idProps: {
service: idService,
name: "Placeholder_OverlayText"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FloatingOverlayTextPositionInDataFetchStatus)
}), $if(model.variables.showPlaceholderForImageIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Image,
_idProps: {
service: idService,
name: "Placeholder_Image"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((model.variables.in_SignedURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Photo.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}),
style: ((((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px; object-position: ") + model.variables.in_ImageCoverPositionYIn) + " ") + model.variables.in_ImageCoverPositionXIn)
},
style: "img-cover full-width",
type: /*External*/ 1,
url: model.variables.in_SignedURLIn,
_idProps: {
service: idService,
name: "Result_Item_Photo"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SignedURLInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Default_NoData.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}),
style: (("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;")
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png"),
style: "img-cover full-width img-cover--top-center",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "Result_Item_Default_NoData"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
