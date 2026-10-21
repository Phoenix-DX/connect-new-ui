# NavigationHandler.NavigationHandler.PreventBackNavigation

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/PINRegister/analysis/sources/pretty/NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js`
- Child blocks: NavigationHandler.NavigationHandler.BackNavigationHandler (queue: NavigationHandler.NavigationHandler.BackNavigationHandler)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: PINRegister/default (×6)

```html
<div class="OSBlockWidget" data-block="NavigationHandler.PreventBackNavigation" id="b4-b1-b1-$b1">
  <div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b4-b1-b1-b1-$b1"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$controller", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "OutSystems/ReactWidgets/Main", "NavigationHandler.controller$LockScreenBackNavigationPriority", "NavigationHandler.controller$PreventNavigation"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_model, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_controller, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, OSWidgets) {
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
        View.displayName = "NavigationHandler.PreventBackNavigation";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                    inputs: {
                        Priority: model.getCachedValue(idService.getId("UPZIfhEq0kWQ9snIMfysUw.Priority"), function() {
                                return NavigationHandlerController.default.lockScreenBackNavigationPriority$Action(callContext).priorityOut;
                            }, OS.DataTypes.DataTypes.Integer, callContext.id);
                        })
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        backNavigation$Action: function(backNavigationEventIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.preventBackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
