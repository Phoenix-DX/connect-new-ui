define("UBTConnect.Directory_Locality.BrowseCountries.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnect.controller", "UBTConnect_Utils.controller", "Connect_Geography_CS.model", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.Directory_Locality.StatisticsList.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetLookupConcepts", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect_Geography_CS.model$UI_CountryStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_CountryStatisticsList", "UBTConnect.controller$GetSkeletonList_UI_CountryStatistics", "UBTConnectLibrary.controller$GetFlagURLByCountryCode"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectController, UBTConnect_UtilsController, Connect_Geography_CSModel, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_Directory_Locality_StatisticsList_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;

    var GetCountriesStatisticsDataActRec = (function(_super) {
        __extends(GetCountriesStatisticsDataActRec, _super);

        function GetCountriesStatisticsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetCountriesStatisticsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_CountriesStatistics", "out_CountriesStatisticsOut", "Out_CountriesStatistics", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_CountryStatisticsList());
                }, true, UBTConnectModel.UI_CountryStatisticsList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetCountriesStatisticsDataActRec.fromStructure = function(str) {
            return new GetCountriesStatisticsDataActRec(new GetCountriesStatisticsDataActRec.RecordClass({
                out_CountriesStatisticsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetCountriesStatisticsDataActRec.init();
        return GetCountriesStatisticsDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("GetCountriesStatistics", "getCountriesStatisticsDataAct", "getCountriesStatisticsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetCountriesStatisticsDataActRec());
                }, true, GetCountriesStatisticsDataActRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.fromStructure = function(str) {
            return new VariablesRecord(new VariablesRecord.RecordClass({
                getCountriesStatisticsDataAct: OS.DataTypes.ImmutableBase.getData(str)
            }));
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
                    Model._hasValidationWidgetsValue = (((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_Directory_Locality_StatisticsList_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.BrowseCountries");
});
define("UBTConnect.Directory_Locality.BrowseCountries.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnect_Utils.controller", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.BrowseCountries.mvc$model", "UBTConnect.Directory_Locality.BrowseCountries.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Locality.StatisticsList.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetLookupConcepts", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect_Geography_CS.model$UI_CountryStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_CountryStatisticsList", "UBTConnect.controller$GetSkeletonList_UI_CountryStatistics", "UBTConnectLibrary.controller$GetFlagURLByCountryCode"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnect_UtilsController, Connect_Geography_CSModel, React, OSView, UBTConnect_Directory_Locality_BrowseCountries_mvc_model, UBTConnect_Directory_Locality_BrowseCountries_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_Directory_Locality_StatisticsList_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_Locality.BrowseCountries";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_Directory_Locality_StatisticsList_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_BrowseCountries_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_BrowseCountries_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "BrowseCountries";
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
                placeholders: {
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return ["Browse by country"];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Directory_Locality_StatisticsList_mvc_view, {
                            inputs: {
                                In_Statistics: model.getCachedValue(idService.getId("TgA47KDAH0q8eYBby2Q9qQ.In_Statistics"), function() {
                                    return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut, new UBTConnectModel.TextStatisticsOptionsRecordList(), function(source, target) {
                                        target.idAttr = source.countryCodeAttr;
                                        target.statisticsOptionsAttr = source.statisticsAttr;
                                        return target;
                                    });
                                }, function() {
                                    return model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut;
                                }),
                                _in_StatisticsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr),
                                In_IsLoading: !(model.variables.getCountriesStatisticsDataAct.isDataFetchedAttr),
                                In_SearchPrompt: model.getCachedValue(idService.getId("TgA47KDAH0q8eYBby2Q9qQ.In_SearchPrompt"), function() {
                                    return ("Search " + OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnectLibraryController.default.getLookupConcepts$Action(true, callContext).out_LookupOut;
                                    }, OS.DataTypes.DataTypes.Record, callContext.id).countryAttr.singularAttr);
                                })
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_Clicked$Action: function(event_IdIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/StatisticsList Event_Clicked");
                                            return controller.handler_StatisticsList_Clicked$Action(event_IdIn, controller.callContext(eventHandlerContext));
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
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
                            inputs: {
                                ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.directory
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
                                uuid: "3",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Directory_Locality.BrowseCountries.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnect_Utils.controller", "Connect_Geography_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.BrowseCountries.mvc$debugger", "UBTConnect.Directory_Locality.controller", "UBTConnect.Directory_Locality.BrowseCountries.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetLookupConcepts", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "Connect_Geography_CS.model$UI_CountryStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_CountryStatisticsList", "UBTConnect.controller$GetSkeletonList_UI_CountryStatistics", "UBTConnectLibrary.controller$GetFlagURLByCountryCode"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnect_UtilsController, Connect_Geography_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_BrowseCountries_mvc_Debugger, _flow_UBTConnect_Directory_LocalityController, UBTConnect_Directory_Locality_BrowseCountries_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getCountriesStatistics$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getCountriesStatistics$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getCountriesStatistics$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rQ6hN84Fa0+lg3bYqw3VxA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.H8Q2XELJKk+rl0B+3CSkow/DataActions.rQ6hN84Fa0+lg3bYqw3VxA:Ph2DEa87b2LW+h56QHaF8g", "UBTConnect", "GetCountriesStatistics", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/BrowseCountries/GetCountriesStatistics");
                return controller.callDataAction("DataActionGetCountriesStatistics", "screenservices/UBTConnect/Directory_Locality/BrowseCountries/DataActionGetCountriesStatistics", "0t4vWiySkT6WQWfCWdpmhQ", function(b) {
                    model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getCountriesStatisticsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCountriesStatisticsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/BrowseCountries/GetCountriesStatistics On After Fetch");
                    controller._onAfterFetch_GetCountriesStatistics$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rQ6hN84Fa0+lg3bYqw3VxA", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getCountriesStatistics$DataActRefresh"];
        // Client Actions
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KZsgAGiYc0ajorXy+iqqzw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.H8Q2XELJKk+rl0B+3CSkow/ClientActions.KZsgAGiYc0ajorXy+iqqzw:k_OxwagjhiM7QW1ylckalg", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xvUhEBCwvEazn9QtY4zemQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ehIAw6nq9UCl1CxjT3H3Kw", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_BrowseCountries_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseCountries.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GUD3qNqzvUOHM_2hefLHMQ", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut && model.variables.getCountriesStatisticsDataAct.isDataFetchedAttr))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dIr6V+5sH0yexhbMU86Wxw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x+7ctFeWuE29rU_tS+AmlQ", callContext.id);
                        // Execute Action: Action_RefreshData
                        return controller._action_RefreshData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C9MmAWvO+E2K3sFYlficKQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KZsgAGiYc0ajorXy+iqqzw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KZsgAGiYc0ajorXy+iqqzw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseCountries.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_StatisticsList_Clicked$Action = function(event_IdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_StatisticsList_Clicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseCountries.Handler_StatisticsList_Clicked$vars"))());
            vars.value.event_IdInLocal = event_IdIn;
            var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.hasAccessToRegionVar = hasAccessToRegionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3OBRqwiALEKvTm5gWMligA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.H8Q2XELJKk+rl0B+3CSkow/ClientActions.3OBRqwiALEKvTm5gWMligA:1TD13Rt1vU1fRy5dnQWB_Q", "UBTConnect", "Handler_StatisticsList_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2tSc_BexEEmZPRO6Tjo6+Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q4bAmj8cKk29jBSu05DzOg", callContext.id) && ((vars.value.event_IdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jAcpMirXD0CeCm1Lloth_w", callContext.id);
                        // Execute Action: HasAccessToRegion
                        model.flush();
                        return UBTConnectController.default.hasAccessToRegion$Action(OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.textToLongInteger(vars.value.event_IdInLocal)), vars.value.event_IdInLocal, callContext).then(function(value) {
                            hasAccessToRegionVar.value = value;
                        }).then(function() {
                            return OS.Flow.executeSequence(function() {
                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KZaSgcjCnEiWmM7maNHhXg", callContext.id) && hasAccessToRegionVar.value.hasAccessOut)) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dxlkv7HkkUmCj+sDJ7piww", callContext.id);
                                    // Destination: /UBTConnect/BrowseDirectory
                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/BrowseDirectory", {
                                        CountryCode: OS.DataConversion.ServerDataConverter.asString(vars.value.event_IdInLocal, OS.DataTypes.DataTypes.Text)
                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D2NrtuBfJ0GUK2FfTDZ_VQ", callContext.id);
                                    // Execute Action: App_Subscription_ShowUpgradePopUp
                                    model.flush();
                                    return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+Nf3YnpGdEG_VDk3KKhNwg", callContext.id);
                                    });
                                }

                            });
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tFF+5bWGyUiGLMkDKa45Xg", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3OBRqwiALEKvTm5gWMligA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3OBRqwiALEKvTm5gWMligA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseCountries.Handler_StatisticsList_Clicked$vars", [{
            name: "Event_Id",
            attrName: "event_IdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_RefreshData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_RefreshData");
            callContext = controller.callContext(callContext);
            var getSkeletonList_UI_CountryStatisticsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSkeletonList_UI_CountryStatisticsVar = getSkeletonList_UI_CountryStatisticsVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zntoz7tfJEC8xloQUJOFtQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.H8Q2XELJKk+rl0B+3CSkow/ClientActions.zntoz7tfJEC8xloQUJOFtQ:7jCTadpZ_J3CSCAO0QfJgg", "UBTConnect", "Action_RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wEXSOz1NSE6JvQErz8rBeQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dSSfcVM9YE25YF53djeGZQ", callContext.id);
                // Execute Action: GetSkeletonList_UI_CountryStatistics
                getSkeletonList_UI_CountryStatisticsVar.value = UBTConnectController.default.getSkeletonList_UI_CountryStatistics$Action(10, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mZ5okwKpgEODEtqvnIesXg", callContext.id);
                // GetCountriesStatistics.Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics.UI_CountryStatistics
                model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut = getSkeletonList_UI_CountryStatisticsVar.value.uI_CountryStatisticsOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:276He3gWA0yxfJ7G504+Bw", callContext.id);
                // Refresh Query: GetCountriesStatistics
                var result = controller.getCountriesStatistics$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Cl3YVLLXVUmtgFDnVhV8sg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zntoz7tfJEC8xloQUJOFtQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zntoz7tfJEC8xloQUJOFtQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onAfterFetch_GetCountriesStatistics$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetCountriesStatistics");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WNHx1BvA4Ea0c3zMJAGrJw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.H8Q2XELJKk+rl0B+3CSkow/ClientActions.WNHx1BvA4Ea0c3zMJAGrJw:XtXl03r3rHwgfsuEMxqaTw", "UBTConnect", "OnAfterFetch_GetCountriesStatistics", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nfyb9xtC4ECXBClb0roPHw", callContext.id);
                // Foreach GetCountriesStatistics.Out_CountriesStatistics
                callContext.iterationContext.registerIterationStart(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut);
                try {
                    var out_CountriesStatisticsIterator = callContext.iterationContext.getIterator(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut);
                    var out_CountriesStatisticsIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZhSZgSXgEEq91VEUYvCCEQ", callContext.id) && (out_CountriesStatisticsIndex < model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.length))) {
                        out_CountriesStatisticsIterator.currentRowNumber = out_CountriesStatisticsIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SQi6tRkp5kaQd8IIEl88CQ", callContext.id);
                        // GetCountriesStatistics.Out_CountriesStatistics.Current.Statistics.AvatarURL = GetFlagURLByCountryCode(GetCountriesStatistics.Out_CountriesStatistics.Current.CountryCode)
                        model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getItem(out_CountriesStatisticsIndex.valueOf()).statisticsAttr.avatarURLAttr = OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.getFlagURLByCountryCode$Action(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getItem(out_CountriesStatisticsIndex.valueOf()).countryCodeAttr, callContext).out_CountryFlagURLOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                        out_CountriesStatisticsIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:opx8m_TbIkKH8MOWr+U4dA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WNHx1BvA4Ea0c3zMJAGrJw", callContext.id);
            }

        };

        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.handler_StatisticsList_Clicked$Action = function(event_IdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_StatisticsList_Clicked$Action, callContext, event_IdIn);

        };
        Controller.prototype.action_RefreshData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_RefreshData$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetCountriesStatistics$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetCountriesStatistics$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:H8Q2XELJKk+rl0B+3CSkow:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.H8Q2XELJKk+rl0B+3CSkow:+3u_ovmhaw80QlwiWLwmgA", "UBTConnect", "BrowseCountries", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:H8Q2XELJKk+rl0B+3CSkow", callContext.id);
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/BrowseCountries On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Directory_LocalityController.default.handleError(ex, this.callContext());
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
define("UBTConnect.Directory_Locality.BrowseCountries.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.Directory_Locality.BrowseCountries.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "ehIAw6nq9UCl1CxjT3H3Kw": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "zgxznscMXUW66On7648DYA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "jAcpMirXD0CeCm1Lloth_w": {
            getter: function(varBag, idService) {
                return varBag.hasAccessToRegionVar.value;
            }
        },
        "dSSfcVM9YE25YF53djeGZQ": {
            getter: function(varBag, idService) {
                return varBag.getSkeletonList_UI_CountryStatisticsVar.value;
            }
        },
        "rQ6hN84Fa0+lg3bYqw3VxA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getCountriesStatisticsDataAct;
            }
        },
        "tDph5EvJzkS9aR4MJquepg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "dOjJ__XchEG6l2UDQ02E2w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "U94OyYQiX0yz_c2+5wXICA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "X4tCVwV9GEG2ffIu3mcBEw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "kLxtNFO_dEiKQDa9rCX5aw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "sPSIY3Z8S0WE_LzYwYE0sQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});