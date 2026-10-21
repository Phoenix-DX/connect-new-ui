# OutSystemsUI_2_23.Interaction.RangeSlider

- Kind: osui; build screens using it: ContactUsDetails
- Compiled source: `migration/blocks/sources/OutSystemsUI_2_23.Interaction.RangeSlider.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Interaction.RangeSlider.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.RangeSlider.mvc$model", "OutSystemsUI_2_23.Interaction.RangeSlider.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$RangeSlider_InternalConfigRec", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$RangeSliderInitialize", "OutSystemsUI_2_23.controller$RangeSliderCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$RangeSliderDestroy", "OutSystemsUI_2_23.controller$RangeSliderRegisterCallback", "OutSystemsUI_2_23.controller$RangeSliderChangeDecimalProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeBooleanProperty", "OutSystemsUI_2_23.controller$RangeSliderChangeTextProperty"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_RangeSlider_mvc_model, OutSystemsUI_2_23_Interaction_RangeSlider_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.RangeSlider";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.wNumb.js", "scripts/OutSystemsUI_2_23.NoUISlider.js", "scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_RangeSlider_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_RangeSlider_mvc_controller;
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
extendedProperties: {
name: model.variables.internalConfigsVar.uniqueIdAttr
},
style: "osui-range-slider",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-range-slider__provider",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
