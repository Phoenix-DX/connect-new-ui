# UBTConnect.App_PIN.Block_PINRegister_ContentWrapper

- Kind: shared; build screens using it: PINChange, PINRegister
- Compiled source: `migration/screens/PINRegister/analysis/sources/pretty/UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBT_AppManager.PIN.Pincode_Register (queue: UBT_AppManager.PIN.Pincode_Register)

## Inputs

| Input | Type |
|---|---|
| UseOverlay | Boolean |
| isFromMenu | Boolean |
| RegisterText | Text |
| ConfirmText | Text |
| EnableName | Boolean |

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: PINRegister/default (×3)

```html
<div class="OSBlockWidget" data-block="App_PIN.Block_PINRegister_ContentWrapper" id="$b4">
  <div class="OSBlockWidget" data-block="PIN.Pincode_Register" id="b4-$b1"><!-- nested block: 97 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$model", "UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc$controller", "UBTConnect.clientVariables", "UBT_AppManager.PIN.Pincode_Register.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.controller$GetResumeLoginLink"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, React, OSView, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_model, UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_controller, UBTConnectClientVariables, UBT_AppManager_PIN_Pincode_Register_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "App_PIN.Block_PINRegister_ContentWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_Pincode_Register_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_PIN_Block_PINRegister_ContentWrapper_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBT_AppManager_PIN_Pincode_Register_mvc_view, {
                inputs: {
                    In_AllowBackNavigation: model.variables.isFromMenuIn,
                    _in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isFromMenuInDataFetchStatus),
                    In_PinLength: 4,
                    In_ExtendedClasses: model.getCachedValue(idService.getId("KxyvLAoepEylxSEMMP1HXA.In_ExtendedClasses"), function() {
                        return ("connect-pin-screen" + ((model.variables.useOverlayIn) ? (" ubt-pin-overlay") : ("")));
                    }, function() {
                        return model.variables.useOverlayIn;
                    }),
                    _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useOverlayInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    pinRegistrationSuccess$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.event_Pincode_RegisterPinRegistrationSuccess$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    pinRegistrationError$Action: function(errorMessageIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.event_Pincode_RegisterPinRegistrationError$Action(errorMessageIn, controller.callContext(eventHandlerContext));
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
                    headerBar: PlaceholderContent.Empty,
                    titlePlaceholder: new PlaceholderContent(function() {
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
                    registrationText: new PlaceholderContent(function() {
                        return [$if(model.variables.enableNameIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                inputs: {
                                    In_Text: ("Welcome " + model.variables.userNameVar),
                                    In_TextOptions: model.getCachedValue(idService.getId("f8IgzUbLlEWiFOz5+R4LLQ.In_TextOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                            return rec;
                                        }();
                                    })
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
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("szBrBTvJpkaCSqSjZaiIOA.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                        rec.fontWeightAttr = ((model.variables.enableNameIn) ? (UBTConnectModel.staticEntities.uBT_FontWeight.regular) : (UBTConnectModel.staticEntities.uBT_FontWeight.semiBold));
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.enableNameIn;
                                }),
                                _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._enableNameInDataFetchStatus),
                                In_Text: model.variables.registerTextIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._registerTextInDataFetchStatus)
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
                    confirmationText: new PlaceholderContent(function() {
                        return [$if(model.variables.enableNameIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                inputs: {
                                    In_TextOptions: model.getCachedValue(idService.getId("aZcs3TTCrUuVpQHsClTN4g.In_TextOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                            return rec;
                                        }();
                                    }),
                                    In_Text: ("Welcome " + model.variables.userNameVar)
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
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("6Yc__p0e9UCg_7oDR0rf0g.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.inherit;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                        rec.fontWeightAttr = ((model.variables.enableNameIn) ? (UBTConnectModel.staticEntities.uBT_FontWeight.regular) : (UBTConnectModel.staticEntities.uBT_FontWeight.semiBold));
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.enableNameIn;
                                }),
                                _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._enableNameInDataFetchStatus),
                                In_Text: model.variables.confirmTextIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._confirmTextInDataFetchStatus)
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
```
(… 102 more lines in `migration/screens/PINRegister/analysis/sources/pretty/UBTConnect.App_PIN.Block_PINRegister_ContentWrapper.mvc.js`)
