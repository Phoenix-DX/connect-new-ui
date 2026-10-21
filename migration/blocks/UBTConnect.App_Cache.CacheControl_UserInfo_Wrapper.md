# UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper

- Kind: shared; build screens using it: ContactUsDetails, CountryDetails, CountryList, Menu, Notes, Notifications, Profile, Search, Updates_SingleList
- Compiled source: `migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc.js`
- Child blocks: UBTConnect_Utils.CacheControl.CacheControl_UserInfo (queue: UBTConnect_Utils.CacheControl.CacheControl_UserInfo)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 21 instances)

### Variant 1: ContactUsDetails/default (×21)

```html
<div class="OSBlockWidget" data-block="App_Cache.CacheControl_UserInfo_Wrapper" id="$b26">
  <div class="OSBlockWidget" data-block="CacheControl.CacheControl_UserInfo" id="b26-$b1"><!-- nested block: 1 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$controller", "UBTConnect.clientVariables", "UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$GetUserInformation_Wrapper_Assign", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_model, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_controller, UBTConnectClientVariables, UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvc_view, OSWidgets) {
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
        View.displayName = "App_Cache.CacheControl_UserInfo_Wrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    result$Action: function(cacheControl_ResponseIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.cacheControl_UserInfoResult$Action(cacheControl_ResponseIn, controller.callContext(eventHandlerContext));
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
