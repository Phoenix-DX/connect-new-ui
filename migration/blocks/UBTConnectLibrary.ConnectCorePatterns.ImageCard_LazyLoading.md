# UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_CardTypeId | Text |
| In_ItemsPerRow | Integer |
| In_ShowAvatarList | Boolean |
| In_ExtendedClass | Text |
| In_IsBookmarked | Boolean |
| In_BookmarkModifier | Text |

## Captured DOM variants (1 distinct, 120 instances)

### Variant 1: HouseholdCarousel/default (×120)

```html
<div class="OSBlockWidget" data-block="ConnectCorePatterns.ImageCard_LazyLoading" id="b3-l1-1152_0-b2-b3-b1-ImageCard_LazyLoading">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1152_0-b2-b3-b1-b3-$b1"><!-- nested block: 144 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$GetClasses_ImageCard", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetBorderOptions_ImageCard", "UBTConnectLibrary.controller$GetTextOptions_ImageCard", "UBTConnectLibrary.controller$GetSpacingOptions_ImageCardContent"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_model, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets) {
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
        View.displayName = "ConnectCorePatterns.ImageCard_LazyLoading";
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
                return UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_controller;
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
                    ExtendedClasses: model.getCachedValue(idService.getId("_DTuPC_e9EiMin7jPF4pag.ExtendedClasses"), function() {
                            return UBTConnectLibraryController.default.getClasses_ImageCard$Action(model.variables.mainContainerClassVar, model.variables.in_CardTypeIdIn, UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.small_40, model.variables.in_ShowAvatarListIn, model.variables.in_ExtendedClassIn, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.in_CardTypeIdIn;
                    }, function() {
                        return model.variables.in_ShowAvatarListIn;
                    }, function() {
                        return model.variables.in_ExtendedClassIn;
                    }),
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus, model.variables._in_ShowAvatarListInDataFetchStatus, model.variables._in_ExtendedClassInDataFetchStatus),
                    Options: model.getCachedValue(idService.getId("_DTuPC_e9EiMin7jPF4pag.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.borderOptionsAttr = model.variables.borderOptionsVar;
                            rec.textOptionsAttr = model.variables.textOptionsVar;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.borderOptionsVar;
                    }, function() {
                        return model.variables.textOptionsVar;
                    })
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
                            controller.event_Click$Action(controller.callContext(eventHandlerContext));
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("ImageWrapper.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.borderOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                            rec.radiusAttr = function() {
                                                var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                rec.topLeftIdAttr = model.variables.borderOptionsVar.radiusAttr.generalSizeIdAttr;
                                                rec.topRightIdAttr = model.variables.borderOptionsVar.radiusAttr.generalSizeIdAttr;
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                        rec.displayOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                            rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
                                            rec.alignItemsAttr = UBTConnectLibraryModel.staticEntities.uBT_AlignItems.flexStart;
                                            rec.justifyContentAttr = UBTConnectLibraryModel.staticEntities.uBT_JustifyContent.center;
                                            return rec;
                                        }();
                                        rec.isSkeletonElementAttr = true;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.borderOptionsVar.radiusAttr.generalSizeIdAttr;
                                }),
                                ExtendedClasses: model.getCachedValue(idService.getId("ImageWrapper.ExtendedClasses"), function() {
                                                    return UBTConnectLibraryController.default.getClasses_BackgroundImageSize$Action(model.variables.in_CardTypeIdIn, model.variables.in_ItemsPerRowIn, callContext).classesOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                                return UBTConnectLibraryController.default.formatClasses$Action(((model.variables.in_IsBookmarkedIn) ? ((model.variables.mainContainerClassVar + "__bookmarked")) : ("")), model.variables.in_BookmarkModifierIn, callContext).classesOutOut;
                                            }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id), "position-relative", callContext).classesOutOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                }, function() {
                                    return model.variables.mainContainerClassVar;
                                }, function() {
                                    return model.variables.in_CardTypeIdIn;
                                }, function() {
                                    return model.variables.in_ItemsPerRowIn;
                                }, function() {
                                    return model.variables.in_IsBookmarkedIn;
                                }, function() {
                                    return model.variables.in_BookmarkModifierIn;
                                }),
                                _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus, model.variables._in_ItemsPerRowInDataFetchStatus, model.variables._in_IsBookmarkedInDataFetchStatus, model.variables._in_BookmarkModifierInDataFetchStatus)
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
                                name: "ImageWrapper",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Placeholder, {
                                        align: /*Default*/ 0,
                                        content: _this.props.placeholders.lazyImage_Placeholder,
                                        style: (model.variables.mainContainerClassVar + "--lazy-image-placeholder "),
                                        _idProps: {
                                            service: idService,
                                            name: "LazyImage_Placeholder"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Placeholder, {
                                        align: /*Default*/ 0,
                                        content: _this.props.placeholders.placeholder_ImageTag,
                                        style: "position-absolute absolute-bottom-right padding-s",
                                        _idProps: {
                                            service: idService,
                                            name: "Placeholder_ImageTag"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            }
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.variables.in_ShowAvatarListIn,
                            _idProps: {
                                service: idService,
                                name: "DIV_AvatarListWrapper"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowAvatarListInDataFetchStatus)
                        }, React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.avatarList,
                            style: (model.variables.mainContainerClassVar + "__avatar-list"),
                            _idProps: {
                                service: idService,
                                name: "AvatarList"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("JslMbluJYEOfoXBiCOV2tw.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = model.variables.contentSpacingOptionsVar;
                                        rec.textOptionsAttr = model.variables.textOptionsVar;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.contentSpacingOptionsVar;
                                }, function() {
                                    return model.variables.textOptionsVar;
                                }),
                                ExtendedClasses: (((((model.variables.mainContainerClassVar + "__content") + " ") + model.variables.mainContainerClassVar) + "__content--type-") + model.variables.in_CardTypeIdIn),
                                _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus)
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
                                uuid: "6",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
```
(… 21 more lines in `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc.js`)
