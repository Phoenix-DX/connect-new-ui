# Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions

- Kind: shared; build screens using it: EventBooklet, HostSurvey
- Compiled source: `migration/blocks/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    var View = (function (_super) {
        __extends(View,_super);
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
        View.displayName = "Orbit_Generic_Blocks.Orbit_FooterWithActions";
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
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
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
style: model.getCachedValue(idService.getId("ub_FOy6ZUUWbl7eczeOyOw.style"), function () {
return (((((model.variables.in_HasTopShadowIn) ? ("box-shadow: 0px -2px 6px 0px rgba(0,0,0,10%); ") : ("")) + ((!(model.variables.in_HasSecondaryButtonIn)) ? ("justify-content: flex-end; ") : (""))) + " ") + model.variables.in_ExtendedStyleIn);
}, function () {
return model.variables.in_HasTopShadowIn;
}, function () {
return model.variables.in_HasSecondaryButtonIn;
}, function () {
return model.variables.in_ExtendedStyleIn;
})
},
style: ("orbit-footer-with-buttons " + model.variables.in_ExtendedClassIn),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.click_SecondaryButton$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
}
},
style: model.getCachedValue(idService.getId("FlqupBN3+0yUo8QPOvSttQ.Style"), function () {
return (("orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-left " + ((model.variables.in_IsSmallButtonsIn) ? ("orbit-footer-with-buttons-btn-small ") : (""))) + model.variables.in_ExtendedClass_SecondaryIn);
}, function () {
return model.variables.in_IsSmallButtonsIn;
}, function () {
return model.variables.in_ExtendedClass_SecondaryIn;
}),
visible: model.variables.in_HasSecondaryButtonIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSmallButtonsInDataFetchStatus, model.variables._in_ExtendedClass_SecondaryInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HasSecondaryButtonInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Secondary,
_idProps: {
service: idService,
name: "Placeholder_Secondary"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.click_PrimaryButton$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
}
},
style: model.getCachedValue(idService.getId("EMPUETs4REqUsslXU5iDJg.Style"), function () {
return (("orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-right " + ((model.variables.in_IsSmallButtonsIn) ? ("orbit-footer-with-buttons-btn-small ") : (""))) + model.variables.in_ExtendedClass_PrimaryIn);
}, function () {
return model.variables.in_IsSmallButtonsIn;
}, function () {
return model.variables.in_ExtendedClass_PrimaryIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSmallButtonsInDataFetchStatus, model.variables._in_ExtendedClass_PrimaryInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Primary,
_idProps: {
service: idService,
name: "Placeholder_Primary"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
