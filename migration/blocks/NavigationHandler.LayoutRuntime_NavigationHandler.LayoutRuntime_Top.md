# NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 114 instances)

### Variant 1: BookmarksByGroup/default (×114)

```html
<div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"></div>
```


## Compiled view (debugger lines removed)

```js
define("NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$controller", "NavigationHandler.controller$AddDefaultBackNavigationHandlers"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_model, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller) {
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
        View.displayName = "LayoutRuntime_NavigationHandler.LayoutRuntime_Top";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
