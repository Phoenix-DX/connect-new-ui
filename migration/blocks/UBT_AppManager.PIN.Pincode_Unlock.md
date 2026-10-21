# UBT_AppManager.PIN.Pincode_Unlock

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBT_AppManager.PIN.Pincode_Unlock.mvc.js`
- Child blocks: UBT_AppManager.PIN.InactivityTimer, UBT_AppManager.PIN.PinCode (queue: UBT_AppManager.PIN.PinCode)

## Inputs

| Input | Type |
|---|---|
| In_PinLength | Integer |
| In_ExtendedClasses | Text |
| In_ForceVisible | Boolean |
| In_AllowBackNavigation | Boolean |

## Captured DOM variants (2 distinct, 95 instances)

### Variant 1: BookmarksByGroup/default (×89)

```html
<div class="OSBlockWidget" data-block="PIN.Pincode_Unlock" id="b3-b2-b4-b1-$b1">
  <div class="OSBlockWidget" data-block="PIN.InactivityTimer" id="b3-b2-b4-b1-b1-$b2"><!-- nested block: 0 nodes --></div>
</div>
```

### Variant 2: PINChange/default (×6)

```html
<div class="OSBlockWidget" data-block="PIN.Pincode_Unlock" id="b5-b1-$b1">
  <div class="pincode-unlock" data-container="">
    <div class="OSBlockWidget" data-block="PIN.PinCode" id="b5-b1-b1-$b1"><!-- nested block: 89 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBT_AppManager.PIN.Pincode_Unlock.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager.PIN.Pincode_Unlock.mvc$model", "UBT_AppManager.PIN.Pincode_Unlock.mvc$controller", "UBT_AppManager.clientVariables", "OutSystems/ReactWidgets/Main", "UBT_AppManager.PIN.PinCode.mvc$view", "UBT_AppManager.PIN.InactivityTimer.mvc$view", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsLocked", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$AppManager_JSUtils_ElementCache_SetObjProperty"], function(OutSystems, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, UBT_AppManager_PIN_Pincode_Unlock_mvc_model, UBT_AppManager_PIN_Pincode_Unlock_mvc_controller, UBT_AppManagerClientVariables, OSWidgets, UBT_AppManager_PIN_PinCode_mvc_view, UBT_AppManager_PIN_InactivityTimer_mvc_view) {
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
        View.displayName = "PIN.Pincode_Unlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_PinCode_mvc_view, UBT_AppManager_PIN_InactivityTimer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBT_AppManager_PIN_Pincode_Unlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBT_AppManager_PIN_Pincode_Unlock_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.in_ForceVisibleIn || (UBT_AppManagerClientVariables.getPIN_SessionInactivity_Use() && UBT_AppManagerClientVariables.getPIN_IsLocked())), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "pincode-unlock",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(UBT_AppManager_PIN_PinCode_mvc_view, {
                    inputs: {
                        Length: model.variables.in_PinLengthIn,
                        _lengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PinLengthInDataFetchStatus),
                        In_ExtendedClasses: model.variables.in_ExtendedClassesIn,
                        _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus),
                        In_AllowBackNavigation: model.variables.in_AllowBackNavigationIn,
                        _in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AllowBackNavigationInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        keyPressed$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.pinCodeKeyPressed$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        setPin$Action: function(ubtpincodeIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.onSetPin$Action(ubtpincodeIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
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
                        }
                    },
                    _validationProps: {
                        validationService: validationService
                    },
                    _idProps: {
                        service: idService,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        headerBar: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.headerBar,
                                _idProps: {
                                    service: idService,
                                    name: "HeaderBar"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        titlePlaceholder: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.titlePlaceholder,
                                _idProps: {
                                    service: idService,
                                    name: "TitlePlaceholder"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        message: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.unlockText,
                                _idProps: {
                                    service: idService,
                                    name: "UnlockText"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        option: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.option,
                                _idProps: {
                                    service: idService,
                                    name: "Option"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        erasePlaceholder: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.eraseButton,
                                _idProps: {
                                    service: idService,
                                    name: "EraseButton"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        placeholder_BottomKeyboard: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.placeholder_BottomKeyboard,
                                _idProps: {
                                    service: idService,
                                    name: "Placeholder_BottomKeyboard"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        contentPlaceholder: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.contentPlaceholder,
                                style: "content-placeholder",
                                _idProps: {
                                    service: idService,
                                    name: "ContentPlaceholder"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })
                    }
                }))];
            }, function() {
                return [React.createElement(UBT_AppManager_PIN_InactivityTimer_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        timeout$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.onTimeout$Action(controller.callContext(eventHandlerContext));
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
                        uuid: "9",
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
