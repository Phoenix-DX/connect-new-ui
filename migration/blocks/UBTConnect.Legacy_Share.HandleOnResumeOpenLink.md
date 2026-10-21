# UBTConnect.Legacy_Share.HandleOnResumeOpenLink

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js`
- Child blocks: Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler, EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 99 instances)

### Variant 1: BookmarksByGroup/default (×99)

```html
<div class="OSBlockWidget" data-block="Legacy_Share.HandleOnResumeOpenLink" id="b3-$b5">
  <div class="OSBlockWidget" data-block="AndroidAppLinks.AndroidAppLinkOnResumeHandler" id="b3-b5-$b1"><!-- nested block: 0 nodes --></div>
  <div class="OSBlockWidget" data-block="EventfulDeeplinksPlugin.DeeplinkHandlerCentral" id="b3-b5-$b2"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect2_AndroidAppLinksPlugin.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$model", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$controller", "UBTConnect.clientVariables", "Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler.mvc$view", "OutSystems/ReactWidgets/Main", "EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral.mvc$view", "UBTConnect.controller$GetURLFromEventDataURL", "Connect2_AndroidAppLinksPlugin.model$EventDataRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect2_AndroidAppLinksPlugin", "UBTConnect.controller$SetResumeLoginLink", "UBT_AppManager.controller$AppManager_GetPIN_IsLocked", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Check", "UBT_AppManager.controller$AppManager_OnReadyChecker"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect2_AndroidAppLinksPluginModel, UBT_AppManagerController, React, OSView, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_model, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_controller, UBTConnectClientVariables, Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_view, OSWidgets, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_view) {
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
        View.displayName = "Legacy_Share.HandleOnResumeOpenLink";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_view, EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_AndroidAppLinksPlugin_AndroidAppLinks_AndroidAppLinkOnResumeHandler_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    resumeNavigation$Action: function(eventDataIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.androidAppLinkOnResumeHandlerResumeNavigation$Action(eventDataIn, controller.callContext(eventHandlerContext));
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
            }), React.createElement(EventfulDeeplinksPlugin_EventfulDeeplinksPlugin_DeeplinkHandlerCentral_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onDeeplinkOpen$Action: function(uRLIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.deeplinkHandlerCentralOnDeeplinkOpen$Action(uRLIn, controller.callContext(eventHandlerContext));
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
