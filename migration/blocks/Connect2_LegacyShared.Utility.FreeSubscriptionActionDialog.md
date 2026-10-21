# Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog

- Kind: shared; build screens using it: LegacyShareObject, MessageDetail
- Compiled source: `migration/screens/LegacyShareObject/analysis/sources/pretty/Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc.js`
- Child blocks: NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: LegacyShareObject/default (×3)

```html
<div class="OSBlockWidget" data-block="Utility.FreeSubscriptionActionDialog" id="b1-b8-FreeSubscriptionAlert">
  <div class="upgrade-subscription-action-dialog backwards-compatibility" data-container="">
    <div class="OSBlockWidget" data-block="ConfirmationDialogs.ActionConfirmationDialog" id="b1-b8-b7-$b1"><!-- nested block: 2 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "CommonPlugin.model", "InAppBrowserEvents.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "InAppBrowserEvents.model", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$model", "Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "InAppBrowserEvents.controller$CheckInAppBrowserPlugin", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "InAppBrowserEvents.model$OptionsRec", "InAppBrowserEvents.model$AndroidOptionsRec", "InAppBrowserEvents.model$IOSOptionsRec", "InAppBrowserEvents.controller$Open"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, CommonPluginModel, InAppBrowserEventsController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, InAppBrowserEventsModel, React, OSView, Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_model, Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view) {
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
        View.displayName = "Utility.FreeSubscriptionActionDialog";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_controller;
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
                style: "upgrade-subscription-action-dialog backwards-compatibility",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    confirmed$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.onConfirmed$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    dialogHeader: new PlaceholderContent(function() {
                        return ["Access Restricted"];
                    }),
                    dialogBody: new PlaceholderContent(function() {
                        return ["It seems like you don\'t have access to this information.", React.createElement("br"), React.createElement("br"), "Please upgrade your subscription to gain access to more features and information."];
                    }),
                    buttonLabel_Confirm: new PlaceholderContent(function() {
                        return ["Upgrade Subscription"];
                    }),
                    buttonLabel_Dismiss: new PlaceholderContent(function() {
                        return ["Cancel"];
                    })
                },
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
