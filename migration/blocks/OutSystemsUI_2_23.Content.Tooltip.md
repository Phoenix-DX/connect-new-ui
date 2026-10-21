# OutSystemsUI_2_23.Content.Tooltip

- Kind: osui; build screens using it: HostSurvey
- Compiled source: `migration/blocks/sources/OutSystemsUI_2_23.Content.Tooltip.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.Tooltip.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.Tooltip.mvc$model", "OutSystemsUI_2_23.Content.Tooltip.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$Tooltip_InternalConfigRec", "OutSystemsUI_2_23.controller$TooltipRegisterCallback", "OutSystemsUI_2_23.controller$TooltipInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$TooltipChangeTextProperty", "OutSystemsUI_2_23.controller$TooltipChangeBooleanProperty", "OutSystemsUI_2_23.controller$IsPhone", "OutSystemsUI_2_23.controller$TooltipDestroy", "OutSystemsUI_2_23.controller$TooltipCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_Tooltip_mvc_model, OutSystemsUI_2_23_Content_Tooltip_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.Tooltip";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/OutSystemsUI_2_23.FloatingUICore.js", "scripts/OutSystemsUI_2_23.FloatingUIDom.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Content_Tooltip_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Content_Tooltip_mvc_controller;
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
name: model.variables.internal_ConfigsVar.uniqueIdAttr
},
style: "osui-tooltip",
visible: true,
_idProps: {
service: idService,
name: "TooltipWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "osui-tooltip__content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-uniqueid": model.variables.internal_ConfigsVar.uniqueIdAttr
},
style: "osui-tooltip__balloon-wrapper osui-balloon",
visible: true,
_idProps: {
service: idService,
name: "TooltipBallonWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tooltip,
gridProperties: {
classes: "OSInline"
},
style: "osui-tooltip__balloon-wrapper__balloon",
_idProps: {
service: idService,
name: "Tooltip"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-tooltip__balloon-arrow",
visible: true,
_idProps: {
service: idService,
name: "ArrowElement"
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
