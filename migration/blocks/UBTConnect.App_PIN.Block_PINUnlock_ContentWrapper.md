# UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CacheControl.CacheControl_Policies, UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper (queue: UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper)

## Inputs

| Input | Type |
|---|---|
| UseOverlay | Boolean |
| In_ForceVisible | Boolean |
| UnlockText | Text |
| ShowNeedHelp | Boolean |
| isFromMenu | Boolean |
| ShowForgotPIN | Boolean |
| ShowPolicy | Boolean |

## Captured DOM variants (1 distinct, 95 instances)

### Variant 1: BookmarksByGroup/default (×95)

```html
<div class="OSBlockWidget" data-block="App_PIN.Block_PINUnlock_ContentWrapper" id="b3-b2-$b4">
  <div class="OSBlockWidget" data-block="Fingerprint.PinUnlock_MobileWrapper" id="b3-b2-b4-$b1"><!-- nested block: 2 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$model", "UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc$controller", "UBTConnect.clientVariables", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc$view", "UBTConnect.model$CacheControl_PoliciesBooleanRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnect_Utils.model$CacheControl_PoliciesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$PolicyInformationRec", "UBTConnect_Utils.controller$OpenPolicy"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, UBTConnect_UtilsController, React, OSView, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_model, UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_controller, UBTConnectClientVariables, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvc_view) {
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
        View.displayName = "App_PIN.Block_PINUnlock_ContentWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_Policies_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_PIN_Block_PINUnlock_ContentWrapper_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_view, {
                inputs: {
                    In_ExtendedClasses: model.getCachedValue(idService.getId("8z3SfGi9Y0qsxHSmcHv7tQ.In_ExtendedClasses"), function() {
                        return ("connect-pin-screen" + ((model.variables.useOverlayIn) ? (" ubt-pin-overlay") : ("")));
                    }, function() {
                        return model.variables.useOverlayIn;
                    }),
                    _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useOverlayInDataFetchStatus),
                    In_IsScanFingerprintOnReady: model.variables.showFingerprintReaderVar,
                    In_ForceVisible: model.variables.in_ForceVisibleIn,
                    _in_ForceVisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ForceVisibleInDataFetchStatus),
                    In_HideFingerprint: !(model.variables.showFingerprintReaderVar),
                    In_AllowBackNavigation: model.variables.isFromMenuIn,
                    _in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isFromMenuInDataFetchStatus),
                    In_PinLength: 4
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    pinUnlockError$Action: function(errorMessageIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.event_Pincode_PinUnlockError$Action(errorMessageIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    pinUnlockSuccess$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.event_Pincode_PinUnlockSuccess$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
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
                placeholders: {
                    placeholder_HeaderBar: PlaceholderContent.Empty,
                    placeholder_TitlePlaceholder: new PlaceholderContent(function() {
                        return [$if(model.variables.useOverlayIn, false, this, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnect.ConnectLogoWhite.svg"),
                                style: "login-screen__connect-logo",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnect.ConnectLogo.svg"),
                                style: "login-screen__connect-logo",
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })];
                    }),
                    placeholder_UnlockText: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("sTItBCRgX0K9aehw_leVEw.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                        return rec;
                                    }();
                                }),
                                In_Text: model.variables.unlockTextIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._unlockTextInDataFetchStatus)
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
                                uuid: "3",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_FingerprintIcon: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                            inputs: {
                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.inherit,
                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.fingerprint
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
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_EraseButton: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                            inputs: {
                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.inherit,
                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.backspace,
                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.display_36
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
                                uuid: "5",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_BottomKeyboard: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "border-bottom-s border-color-neutral-0",
                            visible: model.variables.showForgotPINIn,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showForgotPINInDataFetchStatus)
                        }, React.createElement(OSWidgets.Link, {
                            enabled: true,
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    controller.onClick_ForgotPIN$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                                ;
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
```
(… 326 more lines in `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`)
