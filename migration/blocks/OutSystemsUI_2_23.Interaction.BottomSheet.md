# OutSystemsUI_2_23.Interaction.BottomSheet

- Kind: osui; build screens using it: BookmarksByGroup, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, Notifications, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/CountryDetails/analysis/sources/pretty/OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Shape | Text |
| ShowHandler | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (8 distinct, 25 instances)

### Variant 1: CountryDetails/default (×1)

```html
<div class="OSBlockWidget" data-block="Interaction.BottomSheet" id="b28-b1-BottomSheet_Internal" style="--bottom-sheet--footer-height: 72px;">
  <span aria-hidden="true" class="focus-trap-top wcag-hide-text" tabindex="-1"></span>
  <div aria-hidden="true" class="osui-bottom-sheet ubt-bottom-sheet background-neutral-2 custom-padding bottom-sheet-higher-z-index osui-bottom-sheet--has-handler" data-container="" id="b28-b1-b1-BottomSheet" role="complementary" style="--bottom-sheet-shape: var(--border-radius-rounded);" tabindex="-1">
    <header class="osui-bottom-sheet__header" data-advancedhtml="" data-drag-to-open-bound="true" id="b28-b1-b1-Header" style="touch-action: none;">
      <div class="osui-bottom-sheet__header__top-bar" id="b28-b1-b1-TopBar">
        <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="b28-b1-$b2"><!-- nested block: 17 nodes --></div>
      </div>
    </header>
    <div class="osui-bottom-sheet__content" id="b28-b1-b1-Content">
      <div class="ubt-bottom-sheet--content padding-s" id="b28-b1-Content">
        <div class="OSBlockWidget" data-block="App_CommonBlocks_Filter.FilterSheet_OptionList_Item" id="b28-$b13"><!-- nested block: 599 nodes --></div>
      </div>
      <div class="ubt-bottom-sheet--footer" id="b28-b1-Footer">
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b28-$b14"><!-- nested block: 16 nodes --></div>
      </div>
    </div>
  </div>
  <div class="osui-bottom-sheet-overlay" data-container=""></div>
  <span aria-hidden="true" class="focus-trap-bottom wcag-hide-text" tabindex="-1"></span>
</div>
```

### Variant 2: CountryDetails/default (×6)

```html
<div class="OSBlockWidget" data-block="Interaction.BottomSheet" id="b29-b1-BottomSheet_Internal" style="--bottom-sheet--footer-height: 0px;">
  <span aria-hidden="true" class="focus-trap-top wcag-hide-text" tabindex="-1"></span>
  <div aria-hidden="true" class="osui-bottom-sheet ubt-bottom-sheet background-neutral-0 custom-padding directory-legend-explanation osui-bottom-sheet--has-handler" data-container="" id="b29-b1-b1-BottomSheet" role="complementary" style="--bottom-sheet-shape: var(--border-radius-rounded);" tabindex="-1">
    <header class="osui-bottom-sheet__header" data-advancedhtml="" data-drag-to-open-bound="true" id="b29-b1-b1-Header" style="touch-action: none;">
      <div class="osui-bottom-sheet__header__top-bar" id="b29-b1-b1-TopBar">
        <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="b29-b1-$b2"><!-- nested block: 17 nodes --></div>
      </div>
    </header>
    <div class="osui-bottom-sheet__content" id="b29-b1-b1-Content">
      <div class="ubt-bottom-sheet--content padding-x-base padding-bottom-xxl" id="b29-b1-Content">
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b29-LegendItem_Member"><!-- nested block: 18 nodes --></div>
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b29-LegendItem_Houses"><!-- nested block: 18 nodes --></div>
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b29-LegendItem_Localities"><!-- nested block: 8 nodes --></div>
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b29-LegendItem_Brothers"><!-- nested block: 18 nodes --></div>
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b29-LegendItem_Sisters"><!-- nested block: 18 nodes --></div>
      </div>
      <div class="ubt-bottom-sheet--footer" id="b29-b1-Footer"></div>
    </div>
  </div>
  <div class="osui-bottom-sheet-overlay" data-container=""></div>
  <span aria-hidden="true" class="focus-trap-bottom wcag-hide-text" tabindex="-1"></span>
</div>
```

### Variant 3: CountryDetails/loading (×2)

