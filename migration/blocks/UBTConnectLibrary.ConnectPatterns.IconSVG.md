# UBTConnectLibrary.ConnectPatterns.IconSVG

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/Services/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.IconSVG.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_IconId | Text |

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: Services/default (×3)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.IconSVG" id="l2-37_0-b25-$b1">
  <img data-image="" data-rendered-size="24x24" src="/UBTConnect/img/UBTConnectLibrary.HR100.svg"/>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_model, UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.IconSVG";
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
                return UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_OneSchoolGlobal), false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.OneSchoolGlobal.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinLock), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Lock.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinHouse), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_House.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinMember), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Member.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinOneSchool), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_OneSchool.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_HR100), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.HR100.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_ElGusto), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.ElGusto.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_CommunityTradelink), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.CommunityTradelink.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinLocality), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Locality.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinCountry), true, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Country.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
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
