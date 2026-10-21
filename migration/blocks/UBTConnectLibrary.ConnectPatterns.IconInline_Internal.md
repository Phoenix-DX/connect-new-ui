# UBTConnectLibrary.ConnectPatterns.IconInline_Internal

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.Icon (queue: UBTConnectLibrary.ConnectPatterns.Icon)

## Inputs

| Input | Type |
|---|---|
| InlineIcon | Record InlineIconRec |

## Captured DOM variants (2 distinct, 2429 instances)

### Variant 1: BookmarksByGroup/default (×2394)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-49_0-b5-$b2"></div>
```

### Variant 2: CountryDetails/default (×35)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="l1-122_0-b25-b5-b8-$b2">
  <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="l1-122_0-b25-b5-b8-b2-$b1"><!-- nested block: 1 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_model, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OSWidgets) {
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
        View.displayName = "ConnectPatterns.IconInline_Internal";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(((model.variables.inlineIconIn.iconIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                    inputs: {
                        In_ExtendedClasses: model.getCachedValue(idService.getId("oKzFHFKC60qaCAPKIW0CYA.In_ExtendedClasses"), function() {
                            return (((((model.variables.inlineIconIn.spacingSizeAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (("padding-right-" + model.variables.inlineIconIn.spacingSizeAttr)) : ("")) + " inline-block");
                        }, function() {
                            return model.variables.inlineIconIn.spacingSizeAttr;
                        }),
                        _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus),
                        In_IconId: model.variables.inlineIconIn.iconIdAttr,
                        _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus),
                        In_ColorId: model.variables.inlineIconIn.iconColorIdAttr,
                        _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus),
                        In_SizeId: model.variables.inlineIconIn.iconSizeIdAttr,
                        _in_SizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus)
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
                })];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
