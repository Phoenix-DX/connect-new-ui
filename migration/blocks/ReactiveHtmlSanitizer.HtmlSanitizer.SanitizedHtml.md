# ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml

- Kind: shared; build screens using it: MessageDetail, Notifications, Photobook
- Compiled source: `migration/screens/MessageDetail/analysis/sources/pretty/ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Value | Text |
| ResetWhitelist | Boolean |
| AllowedAttributes | Text |
| DisallowedAttributes | Text |
| AllowedTags | Text |
| DisallowedTags | Text |
| AllowedCssStyles | Text |
| DisallowedCssStyles | Text |

## Captured DOM variants (2 distinct, 20 instances)

### Variant 1: MessageDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="HtmlSanitizer.SanitizedHtml" id="b1-b4-$b3">
  <span class="OSFillParent" data-expression="" id="b1-b4-b3-SanitizedHtml" style="margin-left: 0px;">
    <p>
      Test Noti 56
    </p>
  </span>
</div>
```

### Variant 2: Notifications/default (×19)

```html
<div class="OSBlockWidget" data-block="HtmlSanitizer.SanitizedHtml" id="b14-l1-115_2-b2-l1-127_0-b2-$b6">
  <span class="OSFillParent" data-expression="" id="b14-l1-115_2-b2-l1-127_0-b2-b6-SanitizedHtml" style="margin-left: 0px;">
    Test Noti 56
  </span>
</div>
```


## Compiled view (debugger lines removed)

```js
define("ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$view", ["OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "react", "OutSystems/ReactView/Main", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$controller", "OutSystems/ReactWidgets/Main", "ReactiveHtmlSanitizer.controller$AllowTags", "ReactiveHtmlSanitizer.controller$DisallowAttributes", "ReactiveHtmlSanitizer.controller$DisallowCssStyles", "ReactiveHtmlSanitizer.controller$DisallowTags", "ReactiveHtmlSanitizer.controller$AllowCssStyles", "ReactiveHtmlSanitizer.controller$SanitizeHtml", "ReactiveHtmlSanitizer.controller$AllowAttributes"], function(OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, React, OSView, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_model, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller, OSWidgets) {
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
        View.displayName = "HtmlSanitizer.SanitizedHtml";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ReactiveHtmlSanitizer.HtmlSanitizer.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                value: "",
                _idProps: {
                    service: idService,
                    name: "SanitizedHtml"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
