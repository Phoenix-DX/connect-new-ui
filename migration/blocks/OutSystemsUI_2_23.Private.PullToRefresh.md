# OutSystemsUI_2_23.Private.PullToRefresh

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/MessageList/analysis/sources/pretty/OutSystemsUI_2_23.Private.PullToRefresh.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: MessageList/default (×3)

```html
<div class="OSBlockWidget" data-block="Private.PullToRefresh" id="b1-b1-b2-$b1">
  <div aria-hidden="true" class="pull-to-refresh" data-container="" id="b1-b1-b2-b1-ptr">
    <div class="genericon" data-container="">
      <i class="icon fa fa-angle-down fa-1x" data-icon="" id="b1-b1-b2-b1-Arrow"></i>
    </div>
    <div class="pull-to-refresh-loading" data-container="">
      <i class="icon fa-spin fa fa-spinner fa-1x" data-icon="" id="b1-b1-b2-b1-Spinner"></i>
    </div>
  </div>
  <div aria-hidden="true" aria-live="assertive" class="pull-to-refresh-a11y wcag-hide-text" data-container="" id="b1-b1-b2-b1-ptrA11y" role="alert"></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Private_PullToRefresh_mvc_model, OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller, OSWidgets) {
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
        View.displayName = "Private.PullToRefresh";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.PullToRefresh.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Private_PullToRefresh_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Private_PullToRefresh_mvc_controller;
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
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        "aria-hidden": "true"
                    },
                    style: "pull-to-refresh",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ptr"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "genericon",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Icon, {
                    icon: "angle-down",
                    iconSize: /*FontSize*/ 0,
                    style: "icon",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Arrow"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "pull-to-refresh-loading",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Icon, {
                    icon: "spinner",
                    iconSize: /*FontSize*/ 0,
                    style: "icon fa-spin",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Spinner"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        role: "alert",
                        "aria-live": "assertive",
                        "aria-hidden": "true"
                    },
                    style: "pull-to-refresh-a11y wcag-hide-text",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ptrA11y"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if(model.variables.isFirstTimeUsedVar, false, this, function() {
                    return [$if(model.variables.isRefreshingVar, false, this, function() {
                        return [$text(getTranslation("z4uqzQWZuUmv3PvsZHCV3A#Value", "Refreshing content"))];
                    }, function() {
                        return [$text(getTranslation("T6pRX5+uykyrtTTEslD4WQ#Value", "Content refreshed"))];
                    })];
                }, function() {
                    return [];
                }))];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
