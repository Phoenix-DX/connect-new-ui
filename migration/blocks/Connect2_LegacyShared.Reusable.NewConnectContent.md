# Connect2_LegacyShared.Reusable.NewConnectContent

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/screens/AssembleEvents/analysis/sources/pretty/Connect2_LegacyShared.Reusable.NewConnectContent.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (2 distinct, 6 instances)

### Variant 1: AssembleEvents/default (×3)

```html
<div class="OSBlockWidget" data-block="Reusable.NewConnectContent" id="b2-$b3">
  <div class="ignore-backwards-compatibility-content" id="b2-b3-Content">
    <div class="OSBlockWidget" data-block="Assemble.AssembleSummary_List" id="b2-$b4"><!-- nested block: 77 nodes --></div>
  </div>
</div>
```

### Variant 2: AssembleEvents/default (×3)

```html
<div class="OSBlockWidget" data-block="Reusable.NewConnectContent" id="b2-b4-b8-Block_FilterContent">
  <div class="ignore-backwards-compatibility-content" id="b2-b4-b8-b2-Content">
    <div class="font-size-s font-semi-bold padding-base action-menu-container--scrollable__header" data-container="" id="b2-b4-b8-DIV_Header">
      Filters
      <div class="padding-x-s padding-y-base assemble-filter-search" data-container="" id="b2-b4-b8-DIV_Search">
        <div class="OSBlockWidget" data-block="ConnectPatterns.Input" id="b2-b4-b8-$b3"><!-- nested block: 13 nodes --></div>
      </div>
      <div class="display-flex justify-content-space-between font-semi-bold" data-container="" id="b2-b4-b8-DIV_MeetingType__Header">
        <div class="OSInline" data-container="">
          Meeting Types
        </div>
        <a class="ThemeGrid_MarginGutter" data-link="" data-original-href="#">
          Reset
        </a>
      </div>
    </div>
    <div class="padding-x-base padding-bottom-base font-size-s assemble-filter-filters" data-container="" id="b2-b4-b8-DIV_Filters">
      <div data-container="" id="b2-b4-b8-DIV_MeetingType">
        <div data-container="" id="b2-b4-b8-DIV_MeetingType__FilterList">
          <div class="list list-group OSFillParent" data-list="" style="position: relative;"></div>
        </div>
      </div>
      <div class="text-align-center assemble-filter-actions" data-container="" id="b2-b4-b8-DIV_Action">
        <button class="btn" data-button="" type="button">
          Cancel
        </button>
        <button class="btn btn-primary ThemeGrid_MarginGutter" data-button="" type="button">
          <span class="font-size-s">
            Apply
          </span>
        </button>
      </div>
    </div>
    <div class="padding-x-base padding-bottom-base" data-container=""></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Reusable.NewConnectContent.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$model", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_model, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.NewConnectContent";
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
                return Connect2_LegacyShared_Reusable_NewConnectContent_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_NewConnectContent_mvc_controller;
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
                content: _this.props.placeholders.content,
                style: "ignore-backwards-compatibility-content",
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
