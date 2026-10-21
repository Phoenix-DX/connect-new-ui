define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MonthYearSelector.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$model", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$model", "Connect2_LegacyShared.Calendars.MonthCalendar.mvc$model", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$model", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.WeekDataDisplay.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.Agenda.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "Connect2_LegacyShared.controller$GetAdjustedScrollTime", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$CurrentCalendarDateRec", "FullCalendarReactive.model$EventRec", "Connect2_OrbitMobile_MUI.referencesHealth$FullCalendarReactive", "Connect2_OrbitMobile_MUI.model$EventList", "Connect2_OrbitMobile_BL.model$TimelineEventGroupRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroupList", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditCalendarEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditEventFilterEvent", "Connect2_OrbitMobile_MUI.controller$ValidateSameFilters", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_LegacySharedController, FullCalendarReactiveModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvcModel, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvcModel, Connect2_LegacyShared_Calendars_MonthCalendar_mvcModel, Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel, Connect2_LegacyShared_Calendars_DayCalendar_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_Agenda_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel) {
    var OS = OutSystems.Internal;

    var GetEventsForMyTimelineDataActRec = (function(_super) {
        __extends(GetEventsForMyTimelineDataActRec, _super);

        function GetEventsForMyTimelineDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetEventsForMyTimelineDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_PastEvents", "out_PastEventsOut", "Out_PastEvents", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroupList());
                }, true, Connect2_OrbitMobile_MUIModel.TimelineEventGroupList),
                this.attr("Out_UpcomingEvents", "out_UpcomingEventsOut", "Out_UpcomingEvents", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendarList());
                }, true, Connect2_OrbitMobile_MUIModel.EventCalendarList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetEventsForMyTimelineDataActRec.init();
        return GetEventsForMyTimelineDataActRec;
    })(OS.Model.DataSourceRecord);
    var GetEventsForCalendarDataActRec = (function(_super) {
        __extends(GetEventsForCalendarDataActRec, _super);

        function GetEventsForCalendarDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetEventsForCalendarDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_CalendarEvents", "out_CalendarEventsOut", "Out_CalendarEvents", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendarList());
                }, true, Connect2_OrbitMobile_MUIModel.EventCalendarList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetEventsForCalendarDataActRec.fromStructure = function(str) {
            return new GetEventsForCalendarDataActRec(new GetEventsForCalendarDataActRec.RecordClass({
                out_CalendarEventsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetEventsForCalendarDataActRec.init();
        return GetEventsForCalendarDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("CurrentEventView", "currentEventViewVar", "CurrentEventView", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline;
                }, false),
                this.attr("CurrentCalendarDate", "currentCalendarDateVar", "CurrentCalendarDate", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.CurrentCalendarDateRec());
                }, false, Connect2_OrbitMobile_MUIModel.CurrentCalendarDateRec),
                this.attr("CalendarEvents", "calendarEventsVar", "CalendarEvents", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventList());
                }, false, Connect2_OrbitMobile_MUIModel.EventList),
                this.attr("PastEventsData", "pastEventsDataVar", "PastEventsData", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroupList());
                }, false, Connect2_OrbitMobile_MUIModel.TimelineEventGroupList),
                this.attr("UpcomingEventsData", "upcomingEventsDataVar", "UpcomingEventsData", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendarList());
                }, false, Connect2_OrbitMobile_MUIModel.EventCalendarList),
                this.attr("EventFilters", "eventFiltersVar", "EventFilters", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec());
                }, false, Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec),
                this.attr("PastEventFilters", "pastEventFiltersVar", "PastEventFilters", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec());
                }, false, Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec),
                this.attr("IsFetchingEvents", "isFetchingEventsVar", "IsFetchingEvents", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsFetchingMyTimeline", "isFetchingMyTimelineVar", "IsFetchingMyTimeline", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsWeekMonthCalendarExpanded", "isWeekMonthCalendarExpandedVar", "IsWeekMonthCalendarExpanded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("DefaultDateRangeInMonths", "defaultDateRangeInMonthsVar", "DefaultDateRangeInMonths", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 24;
                }, false),
                this.attr("IsFiltering", "isFilteringVar", "IsFiltering", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ScrollAmountInPx", "scrollAmountInPxVar", "ScrollAmountInPx", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("ScrollEventCallback", "scrollEventCallbackVar", "ScrollEventCallback", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("ContactByPhoneData", "contactByPhoneDataVar", "ContactByPhoneData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec),
                this.attr("ContactByMessagePopupData", "contactByMessagePopupDataVar", "ContactByMessagePopupData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord());
                }, false, Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord),
                this.attr("GetEventsForMyTimeline", "getEventsForMyTimelineDataAct", "getEventsForMyTimelineDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetEventsForMyTimelineDataActRec());
                }, true, GetEventsForMyTimelineDataActRec),
                this.attr("GetEventsForCalendar", "getEventsForCalendarDataAct", "getEventsForCalendarDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetEventsForCalendarDataActRec());
                }, true, GetEventsForCalendarDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((((((((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Calendars_MonthCalendar_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Calendars_DayCalendar_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_Agenda_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "LDM_ScreenBlocks.ScreenBlock_MyEvents");
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$model", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.MonthYearSelector.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyEvents_MyTimelineFilterButton.mvc$view", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$view", "Connect2_LegacyShared.Calendars.MonthCalendar.mvc$view", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$view", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.WeekDataDisplay.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.Agenda.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "Connect2_LegacyShared.controller$GetAdjustedScrollTime", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$CurrentCalendarDateRec", "FullCalendarReactive.model$EventRec", "Connect2_OrbitMobile_MUI.referencesHealth$FullCalendarReactive", "Connect2_OrbitMobile_MUI.model$EventList", "Connect2_OrbitMobile_BL.model$TimelineEventGroupRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroupList", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditCalendarEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditEventFilterEvent", "Connect2_OrbitMobile_MUI.controller$ValidateSameFilters", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, FullCalendarReactiveModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_model, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_view, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_view, Connect2_LegacyShared_Calendars_MonthCalendar_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_LegacyShared_Calendars_DayCalendar_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_Agenda_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view) {
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
        View.displayName = "LDM_ScreenBlocks.ScreenBlock_MyEvents";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_view, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_view, Connect2_LegacyShared_Calendars_MonthCalendar_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_LegacyShared_Calendars_DayCalendar_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_Agenda_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
                inputs: {
                    ExtendedClasses: "my-events"
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
                    menu: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.menu,
                            _idProps: {
                                service: idService,
                                name: "Menu"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerLeft: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "flex: 1 0 20%;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
                            inputs: {
                                MenuAction: Connect2_OrbitMobile_MUIModel.staticEntities.menuAction.auto
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "flex: 1 0 80%;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_Width1",
                                marginLeft: "20px"
                            },
                            style: "month-header",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline), false, this, function() {
                            return ["My Timeline"];
                        }, function() {
                            return [React.createElement(OSWidgets.Popover, {
                                popoverWidth: 0,
                                style: "popover",
                                _idProps: {
                                    service: idService,
                                    name: "Popover_DateSelector"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    topContent: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "flex-center-all",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "flex: 1 0 90%; white-space: nowrap;"
                                            },
                                            value: model.getCachedValue(idService.getId("zhxmL8Yy20ymuRwOd4onmA.Value"), function() {
                                                return (OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.newDate(model.variables.currentCalendarDateVar.yearAttr, model.variables.currentCalendarDateVar.monthAttr, 9), "MMMM") + (((OS.BuiltinFunctions.year(OS.BuiltinFunctions.currDate()) === model.variables.currentCalendarDateVar.yearAttr)) ? ("") : ((" " + (model.variables.currentCalendarDateVar.yearAttr).toString()))));
                                            }, function() {
                                                return model.variables.currentCalendarDateVar.yearAttr;
                                            }, function() {
                                                return model.variables.currentCalendarDateVar.monthAttr;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Icon, {
                                            extendedProperties: {
                                                style: "flex: 1 0 10%; margin-bottom: 10px;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            icon: "sort-desc",
                                            iconSize: /*FontSize*/ 0,
                                            style: "icon",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    }),
                                    bottomContent: new PlaceholderContent(function() {
                                        return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvc_view, {
                                            inputs: {
                                                Year: model.variables.currentCalendarDateVar.yearAttr,
                                                PopoverId: idService.getId("Popover_DateSelector"),
                                                Month: model.variables.currentCalendarDateVar.monthAttr
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                dateSelected$Action: function(event_DateIn) {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MonthYearSelector DateSelected");
                                                            return controller.onHandle_DateClicked$Action(event_DateIn, true, controller.callContext(eventHandlerContext));
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
                                                uuid: "10",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })
                                }
                            })];
                        })))];
                    }),
                    title: PlaceholderContent.Empty,
                    headerRight: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "flex-center-vertical full-width flex-horizontal-right event-view",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                className: model.getCachedValue(idService.getId("Zu5AWPerQ0WPQFFYenk_OA.class"), function() {
                                    return ("margin-x-base" + (((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline)) ? (((model.variables.isFilteringVar) ? (" my-events-popup-aura") : (""))) : ("")));
                                }, function() {
                                    return model.variables.currentEventViewVar;
                                }, function() {
                                    return model.variables.isFilteringVar;
                                })
                            },
                            style: "margin-x-base",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_MyEvents_MyTimelineFilterButton_mvc_view, {
                            inputs: {
                                In_HasLoaded: !(model.variables.isFetchingMyTimelineVar),
                                In_DefaultDateRangeInMonths: model.variables.defaultDateRangeInMonthsVar,
                                In_IsShowing: (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline)
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                filter$Action: function(event_SelectedFiltersIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyEvents_MyTimelineFilterButton Filter");
                                            return controller.onHandle_MyTimelineFilter$Action(event_SelectedFiltersIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                resetFilters$Action: function(event_ResetFiltersIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyEvents_MyTimelineFilterButton ResetFilters");
                                            return controller.onHandle_ResetFilters$Action(event_ResetFiltersIn, controller.callContext(eventHandlerContext));
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
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Icon, {
                            extendedEvents: {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents/Icon onclick");
                                            return controller.onClick_Calendar$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                }
                            },
                            icon: "flag",
                            iconSize: /*Twotimes*/ 1,
                            style: "icon menu-icon-my-calendar font-size-1-5em",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    headerContent: new PlaceholderContent(function() {
                        return [$if(((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.agenda) || (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day)), false, this, function() {
                            return [React.createElement(Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_view, {
                                inputs: {
                                    Events: model.variables.calendarEventsVar,
                                    Day: model.variables.currentCalendarDateVar.dayAttr,
                                    Year: model.variables.currentCalendarDateVar.yearAttr,
                                    Month: model.variables.currentCalendarDateVar.monthAttr
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    expandToggled$Action: function(isExpandedIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Calendars/EventCalendarWeekMonth ExpandToggled");
                                            controller.onHandle_ExpandToggled$Action(isExpandedIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    dateClicked$Action: function(startIn, endIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Calendars/EventCalendarWeekMonth DateClicked");
                                                return controller.onHandle_DateClicked$Action(OS.BuiltinFunctions.dateTimeToDate(startIn), true, controller.callContext(eventHandlerContext));
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
                                    name: "FCWeekMonth",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        })];
                    }),
                    content: new PlaceholderContent(function() {
                        return [$if(((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month) || (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day)), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "view-content-wrapper",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $if((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month), false, this, function() {
                                return [$if(!(model.variables.getEventsForCalendarDataAct.hasFetchErrorAttr), false, this, function() {
                                    return [$if(model.variables.isFetchingEventsVar, false, this, function() {
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
                                        return [React.createElement(Connect2_LegacyShared_Calendars_MonthCalendar_mvc_view, {
                                            inputs: {
                                                IsStretchToFit: true,
                                                Year: model.variables.currentCalendarDateVar.yearAttr,
                                                Month: model.variables.currentCalendarDateVar.monthAttr,
                                                Events: model.variables.calendarEventsVar
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                eventClicked$Action: function(eventHostIdIn, eventIdIn) {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Calendars/MonthCalendar EventClicked");
                                                            return controller.onHandle_EventClicked$Action(OS.BuiltinFunctions.textToLongInteger(eventHostIdIn), OS.BuiltinFunctions.textToLongInteger(eventIdIn), controller.callContext(eventHandlerContext));
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
                                                name: "Months",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })];
                                }, function() {
                                    return [React.createElement(Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, {
                                        inputs: {},
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            tryAgain$Action: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/NetworkWarning TryAgain");
                                                        return controller.getEventCalendarData$Action(controller.callContext(eventHandlerContext));
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
                                            uuid: "20",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })];
                            }, function() {
                                return [];
                            }), $if((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day), false, this, function() {
                                return [React.createElement(Connect2_LegacyShared_Calendars_DayCalendar_mvc_view, {
                                    inputs: {
                                        In_SelectedDate: model.variables.currentCalendarDateVar.dateAttr,
                                        In_Events: model.variables.calendarEventsVar,
                                        In_IsFullHeight: true,
                                        In_ScrollTime: model.getCachedValue(idService.getId("Days.In_ScrollTime"), function() {
                                            return OutSystemsDebugger.handleFunctionCall(function() {
                                                return Connect2_LegacySharedController.default.getAdjustedScrollTime$Action(callContext).out_ScrollTimeOut;
                                            }, OS.DataTypes.DataTypes.Time, callContext.id);
                                        })
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        eventClicked$Action: function(eventIn) {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Calendars/DayCalendar EventClicked");
                                                    return controller.onHandle_EventClicked$Action(OS.BuiltinFunctions.textToLongInteger(eventIn.idAttr), OS.DataTypes.LongInteger.defaultValue, controller.callContext(eventHandlerContext));
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
                                        name: "Days",
                                        alias: "8"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            }, function() {
                                return [];
                            }))];
                        }, function() {
                            return [];
                        }), $if((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline), false, this, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_MyTimeline_mvc_view, {
                                inputs: {
                                    In_UpcomingEventsData: model.variables.upcomingEventsDataVar,
                                    In_IsFetchingMyTimeline: model.variables.isFetchingMyTimelineVar,
                                    In_PastEventsData: model.variables.pastEventsDataVar,
                                    In_HasFetchError: model.variables.getEventsForMyTimelineDataAct.hasFetchErrorAttr,
                                    In_IsFiltering: model.variables.isFilteringVar
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    eventClicked$Action: function(event_EventHostIdIn, event_EventIdIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline EventClicked");
                                                return controller.onHandle_EventClicked$Action(event_EventHostIdIn, event_EventIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    tryAgain$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline TryAgain");
                                                return controller.getMyTimelineData$Action(controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    onClick_Message$Action: function(event_ContactPopupDataIn, event_CountryNameIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline OnClick_Message");
                                            controller.onHandle_ContactByMessage$Action(event_ContactPopupDataIn, event_CountryNameIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    householdClicked$Action: function(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline HouseholdClicked");
                                                return controller.onHandle_HouseholdClicked$Action(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    callPhone$Action: function(in_PhoneCallInfoIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline CallPhone");
                                            controller.onHandle_PhoneCall$Action(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec(), controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    eventsSwipeUp$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline EventsSwipeUp");
                                                return controller.onHandle_SwipeUp$Action(controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    onClick_PhoneCall$Action: function(event_PhoneCallInfoIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline OnClick_PhoneCall");
                                            controller.onHandle_PhoneCall$Action(event_PhoneCallInfoIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    scrollEnding$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/MyTimeline ScrollEnding");
                                                return controller.onScrollEnding_MyTimeline$Action(controller.callContext(eventHandlerContext));
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
                                    name: "MyTimeline",
                                    alias: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.agenda), false, this, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvc_view, {
                                inputs: {
                                    In_CurrentDay: model.variables.currentCalendarDateVar.dateAttr
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
                                    uuid: "23",
                                    alias: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_Agenda_mvc_view, {
                                inputs: {
                                    In_IsFetchingData: model.variables.isFetchingEventsVar,
                                    In_Events: model.variables.pastEventsDataVar.getCurrent(callContext.iterationContext).eventsCalendarAttr,
                                    In_WeekStartDate: model.variables.currentCalendarDateVar.agendaWeekStartDateAttr
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick_PhoneCall$Action: function(event_PhoneCallInfoIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/Agenda OnClick_PhoneCall");
                                            controller.onHandle_PhoneCall$Action(OS.DataConversion.JSConversions.typeConvertRecord(event_PhoneCallInfoIn, new UBTConnect_UtilsModel.ContactByPhonePopupDataRec(), function(source, target) {
                                                target.contactPopupDataAttr.imageURLAttr = source.imageURLAttr;
                                                target.contactPopupDataAttr.entityTypeIdAttr = source.entityTypeIdAttr;
                                                target.contactPopupDataAttr.entityIdAttr = source.entityIdAttr;
                                                target.contactPopupDataAttr.isAvatarImageAttr = source.isAvatarImageAttr;
                                                target.contactPopupDataAttr.actionNameAttr = source.actionNameAttr;
                                                target.contactPopupDataAttr.nameAttr = source.nameAttr;
                                                target.contactPopupDataAttr.localityAttr = source.localityAttr;
                                                target.contactPopupDataAttr.timezoneNameAttr = source.timezoneNameAttr;
                                                target.contactPopupDataAttr.timezoneOffsetAttr = source.timezoneOffsetAttr;
                                                target.contactPopupDataAttr.showPopupAttr = source.showPopupAttr;
                                                target.contactPopupDataAttr.displayContactNumberAttr = source.displayContactNumberAttr;
                                                target.contactPopupDataAttr.isFetchingTimezoneAttr = source.isFetchingTimezoneAttr;
                                                target.contactPopupDataAttr.isLoadingAttr = source.isLoadingAttr;
                                                target.contactPopupDataAttr.showTimezoneAttr = source.showTimezoneAttr;
                                                target.contactPopupDataAttr.showImageAttr = source.showImageAttr;
                                                target.contactPopupDataAttr.countryNameAttr = source.countryNameAttr;
                                                target.contactPopupDataAttr.titleTerminatorAttr = source.titleTerminatorAttr;
                                                return target;
                                            }), controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    eventClicked$Action: function(event_EventHostIdIn, event_EventIdIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/Agenda EventClicked");
                                                return controller.onHandle_EventClicked$Action(event_EventHostIdIn, event_EventIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    onClick_Message$Action: function(event_ContactPopupDataIn, event_CountryNameIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/Agenda OnClick_Message");
                                            controller.onHandle_ContactByMessage$Action(event_ContactPopupDataIn, event_CountryNameIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    callPhone$Action: function(in_PhoneCallInfoIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/Agenda CallPhone");
                                            controller.onHandle_PhoneCall$Action(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec(), controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    householdClicked$Action: function(event_HouseholdIdIn, event_HouseholdNameIn, event_EventIdIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/Agenda HouseholdClicked");
                                                return controller.onHandle_HouseholdClicked$Action(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn, controller.callContext(eventHandlerContext));
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
                                    name: "Agenda",
                                    alias: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, {
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
                                name: "FreeSubscriptionAlert",
                                alias: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, {
                            inputs: {
                                In_CallPopupData: model.variables.contactByPhoneDataVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_Call$Action: function(event_NumberIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Call");
                                        controller.onHandle_ContactByPhonePopupEvent_Call$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                event_Cancel$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Cancel");
                                        controller.onHandle_ContactByPhonePopupEvent_Cancel$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "26",
                                alias: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, {
                            inputs: {
                                In_ContactPopupData: model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_Email$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Email");
                                            return controller.onHandle_ContactByMessage_ClickedEmail$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                event_MessageChannel$Action: function(event_ChannelIdIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_MessageChannel");
                                        controller.onHandle_ContactByMessage_Cancel$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                event_Call$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Call");
                                        controller.onHandle_ContactByMessage_Cancel$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                event_Cancel$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Cancel");
                                        controller.onHandle_ContactByMessage_Cancel$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "27",
                                alias: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    bottomBar: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.bottomBar,
                            _idProps: {
                                service: idService,
                                name: "BottomBar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    commonUI_Elements: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.commonUI_Elements,
                            _idProps: {
                                service: idService,
                                name: "CommonUI_Elements"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$debugger", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnAfterFetch_GetEventsForMyTimeline.ScrollToTopJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.SetViewContainerHeight.SetViewContainerHeightJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.SetScrollAmount.GetScrollTopJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnDestroy.ExecuteScrollCallbackJS", "Connect2_LegacyShared.controller$GetAdjustedScrollTime", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$CurrentCalendarDateRec", "FullCalendarReactive.model$EventRec", "Connect2_OrbitMobile_MUI.referencesHealth$FullCalendarReactive", "Connect2_OrbitMobile_MUI.model$EventList", "Connect2_OrbitMobile_BL.model$TimelineEventGroupRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroupList", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendarList", "Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditCalendarEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditEventFilterEvent", "Connect2_OrbitMobile_MUI.controller$ValidateSameFilters", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, FullCalendarReactiveModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_Debugger, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnAfterFetch_GetEventsForMyTimeline_ScrollToTopJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_SetViewContainerHeight_SetViewContainerHeightJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_SetScrollAmount_GetScrollTopJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnDestroy_ExecuteScrollCallbackJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getEventsForMyTimeline$DataActRefresh: -1,
                getEventsForCalendar$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getEventsForMyTimeline$DataActRefresh: [],
                getEventsForCalendar$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getEventsForMyTimeline$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2sVzRx8tB0iPY4B_su9i7g:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/DataActions.2sVzRx8tB0iPY4B_su9i7g:iiKlUDkpUVM1CsC383Q77g", "Connect2_OrbitMobile_MUI", "GetEventsForMyTimeline", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents/GetEventsForMyTimeline");
                return controller.callDataAction("DataActionGetEventsForMyTimeline", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks/ScreenBlock_MyEvents/DataActionGetEventsForMyTimeline", "MqzPTq6H3w8MOh2q2j8XGQ", function(b) {
                    model.variables.getEventsForMyTimelineDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getEventsForMyTimelineDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventsForMyTimelineDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents/GetEventsForMyTimeline On After Fetch");
                    controller._onAfterFetch_GetEventsForMyTimeline$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2sVzRx8tB0iPY4B_su9i7g", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.getEventsForCalendar$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:6ClihRcBpUu9simOd7v5Cg:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/DataActions.6ClihRcBpUu9simOd7v5Cg:z0yI+Nw6TYWsbfB_duPlpA", "Connect2_OrbitMobile_MUI", "GetEventsForCalendar", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents/GetEventsForCalendar");
                return controller.callDataAction("DataActionGetEventsForCalendar", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks/ScreenBlock_MyEvents/DataActionGetEventsForCalendar", "K2rlG7mEFQsfo09Uv+Cwyw", function(b) {
                    model.variables.getEventsForCalendarDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getEventsForCalendarDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventsForCalendarDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents/GetEventsForCalendar On After Fetch");
                    controller._onAfterFetch_GetEventsForCalendar$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:6ClihRcBpUu9simOd7v5Cg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getEventsForMyTimeline$DataActRefresh", "getEventsForCalendar$DataActRefresh"];
        // Client Actions
        Controller.prototype._onHandle_ContactByMessage_Cancel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByMessage_Cancel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:NJWlCdFVSkeO01deSvPFdg:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.NJWlCdFVSkeO01deSvPFdg:r1lp8XhJfhgTVfP++cDDkA", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TuFsdrUnqUWhx+iQdQE8pw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hzBJWIEskEy7r+ooWve5og", callContext.id);
                // ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
                model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lyjxiNjPkk+JRsM6M5_PMQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:NJWlCdFVSkeO01deSvPFdg", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_GetEventsForMyTimeline$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetEventsForMyTimeline");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:57K6EboQwUuHXBJVfMmtSQ:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.57K6EboQwUuHXBJVfMmtSQ:N1pd6fttq2fx3nl8oo_qzg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventsForMyTimeline", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7546m1+UWUq3kwssi8mmNQ", callContext.id);
                // IsFiltering
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JhSB9pYRh0C3Bmk4Sd9MWA", callContext.id) && model.variables.isFilteringVar)) {
                    // Set Timeline Events
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g0oEjG_Ys0Gx2HwuezImAg", callContext.id);
                    // PastEventsData = GetEventsForMyTimeline.Out_PastEvents
                    model.variables.pastEventsDataVar = model.variables.getEventsForMyTimelineDataAct.out_PastEventsOut;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g0oEjG_Ys0Gx2HwuezImAg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // UpcomingEventsData = GetEventsForMyTimeline.Out_UpcomingEvents
                    model.variables.upcomingEventsDataVar = model.variables.getEventsForMyTimelineDataAct.out_UpcomingEventsOut;
                    // MyTimeline?
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GKlFmGBf9EWse4AeErrr7A", callContext.id) && (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L2kJ258kJ02BigU3ZQSepA", callContext.id);
                        controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnAfterFetch_GetEventsForMyTimeline_ScrollToTopJS, "ScrollToTop", "OnAfterFetch_GetEventsForMyTimeline", null, function($parameters) {}, {}, {});
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V9PVqxhzDEG9aRj5B7rbvA", callContext.id);
                    // Execute Action: ListAppendAll_Past
                    OS.SystemActions.listAppendAll(model.variables.pastEventsDataVar, model.variables.getEventsForMyTimelineDataAct.out_PastEventsOut, callContext);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TN_3FPVQQEWF+d2iShobbw", callContext.id);
                    // Execute Action: ListAppendAll_Upcoming
                    OS.SystemActions.listAppendAll(model.variables.upcomingEventsDataVar, model.variables.getEventsForMyTimelineDataAct.out_UpcomingEventsOut, callContext);
                }

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dZ1uiEsu_EOInLo1WzJIZA", callContext.id);
                // IsFetchingMyTimeline = False
                model.variables.isFetchingMyTimelineVar = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fSSKekYasUGPq0CZADh9gg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:57K6EboQwUuHXBJVfMmtSQ", callContext.id);
            }

        };
        Controller.prototype._onHandle_ContactByPhonePopupEvent_Cancel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByPhonePopupEvent_Cancel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:z+AkIXw+j0O1BouelX9_FA:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.z+AkIXw+j0O1BouelX9_FA:_p6MuHC2uhkXkjsS34khZg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhonePopupEvent_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cDjOS03w6UukcyvvX06SVg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mk+NACXN+kC0sB9FCd1zdA", callContext.id);
                // ContactByPhoneData.ContactPopupData.ShowPopup = False
                model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vOnt5gB8qEazX3Ja1d1BfA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:z+AkIXw+j0O1BouelX9_FA", callContext.id);
            }

        };
        Controller.prototype._getEventCalendarData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetEventCalendarData");
            callContext = controller.callContext(callContext);
            var getCurrentTimeInMill_EndVar = new OS.DataTypes.VariableHolder();
            var getCurrentTimeInMill_StartVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCurrentTimeInMill_EndVar = getCurrentTimeInMill_EndVar;
            varBag.getCurrentTimeInMill_StartVar = getCurrentTimeInMill_StartVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:zcJmI8xY7UK66gVKKjpYuw:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.zcJmI8xY7UK66gVKKjpYuw:o2RWo7VmBQCNmMsDX2SE2Q", "Connect2_OrbitMobile_MUI", "GetEventCalendarData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TqEpNW8WXEW+E+1lRi6apQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6pdxvl4Du0ijoOCjysCXtg", callContext.id);
                // IsFetchingEvents = True
                model.variables.isFetchingEventsVar = true;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qs6Sr4uk_EuXt0wa_pu4Eg", callContext.id);
                // Execute Action: GetCurrentTimeInMill_Start
                getCurrentTimeInMill_StartVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kPlZ2tQF7UqeBZdrN8mtxw", callContext.id);
                // Refresh Query: GetEventsForCalendar
                var result = controller.getEventsForCalendar$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uYOOooThaUGlc3RzyYyz2A", callContext.id);
                    // Execute Action: GetCurrentTimeInMill_End
                    getCurrentTimeInMill_EndVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bDKxpmUDP0W+Ppk+uvf40w", callContext.id);
                    // Execute Action: AddAuditRequestAPIEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.requestAPI_CalendarEvents, getCurrentTimeInMill_EndVar.value.out_TimestampOut.sub(getCurrentTimeInMill_StartVar.value.out_TimestampOut), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I12uvfsy60aByZm9qppQvg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zcJmI8xY7UK66gVKKjpYuw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zcJmI8xY7UK66gVKKjpYuw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_ContactByMessage_ClickedEmail$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByMessage_ClickedEmail");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kbjnJknMVUiKewXwNutN_w:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.kbjnJknMVUiKewXwNutN_w:X84bAMVTJRiZlcHGTekfsQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage_ClickedEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ma7uy8iHgU6YaT+NWgoWpg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UE_lP9_rF02kCW69RmAHSw", callContext.id);
                // Execute Action: OnHandle_ContactByMessage_Cancel
                controller._onHandle_ContactByMessage_Cancel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YvY5KKEvY0a2VIn3nJrclw", callContext.id);
                // Trigger Event: NavigateTo_ContactByEmail
                return controller.navigateTo_ContactByEmail$Action(model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr, "", model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tUBKweFax0GqBspzWeKIsg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kbjnJknMVUiKewXwNutN_w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kbjnJknMVUiKewXwNutN_w", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._selectEventView$Action = function(eventViewIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SelectEventView");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.SelectEventView$vars"))());
            vars.value.eventViewIdInLocal = eventViewIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:3mD3LKCiCUGURYOJBGknZw:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.3mD3LKCiCUGURYOJBGknZw:qxMPQTy6822h4urCBrevOw", "Connect2_OrbitMobile_MUI", "SelectEventView", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dkmDbexGjk2rR6ok49ZeFg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Same View?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q6KaUr0EqUas13M8FTusaQ", callContext.id) && (model.variables.currentEventViewVar === vars.value.eventViewIdInLocal))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Py9umxpUlUCxgQSaadCWig", callContext.id);
                    } else {
                        // Set Vars
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+KBkOvZ4OU2cvAeZPPDvWQ", callContext.id);
                        // CurrentEventView = EventViewId
                        model.variables.currentEventViewVar = vars.value.eventViewIdInLocal;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+KBkOvZ4OU2cvAeZPPDvWQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // IsWeekMonthCalendarExpanded = False
                        model.variables.isWeekMonthCalendarExpandedVar = false;
                        // My Timeline?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TdF0mzDpN0+v82ar_MPX3A", callContext.id) && (vars.value.eventViewIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline))) {
                                // Has Timeline Data?
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JdLCBjVd9kaSEvuI9D4KfQ", callContext.id) && !((!(model.variables.pastEventsDataVar.isEmpty) || !(model.variables.upcomingEventsDataVar.isEmpty))))) {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G4pcyhiUVkCc78OijEUKbA", callContext.id);
                                        // Execute Action: GetMyTimelineData
                                        return controller._getMyTimelineData$Action(callContext);
                                    }

                                });
                            } else {
                                // Has Events Data?
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:42YtXwRSeUyADfuZdnhPXQ", callContext.id) && !(!(model.variables.calendarEventsVar.isEmpty)))) {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eqSppqHs0E+38RkIgNxW0g", callContext.id);
                                        // Execute Action: GetEventCalendarData
                                        return controller._getEventCalendarData$Action(callContext);
                                    }

                                });
                            }

                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TwANEImrVEigDPlfZvwS1w", callContext.id);
                            // Execute Action: AddAuditCalendarEvent
                            model.flush();
                            return Connect2_OrbitMobile_MUIController.default.addAuditCalendarEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarViewChanged, vars.value.eventViewIdInLocal, OS.BuiltinFunctions.nullDate(), callContext);
                        }).then(function() {
                            // Day or Month?
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uZjuEhIjk0qzbrh9IPhG6Q", callContext.id) && ((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day) || (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month)))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+e3A+Yjw+k+Up6IWmigoPg", callContext.id);
                                // Execute Action: SetViewContainerHeight
                                controller._setViewContainerHeight$Action((((vars.value.eventViewIdInLocal) !== (Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day)) && ((vars.value.eventViewIdInLocal) !== (Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month))), callContext);
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VKMRKDprEUek1FbvusLfDQ", callContext.id);
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VKMRKDprEUek1FbvusLfDQ", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:3mD3LKCiCUGURYOJBGknZw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:3mD3LKCiCUGURYOJBGknZw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.SelectEventView$vars", [{
            name: "EventViewId",
            attrName: "eventViewIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._logClickedEventAudit$Action = function(in_AuditEventIdIn, in_EventHostIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("LogClickedEventAudit");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.LogClickedEventAudit$vars"))());
            vars.value.in_AuditEventIdInLocal = in_AuditEventIdIn;
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            var listFilter_CalendarVar = new OS.DataTypes.VariableHolder();
            var listFilter_UpcomingVar = new OS.DataTypes.VariableHolder();
            var listFilter_PastEventsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilter_CalendarVar = listFilter_CalendarVar;
            varBag.listFilter_UpcomingVar = listFilter_UpcomingVar;
            varBag.listFilter_PastEventsVar = listFilter_PastEventsVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KV_fL80cQk6VbdEj16KdFw:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.KV_fL80cQk6VbdEj16KdFw:j+fAPGgKPzuejK0tB3a4Pw", "Connect2_OrbitMobile_MUI", "LogClickedEventAudit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TiU8jS8Ha0uV73eebHmmfw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Calendar Event?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Id4HONioYUafE4lVwsuVPQ", callContext.id) && (vars.value.in_AuditEventIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarEventClicked))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4MbsLR0gvUiWeRlFZYVJrg", callContext.id);
                        // Execute Action: ListFilter_Calendar
                        listFilter_CalendarVar.value = OS.SystemActions.listFilter(model.variables.calendarEventsVar, function(p) {
                            return OS.BuiltinFunctions.textToLongInteger(p.idAttr).equals(vars.value.in_EventHostIdInLocal);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:joz+OzH5aU+MIJpPfzqXtg", callContext.id);
                        // Execute Action: AddAuditClickedEvent_Calendar
                        model.flush();
                        return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(vars.value.in_AuditEventIdInLocal, OS.BuiltinFunctions.textToLongInteger(listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).idAttr), listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).titleAttr, OS.BuiltinFunctions.dateTimeToDate(listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).startAttr), listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).extraAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qYehjZ+4WEqZ5LyTyDcRVw", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p4jzd+HcY0i7fkLoKWim+w", callContext.id);
                        // Execute Action: ListFilter_Upcoming
                        listFilter_UpcomingVar.value = OS.SystemActions.listFilter(model.variables.upcomingEventsDataVar, function(p) {
                            return p.eventHostIdAttr.equals(vars.value.in_EventHostIdInLocal);
                        }, callContext);

                        // Found Data?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZwKA_NvhSU+c_Afxrb3s8w", callContext.id) && !(listFilter_UpcomingVar.value.filteredListOut.isEmpty))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:90URicE980OpLs_FZ46cag", callContext.id);
                                // Execute Action: AddAuditClickedEvent_Upcoming
                                model.flush();
                                return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(vars.value.in_AuditEventIdInLocal, listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventHostIdAttr, listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventNameAttr, OS.BuiltinFunctions.textToDate(listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventDateAttr), listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).hostLocalityAttr, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qYehjZ+4WEqZ5LyTyDcRVw", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gjGxpOEe0kSgI6yF46a71A", callContext.id);
                                // Execute Action: ListFilter_PastEvents
                                listFilter_PastEventsVar.value = OS.SystemActions.listFilter(model.variables.pastEventsDataVar.getCurrent(callContext.iterationContext).eventsCalendarAttr, function(p) {
                                    return p.eventHostIdAttr.equals(vars.value.in_EventHostIdInLocal);
                                }, callContext);

                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VUNNk6GUIUOu6IVHoVWeWw", callContext.id);
                                // Execute Action: AddAuditClickedEvent_PastEvent
                                model.flush();
                                return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(vars.value.in_AuditEventIdInLocal, listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventHostIdAttr, listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventNameAttr, OS.BuiltinFunctions.textToDate(listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventDateAttr), listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).hostLocalityAttr, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qYehjZ+4WEqZ5LyTyDcRVw", callContext.id);
                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KV_fL80cQk6VbdEj16KdFw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KV_fL80cQk6VbdEj16KdFw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.LogClickedEventAudit$vars", [{
            name: "In_AuditEventId",
            attrName: "in_AuditEventIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_EventHostId",
            attrName: "in_EventHostIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onHandle_SwipeUp$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_SwipeUp");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:E1TsMQBhJUCFibftPuzxig:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.E1TsMQBhJUCFibftPuzxig:Lg+rpLZsRJ9G3DJ83t9Vvw", "Connect2_OrbitMobile_MUI", "OnHandle_SwipeUp", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_CgVMIJ0D0WeQGLZd1OcQw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b3v7iAxLBEy501RpnzgBHw", callContext.id);
                // Execute Action: IncrementMyTimelineDates
                controller._incrementMyTimelineDates$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nLa59ein60K6Vw_Bt8TROw", callContext.id);
                // Refresh Query: GetEventsForMyTimeline
                var result = controller.getEventsForMyTimeline$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e+Ago30CxEurhE092_KgcQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E1TsMQBhJUCFibftPuzxig", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E1TsMQBhJUCFibftPuzxig", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onScrollEnding_MyTimeline$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnScrollEnding_MyTimeline");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnScrollEnding_MyTimeline$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wvJtUxj4gkiEO_5dqreB7A:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.wvJtUxj4gkiEO_5dqreB7A:BJDMsj0AhOLjbrCbZU3MpQ", "Connect2_OrbitMobile_MUI", "OnScrollEnding_MyTimeline", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2Jho55fyzEa_BMVKEHS7Cg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0NncSTWUbE+8AWKYVwfPIw", callContext.id) && model.variables.isFetchingMyTimelineVar)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8qdbVFndEkyx3tBdZRM5iw", callContext.id);
                    } else {
                        // Is Filtering?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OmIEhfFhRUu4Uwn_2dujqQ", callContext.id) && model.variables.isFilteringVar)) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cfPsSVlw5keNLp2oG2j60w", callContext.id);
                            } else {
                                // Max Date Limit reached?
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6iliy28gb0qjFrOyzUuF+Q", callContext.id) && OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.diffDays(model.variables.pastEventFiltersVar.fromDateAttr, OS.BuiltinFunctions.currDate())).gt(vars.value.maxAgeDaysFetchThresholdVar))) {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DUQeEXjCmkm4F0V5Ldsnkg", callContext.id);
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t2Mpepqtp0uFnGCyKmxmWg", callContext.id);
                                        // Execute Action: IncrementMyTimelineDates
                                        controller._incrementMyTimelineDates$Action(callContext);
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n+MCQ2540UOomT1obyPpZg", callContext.id);
                                        // Execute Action: GetMyTimelineData
                                        return controller._getMyTimelineData$Action(callContext).then(function() {
                                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:frp5Td+5akq01XDb8Q_DPQ", callContext.id);
                                        });
                                    }

                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wvJtUxj4gkiEO_5dqreB7A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wvJtUxj4gkiEO_5dqreB7A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnScrollEnding_MyTimeline$vars", [{
            name: "MaxAgeDaysFetchThreshold",
            attrName: "maxAgeDaysFetchThresholdVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.BuiltinFunctions.integerToLongInteger(7300);
            }
        }]);
        Controller.prototype._onAfterFetch_GetEventsForCalendar$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetEventsForCalendar");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:0Oy_VGkQbE6TYGLcdISJ9A:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.0Oy_VGkQbE6TYGLcdISJ9A:iMFypckRTyHIVbXNmtHiyA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventsForCalendar", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3qHWgG51gUGka+hHkkX8wQ", callContext.id);
                // Set Calendar Events Data
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J_ohJhzim0iUbQ3L8qvdlQ", callContext.id);
                // CalendarEvents = GetEventsForCalendar.Out_CalendarEvents
                model.variables.calendarEventsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getEventsForCalendarDataAct.out_CalendarEventsOut, new Connect2_OrbitMobile_MUIModel.EventList(), function(source, target) {
                    target.idAttr = OS.BuiltinFunctions.longIntegerToText(source.eventHostIdAttr);
                    target.titleAttr = source.eventNameAttr;
                    target.startAttr = OS.BuiltinFunctions.textToDateTime(source.eventDateAttr);
                    target.endAttr = OS.BuiltinFunctions.addHours(OS.BuiltinFunctions.textToDateTime(source.eventDateAttr), 2);
                    target.descriptionAttr = (source.hostFullNameAttr + ((((source.hostLocalityAttr) !== (""))) ? (((" (" + source.hostLocalityAttr) + ")")) : ("")));
                    target.extraAttr = OS.BuiltinFunctions.longIntegerToText(source.eventIdAttr);
                    target.typeAttr = OS.BuiltinFunctions.identifierToInteger(Connect2_OrbitMobile_MUIModel.staticEntities.eventCategory.lDM);
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V91WMg1c5E6cgNkKj+wYpw", callContext.id);
                // IsFetchingEvents = False
                model.variables.isFetchingEventsVar = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5hyV2Y18fUeyUYeq9lM5lQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:0Oy_VGkQbE6TYGLcdISJ9A", callContext.id);
            }

        };
        Controller.prototype._onHandle_ExpandToggled$Action = function(isExpandedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ExpandToggled");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_ExpandToggled$vars"))());
            vars.value.isExpandedInLocal = isExpandedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wIyDbDuEo0aHbvdKT3jekg:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.wIyDbDuEo0aHbvdKT3jekg:qQo8pKJvdY639dnlVxBBDQ", "Connect2_OrbitMobile_MUI", "OnHandle_ExpandToggled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fx4uxkgQnEy_IThzeYvekA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EmIZUHmi4U6ZtEK_QJ8ylw", callContext.id);
                // IsWeekMonthCalendarExpanded = IsExpanded
                model.variables.isWeekMonthCalendarExpandedVar = vars.value.isExpandedInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V51r8jMeh0245VksjQ0MgQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wIyDbDuEo0aHbvdKT3jekg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_ExpandToggled$vars", [{
            name: "IsExpanded",
            attrName: "isExpandedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_ContactByMessage$Action = function(event_ContactPopupDataIn, event_CountryNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByMessage");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_ContactByMessage$vars"))());
            vars.value.event_ContactPopupDataInLocal = event_ContactPopupDataIn.clone();
            vars.value.event_CountryNameInLocal = event_CountryNameIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yOOQcBWaNUi2JRCzywUVaA:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.yOOQcBWaNUi2JRCzywUVaA:LPKmcmgIfZ3GaGLhj7PlZg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+RWGqF72SEyEE8LkzXtVwA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aAiYUpmpr0yhkiPhrygngw", callContext.id);
                // ContactByMessagePopupData = Event_ContactPopupData
                model.variables.contactByMessagePopupDataVar = OS.DataConversion.JSConversions.typeConvertRecord(vars.value.event_ContactPopupDataInLocal, new Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord(), function(source, target) {
                    target.countryNameAttr = vars.value.event_CountryNameInLocal;
                    target.uI_ContactByMessage_WrapperDataAttr.emailAttr = source.emailAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.phoneAttr = source.phoneAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.isComboEmailAndPhoneAttr = source.isComboEmailAndPhoneAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr = source.contactPopupDataAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MLtYkhZ_hUG49EqinxN02Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yOOQcBWaNUi2JRCzywUVaA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_ContactByMessage$vars", [{
            name: "Event_ContactPopupData",
            attrName: "event_ContactPopupDataInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec();
            },
            complexType: UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec
        }, {
            name: "Event_CountryName",
            attrName: "event_CountryNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._setViewContainerHeight$Action = function(isResetIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetViewContainerHeight");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.SetViewContainerHeight$vars"))());
            vars.value.isResetInLocal = isResetIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+5Lwe7T95Eu+rTnhCGFDFA:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.+5Lwe7T95Eu+rTnhCGFDFA:rUx3vlbnWqe6qrCZbkX2WA", "Connect2_OrbitMobile_MUI", "SetViewContainerHeight", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dqzOaUljz06rL7UMCZth2Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S2HmoiyAEUOdu+xzJwDsPQ", callContext.id);
                controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_SetViewContainerHeight_SetViewContainerHeightJS, "SetViewContainerHeight", "SetViewContainerHeight", {
                    IsReset: OS.DataConversion.JSNodeParamConverter.to(vars.value.isResetInLocal, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ild5EmtYJUikpovC15EK_Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+5Lwe7T95Eu+rTnhCGFDFA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.SetViewContainerHeight$vars", [{
            name: "IsReset",
            attrName: "isResetInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_Calendar$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Calendar");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:n6VcgPYlVEa8fHTzkF8njA:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.n6VcgPYlVEa8fHTzkF8njA:6sqSHkhgmgrsu54VcN+9OQ", "Connect2_OrbitMobile_MUI", "OnClick_Calendar", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZCiM49I8oUuQ5zbWL0pwzg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xb0NtPY4l0OVjoWXVFevDA", callContext.id);
                // Trigger Event: NavigateToMyCalendar
                return controller.navigateToMyCalendar$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s2okl89Th06OlgN3kP9pqw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:n6VcgPYlVEa8fHTzkF8njA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:n6VcgPYlVEa8fHTzkF8njA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._incrementMyTimelineDates$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("IncrementMyTimelineDates");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:T6rkgdNlXEuGssLZspesmg:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.T6rkgdNlXEuGssLZspesmg:iw1QGfaCvJHtt8F8fCWn3w", "Connect2_OrbitMobile_MUI", "IncrementMyTimelineDates", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HlmAp7YKcESuImLlJk53+A", callContext.id);
                // Set Dates
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:brtINnUDDU6Z9N7lfRvkDg", callContext.id);
                // PastEventFilters.ToDate = PastEventFilters.FromDate
                model.variables.pastEventFiltersVar.toDateAttr = model.variables.pastEventFiltersVar.fromDateAttr;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:brtINnUDDU6Z9N7lfRvkDg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // PastEventFilters.FromDate = DateTimeToDate
                model.variables.pastEventFiltersVar.fromDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(model.variables.pastEventFiltersVar.fromDateAttr, -model.variables.defaultDateRangeInMonthsVar));
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4zMfkrM80kKQG17ANu+auw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:T6rkgdNlXEuGssLZspesmg", callContext.id);
            }

        };
        Controller.prototype._onHandle_MyTimelineFilter$Action = function(in_SelectedFiltersIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_MyTimelineFilter");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_MyTimelineFilter$vars"))());
            vars.value.in_SelectedFiltersInLocal = in_SelectedFiltersIn.clone();
            var validateSameFiltersVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.validateSameFiltersVar = validateSameFiltersVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:07I0ggCn70yF05iB71Ylfw:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.07I0ggCn70yF05iB71Ylfw:oqZaFPRC6CpJFYR+LUYcFg", "Connect2_OrbitMobile_MUI", "OnHandle_MyTimelineFilter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:udMSutQISUGXktiTWGQ41A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:k+3dqROugUCsOSmk0x2bjw", callContext.id);
                // Execute Action: ValidateSameFilters
                validateSameFiltersVar.value = Connect2_OrbitMobile_MUIController.default.validateSameFilters$Action(vars.value.in_SelectedFiltersInLocal, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.pastEventFiltersVar, new Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec(), function(source, target) {
                    target.fromDateAttr = source.fromDateAttr;
                    target.toDateAttr = source.toDateAttr;
                    return target;
                }), callContext);

                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L5pwaYtbOUSVQP8jDKLbzA", callContext.id) && validateSameFiltersVar.value.out_SameFiltersOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J2bCWEcvKUa5vqqo3bMhCg", callContext.id);
                        // Execute Action: AddAuditEventFilterEvent_SameFilters
                        model.flush();
                        return Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineApplyFilter, vars.value.in_SelectedFiltersInLocal, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5_SfmSbqRkeUxqUiZnx7lw", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GhS6ZFdAGEOpXp+bUKvHEA", callContext.id);
                        // Execute Action: ListClear_PastEvents
                        OS.SystemActions.listClear(model.variables.pastEventsDataVar, callContext);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7rABvnOpGEKJegVrVw6Y1w", callContext.id);
                        // Execute Action: ListClear_Upcoming
                        OS.SystemActions.listClear(model.variables.upcomingEventsDataVar, callContext);
                        // IsFiltering
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kkReB3poPk2MnccFknayqA", callContext.id);
                        // IsFiltering = True
                        model.variables.isFilteringVar = true;
                        // Set Filters
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z5YMY9VTlUWSusuOQFoXbQ", callContext.id);
                        // PastEventFilters = In_SelectedFilters
                        model.variables.pastEventFiltersVar = vars.value.in_SelectedFiltersInLocal;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vhthNtQSNEmt1BE3cx7OsA", callContext.id);
                        // Execute Action: GetMyTimelineData
                        return controller._getMyTimelineData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H5ixkMgv8UKgy9xJnrnJyQ", callContext.id);
                            // Execute Action: AddAuditEventFilterEvent
                            model.flush();
                            return Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineApplyFilter, vars.value.in_SelectedFiltersInLocal, callContext);
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AivJD3RC00aoIbV9DoySVw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:07I0ggCn70yF05iB71Ylfw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:07I0ggCn70yF05iB71Ylfw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_MyTimelineFilter$vars", [{
            name: "In_SelectedFilters",
            attrName: "in_SelectedFiltersInLocal",
            mandatory: false,
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
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:QRMwh0n1RkyvyRHYYUteFg:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.QRMwh0n1RkyvyRHYYUteFg:s9Iy4dLr3u4GQfHTJG5JVQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LSYWI8j+ekeCcofcDj6Djw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mklOFTVs_Uy63vaj38_RHg", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pbsfIlmyX0ODqBloy_GkBw", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                        // Day or Month?
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TAS5tcsds06CNozvpCOYAA", callContext.id) && ((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day) || (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month)))) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qSEzhyoPf0KCd6FRnNuIeg", callContext.id);
                            // Execute Action: SetViewContainerHeight
                            controller._setViewContainerHeight$Action(false, callContext);
                        }

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DT2zUpq05EekepfYcLrG1g", callContext.id);
                        // IsFetchingEvents = False
                        model.variables.isFetchingEventsVar = false;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DT2zUpq05EekepfYcLrG1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // IsFetchingMyTimeline = False
                        model.variables.isFetchingMyTimelineVar = false;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IrCUZgNVW0eHQzpsQXKmdw", callContext.id);
                    } else {
                        // Past Events View?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tMMfJlOvGUSoZ3FhK_UXcg", callContext.id) && (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eYy6F7Dc60aojSdfgSQTxw", callContext.id);
                                // Execute Action: GetMyTimelineData
                                return controller._getMyTimelineData$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zVvYnpuqzEmpmlSa6vXI5w", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WISe3ObiREC2LLuoTu6qvw", callContext.id);
                                // Execute Action: GetEventCalendarData
                                return controller._getEventCalendarData$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zVvYnpuqzEmpmlSa6vXI5w", callContext.id);
                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:QRMwh0n1RkyvyRHYYUteFg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:QRMwh0n1RkyvyRHYYUteFg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_PhoneCall$Action = function(event_CallPopupDataIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_PhoneCall");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_PhoneCall$vars"))());
            vars.value.event_CallPopupDataInLocal = event_CallPopupDataIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:EWY5iq0ZbEas0P2OuM3z_w:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.EWY5iq0ZbEas0P2OuM3z_w:woxukeLFxbx2OJeW5BLcRQ", "Connect2_OrbitMobile_MUI", "OnHandle_PhoneCall", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LFFhbLqVVkyV2o_fK0Ddtg", callContext.id);
                // Has Phone Number
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yKW5O155Rk+va3YtwnCxTw", callContext.id) && !(((((vars.value.event_CallPopupDataInLocal.phoneAttr === "") && (vars.value.event_CallPopupDataInLocal.mobilePhoneAttr === "")) && (vars.value.event_CallPopupDataInLocal.homePhoneAttr === "")) && (vars.value.event_CallPopupDataInLocal.workPhoneAttr === ""))))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2vrbOBwZ8Um7er8aYvJKDA", callContext.id);
                    // ContactByPhoneData = Event_CallPopupData
                    model.variables.contactByPhoneDataVar = vars.value.event_CallPopupDataInLocal;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O54g9auAQ0OcLcBFhGFXLg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tOCrdlDaSECfy1DmMmYlLA", callContext.id);
                    OS.FeedbackMessageService.showFeedbackMessage("Phone number is not available", /*Info*/ 0);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O54g9auAQ0OcLcBFhGFXLg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EWY5iq0ZbEas0P2OuM3z_w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_PhoneCall$vars", [{
            name: "Event_CallPopupData",
            attrName: "event_CallPopupDataInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.ContactByPhonePopupDataRec();
            },
            complexType: UBTConnect_UtilsModel.ContactByPhonePopupDataRec
        }]);
        Controller.prototype._onHandle_DateClicked$Action = function(in_ClickedDateIn, in_IsToAuditIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_DateClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_DateClicked$vars"))());
            vars.value.in_ClickedDateInLocal = in_ClickedDateIn;
            vars.value.in_IsToAuditInLocal = in_IsToAuditIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:p7L6jVfewUGu0GaZ80esFA:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.p7L6jVfewUGu0GaZ80esFA:4Toyt3LmQaFq5berwOgOKA", "Connect2_OrbitMobile_MUI", "OnHandle_DateClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AsnUkEY9V0+W6nNljlhAEw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Set Dates
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IVC5F0+AOEaGIbkQjNUdXQ", callContext.id);
                // CurrentCalendarDate.Year = Year
                model.variables.currentCalendarDateVar.yearAttr = OS.BuiltinFunctions.year(vars.value.in_ClickedDateInLocal);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IVC5F0+AOEaGIbkQjNUdXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CurrentCalendarDate.Month = Month
                model.variables.currentCalendarDateVar.monthAttr = OS.BuiltinFunctions.month(vars.value.in_ClickedDateInLocal);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IVC5F0+AOEaGIbkQjNUdXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // CurrentCalendarDate.Day = Day
                model.variables.currentCalendarDateVar.dayAttr = OS.BuiltinFunctions.day(vars.value.in_ClickedDateInLocal);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IVC5F0+AOEaGIbkQjNUdXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // CurrentCalendarDate.AgendaWeekStartDate = AddDays
                model.variables.currentCalendarDateVar.agendaWeekStartDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(vars.value.in_ClickedDateInLocal, (0 - OS.BuiltinFunctions.dayOfWeek(vars.value.in_ClickedDateInLocal))));
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IVC5F0+AOEaGIbkQjNUdXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // CurrentCalendarDate.Date = In_ClickedDate
                model.variables.currentCalendarDateVar.dateAttr = vars.value.in_ClickedDateInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mqk0YO0FtE2I+4rt7pBIMQ", callContext.id);
                // Execute Action: CheckDateBoundaries
                return controller._checkDateBoundaries$Action(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_ClickedDateInLocal), callContext).then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bX3nDutE4kSGuelBy4o+jw", callContext.id) && vars.value.in_IsToAuditInLocal)) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_7APGggbgE2p75gCK_yYug", callContext.id);
                            // Execute Action: AddAuditCalendarEvent
                            model.flush();
                            return Connect2_OrbitMobile_MUIController.default.addAuditCalendarEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarDateChanged, 0, vars.value.in_ClickedDateInLocal, callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AuIDv+aMdUK0dzCGtuZR3g", callContext.id);
                            });
                        } else {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AuIDv+aMdUK0dzCGtuZR3g", callContext.id);
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p7L6jVfewUGu0GaZ80esFA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p7L6jVfewUGu0GaZ80esFA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_DateClicked$vars", [{
            name: "In_ClickedDate",
            attrName: "in_ClickedDateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Date,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }, {
            name: "In_IsToAudit",
            attrName: "in_IsToAuditInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return true;
            }
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
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:SP8foauqL0SFwgqw36Bn9w:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.SP8foauqL0SFwgqw36Bn9w:YR+73mI_J0nQwiVwRWYHhA", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1K_1MVnkQU2H8FpP2mxztA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AaFvCeYQsk+uUak5F7w3gQ", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:drTk35lCB06ZlgIkUN+a9Q", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HA1NhFcfXkuKHvEoD9rWeA", callContext.id);
                    // ContactByPhoneData.ContactPopupData.ShowPopup = False
                    model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HA1NhFcfXkuKHvEoD9rWeA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
                    model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
                    // Day or Month?
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FV6WPrzgok6zpOC4WnBwiA", callContext.id) && ((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day) || (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month)))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FoR58614MkOOBZpDD1rcBQ", callContext.id);
                        // IsFetchingEvents = True
                        model.variables.isFetchingEventsVar = true;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mjnzp4FgNky9BdhiOTOBUw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mjnzp4FgNky9BdhiOTOBUw", callContext.id);
                    }

                } else {
                    // Set Default Date values
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Zytn1uAnEe2ige0WHwz8w", callContext.id);
                    // CurrentCalendarDate.Day = Day
                    model.variables.currentCalendarDateVar.dayAttr = OS.BuiltinFunctions.day(OS.BuiltinFunctions.currDate());
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Zytn1uAnEe2ige0WHwz8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // CurrentCalendarDate.Month = Month
                    model.variables.currentCalendarDateVar.monthAttr = OS.BuiltinFunctions.month(OS.BuiltinFunctions.currDate());
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Zytn1uAnEe2ige0WHwz8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // CurrentCalendarDate.Year = Year
                    model.variables.currentCalendarDateVar.yearAttr = OS.BuiltinFunctions.year(OS.BuiltinFunctions.currDate());
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Zytn1uAnEe2ige0WHwz8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // CurrentCalendarDate.Date = CurrDate
                    model.variables.currentCalendarDateVar.dateAttr = OS.BuiltinFunctions.currDate();
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Zytn1uAnEe2ige0WHwz8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                    // CurrentCalendarDate.AgendaWeekStartDate = AddDays
                    model.variables.currentCalendarDateVar.agendaWeekStartDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), (0 - OS.BuiltinFunctions.dayOfWeek(OS.BuiltinFunctions.currDate()))));
                    // Set Filters
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7+I5TcSR4EG86MDCKCv3Ew", callContext.id);
                    // EventFilters.FromDate = DateTimeToDate
                    model.variables.eventFiltersVar.fromDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(OS.BuiltinFunctions.currDate(), -model.variables.defaultDateRangeInMonthsVar));
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7+I5TcSR4EG86MDCKCv3Ew", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // EventFilters.ToDate = DateTimeToDate
                    model.variables.eventFiltersVar.toDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(OS.BuiltinFunctions.currDate(), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(model.variables.defaultDateRangeInMonthsVar).div(OS.BuiltinFunctions.integerToDecimal(2))))));
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7+I5TcSR4EG86MDCKCv3Ew", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // PastEventFilters.FromDate = EventFilters.FromDate
                    model.variables.pastEventFiltersVar.fromDateAttr = model.variables.eventFiltersVar.fromDateAttr;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7+I5TcSR4EG86MDCKCv3Ew", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // PastEventFilters.ToDate = DateTimeToDate
                    model.variables.pastEventFiltersVar.toDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), 7));
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tviHnjQdTE6kGB6Z7_ciyw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SP8foauqL0SFwgqw36Bn9w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_EventClicked$Action = function(in_EventHostIdIn, in_EventIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_EventClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_EventClicked$vars"))());
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            vars.value.in_EventIdInLocal = in_EventIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:DgZap1okEECwE7uIXFyZ6A:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.DgZap1okEECwE7uIXFyZ6A:WNnJ6f3ol5lKjgs4WKfu1Q", "Connect2_OrbitMobile_MUI", "OnHandle_EventClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LoEUCEsyS0aCtXfFWDbT7w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lHFcZkIeM02no9NuWSP8hA", callContext.id);
                // Execute Action: LogClickedEventAudit
                return controller._logClickedEventAudit$Action((((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month)) ? (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarEventClicked) : (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineEventClicked)), vars.value.in_EventHostIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z9U4CSXL0UqQzYUXCQfZoQ", callContext.id);
                    // Trigger Event: NavigateTo_EventDetail
                    return controller.navigateTo_EventDetail$Action(vars.value.in_EventHostIdInLocal, vars.value.in_EventIdInLocal, callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3q32ZV3WCk6HLPfblDWrrQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DgZap1okEECwE7uIXFyZ6A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DgZap1okEECwE7uIXFyZ6A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_EventClicked$vars", [{
            name: "In_EventHostId",
            attrName: "in_EventHostIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "In_EventId",
            attrName: "in_EventIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._checkDateBoundaries$Action = function(in_DateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CheckDateBoundaries");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.CheckDateBoundaries$vars"))());
            vars.value.in_DateInLocal = in_DateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Eutss1CGCkOsawmR2Uzj_A:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.Eutss1CGCkOsawmR2Uzj_A:CPRJYA8aHSQ5KtJMnmRkcA", "Connect2_OrbitMobile_MUI", "CheckDateBoundaries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EqQFFwjI7kqvzbQN+EB6ww", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Is inside boundaries?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LcKCKQEjVUePbjIxTaaHwg", callContext.id) && (vars.value.in_DateInLocal.gt(model.variables.eventFiltersVar.fromDateAttr) && vars.value.in_DateInLocal.lt(model.variables.eventFiltersVar.toDateAttr)))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K5jLG2vc80C9vszrXLXRoQ", callContext.id);
                    } else {
                        // Set New Filters
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rN7pIHIEGESV62P454PB4A", callContext.id);
                        // EventFilters.FromDate = AddMonths
                        model.variables.eventFiltersVar.fromDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(vars.value.in_DateInLocal, -model.variables.defaultDateRangeInMonthsVar));
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rN7pIHIEGESV62P454PB4A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // EventFilters.ToDate = AddMonths
                        model.variables.eventFiltersVar.toDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(vars.value.in_DateInLocal, OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(model.variables.defaultDateRangeInMonthsVar).div(OS.BuiltinFunctions.integerToDecimal(2))))));
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ahCTV2NItUWqM3ZTXBgnLQ", callContext.id);
                        // Execute Action: GetEventCalendarData
                        return controller._getEventCalendarData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zrBXuD9xwUekCM0kFKKFfg", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Eutss1CGCkOsawmR2Uzj_A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Eutss1CGCkOsawmR2Uzj_A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.CheckDateBoundaries$vars", [{
            name: "In_Date",
            attrName: "in_DateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Date,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }]);
        Controller.prototype._onHandle_HouseholdClicked$Action = function(in_HouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_LengthIn, in_EventHostIdIn, in_EventIdIn, in_RecordDisabledIn, in_IsHostingIn, isHouseholdDisplayedIn, in_HouseholdIdListIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_HouseholdClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_HouseholdClicked$vars"))());
            vars.value.in_HouseholdIdInLocal = in_HouseholdIdIn;
            vars.value.in_HouseholdNameInLocal = in_HouseholdNameIn;
            vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
            vars.value.in_LengthInLocal = in_LengthIn;
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            vars.value.in_EventIdInLocal = in_EventIdIn;
            vars.value.in_RecordDisabledInLocal = in_RecordDisabledIn;
            vars.value.in_IsHostingInLocal = in_IsHostingIn;
            vars.value.isHouseholdDisplayedInLocal = isHouseholdDisplayedIn;
            vars.value.in_HouseholdIdListInLocal = in_HouseholdIdListIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:WPC2yRL7w0KAzmFKpgNTGw:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.WPC2yRL7w0KAzmFKpgNTGw:PSUeKru_g+n6lOhpVUKnqA", "Connect2_OrbitMobile_MUI", "OnHandle_HouseholdClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6R69lPxgJEG2nmMFdnU1Ww", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BcgIILNpm0ivWIis45rYCg", callContext.id) && vars.value.isHouseholdDisplayedInLocal)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tafcJ3tAT0yrWYbHr4_Viw", callContext.id) && vars.value.in_RecordDisabledInLocal)) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ifCSCH5eYk6C53Glgvp6MA", callContext.id);
                                // Execute Action: App_Subscription_ShowUpgradePopUp
                                model.flush();
                                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oaXLjlZlY0mwEl1URbCFyA", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fqGU+5v+ZEajv4aVUy9T5w", callContext.id);
                                // Execute Action: AddAuditEventDetailEvent
                                model.flush();
                                return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineHouseholdClicked, vars.value.in_HouseholdIdInLocal, vars.value.in_HouseholdNameInLocal, OS.DataTypes.DateTime.defaultValue, "", callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H5LAEf+M906uYvD7WyIESA", callContext.id);
                                    // Trigger Event: NavigateTo_HouseholdCarousel
                                    return controller.navigateTo_HouseholdCarousel$Action(vars.value.in_HouseholdIdInLocal, vars.value.in_CurrentRowNumberInLocal, vars.value.in_LengthInLocal, vars.value.in_EventHostIdInLocal, vars.value.in_EventIdInLocal, vars.value.in_IsHostingInLocal, vars.value.in_HouseholdIdListInLocal, callContext);
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z3LTUul04EyWTva3eNYTiA", callContext.id);
                                });
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:50m4ci9c6Eip2hQYP2MUVA", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WPC2yRL7w0KAzmFKpgNTGw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WPC2yRL7w0KAzmFKpgNTGw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_HouseholdClicked$vars", [{
            name: "In_HouseholdId",
            attrName: "in_HouseholdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "In_HouseholdName",
            attrName: "in_HouseholdNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_CurrentRowNumber",
            attrName: "in_CurrentRowNumberInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "In_Length",
            attrName: "in_LengthInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "In_EventHostId",
            attrName: "in_EventHostIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "In_EventId",
            attrName: "in_EventIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "In_RecordDisabled",
            attrName: "in_RecordDisabledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "In_IsHosting",
            attrName: "in_IsHostingInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "IsHouseholdDisplayed",
            attrName: "isHouseholdDisplayedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "In_HouseholdIdList",
            attrName: "in_HouseholdIdListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new OS.DataTypes.LongIntegerList();
            },
            complexType: OS.DataTypes.LongIntegerList
        }]);
        Controller.prototype._setScrollAmount$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetScrollAmount");
            callContext = controller.callContext(callContext);
            var getScrollTopJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getScrollTopJSResult = getScrollTopJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:A0wS0XTXoEmiqyHDeGzAmQ:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.A0wS0XTXoEmiqyHDeGzAmQ:1cNGWOCS51izSn_dMNIExg", "Connect2_OrbitMobile_MUI", "SetScrollAmount", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hy7neQjJjEahpHSOs5zFdw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QBKP8z3+1Ui78bcYlbY1Ag", callContext.id);
                getScrollTopJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_SetScrollAmount_GetScrollTopJS, "GetScrollTop", "SetScrollAmount", {
                    ScrollAmount: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.SetScrollAmount$getScrollTopJSResult"))();
                    jsNodeResult.scrollAmountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ScrollAmount, OS.DataTypes.DataTypes.Integer);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7Z7dtCcC+EStaq7olGKSGg", callContext.id);
                // ScrollAmountInPx = GetScrollTop.ScrollAmount
                model.variables.scrollAmountInPxVar = getScrollTopJSResult.value.scrollAmountOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1lU4gvWj7Ua+8IyyQdcMNw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:A0wS0XTXoEmiqyHDeGzAmQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.SetScrollAmount$getScrollTopJSResult", [{
            name: "ScrollAmount",
            attrName: "scrollAmountOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._onDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:lcUw6OlLF065OpZuWK8C+g:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.lcUw6OlLF065OpZuWK8C+g:r6CEJfKn+CLQODLiMXdr1Q", "Connect2_OrbitMobile_MUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UfzpFegeKUq46+ky_nRl+A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7bhyZaYdQEmNiPqfXNGuTw", callContext.id);
                controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_ScreenBlock_MyEvents_mvc_controller_OnDestroy_ExecuteScrollCallbackJS, "ExecuteScrollCallback", "OnDestroy", {
                    ScrollCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.scrollEventCallbackVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gFLuRXEWVU2LU05k50JN3g", callContext.id);
                // ScrollEventCallback = NullObject
                model.variables.scrollEventCallbackVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O0VLk+2kjUaXX2ZyM1cf8w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:lcUw6OlLF065OpZuWK8C+g", callContext.id);
            }

        };
        Controller.prototype._onHandle_ContactByPhonePopupEvent_Call$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByPhonePopupEvent_Call");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uwnQ7f2W4ke0s1ui+KkdHw:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.uwnQ7f2W4ke0s1ui+KkdHw:WE90KZQ4Po7sAu7nL8Rp5w", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhonePopupEvent_Call", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u7e8VrO2wEyX6ACPeZkG7w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eY+JJIZ12EKgTphAIqD1jQ", callContext.id);
                // Execute Action: OnHandle_ContactByPhonePopupEvent_Cancel
                controller._onHandle_ContactByPhonePopupEvent_Cancel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h7_ajMbs_0yMivKtDjfwwQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uwnQ7f2W4ke0s1ui+KkdHw", callContext.id);
            }

        };
        Controller.prototype._getMyTimelineData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetMyTimelineData");
            callContext = controller.callContext(callContext);
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var getCurrentTimeInMill_EndVar = new OS.DataTypes.VariableHolder();
            var getCurrentTimeInMill_StartVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.notRegisteredVar = notRegisteredVar;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.getCurrentTimeInMill_EndVar = getCurrentTimeInMill_EndVar;
            varBag.getCurrentTimeInMill_StartVar = getCurrentTimeInMill_StartVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iLqg7mzztE+Hn3PeV0Gp7A:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.iLqg7mzztE+Hn3PeV0Gp7A:Z8FVPy2cCJlhZfi9LyMnsw", "Connect2_OrbitMobile_MUI", "GetMyTimelineData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8ZPundrjsE27uHDTAJcZDg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g9vG6wLbGUyZeT_C2c0dHA", callContext.id);
                // IsFetchingMyTimeline = True
                model.variables.isFetchingMyTimelineVar = true;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D3iSfQjIjk2j7Z8dXZt+Ow", callContext.id);
                // Execute Action: GetCurrentTimeInMill_Start
                getCurrentTimeInMill_StartVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UmtZWrpE_kOcetR36hDIPw", callContext.id);
                // Refresh Query: GetEventsForMyTimeline
                var result = controller.getEventsForMyTimeline$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xbDXIiRk6ESZ_218jZYUfw", callContext.id);
                    // Execute Action: GetCurrentTimeInMill_End
                    getCurrentTimeInMill_EndVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wyoLSuIIvku8_5LyxxT+oA", callContext.id);
                    // Execute Action: AddAuditRequestAPIEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.requestAPI_CalendarEvents, getCurrentTimeInMill_EndVar.value.out_TimestampOut.sub(getCurrentTimeInMill_StartVar.value.out_TimestampOut), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UmeQEPUB5EGXZhXICjXA6w", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("ScreenBlock_MyEvents.GetMyTimelineData", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: NotRegistered
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                    OS.Logger.error(null, ex);
                    notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c9l3MYb4f0WjZCcGSSRJRA", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vcnunK80qkq0vaD9wC3ZIg", callContext.id);
                        // Raise Error: NotRegistered
                        throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IFt+gTBl_UWu_iAhyFyHwA", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jfKQsqe9lke83Z09SwNaAA", callContext.id);
                        // IsFetchingMyTimeline = False
                        model.variables.isFetchingMyTimelineVar = false;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5n5RqnasfUKUinvr0XEEcw", callContext.id);
                        // Raise Error: UnknownError
                        throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iLqg7mzztE+Hn3PeV0Gp7A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iLqg7mzztE+Hn3PeV0Gp7A", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_ResetFilters$vars"))());
            vars.value.in_ResetFiltersInLocal = in_ResetFiltersIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BkKy9JD7gUCa5Qn0aWjlvA:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA/ClientActions.BkKy9JD7gUCa5Qn0aWjlvA:Zd0sIsmH6mAn_X8hTDCvHQ", "Connect2_OrbitMobile_MUI", "OnHandle_ResetFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X3IKWEiuBkKLWbOoUYMFgQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5zi7tW6epEa6t8dfOPZy6A", callContext.id);
                // Execute Action: ListClear_PastEvents
                OS.SystemActions.listClear(model.variables.pastEventsDataVar, callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_GVadcY3y06uYKixuazBRQ", callContext.id);
                // Execute Action: ListClear_Upcoming
                OS.SystemActions.listClear(model.variables.upcomingEventsDataVar, callContext);
                // IsFiltering
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fDYlY1uMv0Guuu0eoYCIGQ", callContext.id);
                // IsFiltering = False
                model.variables.isFilteringVar = false;
                // Set Filters
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L6lU0aDsH06Omc0sd071sw", callContext.id);
                // PastEventFilters = In_ResetFilters
                model.variables.pastEventFiltersVar = vars.value.in_ResetFiltersInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RgNrNdouHUCmIbOcsQVHug", callContext.id);
                // Execute Action: GetMyTimelineData
                return controller._getMyTimelineData$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vihYY4aMPUO_QE3SMRINiw", callContext.id);
                    // Execute Action: AddAuditEventFilterEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineClearFilter, new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec(), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7h4gxrNHvk++28r9mquyeQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BkKy9JD7gUCa5Qn0aWjlvA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BkKy9JD7gUCa5Qn0aWjlvA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.OnHandle_ResetFilters$vars", [{
            name: "In_ResetFilters",
            attrName: "in_ResetFiltersInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
        }]);

        Controller.prototype.onHandle_ContactByMessage_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage_Cancel$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetEventsForMyTimeline$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventsForMyTimeline$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByPhonePopupEvent_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByPhonePopupEvent_Cancel$Action, callContext);

        };
        Controller.prototype.getEventCalendarData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getEventCalendarData$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByMessage_ClickedEmail$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage_ClickedEmail$Action, callContext);

        };
        Controller.prototype.selectEventView$Action = function(eventViewIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._selectEventView$Action, callContext, eventViewIdIn);

        };
        Controller.prototype.logClickedEventAudit$Action = function(in_AuditEventIdIn, in_EventHostIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._logClickedEventAudit$Action, callContext, in_AuditEventIdIn, in_EventHostIdIn);

        };
        Controller.prototype.onHandle_SwipeUp$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_SwipeUp$Action, callContext);

        };
        Controller.prototype.onScrollEnding_MyTimeline$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onScrollEnding_MyTimeline$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetEventsForCalendar$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventsForCalendar$Action, callContext);

        };
        Controller.prototype.onHandle_ExpandToggled$Action = function(isExpandedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ExpandToggled$Action, callContext, isExpandedIn);

        };
        Controller.prototype.onHandle_ContactByMessage$Action = function(event_ContactPopupDataIn, event_CountryNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage$Action, callContext, event_ContactPopupDataIn, event_CountryNameIn);

        };
        Controller.prototype.setViewContainerHeight$Action = function(isResetIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setViewContainerHeight$Action, callContext, isResetIn);

        };
        Controller.prototype.onClick_Calendar$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Calendar$Action, callContext);

        };
        Controller.prototype.incrementMyTimelineDates$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._incrementMyTimelineDates$Action, callContext);

        };
        Controller.prototype.onHandle_MyTimelineFilter$Action = function(in_SelectedFiltersIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_MyTimelineFilter$Action, callContext, in_SelectedFiltersIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onHandle_PhoneCall$Action = function(event_CallPopupDataIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_PhoneCall$Action, callContext, event_CallPopupDataIn);

        };
        Controller.prototype.onHandle_DateClicked$Action = function(in_ClickedDateIn, in_IsToAuditIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_DateClicked$Action, callContext, in_ClickedDateIn, in_IsToAuditIn);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onHandle_EventClicked$Action = function(in_EventHostIdIn, in_EventIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_EventClicked$Action, callContext, in_EventHostIdIn, in_EventIdIn);

        };
        Controller.prototype.checkDateBoundaries$Action = function(in_DateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._checkDateBoundaries$Action, callContext, in_DateIn);

        };
        Controller.prototype.onHandle_HouseholdClicked$Action = function(in_HouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_LengthIn, in_EventHostIdIn, in_EventIdIn, in_RecordDisabledIn, in_IsHostingIn, isHouseholdDisplayedIn, in_HouseholdIdListIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_HouseholdClicked$Action, callContext, in_HouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_LengthIn, in_EventHostIdIn, in_EventIdIn, in_RecordDisabledIn, in_IsHostingIn, isHouseholdDisplayedIn, in_HouseholdIdListIn);

        };
        Controller.prototype.setScrollAmount$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setScrollAmount$Action, callContext);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByPhonePopupEvent_Call$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByPhonePopupEvent_Call$Action, callContext);

        };
        Controller.prototype.getMyTimelineData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getMyTimelineData$Action, callContext);

        };
        Controller.prototype.onHandle_ResetFilters$Action = function(in_ResetFiltersIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ResetFilters$Action, callContext, in_ResetFiltersIn);

        };
        Controller.prototype.navigateTo_ContactByEmail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateToMyCalendar$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_EventDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_HouseholdCarousel$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:E74zwcKbWk+9UpiLSVN2Jg:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg:zNBXAMaKtu4qNDVYNIP8NA", "Connect2_OrbitMobile_MUI", "LDM_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:JM2utVOTzEaCaqbVvfjotA:/NRWebFlows.E74zwcKbWk+9UpiLSVN2Jg/NodesShownInESpaceTree.JM2utVOTzEaCaqbVvfjotA:qHUCMYYVZTtII6b40IvKtA", "Connect2_OrbitMobile_MUI", "ScreenBlock_MyEvents", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:JM2utVOTzEaCaqbVvfjotA", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E74zwcKbWk+9UpiLSVN2Jg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks/ScreenBlock_MyEvents On Destroy");
                return controller.onDestroy$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
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
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnAfterFetch_GetEventsForMyTimeline.ScrollToTopJS", [], function() {
    return function($actions, $roles, $public) {
        document.querySelector(".content").scrollTop = 0;
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.SetViewContainerHeight.SetViewContainerHeightJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var viewContainer = document.querySelector('.view-content-wrapper');

        if (viewContainer && $parameters.IsReset) {
            viewContainer.style.height = "";
        } else {
            var mainContentContainer = document.querySelector('.main-content');

            if (viewContainer && mainContentContainer) {
                viewContainer.style.height = mainContentContainer.clientHeight + "px";
            }
        }
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.SetScrollAmount.GetScrollTopJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.ScrollAmount = document.querySelector(".content").scrollTop;
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$controller.OnDestroy.ExecuteScrollCallbackJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.ScrollCallback) {
            $parameters.ScrollCallback();
        }
    };
});

