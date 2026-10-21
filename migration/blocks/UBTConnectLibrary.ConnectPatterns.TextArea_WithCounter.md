# UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter

- Kind: shared; build screens using it: ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.InputCounter (queue: UBTConnectLibrary.ConnectPatterns.InputCounter)

## Inputs

| Input | Type |
|---|---|
| In_InitialLength | Integer |

## Captured DOM variants (2 distinct, 9 instances)

### Variant 1: ContactByEmailMember/default (×6)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.TextArea_WithCounter" id="b2-$b7">
  <div class="ubt-input-with-counter" data-container="">
    <div id="b2-b7-Placeholder_Input">
      <label class="OSFillParent" data-label="">
        <span data-expression="">
          Message
        </span>
      </label>
      <span>
        <textarea class="form-control OSFillParent" data-textarea="" id="b2-TextArea_Message" placeholder="Add a message"></textarea>
      </span>
    </div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.InputCounter" id="b2-b7-$b1"><!-- nested block: 4 nodes --></div>
  </div>
</div>
```

### Variant 2: ContactUsDetails/default (×3)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.TextArea_WithCounter" id="$b12">
  <div class="ubt-input-with-counter" data-container="">
    <div id="b12-Placeholder_Input">
      <label class="mandatory OSFillParent" data-label="">
        Message
      </label>
      <span>
        <textarea class="form-control OSFillParent" data-textarea="" id="TextArea_Message" placeholder="To help us assist you better, please provide your query/ issue regarding Set up a UBT One account."></textarea>
      </span>
    </div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.InputCounter" id="b12-$b1"><!-- nested block: 4 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$model", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$view"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_model, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view) {
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
        View.displayName = "ConnectPatterns.TextArea_WithCounter";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_controller;
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
                style: model.variables.mainContainerClassVar,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Input,
                _idProps: {
                    service: idService,
                    name: "Placeholder_Input"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $if(((model.variables.inputIdVar) !== ("")), false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, {
                    inputs: {
                        In_InputId: model.variables.inputIdVar,
                        In_InitialLength: model.variables.in_InitialLengthIn,
                        _in_InitialLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_InitialLengthInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        }
                    },
                    _validationProps: {
                        validationService: validationService
                    },
                    _idProps: {
                        service: idService,
                        uuid: "2",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