```html
<div class="OSBlockWidget" data-block="Interaction.BottomSheet" id="b28-b1-BottomSheet_Internal" style="--bottom-sheet--footer-height: 72px;">
  <span aria-hidden="true" class="focus-trap-top wcag-hide-text" tabindex="-1"></span>
  <div aria-hidden="true" class="osui-bottom-sheet ubt-bottom-sheet background-neutral-2 custom-padding bottom-sheet-higher-z-index osui-bottom-sheet--has-handler" data-container="" id="b28-b1-b1-BottomSheet" role="complementary" style="--bottom-sheet-shape: var(--border-radius-rounded);" tabindex="-1">
    <header class="osui-bottom-sheet__header" data-advancedhtml="" data-drag-to-open-bound="true" id="b28-b1-b1-Header" style="touch-action: none;">
      <div class="osui-bottom-sheet__header__top-bar" id="b28-b1-b1-TopBar">
        <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="b28-b1-$b2"><!-- nested block: 17 nodes --></div>
      </div>
    </header>
    <div class="osui-bottom-sheet__content" id="b28-b1-b1-Content">
      <div class="ubt-bottom-sheet--content padding-s" id="b28-b1-Content">
        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b28-Loading"><!-- nested block: 4 nodes --></div>
      </div>
      <div class="ubt-bottom-sheet--footer" id="b28-b1-Footer">
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b28-$b14"><!-- nested block: 16 nodes --></div>
      </div>
    </div>
  </div>
  <div class="osui-bottom-sheet-overlay" data-container=""></div>
  <span aria-hidden="true" class="focus-trap-bottom wcag-hide-text" tabindex="-1"></span>
</div>
```

### Variant 4: Notes/default (×8)

```html
<div class="OSBlockWidget" data-block="Interaction.BottomSheet" id="b11-b1-b1-BottomSheet_Internal" style="--bottom-sheet--footer-height: 72px;">
  <span aria-hidden="true" class="focus-trap-top wcag-hide-text" tabindex="-1"></span>
  <div aria-hidden="true" class="osui-bottom-sheet ubt-bottom-sheet background-neutral-2 custom-padding osui-bottom-sheet--has-handler" data-container="" id="b11-b1-b1-b1-BottomSheet" role="complementary" style="--bottom-sheet-shape: var(--border-radius-rounded);" tabindex="-1">
    <header class="osui-bottom-sheet__header" data-advancedhtml="" data-drag-to-open-bound="true" id="b11-b1-b1-b1-Header" style="touch-action: none;">
      <div class="osui-bottom-sheet__header__top-bar" id="b11-b1-b1-b1-TopBar">
        <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="b11-b1-b1-$b2"><!-- nested block: 17 nodes --></div>
      </div>
    </header>
    <div class="osui-bottom-sheet__content" id="b11-b1-b1-b1-Content">
      <div class="ubt-bottom-sheet--content padding-s" id="b11-b1-b1-Content">
        <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b11-b1-Loading"><!-- nested block: 63 nodes --></div>
      </div>
      <div class="ubt-bottom-sheet--footer" id="b11-b1-b1-Footer">
        <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b11-b1-$b14"><!-- nested block: 16 nodes --></div>
      </div>
    </div>
  </div>
  <div class="osui-bottom-sheet-overlay" data-container=""></div>
  <span aria-hidden="true" class="focus-trap-bottom wcag-hide-text" tabindex="-1"></span>
</div>
```

(4 more variants not shown: rerun with --variants)

## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Interaction.BottomSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$model", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$BottomSheet_InternalConfigRec", "OutSystemsUI_2_23.controller$BottomSheetCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$BottomSheetRegisterCallback", "OutSystemsUI_2_23.controller$BottomSheetDestroy", "OutSystemsUI_2_23.controller$BottomSheetInitialize", "OutSystemsUI_2_23.controller$BottomSheetChangeTextProperty", "OutSystemsUI_2_23.controller$BottomSheetChangeBooleanProperty"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_model, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.BottomSheet";
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
                return OutSystemsUI_2_23_Interaction_BottomSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Interaction_BottomSheet_mvc_controller;
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
                        name: model.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-bottom-sheet",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "BottomSheet"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.AdvancedHtml, {
                    extendedProperties: {
                        className: "osui-bottom-sheet__header"
                    },
                    tag: "header",
                    _idProps: {
                        service: idService,
                        name: "Header"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.topBar,
                    style: "osui-bottom-sheet__header__top-bar",
                    _idProps: {
                        service: idService,
                        name: "TopBar"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.content,
                    style: "osui-bottom-sheet__content",
                    _idProps: {
                        service: idService,
                        name: "Content"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "osui-bottom-sheet-overlay",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "4"
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
