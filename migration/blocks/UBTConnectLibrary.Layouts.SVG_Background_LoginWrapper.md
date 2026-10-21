# UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js`
- Child blocks: UBTConnectLibrary.Layouts.SVG_Background_Custom (queue: UBTConnectLibrary.Layouts.SVG_Background_Custom)

## Inputs

| Input | Type |
|---|---|
| In_ExtendedClass | Text |

## Captured DOM variants (1 distinct, 101 instances)

### Variant 1: BookmarksByGroup/default (×101)

```html
<div class="OSBlockWidget" data-block="Layouts.SVG_Background_LoginWrapper" id="b3-b2-b1-$b2">
  <div class="OSBlockWidget" data-block="Layouts.SVG_Background_Custom" id="b3-b2-b1-b2-$b1"><!-- nested block: 9 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc$model", "UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$view", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvc_model, UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, OSWidgets) {
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
        View.displayName = "Layouts.SVG_Background_LoginWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_SVG_Background_LoginWrapper_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_view, {
                inputs: {
                    In_HeightPercentage: OS.BuiltinFunctions.integerToDecimal(90),
                    In_ExtendedClass: model.variables.in_ExtendedClassIn,
                    _in_ExtendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus),
                    In_CurvaturePercentage: OS.BuiltinFunctions.integerToDecimal(105)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onPathCalculated$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.onPathCalculated$Action(controller.callContext(eventHandlerContext));
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
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
