# OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading

- Kind: osui; build screens using it: EmailContact, EmailTarget
- Compiled source: `migration/blocks/sources/OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc$model", "OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_model, OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.DEPRECATED_ButtonLoading";
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
                return OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.button,
extendedProperties: {
"aria-label": model.getCachedValue(idService.getId("Button.aria-label"), function () {
return ((model.variables.isLoadingIn) ? (OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("56KsdoiGHUSxdwyRc1Cq8Q#Value.2001303836.1", "Loading")) : (""));
}, function () {
return model.variables.isLoadingIn;
}),
role: model.getCachedValue(idService.getId("Button.role"), function () {
return ((model.variables.isLoadingIn) ? ("status") : (""));
}, function () {
return model.variables.isLoadingIn;
}),
"aria-live": "polite",
"aria-atomic": "true"
},
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("Button.Style"), function () {
return ((("osui-deprecated " + ((model.variables.isLoadingIn) ? (" is--loading") : (""))) + ((model.variables.showLoadingAndLabelIn) ? (" btn-show-label") : (""))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.isLoadingIn;
}, function () {
return model.variables.showLoadingAndLabelIn;
}, function () {
return model.variables.extendedClassIn;
}),
_idProps: {
service: idService,
name: "Button"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus, model.variables._showLoadingAndLabelInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
