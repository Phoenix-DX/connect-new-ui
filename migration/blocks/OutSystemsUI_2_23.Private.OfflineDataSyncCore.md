# OutSystemsUI_2_23.Private.OfflineDataSyncCore

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
- Child blocks: OutSystemsUI_2_23.Private.NetworkStatusChanged (queue: OutSystemsUI_2_23.Private.NetworkStatusChanged)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 102 instances)

### Variant 1: BookmarksByGroup/default (×102)

```html
<div class="OSBlockWidget" data-block="Private.OfflineDataSyncCore" id="b3-b1-$b1">
  <div class="OSBlockWidget" data-block="Private.NetworkStatusChanged" id="b3-b1-b1-$b1"><!-- nested block: 1 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$model", "OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc$controller", "OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.controller$StartOfflineDataSync", "OutSystemsUI_2_23.controller$EndOfflineDataSync", "OutSystemsUI_2_23.controller$GetNetworkStatus"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_model, OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller, OutSystemsUI_2_23_Private_NetworkStatusChanged_mvc_view, OSWidgets) {
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
        View.displayName = "Private.OfflineDataSyncCore";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OfflineDataSync.js"];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Private_NetworkStatusChanged_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Private_OfflineDataSyncCore_mvc_controller;
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
                return [React.createElement(OutSystemsUI_2_23_Private_NetworkStatusChanged_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        networkStatusChanged$Action: function(isOnlineIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                controller.onNetworkStatusChanged$Action(isOnlineIn, controller.callContext(eventHandlerContext));
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
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
