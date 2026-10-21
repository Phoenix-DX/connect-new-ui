# OutSystemsUI_2_23.Content.Card

- Kind: osui; build screens using it: MessageDetail
- Compiled source: `migration/screens/MessageDetail/analysis/sources/pretty/OutSystemsUI_2_23.Content.Card.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| UsePadding | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: MessageDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.Card" id="b1-b4-NotificationDetail">
  <div class="placeholder-empty card card-content" id="b1-b4-b1-Content">
    <div class="display-flex align-items-center" data-container="">
      <div class="notification-detail-icon-badge" data-container="">
        <img data-image="" data-rendered-size="49x49" src="/UBT_CW/img/UBT_CW.directory_entity_logo.png"/>
      </div>
      <div class="ThemeGrid_Width8" data-container="" style="margin-top: 10px; padding: 0px 0px 0px 5px;">
        <div class="bold heading3" data-container="" id="b1-b4-TitleContainer" style="font-size: 100%;">
          <span data-expression="" style="font-size: 100%;">
            Test Noti 56
          </span>
        </div>
      </div>
      <div class="ThemeGrid_Width2" data-container="" style="text-align: center; margin-left: 5px; margin-top: 10px; padding: 0px;"></div>
    </div>
    <div class="margin-top-base" data-container="" style="border-color: rgb(198, 198, 198); border-style: solid; border-width: 2px 0px 0px; margin-right: 10px; margin-top: 10px; padding: 15px 0px 10px;">
      <div class="whitespace-normal notification-detail-content" data-container="" style="white-space: normal; word-break: break-word;">
        <div class="OSBlockWidget" data-block="HtmlSanitizer.SanitizedHtml" id="b1-b4-$b3"><!-- nested block: 3 nodes --></div>
      </div>
    </div>
    <div class="margin-top-base" data-container="" style="margin-top: 3px;">
      <span class="text-note" data-expression="" id="b1-b4-Message_List_Item_Info">
        ••• •••••••••• ••••• ••
      </span>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.Card.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.Card.mvc$model", "OutSystemsUI_2_23.Content.Card.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_Card_mvc_model, OutSystemsUI_2_23_Content_Card_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.Card";
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
                return OutSystemsUI_2_23_Content_Card_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_Card_mvc_controller;
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
                style: model.getCachedValue(idService.getId("Content.Style"), function() {
                    return (("placeholder-empty card card-content" + ((model.variables.usePaddingIn) ? ("") : (" padding-none "))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.usePaddingIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._usePaddingInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
