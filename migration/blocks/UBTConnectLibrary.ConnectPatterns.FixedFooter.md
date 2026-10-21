# UBTConnectLibrary.ConnectPatterns.FixedFooter

- Kind: shared; build screens using it: AcceptPendingPolicies, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, Profile, Services
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| useBottomBar | Boolean |
| ExpectedFooterHeight | Text |
| ContentContainerId | Text |

## Captured DOM variants (1 distinct, 15 instances)

### Variant 1: ContactByEmailMember/default (×15)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.FixedFooter" id="b2-$b8">
  <div class="ubt-fixed-footer ubt-fixed-footer--no-bottom-bar" data-container="">
    <div id="b2-b8-Content">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-$b9"><!-- nested block: 25 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$model", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$FormatClasses", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$JSUtils_AddClass"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, React, OSView, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_model, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.FixedFooter";
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
                return UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_controller;
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
                style: model.getCachedValue(idService.getId("YeE4UiE03ku4Za7HTMRl_Q.Style"), function() {
                        return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, ((!(model.variables.useBottomBarIn)) ? ((model.variables.mainContainerClassVar + "--no-bottom-bar")) : ("")), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.useBottomBarIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useBottomBarInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
