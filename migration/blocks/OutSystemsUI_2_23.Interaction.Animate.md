# OutSystemsUI_2_23.Interaction.Animate

- Kind: osui; build screens using it: MessageList, MyBookmarks
- Compiled source: `migration/blocks/sources/OutSystemsUI_2_23.Interaction.Animate.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 2 instances)

### Variant 1: MyBookmarks/loading (×2)

```html
<div class="OSBlockWidget" data-block="Interaction.Animate" id="b1-b11-$b1">
  <div class="animate top-to-bottom normal" id="b1-b11-b1-Content" style="animation-delay: 0ms;">
    <div class="card background-orange-dark" data-container="">
      <div data-container="">
        <i class="icon fa fa-wifi fa-1x" data-icon=""></i>
        <div data-container="">
          <div data-container="">
            •• ••• •••••••••••• •••• ••••••• •••••••• ••• ••••• ••• ••••••• •••• ••••••••••••
          </div>
          <div class="margin-top-base" data-container="">
            Please check your network connection and try again.
          </div>
        </div>
      </div>
      <div data-container="">
        <button class="btn" data-button="" type="button">
          Try again
        </button>
      </div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Interaction.Animate.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.Animate.mvc$model", "OutSystemsUI_2_23.Interaction.Animate.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_Animate_mvc_model, OutSystemsUI_2_23_Interaction_Animate_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.Animate";
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
                return OutSystemsUI_2_23_Interaction_Animate_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_Animate_mvc_controller;
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
content: _this.props.placeholders.content,
extendedProperties: {
style: ((((("-webkit-animation-delay: " + (model.variables.delayIn).toString()) + "ms;") + "animation-delay: ") + (model.variables.delayIn).toString()) + "ms;")
},
style: model.getCachedValue(idService.getId("Content.Style"), function () {
return ("animate" + ((false) ? ("") : ((((" " + model.variables.animationTypeIn) + " ") + model.variables.speedIn))));
}, function () {
return model.variables.animationTypeIn;
}, function () {
return model.variables.speedIn;
}),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._animationTypeInDataFetchStatus, model.variables._speedInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
