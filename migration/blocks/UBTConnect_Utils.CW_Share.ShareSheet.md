# UBTConnect_Utils.CW_Share.ShareSheet

- Kind: shared; build screens using it: BookmarksByGroup, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js`
- Child blocks: NavigationHandler.NavigationHandler.PreventBackNavigation, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.BottomSheet, UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel, UBTConnectLibrary.ConnectPatterns.EmptyList, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.Input, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CW_Common.Button, UBTConnect_Utils.CW_Image.UBT_LazyImage, UBTConnect_Utils.CW_Search.SearchResult_Item, UBTConnect_Utils.CW_Share.ShareSheet_Section, UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle (queue: UBTConnectLibrary.ConnectPatterns.BottomSheet, UBTConnectLibrary.ConnectPatterns.Input, UBTConnect_Utils.CW_Search.SearchResult_Item, UBTConnect_Utils.CW_Share.ShareSheet_Section, UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 39 instances)

### Variant 1: BookmarksByGroup/default (×39)

```html
<div class="OSBlockWidget" data-block="CW_Share.ShareSheet" id="b1-$b25"></div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "UBTConnectLibrary.model", "Connect_Search_CS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "MemoryClientCache.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$view", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "UBTConnect_Utils.controller$ShareSheet_IsSharing", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$SelectableSearchResultListList", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth$Connect_Search_CS", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.model$SearchResultList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$ExternalShare", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.model$SelectableSearchResultListRec", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, UBTConnectLibraryModel, Connect_Search_CSModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, MemoryClientCacheModel, React, OSView, UBTConnect_Utils_CW_Share_ShareSheet_mvc_model, UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_Section_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "CW_Share.ShareSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_Section_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Share_ShareSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isOpenVar, false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
                    inputs: {
                        ExtendedClasses: model.getCachedValue(idService.getId("BottomSheet.ExtendedClasses"), function() {
                            return (("connect-share-sheet background-neutral-2 ubt-bottom-sheet--dynamic-height" + ((model.variables.isSearchStepVar) ? (" ubt-bottom-sheet--full-height") : (""))) + ((model.variables.in_IsLegacyIn) ? (" connect-share-sheet--legacy") : ("")));
                        }, function() {
                            return model.variables.isSearchStepVar;
                        }, function() {
                            return model.variables.in_IsLegacyIn;
                        }),
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLegacyInDataFetchStatus),
                        FooterHeight: model.getCachedValue(idService.getId("BottomSheet.FooterHeight"), function() {
                            return ((model.variables.isSearchingVar) ? ("0px") : ("auto"));
                        }, function() {
                            return model.variables.isSearchingVar;
                        }),
                        ShowHeader: true,
                        Title: ("Share " + model.variables.in_ShareObjectTypeIdIn),
                        _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareObjectTypeIdInDataFetchStatus),
                        Content_BackgroundColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral2,
                        ShowBackButton: model.variables.isSearchStepVar,
                        Content_Padding: model.getCachedValue(idService.getId("BottomSheet.Content_Padding"), function() {
                            return function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.none;
                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.none;
                                return rec;
                            }();
                        })
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        initialized$Action: function(idIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                controller.handler_BottomSheetInitialized$Action(idIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                            ;
                        },
                        onClose$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.action_ResetAndCloseSheetState$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onToggle$Action: function(isOpenIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.handler_BottomSheetOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onBack$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);
                                    return controller.handler_OnBack$Action(controller.callContext(eventHandlerContext));
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
                        name: "BottomSheet",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new PlaceholderContent(function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("F1POv27WEEKI4ieBxgnfqg.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0;
                                                return rec;
                                            }();
                                            rec.paddingSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.verticalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                                return rec;
                                            }();
                                            rec.marginSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                return rec;
                                            }();
                                            rec.borderOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                rec.radiusAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                    rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Shape.medium;
                                                    return rec;
                                                }();
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
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: model.getCachedValue(idService.getId("4QDZ+SskK0eumBt9jFoovw.Style"), function() {
                                                    return UBTConnect_UtilsController.default.shareSheet_IsSharing$Action(model.variables.currentExternalShareIdOptionVar, model.variables.sharingRecentMemberIdVar, callContext).out_IsSharingOut;
                                                }, OS.DataTypes.DataTypes.Boolean, callContext.id)) ? ("connect-share-sheet__content--processing") : ("")));
                                            }, function() {
                                                return model.variables.currentExternalShareIdOptionVar;
                                            }, function() {
                                                return model.variables.sharingRecentMemberIdVar;
                                            }),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $if(!(model.variables.isSearchStepVar), false, this, function() {
                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                inputs: {
                                                    Options: model.getCachedValue(idService.getId("UATI3WFCeEi92fHnG5nV3Q.Options"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                            rec.paddingSizeAttr = function() {
                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
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
                                                        return [React.createElement(OSWidgets.Container, {
                                                            align: /*Default*/ 0,
                                                            animate: false,
                                                            style: "connect-share-sheet__content__first-step display-flex flex-direction-column gap-base",
                                                            visible: true,
                                                            _idProps: {
```
(… 1328 more lines in `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnect_Utils.CW_Share.ShareSheet.mvc.js`)
