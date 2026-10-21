# UBTConnectLibrary.ConnectPatterns.PopupMenu

- Kind: shared; build screens using it: HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, MessageDetail, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Position | Text |
| IsOpen | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (2 distinct, 118 instances)

### Variant 1: HomeFeed/default (×117)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.PopupMenu" id="b9-l1-89_0-b3-b20-$b1">
  <div class="dx-popup-menu dx-popup-menu-position-bottom-left" data-container="" id="b9-l1-89_0-b3-b20-b1-Root">
    <div class="dx-popup-menu-anchor" id="b9-l1-89_0-b3-b20-b1-Anchor">
      <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b9-l1-89_0-b3-b20-$b3"><!-- nested block: 1 nodes --></div>
    </div>
    <div class="dx-popup-menu-container dx-popup-menu-position-bottom-left" data-container=""></div>
  </div>
</div>
```

### Variant 2: Profile/default (×1)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.PopupMenu" id="b60-b2-b8-b2-$b1">
  <div class="dx-popup-menu dx-popup-menu-position-left" data-container="" id="b60-b2-b8-b2-b1-Root">
    <div class="dx-popup-menu-anchor" id="b60-b2-b8-b2-b1-Anchor">
      <div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton_IconPrimary" id="b60-b2-b8-b2-$b2"><!-- nested block: 15 nodes --></div>
    </div>
    <div class="dx-popup-menu-container dx-popup-menu-position-left" data-container=""></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc$model", "UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_model, UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.PopupMenu";
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
                return UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_controller;
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
                style: model.getCachedValue(idService.getId("Root.Style"), function() {
                    return ((("dx-popup-menu dx-popup-menu-position-" + model.variables.positionIn) + ((model.variables.isOpenIn) ? (" dx-popup-menu-open") : (""))) + ((((model.variables.extendedClassIn) !== (""))) ? ((" " + model.variables.extendedClassIn)) : ("")));
                }, function() {
                    return model.variables.positionIn;
                }, function() {
                    return model.variables.isOpenIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Root"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._positionInDataFetchStatus, model.variables._isOpenInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.anchor,
                style: "dx-popup-menu-anchor",
                _idProps: {
                    service: idService,
                    name: "Anchor"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("rd0xoevrnEWPgZLiFwFIlA.Style"), function() {
                    return ((("dx-popup-menu-container dx-popup-menu-position-" + model.variables.positionIn) + ((model.variables.isOpenIn) ? (" dx-popup-menu-open") : (""))) + ((((model.variables.extendedClassIn) !== (""))) ? ((" " + model.variables.extendedClassIn)) : ("")));
                }, function() {
                    return model.variables.positionIn;
                }, function() {
                    return model.variables.isOpenIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._positionInDataFetchStatus, model.variables._isOpenInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, $if((model.variables.isOpenIn || model.variables.hasOpenedVar), false, this, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.popupMenu,
                    style: "dx-popup-menu-content",
                    _idProps: {
                        service: idService,
                        name: "PopupMenu"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
