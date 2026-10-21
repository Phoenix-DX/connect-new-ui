# UBTConnectLibrary.ConnectPatterns.CircleButton

- Kind: shared; build screens using it: BookmarksByGroup, ContactUsDetails, CountryDetails, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, MessageDetail, Notes, Notifications, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.CircleButton.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer (queue: -)

## Inputs

| Input | Type |
|---|---|
| ExtendedClasses | Text |
| BackgroundColorId | Text |
| BorderColorId | Text |
| SizeId | Text |
| IsProcessing | Boolean |
| PaddingSize | Text |

## Captured DOM variants (3 distinct, 152 instances)

### Variant 1: HomeFeed/default (×3)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton" id="b5-$b4">
  <div class="ubt-icon-button inline-block ubt-avatar-image-xs OSInline" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b5-b4-$b1"><!-- nested block: 5 nodes --></div>
  </div>
</div>
```

### Variant 2: HomeFeed/default (×16)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton" id="b5-l2-53_1-l2-100_0-b10-$b1">
  <div class="ubt-icon-button inline-block ubt-avatar-image-l OSInline" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b5-l2-53_1-l2-100_0-b10-b1-$b1"><!-- nested block: 7 nodes --></div>
  </div>
</div>
```

### Variant 3: HouseholdCarousel/default (×133)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton" id="b3-l1-1152_0-b2-b3-b1-b33-b2-b3-b1-$b1">
  <div class="ubt-icon-button inline-block ubt-avatar-image-s OSInline" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1152_0-b2-b3-b1-b33-b2-b3-b1-b1-$b1"><!-- nested block: 7 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_model, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ConnectPatterns.CircleButton";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.action_OnClick$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    }
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: model.getCachedValue(idService.getId("JjmH6bwRbUuJHwuzGHa0bQ.Style"), function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), "inline-block", callContext).classesOutOut;
                                return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.sizeIdIn, callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.isProcessingIn) ? ((model.variables.mainContainerClassVar + "--loading")) : ("")), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.sizeIdIn;
                }, function() {
                    return model.variables.isProcessingIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._sizeIdInDataFetchStatus, model.variables._isProcessingInDataFetchStatus)
            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    ExtendedClasses: (model.variables.mainContainerClassVar + "__icon-container "),
                    Options: model.getCachedValue(idService.getId("KY44Fhjitkm1y_haQxyNkA.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = model.variables.backgroundColorIdIn;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.generalSizeIdAttr = model.variables.paddingSizeIn;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = model.variables.borderColorIdIn;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = ((((model.variables.borderColorIdIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (UBTConnectLibraryModel.staticEntities.uBT_Size.small) : (OS.BuiltinFunctions.nullTextIdentifier()));
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.circle;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.textOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDarker;
                                return rec;
                            }();
                            rec.isSkeletonElementAttr = true;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.backgroundColorIdIn;
                    }, function() {
                        return model.variables.paddingSizeIn;
                    }, function() {
                        return model.variables.borderColorIdIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._backgroundColorIdInDataFetchStatus, model.variables._paddingSizeInDataFetchStatus, model.variables._borderColorIdInDataFetchStatus)
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.icon,
                            _idProps: {
                                service: idService,
                                name: "Icon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.badge,
                            _idProps: {
                                service: idService,
                                name: "Badge"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
