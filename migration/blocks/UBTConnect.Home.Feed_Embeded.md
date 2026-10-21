# UBTConnect.Home.Feed_Embeded

- Kind: shared; build screens using it: FeedItemDetail, HomeFeed, MessageDetail
- Compiled source: `migration/screens/HomeFeed/analysis/sources/pretty/UBTConnect.Home.Feed_Embeded.mvc.js`
- Child blocks: FileTransferPlugin.FileTransfer.HandleDownload, UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS, UBTConnect_Utils.CW_CTA_PopUps.SharePopup (queue: UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS, UBTConnect_Utils.CW_CTA_PopUps.SharePopup)

## Inputs

| Input | Type |
|---|---|
| FeedItemId | Text |

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: HomeFeed/default (×3)

```html
<div class="OSBlockWidget" data-block="Home.Feed_Embeded" id="$b10">
  <div class="OSBlockWidget" data-block="Blocks.Embedded_FeedCMS" id="b10-$b1"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_CTA_PopUps.SharePopup" id="b10-$b2"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="FileTransfer.HandleDownload" id="b10-$b3"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Home.Feed_Embeded.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "CommonPlugin.model", "Connect2_MediaScannerPlugin.controller", "FileViewerPlugin.controller", "FileTransferPlugin.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.Feed_Embeded.mvc$model", "UBTConnect.Home.Feed_Embeded.mvc$controller", "UBTConnect.clientVariables", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$view", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$view", "UBTConnect_Utils.controller$GetHasFeedEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetHasExtendedShare", "CommonPlugin.model$ErrorRec", "UBTConnect.referencesHealth$CommonPlugin", "Connect2_MediaScannerPlugin.controller$MediaScannerPlugin_ForceScan", "UBTConnect.referencesHealth$Connect2_MediaScannerPlugin", "Connect2_MediaScannerPlugin.controller$CheckMediaScanner_Plugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "UBTConnect.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "UBTConnect.referencesHealth$FileTransferPlugin", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "FileTransferPlugin.model$FileTransferErrorRec", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "FileTransferPlugin.model$ProgressRec", "UBTConnect_Utils.controller$ShareEntity_ByURL"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, CommonPluginModel, Connect2_MediaScannerPluginController, FileViewerPluginController, FileTransferPluginModel, React, OSView, UBTConnect_Home_Feed_Embeded_mvc_model, UBTConnect_Home_Feed_Embeded_mvc_controller, UBTConnectClientVariables, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_view, OSWidgets, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view) {
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
        View.displayName = "Home.Feed_Embeded";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Home_Feed_Embeded_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Home_Feed_Embeded_mvc_controller;
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
                return UBTConnect_UtilsController.default.getHasFeedEnabled$Action(callContext).hasAccessOut;
            }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                return [React.createElement(UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_view, {
                    inputs: {
                        B2CTenant: UBTConnectClientVariables.getEmbedd_B2CTenant(),
                        FeedItemId: model.variables.feedItemIdIn,
                        _feedItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._feedItemIdInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        onDownloaded$Action: function(uRLIn, filenameIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.handle_Download$Action(uRLIn, filenameIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onShare$Action: function(shareIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.embedded_FeedCMSOnShare$Action(shareIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn, controller.callContext(eventHandlerContext));
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
                })];
            }, function() {
                return [];
            }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, {
                inputs: {
                    In_ContactPopupData: model.getCachedValue(idService.getId("GgBLoXZjyE+M6J7NXPfRvw.In_ContactPopupData"), function() {
                        return function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                            rec.entityTypeIdAttr = UBTConnectModel.staticEntities.connect_Entity.feedItem;
                            rec.entityIdAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.sharePopUp_IdVar));
                            rec.isAvatarImageAttr = false;
                            rec.actionNameAttr = ("Share " + model.variables.shareFeedItem_TitleVar);
                            rec.nameAttr = "";
                            rec.localityAttr = "";
                            rec.timezoneNameAttr = "";
                            rec.timezoneOffsetAttr = 0;
                            rec.showPopupAttr = model.variables.sharePopUp_ShowVar;
                            rec.isFetchingTimezoneAttr = false;
                            rec.isLoadingAttr = false;
                            rec.showTimezoneAttr = false;
                            rec.showImageAttr = false;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.sharePopUp_IdVar;
                    }, function() {
                        return model.variables.shareFeedItem_TitleVar;
                    }, function() {
                        return model.variables.sharePopUp_ShowVar;
                    })
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
                            controller.handle_Share$Action(false, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    event_ShareToOthers$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handle_Share_Others$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_ShareToConnect$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handle_Share_Connect$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "1",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(FileTransferPlugin_FileTransfer_HandleDownload_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onDownloadComplete$Action: function(fileDownloadResultIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handleDownloadOnDownloadComplete$Action(fileDownloadResultIn, fileDownloadResultIn.fullPathAttr, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    onDownloadProgress$Action: function(progressIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.handleDownloadOnDownloadProgress$Action(progressIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    onDownloadError$Action: function(fileTransferErrorIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.handleDownloadOnDownloadError$Action(fileTransferErrorIn, controller.callContext(eventHandlerContext));
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
                    uuid: "2",
                    alias: "3"
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
