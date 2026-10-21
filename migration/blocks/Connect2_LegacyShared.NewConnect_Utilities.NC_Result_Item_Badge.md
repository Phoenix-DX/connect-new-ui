# Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: AssembleEvents/loading (×6)

```html
<div class="OSBlockWidget" data-block="NewConnect_Utilities.NC_Result_Item_Badge" id="b2-b4-b7-l1-75_0-$b5">
  <div class="border-radius-circle center display-flex" id="b2-b4-b7-l1-75_0-b5-Placeholder_Icon" style="background-color: var(--color-neutral-2); height: 73px; width: 73px;"></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_model, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect_Utilities.NC_Result_Item_Badge";
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
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_controller;
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
content: _this.props.placeholders.placeholder_Icon,
extendedProperties: {
style: ((((("background-color:" + model.variables.backgroundColorIn) + "; height:") + model.variables.sizeIn) + "; width:") + model.variables.sizeIn)
},
style: "border-radius-circle center display-flex",
_idProps: {
service: idService,
name: "Placeholder_Icon"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
