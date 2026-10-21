# NavigationHandler.ScrollAnchors.ScrollAnchor

- Kind: shared; build screens using it: BookmarksByGroup, Notifications, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/NavigationHandler.ScrollAnchors.ScrollAnchor.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Id | Text |

## Captured DOM variants (1 distinct, 134 instances)

### Variant 1: BookmarksByGroup/default (×134)

```html
<div class="OSBlockWidget" data-block="ScrollAnchors.ScrollAnchor" id="b1-l1-57_0-$b3">
  <div data-container="" data-dx-scroll-anchor-id="51207"></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_model, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_controller, OSWidgets) {
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
        View.displayName = "ScrollAnchors.ScrollAnchor";
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
                return NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_controller;
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
                animate: false,
                extendedProperties: {
                    "data-dx-scroll-anchor-id": model.variables.idIn
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(false, false, this, function() {
                return [];
            }, function() {
                return [];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
