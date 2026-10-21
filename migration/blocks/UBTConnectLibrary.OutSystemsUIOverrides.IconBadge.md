# UBTConnectLibrary.OutSystemsUIOverrides.IconBadge

- Kind: shared; build screens using it: BookmarksByGroup, BrowseCountries, BrowseDirectory, CountryDetails, CountryList, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Menu, MessageDetail, MessageList, MyBookmarks, Notes, Notifications, OneSchoolGlobalDetails, Search, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc.js`
- Child blocks: UBTConnectLibrary.OutSystemsUIOverrides.Badge (queue: UBTConnectLibrary.OutSystemsUIOverrides.Badge)

## Inputs

| Input | Type |
|---|---|
| Number | LongInteger |
| Color | Text |
| IsLight | Boolean |
| ExtendedClass | Text |
| MaxNumber | Integer |

## Captured DOM variants (1 distinct, 69 instances)

### Variant 1: BookmarksByGroup/default (×69)

```html
<div class="OSBlockWidget" data-block="OutSystemsUIOverrides.IconBadge" id="b2-l1-49_2-b3-IconBadge">
  <div class="icon-badge" data-container="">
    <div id="b2-l1-49_2-b3-b2-Icon">
      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-49_2-b3-$b3"><!-- nested block: 1 nodes --></div>
    </div>
    <div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b2-l1-49_2-b3-b2-$b1"><!-- nested block: 3 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$model", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$view"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_model, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view) {
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
        View.displayName = "OutSystemsUIOverrides.IconBadge";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_controller;
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
                style: (("icon-badge" + " ") + model.variables.extendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.icon,
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, {
                inputs: {
                    MaxNumber: model.variables.maxNumberIn,
                    _maxNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._maxNumberInDataFetchStatus),
                    Color: model.variables.colorIn,
                    _colorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._colorInDataFetchStatus),
                    Number: model.variables.numberIn,
                    _numberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._numberInDataFetchStatus),
                    IsLight: model.variables.isLightIn,
                    _isLightInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLightInDataFetchStatus)
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
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
