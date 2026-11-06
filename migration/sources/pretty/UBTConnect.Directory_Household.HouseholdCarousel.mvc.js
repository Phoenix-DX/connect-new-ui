define("UBTConnect.Directory_Household.HouseholdCarousel.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "NavigationHandler.controller", "UBTConnect.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.model$EntitiesCarousel_ItemList", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.controller$Directory_Updates_CarouselSwipeAction", "UBTConnect.model$EntitiesCarousel_SwippedItemRec"], function(OutSystems, UBTConnectModel, NavigationHandlerController, UBTConnectController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("HouseholdHeader", "householdHeaderVar", "HouseholdHeader", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("HouseholdPreload", "householdPreloadVar", "HouseholdPreload", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CarouselPreloadedHouseholdsRec());
                }, false, UBTConnectModel.CarouselPreloadedHouseholdsRec),
                this.attr("StartingPosition", "startingPositionVar", "StartingPosition", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("SwippedItems", "swippedItemsVar", "SwippedItems", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.EntitiesCarousel_SwippedItemList());
                }, false, UBTConnectModel.EntitiesCarousel_SwippedItemList),
                this.attr("EntitiesCarousel_Items", "entitiesCarousel_ItemsVar", "EntitiesCarousel_Items", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.EntitiesCarousel_ItemList());
                }, false, UBTConnectModel.EntitiesCarousel_ItemList),
                this.attr("In_StartingHouseholdId", "in_StartingHouseholdIdIn", "In_StartingHouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_StartingHouseholdIdInDataFetchStatus", "_in_StartingHouseholdIdInDataFetchStatus", "_in_StartingHouseholdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Caroussel_EntitiesCarousel_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_StartingHouseholdId" in inputs) {
                this.variables.in_StartingHouseholdIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_StartingHouseholdId, OS.DataTypes.DataTypes.LongInteger);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Household.HouseholdCarousel");
});
define("UBTConnect.Directory_Household.HouseholdCarousel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household.HouseholdCarousel.mvc$model", "UBTConnect.Directory_Household.HouseholdCarousel.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.model$EntitiesCarousel_ItemList", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.controller$Directory_Updates_CarouselSwipeAction", "UBTConnect.model$EntitiesCarousel_SwippedItemRec"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, React, OSView, UBTConnect_Directory_Household_HouseholdCarousel_mvc_model, UBTConnect_Directory_Household_HouseholdCarousel_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_Household.HouseholdCarousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Household_HouseholdCarousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Household_HouseholdCarousel_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "HouseholdCarousel";
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
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: (model.variables.householdHeaderVar === "")
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
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [$if(((model.variables.householdHeaderVar) !== ("")), false, this, function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            value: model.variables.householdHeaderVar,
                                            _idProps: {
                                                service: idService,
                                                uuid: "2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            value: "Unavailable, Unavailable",
                                            _idProps: {
                                                service: idService,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.householdHeaderVar)]
                        })];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, {
                            inputs: {
                                In_StartingPosition: model.variables.startingPositionVar,
                                In_EntitiesCarousel_Items: model.variables.entitiesCarousel_ItemsVar,
                                In_ConnectEntityTypeId: UBTConnectModel.staticEntities.connect_Entity.household
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_SetHeader$Action: function(event_HeaderIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Caroussel/EntitiesCarousel Event_SetHeader");
                                        controller.handler_SetHeader$Action(event_HeaderIn, controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                event_Moved$Action: function(event_IndexIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Caroussel/EntitiesCarousel Event_Moved");
                                            return controller.handler_EventMoved$Action(event_IndexIn, controller.callContext(eventHandlerContext));
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
                                uuid: "4",
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
                                    uuid: "5",
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
                                uuid: "6",
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
                                uuid: "7",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.swippedItemsVar.isEmpty), asPrimitiveValue(model.variables.entitiesCarousel_ItemsVar), asPrimitiveValue(model.variables.startingPositionVar), asPrimitiveValue(model.variables.householdHeaderVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Directory_Household.HouseholdCarousel.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household.HouseholdCarousel.mvc$debugger", "UBTConnect.Directory_Household.controller", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.model$EntitiesCarousel_ItemList", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.controller$Directory_Updates_CarouselSwipeAction", "UBTConnect.model$EntitiesCarousel_SwippedItemRec"], function(OutSystems, UBTConnectModel, UBTConnectController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_HouseholdCarousel_mvc_Debugger, _flow_UBTConnect_Directory_HouseholdController) {
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
        Controller.prototype._handler_BackNavigation$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_BackNavigation");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdCarousel.Handler_BackNavigation$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_sdWQ_9OC0aja+5ThbJ6Aw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.EDkAId6pJU27peMbDzLEfw/ClientActions._sdWQ_9OC0aja+5ThbJ6Aw:gtwUMwPmf_5jZ7QZOJTRCA", "UBTConnect", "Handler_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zZFmmVqi7EuQ0hVmqR+Dbw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5sr93z2d2k+qghfi4DiEQA", callContext.id);
                // Execute Action: SetPreloadObject
                NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(model.variables.swippedItemsVar), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jSoSKegBckKgcUBQE2HRrg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_sdWQ_9OC0aja+5ThbJ6Aw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdCarousel.Handler_BackNavigation$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._handler_SetHeader$Action = function(event_HeaderIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SetHeader");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdCarousel.Handler_SetHeader$vars"))());
            vars.value.event_HeaderInLocal = event_HeaderIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tolJcXktFEeQn_Wn8_w7sg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.EDkAId6pJU27peMbDzLEfw/ClientActions.tolJcXktFEeQn_Wn8_w7sg:eOHCDNxkmQHl542q0PDXdg", "UBTConnect", "Handler_SetHeader", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PiuHbsDwdkyTm_Rzffwfqw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+QxYaGtMs0SFP8C0i+JiIw", callContext.id);
                // HouseholdHeader = Event_Header
                model.variables.householdHeaderVar = vars.value.event_HeaderInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nlW+d1NHG0ahtQOuUYun5Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tolJcXktFEeQn_Wn8_w7sg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdCarousel.Handler_SetHeader$vars", [{
            name: "Event_Header",
            attrName: "event_HeaderInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
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
            var assignFromObjectVar = new OS.DataTypes.VariableHolder();
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.assignFromObjectVar = assignFromObjectVar;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.getPreloadObjectVar = getPreloadObjectVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qIqEt4wRHk6n92NL65QvJg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.EDkAId6pJU27peMbDzLEfw/ClientActions.qIqEt4wRHk6n92NL65QvJg:_v_PxRzzenZdGKBwUaAzkg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M2YlGpZ6J0CoYLQ_0X83rw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K3uSQfJI50yM8Wo0fURaxA", callContext.id) && model.variables.householdPreloadVar.carouselHouseholdItemAttr.isEmpty)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AptM+pHickW_jZZar6PQCQ", callContext.id);
                    // Execute Action: GetPreloadObject
                    getPreloadObjectVar.value = NavigationHandlerController.default.getPreloadObject$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bRAqzKibpEW1nSA8H1G_8Q", callContext.id);
                    // Execute Action: AssignFromObject
                    assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(model.variables.householdPreloadVar), getPreloadObjectVar.value.preloadOut, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QSFFvGdUz0W16PKzKzQ9hQ", callContext.id);
                    // EntitiesCarousel_Items = HouseholdPreload.CarouselHouseholdItem
                    model.variables.entitiesCarousel_ItemsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.householdPreloadVar.carouselHouseholdItemAttr, new UBTConnectModel.EntitiesCarousel_ItemList(), function(source, target) {
                        target.entityIdAttr = OS.BuiltinFunctions.longIntegerToText(source.householdAttr);
                        return target;
                    });
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j+Lx7LF2wkmlE2nlbebhig", callContext.id);
                    // Execute Action: ListIndexOf
                    listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.householdPreloadVar.carouselHouseholdItemAttr, function(p) {
                        return p.householdAttr.equals(model.variables.in_StartingHouseholdIdIn);
                    }, callContext);

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UcTOD+5esk2Bu9_PlcmPFg", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1a4ZpliPyUebyRkOoZ6viA", callContext.id);
                        // StartingPosition = ListIndexOf.Position
                        model.variables.startingPositionVar = listIndexOfVar.value.positionOut;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cIw0cTDzKEKWnp2xwJ2PnA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cIw0cTDzKEKWnp2xwJ2PnA", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NniK5AA+ek+Cn5SLzzHaTA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qIqEt4wRHk6n92NL65QvJg", callContext.id);
            }

        };
        Controller.prototype._handler_EventMoved$Action = function(in_ItemIndexIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_EventMoved");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdCarousel.Handler_EventMoved$vars"))());
            vars.value.in_ItemIndexInLocal = in_ItemIndexIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var directory_Updates_CarouselSwipeActionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.directory_Updates_CarouselSwipeActionVar = directory_Updates_CarouselSwipeActionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:g2EY4uVjjkGKi8KdBugF_A:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.EDkAId6pJU27peMbDzLEfw/ClientActions.g2EY4uVjjkGKi8KdBugF_A:tXOX4XgL083Ar8eV4zSvLg", "UBTConnect", "Handler_EventMoved", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ztwpiW40fkSqXgrSSfEM6g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Has swipe action?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6u39l+4glUmnGzN5d5O6OA", callContext.id) && ((model.variables.householdPreloadVar.carouselHouseholdItemAttr.length > vars.value.in_ItemIndexInLocal) && ((model.variables.householdPreloadVar.carouselHouseholdItemAttr.getItem(vars.value.in_ItemIndexInLocal).swipeActionAttr.actionIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L_w0jXM6AE2UKdLTewZO6w", callContext.id) && (model.variables.householdPreloadVar.carouselHouseholdItemAttr.getItem(vars.value.in_ItemIndexInLocal).swipeActionAttr.actionIdAttr === UBTConnectModel.staticEntities.type_CarouselItemSwipeAction.updatesCarousel_SetIsRead))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TMuZ_93U9UyAB00f9976bg", callContext.id);
                                // Execute Action: Directory_Updates_CarouselSwipeAction
                                model.flush();
                                return UBTConnectController.default.directory_Updates_CarouselSwipeAction$Action(model.variables.householdPreloadVar.carouselHouseholdItemAttr.getItem(vars.value.in_ItemIndexInLocal).swipeActionAttr.parametersAttr, callContext).then(function(value) {
                                    directory_Updates_CarouselSwipeActionVar.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hTly8PSS5UuAJH5WvB+QBA", callContext.id);
                                    // SwippedItemId = Directory_Updates_CarouselSwipeAction.Out_ItemId
                                    vars.value.swippedItemIdVar = directory_Updates_CarouselSwipeActionVar.value.out_ItemIdOut;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0gBwIDd3LUK7CrgVVIMveg", callContext.id);
                                    // HouseholdPreload.CarouselHouseholdItem[In_ItemIndex].SwipeAction.ActionId = NullTextIdentifier
                                    model.variables.householdPreloadVar.carouselHouseholdItemAttr.getItem(vars.value.in_ItemIndexInLocal).swipeActionAttr.actionIdAttr = OS.BuiltinFunctions.nullTextIdentifier();
                                });
                            }

                        }).then(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AnKE6mZLCUeKPiBWObQmuQ", callContext.id) && ((vars.value.swippedItemIdVar) !== ("")))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BDb6bawyeketQPAUpHlDcA", callContext.id);
                                // Execute Action: ListIndexOf
                                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.swippedItemsVar, function(p) {
                                    return (p.entityItemIdAttr === vars.value.swippedItemIdVar);
                                }, callContext);

                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pVqcsuNJ20+XNX+NacxsmQ", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M2TI4OUut0SwSAPmEijyRA", callContext.id);
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dYCxNlArfEOkYT59O9vXKg", callContext.id);
                                    // Execute Action: ListAppend
                                    OS.SystemActions.listAppend(model.variables.swippedItemsVar, function() {
                                        var rec = new UBTConnectModel.EntitiesCarousel_SwippedItemRec();
                                        rec.entityItemIdAttr = vars.value.swippedItemIdVar;
                                        rec.listPositionAttr = vars.value.in_ItemIndexInLocal;
                                        return rec;
                                    }(), callContext);
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M2TI4OUut0SwSAPmEijyRA", callContext.id);
                                }

                            } else {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C18hMjIsB0GJyujXncvGNQ", callContext.id);
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+xS_GRoeME6kCCk7xfPfOA", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:g2EY4uVjjkGKi8KdBugF_A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:g2EY4uVjjkGKi8KdBugF_A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdCarousel.Handler_EventMoved$vars", [{
            name: "In_ItemIndex",
            attrName: "in_ItemIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "SwippedItemId",
            attrName: "swippedItemIdVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.handler_BackNavigation$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BackNavigation$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.handler_SetHeader$Action = function(event_HeaderIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SetHeader$Action, callContext, event_HeaderIn);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.handler_EventMoved$Action = function(in_ItemIndexIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_EventMoved$Action, callContext, in_ItemIndexIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw:t9nDzAZAuYZJViBgLBCv_w", "UBTConnect", "Directory_Household", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:EDkAId6pJU27peMbDzLEfw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.EDkAId6pJU27peMbDzLEfw:SBe6zVfwZD4iRHZHoz6yfg", "UBTConnect", "HouseholdCarousel", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:EDkAId6pJU27peMbDzLEfw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdCarousel On Initialize");
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
            return _flow_UBTConnect_Directory_HouseholdController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Directory_Household.HouseholdCarousel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "lSO1rj44akqL6ObeZEq1MA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "RhLiWKGQNUK668FvZL96Fw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_HeaderInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "bRAqzKibpEW1nSA8H1G_8Q": {
            getter: function(varBag, idService) {
                return varBag.assignFromObjectVar.value;
            }
        },
        "j+Lx7LF2wkmlE2nlbebhig": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "AptM+pHickW_jZZar6PQCQ": {
            getter: function(varBag, idService) {
                return varBag.getPreloadObjectVar.value;
            }
        },
        "qNkW+zPHwEe9jKwZJi3Qgw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.swippedItemIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "fIyIlPFWQ0m1idbGq5IRTw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ItemIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "BDb6bawyeketQPAUpHlDcA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "TMuZ_93U9UyAB00f9976bg": {
            getter: function(varBag, idService) {
                return varBag.directory_Updates_CarouselSwipeActionVar.value;
            }
        },
        "PlsweP9beE2b5lIFzmyY1Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdHeaderVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "46WhQIoq10GPIVs4kKfFZQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdPreloadVar;
            }
        },
        "XlmR7Ej6E025WNc+g2FWag": {
            getter: function(varBag, idService) {
                return varBag.model.variables.startingPositionVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "i9XQ12qqwUKXTrE_lyq34w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.swippedItemsVar;
            }
        },
        "fUMoKaL1x0CvMAjKSz3mwQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.entitiesCarousel_ItemsVar;
            }
        },
        "r02R23AilEa4VF268_9v1A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_StartingHouseholdIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "0xHca3WdAUaIRPiXIChTPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DetailPage"));
                })(varBag.model, idService);
            }
        },
        "rAB+G_jcUUGBo2ArGE0k+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "V9OOxuSOSUOO_MSqsugg3g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "VCNOOVI+Fkis5saaiOYJIA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "XEy2mwNbRkq5UeZov_VnVA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "4BaeEeQb3UGedzSBnyr3NA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "eRkkpf5vr0mIVbxMjXvb7Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "ZVNpkhVMdkujSHceo1VLXQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});