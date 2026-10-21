# OutSystemsUI_2_23.Utilities.TouchEvents

- Kind: osui; build screens using it: Photobook
- Compiled source: `migration/screens/Photobook/analysis/sources/pretty/OutSystemsUI_2_23.Utilities.TouchEvents.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| WidgetId | Text |
| PreventDefaults | Boolean |

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: Photobook/default (×1)

```html
<div class="OSBlockWidget" data-block="Utilities.TouchEvents" id="b4-b6-$b4"></div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Utilities.TouchEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$model", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$controller"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_model, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    var View = (function(_super) {
        __extends(View, _super);
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
        View.displayName = "Utilities.TouchEvents";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.TouchTrack.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Utilities_TouchEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Utilities_TouchEvents_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
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
            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
