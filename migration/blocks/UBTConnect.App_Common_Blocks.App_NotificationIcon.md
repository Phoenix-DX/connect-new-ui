# UBTConnect.App_Common_Blocks.App_NotificationIcon

- Kind: shared; build screens using it: CountryList, HomeFeed, Notes, Updates_SingleList
- Compiled source: `migration/screens/CountryList/analysis/sources/pretty/UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js`
- Child blocks: UBTConnect.App_Common_Blocks.App_IconBadge, UBTConnect.App_Common_Blocks.App_NotificationRefresh (queue: UBTConnect.App_Common_Blocks.App_IconBadge, UBTConnect.App_Common_Blocks.App_NotificationRefresh)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: CountryList/default (×12)

```html
<div class="OSBlockWidget" data-block="App_Common_Blocks.App_NotificationIcon" id="$b2">
  <div class="OSBlockWidget" data-block="App_Common_Blocks.App_IconBadge" id="b2-$b1"><!-- nested block: 12 nodes --></div>
  <div class="OSBlockWidget" data-block="App_Common_Blocks.App_NotificationRefresh" id="b2-$b2"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common_Blocks.App_NotificationRefresh.mvc$view", "UBTConnect_Utils.controller$GetHasNewNotifications", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.controller$GetUnreadNotificationNumber", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, Connect2_LegacySharedController, React, OSView, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_model, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, OSWidgets, UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_view) {
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
        View.displayName = "App_Common_Blocks.App_NotificationIcon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, {
                inputs: {
                    isLoading: !(UBTConnectClientVariables.getNotifications_IsSynched()),
                    BadgeNumber: model.variables.localNotificationsVar,
                    MaxNotifications: 9,
                    IconColor: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                    IconId: UBTConnectModel.staticEntities.uBT_Icons2.notifications
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.iconClick$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
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
            }), React.createElement(UBTConnect_App_Common_Blocks_App_NotificationRefresh_mvc_view, {
                inputs: {
                    Datetime: UBTConnectClientVariables.getNotifications_LastChecked()
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    updated$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.app_NotificationRefreshUpdated$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "1",
                    alias: "2"
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
