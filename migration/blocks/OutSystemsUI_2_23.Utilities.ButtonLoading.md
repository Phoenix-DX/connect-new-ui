# OutSystemsUI_2_23.Utilities.ButtonLoading

- Kind: osui; build screens using it: ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, Login, Profile, Services
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/OutSystemsUI_2_23.Utilities.ButtonLoading.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| IsLoading | Boolean |
| ShowLabelOnLoading | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (3 distinct, 21 instances)

### Variant 1: ContactByEmailMember/default (×15)

```html
<div class="OSBlockWidget" data-block="Utilities.ButtonLoading" id="b2-$b10">
  <div aria-atomic="true" aria-busy="false" aria-live="polite" class="osui-btn-loading OSInline osui-btn-loading-show-spinner" id="b2-b10-Button">
    <div class="OSBlockWidget" data-block="CW_Common.Button" id="b2-$b11"><!-- nested block: 21 nodes --></div>
  </div>
</div>
```

### Variant 2: Login/default (×3)

```html
<div class="OSBlockWidget" data-block="Utilities.ButtonLoading" id="$b6">
  <div aria-atomic="true" aria-busy="false" aria-live="polite" class="osui-btn-loading OSInline full-width" id="b6-Button">
    <button class="btn btn-primary OSFillParent" data-button="" type="button">
      <div aria-hidden="true" class="osui-btn-loading__spinner-animation" data-container=""></div>
      Login with UBT One
    </button>
  </div>
</div>
```

### Variant 3: Login/default (×3)

```html
<div class="OSBlockWidget" data-block="Utilities.ButtonLoading" id="$b8">
  <div aria-atomic="true" aria-busy="false" aria-live="polite" class="osui-btn-loading OSInline full-width" id="b8-Button">
    <button class="btn OSFillParent" data-button="" type="button">
      <div aria-hidden="true" class="osui-btn-loading__spinner-animation" data-container=""></div>
      Forgot Password?
    </button>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$model", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRec", "OutSystemsUI_2_23.controller$ButtonLoadingDestroy", "OutSystemsUI_2_23.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI_2_23.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI_2_23.controller$ButtonLoadingRegisterCallback", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$ButtonLoadingCreate", "OutSystemsUI_2_23.controller$ButtonLoadingInitialize"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_model, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.ButtonLoading";
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
                return OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.button,
                extendedProperties: {
                    name: model.variables.internal_ConfigsVar.uniqueIdAttr
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "osui-btn-loading",
                _idProps: {
                    service: idService,
                    name: "Button"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
