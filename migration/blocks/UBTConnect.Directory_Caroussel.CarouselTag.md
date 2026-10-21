# UBTConnect.Directory_Caroussel.CarouselTag

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.CarouselTag.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.TagContent (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_IndexCurrentItem | Integer |
| In_TotalItems | Integer |

## Captured DOM variants (1 distinct, 21 instances)

### Variant 1: HouseholdCarousel/default (×21)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.CarouselTag" id="b3-l1-1152_0-b2-$b4">
  <div class="OSBlockWidget" data-block="ConnectPatterns.TagContent" id="b3-l1-1152_0-b2-b4-$b1"><!-- nested block: 4 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Caroussel.CarouselTag.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$model", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.TagContent.mvc$view", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_CarouselTag_mvc_model, UBTConnect_Directory_Caroussel_CarouselTag_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Caroussel.CarouselTag";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_CarouselTag_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_CarouselTag_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, {
                inputs: {
                    BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                    Text: ((((model.variables.in_IndexCurrentItemIn + 1)).toString() + " / ") + (model.variables.in_TotalItemsIn).toString()),
                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IndexCurrentItemInDataFetchStatus, model.variables._in_TotalItemsInDataFetchStatus)
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
