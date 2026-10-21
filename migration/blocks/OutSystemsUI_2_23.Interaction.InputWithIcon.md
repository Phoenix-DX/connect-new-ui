# OutSystemsUI_2_23.Interaction.InputWithIcon

- Kind: osui; build screens using it: BookmarksByGroup, BrowseCountries, BrowseDirectory, CountryDetails, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, LegacyShareObject, Locality_Details, MessageList, Notes, Notifications, OneSchoolGlobalDetails, Profile, Search, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/BrowseCountries/analysis/sources/pretty/OutSystemsUI_2_23.Interaction.InputWithIcon.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| AlignIconRight | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (4 distinct, 52 instances)

### Variant 1: BrowseCountries/default (×23)

```html
<div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b2-b3-$b1">
  <div class="input-with-icon" data-container="" id="b2-b3-b1-InputWithIconWrapper">
    <div class="input-with-icon-content-icon center placeholder-empty" id="b2-b3-b1-Icon">
      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-b3-$b2"><!-- nested block: 1 nodes --></div>
    </div>
    <div class="input-with-icon-input" id="b2-b3-b1-Input">
      <div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b2-b3-$b3"><!-- nested block: 5 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 2: BrowseCountries/default (×23)

```html
<div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b2-b3-$b3">
  <div class="input-with-icon input-with-icon-right" data-container="" id="b2-b3-b3-InputWithIconWrapper">
    <div class="input-with-icon-content-icon center placeholder-empty" id="b2-b3-b3-Icon"></div>
    <div class="input-with-icon-input" id="b2-b3-b3-Input">
      <span class="input-search">
        <input aria-required="false" class="form-control border-radius-rounded OSFillParent" data-input="" id="b2-b3-Input_Search" placeholder="Search country" type="search"/>
      </span>
    </div>
  </div>
</div>
```

### Variant 3: LegacyShareObject/default (×3)

```html
<div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b1-b8-$b1">
  <div class="input-with-icon border-radius-soft border-neutral-4" data-container="" id="b1-b8-b1-InputWithIconWrapper">
    <div class="input-with-icon-content-icon center placeholder-empty" id="b1-b8-b1-Icon">
      <i class="icon fa fa-search fa-1x" data-icon=""></i>
    </div>
    <div class="input-with-icon-input" id="b1-b8-b1-Input">
      <div class="form-control" data-container="">
        <span class="input-search">
          <input aria-required="false" class="form-control OSFillParent" data-input="" id="b1-b8-Input_SearchFilter" placeholder="Share with..." type="search"/>
        </span>
      </div>
    </div>
  </div>
</div>
```

### Variant 4: Profile/default (×3)

```html
<div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="$b16">
  <div class="input-with-icon input-with-icon-right" data-container="" id="b16-InputWithIconWrapper">
    <div class="input-with-icon-content-icon center placeholder-empty" id="b16-Icon">
      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="$b17"><!-- nested block: 1 nodes --></div>
    </div>
    <div class="input-with-icon-input" id="b16-Input">
      <span class="input-text">
        <input aria-required="false" class="form-control OSFillParent" data-input="" disabled="" id="Input_UBTAccountNumber" type="text"/>
      </span>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$model", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_model, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.InputWithIcon";
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
                return OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_controller;
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
                style: model.getCachedValue(idService.getId("InputWithIconWrapper.Style"), function() {
                    return ((("input-with-icon" + ((!(model.variables.alignIconRightIn)) ? ("") : (" input-with-icon-right"))) + " ") + model.variables.extendedClassIn);
                }, function() {
                    return model.variables.alignIconRightIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "InputWithIconWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._alignIconRightInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.icon,
                style: "input-with-icon-content-icon center placeholder-empty",
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.input,
                style: "input-with-icon-input",
                _idProps: {
                    service: idService,
                    name: "Input"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
