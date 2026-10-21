# UBTConnect_Utils.CacheControl.CacheControl

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect_Utils.CacheControl.CacheControl.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| CacheTypeId | Text |
| CacheKey | Text |
| TimeToLiveSeconds | Integer |
| Timeout | Integer |

## Captured DOM variants (1 distinct, 39 instances)

### Variant 1: ContactUsDetails/default (×39)

```html
<div class="OSBlockWidget" data-block="CacheControl.CacheControl" id="b26-b1-$b1"></div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CacheControl.CacheControl.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CacheControl.CacheControl.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl.mvc$controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, MemoryClientCacheController, React, OSView, UBTConnect_Utils_CacheControl_CacheControl_mvc_model, UBTConnect_Utils_CacheControl_CacheControl_mvc_controller, UBTConnect_UtilsClientVariables) {
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
        View.displayName = "CacheControl.CacheControl";
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
                return UBTConnect_Utils_CacheControl_CacheControl_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CacheControl_CacheControl_mvc_controller;
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
