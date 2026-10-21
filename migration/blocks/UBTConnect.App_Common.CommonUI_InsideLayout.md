# UBTConnect.App_Common.CommonUI_InsideLayout

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js`
- Child blocks: Connect2_LegacyShared.Utility.HandleImageLoadError, NavigationHandler.NavigationHandler.BackNavigationHandler, NavigationHandler.NavigationHandler.PreventBackNavigation, UBTConnect.App_Common.OfflineDataSyncEvents, UBTConnect.App_PIN.Block_PINUnlock, UBTConnect.App_Policies.Policy_Checker, UBTConnect.Legacy_Share.HandleOnResumeOpenLink, UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_ShowLockScreen | Boolean |
| In_IgnorePolicy | Boolean |
| In_IgnoreLockScreen | Boolean |

## Captured DOM variants (2 distinct, 98 instances)

### Variant 1: BookmarksByGroup/default (×89)

```html
<div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b3">
  <div class="OSBlockWidget" data-block="App_Common.OfflineDataSyncEvents" id="b3-$b1"><!-- nested block: 3 nodes --></div>
  <div class="OSBlockWidget" data-block="App_PIN.Block_PINUnlock" id="b3-$b2"><!-- nested block: 22 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" id="b3-$b4"><!-- nested block: 4 nodes --></div>
  <div class="OSBlockWidget" data-block="Legacy_Share.HandleOnResumeOpenLink" id="b3-$b5"><!-- nested block: 2 nodes --></div>
  <div class="OSBlockWidget" data-block="Utility.HandleImageLoadError" id="b3-$b6"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b3-$b8"><!-- nested block: 0 nodes --></div>
</div>
```

### Variant 2: Login/default (×9)

```html
<div class="OSBlockWidget" data-block="App_Common.CommonUI_InsideLayout" id="$b14">
  <div class="OSBlockWidget" data-block="App_Common.OfflineDataSyncEvents" id="b14-$b1"><!-- nested block: 3 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction" id="b14-$b4"><!-- nested block: 4 nodes --></div>
  <div class="OSBlockWidget" data-block="Legacy_Share.HandleOnResumeOpenLink" id="b14-$b5"><!-- nested block: 2 nodes --></div>
  <div class="OSBlockWidget" data-block="Utility.HandleImageLoadError" id="b14-$b6"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b14-$b8"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBT_AppManager.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_PIN.Block_PINUnlock.mvc$view", "UBTConnect.App_Policies.Policy_Checker.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$view", "UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc$view", "Connect2_LegacyShared.Utility.HandleImageLoadError.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBT_AppManager", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnectController, UBT_AppManagerController, NavigationHandlerController, React, OSView, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_model, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, OSWidgets, UBTConnect_App_PIN_Block_PINUnlock_mvc_view, UBTConnect_App_Policies_Policy_Checker_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "App_Common.CommonUI_InsideLayout";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/CommonPlugin.PluginManager.js"];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, UBTConnect_App_PIN_Block_PINUnlock_mvc_view, UBTConnect_App_Policies_Policy_Checker_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view, UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_CommonUI_InsideLayout_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_CommonUI_InsideLayout_mvc_controller;
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
                return [React.createElement(UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, {
                    inputs: {},
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
                }), $if((model.variables.hideLockScreenVar || model.variables.in_IgnoreLockScreenIn), false, this, function() {
                    return [];
                }, function() {
                    return [React.createElement(UBTConnect_App_PIN_Block_PINUnlock_mvc_view, {
                        inputs: {
                            In_ForceVisible: model.variables.in_ShowLockScreenIn,
                            _in_ForceVisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowLockScreenInDataFetchStatus),
                            In_IsCommonBlock: true
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
                                    controller.onPinUnlock_HideLockScreen$Action(controller.callContext(eventHandlerContext));
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
                            alias: "2"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
                        },
                        _dependencies: []
                    })];
                }), $if((!(model.variables.in_IgnorePolicyIn) && UBTConnectClientVariables.getApp_Policies_HasPolicyToAccept()), false, this, function() {
                    return [React.createElement(UBTConnect_App_Policies_Policy_Checker_mvc_view, {
                        inputs: {},
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
                            uuid: "2",
                            alias: "3"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: []
                    })];
                }, function() {
                    return [];
                }), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_view, {
                    inputs: {},
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
                        alias: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }), React.createElement(UBTConnect_Legacy_Share_HandleOnResumeOpenLink_mvc_view, {
                    inputs: {},
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
                        alias: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }), React.createElement(Connect2_LegacyShared_Utility_HandleImageLoadError_mvc_view, {
                    inputs: {},
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
                        alias: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }), $if(model.variables.isNavigateToHomeOnBackVar, false, this, function() {
                    return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
                        inputs: {},
                        events: {
                            _handleError: function(ex) {
                                controller.handleError(ex);
                            },
                            backNavigationPrevented$Action: function(backNavigationEventIn) {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    controller.onBackNavigation_RedirectHome$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                            uuid: "6",
                            alias: "7"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: []
                    })];
                }, function() {
                    return [React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                        inputs: {
                            Priority: -10000
                        },
                        events: {
                            _handleError: function(ex) {
                                controller.handleError(ex);
                            },
                            backNavigation$Action: function(backNavigationEventIn) {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    controller.onBackNavigation_MaybeRedirectHome$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                            uuid: "7",
                            alias: "8"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: []
                    })];
                })];
            }));
        };
```
(… 4 more lines in `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js`)
