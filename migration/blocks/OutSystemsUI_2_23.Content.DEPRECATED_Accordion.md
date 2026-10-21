# OutSystemsUI_2_23.Content.DEPRECATED_Accordion

- Kind: osui; build screens using it: EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| MultipleItems | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (2 distinct, 2 instances)

### Variant 1: EventDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.DEPRECATED_Accordion" id="b1-b4-$b1">
  <div class="osui-deprecated accordion orbit-accordion orbit-accordion-colored-content" data-multiple-items="False" id="b1-b4-b1-Content" role="tablist">
    <div id="b1-b4-Content">
      <div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-$b5"><!-- nested block: 37 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 2: MilestoneDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.DEPRECATED_Accordion" id="b1-b5-b7-$b1">
  <div class="osui-deprecated accordion orbit-accordion orbit-accordion-no-margin" data-multiple-items="True" id="b1-b5-b7-b1-Content" role="tablist">
    <div id="b1-b5-b7-Content">
      <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="">
        <div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_0-$b8"><!-- nested block: 79 nodes --></div>
        <div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_1-$b8"><!-- nested block: 75 nodes --></div>
        <div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_2-$b8"><!-- nested block: 77 nodes --></div>
        <div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_3-$b8"><!-- nested block: 79 nodes --></div>
        <div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_4-$b8"><!-- nested block: 51 nodes --></div>
        <div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_5-$b8"><!-- nested block: 51 nodes --></div>
      </div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.controller$DEPRECATED_UpdateAccordion"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_model, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.DEPRECATED_Accordion";
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
                return OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_controller;
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
                content: _this.props.placeholders.content,
                extendedProperties: {
                    "data-multiple-items": (model.variables.multipleItemsIn ? "True" : "False"),
                    role: "tablist"
                },
                style: model.getCachedValue(idService.getId("Content.Style"), function() {
                    return ("osui-deprecated accordion" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
