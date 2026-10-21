# UBTConnect.App_Common.Version

- Kind: shared; build screens using it: Login, Menu
- Compiled source: `migration/screens/Login/analysis/sources/pretty/UBTConnect.App_Common.Version.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomText (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: Login/default (×6)

```html
<div class="OSBlockWidget" data-block="App_Common.Version" id="b9-$b2">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b9-b2-$b1"><!-- nested block: 4 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Common.Version.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.Version.mvc$model", "UBTConnect.App_Common.Version.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$Get_ConnectVersionDetails", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsController, React, OSView, UBTConnect_App_Common_Version_mvc_model, UBTConnect_App_Common_Version_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, OSWidgets) {
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
        View.displayName = "App_Common.Version";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_Version_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_Version_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                inputs: {
                    In_Text: model.variables.versionVar,
                    In_TextOptions: model.getCachedValue(idService.getId("_81zPU+R9E2NZWsxahc6mA.In_TextOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
                            return rec;
                        }();
                    })
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