define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks.ScreenBlock_MyEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "L2kJ258kJ02BigU3ZQSepA": {
            getter: function(varBag, idService) {
                return varBag.scrollToTopJSResult.value;
            }
        },
        "uYOOooThaUGlc3RzyYyz2A": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_EndVar.value;
            }
        },
        "qs6Sr4uk_EuXt0wa_pu4Eg": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_StartVar.value;
            }
        },
        "brsyHDqxHU+MYzz6JSTJIQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventViewIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "bi6ojMITKESyDtX2tOzM6A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_AuditEventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "n3No0NE4sUi6PLNs36O_JQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "4MbsLR0gvUiWeRlFZYVJrg": {
            getter: function(varBag, idService) {
                return varBag.listFilter_CalendarVar.value;
            }
        },
        "p4jzd+HcY0i7fkLoKWim+w": {
            getter: function(varBag, idService) {
                return varBag.listFilter_UpcomingVar.value;
            }
        },
        "gjGxpOEe0kSgI6yF46a71A": {
            getter: function(varBag, idService) {
                return varBag.listFilter_PastEventsVar.value;
            }
        },
        "WZ15nz6H7EyieQeq69YR0Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.maxAgeDaysFetchThresholdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "IoJmJsbedUu3G7YfVKEHcQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isExpandedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "1+VeN18+ZkedAj6XLLhNiA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_ContactPopupDataInLocal;
            }
        },
        "CPVwE+3MqUSSofn_U+TuiQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_CountryNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "14Cq5_N5IkeVaJwN1DCI_w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isResetInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "S2HmoiyAEUOdu+xzJwDsPQ": {
            getter: function(varBag, idService) {
                return varBag.setViewContainerHeightJSResult.value;
            }
        },
        "4H_ClfRsBUiksTJX7HC9Tg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SelectedFiltersInLocal;
            }
        },
        "k+3dqROugUCsOSmk0x2bjw": {
            getter: function(varBag, idService) {
                return varBag.validateSameFiltersVar.value;
            }
        },
        "mklOFTVs_Uy63vaj38_RHg": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "fNCJM0g130O2Uvf5tgAQ4w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_CallPopupDataInLocal;
            }
        },
        "UGOofkzMvUmIa4cTu92Xtw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ClickedDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "tFIe94LP50S+CxuASA_2+Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsToAuditInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "AaFvCeYQsk+uUak5F7w3gQ": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "kpDI6i3xRUSw7NQOC0rN8g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "kYkeTS4OzUeXviXIbmvKTA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "UFuHjefhqUulMq707sjP4g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_DateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "TP5A+A+JIk6h9DaD+S953g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "6EVlFZTN1kq3j2JD8_5Upg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "RLj64sGxb0aVUggjQQ3rTg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_CurrentRowNumberInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "+A3Qc02W3UmFTF1fSdZPOw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_LengthInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "CDa4Msd4JkC9ekMEv8KLaA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "1ksWSpbVgkiy39fjaXHV6Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "aGo_wxGJ6EiL+EBeagJnhg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_RecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "PWpambEGP0+IN3n7W6TKJQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsHostingInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "XhFap6fCNEmLls3RKkk3GA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isHouseholdDisplayedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "N6eL+ZZYD0K_n0Gcc2KaAA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdIdListInLocal;
            }
        },
        "QBKP8z3+1Ui78bcYlbY1Ag": {
            getter: function(varBag, idService) {
                return varBag.getScrollTopJSResult.value;
            }
        },
        "7bhyZaYdQEmNiPqfXNGuTw": {
            getter: function(varBag, idService) {
                return varBag.executeScrollCallbackJSResult.value;
            }
        },
        "c9l3MYb4f0WjZCcGSSRJRA": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "IFt+gTBl_UWu_iAhyFyHwA": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "xbDXIiRk6ESZ_218jZYUfw": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_EndVar.value;
            }
        },
        "D3iSfQjIjk2j7Z8dXZt+Ow": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_StartVar.value;
            }
        },
        "omHWhjIe_EiaG4FZnbtvGw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ResetFiltersInLocal;
            }
        },
        "LmpQdnqrqUa1R5jwMluujg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentEventViewVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "vwEMDU6LAUCcmWzweUIKrg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentCalendarDateVar;
            }
        },
        "9NFRsY2ytUW07W7CX5Ndvg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.calendarEventsVar;
            }
        },
        "9sqN2hV8B0+5Y_vqvHsc6A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pastEventsDataVar;
            }
        },
        "tTuxTo1Zs0WVj6c_ezqcCg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.upcomingEventsDataVar;
            }
        },
        "SpCPQXUp5USJQYvnkzO_2w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventFiltersVar;
            }
        },
        "HQDB2jN7h0awLve7nbl3SQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pastEventFiltersVar;
            }
        },
        "OvDwQItnL0ytPwaURIk54Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingEventsVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "SP883zEUcUK9nxwz6eDHYQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingMyTimelineVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "csZrFqD_zkqxpSdj+64Q+Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isWeekMonthCalendarExpandedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "nTICQEqMjUitKp4O+23S4A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.defaultDateRangeInMonthsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "uk8aSocpnkijT5UJhyy78Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFilteringVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "IWP2Y2kqrUGHGnsf3PuiBw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.scrollAmountInPxVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "1GpvNGW7ukemnQwcG9p+lQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.scrollEventCallbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "WqCYmDEUc0GM0QMFnv8_8Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactByPhoneDataVar;
            }
        },
        "1+n_xvQXD0mc7dU5jmHTzg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactByMessagePopupDataVar;
            }
        },
        "2sVzRx8tB0iPY4B_su9i7g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getEventsForMyTimelineDataAct;
            }
        },
        "6ClihRcBpUu9simOd7v5Cg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getEventsForCalendarDataAct;
            }
        },
        "5udSdDQcZU69lW3Wrh6riw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "J9+VAoChcUOQNpDO7R3B8g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "B01uWyslqUuGI8ii43XkTg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "c1mRSlNhF0WC4QfInxa6QQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MyTimelineView"));
                })(varBag.model, idService);
            }
        },
        "cBMNewJmzEa+eb+FxHa69Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Popover_DateSelector"));
                })(varBag.model, idService);
            }
        },
        "XpASbBZ3uUKtwVANayyERQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "Ymo0S+CGm0KB29rrvEMRcg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "5jO6x0wVZ0mQ58S+kY7zww": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "U8UN23ESbkWqJU0Adsascg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsAgendaOrDay"));
                })(varBag.model, idService);
            }
        },
        "jo3TLnhpjEaUyE8Bz7K+MA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FCWeekMonth"));
                })(varBag.model, idService);
            }
        },
        "DBHurYMRfkKWWORGkz+W+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "tmFk98kV8kmJPKoWYJwLOQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Month_or_Day_View"));
                })(varBag.model, idService);
            }
        },
        "zC7Tlb0myEO5q00nMQl+SA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsMonth"));
                })(varBag.model, idService);
            }
        },
        "aegd8ZUMZka6fo3xqZ7IMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasNoFetchError"));
                })(varBag.model, idService);
            }
        },
        "u_fZ8ZGXOkC0fnvxbzsc6Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsFetchingEventsData"));
                })(varBag.model, idService);
            }
        },
        "_oN0fdLGX0SSQcrsD0y8Qg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LoadingCont"));
                })(varBag.model, idService);
            }
        },
        "khacboJQ5EWtQQ0zdDUBSw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Loading"));
                })(varBag.model, idService);
            }
        },
        "7k7j5txVPEKJtzWG9fQ0ow": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Months"));
                })(varBag.model, idService);
            }
        },
        "HYW+dd4OhEilZuH31B7bew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsDay"));
                })(varBag.model, idService);
            }
        },
        "mCwfrx13V0S6_qI2Ouv_hg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Days"));
                })(varBag.model, idService);
            }
        },
        "2Mh5TCTWsUC5zhhBB+mH+Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsMyTimelineView"));
                })(varBag.model, idService);
            }
        },
        "nB5EVjlhikmTqFQoMjIvRA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MyTimeline"));
                })(varBag.model, idService);
            }
        },
        "_CT1KN3p+kCVcVhUpih9pQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsAgenda"));
                })(varBag.model, idService);
            }
        },
        "ZPup_cgcKk2GeljBtRRkIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Agenda"));
                })(varBag.model, idService);
            }
        },
        "owtbWzC3ukmJhtEvIu3mGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
                })(varBag.model, idService);
            }
        },
        "A7eOn_Z9uk+R91G28+3NGQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "XMrShCjVnkqbbKfP73kGDA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "2kAZ5GkwzkWgKMlH3v9epg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "fpHTcbSIQ0itdF6N1tbq7w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});