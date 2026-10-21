# UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js`
- Child blocks: UBT_AppManager.PIN.Pincode_Unlock, UBT_AppManager_Mobile.Fingerprint.FingerprintScanner (queue: UBT_AppManager.PIN.Pincode_Unlock, UBT_AppManager_Mobile.Fingerprint.FingerprintScanner)

## Inputs

| Input | Type |
|---|---|
| In_PinLength | Integer |
| In_ExtendedClasses | Text |
| In_IsScanFingerprintOnReady | Boolean |
| In_ForceVisible | Boolean |
| In_AllowBackNavigation | Boolean |
| In_HideFingerprint | Boolean |

## Captured DOM variants (1 distinct, 95 instances)

### Variant 1: BookmarksByGroup/default (×95)

```html
<div class="OSBlockWidget" data-block="Fingerprint.PinUnlock_MobileWrapper" id="b3-b2-b4-$b1">
  <div class="OSBlockWidget" data-block="PIN.Pincode_Unlock" id="b3-b2-b4-b1-$b1"><!-- nested block: 1 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$model", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$controller", "UBT_AppManager.PIN.Pincode_Unlock.mvc$view", "OutSystems/ReactWidgets/Main", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$view", "UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function(OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerController, React, OSView, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_model, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_controller, UBT_AppManager_PIN_Pincode_Unlock_mvc_view, OSWidgets, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_view) {
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
        View.displayName = "Fingerprint.PinUnlock_MobileWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_Pincode_Unlock_mvc_view, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBT_AppManager_PIN_Pincode_Unlock_mvc_view, {
                inputs: {
                    In_PinLength: model.variables.in_PinLengthIn,
                    _in_PinLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PinLengthInDataFetchStatus),
                    In_ForceVisible: model.variables.in_ForceVisibleIn,
                    _in_ForceVisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ForceVisibleInDataFetchStatus),
                    In_ExtendedClasses: model.variables.in_ExtendedClassesIn,
                    _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus),
                    In_AllowBackNavigation: model.variables.in_AllowBackNavigationIn,
                    _in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AllowBackNavigationInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    pinUnlockSuccess$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.pinUnlockSuccess$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    pincodeChange$Action: function(inputLengthIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.pincodeChange$Action(inputLengthIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    keyPressed$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.keyPressed$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    userLoggedOut$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.userLoggedOut$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    pinUnlockError$Action: function(errorMessageIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.pinUnlockError$Action(errorMessageIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    timeout$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.timeout$Action(controller.callContext(eventHandlerContext));
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
                placeholders: {
                    headerBar: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_HeaderBar,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_HeaderBar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    titlePlaceholder: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_TitlePlaceholder,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_TitlePlaceholder"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    unlockText: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_UnlockText,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_UnlockText"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    option: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("l1T8bgwdTUy7YS2nzyQffw.Visible"), function() {
                                    return UBT_AppManagerController.default.appManager_GetPIN_FingerprintReaderAvailable$Action(callContext).availableOut;
                                }, OS.DataTypes.DataTypes.Boolean, callContext.id) && !(model.variables.in_HideFingerprintIn));
                            }, function() {
                                return model.variables.in_HideFingerprintIn;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HideFingerprintInDataFetchStatus)
                        }, React.createElement(UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_view, {
                            inputs: {
                                In_IsScanOnReady: model.variables.in_IsScanFingerprintOnReadyIn,
                                _in_IsScanOnReadyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsScanFingerprintOnReadyInDataFetchStatus)
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                unlock$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.pinUnlockSuccess$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                    ;
                                },
                                unlockError$Action: function(event_ErrorMessageIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.pinUnlockError$Action(event_ErrorMessageIn, controller.callContext(eventHandlerContext));
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
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Placeholder, {
                                        align: /*Default*/ 0,
                                        content: _this.props.placeholders.placeholder_FingerprintIcon,
                                        _idProps: {
                                            service: idService,
                                            name: "Placeholder_FingerprintIcon"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            }
                        }))];
```
(… 41 more lines in `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js`)
