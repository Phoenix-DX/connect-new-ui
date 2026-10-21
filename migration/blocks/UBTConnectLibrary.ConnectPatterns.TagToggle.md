# UBTConnectLibrary.ConnectPatterns.TagToggle

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, Notes, Profile, Search, SupperMeeting_Carousel, Updates_SingleList
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.TagToggle.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText (queue: -)

## Inputs

| Input | Type |
|---|---|
| ExtendedClasses | Text |
| isEnabled | Boolean |

## Captured DOM variants (1 distinct, 75 instances)

### Variant 1: HouseholdCarousel/default (×75)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b3-l1-1152_0-b2-b3-b1-b7-l1-1163_0-$b1">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1152_0-b2-b3-b1-b7-l1-1163_0-b1-$b1"><!-- nested block: 3 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$model", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_model, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ConnectPatterns.TagToggle";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("jys+MWNAN0aUP1Osw2vwyw.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.primary) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3));
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
                                rec.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.primary) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3));
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.rounded;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.textOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                rec.colorAttr = ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral6));
                                rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
                                rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isEnabledIn;
                    }, function() {
                        return model.variables.tagIn.isSelectedAttr;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._tagInDataFetchStatus),
                    ExtendedClasses: model.getCachedValue(idService.getId("jys+MWNAN0aUP1Osw2vwyw.ExtendedClasses"), function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), "ubt-skeleton-section__element", callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.extendedClassesIn;
                    }),
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.customContainerClicked$Action(controller.callContext(eventHandlerContext));
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
                    content: new PlaceholderContent(function() {
                        return [$if((model.variables.tagIn.iconIdAttr === OS.BuiltinFunctions.nullTextIdentifier()), false, this, function() {
                            return [React.createElement(OSWidgets.Expression, {
                                value: model.variables.tagIn.textAttr,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagInDataFetchStatus)
                            })];
                        }, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                inputs: {
                                    SpacingSize: UBTConnectLibraryModel.staticEntities.uBT_Size.small,
                                    Text: model.variables.tagIn.textAttr,
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagInDataFetchStatus),
                                    TextOptions: model.getCachedValue(idService.getId("KuiwBLyj80207UPOU1mXdg.TextOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
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
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                            inputs: {
                                                In_ColorId: model.getCachedValue(idService.getId("WjwAPtapwUC1ZOQN0Jr0jw.In_ColorId"), function() {
                                                    return ((model.variables.isEnabledIn) ? (((model.variables.tagIn.isSelectedAttr) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7))) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral6));
                                                }, function() {
                                                    return model.variables.isEnabledIn;
                                                }, function() {
                                                    return model.variables.tagIn.isSelectedAttr;
                                                }),
                                                _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._tagInDataFetchStatus),
                                                In_IconId: model.variables.tagIn.iconIdAttr,
                                                _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagInDataFetchStatus),
                                                In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.nonStandard_16
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
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables._tagInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.tagIn.iconIdAttr), asPrimitiveValue(model.variables.tagIn.isSelectedAttr), asPrimitiveValue(model.variables.isEnabledIn)]
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._tagInDataFetchStatus), asPrimitiveValue(model.variables.tagIn.isSelectedAttr), asPrimitiveValue(model.variables.tagIn.textAttr), asPrimitiveValue(model.variables.tagIn.iconIdAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
