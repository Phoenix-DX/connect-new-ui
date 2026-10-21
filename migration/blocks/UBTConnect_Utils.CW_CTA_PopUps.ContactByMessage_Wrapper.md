# UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc.js`
- Child blocks: UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage (queue: UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage)

## Inputs

| Input | Type |
|---|---|
| In_ContactPopupData | Record UI_ContactByMessage_WrapperDataRec |

## Captured DOM variants (1 distinct, 42 instances)

### Variant 1: HouseholdCarousel/default (×42)

```html
<div class="OSBlockWidget" data-block="CW_CTA_PopUps.ContactByMessage_Wrapper" id="b3-l1-1152_0-b2-b3-b1-b33-$b3">
  <div class="OSBlockWidget" data-block="CW_CTA_PopUps.ContactPopup_ByMessage" id="b3-l1-1152_0-b2-b3-b1-b33-b3-$b1"><!-- nested block: 1 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_view, OSWidgets) {
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
        View.displayName = "CW_CTA_PopUps.ContactByMessage_Wrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_view, {
                inputs: {
                    In_ContactByMessageData: model.getCachedValue(idService.getId("3j53z1qNcEeLmcKXXMvCxQ.In_ContactByMessageData"), function() {
                        return function() {
                            var rec = new UBTConnect_UtilsModel.ContactByMessagePopupDataRec();
                            rec.contactPopupDataAttr = model.variables.in_ContactPopupDataIn.contactPopupDataAttr;
                            rec.showEmailAttr = ((model.variables.in_ContactPopupDataIn.emailAttr) !== (""));
                            rec.showWhatsappAttr = ((((model.variables.in_ContactPopupDataIn.phoneAttr) !== ("")) && model.variables.isWhatsAppAvailableVar) && !(model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr));
                            rec.showSignalAttr = ((((model.variables.in_ContactPopupDataIn.phoneAttr) !== ("")) && model.variables.isSignalAvailableVar) && !(model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr));
                            rec.showCallAttr = (model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr && ((model.variables.in_ContactPopupDataIn.phoneAttr) !== ("")));
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_ContactPopupDataIn.contactPopupDataAttr;
                    }, function() {
                        return model.variables.in_ContactPopupDataIn.emailAttr;
                    }, function() {
                        return model.variables.in_ContactPopupDataIn.phoneAttr;
                    }, function() {
                        return model.variables.isWhatsAppAvailableVar;
                    }, function() {
                        return model.variables.in_ContactPopupDataIn.isComboEmailAndPhoneAttr;
                    }, function() {
                        return model.variables.isSignalAvailableVar;
                    }),
                    _in_ContactByMessageDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_SelectedMessageChannel$Action: function(event_MessageChannelIdIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handler_SelectedMessageChannel$Action(event_MessageChannelIdIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_Cancel$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handler_Cancel$Action(controller.callContext(eventHandlerContext));
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
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
