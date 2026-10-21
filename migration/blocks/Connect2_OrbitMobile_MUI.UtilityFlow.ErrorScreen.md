# Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen

- Kind: shared; build screens using it: LDM_Email_V2, LDM_EventDetail_V2, LDM_MyEvents_V2
- Compiled source: `migration/blocks/sources/Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: LDM_EventDetail_V2/offline (×1)

```html
<div class="OSBlockWidget" data-block="UtilityFlow.ErrorScreen" id="b1-$b16">
  <div data-container="" id="b1-b16-LoadMoreData" style="height: 723px; padding-bottom: var(--space-xl); padding-left: var(--space-xl); padding-right: var(--space-xl); padding-top: var(--space-xl);">
    <div class="error-screen-info OSInline" data-container="">
      <img data-image="" data-rendered-size="64x70" src="/UBTConnect/img/Connect2_OrbitMobile_MUI.no_events.png"/>
      <span class="margin-top-m" data-expression="">
        No event information.
      </span>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$model", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_model, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "UtilityFlow.ErrorScreen";
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
                return Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_controller;
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
style: ("height: 40em; padding-bottom: var(--space-xl); padding-left: var(--space-xl); padding-right: var(--space-xl); padding-top: var(--space-xl);" + ((model.variables.in_MatchMainContentHeightIn) ? ((("height: " + (model.variables.heightVar).toString()) + "px;")) : ("")))
},
visible: true,
_idProps: {
service: idService,
name: "LoadMoreData"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: -27em !important;"
},
gridProperties: {
classes: "OSInline"
},
style: "error-screen-info",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_OrbitMobile_MUI.no_events.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-top-m",
value: model.variables.in_ErrorMessageIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ErrorMessageInDataFetchStatus)
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
