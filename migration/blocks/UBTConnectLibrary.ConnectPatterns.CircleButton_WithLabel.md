# UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel

- Kind: shared; build screens using it: BookmarksByGroup, ContactUsDetails, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, MessageDetail, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.CircleButton (queue: UBTConnectLibrary.ConnectPatterns.CircleButton)

## Inputs

(none found)

## Captured DOM variants (2 distinct, 148 instances)

### Variant 1: HomeFeed/default (×16)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton_WithLabel" id="b5-l2-53_1-l2-100_0-$b10">
  <div class="ubt-icon-button inline-block ubt-avatar-image-l OSInline" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton" id="b5-l2-53_1-l2-100_0-b10-$b1"><!-- nested block: 9 nodes --></div>
    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b5-l2-53_1-l2-100_0-b10-$b2"><!-- nested block: 4 nodes --></div>
  </div>
</div>
```

### Variant 2: HouseholdCarousel/default (×132)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton_WithLabel" id="b3-l1-1152_0-b2-b3-b1-b33-b2-b3-$b1">
  <div class="ubt-icon-button inline-block ubt-avatar-image-s OSInline" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.CircleButton" id="b3-l1-1152_0-b2-b3-b1-b33-b2-b3-b1-$b1"><!-- nested block: 9 nodes --></div>
    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1152_0-b2-b3-b1-b33-b2-b3-b1-$b2"><!-- nested block: 7 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_model, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ConnectPatterns.CircleButton_WithLabel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_controller;
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
                style: model.getCachedValue(idService.getId("EWWa4RJKV0eKGTfxq7CXhA.Style"), function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), "inline-block", callContext).classesOutOut;
                            return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.sizeIdIn, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.sizeIdIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._sizeIdInDataFetchStatus)
            }, React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, {
                inputs: {
                    IsProcessing: model.variables.isProcessingIn,
                    _isProcessingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isProcessingInDataFetchStatus),
                    BorderColorId: model.variables.borderColorIdIn,
                    _borderColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._borderColorIdInDataFetchStatus),
                    SizeId: model.variables.sizeIdIn,
                    _sizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeIdInDataFetchStatus),
                    BackgroundColorId: model.variables.backgroundColorIdIn,
                    _backgroundColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._backgroundColorIdInDataFetchStatus),
                    PaddingSize: model.variables.paddingSizeIn,
                    _paddingSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._paddingSizeInDataFetchStatus)
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
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.icon,
                            _idProps: {
                                service: idService,
                                name: "Icon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    badge: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.badge,
                            style: "ubt-icon-button__badge",
                            _idProps: {
                                service: idService,
                                name: "Badge"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("w_W5RpXSBUSbedeqZeHtBw.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
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
                    uuid: "4",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.text,
                            style: (model.variables.mainContainerClassVar + "__text-container"),
                            _idProps: {
                                service: idService,
                                name: "Text"
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
