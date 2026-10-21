# OutSystemsUI_2_23.Interaction.DropdownTags

- Kind: osui; build screens using it: EventBooklet
- Compiled source: `migration/blocks/sources/OutSystemsUI_2_23.Interaction.DropdownTags.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Interaction.DropdownTags.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$model", "OutSystemsUI_2_23.Interaction.DropdownTags.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRec", "OutSystemsUI_2_23.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "OutSystemsUI_2_23.controller$DropdownCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$DropdownChangeTextProperty", "OutSystemsUI_2_23.controller$DropdownChangeBooleanProperty", "OutSystemsUI_2_23.controller$DropdownDestroy", "OutSystemsUI_2_23.controller$DropdownInitialize", "OutSystemsUI_2_23.controller$DropdownRegisterCallback"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_model, OutSystemsUI_2_23_Interaction_DropdownTags_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.DropdownTags";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.VirtualSelect.js", "scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_DropdownTags_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Interaction_DropdownTags_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
name: model.variables.internalConfigsVar.uniqueIdAttr
},
style: "osui-dropdown-tags",
visible: true,
_idProps: {
service: idService,
name: "DropdownTags"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
