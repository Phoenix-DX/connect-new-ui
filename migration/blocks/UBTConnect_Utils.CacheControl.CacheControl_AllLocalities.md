# UBTConnect_Utils.CacheControl.CacheControl_AllLocalities

- Kind: shared; build screens using it: CountryDetails, Notes, Profile, Search, Updates_SingleList
- Compiled source: `migration/screens/Updates_SingleList/analysis/sources/pretty/UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc.js`
- Child blocks: UBTConnect_Utils.CacheControl.CacheControl (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: Updates_SingleList/default (×3)

```html
<div class="OSBlockWidget" data-block="CacheControl.CacheControl_AllLocalities" id="b20-b1-$b19">
  <div class="OSBlockWidget" data-block="CacheControl.CacheControl" id="b20-b1-b19-$b1"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CacheControl.CacheControl.mvc$view", "OutSystems/ReactWidgets/Main", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec", "NavigationHandler.controller$AssignFromObject", "UBTConnect_Utils.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, NavigationHandlerController, React, OSView, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_model, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CacheControl_CacheControl_mvc_view, OSWidgets) {
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
        View.displayName = "CacheControl.CacheControl_AllLocalities";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CacheControl_CacheControl_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CacheControl_CacheControl_mvc_view, {
                inputs: {
                    CacheKey: model.variables.cacheKeyIn,
                    _cacheKeyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cacheKeyInDataFetchStatus),
                    CacheTypeId: model.variables.cacheTypeIdVar,
                    TimeToLiveSeconds: model.variables.timeToLiveSecondsIn,
                    _timeToLiveSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._timeToLiveSecondsInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onCacheHit$Action: function(objectIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.cacheControlOnCacheHit$Action(objectIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    onNonCacheHit$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.cacheControlOnNonCacheHit$Action(controller.callContext(eventHandlerContext));
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
