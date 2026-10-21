# UBTConnectLibrary.ConnectPatterns.DynamicTextArea

- Kind: shared; build screens using it: ContactByEmailMember, ContactByEmailOneSchoolGlobal
- Compiled source: `migration/screens/ContactByEmailOneSchoolGlobal/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_Text | Text |
| In_IsBounded | Boolean |

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: ContactByEmailOneSchoolGlobal/default (×3)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.DynamicTextArea" id="b2-$b4">
  <div class="resizable-text-area resizable-text-area--bounded" data-container="">
    <div id="b2-b4-Placeholder_TextArea">
      <span data-replicated-value="">
        <textarea class="form-control OSFillParent" data-textarea="" id="b2-TextArea_Subject"></textarea>
      </span>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$model", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_model, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.DynamicTextArea";
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
                return UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_controller;
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
                style: model.getCachedValue(idService.getId("ekmB1YEf3k61gXwTL5F3Hw.Style"), function() {
                    return ("resizable-text-area" + ((model.variables.in_IsBoundedIn) ? (" resizable-text-area--bounded") : ("")));
                }, function() {
                    return model.variables.in_IsBoundedIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsBoundedInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_TextArea,
                _idProps: {
                    service: idService,
                    name: "Placeholder_TextArea"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
