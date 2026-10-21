# Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI

- Kind: shared; build screens using it: BookmarksByGroup, MessageList, MyBookmarks
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| MenuAction | Text |

## Captured DOM variants (2 distinct, 9 instances)

### Variant 1: BookmarksByGroup/default (×3)

```html
<div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
  <div class="app-menu-icon back" data-container="" id="b1-b2-MenuIcon" style="margin-top: 0px;">
    <div aria-label="Back to previous screen" class="menu-back" data-container="" role="button" style="cursor: pointer;" tabindex="0">
      <i class="icon fa fa-arrow-left fa-1x" data-icon="" id="b1-b2-ArrowReverse"></i>
    </div>
  </div>
</div>
```

### Variant 2: MessageList/default (×6)

```html
<div class="OSBlockWidget" data-block="Layout.MenuIcon__UpdatedOSUI" id="b1-$b2">
  <div class="app-menu-icon" data-container="" id="b1-b2-MenuIcon" style="margin-top: 0px;">
    <div aria-label="Back to previous screen" class="menu-back" data-container="" role="button" style="cursor: pointer;" tabindex="0">
      <i class="icon fa fa-arrow-left fa-1x" data-icon="" id="b1-b2-ArrowReverse"></i>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetMenuIconListeners", "OutSystemsUI_2_23.controller$IsRTL", "OutSystemsUI_2_23.controller$SetMenuIcon", "OutSystemsUI_2_23.controller$ToggleSideMenu"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_model, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Layout.MenuIcon__UpdatedOSUI";
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
                return Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_controller;
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
                style: model.getCachedValue(idService.getId("MenuIcon.Style"), function() {
                    return ("app-menu-icon" + ((((model.variables.menuActionIn) !== (Connect2_LegacySharedModel.staticEntities.menuAction.back))) ? ("") : (" back")));
                }, function() {
                    return model.variables.menuActionIn;
                }),
                visible: ((model.variables.menuActionIn) !== (Connect2_LegacySharedModel.staticEntities.menuAction.hidden)),
                _idProps: {
                    service: idService,
                    name: "MenuIcon"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus)
            }, $if(false, false, this, function() {
                return [];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.onBack$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                extendedProperties: {
                    "aria-label": "Back to previous screen",
                    role: "button",
                    tabIndex: "0"
                },
                style: "menu-back",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "arrow-left",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ArrowReverse"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
