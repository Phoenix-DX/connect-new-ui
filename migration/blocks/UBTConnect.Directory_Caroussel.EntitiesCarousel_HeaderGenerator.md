# UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_HouseholdCarouselHeaderList | RecordList HeaderListList |
| In_CurrentIndex | Integer |

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: HouseholdCarousel/default (×6)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_HeaderGenerator" id="b3-$b3"></div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.model$HeaderListList", "UBTConnect.controller$Get_CurrentEntityHeader"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_controller, UBTConnectClientVariables) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel_HeaderGenerator";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
