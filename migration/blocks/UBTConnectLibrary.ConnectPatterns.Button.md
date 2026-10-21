# UBTConnectLibrary.ConnectPatterns.Button

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.Button.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_ExtendedClass | Text |
| In_IsDisabled | Boolean |

## Captured DOM variants (9 distinct, 57 instances)

### Variant 1: ContactByEmailMember/default (×12)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Button" id="b2-b11-$b1">
  <button class="btn ubt-button ubt-button--m ubt-button--primary ubt-button--disabled flex-grow" data-button="" disabled="" type="button">
    <div class="ubt-button__content" id="b2-b11-b1-Content">
      <div aria-hidden="true" class="osui-btn-loading__spinner-animation" data-container=""></div>
      <div class="OSBlockWidget" data-block="ConnectPatterns.IconText" id="b2-b11-$b2"><!-- nested block: 16 nodes --></div>
    </div>
  </button>
</div>
```

### Variant 2: CountryDetails/default (×1)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Button" id="b28-$b16">
  <button class="btn ubt-button ubt-button--s ubt-button--secondary flex-grow" data-button="" type="button">
    <div class="ubt-button__content" id="b28-b16-Content">
      Clear filters
    </div>
  </button>
</div>
```

### Variant 3: CountryDetails/default (×15)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Button" id="b28-$b17">
  <button class="btn ubt-button ubt-button--s ubt-button--primary ubt-button--disabled flex-grow" data-button="" disabled="" type="button">
    <div class="ubt-button__content" id="b28-b17-Content">
      Apply filters
    </div>
  </button>
</div>
```

### Variant 4: CountryDetails/loading (×14)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Button" id="b28-$b16">
  <button class="btn ubt-button ubt-button--s ubt-button--secondary ubt-button--disabled flex-grow" data-button="" disabled="" type="button">
    <div class="ubt-button__content" id="b28-b16-Content">
      Clear filters
    </div>
  </button>
</div>
```

(5 more variants not shown: rerun with --variants)

## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.Button.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$GetClasses_Button", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ButtonOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_Button_mvc_model, UBTConnectLibrary_ConnectPatterns_Button_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.Button";
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
                return UBTConnectLibrary_ConnectPatterns_Button_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Button_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Button, {
                enabled: !(model.variables.in_IsDisabledIn),
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);
                        controller.event_OnClick$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });
                    ;
                },
                style: model.getCachedValue(idService.getId("0qoA0AxxxkaE5U9R1p7hrQ.Style"), function() {
                                return UBTConnectLibraryController.default.getClasses_Button$Action(model.variables.in_ButtonOptionsIn.uBT_ButtonSizeIdAttr, model.variables.in_ButtonOptionsIn.uBT_ButtonTypeIdAttr, model.variables.mainContainerClassVar, model.variables.in_IsDisabledIn, model.variables.in_ButtonOptionsIn.uBT_FlexBehaviorAttr, callContext).out_ClassesOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id));
                }, function() {
                    return model.variables.in_ExtendedClassIn;
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.in_ButtonOptionsIn.uBT_ButtonSizeIdAttr;
                }, function() {
                    return model.variables.in_ButtonOptionsIn.uBT_ButtonTypeIdAttr;
                }, function() {
                    return model.variables.in_IsDisabledIn;
                }, function() {
                    return model.variables.in_ButtonOptionsIn.uBT_FlexBehaviorAttr;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus, model.variables._in_ButtonOptionsInDataFetchStatus, model.variables._in_IsDisabledInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                style: (model.variables.mainContainerClassVar + "__content"),
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
