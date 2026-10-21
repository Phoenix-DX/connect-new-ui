# Connect2_LegacyShared.Reusable.Spinner

- Kind: shared; build screens using it: BookmarksByGroup, MessageDetail, MessageList, MyBookmarks
- Compiled source: `migration/screens/MessageList/analysis/sources/pretty/Connect2_LegacyShared.Reusable.Spinner.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| ShowLoader | Boolean |

## Captured DOM variants (2 distinct, 8 instances)

### Variant 1: MessageDetail/loading (×2)

```html
<div class="OSBlockWidget" data-block="Reusable.Spinner" id="b1-$b3">
  <div class="list-updating-cont" data-container="">
    <div class="list-updating" data-container=""></div>
  </div>
</div>
```

### Variant 2: MessageList/default (×6)

```html
<div class="OSBlockWidget" data-block="Reusable.Spinner" id="b1-$b11"></div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Reusable.Spinner.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.Spinner.mvc$model", "Connect2_LegacyShared.Reusable.Spinner.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_Spinner_mvc_model, Connect2_LegacyShared_Reusable_Spinner_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.Spinner";
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
            get: function() {
                return Connect2_LegacyShared_Reusable_Spinner_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_Spinner_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "list-updating-cont",
                visible: model.variables.showLoaderIn,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showLoaderInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "list-updating",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
