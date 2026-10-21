# Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector

- Kind: shared; build screens using it: EventBooklet, EventDetail
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| IsSelected | Boolean |

## Captured DOM variants (2 distinct, 3 instances)

### Variant 1: EventDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.DaySelector" id="b1-b7-b1-l1-142790_0-$b1">
  <div class="event-date-selector event-date-selector-day event-date-selector-selected" data-container="">
    <div id="b1-b7-b1-l1-142790_0-b1-Placeholder_Digit">
      <span data-expression="">
        23
      </span>
    </div>
  </div>
</div>
```

### Variant 2: EventDetail/default (×2)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.DaySelector" id="b1-b7-b1-l1-142790_1-$b1">
  <div class="event-date-selector event-date-selector-day" data-container="">
    <div id="b1-b7-b1-l1-142790_1-b1-Placeholder_Digit">
      <span data-expression="">
        24
      </span>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Generic_Blocks.DaySelector";
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
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_controller;
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
                style: model.getCachedValue(idService.getId("RDxbulZ83kWt7vkwH0nm4Q.Style"), function() {
                    return ("event-date-selector event-date-selector-day" + ((model.variables.isSelectedIn) ? (" event-date-selector-selected") : ("")));
                }, function() {
                    return model.variables.isSelectedIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isSelectedInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Digit,
                _idProps: {
                    service: idService,
                    name: "Placeholder_Digit"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
