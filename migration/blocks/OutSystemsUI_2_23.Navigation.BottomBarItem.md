# OutSystemsUI_2_23.Navigation.BottomBarItem

- Kind: osui; build screens using it: BookmarksByGroup, BrowseCountries, BrowseDirectory, CountryDetails, CountryList, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Menu, MessageDetail, MessageList, MyBookmarks, Notes, Notifications, OneSchoolGlobalDetails, Search, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/OutSystemsUI_2_23.Navigation.BottomBarItem.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| ExtendedClass | Text |

## Captured DOM variants (2 distinct, 285 instances)

### Variant 1: BookmarksByGroup/default (×228)

```html
<div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-49_0-$b2">
  <div class="bottom-bar-item" data-container="">
    <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-49_0-b2-Icon" style="text-align: center;">
      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-49_0-$b4"><!-- nested block: 1 nodes --></div>
    </div>
    <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-49_0-b2-Text" style="text-align: center;">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-49_0-$b5"><!-- nested block: 4 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 2: BookmarksByGroup/default (×57)

```html
<div class="OSBlockWidget" data-block="Navigation.BottomBarItem" id="b2-l1-49_2-$b2">
  <div class="bottom-bar-item" data-container="">
    <div class="placeholder-empty bottom-bar-item-icon" id="b2-l1-49_2-b2-Icon" style="text-align: center;">
      <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-l1-49_2-$b3"><!-- nested block: 12 nodes --></div>
    </div>
    <div class="placeholder-empty bottom-bar-item-text" id="b2-l1-49_2-b2-Text" style="text-align: center;">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-49_2-$b5"><!-- nested block: 4 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Navigation.BottomBarItem.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Navigation.BottomBarItem.mvc$model", "OutSystemsUI_2_23.Navigation.BottomBarItem.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_model, OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_controller, OSWidgets) {
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
        View.displayName = "Navigation.BottomBarItem";
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
                return OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_controller;
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
                style: (("bottom-bar-item" + " ") + model.variables.extendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Center*/ 2,
                content: _this.props.placeholders.icon,
                style: "placeholder-empty bottom-bar-item-icon",
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Center*/ 2,
                content: _this.props.placeholders.text,
                style: "placeholder-empty bottom-bar-item-text",
                _idProps: {
                    service: idService,
                    name: "Text"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
