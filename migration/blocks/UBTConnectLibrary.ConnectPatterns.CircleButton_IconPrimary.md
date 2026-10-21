# UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary

- Kind: shared; build screens using it: HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, MessageDetail, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel, UBTConnectLibrary.ConnectPatterns.Icon (queue: UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel)

## Inputs

| Input | Type |
|---|---|
| ExtendedClasses | Text |
| IconId | Text |
| Text | Text |
| isEnabled | Boolean |
| IconBackgroundColorId | Text |
| IconColorId | Text |

## Captured DOM variants (1 distinct, 132 instances)

### Variant 1: HouseholdCarousel/default (×132)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton_IconPrimary" id="b3-l1-1152_0-b2-b3-b1-b33-b2-$b3">
  <div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton_WithLabel" id="b3-l1-1152_0-b2-b3-b1-b33-b2-b3-$b1"><!-- nested block: 19 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_model, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.CircleButton_IconPrimary";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, {
                inputs: {
                    BackgroundColorId: model.getCachedValue(idService.getId("UIMrCvrwO0y6hmfHJJR4ig.BackgroundColorId"), function() {
                        return ((model.variables.isEnabledIn) ? (model.variables.iconBackgroundColorIdIn) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3));
                    }, function() {
                        return model.variables.isEnabledIn;
                    }, function() {
                        return model.variables.iconBackgroundColorIdIn;
                    }),
                    _backgroundColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._iconBackgroundColorIdInDataFetchStatus),
                    SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.small_40,
                    ExtendedClasses: model.variables.extendedClassesIn,
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.circleButton_WithLabelOnClick$Action(controller.callContext(eventHandlerContext));
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
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                            inputs: {
                                In_IconId: model.variables.iconIdIn,
                                _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus),
                                In_ColorId: model.getCachedValue(idService.getId("J0YT1Q1GKkmDJNJggGODDA.In_ColorId"), function() {
                                    return ((model.variables.isEnabledIn) ? (model.variables.iconColorIdIn) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7));
                                }, function() {
                                    return model.variables.isEnabledIn;
                                }, function() {
                                    return model.variables.iconColorIdIn;
                                }),
                                _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._iconColorIdInDataFetchStatus)
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    badge: PlaceholderContent.Empty,
                    text: new PlaceholderContent(function() {
                        return [$if(((model.variables.textIn) !== ("")), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                inputs: {
                                    In_Text: model.variables.textIn,
                                    _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textInDataFetchStatus),
                                    In_TextOptions: model.getCachedValue(idService.getId("JNLA90XA70unyq2L2hSbdw.In_TextOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10;
                                            rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
                                            rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
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
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.textIn), asPrimitiveValue(model.variables.iconColorIdIn), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._textInDataFetchStatus), asPrimitiveValue(model.variables._iconColorIdInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables.iconIdIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
