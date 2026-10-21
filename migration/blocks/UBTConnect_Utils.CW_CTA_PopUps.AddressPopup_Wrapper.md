# UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomText, UBTConnect_Utils.CW_CTA_PopUps.AddressPopup (queue: UBTConnect_Utils.CW_CTA_PopUps.AddressPopup)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 29 instances)

### Variant 1: HouseholdCarousel/default (×29)

```html
<div class="OSBlockWidget" data-block="CW_CTA_PopUps.AddressPopup_Wrapper" id="b3-l1-1152_0-b2-b3-b1-$b13">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-1152_0-b2-b3-b1-b13-$b1"><!-- nested block: 6 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_CTA_PopUps.AddressPopup" id="b3-l1-1152_0-b2-b3-b1-b13-$b2"><!-- nested block: 1 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$view", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.controller$CleanAddressForMaps"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, APIDomain_Directory_ISModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBT_AppManagerController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, OSWidgets, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_view) {
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
        View.displayName = "CW_CTA_PopUps.AddressPopup_Wrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                inputs: {
                    InlineIcon: model.getCachedValue(idService.getId("5w5WQxd7P06Hbx4kJiEMPQ.InlineIcon"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.InlineIconRec();
                            rec.iconIdAttr = (((model.variables.iconVisibleIn && ((OS.BuiltinFunctions.trim(model.variables.in_AddressIn)) !== ("")))) ? (UBTConnect_UtilsModel.staticEntities.uBT_Icons.locationOnFill) : (OS.BuiltinFunctions.nullTextIdentifier()));
                            rec.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_16;
                            rec.spacingSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall;
                            rec.iconColorIdAttr = ((model.variables.isEnabledIn) ? (UBTConnect_UtilsModel.staticEntities.uBT_Color.primary) : (UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7));
                            return rec;
                        }();
                    }, function() {
                        return model.variables.iconVisibleIn;
                    }, function() {
                        return model.variables.in_AddressIn;
                    }, function() {
                        return model.variables.isEnabledIn;
                    }),
                    _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconVisibleInDataFetchStatus, model.variables._in_AddressInDataFetchStatus, model.variables._isEnabledInDataFetchStatus),
                    In_Text: model.variables.in_AddressIn,
                    _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AddressInDataFetchStatus),
                    In_TextOptions: model.getCachedValue(idService.getId("5w5WQxd7P06Hbx4kJiEMPQ.In_TextOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                            rec.colorAttr = ((model.variables.isEnabledIn) ? (UBTConnect_UtilsModel.staticEntities.uBT_Color.primary) : (UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7));
                            rec.fontSizeAttr = model.variables.fontSizeVar;
                            rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.regular;
                            rec.isUnderlinedAttr = true;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isEnabledIn;
                    }, function() {
                        return model.variables.fontSizeVar;
                    }),
                    _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.onClick_Address$Action(controller.callContext(eventHandlerContext));
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
            }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_view, {
                inputs: {
                    In_ContactPopupData: model.getCachedValue(idService.getId("vfSphaFboUKuC7EMtP9YCQ.In_ContactPopupData"), function() {
                        return function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                            rec.actionNameAttr = "Open Location";
                            rec.nameAttr = "";
                            rec.localityAttr = "";
                            rec.timezoneNameAttr = "";
                            rec.timezoneOffsetAttr = 0;
                            rec.showPopupAttr = model.variables.isLocationPopupOpenVar;
                            rec.showTimezoneAttr = false;
                            rec.showImageAttr = false;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isLocationPopupOpenVar;
                    }),
                    ShowGoogleMaps: model.variables.isMapsAvailableVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_OpenInGoogleMaps$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handler_OpenInMapsOrGoogleMaps$Action("", true, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_CopyAddress$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handler_CopyAddress$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_OpenInMaps$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handler_OpenInMapsOrGoogleMaps$Action("", false, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_Cancel$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.handler_AddressPopupEvent_Cancel$Action(controller.callContext(eventHandlerContext));
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
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
