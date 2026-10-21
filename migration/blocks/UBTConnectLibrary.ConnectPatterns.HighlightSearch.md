# UBTConnectLibrary.ConnectPatterns.HighlightSearch

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.IconInline_Internal (queue: UBTConnectLibrary.ConnectPatterns.IconInline_Internal)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 4 instances)

### Variant 1: HouseholdCarousel/default (×4)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.HighlightSearch" id="b3-l1-1152_1-b2-b3-b1-b39-l2-1335_0-b11-b4-$b1">
  <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b3-l1-1152_1-b2-b3-b1-b39-l2-1335_0-b11-b4-b1-$b1"><!-- nested block: 0 nodes --></div>
  <div class="highlight-search" data-container="" id="b3-l1-1152_1-b2-b3-b1-b39-l2-1335_0-b11-b4-b1-Contents" style="display: inline;">
    <span>
      Married to
    </span>
    <span class="text-cyan-darkest font-semi-bold font-size-xs">
      <mark>
        •••••
      </mark>
    </span>
    <span></span>
    <span class="text-cyan-darkest font-semi-bold font-size-xs">
      <mark>
        •••••
      </mark>
    </span>
    <span>
      ••• •••••••• •••••• ••••••• •••
    </span>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$model", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$RemoveRegexSpecialCharacters"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_model, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view, OSWidgets) {
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
        View.displayName = "ConnectPatterns.HighlightSearch";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view, {
                inputs: {
                    InlineIcon: model.variables.inlineIconIn,
                    _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
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
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: inline;"
                },
                style: model.variables.mainContainerClassVar,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Contents"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
