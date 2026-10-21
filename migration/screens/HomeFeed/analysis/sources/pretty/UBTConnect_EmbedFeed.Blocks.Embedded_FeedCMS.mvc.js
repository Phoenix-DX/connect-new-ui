define("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_EmbedFeed.controller$GetIframeObject", "UBTConnect_EmbedFeed.controller$GetScrollContainer", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect_EmbedFeed.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnect_EmbedFeedModel, UBTConnectLibraryModel, UBTConnect_EmbedFeedController, UBTJavaScriptUtilsController, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel) {
    var OS = OutSystems.Internal;

    var GetFeedConfigDataActRec = (function(_super) {
        __extends(GetFeedConfigDataActRec, _super);

        function GetFeedConfigDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetFeedConfigDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Token", "tokenOut", "Token", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("BaseURL", "baseURLOut", "BaseURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("B2CClientId", "b2CClientIdOut", "B2CClientId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("B2CPolicy", "b2CPolicyOut", "B2CPolicy", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("TokenType", "tokenTypeOut", "TokenType", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetFeedConfigDataActRec.init();
        return GetFeedConfigDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ScrollListerner", "scrollListernerVar", "ScrollListerner", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("LoadingList", "loadingListVar", "LoadingList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                }, false, OS.DataTypes.TextList),
                this.attr("MaxLoadingItems", "maxLoadingItemsVar", "MaxLoadingItems", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 5;
                }, false),
                this.attr("FeedItemId", "feedItemIdIn", "FeedItemId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_feedItemIdInDataFetchStatus", "_feedItemIdInDataFetchStatus", "_feedItemIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("B2CTenant", "b2CTenantIn", "B2CTenant", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_b2CTenantInDataFetchStatus", "_b2CTenantInDataFetchStatus", "_b2CTenantInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetFeedConfig", "getFeedConfigDataAct", "getFeedConfigDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetFeedConfigDataActRec());
                }, true, GetFeedConfigDataActRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.init();
        return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function(_super) {
        __extends(WidgetsRecord, _super);

        function WidgetsRecord() {
            _super.apply(this, arguments);
        }
        WidgetsRecord.getWidgetsType = function() {
            return {};
        };

        return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function(_super) {
        __extends(Model, _super);

        function Model() {
            _super.apply(this, arguments);
        }
        Model.getVariablesRecordConstructor = function() {
            return VariablesRecord;
        };
        Model.getWidgetsRecordConstructor = function() {
            return WidgetsRecord;
        };
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = ((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("FeedItemId" in inputs) {
                this.variables.feedItemIdIn = inputs.FeedItemId;
                if ("_feedItemIdInDataFetchStatus" in inputs) {
                    this.variables._feedItemIdInDataFetchStatus = inputs._feedItemIdInDataFetchStatus;
                }

            }

            if ("B2CTenant" in inputs) {
                this.variables.b2CTenantIn = inputs.B2CTenant;
                if ("_b2CTenantInDataFetchStatus" in inputs) {
                    this.variables._b2CTenantInDataFetchStatus = inputs._b2CTenantInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Blocks.Embedded_FeedCMS");
});
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
define("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect_EmbedFeed.languageResources", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$debugger", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$controller.OnAfterFetch_GetFeedConfig.InitializeFeedJS", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$controller.ScreenEvent_OnDestroy.RemoveScrollListenerJS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_EmbedFeed.controller$GetIframeObject", "UBTConnect_EmbedFeed.controller$GetScrollContainer", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect_EmbedFeed.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnect_EmbedFeedModel, UBTConnect_EmbedFeedController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnect_EmbedFeedLanguageResources, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_Debugger, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_controller_OnAfterFetch_GetFeedConfig_InitializeFeedJS, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_controller_ScreenEvent_OnDestroy_RemoveScrollListenerJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                action_OnFeedReady$Action: function() {
                    return controller.executeActionInsideJSNode(controller._action_OnFeedReady$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_OnFeedReady");
                },
                action_OnFeedComplete$Action: function() {
                    return controller.executeActionInsideJSNode(controller._action_OnFeedComplete$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_OnFeedComplete");
                },
                action_OnFeedShare$Action: function(itemIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn) {
                    itemIdIn = (itemIdIn === undefined) ? "" : itemIdIn;
                    feedItemTitleIn = (feedItemTitleIn === undefined) ? "" : feedItemTitleIn;
                    feedItemSubtitleIn = (feedItemSubtitleIn === undefined) ? "" : feedItemSubtitleIn;
                    feedItemImageURLIn = (feedItemImageURLIn === undefined) ? "" : feedItemImageURLIn;
                    return controller.executeActionInsideJSNode(controller._action_OnFeedShare$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(itemIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(feedItemTitleIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(feedItemSubtitleIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(feedItemImageURLIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_OnFeedShare");
                },
                action_SetListenerScroll$Action: function(objectIn) {
                    objectIn = (objectIn === undefined) ? null : objectIn;
                    return controller.executeActionInsideJSNode(controller._action_SetListenerScroll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_SetListenerScroll");
                },
                action_OnFeedDownload$Action: function(uRLIn, filenameIn) {
                    uRLIn = (uRLIn === undefined) ? "" : uRLIn;
                    filenameIn = (filenameIn === undefined) ? "" : filenameIn;
                    return controller.executeActionInsideJSNode(controller._action_OnFeedDownload$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_OnFeedDownload");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getFeedConfig$DataActRefresh: 0
            };
            this.dataFetchDependentsGraph = {
                getFeedConfig$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getFeedConfig$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:UcFMWb7ypEKaITWQOtsaPw:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/DataActions.UcFMWb7ypEKaITWQOtsaPw:sEwJVZwJ8U0QT8Q3JKa3oQ", "UBTConnect_EmbedFeed", "GetFeedConfig", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_FeedCMS/GetFeedConfig");
                return controller.callDataAction("DataActionGetFeedConfig", "screenservices/UBTConnect_EmbedFeed/Blocks/Embedded_FeedCMS/DataActionGetFeedConfig", "ytH7OJhfZ393ivU1dp3vcg", function(b) {
                    model.variables.getFeedConfigDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getFeedConfigDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getFeedConfigDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_FeedCMS/GetFeedConfig On After Fetch");
                    controller._onAfterFetch_GetFeedConfig$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:UcFMWb7ypEKaITWQOtsaPw", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getFeedConfig$DataActRefresh"];
        // Client Actions
        Controller.prototype._action_OnFeedReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_OnFeedReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:8BVWKmsWxEOvyITzNHP0vg:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.8BVWKmsWxEOvyITzNHP0vg:QA+6QLEYLPsZ0mY5ezp4XQ", "UBTConnect_EmbedFeed", "Action_OnFeedReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:CToNMoRUNkyvGMc8t10+8g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:LE3CWKS0skydP6oT_Y9ixg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:8BVWKmsWxEOvyITzNHP0vg", callContext.id);
            }

        };
        Controller.prototype._action_OnFeedDownload$Action = function(uRLIn, filenameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_OnFeedDownload");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.Action_OnFeedDownload$vars"))());
            vars.value.uRLInLocal = uRLIn;
            vars.value.filenameInLocal = filenameIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:yU+ON6r0ykOJf8+aK7qsJw:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.yU+ON6r0ykOJf8+aK7qsJw:RRtJNYS0KHsjJ4CGbWRCww", "UBTConnect_EmbedFeed", "Action_OnFeedDownload", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:sGWsuYsni0yvZDFOF06QnQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:J5V4zMzehE6rpidCNx01uQ", callContext.id);
                // Trigger Event: OnDownloaded
                return controller.onDownloaded$Action(vars.value.uRLInLocal, vars.value.filenameInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:d174s9KczkWEFxsIoNyljg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:yU+ON6r0ykOJf8+aK7qsJw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:yU+ON6r0ykOJf8+aK7qsJw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.Action_OnFeedDownload$vars", [{
            name: "URL",
            attrName: "uRLInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Filename",
            attrName: "filenameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:eKf8TmHrqkS2koCpA4mn_A:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.eKf8TmHrqkS2koCpA4mn_A:fMFBIKDljQRuxJ_3bz5HEA", "UBTConnect_EmbedFeed", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:ce7+dETByEmo_5v+sS99rQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:ejqQivewvEembRNVP0dD_w", callContext.id);
                // isLoading = True
                model.variables.isLoadingVar = true;
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:8sK2rJ8JRkinokZWoNrwVA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:eKf8TmHrqkS2koCpA4mn_A", callContext.id);
            }

        };
        Controller.prototype._action_OnFeedShare$Action = function(itemIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_OnFeedShare");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.Action_OnFeedShare$vars"))());
            vars.value.itemIdInLocal = itemIdIn;
            vars.value.feedItemTitleInLocal = feedItemTitleIn;
            vars.value.feedItemSubtitleInLocal = feedItemSubtitleIn;
            vars.value.feedItemImageURLInLocal = feedItemImageURLIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:CeFYorsUMUeTgTKGo8RLRg:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.CeFYorsUMUeTgTKGo8RLRg:OcXzZRO4VEc4A56jEbawnQ", "UBTConnect_EmbedFeed", "Action_OnFeedShare", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:nV+Uzr3o0Em6RzQVHrLJKQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:igIE7BLwQEiSyo8uvMfVYA", callContext.id);
                // Trigger Event: OnShare
                return controller.onShare$Action(vars.value.itemIdInLocal, vars.value.feedItemTitleInLocal, vars.value.feedItemSubtitleInLocal, vars.value.feedItemImageURLInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:jKEUTOqIM0KFyl7oJNUfXQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:CeFYorsUMUeTgTKGo8RLRg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:CeFYorsUMUeTgTKGo8RLRg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.Action_OnFeedShare$vars", [{
            name: "ItemId",
            attrName: "itemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "FeedItemTitle",
            attrName: "feedItemTitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "FeedItemSubtitle",
            attrName: "feedItemSubtitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "FeedItemImageURL",
            attrName: "feedItemImageURLInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onAfterFetch_GetFeedConfig$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetFeedConfig");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:Bysuo78XgEeaAEpN0H6NwQ:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.Bysuo78XgEeaAEpN0H6NwQ:AgOZRSiq1OvIEasGPR63sg", "UBTConnect_EmbedFeed", "OnAfterFetch_GetFeedConfig", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:KoeeEj+0hUeCTvyfbE81xw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:4_U7fGENKkStUlw55fo8EQ", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_controller_OnAfterFetch_GetFeedConfig_InitializeFeedJS, "InitializeFeed", "OnAfterFetch_GetFeedConfig", {
                    Channel: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                    B2CClientId: OS.DataConversion.JSNodeParamConverter.to(model.variables.getFeedConfigDataAct.b2CClientIdOut, OS.DataTypes.DataTypes.Text),
                    B2CTenant: OS.DataConversion.JSNodeParamConverter.to(model.variables.b2CTenantIn, OS.DataTypes.DataTypes.Text),
                    B2CPolicy: OS.DataConversion.JSNodeParamConverter.to(model.variables.getFeedConfigDataAct.b2CPolicyOut, OS.DataTypes.DataTypes.Text),
                    TokenType: OS.DataConversion.JSNodeParamConverter.to(model.variables.getFeedConfigDataAct.tokenTypeOut, OS.DataTypes.DataTypes.Text),
                    ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("connect2feeds"), OS.DataTypes.DataTypes.Text),
                    Limit: OS.DataConversion.JSNodeParamConverter.to(10, OS.DataTypes.DataTypes.Integer),
                    Theme: OS.DataConversion.JSNodeParamConverter.to("light", OS.DataTypes.DataTypes.Text),
                    BaseURL: OS.DataConversion.JSNodeParamConverter.to(model.variables.getFeedConfigDataAct.baseURLOut, OS.DataTypes.DataTypes.Text),
                    FeedItemId: OS.DataConversion.JSNodeParamConverter.to(model.variables.feedItemIdIn, OS.DataTypes.DataTypes.Text),
                    Token: OS.DataConversion.JSNodeParamConverter.to(model.variables.getFeedConfigDataAct.tokenOut, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    Action_OnFeedReady: controller.clientActionProxies.action_OnFeedReady$Action,
                    Action_OnFeedComplete: controller.clientActionProxies.action_OnFeedComplete$Action,
                    Action_OnFeedShare: controller.clientActionProxies.action_OnFeedShare$Action,
                    Action_SetListenerScroll: controller.clientActionProxies.action_SetListenerScroll$Action,
                    Action_OnFeedDownload: controller.clientActionProxies.action_OnFeedDownload$Action,
                    GetIframeObject: UBTConnect_EmbedFeedController.default.getClientActionProxies(controller).getIframeObject$Action,
                    GetScrollContainer: UBTConnect_EmbedFeedController.default.getClientActionProxies(controller).getScrollContainer$Action,
                    JSUtils_Console_Log: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Console_Log$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:jHCPlcKh9UGQ16+apcwazg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:Bysuo78XgEeaAEpN0H6NwQ", callContext.id);
            }

        };
        Controller.prototype._action_OnFeedComplete$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_OnFeedComplete");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:Not+pBiC80Gw6JnXEj8F8w:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.Not+pBiC80Gw6JnXEj8F8w:ce8rAy_VSaM7BfJvVQcb2A", "UBTConnect_EmbedFeed", "Action_OnFeedComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:hid65entv02tCoAzXuSr9A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:ceji0JohzkuyUQqq4pWTfw", callContext.id);
                // isLoading = False
                model.variables.isLoadingVar = false;
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:arf6NuVTuUW200eEy21fTQ", callContext.id);
                // Trigger Event: OnLoaded
                return controller.onLoaded$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:JUVu+GUgfkGSWi+YY1+k8g", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:Not+pBiC80Gw6JnXEj8F8w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:Not+pBiC80Gw6JnXEj8F8w", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._screenEvent_OnDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:g5SPvf1GEEikqb_353gpBQ:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.g5SPvf1GEEikqb_353gpBQ:GNHsmxCTpQ5OKJRLCjEpww", "UBTConnect_EmbedFeed", "ScreenEvent_OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:Kl12Lv9NZ0iNBrE5wmLPdg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:bsgQGQpZ90y6uVOo_8cxfA", callContext.id) && ((model.variables.scrollListernerVar) !== (OS.BuiltinFunctions.nullObject())))) {
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:rqNai61GjESpSE7zJIe3Dg", callContext.id);
                    controller.safeExecuteJSNode(UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_controller_ScreenEvent_OnDestroy_RemoveScrollListenerJS, "RemoveScrollListener", "ScreenEvent_OnDestroy", {
                        Object: OS.DataConversion.JSNodeParamConverter.to(model.variables.scrollListernerVar, OS.DataTypes.DataTypes.Object)
                    }, function($parameters) {}, {
                        GetScrollContainer: UBTConnect_EmbedFeedController.default.getClientActionProxies(controller).getScrollContainer$Action
                    }, {});
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:pnRF07infkmYZ7ppbbpTSw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:pnRF07infkmYZ7ppbbpTSw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:g5SPvf1GEEikqb_353gpBQ", callContext.id);
            }

        };
        Controller.prototype._action_SetListenerScroll$Action = function(objectIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetListenerScroll");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.Action_SetListenerScroll$vars"))());
            vars.value.objectInLocal = objectIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:NY7Ize0D1k6fXd39Gcopow:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.NY7Ize0D1k6fXd39Gcopow:_OEk8lHkcLtvykx9SGOJlA", "UBTConnect_EmbedFeed", "Action_SetListenerScroll", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:o1IFUYMdf0u88krasQUqyw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:KG+Td7ki1EqAHjqffE4Cbg", callContext.id);
                // ScrollListerner = Object
                model.variables.scrollListernerVar = vars.value.objectInLocal;
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:FW6XiX5F70e57EuPpM4oGQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:NY7Ize0D1k6fXd39Gcopow", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.Action_SetListenerScroll$vars", [{
            name: "Object",
            attrName: "objectInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.ScreenEvent_OnInitialize$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:ImQ82zyHbU+OV1Kkjsab9Q:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ/ClientActions.ImQ82zyHbU+OV1Kkjsab9Q:Ec_tILE2kzvRyCc0uDWHeA", "UBTConnect_EmbedFeed", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:9qPPtGBsHEGfRghdzzumDQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:OTFbc0gnRUqCjWSvHifb5g", callContext.id) && ((model.variables.feedItemIdIn) !== ("")))) {
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:CUhDQh+Cy0WbRG2CEWp3qw", callContext.id);
                    // MaxLoadingItems = 1
                    model.variables.maxLoadingItemsVar = 1;
                }

                if ((OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:QO2PCGWVi0iRWW1qTPISuA", callContext.id) && model.variables.loadingListVar.isEmpty)) {
                    while ((OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:gl3fjG5RmUan_p+FFTQSTw", callContext.id) && (vars.value.currLoadingItemVar < model.variables.maxLoadingItemsVar))) {
                        OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:VTu_ni0WZECqjgadK5nfUg", callContext.id);
                        // CurrLoadingItem = CurrLoadingItem + 1
                        vars.value.currLoadingItemVar = (vars.value.currLoadingItemVar + 1);
                        OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:agyyCaBE60ycsRsTgj3AHQ", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.loadingListVar, ("Loading " + (vars.value.currLoadingItemVar).toString()), callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:M7M4QtyFyEi4T2w4tTOxaA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("bCdF3mIZXke12L9HDxk1Qg:M7M4QtyFyEi4T2w4tTOxaA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:ImQ82zyHbU+OV1Kkjsab9Q", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.ScreenEvent_OnInitialize$vars", [{
            name: "CurrLoadingItem",
            attrName: "currLoadingItemVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

        Controller.prototype.action_OnFeedReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_OnFeedReady$Action, callContext);

        };
        Controller.prototype.action_OnFeedDownload$Action = function(uRLIn, filenameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_OnFeedDownload$Action, callContext, uRLIn, filenameIn);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.action_OnFeedShare$Action = function(itemIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_OnFeedShare$Action, callContext, itemIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn);

        };
        Controller.prototype.onAfterFetch_GetFeedConfig$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetFeedConfig$Action, callContext);

        };
        Controller.prototype.action_OnFeedComplete$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_OnFeedComplete$Action, callContext);

        };
        Controller.prototype.screenEvent_OnDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnDestroy$Action, callContext);

        };
        Controller.prototype.action_SetListenerScroll$Action = function(objectIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetListenerScroll$Action, callContext, objectIn);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.onShare$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onDownloaded$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onLoaded$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:Gckt5X_GZkCYJZnf68B3CA:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA:x8ULQ0mx5rZSvYs3cTLXxw", "UBTConnect_EmbedFeed", "Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("bCdF3mIZXke12L9HDxk1Qg:MgoAFZ4OpEqoKEw3X7rgIQ:/NRWebFlows.Gckt5X_GZkCYJZnf68B3CA/NodesShownInESpaceTree.MgoAFZ4OpEqoKEw3X7rgIQ:6VcMMlXlEmJk5TdALsYtjw", "UBTConnect_EmbedFeed", "Embedded_FeedCMS", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:MgoAFZ4OpEqoKEw3X7rgIQ", callContext.id);
            OutSystemsDebugger.pop("bCdF3mIZXke12L9HDxk1Qg:Gckt5X_GZkCYJZnf68B3CA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_FeedCMS On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_FeedCMS On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_FeedCMS On Destroy");
                return controller.screenEvent_OnDestroy$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnect_EmbedFeedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_EmbedFeedLanguageResources);
});
define("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$controller.OnAfterFetch_GetFeedConfig.InitializeFeedJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.feedControl = window.feedControl || {};

        window.feedControl.onReady = $actions.Action_OnFeedReady;
        window.feedControl.onComplete = $actions.Action_OnFeedComplete;
        window.feedControl.onShare = $actions.Action_OnFeedShare;
        window.feedControl.setScrollLister = $actions.Action_SetListenerScroll;
        window.feedControl.onDownload = $actions.Action_OnFeedDownload;


        function handleFeedScroll() {
            var container = document.getElementById($parameters.ContainerId);
            var iframe = $actions.GetIframeObject($parameters.ContainerId).Object;
            var scrollContainer = $actions.GetScrollContainer().Object;

            var ticking = false;

            // threshold for mobile momentum scroll
            var threshold = 60;

            function setIframeScrolling(enabled) {
                // enabled: allow iframe internal scrolling
                // disabled: try to prevent iframe internal scrolling
                if (enabled) {
                    iframe.setAttribute("scrolling", "yes"); // try: "yes" / "auto"
                    iframe.style.overflow = "auto";
                } else {
                    iframe.setAttribute("scrolling", "no");
                    iframe.style.overflow = "hidden";
                }
            }

            function updateScrollLock() {
                // Use container if possible (more stable than iframe rect in some layouts)
                var rect = (container || iframe).getBoundingClientRect();

                if (rect.top <= threshold) {
                    setIframeScrolling(true);
                } else {
                    setIframeScrolling(false);
                }

                ticking = false;
            }

            function onScroll() {
                if (!ticking) {
                    requestAnimationFrame(updateScrollLock);
                    ticking = true;
                }
            }

            // store references so you can remove later
            window.feedControl.setScrollLister(onScroll);

            // IMPORTANT: scroll event must be on the real scroller
            scrollContainer.addEventListener("scroll", onScroll, {
                passive: true
            });

            // initial state
            updateScrollLock();
        }

        window.feedControl.start = performance.now();
        $actions.JSUtils_Console_Log("Initialized Feed");

        if (window.Connect2Feed && !window.Connect2Feed.embed.isConfigured()) {
            window.Connect2Feed.embed.configure({
                baseUrl: $parameters.BaseURL,
                theme: $parameters.Theme,
                limit: $parameters.Limit,
                channelId: $parameters.Channel,
                containerId: $parameters.ContainerId,
                height: "auto",
                tokenType: $parameters.TokenType,
                b2cTenants: $parameters.B2CTenant,
                b2cClientIds: $parameters.B2CClientId,
                b2cPolicy: $parameters.B2CPolicy,
                idToken: $parameters.Token,
                hideActions: false,
                onReady: function(data) {
                    $actions.JSUtils_Console_Log("Embed ready (SDK)", "success");
                    window.feedControl.onReady();
                },
                onFeedsLoaded: function(data) {
                    $actions.JSUtils_Console_Log(`Feed Load Event Triggered`);
                    window.feedControl.onComplete();
                },
                onError: function(error) {
                    $actions.JSUtils_Console_Log(
                        "Error: " + (error.message || error.error || "Unknown"),
                    );
                },
                onFeedClick: function(data) {
                    $actions.JSUtils_Console_Log(`Feed clicked: ${data.feedId}`);
                },
                onShare: function(data) {
                    window.feedControl.onShare(data.feedId, data.feedTitle, data.subtitle, data.image);
                },
                onDownload: function(data) {
                    window.feedControl.onDownload(data.url, data.fileName)
                },
                onComplete: function(data) {
                    const end = performance.now();
                    $actions.JSUtils_Console_Log(
                        `Feed OnComplete Event Triggered - Duration: ${end - window.feedControl.start} ms`,
                    );
                    $actions.JSUtils_Console_Log(`Loaded ${data.count}/${data.total} feeds`);
                    window.feedControl.onComplete();
                    handleFeedScroll();
                },
            });
        }

        if ($parameters.FeedItemId != "") {
            Connect2Feed.embed.openFeedItem($parameters.FeedItemId, $parameters.ContainerId, {
                hideActions: false
            });
        } else {
            window.Connect2Feed.embed.loadFeeds({
                containerId: $parameters.ContainerId,
                height: "100%",
                hideActions: false
            });
        }



    };
});
define("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$controller.ScreenEvent_OnDestroy.RemoveScrollListenerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var scrollContainer = $actions.GetScrollContainer().Object
        scrollContainer.removeEventListener("scroll", $parameters.Object);
    };
});

