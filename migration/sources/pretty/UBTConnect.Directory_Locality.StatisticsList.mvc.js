define("UBTConnect.Directory_Locality.StatisticsList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$model", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Local_List", "local_ListVar", "Local_List", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TextStatisticsOptionsRecordList());
                }, false, UBTConnectModel.TextStatisticsOptionsRecordList),
                this.attr("SearchString", "searchStringVar", "SearchString", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("In_Statistics", "in_StatisticsIn", "In_Statistics", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TextStatisticsOptionsRecordList());
                }, false, UBTConnectModel.TextStatisticsOptionsRecordList),
                this.attr("_in_StatisticsInDataFetchStatus", "_in_StatisticsInDataFetchStatus", "_in_StatisticsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_SearchPrompt", "in_SearchPromptIn", "In_SearchPrompt", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_SearchPromptInDataFetchStatus", "_in_SearchPromptInDataFetchStatus", "_in_SearchPromptInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ShowSubtitle", "in_ShowSubtitleIn", "In_ShowSubtitle", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_ShowSubtitleInDataFetchStatus", "_in_ShowSubtitleInDataFetchStatus", "_in_ShowSubtitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false)
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
                    Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Statistics" in inputs) {
                this.variables.in_StatisticsIn = inputs.In_Statistics;
                if ("_in_StatisticsInDataFetchStatus" in inputs) {
                    this.variables._in_StatisticsInDataFetchStatus = inputs._in_StatisticsInDataFetchStatus;
                }

            }

            if ("In_SearchPrompt" in inputs) {
                this.variables.in_SearchPromptIn = inputs.In_SearchPrompt;
                if ("_in_SearchPromptInDataFetchStatus" in inputs) {
                    this.variables._in_SearchPromptInDataFetchStatus = inputs._in_SearchPromptInDataFetchStatus;
                }

            }

            if ("In_IsLoading" in inputs) {
                this.variables.in_IsLoadingIn = inputs.In_IsLoading;
                if ("_in_IsLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
                }

            }

            if ("In_ShowSubtitle" in inputs) {
                this.variables.in_ShowSubtitleIn = inputs.In_ShowSubtitle;
                if ("_in_ShowSubtitleInDataFetchStatus" in inputs) {
                    this.variables._in_ShowSubtitleInDataFetchStatus = inputs._in_ShowSubtitleInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.StatisticsList");
});
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

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
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

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
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

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
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
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
                                                        return rec;
                                                    }();
                                                }),
                                                In_Text: "Try searching for a country or locality.",
                                                In_PaddingOptions: model.getCachedValue(idService.getId("FKZvzSON6kO9krm5ZjM_5A.In_PaddingOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                uuid: "5",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.local_ListVar,
                                            style: "list list-group list--gap-s",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                name: "List"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "7"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: [asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.in_IsLoadingIn), asPrimitiveValue(model.variables.local_ListVar.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables._in_IsLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus), asPrimitiveValue(model.variables.in_ShowSubtitleIn)]
                                                    }, React.createElement(UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_view, {
                                                        inputs: {
                                                            In_ShowSubtitle: model.variables.in_ShowSubtitleIn,
                                                            _in_ShowSubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowSubtitleInDataFetchStatus),
                                                            In_ExtendedClasses: "country-flag",
                                                            In_StatisticsOptions: model.getCachedValue(idService.getId("qWabOauMuUm244E7olAutg.In_StatisticsOptions"), function() {
                                                                return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.local_ListVar.getCurrent(callContext.iterationContext), new UBTConnectLibraryModel.StatisticsOptionsRec(), function(source, target) {
                                                                    target = source.statisticsOptionsAttr;
                                                                    return target;
                                                                });
                                                            }, function() {
                                                                return model.variables.local_ListVar.getCurrent(callContext.iterationContext);
                                                            }),
                                                            In_HighlightWords: model.getCachedValue(idService.getId("qWabOauMuUm244E7olAutg.In_HighlightWords"), function() {
                                                                return ((model.variables.in_IsLoadingIn) ? ("") : (model.variables.searchStringVar));
                                                            }, function() {
                                                                return model.variables.in_IsLoadingIn;
                                                            }, function() {
                                                                return model.variables.searchStringVar;
                                                            }),
                                                            _in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLoadingInDataFetchStatus)
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            event_Clicked$Action: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Statistics_ListItem Event_Clicked");
                                                                    controller.event_Clicked$Action(model.variables.local_ListVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
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
                                                            uuid: "8",
                                                            alias: "7"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            actionsMenu: PlaceholderContent.Empty
                                                        },
                                                        _dependencies: []
                                                    }))];
                                                }, callContext, idService, "1")
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.in_IsLoadingIn), asPrimitiveValue(model.variables._in_IsLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus), asPrimitiveValue(model.variables.in_ShowSubtitleIn)]
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.in_IsLoadingIn), asPrimitiveValue(model.variables._in_IsLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus), asPrimitiveValue(model.variables.in_ShowSubtitleIn), asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.local_ListVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_ShowSubtitleIn), asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.local_ListVar), asPrimitiveValue(model.variables.in_IsLoadingIn), asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus), asPrimitiveValue(model.variables._in_IsLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchPromptInDataFetchStatus), asPrimitiveValue(model.variables._in_StatisticsInDataFetchStatus), asPrimitiveValue(model.variables.in_SearchPromptIn), asPrimitiveValue(model.variables.in_StatisticsIn.length)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Locality.StatisticsList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.StatisticsList.mvc$debugger", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_StatisticsList_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._handler_Search_OnChange$Action = function(event_CurrentStringIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_Search_OnChange");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.StatisticsList.Handler_Search_OnChange$vars"))());
            vars.value.event_CurrentStringInLocal = event_CurrentStringIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RnnSSCEvFEeTby+NtH6Ugg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree._TmbKhdvkkSpojNVFx46Vw/ClientActions.RnnSSCEvFEeTby+NtH6Ugg:0uP+p_D7ilq8f8HYkps+EA", "UBTConnect", "Handler_Search_OnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zY3izXZFkU6PS9uXsH5JbA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:onNS2npQOE2woVjBmvb9PQ", callContext.id);
                // SearchString = Event_CurrentString
                model.variables.searchStringVar = vars.value.event_CurrentStringInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5S2g52QmxEqDy4fNU36eQQ", callContext.id);
                // Execute Action: Action_DefineList
                controller._action_DefineList$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fpKuwfMEgUm0SVt7HmVo1w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RnnSSCEvFEeTby+NtH6Ugg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.StatisticsList.Handler_Search_OnChange$vars", [{
            name: "Event_CurrentString",
            attrName: "event_CurrentStringInLocal",
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
            var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VLWUYFZSWUespAUjF9tkkw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree._TmbKhdvkkSpojNVFx46Vw/ClientActions.VLWUYFZSWUespAUjF9tkkw:CsX4y6QqOiDfRDgiLJg+hQ", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wzneTRrLdEqZQXUaomBKLg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UezHLHSnT0OAR2bhcbYCuA", callContext.id);
                // Execute Action: Action_DefineList
                controller._action_DefineList$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x38kPXfjdkqu6wJFosmpHA", callContext.id);
                // Execute Action: JSUtils_Element_Operations_GetElementById
                jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(idService.getId("List"), callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LCnyc3yxiECxmyh9i2ELzw", callContext.id);
                // Execute Action: ReactiveInstance_ForceUpdate
                UBTJavaScriptUtilsController.default.reactiveInstance_ForceUpdate$Action(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V2UyY20GdkWFL_FTy+cBOA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VLWUYFZSWUespAUjF9tkkw", callContext.id);
            }

        };
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:D2IKkM7GBkiVeJBRs571gw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree._TmbKhdvkkSpojNVFx46Vw/ClientActions.D2IKkM7GBkiVeJBRs571gw:kBHtu_MBfvaMnfZIAhNOiQ", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZAxjqZWjO0K23AvwSWUETQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mZdRLQkYQ0+vpgO6mTMQug", callContext.id);
                // Execute Action: Action_DefineList
                controller._action_DefineList$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qRr8nAwqbEOugvnklvvPyQ", callContext.id);
                // Trigger Event: OnParametersChangedEv
                return controller.onParametersChangedEv$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mriu1NtzPUy9TqTh6dSPUw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:D2IKkM7GBkiVeJBRs571gw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:D2IKkM7GBkiVeJBRs571gw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_Search_ClearString$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_Search_ClearString");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cOYrqcsKBkCDEYa6QV0JXQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree._TmbKhdvkkSpojNVFx46Vw/ClientActions.cOYrqcsKBkCDEYa6QV0JXQ:+Yvjhz7nusqRR2TgpeSGwQ", "UBTConnect", "Handler_Search_ClearString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ps1ldr7MiEOjBB906jStfw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5dIPp6IrnUmGkd8l5B6ccg", callContext.id);
                // SearchString = ""
                model.variables.searchStringVar = "";
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7FWKBqtwSkWNHtActTajsQ", callContext.id);
                // Execute Action: Action_DefineList
                controller._action_DefineList$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1kDG3Ec7k0yHmhU8IU0UXg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cOYrqcsKBkCDEYa6QV0JXQ", callContext.id);
            }

        };
        Controller.prototype._action_DefineList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_DefineList");
            callContext = controller.callContext(callContext);
            var listFilterVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listFilterVar = listFilterVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nblh3D3EDEWVAOR+QZ17Jw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree._TmbKhdvkkSpojNVFx46Vw/ClientActions.nblh3D3EDEWVAOR+QZ17Jw:zaIt1xceRMFAw3ELYvbz3Q", "UBTConnect", "Action_DefineList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4SYgMfUKT0eJ5BKkkg5WOg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:huaWKmJUkkmb1NdLJspQrA", callContext.id) && (model.variables.searchStringVar === ""))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0pStWr5vf0OYqplo5YGGKQ", callContext.id);
                    // Local_List = In_Statistics
                    model.variables.local_ListVar = model.variables.in_StatisticsIn;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3JnB09dmIEKfzqpEuyK8RA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OVnUV6eklE2XjMUHYbzVGw", callContext.id);
                    // Execute Action: ListFilter
                    listFilterVar.value = OS.SystemActions.listFilter(model.variables.in_StatisticsIn, function(p) {
                        return (((OS.BuiltinFunctions.index(OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(p.statisticsOptionsAttr.titleAttr, callContext).out_TextOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(model.variables.searchStringVar, callContext).out_TextOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), 0, false, true)) !== (-1)) || ((OS.BuiltinFunctions.index(OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(p.statisticsOptionsAttr.subtitleAttr, callContext).out_TextOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(model.variables.searchStringVar, callContext).out_TextOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), 0, false, true)) !== (-1)));
                    }, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NLdhAjeHqkO6GpK2aQ2Xkw", callContext.id);
                    // Local_List = ListFilter.FilteredList
                    model.variables.local_ListVar = listFilterVar.value.filteredListOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4A2ik5trJU+fWJm_Stt9PA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nblh3D3EDEWVAOR+QZ17Jw", callContext.id);
            }

        };

        Controller.prototype.handler_Search_OnChange$Action = function(event_CurrentStringIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_Search_OnChange$Action, callContext, event_CurrentStringIn);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.handler_Search_ClearString$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_Search_ClearString$Action, callContext);

        };
        Controller.prototype.action_DefineList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_DefineList$Action, callContext);

        };
        Controller.prototype.onParametersChangedEv$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Clicked$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_TmbKhdvkkSpojNVFx46Vw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree._TmbKhdvkkSpojNVFx46Vw:iPIjCIZayaLgIXX3Ofi7mA", "UBTConnect", "StatisticsList", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_TmbKhdvkkSpojNVFx46Vw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/StatisticsList On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/StatisticsList On Parameters Changed");
                return controller.onParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Locality.StatisticsList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "fb3WfO9S7kugHUCliYGG5Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_CurrentStringInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "x38kPXfjdkqu6wJFosmpHA": {
            getter: function(varBag, idService) {
                return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
            }
        },
        "OVnUV6eklE2XjMUHYbzVGw": {
            getter: function(varBag, idService) {
                return varBag.listFilterVar.value;
            }
        },
        "3GVbuMN6s0SrCQ5FiVjRPg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_ListVar;
            }
        },
        "3sRq7xHv60Gg1Eqbqyp2nw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchStringVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "MQ997dylp0uO8s7Y_zz02Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_StatisticsIn;
            }
        },
        "zVw4FTkNNUWXFcm_9k10tg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SearchPromptIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "P2zIFtAjd0eNjYESLy3Uzg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "YiopySYyJk2TALr6HEUYrA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ShowSubtitleIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "_EJBgE0t3UuCpXmLHkPE2A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "RS_lcJzCuEOt9TFulO4I3Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Block_Search"));
                })(varBag.model, idService);
            }
        },
        "GhWb7EveKEuaDxKFYBL_iw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "SftR7b4Sfkij68QjaeW4wg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Block_SearchInput"));
                })(varBag.model, idService);
            }
        },
        "v+qXFxugJUSZPFukzRamkg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "R9gtwNZ5Hk+7eCnCPwInWQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List"));
                })(varBag.model, idService);
            }
        },
        "ciOPK6LnK0yDMtRuEa5w7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ActionsMenu"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});