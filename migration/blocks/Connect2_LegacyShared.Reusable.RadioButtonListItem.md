# Connect2_LegacyShared.Reusable.RadioButtonListItem

- Kind: shared; build screens using it: AssembleEvents, Assemble_BrowseByCountry
- Compiled source: `migration/blocks/sources/Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc$model", "Connect2_LegacyShared.Reusable.RadioButtonListItem.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_model, Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.RadioButtonListItem";
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
                return Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Reusable_RadioButtonListItem_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.RadioGroup, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
style: ("radio-group radio-group--list-item " + model.variables.extendedClassIn),
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.radioButtonValueIn, function (value) {
model.variables.radioButtonValueIn = value;
}),
_idProps: {
service: idService,
name: "RadioGroup"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus),
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._radioButtonValueInDataFetchStatus)
}, React.createElement(OSWidgets.RadioButton, {
enabled: true,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.selected$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
}
},
gridProperties: {
classes: "OSFillParent"
},
style: "radio-button",
value: model.variables.selectedValueIn,
visible: true,
_idProps: {
service: idService,
name: "RadioButton"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._selectedValueInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title,
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
