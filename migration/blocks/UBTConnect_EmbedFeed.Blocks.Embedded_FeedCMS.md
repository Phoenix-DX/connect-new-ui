# UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS

- Kind: shared; build screens using it: FeedItemDetail, HomeFeed, MessageDetail
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.LazyImage, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: -)

## Inputs

(none found)

## Captured DOM variants (2 distinct, 3 instances)

### Variant 1: HomeFeed/default (×1)

```html
<div class="OSBlockWidget" data-block="Blocks.Embedded_FeedCMS" id="b10-$b1">
  <div class="overflow-hidden" data-container="" id="b10-b1-connect2feeds"></div>
</div>
```

### Variant 2: HomeFeed/loading (×2)

```html
<div class="OSBlockWidget" data-block="Blocks.Embedded_FeedCMS" id="b10-$b1">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b10-b1-$b1"><!-- nested block: 64 nodes --></div>
  <div class="overflow-hidden display-none" data-container="" id="b10-b1-connect2feeds"></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$model", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_EmbedFeed.controller$GetIframeObject", "UBTConnect_EmbedFeed.controller$GetScrollContainer", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect_EmbedFeed.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnect_EmbedFeedModel, UBTConnect_EmbedFeedController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, React, OSView, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_model, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_controller, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view) {
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
        View.displayName = "Blocks.Embedded_FeedCMS";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/UBTConnect_EmbedFeed.EmbedFeed.js"];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isLoadingVar, false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                    inputs: {
                        In_IsLoading: true
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
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        placeholder_LoadingSection: new PlaceholderContent(function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("+Wf0yWrzWk+am_lLFjOp6A.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = UBTConnect_EmbedFeedModel.staticEntities.uBT_Color.neutral0;
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
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.loadingListVar,
                                            style: "list list-group",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                uuid: "2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                        inputs: {
                                                            Options: model.getCachedValue(idService.getId("P2N24AhOfE+AaNrgMFGVAA.Options"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                    rec.marginSizeAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                        rec.generalSizeIdAttr = UBTConnect_EmbedFeedModel.staticEntities.uBT_Size.base;
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
                                                            uuid: "3",
                                                            alias: "3"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            content: new PlaceholderContent(function() {
                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, {
                                                                    inputs: {
                                                                        FallbackPadding: model.getCachedValue(idService.getId("LEKxA6ANiEm9tUGkXi7ndQ.FallbackPadding"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                rec.generalSizeIdAttr = UBTConnect_EmbedFeedModel.staticEntities.uBT_Size.doubleExtraLarge;
                                                                                return rec;
                                                                            }();
                                                                        }),
                                                                        In_BorderOptions: model.getCachedValue(idService.getId("LEKxA6ANiEm9tUGkXi7ndQ.In_BorderOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ImageBorderOptionsRec();
                                                                                rec.borderRadiusAttr = UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape.soft;
                                                                                return rec;
                                                                            }();
                                                                        }),
                                                                        In_ImageSize: model.getCachedValue(idService.getId("LEKxA6ANiEm9tUGkXi7ndQ.In_ImageSize"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                                rec.widthAttr = UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize.fullWidth_100_Percent;
                                                                                return rec;
                                                                            }();
                                                                        }),
                                                                        FallbackOptions: model.getCachedValue(idService.getId("LEKxA6ANiEm9tUGkXi7ndQ.FallbackOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
                                                                                rec.iconIdAttr = UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons.widgetsFill;
                                                                                rec.fontSizeAttr = UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize.display;
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
                                                                        alias: "4"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: []
                                                    })];
                                                }, callContext, idService, "1")
                                            },
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.loadingListVar)]
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables.loadingListVar)]
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("connect2feeds.Style"), function() {
                    return (("overflow-hidden " + ((model.variables.isLoadingVar) ? ("display-none") : (""))) + ((((model.variables.feedItemIdIn) !== (""))) ? (" feed--single-item") : ("")));
                }, function() {
                    return model.variables.isLoadingVar;
                }, function() {
                    return model.variables.feedItemIdIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "connect2feeds"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._feedItemIdInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
