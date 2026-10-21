# Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit

- Kind: shared; build screens using it: EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc.js`
- Child blocks: OutSystemsUI_2_23.Content.DEPRECATED_Accordion (queue: OutSystemsUI_2_23.Content.DEPRECATED_Accordion)

## Inputs

| Input | Type |
|---|---|
| In_ExtendedClass | Text |
| In_ColoredContent | Boolean |
| In_MultipleItems | Boolean |

## Captured DOM variants (1 distinct, 2 instances)

### Variant 1: EventDetail/default (×2)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.Accordion_Orbit" id="b1-$b4">
  <div class="OSBlockWidget" data-block="Content.DEPRECATED_Accordion" id="b1-b4-$b1"><!-- nested block: 40 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystemsUI_2_23.Content.DEPRECATED_Accordion.mvc$view", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_view, OSWidgets) {
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
        View.displayName = "Orbit_Generic_Blocks.Accordion_Orbit";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_Accordion_mvc_view, {
                inputs: {
                    ExtendedClass: model.getCachedValue(idService.getId("AkV8V8oCr0yOX9oubCKI0A.ExtendedClass"), function() {
                        return (("orbit-accordion" + ((model.variables.in_ColoredContentIn) ? (" orbit-accordion-colored-content") : (""))) + ((((model.variables.in_ExtendedClassIn) !== (""))) ? ((" " + model.variables.in_ExtendedClassIn)) : ("")));
                    }, function() {
                        return model.variables.in_ColoredContentIn;
                    }, function() {
                        return model.variables.in_ExtendedClassIn;
                    }),
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ColoredContentInDataFetchStatus, model.variables._in_ExtendedClassInDataFetchStatus),
                    MultipleItems: model.variables.in_MultipleItemsIn,
                    _multipleItemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MultipleItemsInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.content,
                            _idProps: {
                                service: idService,
                                name: "Content"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
