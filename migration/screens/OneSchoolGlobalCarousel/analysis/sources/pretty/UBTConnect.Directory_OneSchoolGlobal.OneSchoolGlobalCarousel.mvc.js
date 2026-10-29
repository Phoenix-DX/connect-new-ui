define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.model$PreloadedCarouselRec", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.model$EntitiesCarousel_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_ItemRec", "NavigationHandler.controller$SetPreloadObject"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, NavigationHandlerController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("PreloadedCarousel", "preloadedCarouselVar", "PreloadedCarousel", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.PreloadedCarouselRec());
                }, false, UBTConnectModel.PreloadedCarouselRec),
                this.attr("StartingPosition", "startingPositionVar", "StartingPosition", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("SwippedItems", "swippedItemsVar", "SwippedItems", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.EntitiesCarousel_SwippedItemList());
                }, false, UBTConnectModel.EntitiesCarousel_SwippedItemList),
                this.attr("EntitiesCarousel_Items", "entitiesCarousel_ItemsVar", "EntitiesCarousel_Items", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.EntitiesCarousel_ItemList());
                }, false, UBTConnectModel.EntitiesCarousel_ItemList),
                this.attr("In_StartingObjectId", "in_StartingObjectIdIn", "In_StartingObjectId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_StartingObjectIdInDataFetchStatus", "_in_StartingObjectIdInDataFetchStatus", "_in_StartingObjectIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Caroussel_EntitiesCarousel_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_StartingObjectId" in inputs) {
                this.variables.in_StartingObjectIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_StartingObjectId, OS.DataTypes.DataTypes.LongInteger);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_OneSchoolGlobal.OneSchoolGlobalCarousel");
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc$model", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.model$PreloadedCarouselRec", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.model$EntitiesCarousel_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_ItemRec", "NavigationHandler.controller$SetPreloadObject"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, React, OSView, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalCarousel_mvc_model, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalCarousel_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_OneSchoolGlobal.OneSchoolGlobalCarousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalCarousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalCarousel_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "OneSchoolGlobalCarousel";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
                inputs: {
                    In_IsPrimaryColor: false
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
                    name: "DetailPage",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_Text: "OneSchool Global",
                                In_TextOptions: model.getCachedValue(idService.getId("aQNhAuSDoEqdtZAxbTImzA.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
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
                            _dependencies: []
                        })];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, {
                            inputs: {
                                In_StartingPosition: model.variables.startingPositionVar,
                                In_EntitiesCarousel_Items: model.variables.entitiesCarousel_ItemsVar,
                                In_ConnectEntityTypeId: UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal
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
                            _dependencies: []
                        }), $if(model.variables.swippedItemsVar.isEmpty, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                                inputs: {},
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    backNavigation$Action: function(backNavigationEventIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
                                            controller.handler_BackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
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
                                uuid: "4",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
                                uuid: "5",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.swippedItemsVar.isEmpty), asPrimitiveValue(model.variables.entitiesCarousel_ItemsVar), asPrimitiveValue(model.variables.startingPositionVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc$debugger", "UBTConnect.Directory_OneSchoolGlobal.controller", "UBTConnect.model$PreloadedCarouselRec", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.model$EntitiesCarousel_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_ItemRec", "NavigationHandler.controller$SetPreloadObject"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalCarousel_mvc_Debugger, _flow_UBTConnect_Directory_OneSchoolGlobalController) {
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
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var assignFromObjectVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getPreloadObjectVar = getPreloadObjectVar;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.assignFromObjectVar = assignFromObjectVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:EeiJzBYBVEmmJI8Snp_oNg:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.e2P6YmyLNEeZLzcFPJql_g/ClientActions.EeiJzBYBVEmmJI8Snp_oNg:JA+qXGERtM4BBp3vllDYzQ", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_MUeBsNFpkmXsTizWlr0LA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l7bv8V0_a0Owu62bJG1T0g", callContext.id) && model.variables.preloadedCarouselVar.carouselItemIdsAttr.isEmpty)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5ozZyVrXfk6_rI_U1r9bzQ", callContext.id);
                    // Execute Action: GetPreloadObject
                    getPreloadObjectVar.value = NavigationHandlerController.default.getPreloadObject$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v3WW4g+CkUuGeVAnea6wEw", callContext.id);
                    // Execute Action: AssignFromObject
                    assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(model.variables.preloadedCarouselVar), getPreloadObjectVar.value.preloadOut, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C3hP33PXzkuxHNPLFnaWGQ", callContext.id);
                    // Execute Action: ListIndexOf
                    listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.preloadedCarouselVar.carouselItemIdsAttr, function(p) {
                        return p.equals(model.variables.in_StartingObjectIdIn);
                    }, callContext);

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p+09cvf62UGQDxc6qtD6IA", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iOv5P2pWWEWELQqjGzt3Lg", callContext.id);
                        // StartingPosition = ListIndexOf.Position
                        model.variables.startingPositionVar = listIndexOfVar.value.positionOut;
                    }

                    // Foreach PreloadedCarousel.CarouselItemIds
                    callContext.iterationContext.registerIterationStart(model.variables.preloadedCarouselVar.carouselItemIdsAttr);
                    try {
                        var carouselItemIdsIterator = callContext.iterationContext.getIterator(model.variables.preloadedCarouselVar.carouselItemIdsAttr);
                        var carouselItemIdsIndex = 0;
                        while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9sBozbTxdEyeUloejnXG+Q", callContext.id) && (carouselItemIdsIndex < model.variables.preloadedCarouselVar.carouselItemIdsAttr.length))) {
                            carouselItemIdsIterator.currentRowNumber = carouselItemIdsIndex;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r6JKm_S69UerTq8EoVt2ew", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(model.variables.entitiesCarousel_ItemsVar, function() {
                                var rec = new UBTConnectModel.EntitiesCarousel_ItemRec();
                                rec.entityIdAttr = OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.textToLongInteger(OS.BuiltinFunctions.longIntegerToText(model.variables.preloadedCarouselVar.carouselItemIdsAttr.getItem(carouselItemIdsIndex.valueOf()))));
                                return rec;
                            }(), callContext);
                            carouselItemIdsIndex++;
                        }

                    } finally {
                        callContext.iterationContext.registerIterationEnd(model.variables.preloadedCarouselVar.carouselItemIdsAttr);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I5HGJc3cskSrLgiDopfSFQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y8hh97OhLUCMV7GjiUE7YQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:EeiJzBYBVEmmJI8Snp_oNg", callContext.id);
            }

        };
        Controller.prototype._handler_BackNavigation$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_BackNavigation");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.Handler_BackNavigation$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:myhm+EUEI0moRYbD1zhH2g:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.e2P6YmyLNEeZLzcFPJql_g/ClientActions.myhm+EUEI0moRYbD1zhH2g:vpQjeo+O5cTM8gmWj4h+bg", "UBTConnect", "Handler_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qldu0eMAyEOHYjHnS3rG8w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ERVpjBZe50yQlqN5HJR7ag", callContext.id);
                // Execute Action: SetPreloadObject
                NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(model.variables.swippedItemsVar), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1sZ0K_ROXUmM5oXRNqJ82w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:myhm+EUEI0moRYbD1zhH2g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.Handler_BackNavigation$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.handler_BackNavigation$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BackNavigation$Action, callContext, backNavigationEventIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ:61tRPbddoF5C2aoWKab8HA", "UBTConnect", "Directory_OneSchoolGlobal", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:e2P6YmyLNEeZLzcFPJql_g:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.e2P6YmyLNEeZLzcFPJql_g:4MThj66ulAMFtWrHAQJ4+A", "UBTConnect", "OneSchoolGlobalCarousel", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:e2P6YmyLNEeZLzcFPJql_g", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalCarousel On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Directory_OneSchoolGlobalController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalCarousel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "5ozZyVrXfk6_rI_U1r9bzQ": {
            getter: function(varBag, idService) {
                return varBag.getPreloadObjectVar.value;
            }
        },
        "C3hP33PXzkuxHNPLFnaWGQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "v3WW4g+CkUuGeVAnea6wEw": {
            getter: function(varBag, idService) {
                return varBag.assignFromObjectVar.value;
            }
        },
        "rnf08Cj15kSlDrZ8FcC6SA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "ava_BAlOCE6EL3h7lJoEMA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.preloadedCarouselVar;
            }
        },
        "n0z_ZZpwyUuUfqBEPGjxSg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.startingPositionVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "Nq0Lv8FGW0WYiqIGSIdC5A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.swippedItemsVar;
            }
        },
        "dcskGMNwY0uq5zswckEEKw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.entitiesCarousel_ItemsVar;
            }
        },
        "vpcs2e8wkkqxvoJWOAq9Ig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_StartingObjectIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "wqFqkqu1Y0+FDmxtfCZKVA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DetailPage"));
                })(varBag.model, idService);
            }
        },
        "nyyBr7dFfUypsnMHB+hO+Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "7IvvTm0fhUe6XleR9SnHfA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "ROFxPGDMa0WKFpATK_lR3Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "ZnIiCqR5o0Cnfu8yPmaw3w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "BO+1nu+RH0mIuBdiN9J7TA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "azFTp+dDXkim5w9hiz0PRg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});