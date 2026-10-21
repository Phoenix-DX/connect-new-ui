# UBTConnect.App_Common_Blocks.App_NotificationRefresh

- Kind: shared; build screens using it: CountryList, HomeFeed, Notes, Updates_SingleList
- Compiled source: `migration/screens/CountryList/analysis/sources/pretty/UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Datetime | DateTime |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: CountryList/default (×12)

```html
<div class="OSBlockWidget" data-block="App_Common_Blocks.App_NotificationRefresh" id="b2-$b2"></div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc$controller", "UBTConnect.clientVariables"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_model, UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_controller, UBTConnectClientVariables) {
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
        View.displayName = "App_Common_Blocks.App_NotificationRefresh";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
