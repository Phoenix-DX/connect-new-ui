# Connect2_LegacyShared.Layout.MenuIcon_Back

- Kind: shared; build screens using it: ConnectShare, LegacyShareObject, MessageDetail, MessageList
- Compiled source: `migration/screens/ConnectShare/analysis/sources/pretty/Connect2_LegacyShared.Layout.MenuIcon_Back.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 8 instances)

### Variant 1: ConnectShare/default (×8)

```html
<div class="OSBlockWidget" data-block="Layout.MenuIcon_Back" id="b1-$b2">
  <div class="app-menu-icon back" data-container="" id="b1-b2-MenuIcon" style="margin-top: 0px;">
    <a class="app-menu-back OSFillParent" data-link="" data-original-href="#" id="b1-b2-Back">
      <i class="icon fa fa-arrow-left fa-1x" data-icon="" id="b1-b2-ArrowBack" style="font-size: 1.5em;"></i>
    </a>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_model, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Layout.MenuIcon_Back";
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
                return Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_controller;
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
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: "app-menu-icon back",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MenuIcon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                onClick: function() {
                    OS.Navigation.navigateBack(null);
                },
                style: "app-menu-back",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Back"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    style: "font-size: 1.5em;"
                },
                icon: "arrow-left",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ArrowBack"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
