# Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer

- Kind: shared; build screens using it: EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail, QRCodeGenerate, TransportDetail, ViewDocuments
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 2 instances)

### Variant 1: EventDetail/default (×2)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.ContactHelpdesk_Footer" id="b1-$b15">
  <div class="contact-helpdesk-footer" data-container="" style="cursor: pointer;">
    <span data-expression="">
      Contact Orbit Helpdesk
    </span>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.ContactHelpdesk_Footer";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_controller;
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
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.click$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                style: "contact-helpdesk-footer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: "Contact Orbit Helpdesk",
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
