define("UBTConnect.Directory_Photobook.Photobook.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect.model$SelectedHouseholdRec", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_PhotobookHouseholdList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function(OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnectLibraryModel, NavigationHandlerController, UBTConnect_UtilsController, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Directory_Photobook_Photobook_Carousel_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
    var OS = OutSystems.Internal;

    var GetLocalityHouseholdIdsDataActRec = (function(_super) {
        __extends(GetLocalityHouseholdIdsDataActRec, _super);

        function GetLocalityHouseholdIdsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetLocalityHouseholdIdsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_LocalityHouseholdIds", "out_LocalityHouseholdIdsOut", "Out_LocalityHouseholdIds", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_PhotobookHouseholdList());
                }, true, UBTConnectModel.UI_PhotobookHouseholdList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetLocalityHouseholdIdsDataActRec.fromStructure = function(str) {
            return new GetLocalityHouseholdIdsDataActRec(new GetLocalityHouseholdIdsDataActRec.RecordClass({
                out_LocalityHouseholdIdsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetLocalityHouseholdIdsDataActRec.init();
        return GetLocalityHouseholdIdsDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SelectedHousehold", "selectedHouseholdVar", "SelectedHousehold", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SelectedHouseholdRec());
                }, false, UBTConnectModel.SelectedHouseholdRec),
                this.attr("In_HouseholdId", "in_HouseholdIdIn", "In_HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_HouseholdIdInDataFetchStatus", "_in_HouseholdIdInDataFetchStatus", "_in_HouseholdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_LocalityId", "in_LocalityIdIn", "In_LocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetLocalityHouseholdIds", "getLocalityHouseholdIdsDataAct", "getLocalityHouseholdIdsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetLocalityHouseholdIdsDataActRec());
                }, true, GetLocalityHouseholdIdsDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Photobook_Photobook_Carousel_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_HouseholdId" in inputs) {
                this.variables.in_HouseholdIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HouseholdId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("In_LocalityId" in inputs) {
                this.variables.in_LocalityIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_LocalityId, OS.DataTypes.DataTypes.LongInteger);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook");
});
define("UBTConnect.Directory_Photobook.Photobook.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook.mvc$model", "UBTConnect.Directory_Photobook.Photobook.mvc$controller", "UBTConnect.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect.model$SelectedHouseholdRec", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_PhotobookHouseholdList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, NavigationHandlerController, UBTConnect_UtilsController, React, OSView, UBTConnect_Directory_Photobook_Photobook_mvc_model, UBTConnect_Directory_Photobook_Photobook_mvc_controller, UBTConnectClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "Photobook";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
                inputs: {},
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
                _dependencies: []
            }), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
                inputs: {},
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
                _dependencies: []
            }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: model.variables.isLoadingVar
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
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [$if((!(model.variables.isLoadingVar) && model.variables.getLocalityHouseholdIdsDataAct.isDataFetchedAttr), false, this, function() {
                            return [React.createElement(UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_view, {
                                inputs: {
                                    In_Households: model.variables.getLocalityHouseholdIdsDataAct.out_LocalityHouseholdIdsOut,
                                    _in_HouseholdsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityHouseholdIdsDataAct.dataFetchStatusAttr),
                                    In_SelectedHousehold: model.variables.selectedHouseholdVar
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    closePhotobook$Action: function(event_CurrentHouseholdIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Carousel ClosePhotobook");
                                            controller.handler_ClosePhotobook$Action(event_CurrentHouseholdIn, controller.callContext(eventHandlerContext));
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
                                    uuid: "3",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("GsgozHqDfkinVgsQ_Jqz8g.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.cyanLightest;
                                                return rec;
                                            }();
                                            rec.paddingSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                return rec;
                                            }();
                                            rec.borderOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                rec.sizeAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
                                                    return rec;
                                                }();
                                                return rec;
                                            }();
                                            rec.textOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.cyanDarker;
                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.display;
                                                return rec;
                                            }();
                                            rec.displayOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                                rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
                                                rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
                                                return rec;
                                            }();
                                            rec.heightOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                                rec.mainAttr = "100vh";
                                                return rec;
                                            }();
                                            rec.widthOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                                rec.mainAttr = "100vw";
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
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: PlaceholderContent.Empty
                                },
                                _dependencies: []
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.selectedHouseholdVar), asPrimitiveValue(model.variables.getLocalityHouseholdIdsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityHouseholdIdsDataAct.out_LocalityHouseholdIdsOut), asPrimitiveValue(model.variables.getLocalityHouseholdIdsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Directory_Photobook.Photobook.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook.mvc$debugger", "UBTConnect.Directory_Photobook.controller", "UBTConnect.Directory_Photobook.Photobook.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.model$SelectedHouseholdRec", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_PhotobookHouseholdList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, NavigationHandlerController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_mvc_Debugger, _flow_UBTConnect_Directory_PhotobookController, UBTConnect_Directory_Photobook_Photobook_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getLocalityHouseholdIds$DataActRefresh: 0
            };
            this.dataFetchDependentsGraph = {
                getLocalityHouseholdIds$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getLocalityHouseholdIds$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:c2kZJtp8wUKdYL+uDo4UqQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.xTTvyEEoE0WPjO_+FZUWNg/DataActions.c2kZJtp8wUKdYL+uDo4UqQ:F9iOKuz_TjJYn05zGwRjcQ", "UBTConnect", "GetLocalityHouseholdIds", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook/GetLocalityHouseholdIds");
                return controller.callDataAction("DataActionGetLocalityHouseholdIds", "screenservices/UBTConnect/Directory_Photobook/Photobook/DataActionGetLocalityHouseholdIds", "fabAH5fKxXd59DP9N5b8lw", function(b) {
                    model.variables.getLocalityHouseholdIdsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getLocalityHouseholdIdsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLocalityHouseholdIdsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook/GetLocalityHouseholdIds On After Fetch");
                    controller._onAfterFetch_GetLocalityHouseholdIds$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:c2kZJtp8wUKdYL+uDo4UqQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getLocalityHouseholdIds$DataActRefresh"];
        // Client Actions
        Controller.prototype._handler_ClosePhotobook$Action = function(targetHouseholdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ClosePhotobook");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook.Handler_ClosePhotobook$vars"))());
            vars.value.targetHouseholdInLocal = targetHouseholdIn.clone();
            var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dae42SvkY0uelDl5dcjRTg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.xTTvyEEoE0WPjO_+FZUWNg/ClientActions.dae42SvkY0uelDl5dcjRTg:_B+Q_piI1OUfz_ShkK6xcQ", "UBTConnect", "Handler_ClosePhotobook", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8kyso8aBZUaEaOZCIFoUGg", callContext.id);
                // Has Target?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VXVUfY6L1kq1t1GAUk4nWg", callContext.id) && !(vars.value.targetHouseholdInLocal.householdIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:djtVY_TgQEeVlQMBkSNz5w", callContext.id);
                    // Execute Action: ReplaceOnUpcomingNavigation
                    NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l9G+aM00KkmYl_4aNSf5Tg", callContext.id);
                    // Execute Action: GetHasCarouselEnabled
                    getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ApM+z1sHd02XCzZH8qBFRA", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mT2d11ibdkusIMwTdRC1bQ", callContext.id);
                        // HouseholdIdList.CarouselHouseholdItem = GetLocalityHouseholdIds.Out_LocalityHouseholdIds
                        vars.value.householdIdListVar.carouselHouseholdItemAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalityHouseholdIdsDataAct.out_LocalityHouseholdIdsOut, new UBTConnectModel.SwipeActionLongIntegerRecordList(), function(source, target) {
                            target.householdAttr = source.householdIdAttr;
                            return target;
                        });
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7kmEgoY9W0KCaZCt4RWp9w", callContext.id);
                        // Execute Action: SetPreloadObject
                        NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdIdListVar), callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i+BTQt6AVEeSnB+3Qh5uJQ", callContext.id);
                        // Destination: /UBTConnect/HouseholdCarousel
                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
                            In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.targetHouseholdInLocal.householdIdAttr, OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ss1ICfjCq0+z7mL7Qi8jrw", callContext.id);
                        // Destination: /UBTConnect/HouseholdDetails
                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
                            HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.targetHouseholdInLocal.householdIdAttr, OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qmPzQen+Bkig5BcRd7Yp2A", callContext.id);
                    // Destination: (PreviousScreen)
                    return OS.Navigation.navigateBack(null, callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dae42SvkY0uelDl5dcjRTg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook.Handler_ClosePhotobook$vars", [{
            name: "TargetHousehold",
            attrName: "targetHouseholdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect_Household_CSModel.UI_PhotobookHouseholdRec();
            },
            complexType: Connect_Household_CSModel.UI_PhotobookHouseholdRec
        }, {
            name: "HouseholdIdList",
            attrName: "householdIdListVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
            },
            complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
        }]);
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cNSh7CIwKUCddAD__1ftIQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.xTTvyEEoE0WPjO_+FZUWNg/ClientActions.cNSh7CIwKUCddAD__1ftIQ:Jph5MHEhuGkKtoXXsB7JDQ", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y8TjOA9WUkOsoFr8SF5d5w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZyetVnJ+Tk+sJCxyUdI3Ew", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Photobook_Photobook_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnInitialize", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook.OnInitialize$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Is View Restored From Cache?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G3nbL9x2ZUKBo1BRu_h3Ug", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sVEe2wG8YkCf6uE6D3bnqg", callContext.id);
                } else {
                    // Set Selected Id
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BUNmZCWP1Emu7YHu0MWDrw", callContext.id);
                    // SelectedHousehold.Id = In_HouseholdId
                    model.variables.selectedHouseholdVar.idAttr = model.variables.in_HouseholdIdIn;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dww6uqfjmEGbH+lTFgW7OQ", callContext.id);
                    // IsLoading = True
                    model.variables.isLoadingVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9zhCSnE5J0Gnc1+o7p3M5A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cNSh7CIwKUCddAD__1ftIQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook.OnInitialize$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onAfterFetch_GetLocalityHouseholdIds$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetLocalityHouseholdIds");
            callContext = controller.callContext(callContext);
            var listIndexOf_GetSelectedHouseholdVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listIndexOf_GetSelectedHouseholdVar = listIndexOf_GetSelectedHouseholdVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mX4c84Zaake505BCLuCJqw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.xTTvyEEoE0WPjO_+FZUWNg/ClientActions.mX4c84Zaake505BCLuCJqw:cSfa0zwvuoq_ourrNCVB8g", "UBTConnect", "OnAfterFetch_GetLocalityHouseholdIds", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a6MWsKvoekSKALb8va5zIw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1VSMTGZGuEGxyn2Z194WBA", callContext.id);
                // Execute Action: ListIndexOf_GetSelectedHousehold
                listIndexOf_GetSelectedHouseholdVar.value = OS.SystemActions.listIndexOf(model.variables.getLocalityHouseholdIdsDataAct.out_LocalityHouseholdIdsOut, function(p) {
                    return p.householdIdAttr.equals(model.variables.in_HouseholdIdIn);
                }, callContext);

                // Set Selected Position
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a1KKz0o3fU6mRl1nx0UMVw", callContext.id);
                // SelectedHousehold.Position = If
                model.variables.selectedHouseholdVar.positionAttr = ((((listIndexOf_GetSelectedHouseholdVar.value.positionOut) !== (-1))) ? (listIndexOf_GetSelectedHouseholdVar.value.positionOut) : (0));
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fLtqBDcMNU6bf04ZbKPC_A", callContext.id);
                // IsLoading = False
                model.variables.isLoadingVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oKOHe4vD2kqm4Okg58mSug", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mX4c84Zaake505BCLuCJqw", callContext.id);
            }

        };

        Controller.prototype.handler_ClosePhotobook$Action = function(targetHouseholdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ClosePhotobook$Action, callContext, targetHouseholdIn);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetLocalityHouseholdIds$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalityHouseholdIds$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xTTvyEEoE0WPjO_+FZUWNg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.xTTvyEEoE0WPjO_+FZUWNg:MdTWUoCFSuiDwBV6HIyfyw", "UBTConnect", "Photobook", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xTTvyEEoE0WPjO_+FZUWNg", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Directory_PhotobookController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {
            OS.RolesInfo.checkRegistered();
        };
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Photobook.Photobook.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.Directory_Photobook.Photobook.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "6ICrxxT7O0ejYQ896SSM+A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdIdListVar;
            }
        },
        "TopuRem2vECrWxZ2CYuKLA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.targetHouseholdInLocal;
            }
        },
        "l9G+aM00KkmYl_4aNSf5Tg": {
            getter: function(varBag, idService) {
                return varBag.getHasCarouselEnabledVar.value;
            }
        },
        "ZyetVnJ+Tk+sJCxyUdI3Ew": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "1VSMTGZGuEGxyn2Z194WBA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOf_GetSelectedHouseholdVar.value;
            }
        },
        "qYXckTFbq0WcGQO1GHU+RQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "+KqnDo+OuUijQmhuMuIIww": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedHouseholdVar;
            }
        },
        "w+GEOSY0TE2NFjOlQxxGaA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HouseholdIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "h7BDJttIDk6idZg7jRRydw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_LocalityIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "c2kZJtp8wUKdYL+uDo4UqQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getLocalityHouseholdIdsDataAct;
            }
        },
        "rkPVOnKBukemFZv5cNfgCg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "Hqllq+itqk2F3kZZZjY2bA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_FinishedLoading"));
                })(varBag.model, idService);
            }
        },
        "q56M_FHGF0e7sLjT+rQV9w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});