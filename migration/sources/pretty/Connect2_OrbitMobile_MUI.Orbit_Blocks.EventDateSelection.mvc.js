define("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$model", "Connect2_OrbitMobile_MUI.model$TimeTypeFilterRec", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "Connect2_OrbitMobile_BL.model$DateFilterRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("TimeTypeEndFilter", "timeTypeEndFilterVar", "TimeTypeEndFilter", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimeTypeFilterRec());
                }, false, Connect2_OrbitMobile_MUIModel.TimeTypeFilterRec),
                this.attr("DateList", "dateListVar", "DateList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.DayFilterList());
                }, false, Connect2_OrbitMobile_MUIModel.DayFilterList),
                this.attr("In_DateList", "in_DateListIn", "In_DateList", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.DateFilterRec());
                }, false, Connect2_OrbitMobile_BLModel.DateFilterRec),
                this.attr("_in_DateListInDataFetchStatus", "_in_DateListInDataFetchStatus", "_in_DateListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_DateList" in inputs) {
                this.variables.in_DateListIn = inputs.In_DateList;
                if ("_in_DateListInDataFetchStatus" in inputs) {
                    this.variables._in_DateListInDataFetchStatus = inputs._in_DateListInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_Blocks.EventDateSelection");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$view", "Connect2_OrbitMobile_MUI.model$TimeTypeFilterRec", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "Connect2_OrbitMobile_BL.model$DateFilterRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_view) {
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
        View.displayName = "Orbit_Blocks.EventDateSelection";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "event-date-selector-list-cont",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventDateSelection/Container onclick");
                                return controller.onClick_Date$Action(Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE, -1, OS.BuiltinFunctions.nullDate(), controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    }
                },
                style: model.getCachedValue(idService.getId("0JhoHwLwiUqBz3pIEPYE7w.Style"), function() {
                    return ("event-date-selector event-date-selector-before-after event-date-selector-before" + ((((model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE) && model.variables.timeTypeEndFilterVar.isSelectedAttr)) ? (" event-date-selector-selected") : ("")));
                }, function() {
                    return model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr;
                }, function() {
                    return model.variables.timeTypeEndFilterVar.isSelectedAttr;
                }),
                visible: model.variables.in_DateListIn.hasBeforeAttr,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DateListInDataFetchStatus)
            }, "B"), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_view, {
                inputs: {
                    ReplaceSunday: true,
                    AddWeekdayBelow: true,
                    DateList: model.variables.dateListVar,
                    ShowInWeekday: false
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clickedDate$Action: function(event_MilestoneTimeTypeIdIn, event_SelectedDateIn, event_PositionIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/ListOfDaySelectors ClickedDate");
                                return controller.onClick_Date$Action(event_MilestoneTimeTypeIdIn, event_PositionIn, event_SelectedDateIn, controller.callContext(eventHandlerContext));
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
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventDateSelection/Container onclick");
                                return controller.onClick_Date$Action(Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.aFTER, -1, OS.BuiltinFunctions.nullDate(), controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    }
                },
                style: model.getCachedValue(idService.getId("eAHFvT96AUeWn3CtOL3w+w.Style"), function() {
                    return ("event-date-selector event-date-selector-before-after event-date-selector-after" + ((((model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.aFTER) && model.variables.timeTypeEndFilterVar.isSelectedAttr)) ? (" event-date-selector-selected") : ("")));
                }, function() {
                    return model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr;
                }, function() {
                    return model.variables.timeTypeEndFilterVar.isSelectedAttr;
                }),
                visible: model.variables.in_DateListIn.hasAfterAttr,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DateListInDataFetchStatus)
            }, "A")));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.model$TimeTypeFilterRec", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "Connect2_OrbitMobile_BL.model$DateFilterRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
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
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MJ6XQfSBmUmfWlmbaBs_+g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.l+B2whYt_kec5VxUGSacIw/ClientActions.MJ6XQfSBmUmfWlmbaBs_+g:2i9rB8rBnCvPZd2Jn9B3Ag", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:za77H2C3w0aejh5HraWBEA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NcH68YOeGUGFgQRPnr85FQ", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WOclzDe3WE6AOy7mKC8ucg", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Esadq4VzHEyUBKKedKGU+g", callContext.id);
                } else {
                    // No dates?
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:44dGYtMuLUC9Fz755sKfVQ", callContext.id) && model.variables.in_DateListIn.dayFilterListAttr.isEmpty)) {
                        // Set Selection to Before
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y_B5cr2IV0Gfc7Blg5gHyA", callContext.id);
                        // TimeTypeEndFilter.MilestoneTimetypeId = BEFORE
                        model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr = Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y_B5cr2IV0Gfc7Blg5gHyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // TimeTypeEndFilter.IsSelected = True
                        model.variables.timeTypeEndFilterVar.isSelectedAttr = true;
                        // Foreach DateList
                        callContext.iterationContext.registerIterationStart(model.variables.dateListVar);
                        try {
                            var dateListIterator = callContext.iterationContext.getIterator(model.variables.dateListVar);
                            var dateListIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8i4MiYTOuEiFF3RR5uQFTg", callContext.id) && (dateListIndex < model.variables.dateListVar.length))) {
                                dateListIterator.currentRowNumber = dateListIndex;
                                // Set all dates to False
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y76+16B4pUmG7BUWTGmsRw", callContext.id);
                                // DateList.Current.IsSelected = False
                                model.variables.dateListVar.getItem(dateListIndex.valueOf()).isSelectedAttr = false;
                                dateListIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(model.variables.dateListVar);
                        }

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nsjc9w6b50Wf9ckpbcHw+Q", callContext.id);
                    } else {
                        // Set Local variables
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:98ju6nWraEiWRhktuJT3Xw", callContext.id);
                        // DateList = In_DateList.DayFilterList
                        model.variables.dateListVar = model.variables.in_DateListIn.dayFilterListAttr;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ze8G+PjJc0qrfEkdnl0u2w", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MJ6XQfSBmUmfWlmbaBs_+g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_Date$Action = function(milestoneTimeTypeIdIn, selectedPositionIn, selectedDateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Date");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.OnClick_Date$vars"))());
            vars.value.milestoneTimeTypeIdInLocal = milestoneTimeTypeIdIn;
            vars.value.selectedPositionInLocal = selectedPositionIn;
            vars.value.selectedDateInLocal = selectedDateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:IMUL7xCuw0mwy6DWjsQedQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.l+B2whYt_kec5VxUGSacIw/ClientActions.IMUL7xCuw0mwy6DWjsQedQ:KP6XnxG3CvWCtezR+4DZVA", "Connect2_OrbitMobile_MUI", "OnClick_Date", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hXoT0_6Gnku6tcQsO8_fmA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // TimeType
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bwxu7rbKm0itq7FnebOH4Q", callContext.id) && ((vars.value.milestoneTimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE) || (vars.value.milestoneTimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.aFTER)))) {
                        // Different selection?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SweHJ0JNCkmOuDMXPbN2XA", callContext.id) && ((model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr) !== (vars.value.milestoneTimeTypeIdInLocal)))) {
                                // Set Current Selection
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EvhaoxK6SECneR8Wc9kVHg", callContext.id);
                                // TimeTypeEndFilter.MilestoneTimetypeId = MilestoneTimeTypeId
                                model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr = vars.value.milestoneTimeTypeIdInLocal;
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EvhaoxK6SECneR8Wc9kVHg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                // TimeTypeEndFilter.IsSelected = True
                                model.variables.timeTypeEndFilterVar.isSelectedAttr = true;
                                // Foreach DateList
                                callContext.iterationContext.registerIterationStart(model.variables.dateListVar);
                                try {
                                    var dateListIterator = callContext.iterationContext.getIterator(model.variables.dateListVar);
                                    var dateListIndex = 0;
                                    while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lhx+roVSX0OvoHB7IZpT9Q", callContext.id) && (dateListIndex < model.variables.dateListVar.length))) {
                                        dateListIterator.currentRowNumber = dateListIndex;
                                        // Set all dates to False
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LIuFU0ZPFkGavTvrZKst0A", callContext.id);
                                        // DateList.Current.IsSelected = False
                                        model.variables.dateListVar.getItem(dateListIndex.valueOf()).isSelectedAttr = false;
                                        dateListIndex++;
                                    }

                                } finally {
                                    callContext.iterationContext.registerIterationEnd(model.variables.dateListVar);
                                }

                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kLuEk6WXs0it6xhrXUtGWg", callContext.id);
                                // Trigger Event: ClickedDate_Edges
                                return controller.clickedDate$Action(vars.value.milestoneTimeTypeIdInLocal, OS.DataTypes.DateTime.defaultValue, 0, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gxkb8Um8OkmZqZrUElU3Tw", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s_AisY3Y8E6gnW4rrTWkQw", callContext.id);
                            }

                        });
                    } else {
                        return OS.Flow.executeSequence(function() {
                            if ((vars.value.milestoneTimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.dAY)) {
                                // Has value?
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W9mtQXY+L02zviiP7WGGJA", callContext.id) && ((vars.value.selectedPositionInLocal) !== (-1)))) {
                                        // New date selection?
                                        return OS.Flow.executeSequence(function() {
                                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9eFutaI0T0unOABC9TP4yQ", callContext.id) && !(model.variables.dateListVar.getItem(vars.value.selectedPositionInLocal).isSelectedAttr))) {
                                                // Foreach DateList
                                                callContext.iterationContext.registerIterationStart(model.variables.dateListVar);
                                                try {
                                                    var dateListIterator = callContext.iterationContext.getIterator(model.variables.dateListVar);
                                                    var dateListIndex = 0;
                                                    while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gBgCzkvCLkWdRHbqaTbtXA", callContext.id) && (dateListIndex < model.variables.dateListVar.length))) {
                                                        dateListIterator.currentRowNumber = dateListIndex;
                                                        // Set Current Selection
                                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J+DJfD+unESjDW0X5cAcjQ", callContext.id);
                                                        // DateList.Current.IsSelected = DateList.CurrentRowNumber = SelectedPosition
                                                        model.variables.dateListVar.getItem(dateListIndex.valueOf()).isSelectedAttr = (model.variables.dateListVar.getCurrentRowNumber(callContext.iterationContext) === vars.value.selectedPositionInLocal);
                                                        dateListIndex++;
                                                    }

                                                } finally {
                                                    callContext.iterationContext.registerIterationEnd(model.variables.dateListVar);
                                                }

                                                // Reset End Filters
                                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hpOb9GQ530W+U4BWGMoDZg", callContext.id);
                                                // TimeTypeEndFilter.MilestoneTimetypeId = MilestoneTimeTypeId
                                                model.variables.timeTypeEndFilterVar.milestoneTimetypeIdAttr = vars.value.milestoneTimeTypeIdInLocal;
                                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hpOb9GQ530W+U4BWGMoDZg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                                // TimeTypeEndFilter.IsSelected = False
                                                model.variables.timeTypeEndFilterVar.isSelectedAttr = false;
                                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G37Bltz2bkiGs2SzuV2gzQ", callContext.id);
                                                // Trigger Event: ClickedDate
                                                return controller.clickedDate$Action(vars.value.milestoneTimeTypeIdInLocal, vars.value.selectedDateInLocal, vars.value.selectedPositionInLocal, callContext).then(function() {
                                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0R+bQZ+POUCJKBDEl2VAMQ", callContext.id);
                                                });
                                            } else {
                                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mj_wkH3RbEmcaBe8gn_boQ", callContext.id);
                                            }

                                        });
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mjOoCMTAMEaqxvwkFWIDqQ", callContext.id);
                                    }

                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3b0X5O9v2kyDucCHV6CZIQ", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IMUL7xCuw0mwy6DWjsQedQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IMUL7xCuw0mwy6DWjsQedQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.OnClick_Date$vars", [{
            name: "MilestoneTimeTypeId",
            attrName: "milestoneTimeTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "SelectedPosition",
            attrName: "selectedPositionInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return -1;
            }
        }, {
            name: "SelectedDate",
            attrName: "selectedDateInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Date,
            defaultValue: function() {
                return OS.BuiltinFunctions.nullDate();
            }
        }]);

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onClick_Date$Action = function(milestoneTimeTypeIdIn, selectedPositionIn, selectedDateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Date$Action, callContext, milestoneTimeTypeIdIn, selectedPositionIn, selectedDateIn);

        };
        Controller.prototype.clickedDate$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:l+B2whYt_kec5VxUGSacIw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.l+B2whYt_kec5VxUGSacIw:YOoxK5KYvFc+9drPaUc7eA", "Connect2_OrbitMobile_MUI", "EventDateSelection", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:l+B2whYt_kec5VxUGSacIw", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/EventDateSelection On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
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
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "NcH68YOeGUGFgQRPnr85FQ": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "lucP4S6ro0GiS8AOES4vIw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneTimeTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4HTZlzOl7EapA2aP63racw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedPositionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "E+XJyvChfUGnfXCQEAaayg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "7AINuk7X5k6mlSQCdU0d_A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.timeTypeEndFilterVar;
            }
        },
        "I1rI_E_980if5GO+heQfXg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.dateListVar;
            }
        },
        "pjO+xG0JqkO6Ch1GHK67bg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_DateListIn;
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});