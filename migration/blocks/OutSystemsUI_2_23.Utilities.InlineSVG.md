# OutSystemsUI_2_23.Utilities.InlineSVG

- Kind: osui; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, ConnectShare, ContactByEmailMember, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/OutSystemsUI_2_23.Utilities.InlineSVG.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| SVGCode | Text |
| ExtendedClass | Text |

## Captured DOM variants (2 distinct, 108 instances)

### Variant 1: BookmarksByGroup/default (×107)

```html
<div class="OSBlockWidget" data-block="Utilities.InlineSVG" id="b3-b2-b1-b2-b1-$b1">
  <div class="osui-inline-svg svg-wrapper OSInline ubt-header-svg" data-container="" id="b3-b2-b1-b2-b1-b1-SVG" style="height: 100%;">
    <svg viewbox="0 0 100 200">
      <defs>
        <lineargradient id="primaryGradient">
          <stop offset="0%" stop-color="var(--color-primary,#00819C)"></stop>
          <stop offset="100%" stop-color="var(--color-cyan,#4EAEC2)"></stop>
        </lineargradient>
      </defs>
      <path d="M0,0 H100 V160 Q50,181 0,160 Z" fill="url(#primaryGradient)"></path>
    </svg>
  </div>
</div>
```

### Variant 2: Splash/default (×1)

```html
<div class="OSBlockWidget" data-block="Utilities.InlineSVG" id="b2-b1-$b1">
  <div class="osui-inline-svg svg-wrapper OSInline ubt-header-svg ubt-loading-svg" data-container="" id="b2-b1-b1-SVG" style="height: 100%;">
    <svg viewbox="0 0 100 200">
      <defs>
        <lineargradient id="primaryGradient">
          <stop offset="0%" stop-color="var(--color-primary,#00819C)"></stop>
          <stop offset="100%" stop-color="var(--color-cyan,#4EAEC2)"></stop>
        </lineargradient>
      </defs>
      <path d="M 100,50 A 50,50 0 1,0 0,50 A 50,50 0 1,0 100,50" data-svg-origin="50 50" fill="url(#primaryGradient)" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" transform="matrix(2.7087,0,0,2.7087,-85.435,-35.435)"></path>
    </svg>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$model", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$InlineSVG_InternalConfigRec", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$InlineSVGCreate", "OutSystemsUI_2_23.controller$InlineSVGRegisterCallback", "OutSystemsUI_2_23.controller$InlineSVGDestroy", "OutSystemsUI_2_23.controller$InlineSVGChangeTextProperty", "OutSystemsUI_2_23.controller$InlineSVGInitialize"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_model, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.InlineSVG";
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
                return OutSystemsUI_2_23_Utilities_InlineSVG_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Utilities_InlineSVG_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        name: model.variables.internal_ConfigsVar.uniqueIdAttr,
                        style: "height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "osui-inline-svg svg-wrapper",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "SVG"
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