define("UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "8DjP2PP73EydFUi6JYINrw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.uRLInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zyvp12oNREytNbw7IgVRVw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.filenameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ZPS4J9eNKk26DhPP+MlRuA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KKQIMHyvyUWCLTMsWzSoTQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.feedItemTitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "oSHvjUOWh0OG+oM1loy1Qw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.feedItemSubtitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gvDJrpI0Kkme89OhXGzlkA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.feedItemImageURLInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4_U7fGENKkStUlw55fo8EQ": {
            getter: function(varBag, idService) {
                return varBag.initializeFeedJSResult.value;
            }
        },
        "rqNai61GjESpSE7zJIe3Dg": {
            getter: function(varBag, idService) {
                return varBag.removeScrollListenerJSResult.value;
            }
        },
        "itcOau6nFkaXdFefWRBG7Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "vMgYFzWNf0iFg4QQTsSWhA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currLoadingItemVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "njsJMw8iykWO0MSrQXnPmg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.scrollListernerVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "fdtWwxlcWEWIlKXB1rg+BQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "fCuh6cWynEmcptS4QVx4wQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.loadingListVar;
            }
        },
        "xkonfQ7tq0CcN8MQLWam0Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxLoadingItemsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "4NacudzMt069ji8GGYqmDQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.feedItemIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "yzUBTOAAI0G597QZu8lMGA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.b2CTenantIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UcFMWb7ypEKaITWQOtsaPw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getFeedConfigDataAct;
            }
        },
        "j5QvzWxesUO+OyqeRObz9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "Bvq9qspz9E+VKVETCtrPmw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "418Lm8hXc0iumBs3HVSUYA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "iDbxHE5UbUmSEZ7_hY6S_w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("connect2feeds"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});