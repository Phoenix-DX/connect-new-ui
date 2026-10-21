define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard.mvc$model", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$model", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$model", "OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$model", "Connect2_OrbitMobile_BL.model$TimelineEventGroupRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroupList", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_mvcModel, Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvcModel, OutSystemsUI_2_23_Utilities_SwipeEvents_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_PastEventsData", "in_PastEventsDataIn", "In_PastEventsData", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroupList());
                }, false, Connect2_OrbitMobile_MUIModel.TimelineEventGroupList),
                this.attr("_in_PastEventsDataInDataFetchStatus", "_in_PastEventsDataInDataFetchStatus", "_in_PastEventsDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_UpcomingEventsData", "in_UpcomingEventsDataIn", "In_UpcomingEventsData", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendarList());
                }, false, Connect2_OrbitMobile_MUIModel.EventCalendarList),
                this.attr("_in_UpcomingEventsDataInDataFetchStatus", "_in_UpcomingEventsDataInDataFetchStatus", "_in_UpcomingEventsDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsFetchingMyTimeline", "in_IsFetchingMyTimelineIn", "In_IsFetchingMyTimeline", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsFetchingMyTimelineInDataFetchStatus", "_in_IsFetchingMyTimelineInDataFetchStatus", "_in_IsFetchingMyTimelineInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HasFetchError", "in_HasFetchErrorIn", "In_HasFetchError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_HasFetchErrorInDataFetchStatus", "_in_HasFetchErrorInDataFetchStatus", "_in_HasFetchErrorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsFiltering", "in_IsFilteringIn", "In_IsFiltering", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsFilteringInDataFetchStatus", "_in_IsFilteringInDataFetchStatus", "_in_IsFilteringInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((((Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Utilities_SwipeEvents_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_PastEventsData" in inputs) {
                this.variables.in_PastEventsDataIn = inputs.In_PastEventsData;
                if ("_in_PastEventsDataInDataFetchStatus" in inputs) {
                    this.variables._in_PastEventsDataInDataFetchStatus = inputs._in_PastEventsDataInDataFetchStatus;
                }

            }

            if ("In_UpcomingEventsData" in inputs) {
                this.variables.in_UpcomingEventsDataIn = inputs.In_UpcomingEventsData;
                if ("_in_UpcomingEventsDataInDataFetchStatus" in inputs) {
                    this.variables._in_UpcomingEventsDataInDataFetchStatus = inputs._in_UpcomingEventsDataInDataFetchStatus;
                }

            }

            if ("In_IsFetchingMyTimeline" in inputs) {
                this.variables.in_IsFetchingMyTimelineIn = inputs.In_IsFetchingMyTimeline;
                if ("_in_IsFetchingMyTimelineInDataFetchStatus" in inputs) {
                    this.variables._in_IsFetchingMyTimelineInDataFetchStatus = inputs._in_IsFetchingMyTimelineInDataFetchStatus;
                }

            }

            if ("In_HasFetchError" in inputs) {
                this.variables.in_HasFetchErrorIn = inputs.In_HasFetchError;
                if ("_in_HasFetchErrorInDataFetchStatus" in inputs) {
                    this.variables._in_HasFetchErrorInDataFetchStatus = inputs._in_HasFetchErrorInDataFetchStatus;
                }

            }

            if ("In_IsFiltering" in inputs) {
                this.variables.in_IsFilteringIn = inputs.In_IsFiltering;
                if ("_in_IsFilteringInDataFetchStatus" in inputs) {
                    this.variables._in_IsFilteringInDataFetchStatus = inputs._in_IsFilteringInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "LDM_Blocks.MyTimeline");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard.mvc$view", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$view", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$view", "OutSystemsUI_2_23.Utilities.SwipeEvents.mvc$view", "Connect2_OrbitMobile_BL.model$TimelineEventGroupRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroupList", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedModel, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_view) {
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
        View.displayName = "LDM_Blocks.MyTimeline";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [$if((!(model.variables.in_PastEventsDataIn.isEmpty) || !(model.variables.in_UpcomingEventsDataIn.isEmpty)), false, this, function() {
                    return [React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        style: "timeline-ldm-height",
                        visible: true,
                        _idProps: {
                            service: idService,
                            name: "MinHeight_Enforcer"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }, $if(!(model.variables.in_UpcomingEventsDataIn.isEmpty), false, this, function() {
                        return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, {
                            inputs: {
                                In_HasBottomBorder: true,
                                In_Title: model.getCachedValue(idService.getId("SubSection_UpcomingEvents.In_Title"), function() {
                                    return ("Upcoming " + (((model.variables.in_UpcomingEventsDataIn.length > 1)) ? ("Events") : ("Event")));
                                }, function() {
                                    return model.variables.in_UpcomingEventsDataIn.length;
                                }),
                                _in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UpcomingEventsDataInDataFetchStatus)
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
                                name: "SubSection_UpcomingEvents",
                                alias: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                subSection_Placeholder: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        onScrollEnding: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline/List_UpcomingEvents OnScrollEnding");
                                                    return controller.list_MyTimelineOnScrollEnding$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        source: model.variables.in_UpcomingEventsDataIn,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "List_UpcomingEvents"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UpcomingEventsDataInDataFetchStatus),
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_mvc_view, {
                                                    inputs: {
                                                        In_Event: model.variables.in_UpcomingEventsDataIn.getCurrent(callContext.iterationContext),
                                                        _in_EventInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UpcomingEventsDataInDataFetchStatus),
                                                        In_IsExpandable: !(model.variables.in_UpcomingEventsDataIn.getCurrent(callContext.iterationContext).guestsAttr.isEmpty),
                                                        _in_IsExpandableInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UpcomingEventsDataInDataFetchStatus)
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        eventClicked$Action: function(event_EventHostIdIn, event_EventIdIn) {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard EventClicked");
                                                                controller.eventClicked$Action(event_EventHostIdIn, event_EventIdIn, controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        onClick_PhoneCall$Action: function(event_PhoneCallInfoIn) {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard OnClick_PhoneCall");
                                                                controller.onClick_PhoneCall$Action(event_PhoneCallInfoIn, controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        onClick_Message$Action: function(event_ContactPopupDataIn, event_CountryNameIn) {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard OnClick_Message");
                                                                controller.onClick_Message$Action(event_ContactPopupDataIn, event_CountryNameIn, controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        callPhoneEventCard$Action: function(phoneCallInfoIn) {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard CallPhoneEventCard");
                                                                controller.callPhone$Action(phoneCallInfoIn, controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        householdClicked$Action: function(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn) {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard HouseholdClicked");
                                                                controller.householdClicked$Action(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn, controller.callContext(eventHandlerContext));
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
                                                        name: "ListItem_UpcomingEvent",
                                                        alias: "2"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables._in_UpcomingEventsDataInDataFetchStatus)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._in_UpcomingEventsDataInDataFetchStatus), asPrimitiveValue(model.variables.in_UpcomingEventsDataIn)]
                        })];
                    }, function() {
                        return [];
                    }), $if(!(model.variables.in_PastEventsDataIn.isEmpty), false, this, function() {
                        return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, {
                            inputs: {
                                In_Title: "Past Events"
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
                                name: "SubSection_MyTimeline",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                subSection_Placeholder: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        onScrollEnding: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline/List_PastEvents OnScrollEnding");
                                                    return controller.list_MyTimelineOnScrollEnding$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        source: model.variables.in_PastEventsDataIn,
                                        style: "list list-group past-event-list",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "List_PastEvents"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PastEventsDataInDataFetchStatus),
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "past-event-cont",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "6"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: [asPrimitiveValue(model.variables._in_PastEventsDataInDataFetchStatus), asPrimitiveValue(model.variables.in_PastEventsDataIn.getCurrent(callContext.iterationContext).eventsCalendarAttr), asPrimitiveValue(model.variables.in_PastEventsDataIn.getCurrent(callContext.iterationContext).currentMonthDateAttr)]
                                                }, React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "past-event-date",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Expression, {
                                                    value: model.variables.in_PastEventsDataIn.getCurrent(callContext.iterationContext).currentMonthDateAttr,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PastEventsDataInDataFetchStatus)
                                                })), React.createElement(OSWidgets.List, {
                                                    animateItems: true,
                                                    extendedProperties: {
                                                        "disable-virtualization": "True"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: /*Default*/ 0,
                                                    source: model.variables.in_PastEventsDataIn.getCurrent(callContext.iterationContext).eventsCalendarAttr,
                                                    style: "list list-group",
                                                    tag: "div",
                                                    _idProps: {
                                                        service: idService,
                                                        name: "List_PastEventsData"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PastEventsDataInDataFetchStatus),
                                                    placeholders: {
                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                            return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_mvc_view, {
                                                                inputs: {
                                                                    In_Event: model.variables.in_PastEventsDataIn.getCurrent(callContext.iterationContext).eventsCalendarAttr.getCurrent(callContext.iterationContext),
                                                                    _in_EventInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PastEventsDataInDataFetchStatus),
                                                                    In_IsExpandable: !(model.variables.in_PastEventsDataIn.getCurrent(callContext.iterationContext).eventsCalendarAttr.getCurrent(callContext.iterationContext).guestsAttr.isEmpty),
                                                                    _in_IsExpandableInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PastEventsDataInDataFetchStatus)
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    onClick_Message$Action: function(event_ContactPopupDataIn, event_CountryNameIn) {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard OnClick_Message");
                                                                            controller.onClick_Message$Action(event_ContactPopupDataIn, event_CountryNameIn, controller.callContext(eventHandlerContext));
                                                                        }, function() {
                                                                            controller.popDebuggerContext(eventHandlerContext);
                                                                        });

                                                                        ;
                                                                    },
                                                                    eventClicked$Action: function(event_EventHostIdIn, event_EventIdIn) {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard EventClicked");
                                                                            controller.eventClicked$Action(event_EventHostIdIn, event_EventIdIn, controller.callContext(eventHandlerContext));
                                                                        }, function() {
                                                                            controller.popDebuggerContext(eventHandlerContext);
                                                                        });

                                                                        ;
                                                                    },
                                                                    householdClicked$Action: function(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn) {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard HouseholdClicked");
                                                                            controller.householdClicked$Action(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn, controller.callContext(eventHandlerContext));
                                                                        }, function() {
                                                                            controller.popDebuggerContext(eventHandlerContext);
                                                                        });

                                                                        ;
                                                                    },
                                                                    onClick_PhoneCall$Action: function(event_PhoneCallInfoIn) {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard OnClick_PhoneCall");
                                                                            controller.onClick_PhoneCall$Action(event_PhoneCallInfoIn, controller.callContext(eventHandlerContext));
                                                                        }, function() {
                                                                            controller.popDebuggerContext(eventHandlerContext);
                                                                        });

                                                                        ;
                                                                    },
                                                                    callPhoneEventCard$Action: function(phoneCallInfoIn) {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard CallPhoneEventCard");
                                                                            controller.callPhone$Action(phoneCallInfoIn, controller.callContext(eventHandlerContext));
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
                                                                    name: "ListItem_PastEvents",
                                                                    alias: "4"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            })];
                                                        }, callContext, idService, "3")
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables._in_PastEventsDataInDataFetchStatus)]
                                                }))];
                                            }, callContext, idService, "3")
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables._in_PastEventsDataInDataFetchStatus)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._in_PastEventsDataInDataFetchStatus), asPrimitiveValue(model.variables.in_PastEventsDataIn)]
                        })];
                    }, function() {
                        return [];
                    }))];
                }, function() {
                    return [$if(model.variables.in_HasFetchErrorIn, false, this, function() {
                        return [React.createElement(Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, {
                            inputs: {},
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                tryAgain$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/NetworkWarning TryAgain");
                                        controller.tryAgain$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "11",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }, function() {
                        return [$if(model.variables.in_IsFetchingMyTimelineIn, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, {
                                inputs: {
                                    In_ErrorMessage: model.getCachedValue(idService.getId("ErrorScreen.In_ErrorMessage"), function() {
                                        return ((model.variables.in_IsFilteringIn) ? ((("LDMs events not available." + "\r\n") + "Please try a different filter")) : ("LDMs events not available."));
                                    }, function() {
                                        return model.variables.in_IsFilteringIn;
                                    }),
                                    _in_ErrorMessageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsFilteringInDataFetchStatus)
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
                                    name: "ErrorScreen",
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), React.createElement(OutSystemsUI_2_23_Utilities_SwipeEvents_mvc_view, {
                                inputs: {
                                    WidgetId: idService.getId("ErrorScreen")
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    swipeUp$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities3/SwipeEvents SwipeUp");
                                                return controller.swipeEventSwipeUp$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "13",
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    })];
                }), $if((model.variables.in_IsFetchingMyTimelineIn && !(model.variables.in_HasFetchErrorIn)), false, this, function() {
                    return [React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        style: "list-updating-cont",
                        visible: true,
                        _idProps: {
                            service: idService,
                            name: "LoadingCont"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }, React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        style: "list-updating",
                        visible: true,
                        _idProps: {
                            service: idService,
                            name: "Loading"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }))];
                }, function() {
                    return [];
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$debugger", "Connect2_OrbitMobile_BL.model$TimelineEventGroupRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroupList", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_Debugger) {
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
        Controller.prototype._swipeEventSwipeUp$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SwipeEventSwipeUp");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:t66OFoZ9AE2tNPH9wgkeWQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.L+QLwJSnZkeA2nP8rOcG7Q/ClientActions.t66OFoZ9AE2tNPH9wgkeWQ:M1LOrviT9bmoH4TBX_OE8g", "Connect2_OrbitMobile_MUI", "SwipeEventSwipeUp", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:snNwjvDJN06QU9BYrfktLA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vILx1R9y8Um2mc9Oj0rpNg", callContext.id);
                // Trigger Event: EventsSwipeUp
                return controller.eventsSwipeUp$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V4S5OZk+s0CjscSwkOvWYA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:t66OFoZ9AE2tNPH9wgkeWQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:t66OFoZ9AE2tNPH9wgkeWQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._list_MyTimelineOnScrollEnding$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("List_MyTimelineOnScrollEnding");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cn7CMR4EZUWLaDxwixgB8w:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.L+QLwJSnZkeA2nP8rOcG7Q/ClientActions.cn7CMR4EZUWLaDxwixgB8w:oxbFRhToVKd1Wbg_zmpvzQ", "Connect2_OrbitMobile_MUI", "List_MyTimelineOnScrollEnding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Cti8cw4A8U6AHXNOOXUdCw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G6vWqE0xk0uVN4gGIsYk5A", callContext.id);
                // Trigger Event: ScrollEnding
                return controller.scrollEnding$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yJtSFAqYb0iHM51l_xJOtQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cn7CMR4EZUWLaDxwixgB8w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cn7CMR4EZUWLaDxwixgB8w", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.swipeEventSwipeUp$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._swipeEventSwipeUp$Action, callContext);

        };
        Controller.prototype.list_MyTimelineOnScrollEnding$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._list_MyTimelineOnScrollEnding$Action, callContext);

        };
        Controller.prototype.scrollEnding$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onClick_Message$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.callPhone$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.householdClicked$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.tryAgain$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.eventClicked$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.eventsSwipeUp$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onClick_PhoneCall$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ:_P7gfhFmARrzYcq0IncBSg", "Connect2_OrbitMobile_MUI", "LDM_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:L+QLwJSnZkeA2nP8rOcG7Q:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.L+QLwJSnZkeA2nP8rOcG7Q:9VHc1hnHKxoTI1eS7G_JXQ", "Connect2_OrbitMobile_MUI", "MyTimeline", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:L+QLwJSnZkeA2nP8rOcG7Q", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
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

define("Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "KVVcJB0I806B21roaJP3zQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_PastEventsDataIn;
            }
        },
        "U2MAk3DiLES4wGDUs8vWNQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_UpcomingEventsDataIn;
            }
        },
        "gZzqeaETe06H81hPXqpNFg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsFetchingMyTimelineIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZBPV_fpVu0O8WqlzR2pbFw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HasFetchErrorIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "oWm8oeklPEiG_XYmqulqZw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsFilteringIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "UlraoFRoL0aDCZ7VCOShPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowFalse"));
                })(varBag.model, idService);
            }
        },
        "Fm2t+fsdnkuycG_wCD9GZw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasMyTimelineData"));
                })(varBag.model, idService);
            }
        },
        "rorvmrJtSUmCTiHbdsoiEg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MinHeight_Enforcer"));
                })(varBag.model, idService);
            }
        },
        "YAQ4vZGJNUy1c_mSqHQNFg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasUpcomingEventData"));
                })(varBag.model, idService);
            }
        },
        "phOaEZ7v9U6mM06BMn4JpA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_UpcomingEvents"));
                })(varBag.model, idService);
            }
        },
        "3rP57A4ZukGdmNdUnsv2uQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "H92zmABkS0aO4y6oICGVBA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_UpcomingEvents"));
                })(varBag.model, idService);
            }
        },
        "NmEY5g1J6EGLI+IZw4TALA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListItem_UpcomingEvent"));
                })(varBag.model, idService);
            }
        },
        "ADy3grrLyUuPPCAmT5WVgw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasPastEventsData"));
                })(varBag.model, idService);
            }
        },
        "5H_9sS8wEUCDBMQxjOZRZg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_MyTimeline"));
                })(varBag.model, idService);
            }
        },
        "HPlSoT7_v0y40GcUlDeS8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "Za6MHBjh1kqvrNjFj8F57A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_PastEvents"));
                })(varBag.model, idService);
            }
        },
        "y4RcTpbwkkSXCDnjjrb_cw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_PastEventsData"));
                })(varBag.model, idService);
            }
        },
        "Mj7caeU4WkK882TOiNtj8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListItem_PastEvents"));
                })(varBag.model, idService);
            }
        },
        "C1oZCOZ7SECMMQYlpBndYA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasFetchError"));
                })(varBag.model, idService);
            }
        },
        "FoWu8RfwgU2gBwGKg1v5tA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsFetching"));
                })(varBag.model, idService);
            }
        },
        "CNWmJxzNcE2r+mbvEyfy9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ErrorScreen"));
                })(varBag.model, idService);
            }
        },
        "q+yaS_Bx1UCbiTWpgmZTIA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FetchingAndNoError"));
                })(varBag.model, idService);
            }
        },
        "JOfq9nYhek+vS5ec3DBRLg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LoadingCont"));
                })(varBag.model, idService);
            }
        },
        "T6KnItf8uEiW_SHYtjlDAA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Loading"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});