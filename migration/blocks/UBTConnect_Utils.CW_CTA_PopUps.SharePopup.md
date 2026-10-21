# UBTConnect_Utils.CW_CTA_PopUps.SharePopup

- Kind: shared; build screens using it: FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, MessageDetail, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js`
- Child blocks: UBTConnect_Utils.CW_CTA_PopUps.ContactPopup (queue: UBTConnect_Utils.CW_CTA_PopUps.ContactPopup)

## Inputs

| Input | Type |
|---|---|
| In_ContactPopupData | Record ContactPopupDataRec |
| In_ImageSizeId | Text |

## Captured DOM variants (1 distinct, 45 instances)

### Variant 1: HomeFeed/default (×45)

```html
<div class="OSBlockWidget" data-block="CW_CTA_PopUps.SharePopup" id="b10-$b2">
  <div class="OSBlockWidget" data-block="CW_CTA_PopUps.ContactPopup" id="b10-b2-$b1"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$ShowComingSoonMessage"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, OSWidgets) {
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
        View.displayName = "CW_CTA_PopUps.SharePopup";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, {
                inputs: {
                    In_ContactPopupButtons: model.getCachedValue(idService.getId("bWqkaEVtK02GbKQtMVe7OA.In_ContactPopupButtons"), function() {
                        return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.sharePopupButtonsVar, new UBTConnect_UtilsModel.ContactPopupButtonList(), function(source, target) {
                            target = source.contactPopupButtonAttr;
                            return target;
                        });
                    }, function() {
                        return model.variables.sharePopupButtonsVar;
                    }),
                    In_ImageSizeId: model.variables.in_ImageSizeIdIn,
                    _in_ImageSizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageSizeIdInDataFetchStatus),
                    In_ContactPopupData: model.variables.in_ContactPopupDataIn,
                    _in_ContactPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_Cancel$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.event_Cancel$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    event_Clicked$Action: function(event_IdIn, event_RowNumberIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.onClick_CallButton$Action(event_RowNumberIn, controller.callContext(eventHandlerContext));
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
