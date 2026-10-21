# OutSystemsUI_2_23.Content.Accordion

- Kind: osui; build screens using it: HostSurvey
- Compiled source: `migration/screens/HostSurvey/analysis/sources/pretty/OutSystemsUI_2_23.Content.Accordion.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| MultipleItems | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: HostSurvey/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.Accordion" id="b2-$b21">
  <div class="osui-accordion orbit-host-survey-accordion" id="b2-b21-Content">
    <div class="OSBlockWidget" data-block="Content.AccordionItem" id="b2-$b22"><!-- nested block: 229 nodes --></div>
    <div class="OSBlockWidget" data-block="Content.AccordionItem" id="b2-$b25"><!-- nested block: 53 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.Accordion.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.Accordion.mvc$model", "OutSystemsUI_2_23.Content.Accordion.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$Accordion_InternalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$AccordionInitialize", "OutSystemsUI_2_23.controller$AccordionRegisterCallback", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionCreate", "OutSystemsUI_2_23.controller$AccordionChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionDestroy"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_Accordion_mvc_model, OutSystemsUI_2_23_Content_Accordion_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.Accordion";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_Accordion_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_Accordion_mvc_controller;
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
                    name: model.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "osui-accordion",
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
