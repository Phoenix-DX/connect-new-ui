# UBTConnect.Directory_Locality.StatisticsList

- Kind: shared; build screens using it: BrowseCountries, BrowseDirectory
- Compiled source: `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnect.Directory_Locality.StatisticsList.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem, UBTConnectLibrary.ConnectPatterns.Input, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem, UBTConnectLibrary.ConnectPatterns.Input)

## Inputs

| Input | Type |
|---|---|
| In_SearchPrompt | Text |
| In_IsLoading | Boolean |
| In_ShowSubtitle | Boolean |

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: BrowseCountries/default (×6)

```html
<div class="OSBlockWidget" data-block="Directory_Locality.StatisticsList" id="$b2">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-$b1"><!-- nested block: 1380 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Locality.StatisticsList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.StatisticsList.mvc$model", "UBTConnect.Directory_Locality.StatisticsList.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$view", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, React, OSView, UBTConnect_Directory_Locality_StatisticsList_mvc_model, UBTConnect_Directory_Locality_StatisticsList_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_view) {
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
        View.displayName = "Directory_Locality.StatisticsList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect.Directory_Locality.StatisticsList.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_StatisticsList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_StatisticsList_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("txSj6_ohLkOLSZv3utq+qg.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Block_Search.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.marginSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                name: "Block_Search",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
                                        inputs: {
                                            In_Options: model.getCachedValue(idService.getId("Block_SearchInput.In_Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.SearchInputRec();
                                                    rec.isEnabledAttr = (model.variables.in_StatisticsIn.length > 1);
                                                    rec.searchPromptAttr = model.variables.in_SearchPromptIn;
                                                    rec.debounce_DelayMSAttr = 200;
                                                    rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
                                                    return rec;
                                                }();
                                            }, function() {
                                                return model.variables.in_StatisticsIn.length;
                                            }, function() {
                                                return model.variables.in_SearchPromptIn;
                                            }),
                                            _in_OptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsInDataFetchStatus, model.variables._in_SearchPromptInDataFetchStatus)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            event_OnChange$Action: function(event_CurrentStringIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    controller.handler_Search_OnChange$Action(event_CurrentStringIn, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                                ;
                                            },
                                            event_Submit$Action: function(event_SubmittedStringIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    controller.handler_Search_OnChange$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                                ;
                                            },
                                            event_ClearString$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    controller.handler_Search_ClearString$Action(controller.callContext(eventHandlerContext));
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
                                            name: "Block_SearchInput",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._in_SearchPromptInDataFetchStatus), asPrimitiveValue(model.variables._in_StatisticsInDataFetchStatus), asPrimitiveValue(model.variables.in_SearchPromptIn), asPrimitiveValue(model.variables.in_StatisticsIn.length)]
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: model.variables.in_IsLoadingIn,
                                _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLoadingInDataFetchStatus)
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
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [$if((model.variables.local_ListVar.isEmpty && ((model.variables.searchStringVar) !== (""))), false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                            inputs: {
                                                In_PaddingOptions: model.getCachedValue(idService.getId("7OY2JyFEFUet_Z+dJyX1WQ.In_PaddingOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                        return rec;
                                                    }();
                                                }),
                                                In_TextOptions: model.getCachedValue(idService.getId("7OY2JyFEFUet_Z+dJyX1WQ.In_TextOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                        return rec;
                                                    }();
                                                }),
                                                In_Text: (("No results found for \'" + model.variables.searchStringVar) + "\'")
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
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                            inputs: {
                                                In_TextOptions: model.getCachedValue(idService.getId("FKZvzSON6kO9krm5ZjM_5A.In_TextOptions"), function() {
```
(… 130 more lines in `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnect.Directory_Locality.StatisticsList.mvc.js`)
