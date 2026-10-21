define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters.mvc$model", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", "Connect2_OrbitMobile_MUI.model$EventLocalitiesFilterList", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvcModel) {
    var OS = OutSystems.Internal;

    var GetEventLocalitiesForFilterDataActRec = (function(_super) {
        __extends(GetEventLocalitiesForFilterDataActRec, _super);

        function GetEventLocalitiesForFilterDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetEventLocalitiesForFilterDataActRec.attributesToDeclare = function() {
            return [
                this.attr("EventLocalities", "eventLocalitiesOut", "EventLocalities", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventLocalitiesFilterList());
                }, true, Connect2_OrbitMobile_MUIModel.EventLocalitiesFilterList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetEventLocalitiesForFilterDataActRec.fromStructure = function(str) {
            return new GetEventLocalitiesForFilterDataActRec(new GetEventLocalitiesForFilterDataActRec.RecordClass({
                eventLocalitiesOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetEventLocalitiesForFilterDataActRec.init();
        return GetEventLocalitiesForFilterDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsShowFilters", "isShowFiltersVar", "IsShowFilters", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("HasLocalityData", "hasLocalityDataVar", "HasLocalityData", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SelectedFilters", "selectedFiltersVar", "SelectedFilters", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec());
                }, false, Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec),
                this.attr("In_HasLoaded", "in_HasLoadedIn", "In_HasLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_HasLoadedInDataFetchStatus", "_in_HasLoadedInDataFetchStatus", "_in_HasLoadedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_DefaultDateRangeInMonths", "in_DefaultDateRangeInMonthsIn", "In_DefaultDateRangeInMonths", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 24;
                }, false),
                this.attr("_in_DefaultDateRangeInMonthsInDataFetchStatus", "_in_DefaultDateRangeInMonthsInDataFetchStatus", "_in_DefaultDateRangeInMonthsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsShowing", "in_IsShowingIn", "In_IsShowing", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsShowingInDataFetchStatus", "_in_IsShowingInDataFetchStatus", "_in_IsShowingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetEventLocalitiesForFilter", "getEventLocalitiesForFilterDataAct", "getEventLocalitiesForFilterDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetEventLocalitiesForFilterDataActRec());
                }, true, GetEventLocalitiesForFilterDataActRec)
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
                    Model._hasValidationWidgetsValue = (NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_HasLoaded" in inputs) {
                this.variables.in_HasLoadedIn = inputs.In_HasLoaded;
                if ("_in_HasLoadedInDataFetchStatus" in inputs) {
                    this.variables._in_HasLoadedInDataFetchStatus = inputs._in_HasLoadedInDataFetchStatus;
                }

            }

            if ("In_DefaultDateRangeInMonths" in inputs) {
                this.variables.in_DefaultDateRangeInMonthsIn = inputs.In_DefaultDateRangeInMonths;
                if ("_in_DefaultDateRangeInMonthsInDataFetchStatus" in inputs) {
                    this.variables._in_DefaultDateRangeInMonthsInDataFetchStatus = inputs._in_DefaultDateRangeInMonthsInDataFetchStatus;
                }

            }

            if ("In_IsShowing" in inputs) {
                this.variables.in_IsShowingIn = inputs.In_IsShowing;
                if ("_in_IsShowingInDataFetchStatus" in inputs) {
                    this.variables._in_IsShowingInDataFetchStatus = inputs._in_IsShowingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "LDM_Blocks.MyEvents_MyTimelineFilterButton");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters.mvc$view", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", "Connect2_OrbitMobile_MUI.model$EventLocalitiesFilterList", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_LegacySharedController, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvc_view) {
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
        View.displayName = "LDM_Blocks.MyEvents_MyTimelineFilterButton";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.in_IsShowingIn, false, this, function() {
                return [$if(model.variables.in_HasLoadedIn, false, this, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        extendedEvents: {
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyEvents_MyTimelineFilterButton/Icon onclick");
                                    controller.toggleEventFilters$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });

                                ;
                            }
                        },
                        icon: "filter",
                        iconSize: /*FontSize*/ 0,
                        style: "icon font-size-1-5em",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "0"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        icon: "filter",
                        iconSize: /*FontSize*/ 0,
                        style: "icon font-size-1-5em text-neutral-6",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "1"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "BlockPlaceholder"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    "componentDidUpdate": function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyEvents_MyTimelineFilterButton/SearchFiltersRoot componentDidUpdate");
                            controller.searchFiltersComponentDidUpdate$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                style: "backwards-compatibility",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "SearchFiltersRoot"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(!(model.variables.isShowFiltersVar), false, this, function() {
                return [];
            }, function() {
                return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        backNavigationPrevented$Action: function(backNavigationEventIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
                                controller.toggleEventFilters$Action(controller.callContext(eventHandlerContext));
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
                        uuid: "4",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }), React.createElement(OSWidgets.Popup, {
                    showPopup: model.variables.isShowFiltersVar,
                    style: "popup-dialog my-events-popup-filters",
                    _idProps: {
                        service: idService,
                        name: "Event_Filters_PopUp"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_Filters_mvc_view, {
                    inputs: {
                        In_SelectedFilters: model.variables.selectedFiltersVar,
                        In_DefaultDateRangeInMonths: model.variables.in_DefaultDateRangeInMonthsIn,
                        _in_DefaultDateRangeInMonthsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DefaultDateRangeInMonthsInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        close$Action: function(event_IsToResetIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline_Filters Close");
                                    return controller.onHandle_Close$Action(event_IsToResetIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        filter$Action: function(event_SelectedFiltersIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline_Filters Filter");
                                    return controller.onHandle_Filter$Action(event_SelectedFiltersIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        resetFilters$Action: function(event_ResetFiltersIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline_Filters ResetFilters");
                                controller.onHandle_ResetFilters$Action(event_ResetFiltersIn, controller.callContext(eventHandlerContext));
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
                        uuid: "6",
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }))];
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$debugger", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", "Connect2_OrbitMobile_MUI.model$EventLocalitiesFilterList", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_LegacySharedController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getEventLocalitiesForFilter$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getEventLocalitiesForFilter$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getEventLocalitiesForFilter$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:W_7+ZCVokkuobxxxkftidQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/DataActions.W_7+ZCVokkuobxxxkftidQ:eAiF8Q0IS3X2fTQ_AfTmGA", "Connect2_OrbitMobile_MUI", "GetEventLocalitiesForFilter", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/MyEvents_MyTimelineFilterButton/GetEventLocalitiesForFilter");
                return controller.callDataAction("DataActionGetEventLocalitiesForFilter", "screenservices/Connect2_OrbitMobile_MUI/LDM_Blocks/MyEvents_MyTimelineFilterButton/DataActionGetEventLocalitiesForFilter", "2Vmf6wOZML9cJUXM0n_Z0w", function(b) {
                    model.variables.getEventLocalitiesForFilterDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getEventLocalitiesForFilterDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventLocalitiesForFilterDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false);

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:W_7+ZCVokkuobxxxkftidQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getEventLocalitiesForFilter$DataActRefresh"];
        // Client Actions
        Controller.prototype._toggleEventFilters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleEventFilters");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1_lGCIX2wUu0gonOgFjSTA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.1_lGCIX2wUu0gonOgFjSTA:aCTZr0v2Qp8ReS2SmzDziw", "Connect2_OrbitMobile_MUI", "ToggleEventFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eia1O__EEUqfLkaRK5eMRg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kCnGKgIdOEC_Oj9IC+8gYg", callContext.id) && model.variables.in_IsShowingIn)) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lsg5OE1b60C9oq0w7RM5oQ", callContext.id);
                    // IsShowFilters = notIsShowFilters
                    model.variables.isShowFiltersVar = !(model.variables.isShowFiltersVar);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:urLdtk7eb0SC6+2nQ3BndA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ltjxDjOankSfOG_1OBU+hQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1_lGCIX2wUu0gonOgFjSTA", callContext.id);
            }

        };
        Controller.prototype._getEventLocalitiesData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetEventLocalitiesData");
            callContext = controller.callContext(callContext);
            var getCurrentTimeInMill_EndVar = new OS.DataTypes.VariableHolder();
            var getCurrentTimeInMill_StartVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCurrentTimeInMill_EndVar = getCurrentTimeInMill_EndVar;
            varBag.getCurrentTimeInMill_StartVar = getCurrentTimeInMill_StartVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KLqUEotgF0248Ewb7+1lWg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.KLqUEotgF0248Ewb7+1lWg:2sDSYzVdR+aJT3qwKEnEYQ", "Connect2_OrbitMobile_MUI", "GetEventLocalitiesData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oP7EDBJJLEKEjQPAZQX6Yg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NzKYbVlI2U2uWSep85VUGw", callContext.id);
                // HasLocalityData = False
                model.variables.hasLocalityDataVar = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6UlY1hNPw0y2fkWc0I3U8w", callContext.id);
                // Execute Action: GetCurrentTimeInMill_Start
                getCurrentTimeInMill_StartVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YlUNmzmPcEabsAuBOgM_Wg", callContext.id);
                // Refresh Query: GetEventLocalitiesForFilter
                var result = controller.getEventLocalitiesForFilter$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g3gvJmZ2gECAIi2X2BIm1g", callContext.id);
                    // Execute Action: GetCurrentTimeInMill_End
                    getCurrentTimeInMill_EndVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                    // Set Localities
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pQYhOo0BdEGsz0p0sezzSw", callContext.id);
                    // SelectedFilters.Localities = GetEventLocalitiesForFilter.EventLocalities
                    model.variables.selectedFiltersVar.localitiesAttr = model.variables.getEventLocalitiesForFilterDataAct.eventLocalitiesOut;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FdiMrTCEIkO9ytBxDvGbyA", callContext.id);
                    // HasLocalityData = True
                    model.variables.hasLocalityDataVar = true;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RmXH5u3dlUOm9mBNow+r8w", callContext.id);
                    // Execute Action: AddAuditRequestAPIEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.requestAPI_EventLocalities, getCurrentTimeInMill_EndVar.value.out_TimestampOut.sub(getCurrentTimeInMill_StartVar.value.out_TimestampOut), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_iHOWDzJ30+Z9yneQiYVzw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KLqUEotgF0248Ewb7+1lWg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KLqUEotgF0248Ewb7+1lWg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_Close$Action = function(in_IsToResetIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_Close");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.OnHandle_Close$vars"))());
            vars.value.in_IsToResetInLocal = in_IsToResetIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:7vCKajvz_kCHLzvwBIO8sQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.7vCKajvz_kCHLzvwBIO8sQ:G1L6czY+K4_S10zzHdnOuw", "Connect2_OrbitMobile_MUI", "OnHandle_Close", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p6lOizx8c0KLtdSQR6GHBg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m_dFO9eX90W_7GWstYwdtw", callContext.id);
                // Execute Action: ToggleEventFilters
                controller._toggleEventFilters$Action(callContext);
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SOIoF55t3EO5szhzmUUkLg", callContext.id) && vars.value.in_IsToResetInLocal)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5YnBJVwQYEW6Pg8b0up0nA", callContext.id);
                        // Trigger Event: ResetFilters
                        return controller.resetFilters$Action(model.variables.selectedFiltersVar, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DdtW_qRy_kOn8YFkbGgMzg", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DdtW_qRy_kOn8YFkbGgMzg", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7vCKajvz_kCHLzvwBIO8sQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7vCKajvz_kCHLzvwBIO8sQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.OnHandle_Close$vars", [{
            name: "In_IsToReset",
            attrName: "in_IsToResetInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._searchFiltersComponentDidUpdate$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SearchFiltersComponentDidUpdate");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LXfcbOoe1E6sJMWKjIMt_Q:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.LXfcbOoe1E6sJMWKjIMt_Q:HLsZ5zCY3qYPqlLVBv2_gA", "Connect2_OrbitMobile_MUI", "SearchFiltersComponentDidUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wnw4AnFqcUqNDeQFeOXU6Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0G0PQIzs8ESYaB3rvfg0lQ", callContext.id);
                // Execute Action: CopyClassesAcrossPortal
                Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("SearchFiltersRoot"), idService.getId("Event_Filters_PopUp"), callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0EOI2hrXJE69Y8ArkZzBBA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LXfcbOoe1E6sJMWKjIMt_Q", callContext.id);
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ZkzVijQS6UetQkNdVMTtRg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.ZkzVijQS6UetQkNdVMTtRg:B1kiD7jolZ2yNPH9_sUMIw", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GGk03J51mkSR8OyL1cjEEw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9Q1KukC3I0KpW8uXP3l9Gg", callContext.id) && model.variables.in_HasLoadedIn)) {
                        // Has Data?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CPLoxymdckq9QCqilmmVvw", callContext.id) && model.variables.hasLocalityDataVar)) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YZcytNO0+USExezx1aMPZQ", callContext.id);
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m4GBhtRSh02hX9ZgmY9Kug", callContext.id);
                                // Execute Action: GetEventLocalitiesData
                                return controller._getEventLocalitiesData$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YZcytNO0+USExezx1aMPZQ", callContext.id);
                                });
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3cbeSzMNGUy6qrkQ6KH0vw", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ZkzVijQS6UetQkNdVMTtRg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ZkzVijQS6UetQkNdVMTtRg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_ResetFilters$Action = function(in_ResetFiltersIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ResetFilters");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.OnHandle_ResetFilters$vars"))());
            vars.value.in_ResetFiltersInLocal = in_ResetFiltersIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oi3O0kLaPkmseSGKWRVzfA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.oi3O0kLaPkmseSGKWRVzfA:TnTmwsvla7m1L1h+jTeWAA", "Connect2_OrbitMobile_MUI", "OnHandle_ResetFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w+2OvQdCXkqqpc0ieZGICQ", callContext.id);
                // Reset Filters
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M2awY7H820CVF_5Z0f4HCg", callContext.id);
                // SelectedFilters = In_ResetFilters
                model.variables.selectedFiltersVar = vars.value.in_ResetFiltersInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1AmhHZfXZk2DA8bUrkaXgg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oi3O0kLaPkmseSGKWRVzfA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.OnHandle_ResetFilters$vars", [{
            name: "In_ResetFilters",
            attrName: "in_ResetFiltersInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
        }]);
        Controller.prototype._onHandle_Filter$Action = function(in_SelectedFiltersIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_Filter");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.OnHandle_Filter$vars"))());
            vars.value.in_SelectedFiltersInLocal = in_SelectedFiltersIn.clone();
            var listFilter_GetSelectedVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilter_GetSelectedVar = listFilter_GetSelectedVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:L3m_3tpq_0SuVRCoZZocqQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.L3m_3tpq_0SuVRCoZZocqQ:cHTUf6h+Z_P07+lk64Lmxg", "Connect2_OrbitMobile_MUI", "OnHandle_Filter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SP9RN2TYL0epdErNsEGMlQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kIFGp+5q80aG0kTAgBrQ_A", callContext.id);
                // Execute Action: ToggleEventFilters
                controller._toggleEventFilters$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RpTx3qBrkUmtWmylyUotxw", callContext.id);
                // Execute Action: ListFilter_GetSelected
                listFilter_GetSelectedVar.value = OS.SystemActions.listFilter(vars.value.in_SelectedFiltersInLocal.localitiesAttr, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WzsytAuRoEaNk++5S12V7w", callContext.id);
                // Trigger Event: Filter
                return controller.filter$Action(function() {
                    var rec = new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
                    rec.localitiesAttr = listFilter_GetSelectedVar.value.filteredListOut;
                    rec.fromDateAttr = vars.value.in_SelectedFiltersInLocal.fromDateAttr;
                    rec.toDateAttr = vars.value.in_SelectedFiltersInLocal.toDateAttr;
                    return rec;
                }(), callContext).then(function() {
                    // Update Selected Filters
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p1yHQ+pAok+F+YA3KnU0LQ", callContext.id);
                    // SelectedFilters = In_SelectedFilters
                    model.variables.selectedFiltersVar = vars.value.in_SelectedFiltersInLocal;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nPCdfUalf0CNV4r7QmTQsw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:L3m_3tpq_0SuVRCoZZocqQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:L3m_3tpq_0SuVRCoZZocqQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.OnHandle_Filter$vars", [{
            name: "In_SelectedFilters",
            attrName: "in_SelectedFiltersInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
        }]);
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4pKG+YmjBkyfRKHF9YpQsg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw/ClientActions.4pKG+YmjBkyfRKHF9YpQsg:u8PPVj84fTPdShuXib2nAg", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SRVXx9TOIU2x2mw83mVTIA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HCq4DCS6hU255pVB6xrujg", callContext.id);
                // Execute Action: OnParametersChanged
                return controller._onParametersChanged$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:czVnBHxCJ0y6Cus8y_ezPw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4pKG+YmjBkyfRKHF9YpQsg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4pKG+YmjBkyfRKHF9YpQsg", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.toggleEventFilters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleEventFilters$Action, callContext);

        };
        Controller.prototype.getEventLocalitiesData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getEventLocalitiesData$Action, callContext);

        };
        Controller.prototype.onHandle_Close$Action = function(in_IsToResetIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_Close$Action, callContext, in_IsToResetIn);

        };
        Controller.prototype.searchFiltersComponentDidUpdate$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._searchFiltersComponentDidUpdate$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onHandle_ResetFilters$Action = function(in_ResetFiltersIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ResetFilters$Action, callContext, in_ResetFiltersIn);

        };
        Controller.prototype.onHandle_Filter$Action = function(in_SelectedFiltersIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_Filter$Action, callContext, in_SelectedFiltersIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.resetFilters$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.filter$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ:_P7gfhFmARrzYcq0IncBSg", "Connect2_OrbitMobile_MUI", "LDM_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5qqirGA8aEW3tuitx+PUPw:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.5qqirGA8aEW3tuitx+PUPw:lFnRoKlrjNiDBclDTRozPw", "Connect2_OrbitMobile_MUI", "MyEvents_MyTimelineFilterButton", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5qqirGA8aEW3tuitx+PUPw", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/MyEvents_MyTimelineFilterButton On Ready");
                return controller.onReady$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/MyEvents_MyTimelineFilterButton On Parameters Changed");
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
            return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "g3gvJmZ2gECAIi2X2BIm1g": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_EndVar.value;
            }
        },
        "6UlY1hNPw0y2fkWc0I3U8w": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_StartVar.value;
            }
        },
        "4xJFp_aswEy4At2VEn8+QQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsToResetInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "U5vPFLkTwEi44zDo61ptZw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ResetFiltersInLocal;
            }
        },
        "O_oXVS84g0C8PAXZT00Gpw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SelectedFiltersInLocal;
            }
        },
        "RpTx3qBrkUmtWmylyUotxw": {
            getter: function(varBag, idService) {
                return varBag.listFilter_GetSelectedVar.value;
            }
        },
        "IFm9rO7YdEuGljBUyh0eTg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isShowFiltersVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "u5y_bUGP6EyjD5eCgl6wgQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasLocalityDataVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "pJM19dNgckaUKs5qsxMz3w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedFiltersVar;
            }
        },
        "HO7LWifbHUCA7laythuQmQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HasLoadedIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "uEGQGpb+YUK++FOubwoM2w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_DefaultDateRangeInMonthsIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "hvsbUnDP6EO7ReFXtMIo2g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsShowingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "W_7+ZCVokkuobxxxkftidQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getEventLocalitiesForFilterDataAct;
            }
        },
        "FVw_zXIDC0aOImvt5GUOWg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsShowing"));
                })(varBag.model, idService);
            }
        },
        "+DiNTYPbHEiRsqwKrpXdcA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("EnableFiltering"));
                })(varBag.model, idService);
            }
        },
        "0jNwx8U_0UyGw8VgietEtQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BlockPlaceholder"));
                })(varBag.model, idService);
            }
        },
        "JU5_xHGlDUK0tGY2O54J9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SearchFiltersRoot"));
                })(varBag.model, idService);
            }
        },
        "nEUDdDsdaE27nI6fU5gmfA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Event_Filters_PopUp"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});