# OutSystemsUI_2_23.Content.Tag

- Kind: osui; build screens using it: AssembleEvents
- Compiled source: `migration/screens/AssembleEvents/analysis/sources/pretty/OutSystemsUI_2_23.Content.Tag.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Color | Text |
| Size | Text |
| Shape | Text |
| IsLight | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (2 distinct, 6 instances)

### Variant 1: AssembleEvents/default (×3)

```html
<div class="OSBlockWidget" data-block="Content.Tag" id="b2-b4-b2-l1-70_0-$b2">
  <div class="tag border-radius-rounded background-primary connect-tag connect-tag-active OSInline" id="b2-b4-b2-l1-70_0-b2-Tag">
    <span class="text-no-wrap" data-expression="">
      Upcoming Meetings
    </span>
  </div>
</div>
```

### Variant 2: AssembleEvents/default (×3)

```html
<div class="OSBlockWidget" data-block="Content.Tag" id="b2-b4-b2-l1-70_1-$b2">
  <div class="tag border-radius-rounded background-primary connect-tag OSInline" id="b2-b4-b2-l1-70_1-b2-Tag">
    <span class="text-no-wrap" data-expression="">
      Past Meetings
    </span>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.Tag.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.Tag.mvc$model", "OutSystemsUI_2_23.Content.Tag.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_Tag_mvc_model, OutSystemsUI_2_23_Content_Tag_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.Tag";
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
                return OutSystemsUI_2_23_Content_Tag_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_Tag_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.tag,
                gridProperties: {
                    classes: "OSInline"
                },
                style: model.getCachedValue(idService.getId("Tag.Style"), function() {
                    return (((((("tag" + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" tag-" + model.variables.sizeIn)) : (""))) + " ") + "border-radius-") + model.variables.shapeIn) + ((model.variables.isLightIn) ? ((((((" " + "background-") + model.variables.colorIn) + "-lightest text-") + model.variables.colorIn) + "-darker")) : (((" " + "background-") + model.variables.colorIn)))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.sizeIn;
                }, function() {
                    return model.variables.shapeIn;
                }, function() {
                    return model.variables.isLightIn;
                }, function() {
                    return model.variables.colorIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Tag"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._isLightInDataFetchStatus, model.variables._colorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
