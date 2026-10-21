# OutSystemsUI_2_23.Content.AccordionItem

- Kind: osui; build screens using it: HostSurvey
- Compiled source: `migration/screens/HostSurvey/analysis/sources/pretty/OutSystemsUI_2_23.Content.AccordionItem.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| StartsExpanded | Boolean |
| Icon | Text |
| IconPosition | Text |
| IsDisabled | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (2 distinct, 2 instances)

### Variant 1: HostSurvey/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.AccordionItem" id="b2-$b22">
  <div aria-disabled="false" class="osui-accordion-item osui-accordion-item--is-open" data-container="" id="b2-b22-AccordionItem" role="listitem">
    <div aria-controls="b2-b22-Content" aria-disabled="false" aria-expanded="true" class="osui-accordion-item__title osui-accordion-item__title--is-right osui-accordion-item__click_zone" data-container="" id="b2-b22-TitleWrapper" role="button" tabindex="0">
      <div class="osui-accordion-item__title__placeholder" id="b2-b22-Title">
        Accommodation
      </div>
      <div aria-hidden="true" class="osui-accordion-item__icon osui-accordion-item__icon--caret" data-container=""></div>
      <div class="osui-accordion-item__icon placeholder-empty osui-accordion-item__icon--hidden" id="b2-b22-CustomIcon"></div>
    </div>
    <div aria-hidden="false" class="osui-accordion-item__content osui-accordion-item__content--is-expanded" data-container="" id="b2-b22-ContentWrapper" role="region">
      <div id="b2-b22-Content">
        <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" role="list">
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l5-142863_0-$b23"><!-- nested block: 33 nodes --></div>
          </div>
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l5-142863_1-$b23"><!-- nested block: 33 nodes --></div>
          </div>
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l5-142863_2-$b23"><!-- nested block: 28 nodes --></div>
          </div>
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l5-142863_3-$b23"><!-- nested block: 28 nodes --></div>
          </div>
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l5-142863_4-$b23"><!-- nested block: 28 nodes --></div>
          </div>
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l5-142863_5-$b23"><!-- nested block: 28 nodes --></div>
          </div>
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l5-142863_6-$b23"><!-- nested block: 28 nodes --></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Variant 2: HostSurvey/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.AccordionItem" id="b2-$b25">
  <div aria-disabled="false" class="osui-accordion-item osui-accordion-item--is-open" data-container="" id="b2-b25-AccordionItem" role="listitem">
    <div aria-controls="b2-b25-Content" aria-disabled="false" aria-expanded="true" class="osui-accordion-item__title osui-accordion-item__title--is-right osui-accordion-item__click_zone" data-container="" id="b2-b25-TitleWrapper" role="button" tabindex="0">
      <div class="osui-accordion-item__title__placeholder" id="b2-b25-Title">
        Meal Options
      </div>
      <div aria-hidden="true" class="osui-accordion-item__icon osui-accordion-item__icon--caret" data-container=""></div>
      <div class="osui-accordion-item__icon placeholder-empty osui-accordion-item__icon--hidden" id="b2-b25-CustomIcon"></div>
    </div>
    <div aria-hidden="false" class="osui-accordion-item__content osui-accordion-item__content--is-expanded" data-container="" id="b2-b25-ContentWrapper" role="region">
      <div id="b2-b25-Content">
        <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="">
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l6-142871_0-$b26"><!-- nested block: 20 nodes --></div>
          </div>
          <div class="orbit-host-survey-list-item" data-container="">
            <div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_Item" id="b2-l6-142871_1-$b26"><!-- nested block: 20 nodes --></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.AccordionItem.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.AccordionItem.mvc$model", "OutSystemsUI_2_23.Content.AccordionItem.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRec", "OutSystemsUI_2_23.controller$AccordionItemDestroy", "OutSystemsUI_2_23.controller$AccordionItemChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionItemChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionItemInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionItemCreate", "OutSystemsUI_2_23.controller$AccordionItemRegisterCallback"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_AccordionItem_mvc_model, OutSystemsUI_2_23_Content_AccordionItem_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.AccordionItem";
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
                return OutSystemsUI_2_23_Content_AccordionItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_AccordionItem_mvc_controller;
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
                    name: model.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "osui-accordion-item",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "AccordionItem"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "osui-accordion-item__title",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "TitleWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.title,
                style: "osui-accordion-item__title__placeholder",
                _idProps: {
                    service: idService,
                    name: "Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "osui-accordion-item__icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.customIcon,
                style: "osui-accordion-item__icon placeholder-empty",
                _idProps: {
                    service: idService,
                    name: "CustomIcon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "osui-accordion-item__content",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ContentWrapper"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.content,
                    _idProps: {
                        service: idService,
                        name: "Content"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
