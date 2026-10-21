# UBTConnectLibrary.BasePatterns.CustomContainer

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (279 distinct, 3112 instances)

### Variant 1: BrowseCountries/default (×6)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-$b1">
  <div class="ubt-custom-container background-neutral-0 padding-x-base padding-y-s" id="b2-b1-Content" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-Block_Search"><!-- nested block: 15 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-$b4"><!-- nested block: 1362 nodes --></div>
  </div>
</div>
```

### Variant 2: BrowseCountries/default (×9)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-Block_Search">
  <div class="ubt-custom-container margin-y-s" id="b2-b2-Content" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.Input" id="b2-Block_SearchInput"><!-- nested block: 13 nodes --></div>
  </div>
</div>
```

### Variant 3: BrowseCountries/default (×60)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-l1-87_0-b7-$b1">
  <div class="ubt-custom-container ubt-statistics-item country-flag background-neutral-0 border-s border-color-neutral-3 border-radius-large padding-x-base padding-y-s" id="b2-l1-87_0-b7-b1-Content" style="cursor: pointer;">
    <div data-container="" style="cursor: pointer;">
      <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b2-l1-87_0-b7-$b2"><!-- nested block: 74 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 4: BrowseCountries/default (×77)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-l1-87_0-b7-$b6">
  <div class="ubt-custom-container margin-bottom-s" id="b2-l1-87_0-b7-b6-Content" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-87_0-b7-$b7"><!-- nested block: 4 nodes --></div>
  </div>
</div>
```

(275 more variants not shown: rerun with --variants)

## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.controller$GetClasses_Container", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetStyle_SizeOptions", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.controller$GetStyle_BackgroundImage", "UBTConnectLibrary.controller$SetStyle", "UBTConnectLibrary.controller$GetStyle_Opacity"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_model, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "BasePatterns.CustomContainer";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_CustomContainer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_CustomContainer_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.clicked$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                style: model.getCachedValue(idService.getId("Content.Style"), function() {
                                return UBTConnectLibraryController.default.getClasses_Container$Action(model.variables.optionsIn, callContext).classesOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.optionsIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._optionsInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
