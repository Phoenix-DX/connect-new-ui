define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.MonthYearSelector.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$model", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$model", "Connect2_LegacyShared.Calendars.MonthCalendar.mvc$model", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$model", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyTimeline_V2.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.WeekDataDisplay.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "Connect2_LegacyShared.controller$GetAdjustedScrollTime", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$CurrentCalendarDateRec", "FullCalendarReactive.model$EventRec", "Connect2_OrbitMobile_MUI.referencesHealth$FullCalendarReactive", "Connect2_OrbitMobile_MUI.model$EventList", "Connect2_OrbitMobile_BL.model$TimelineEventGroup_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroup_V2List", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendar_V2List", "Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditCalendarEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditEventFilterEvent", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_OrbitMobile_MUI.controller$ValidateSameFilters"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_LegacySharedController, FullCalendarReactiveModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvcModel, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvcModel, Connect2_LegacyShared_Calendars_MonthCalendar_mvcModel, Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel, Connect2_LegacyShared_Calendars_DayCalendar_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyTimeline_V2_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel) {
    var OS = OutSystems.Internal;

    var GetEventsForMyTimelineDataActRec = (function(_super) {
        __extends(GetEventsForMyTimelineDataActRec, _super);

        function GetEventsForMyTimelineDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetEventsForMyTimelineDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_PastEvents", "out_PastEventsOut", "Out_PastEvents", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroup_V2List());
                }, true, Connect2_OrbitMobile_MUIModel.TimelineEventGroup_V2List),
                this.attr("Out_UpcomingEvents", "out_UpcomingEventsOut", "Out_UpcomingEvents", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List());
                }, true, Connect2_OrbitMobile_MUIModel.EventCalendar_V2List)
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
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List());
                }, true, Connect2_OrbitMobile_MUIModel.EventCalendar_V2List)
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
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TimelineEventGroup_V2List());
                }, false, Connect2_OrbitMobile_MUIModel.TimelineEventGroup_V2List),
                this.attr("UpcomingEventsData", "upcomingEventsDataVar", "UpcomingEventsData", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventCalendar_V2List());
                }, false, Connect2_OrbitMobile_MUIModel.EventCalendar_V2List),
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
                    Model._hasValidationWidgetsValue = (((((((((((((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Calendars_MonthCalendar_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Calendars_DayCalendar_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyTimeline_V2_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2");
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$model", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.MonthYearSelector.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton.mvc$view", "Connect2_LegacyShared.Calendars.EventCalendarWeekMonth.mvc$view", "Connect2_LegacyShared.Calendars.MonthCalendar.mvc$view", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$view", "Connect2_LegacyShared.Calendars.DayCalendar.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyTimeline_V2.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.WeekDataDisplay.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.Agenda_V2.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "Connect2_LegacyShared.controller$GetAdjustedScrollTime", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$CurrentCalendarDateRec", "FullCalendarReactive.model$EventRec", "Connect2_OrbitMobile_MUI.referencesHealth$FullCalendarReactive", "Connect2_OrbitMobile_MUI.model$EventList", "Connect2_OrbitMobile_BL.model$TimelineEventGroup_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroup_V2List", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendar_V2List", "Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditCalendarEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditEventFilterEvent", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_OrbitMobile_MUI.controller$ValidateSameFilters"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, FullCalendarReactiveModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_model, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_view, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_view, Connect2_LegacyShared_Calendars_MonthCalendar_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_LegacyShared_Calendars_DayCalendar_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyTimeline_V2_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view) {
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
        View.displayName = "LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_MonthYearSelector_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_view, Connect2_LegacyShared_Calendars_EventCalendarWeekMonth_mvc_view, Connect2_LegacyShared_Calendars_MonthCalendar_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_LegacyShared_Calendars_DayCalendar_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyTimeline_V2_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_WeekDataDisplay_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller;
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
                                            value: model.getCachedValue(idService.getId("78lwWzauP0WU8eMvGwgKyQ.Value"), function() {
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
                                                Month: model.variables.currentCalendarDateVar.monthAttr,
                                                Year: model.variables.currentCalendarDateVar.yearAttr,
                                                PopoverId: idService.getId("Popover_DateSelector")
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
                                className: model.getCachedValue(idService.getId("MXK7Zj8uQ06+163TDZuSfQ.class"), function() {
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
                        }, React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyEvents_MyTimelineFilterButton_mvc_view, {
                            inputs: {
                                In_HasLoaded: !(model.variables.isFetchingMyTimelineVar),
                                In_IsShowing: (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline),
                                In_DefaultDateRangeInMonths: model.variables.defaultDateRangeInMonthsVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                resetFilters$Action: function(event_ResetFiltersIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyEvents_MyTimelineFilterButton ResetFilters");
                                            return controller.onHandle_ResetFilters$Action(event_ResetFiltersIn, controller.callContext(eventHandlerContext));
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyEvents_MyTimelineFilterButton Filter");
                                            return controller.onHandle_MyTimelineFilter$Action(event_SelectedFiltersIn, controller.callContext(eventHandlerContext));
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/Icon onclick");
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
                                                Events: model.variables.calendarEventsVar,
                                                IsStretchToFit: true,
                                                Year: model.variables.currentCalendarDateVar.yearAttr,
                                                Month: model.variables.currentCalendarDateVar.monthAttr
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
                                        In_ScrollTime: model.getCachedValue(idService.getId("Days.In_ScrollTime"), function() {
                                            return OutSystemsDebugger.handleFunctionCall(function() {
                                                return Connect2_LegacySharedController.default.getAdjustedScrollTime$Action(callContext).out_ScrollTimeOut;
                                            }, OS.DataTypes.DataTypes.Time, callContext.id);
                                        }),
                                        In_IsFullHeight: true,
                                        In_SelectedDate: model.variables.currentCalendarDateVar.dateAttr,
                                        In_Events: model.variables.calendarEventsVar
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
                            return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_V2_MyTimeline_V2_mvc_view, {
                                inputs: {
                                    In_PastEventsData: model.variables.pastEventsDataVar,
                                    In_UpcomingEventsData: model.variables.upcomingEventsDataVar,
                                    In_IsFetchingMyTimeline: model.variables.isFetchingMyTimelineVar,
                                    In_IsFiltering: model.variables.isFilteringVar,
                                    In_HasFetchError: model.variables.getEventsForMyTimelineDataAct.hasFetchErrorAttr
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 OnClick_Message");
                                            controller.onHandle_ContactByMessage$Action(event_ContactPopupDataIn, event_CountryNameIn, controller.callContext(eventHandlerContext));
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

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 EventsSwipeUp");
                                                return controller.onHandle_SwipeUp$Action(controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    eventClicked$Action: function(event_EventHostIdIn, event_EventIdIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 EventClicked");
                                                return controller.onHandle_EventClicked$Action(event_EventHostIdIn, event_EventIdIn, controller.callContext(eventHandlerContext));
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 OnClick_PhoneCall");
                                            controller.onHandle_PhoneCall$Action(event_PhoneCallInfoIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    tryAgain$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 TryAgain");
                                                return controller.getMyTimelineData$Action(controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    scrollEnding$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 ScrollEnding");
                                                return controller.onScrollEnding_MyTimeline$Action(controller.callContext(eventHandlerContext));
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 CallPhone");
                                            controller.onHandle_PhoneCall$Action(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec(), controller.callContext(eventHandlerContext));
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

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/MyTimeline_V2 HouseholdClicked");
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
                                    name: "MyTimeline_V2",
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
                            }), React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_V2_Agenda_V2_mvc_view, {
                                inputs: {
                                    In_IsFetchingData: model.variables.isFetchingEventsVar,
                                    In_Events: model.variables.pastEventsDataVar.getCurrent(callContext.iterationContext).eventsCalendarAttr,
                                    In_WeekStartDate: model.variables.currentCalendarDateVar.agendaWeekStartDateAttr
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

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/Agenda_V2 EventClicked");
                                                return controller.onHandle_EventClicked$Action(event_EventHostIdIn, event_EventIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    householdClicked$Action: function(event_HouseholdIdIn, event_HouseholdNameIn, event_EventIdIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/Agenda_V2 HouseholdClicked");
                                                return controller.onHandle_HouseholdClicked$Action(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_EventHostIdIn, event_EventIdIn, event_RecordDisabledIn, event_IsHostingIn, event_IsHouseholdDisplayedIn, event_HouseholdIdListIn, controller.callContext(eventHandlerContext));
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/Agenda_V2 OnClick_PhoneCall");
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
                                    onClick_Message$Action: function(event_ContactPopupDataIn, event_CountryNameIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/Agenda_V2 OnClick_Message");
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/Agenda_V2 CallPhone");
                                            controller.onHandle_PhoneCall$Action(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec(), controller.callContext(eventHandlerContext));
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
                                    name: "Agenda_V2",
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
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "FullCalendarReactive.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$debugger", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnDestroy.ExecuteScrollCallbackJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetScrollAmount.GetScrollTopJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnAfterFetch_GetEventsForMyTimeline.ScrollToTopJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetViewContainerHeight.SetViewContainerHeightJS", "Connect2_LegacyShared.controller$GetAdjustedScrollTime", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$CurrentCalendarDateRec", "FullCalendarReactive.model$EventRec", "Connect2_OrbitMobile_MUI.referencesHealth$FullCalendarReactive", "Connect2_OrbitMobile_MUI.model$EventList", "Connect2_OrbitMobile_BL.model$TimelineEventGroup_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$TimelineEventGroup_V2List", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventCalendar_V2List", "Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", "Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditCalendarEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditEventFilterEvent", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "Connect2_OrbitMobile_MUI.controller$AddAuditClickedEvent", "Connect2_OrbitMobile_MUI.controller$ValidateSameFilters"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, FullCalendarReactiveModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_Debugger, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnDestroy_ExecuteScrollCallbackJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_SetScrollAmount_GetScrollTopJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnAfterFetch_GetEventsForMyTimeline_ScrollToTopJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_SetViewContainerHeight_SetViewContainerHeightJS) {
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

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iOeLAsKWYE+8pVS_Yzp9QA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/DataActions.iOeLAsKWYE+8pVS_Yzp9QA:KWvxHfaKq+OtTl_g8MIniw", "Connect2_OrbitMobile_MUI", "GetEventsForMyTimeline", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/GetEventsForMyTimeline");
                return controller.callDataAction("DataActionGetEventsForMyTimeline", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/DataActionGetEventsForMyTimeline", "UChfKCtUKA13aKrBYAd8vA", function(b) {
                    model.variables.getEventsForMyTimelineDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getEventsForMyTimelineDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventsForMyTimelineDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/GetEventsForMyTimeline On After Fetch");
                    controller._onAfterFetch_GetEventsForMyTimeline$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iOeLAsKWYE+8pVS_Yzp9QA", callContext.id);
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

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qcjU09eCw0eP4ye1tj682w:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/DataActions.qcjU09eCw0eP4ye1tj682w:CMjwcETCwsm8l_QvfAKzZg", "Connect2_OrbitMobile_MUI", "GetEventsForCalendar", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/GetEventsForCalendar");
                return controller.callDataAction("DataActionGetEventsForCalendar", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/DataActionGetEventsForCalendar", "OahOuTXV6m1OJ86SVc2dCw", function(b) {
                    model.variables.getEventsForCalendarDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getEventsForCalendarDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventsForCalendarDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2/GetEventsForCalendar On After Fetch");
                    controller._onAfterFetch_GetEventsForCalendar$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qcjU09eCw0eP4ye1tj682w", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getEventsForMyTimeline$DataActRefresh", "getEventsForCalendar$DataActRefresh"];
        // Client Actions
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uieqAaB3D0OEJ+Hndvqt3Q:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.uieqAaB3D0OEJ+Hndvqt3Q:CrNcRrubGXpHtRww5K5C8w", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage_ClickedEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eKVZ_r5wiEyDFZKoQb7lNQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Qjhr+tqQGkiqaXHeYjx0iw", callContext.id);
                // Execute Action: OnHandle_ContactByMessage_Cancel
                controller._onHandle_ContactByMessage_Cancel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZS53MGT730WuFrUxHamwWQ", callContext.id);
                // Trigger Event: NavigateTo_ContactByEmail
                return controller.navigateTo_ContactByEmail$Action(model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr, "", model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a6Q9BQC9KU2LoFH+w_HyGw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uieqAaB3D0OEJ+Hndvqt3Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uieqAaB3D0OEJ+Hndvqt3Q", callContext.id);
                throw ex;

            });
        };
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:eAjEDGDvV0yVxP7UYe3hyg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.eAjEDGDvV0yVxP7UYe3hyg:dXUR9V7hIaOY+RRGAS9OWQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RDzzBjNhskGkwLCNJoBWxw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Caf2yHAYK0WM1IZvoR2I2A", callContext.id);
                // ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
                model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wjKMRVqTJkiBGvVzj9gbSw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:eAjEDGDvV0yVxP7UYe3hyg", callContext.id);
            }

        };
        Controller.prototype._onHandle_ContactByMessage$Action = function(event_ContactPopupDataIn, event_CountryNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByMessage");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_ContactByMessage$vars"))());
            vars.value.event_ContactPopupDataInLocal = event_ContactPopupDataIn.clone();
            vars.value.event_CountryNameInLocal = event_CountryNameIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ie4AHHgkJ0KuCBN5rKEKBg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.ie4AHHgkJ0KuCBN5rKEKBg:tsWLi+J5gdZN8W5Y+Dsc5w", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q4DtVzCO2EqJCDQ_A3vgXQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_m5lP0iz50CHiLOfC3UpIQ", callContext.id);
                // ContactByMessagePopupData = Event_ContactPopupData
                model.variables.contactByMessagePopupDataVar = OS.DataConversion.JSConversions.typeConvertRecord(vars.value.event_ContactPopupDataInLocal, new Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord(), function(source, target) {
                    target.countryNameAttr = vars.value.event_CountryNameInLocal;
                    target.uI_ContactByMessage_WrapperDataAttr.emailAttr = source.emailAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.phoneAttr = source.phoneAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.isComboEmailAndPhoneAttr = source.isComboEmailAndPhoneAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr = source.contactPopupDataAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VwQvxx5DKkWG7LmyIJvVoQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ie4AHHgkJ0KuCBN5rKEKBg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_ContactByMessage$vars", [{
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
        Controller.prototype._checkDateBoundaries$Action = function(in_DateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CheckDateBoundaries");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.CheckDateBoundaries$vars"))());
            vars.value.in_DateInLocal = in_DateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qglSJAM9nEyVuycVjbtD1Q:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.qglSJAM9nEyVuycVjbtD1Q:VP7MwJWLMJkvEd6gtqIy2w", "Connect2_OrbitMobile_MUI", "CheckDateBoundaries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1OwAYxtH7UuD7dYd6y5Dgw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Is inside boundaries?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6jtTmrbBt0Cv2Dy7G1wtaw", callContext.id) && (vars.value.in_DateInLocal.gt(model.variables.eventFiltersVar.fromDateAttr) && vars.value.in_DateInLocal.lt(model.variables.eventFiltersVar.toDateAttr)))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:suEpZKmjFEiv7dkfDkR4OA", callContext.id);
                    } else {
                        // Set New Filters
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UULWN_xHa0SSNNnchsufXw", callContext.id);
                        // EventFilters.FromDate = AddMonths
                        model.variables.eventFiltersVar.fromDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(vars.value.in_DateInLocal, -model.variables.defaultDateRangeInMonthsVar));
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UULWN_xHa0SSNNnchsufXw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // EventFilters.ToDate = AddMonths
                        model.variables.eventFiltersVar.toDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(vars.value.in_DateInLocal, OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(model.variables.defaultDateRangeInMonthsVar).div(OS.BuiltinFunctions.integerToDecimal(2))))));
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:x2k5U0WenUijJczIDwpR8g", callContext.id);
                        // Execute Action: GetEventCalendarData
                        return controller._getEventCalendarData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tO0xfN3e3UG05xVYfh6qTw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qglSJAM9nEyVuycVjbtD1Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qglSJAM9nEyVuycVjbtD1Q", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.CheckDateBoundaries$vars", [{
            name: "In_Date",
            attrName: "in_DateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Date,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KLsTOmAE3EactKxxKFdnWw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.KLsTOmAE3EactKxxKFdnWw:gAOOuHbMMp1njBqNYYLbwA", "Connect2_OrbitMobile_MUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IVfcA3ZOU0+m9lXARp5Qlg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FYwKYamKk0CsIZ2F1Tp2yg", callContext.id);
                controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnDestroy_ExecuteScrollCallbackJS, "ExecuteScrollCallback", "OnDestroy", {
                    ScrollCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.scrollEventCallbackVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JPVs2PNYO0aS2iPt3KcWQg", callContext.id);
                // ScrollEventCallback = NullObject
                model.variables.scrollEventCallbackVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:24nam9ag7E2Oku_+o4ytbQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KLsTOmAE3EactKxxKFdnWw", callContext.id);
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
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var getCurrentTimeInMill_EndVar = new OS.DataTypes.VariableHolder();
            var getCurrentTimeInMill_StartVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.notRegisteredVar = notRegisteredVar;
            varBag.getCurrentTimeInMill_EndVar = getCurrentTimeInMill_EndVar;
            varBag.getCurrentTimeInMill_StartVar = getCurrentTimeInMill_StartVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YTLSSZCwx02pEhcmrdFdyg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.YTLSSZCwx02pEhcmrdFdyg:RuTcxhgqoQSMnN+8dtqW_Q", "Connect2_OrbitMobile_MUI", "GetMyTimelineData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O5Sj_SRh+0GOfUZnsSYXZg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ivFpPDbE80SQmHTF1I5Y3Q", callContext.id);
                // IsFetchingMyTimeline = True
                model.variables.isFetchingMyTimelineVar = true;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tbvEuipfUkWWp+kJbRUzNA", callContext.id);
                // Execute Action: GetCurrentTimeInMill_Start
                getCurrentTimeInMill_StartVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:blq6fOcpFkCi3Vv_DKg39A", callContext.id);
                // Refresh Query: GetEventsForMyTimeline
                var result = controller.getEventsForMyTimeline$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OpJJVwT2mE6EMJrWWe3bJg", callContext.id);
                    // Execute Action: GetCurrentTimeInMill_End
                    getCurrentTimeInMill_EndVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aZqwU0GRqEmO+Xu21ikaCA", callContext.id);
                    // Execute Action: AddAuditRequestAPIEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.requestAPI_CalendarEvents, getCurrentTimeInMill_EndVar.value.out_TimestampOut.sub(getCurrentTimeInMill_StartVar.value.out_TimestampOut), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yYHb1bFu3UyXXSUH1482aw", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("ScreenBlock_MyEvents_V2.GetMyTimelineData", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: NotRegistered
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                    OS.Logger.error(null, ex);
                    notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9L86TQjBTkKD7FIpjnTyww", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:08CkCa39+ESdPbB9uIT_PQ", callContext.id);
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
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TOPCNPQ6ZUGqOKA9hwxd4w", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bP8eOKyTeEioP_5iTRxRSQ", callContext.id);
                        // IsFetchingMyTimeline = False
                        model.variables.isFetchingMyTimelineVar = false;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8gtP6tFusU644axxjFIqsA", callContext.id);
                        // Raise Error: UnknownError
                        throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YTLSSZCwx02pEhcmrdFdyg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YTLSSZCwx02pEhcmrdFdyg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_DateClicked$Action = function(in_ClickedDateIn, in_IsToAuditIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_DateClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_DateClicked$vars"))());
            vars.value.in_ClickedDateInLocal = in_ClickedDateIn;
            vars.value.in_IsToAuditInLocal = in_IsToAuditIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uvpZWr6q80iFysVtdU+_eA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.uvpZWr6q80iFysVtdU+_eA:5KECBUNDEvgVK5yddmtlrw", "Connect2_OrbitMobile_MUI", "OnHandle_DateClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BqrLeSCvCk6rNVMLaGvinw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Set Dates
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Q5ctuax+0WE1rQgUnh9QA", callContext.id);
                // CurrentCalendarDate.Year = Year
                model.variables.currentCalendarDateVar.yearAttr = OS.BuiltinFunctions.year(vars.value.in_ClickedDateInLocal);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Q5ctuax+0WE1rQgUnh9QA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CurrentCalendarDate.Month = Month
                model.variables.currentCalendarDateVar.monthAttr = OS.BuiltinFunctions.month(vars.value.in_ClickedDateInLocal);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Q5ctuax+0WE1rQgUnh9QA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // CurrentCalendarDate.Day = Day
                model.variables.currentCalendarDateVar.dayAttr = OS.BuiltinFunctions.day(vars.value.in_ClickedDateInLocal);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Q5ctuax+0WE1rQgUnh9QA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // CurrentCalendarDate.AgendaWeekStartDate = AddDays
                model.variables.currentCalendarDateVar.agendaWeekStartDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(vars.value.in_ClickedDateInLocal, (0 - OS.BuiltinFunctions.dayOfWeek(vars.value.in_ClickedDateInLocal))));
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Q5ctuax+0WE1rQgUnh9QA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // CurrentCalendarDate.Date = In_ClickedDate
                model.variables.currentCalendarDateVar.dateAttr = vars.value.in_ClickedDateInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_j5LhKjz1kCXm9rFSx+KeA", callContext.id);
                // Execute Action: CheckDateBoundaries
                return controller._checkDateBoundaries$Action(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_ClickedDateInLocal), callContext).then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zirXLWdCZE+Xv1ILgClgJQ", callContext.id) && vars.value.in_IsToAuditInLocal)) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fvCYmwxUDEKkLOVxr7W6WQ", callContext.id);
                            // Execute Action: AddAuditCalendarEvent
                            model.flush();
                            return Connect2_OrbitMobile_MUIController.default.addAuditCalendarEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarDateChanged, 0, vars.value.in_ClickedDateInLocal, callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M5BElMN3hECwsJxzbyoNvA", callContext.id);
                            });
                        } else {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M5BElMN3hECwsJxzbyoNvA", callContext.id);
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uvpZWr6q80iFysVtdU+_eA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uvpZWr6q80iFysVtdU+_eA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_DateClicked$vars", [{
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
        Controller.prototype._onScrollEnding_MyTimeline$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnScrollEnding_MyTimeline");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnScrollEnding_MyTimeline$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oWL1Yf_FU0yCGVz+tzQPTg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.oWL1Yf_FU0yCGVz+tzQPTg:u3ZVFHYO+LPG1NIyMT55jg", "Connect2_OrbitMobile_MUI", "OnScrollEnding_MyTimeline", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MG_Mbq3SmEWM4ZRmChvrBA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MkMXX_ZRCk2habWAJSPsog", callContext.id) && model.variables.isFetchingMyTimelineVar)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_Moy0cBoZ0ux+O1S9CRdEw", callContext.id);
                    } else {
                        // Is Filtering?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nTvt5+G1nkW5slCVbzSgNw", callContext.id) && model.variables.isFilteringVar)) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ULLGFNYjR0WEqMu1uMDU9g", callContext.id);
                            } else {
                                // Max Date Limit reached?
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X81EI8svWU62X9eHn2BJrg", callContext.id) && OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.diffDays(model.variables.pastEventFiltersVar.fromDateAttr, OS.BuiltinFunctions.currDate())).gt(vars.value.maxAgeDaysFetchThresholdVar))) {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oxZVhsEzgUSqRAU5+PaBug", callContext.id);
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jYCiEJ0OxU2Uu46J1fe7Uw", callContext.id);
                                        // Execute Action: IncrementMyTimelineDates
                                        controller._incrementMyTimelineDates$Action(callContext);
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ddicgXyAnk+ipDPIBSauLQ", callContext.id);
                                        // Execute Action: GetMyTimelineData
                                        return controller._getMyTimelineData$Action(callContext).then(function() {
                                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xt4McU1FRUiXdY9M3lb8KA", callContext.id);
                                        });
                                    }

                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oWL1Yf_FU0yCGVz+tzQPTg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oWL1Yf_FU0yCGVz+tzQPTg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnScrollEnding_MyTimeline$vars", [{
            name: "MaxAgeDaysFetchThreshold",
            attrName: "maxAgeDaysFetchThresholdVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.BuiltinFunctions.integerToLongInteger(7300);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_EventClicked$vars"))());
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            vars.value.in_EventIdInLocal = in_EventIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:EJ1aczea5kGUJBDUAZ+M3A:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.EJ1aczea5kGUJBDUAZ+M3A:VaB4d1xVJSUGAcWaloOpjA", "Connect2_OrbitMobile_MUI", "OnHandle_EventClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cwHf0A0Mm0+DvEFI4gsEDQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_X2Ra_Prqk+xsCTUCb_cLQ", callContext.id);
                // Execute Action: LogClickedEventAudit
                return controller._logClickedEventAudit$Action((((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month)) ? (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarEventClicked) : (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineEventClicked)), vars.value.in_EventHostIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LG_fFQ4akEitswTZZUhygw", callContext.id);
                    // Trigger Event: NavigateTo_EventDetail
                    return controller.navigateTo_EventDetail$Action(vars.value.in_EventHostIdInLocal, vars.value.in_EventIdInLocal, callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:x0OemVgMwUOs8wwcZakOSg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EJ1aczea5kGUJBDUAZ+M3A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EJ1aczea5kGUJBDUAZ+M3A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_EventClicked$vars", [{
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4PxzgssMMEGGqPKwb38xdA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.4PxzgssMMEGGqPKwb38xdA:MwS41qv8rlC3LyVmCw9d8A", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mx49WwYCpk+8v7GseVtt1g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7y4kfjcCUESROCxIXSeeJg", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U9vKQqS3xUO+A+JOsCorDg", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aMM6f6c2TkKZQSG_qVU8jQ", callContext.id);
                    // ContactByPhoneData.ContactPopupData.ShowPopup = False
                    model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aMM6f6c2TkKZQSG_qVU8jQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
                    model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
                    // Day or Month?
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LR9D6GEMAU2XG2t2_jUFYg", callContext.id) && ((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day) || (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month)))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Uw6m9v4NKU+jmHh8EE5bXg", callContext.id);
                        // IsFetchingEvents = True
                        model.variables.isFetchingEventsVar = true;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VYtBLi+oRkum7XKoKhFf9w", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VYtBLi+oRkum7XKoKhFf9w", callContext.id);
                    }

                } else {
                    // Set Default Date values
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fFZBGSISkUuGUJdu09Gk6g", callContext.id);
                    // CurrentCalendarDate.Day = Day
                    model.variables.currentCalendarDateVar.dayAttr = OS.BuiltinFunctions.day(OS.BuiltinFunctions.currDate());
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fFZBGSISkUuGUJdu09Gk6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // CurrentCalendarDate.Month = Month
                    model.variables.currentCalendarDateVar.monthAttr = OS.BuiltinFunctions.month(OS.BuiltinFunctions.currDate());
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fFZBGSISkUuGUJdu09Gk6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // CurrentCalendarDate.Year = Year
                    model.variables.currentCalendarDateVar.yearAttr = OS.BuiltinFunctions.year(OS.BuiltinFunctions.currDate());
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fFZBGSISkUuGUJdu09Gk6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // CurrentCalendarDate.Date = CurrDate
                    model.variables.currentCalendarDateVar.dateAttr = OS.BuiltinFunctions.currDate();
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fFZBGSISkUuGUJdu09Gk6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                    // CurrentCalendarDate.AgendaWeekStartDate = AddDays
                    model.variables.currentCalendarDateVar.agendaWeekStartDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), (0 - OS.BuiltinFunctions.dayOfWeek(OS.BuiltinFunctions.currDate()))));
                    // Set Filters
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19ZVBaoloU666dWVm2jm3A", callContext.id);
                    // EventFilters.FromDate = DateTimeToDate
                    model.variables.eventFiltersVar.fromDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(OS.BuiltinFunctions.currDate(), -model.variables.defaultDateRangeInMonthsVar));
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19ZVBaoloU666dWVm2jm3A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // EventFilters.ToDate = DateTimeToDate
                    model.variables.eventFiltersVar.toDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(OS.BuiltinFunctions.currDate(), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(model.variables.defaultDateRangeInMonthsVar).div(OS.BuiltinFunctions.integerToDecimal(2))))));
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19ZVBaoloU666dWVm2jm3A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // PastEventFilters.FromDate = EventFilters.FromDate
                    model.variables.pastEventFiltersVar.fromDateAttr = model.variables.eventFiltersVar.fromDateAttr;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19ZVBaoloU666dWVm2jm3A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // PastEventFilters.ToDate = DateTimeToDate
                    model.variables.pastEventFiltersVar.toDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), 7));
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LBozax58H0+QmKNCmyU0Uw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4PxzgssMMEGGqPKwb38xdA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dHK7kB22GESP4ZSjxbyFlQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.dHK7kB22GESP4ZSjxbyFlQ:+X826qM_1En+cWBX3iEQUg", "Connect2_OrbitMobile_MUI", "SetScrollAmount", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A+jaFiiXg0WRGiDK2GrZlg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OTtCvjF61EKrh_zYbjIvCg", callContext.id);
                getScrollTopJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_SetScrollAmount_GetScrollTopJS, "GetScrollTop", "SetScrollAmount", {
                    ScrollAmount: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.SetScrollAmount$getScrollTopJSResult"))();
                    jsNodeResult.scrollAmountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ScrollAmount, OS.DataTypes.DataTypes.Integer);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QcnCX+Ic2ESrESLCfNRfzw", callContext.id);
                // ScrollAmountInPx = GetScrollTop.ScrollAmount
                model.variables.scrollAmountInPxVar = getScrollTopJSResult.value.scrollAmountOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tvBAmut4a0+Lvi_Lr6qlaA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dHK7kB22GESP4ZSjxbyFlQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.SetScrollAmount$getScrollTopJSResult", [{
            name: "ScrollAmount",
            attrName: "scrollAmountOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._onHandle_ResetFilters$Action = function(in_ResetFiltersIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ResetFilters");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_ResetFilters$vars"))());
            vars.value.in_ResetFiltersInLocal = in_ResetFiltersIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yEfxmaq6Qk6jfd8V+GnqAw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.yEfxmaq6Qk6jfd8V+GnqAw:BMHi_mc977dsZr2cAgxELg", "Connect2_OrbitMobile_MUI", "OnHandle_ResetFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zRQdDqJdtUKgnkPInb4zgg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yt_d4da2UE+S+oN489WR1A", callContext.id);
                // Execute Action: ListClear_PastEvents
                OS.SystemActions.listClear(model.variables.pastEventsDataVar, callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ttshHm8DDkan_FuWEkf_MQ", callContext.id);
                // Execute Action: ListClear_Upcoming
                OS.SystemActions.listClear(model.variables.upcomingEventsDataVar, callContext);
                // IsFiltering
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b3vO1tq6U02Tfwiq_+PZ5A", callContext.id);
                // IsFiltering = False
                model.variables.isFilteringVar = false;
                // Set Filters
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Emty0oxMhEGSOUw_zJNIJA", callContext.id);
                // PastEventFilters = In_ResetFilters
                model.variables.pastEventFiltersVar = vars.value.in_ResetFiltersInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:trUQgNLpr02zNwNy+oEkYw", callContext.id);
                // Execute Action: GetMyTimelineData
                return controller._getMyTimelineData$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gx60fLdRsUWg3Tv_b402nA", callContext.id);
                    // Execute Action: AddAuditEventFilterEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineClearFilter, new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec(), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V4+PxNDJNEuQDPDgUNeHrA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yEfxmaq6Qk6jfd8V+GnqAw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yEfxmaq6Qk6jfd8V+GnqAw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_ResetFilters$vars", [{
            name: "In_ResetFilters",
            attrName: "in_ResetFiltersInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_HouseholdClicked$vars"))());
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5ZVTm7zyu0agBt_+ujimZw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.5ZVTm7zyu0agBt_+ujimZw:6oY3l8+yaa0D0iDQb4VvZw", "Connect2_OrbitMobile_MUI", "OnHandle_HouseholdClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Oj4w7skBsU233JKhPOI26Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g9ZIB7arM0CAr9wJmlKoIg", callContext.id) && vars.value.isHouseholdDisplayedInLocal)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uBylLwKB90WnRVp6kxKmUw", callContext.id) && vars.value.in_RecordDisabledInLocal)) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ufxlPhBSKES69W3JiGQXWQ", callContext.id);
                                // Execute Action: App_Subscription_ShowUpgradePopUp
                                model.flush();
                                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AvRKyNXJWkGE4uvefluWQQ", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mGi_wLAqtUqWgwIgDTSB7A", callContext.id);
                                // Execute Action: AddAuditEventDetailEvent
                                model.flush();
                                return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineHouseholdClicked, vars.value.in_HouseholdIdInLocal, vars.value.in_HouseholdNameInLocal, OS.DataTypes.DateTime.defaultValue, "", callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hj4OlbL7G0+tUNgkV0w7kQ", callContext.id);
                                    // Trigger Event: NavigateTo_HouseholdCarousel
                                    return controller.navigateTo_HouseholdCarousel$Action(vars.value.in_HouseholdIdInLocal, vars.value.in_CurrentRowNumberInLocal, vars.value.in_LengthInLocal, vars.value.in_EventHostIdInLocal, vars.value.in_EventIdInLocal, vars.value.in_IsHostingInLocal, vars.value.in_HouseholdIdListInLocal, callContext);
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hS6T5J5ZAkepDyMKF+I0pA", callContext.id);
                                });
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19940tvp0kOviKx9_ZdJuQ", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5ZVTm7zyu0agBt_+ujimZw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5ZVTm7zyu0agBt_+ujimZw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_HouseholdClicked$vars", [{
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wS8itSHWJUiWdhT5vlRRkA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.wS8itSHWJUiWdhT5vlRRkA:r5tKgtRYGXmRF98Zeh23bw", "Connect2_OrbitMobile_MUI", "GetEventCalendarData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vd3rTh4qxkaJ9a4UzqU6bg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lsVx1hjZw0ic0dxBB3xDPg", callContext.id);
                // IsFetchingEvents = True
                model.variables.isFetchingEventsVar = true;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ywfR8HK_h0KcXyp8dMyEjA", callContext.id);
                // Execute Action: GetCurrentTimeInMill_Start
                getCurrentTimeInMill_StartVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hozhxtkb+0qInrUtFCNqwA", callContext.id);
                // Refresh Query: GetEventsForCalendar
                var result = controller.getEventsForCalendar$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vOhP5t_oLUCTWQbVAdJtTg", callContext.id);
                    // Execute Action: GetCurrentTimeInMill_End
                    getCurrentTimeInMill_EndVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:l95ZDtfZxEO7j9YMfIlSTw", callContext.id);
                    // Execute Action: AddAuditRequestAPIEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.requestAPI_CalendarEvents, getCurrentTimeInMill_EndVar.value.out_TimestampOut.sub(getCurrentTimeInMill_StartVar.value.out_TimestampOut), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Uc4MYy4LmUOoWOmj26OhWQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wS8itSHWJUiWdhT5vlRRkA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wS8itSHWJUiWdhT5vlRRkA", callContext.id);
                throw ex;

            });
        };
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:sfSCvVUg+UuFkeBdyc7LUA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.sfSCvVUg+UuFkeBdyc7LUA:EWsUTiqZMUZLBc9ipQMQ_w", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zfVSGwPNfUqhUAj2gcrnUA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KsI8LU55LEqU9mtk+OsZ7w", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eBCY6UFOe0+HUJq+n4XkFg", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                        // Day or Month?
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P+w_81vgwkG1tC8ylvLjGQ", callContext.id) && ((model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.day) || (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.month)))) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9qexz7B4F0aX2P0JIiTW5A", callContext.id);
                            // Execute Action: SetViewContainerHeight
                            controller._setViewContainerHeight$Action(false, callContext);
                        }

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eL4azURlPECxtlIb5BRJSA", callContext.id);
                        // IsFetchingEvents = False
                        model.variables.isFetchingEventsVar = false;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eL4azURlPECxtlIb5BRJSA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // IsFetchingMyTimeline = False
                        model.variables.isFetchingMyTimelineVar = false;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:swTwaI7O9E+KTJS6qzXNMA", callContext.id);
                    } else {
                        // Past Events View?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AfzpwBTI7UyvtEQJLMuXGA", callContext.id) && (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xiRgID06r0iTF_SyRYty8w", callContext.id);
                                // Execute Action: GetMyTimelineData
                                return controller._getMyTimelineData$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PZSfHcJYGEazNHSBDndv5g", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m3Jg541auUS5yG_v82w1QQ", callContext.id);
                                // Execute Action: GetEventCalendarData
                                return controller._getEventCalendarData$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PZSfHcJYGEazNHSBDndv5g", callContext.id);
                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sfSCvVUg+UuFkeBdyc7LUA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sfSCvVUg+UuFkeBdyc7LUA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YMF8v_TRGkaAdBAD8cXLEw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.YMF8v_TRGkaAdBAD8cXLEw:DcG8SRv99f7WpBuBSjkw3g", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhonePopupEvent_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xij8FNTZ6kG90ycv8Zi0xg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WNN3SnFfF0idIZHFk7aW5g", callContext.id);
                // ContactByPhoneData.ContactPopupData.ShowPopup = False
                model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YwPnZvGfCEGY5adZTiwPew", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YMF8v_TRGkaAdBAD8cXLEw", callContext.id);
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KrEwwukFGUyCllnVkkUknQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.KrEwwukFGUyCllnVkkUknQ:bJniUWuBctMpQ2S5AzgJkg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventsForMyTimeline", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kxrY_UbRZ0iVDt6QrOuMXw", callContext.id);
                // IsFiltering
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_Lh3WiBccEGlxtEV0X4yLg", callContext.id) && model.variables.isFilteringVar)) {
                    // Set Timeline Events
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lTJrDY250UCIjxH3OkDJ2g", callContext.id);
                    // PastEventsData = GetEventsForMyTimeline.Out_PastEvents
                    model.variables.pastEventsDataVar = model.variables.getEventsForMyTimelineDataAct.out_PastEventsOut;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lTJrDY250UCIjxH3OkDJ2g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // UpcomingEventsData = GetEventsForMyTimeline.Out_UpcomingEvents
                    model.variables.upcomingEventsDataVar = model.variables.getEventsForMyTimelineDataAct.out_UpcomingEventsOut;
                    // MyTimeline?
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XvGcmEjIl0ak9X+WwiWHZg", callContext.id) && (model.variables.currentEventViewVar === Connect2_OrbitMobile_MUIModel.staticEntities.eventView.myTimeline))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4q9ducyuvUqQpGooVVS5nQ", callContext.id);
                        controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_OnAfterFetch_GetEventsForMyTimeline_ScrollToTopJS, "ScrollToTop", "OnAfterFetch_GetEventsForMyTimeline", null, function($parameters) {}, {}, {});
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CtHQ6CYlwUGMEsGhgTc1DQ", callContext.id);
                    // Execute Action: ListAppendAll_Past
                    OS.SystemActions.listAppendAll(model.variables.pastEventsDataVar, model.variables.getEventsForMyTimelineDataAct.out_PastEventsOut, callContext);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RdtTIaMCU06iTXL3ngys6A", callContext.id);
                    // Execute Action: ListAppendAll_Upcoming
                    OS.SystemActions.listAppendAll(model.variables.upcomingEventsDataVar, model.variables.getEventsForMyTimelineDataAct.out_UpcomingEventsOut, callContext);
                }

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oALw3oubBEOt6VNg2sTQoA", callContext.id);
                // IsFetchingMyTimeline = False
                model.variables.isFetchingMyTimelineVar = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1LWDpwCJYUWA95qsviUJgw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KrEwwukFGUyCllnVkkUknQ", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_ExpandToggled$vars"))());
            vars.value.isExpandedInLocal = isExpandedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5jQpxrbbF0KWl5yI0m5a5A:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.5jQpxrbbF0KWl5yI0m5a5A:gwKuULv5bscMXm+Remgkdg", "Connect2_OrbitMobile_MUI", "OnHandle_ExpandToggled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m2xv+XltxUKHztvZHsvXCA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p1KHwXiMZEOdADCjFyxG2Q", callContext.id);
                // IsWeekMonthCalendarExpanded = IsExpanded
                model.variables.isWeekMonthCalendarExpandedVar = vars.value.isExpandedInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YPZdOHcBQEmqGEwr3SjkWA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5jQpxrbbF0KWl5yI0m5a5A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_ExpandToggled$vars", [{
            name: "IsExpanded",
            attrName: "isExpandedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vcuIzr4cVUq895ZGt30Slw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.vcuIzr4cVUq895ZGt30Slw:B7xlZMBX+gQuIoOj4Ygnrg", "Connect2_OrbitMobile_MUI", "OnHandle_SwipeUp", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OpVEhLRzhkWZDM4YhikEGQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I9Ed0x7BJk+DD0BDivuTrQ", callContext.id);
                // Execute Action: IncrementMyTimelineDates
                controller._incrementMyTimelineDates$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G8fvZxIe+UytGp1oJ16ijw", callContext.id);
                // Refresh Query: GetEventsForMyTimeline
                var result = controller.getEventsForMyTimeline$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GANcpzqxyk6gh8GUsj26Cg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vcuIzr4cVUq895ZGt30Slw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vcuIzr4cVUq895ZGt30Slw", callContext.id);
                throw ex;

            });
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mHsO2JOxYk2Yq0fpqozTSQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.mHsO2JOxYk2Yq0fpqozTSQ:S1y6jiFALsBPwYLlwyWsaQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhonePopupEvent_Call", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NZcMl410qkaGMyINme47VA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oIFOxoc4dU223LcNFoM9EA", callContext.id);
                // Execute Action: OnHandle_ContactByPhonePopupEvent_Cancel
                controller._onHandle_ContactByPhonePopupEvent_Cancel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9y+Hzxi+nUSPwwR6Zjst3Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mHsO2JOxYk2Yq0fpqozTSQ", callContext.id);
            }

        };
        Controller.prototype._logClickedEventAudit$Action = function(in_AuditEventIdIn, in_EventHostIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("LogClickedEventAudit");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.LogClickedEventAudit$vars"))());
            vars.value.in_AuditEventIdInLocal = in_AuditEventIdIn;
            vars.value.in_EventHostIdInLocal = in_EventHostIdIn;
            var listFilter_UpcomingVar = new OS.DataTypes.VariableHolder();
            var listFilter_CalendarVar = new OS.DataTypes.VariableHolder();
            var listFilter_PastEventsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilter_UpcomingVar = listFilter_UpcomingVar;
            varBag.listFilter_CalendarVar = listFilter_CalendarVar;
            varBag.listFilter_PastEventsVar = listFilter_PastEventsVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+QRs40UGVEe6qeQLgadewg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.+QRs40UGVEe6qeQLgadewg:fbncDtX1aGl7xQTGM1LM4g", "Connect2_OrbitMobile_MUI", "LogClickedEventAudit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HF0s+SxH9UCjqcAXyIbi2w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Calendar Event?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UbnAe27bPEKuR_bKIxV+4Q", callContext.id) && (vars.value.in_AuditEventIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.calendarEventClicked))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I4sKb31hKkmNY0bLCA4uWg", callContext.id);
                        // Execute Action: ListFilter_Calendar
                        listFilter_CalendarVar.value = OS.SystemActions.listFilter(model.variables.calendarEventsVar, function(p) {
                            return OS.BuiltinFunctions.textToLongInteger(p.idAttr).equals(vars.value.in_EventHostIdInLocal);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Zrj6bnOstUKF1Wrv7oLfpw", callContext.id);
                        // Execute Action: AddAuditClickedEvent_Calendar
                        model.flush();
                        return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(vars.value.in_AuditEventIdInLocal, OS.BuiltinFunctions.textToLongInteger(listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).idAttr), listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).titleAttr, OS.BuiltinFunctions.dateTimeToDate(listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).startAttr), listFilter_CalendarVar.value.filteredListOut.getCurrent(callContext.iterationContext).extraAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QsL9p4gMV0ubQ1WgQWKy5A", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NzIMKNakFEeNtuv5glWvnQ", callContext.id);
                        // Execute Action: ListFilter_Upcoming
                        listFilter_UpcomingVar.value = OS.SystemActions.listFilter(model.variables.upcomingEventsDataVar, function(p) {
                            return p.eventHostIdAttr.equals(vars.value.in_EventHostIdInLocal);
                        }, callContext);

                        // Found Data?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3c3iv4cGJU+yys+0C757+g", callContext.id) && !(listFilter_UpcomingVar.value.filteredListOut.isEmpty))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vHu17JNZa0q7h8cDsOrsoQ", callContext.id);
                                // Execute Action: AddAuditClickedEvent_Upcoming
                                model.flush();
                                return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(vars.value.in_AuditEventIdInLocal, listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventHostIdAttr, listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventNameAttr, OS.BuiltinFunctions.textToDate(listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventDateAttr), listFilter_UpcomingVar.value.filteredListOut.getCurrent(callContext.iterationContext).hostLocalityAttr, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QsL9p4gMV0ubQ1WgQWKy5A", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8mt8_O6HhU2ilv+UcbpJOg", callContext.id);
                                // Execute Action: ListFilter_PastEvents
                                listFilter_PastEventsVar.value = OS.SystemActions.listFilter(model.variables.pastEventsDataVar.getCurrent(callContext.iterationContext).eventsCalendarAttr, function(p) {
                                    return p.eventHostIdAttr.equals(vars.value.in_EventHostIdInLocal);
                                }, callContext);

                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WisFi2blNUiZc21D8XhOFw", callContext.id);
                                // Execute Action: AddAuditClickedEvent_PastEvent
                                model.flush();
                                return Connect2_OrbitMobile_MUIController.default.addAuditClickedEvent$Action(vars.value.in_AuditEventIdInLocal, listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventHostIdAttr, listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventNameAttr, OS.BuiltinFunctions.textToDate(listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).eventDateAttr), listFilter_PastEventsVar.value.filteredListOut.getCurrent(callContext.iterationContext).hostLocalityAttr, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QsL9p4gMV0ubQ1WgQWKy5A", callContext.id);
                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+QRs40UGVEe6qeQLgadewg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+QRs40UGVEe6qeQLgadewg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.LogClickedEventAudit$vars", [{
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Yje87aUPpEy6_dwbc+lsyw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.Yje87aUPpEy6_dwbc+lsyw:mDBym77YOgg0EOohpe+qTg", "Connect2_OrbitMobile_MUI", "OnClick_Calendar", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cmphusA95EWU2LaZ0MJTIw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CmMloMxzQEWr8ShsdJpw8Q", callContext.id);
                // Trigger Event: NavigateToMyCalendar
                return controller.navigateToMyCalendar$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JCzXaz3PzUucno8th9xIlw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Yje87aUPpEy6_dwbc+lsyw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Yje87aUPpEy6_dwbc+lsyw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._setViewContainerHeight$Action = function(isResetIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetViewContainerHeight");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.SetViewContainerHeight$vars"))());
            vars.value.isResetInLocal = isResetIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tiWh8kDCZUWmyiGyUO5CDw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.tiWh8kDCZUWmyiGyUO5CDw:F_fhdKFyakCG+yFlPXVWow", "Connect2_OrbitMobile_MUI", "SetViewContainerHeight", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AdxwK7X4Y0S9CMxePnDq9Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KUGfl88rcEyDcPXoiL_1FA", callContext.id);
                controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_MyEvents_V2_mvc_controller_SetViewContainerHeight_SetViewContainerHeightJS, "SetViewContainerHeight", "SetViewContainerHeight", {
                    IsReset: OS.DataConversion.JSNodeParamConverter.to(vars.value.isResetInLocal, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G7vocaCjakm+d6VGiBNPIQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tiWh8kDCZUWmyiGyUO5CDw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.SetViewContainerHeight$vars", [{
            name: "IsReset",
            attrName: "isResetInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:PfUl81mqW06don31VCRCmw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.PfUl81mqW06don31VCRCmw:iTagDDXfcdbLiVfWOvMaOA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventsForCalendar", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HlCp0obIZkiVIO0y5ZTE6g", callContext.id);
                // Set Calendar Events Data
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SMmKXwrXLEKEL_qIvMJHjw", callContext.id);
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
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jdfb4D9_z0S0K0NTftFX3w", callContext.id);
                // IsFetchingEvents = False
                model.variables.isFetchingEventsVar = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MnuYAzraUUqkzG8XuJ4urg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:PfUl81mqW06don31VCRCmw", callContext.id);
            }

        };
        Controller.prototype._onHandle_PhoneCall$Action = function(event_CallPopupDataIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_PhoneCall");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_PhoneCall$vars"))());
            vars.value.event_CallPopupDataInLocal = event_CallPopupDataIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:91qk9QE6tEyBeuqeHWcTlw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.91qk9QE6tEyBeuqeHWcTlw:+G6SLYJulSYn38H+Tw8HzQ", "Connect2_OrbitMobile_MUI", "OnHandle_PhoneCall", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UqudPgvDAkWOQwTTtY+kDw", callContext.id);
                // Has Phone Number
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZQ9YYbIKME+CcMP3tFdy3A", callContext.id) && !(((((vars.value.event_CallPopupDataInLocal.phoneAttr === "") && (vars.value.event_CallPopupDataInLocal.mobilePhoneAttr === "")) && (vars.value.event_CallPopupDataInLocal.homePhoneAttr === "")) && (vars.value.event_CallPopupDataInLocal.workPhoneAttr === ""))))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iiv9pSP4CUCUlG7wUDF2tA", callContext.id);
                    // ContactByPhoneData = Event_CallPopupData
                    model.variables.contactByPhoneDataVar = vars.value.event_CallPopupDataInLocal;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jO6fNC0kz0uMxR72j5d5SQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FQ+S+trku0WVhFGEeUWR0Q", callContext.id);
                    OS.FeedbackMessageService.showFeedbackMessage("Phone number is not available", /*Info*/ 0);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jO6fNC0kz0uMxR72j5d5SQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:91qk9QE6tEyBeuqeHWcTlw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_PhoneCall$vars", [{
            name: "Event_CallPopupData",
            attrName: "event_CallPopupDataInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.ContactByPhonePopupDataRec();
            },
            complexType: UBTConnect_UtilsModel.ContactByPhonePopupDataRec
        }]);
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ENTL91WFpUqk9UriMo7aRA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.ENTL91WFpUqk9UriMo7aRA:kkMQhUCSx6+GpyjX_V05Eg", "Connect2_OrbitMobile_MUI", "IncrementMyTimelineDates", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sZL+qtScDU2zUHL3bJcwOg", callContext.id);
                // Set Dates
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fXyQ4H514Emt90kEMfhjRg", callContext.id);
                // PastEventFilters.ToDate = PastEventFilters.FromDate
                model.variables.pastEventFiltersVar.toDateAttr = model.variables.pastEventFiltersVar.fromDateAttr;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fXyQ4H514Emt90kEMfhjRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // PastEventFilters.FromDate = DateTimeToDate
                model.variables.pastEventFiltersVar.fromDateAttr = OS.BuiltinFunctions.dateTimeToDate(OS.BuiltinFunctions.addMonths(model.variables.pastEventFiltersVar.fromDateAttr, -model.variables.defaultDateRangeInMonthsVar));
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YhyHxWE07EqOjwzHhq+AJQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ENTL91WFpUqk9UriMo7aRA", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_MyTimelineFilter$vars"))());
            vars.value.in_SelectedFiltersInLocal = in_SelectedFiltersIn.clone();
            var validateSameFiltersVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.validateSameFiltersVar = validateSameFiltersVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:WoRz_cOk+ESLsDXqbNQSjA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ/ClientActions.WoRz_cOk+ESLsDXqbNQSjA:AFqkrgbeemiXpfGyfZiyYg", "Connect2_OrbitMobile_MUI", "OnHandle_MyTimelineFilter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OWzGPtugBkm299+4JE_6Iw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BH8Qvl7HFkuM6bn2OK+_bw", callContext.id);
                // Execute Action: ValidateSameFilters
                validateSameFiltersVar.value = Connect2_OrbitMobile_MUIController.default.validateSameFilters$Action(vars.value.in_SelectedFiltersInLocal, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.pastEventFiltersVar, new Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec(), function(source, target) {
                    target.fromDateAttr = source.fromDateAttr;
                    target.toDateAttr = source.toDateAttr;
                    return target;
                }), callContext);

                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G2o2bKQ8u0SvelkwJC1vdQ", callContext.id) && validateSameFiltersVar.value.out_SameFiltersOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9ACr345PxU+vODXeDR_bSA", callContext.id);
                        // Execute Action: AddAuditEventFilterEvent_SameFilters
                        model.flush();
                        return Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineApplyFilter, vars.value.in_SelectedFiltersInLocal, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bsuFn3Tl6UCXtHTssAIdNA", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+i0BuETBK0GoN0ULETTGYQ", callContext.id);
                        // Execute Action: ListClear_PastEvents
                        OS.SystemActions.listClear(model.variables.pastEventsDataVar, callContext);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Lo4aws0oUKhYFHqFSQfig", callContext.id);
                        // Execute Action: ListClear_Upcoming
                        OS.SystemActions.listClear(model.variables.upcomingEventsDataVar, callContext);
                        // IsFiltering
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:quGr2SXK3USQlad2eoY0XQ", callContext.id);
                        // IsFiltering = True
                        model.variables.isFilteringVar = true;
                        // Set Filters
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hI1ntwKTNk28k4CihtoMrg", callContext.id);
                        // PastEventFilters = In_SelectedFilters
                        model.variables.pastEventFiltersVar = vars.value.in_SelectedFiltersInLocal;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oV1KJEZ9yEGTVgQJ00mBTg", callContext.id);
                        // Execute Action: GetMyTimelineData
                        return controller._getMyTimelineData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A7bW65VaUkGza+egvfMTDA", callContext.id);
                            // Execute Action: AddAuditEventFilterEvent
                            model.flush();
                            return Connect2_OrbitMobile_MUIController.default.addAuditEventFilterEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineApplyFilter, vars.value.in_SelectedFiltersInLocal, callContext);
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VuIyrEDzJEGqicsEe6TZPA", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WoRz_cOk+ESLsDXqbNQSjA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WoRz_cOk+ESLsDXqbNQSjA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.OnHandle_MyTimelineFilter$vars", [{
            name: "In_SelectedFilters",
            attrName: "in_SelectedFiltersInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec
        }]);

        Controller.prototype.onHandle_ContactByMessage_ClickedEmail$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage_ClickedEmail$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByMessage_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage_Cancel$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByMessage$Action = function(event_ContactPopupDataIn, event_CountryNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage$Action, callContext, event_ContactPopupDataIn, event_CountryNameIn);

        };
        Controller.prototype.checkDateBoundaries$Action = function(in_DateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._checkDateBoundaries$Action, callContext, in_DateIn);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.getMyTimelineData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getMyTimelineData$Action, callContext);

        };
        Controller.prototype.onHandle_DateClicked$Action = function(in_ClickedDateIn, in_IsToAuditIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_DateClicked$Action, callContext, in_ClickedDateIn, in_IsToAuditIn);

        };
        Controller.prototype.onScrollEnding_MyTimeline$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onScrollEnding_MyTimeline$Action, callContext);

        };
        Controller.prototype.onHandle_EventClicked$Action = function(in_EventHostIdIn, in_EventIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_EventClicked$Action, callContext, in_EventHostIdIn, in_EventIdIn);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.setScrollAmount$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setScrollAmount$Action, callContext);

        };
        Controller.prototype.onHandle_ResetFilters$Action = function(in_ResetFiltersIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ResetFilters$Action, callContext, in_ResetFiltersIn);

        };
        Controller.prototype.onHandle_HouseholdClicked$Action = function(in_HouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_LengthIn, in_EventHostIdIn, in_EventIdIn, in_RecordDisabledIn, in_IsHostingIn, isHouseholdDisplayedIn, in_HouseholdIdListIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_HouseholdClicked$Action, callContext, in_HouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_LengthIn, in_EventHostIdIn, in_EventIdIn, in_RecordDisabledIn, in_IsHostingIn, isHouseholdDisplayedIn, in_HouseholdIdListIn);

        };
        Controller.prototype.getEventCalendarData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getEventCalendarData$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByPhonePopupEvent_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByPhonePopupEvent_Cancel$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetEventsForMyTimeline$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventsForMyTimeline$Action, callContext);

        };
        Controller.prototype.onHandle_ExpandToggled$Action = function(isExpandedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ExpandToggled$Action, callContext, isExpandedIn);

        };
        Controller.prototype.onHandle_SwipeUp$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_SwipeUp$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByPhonePopupEvent_Call$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByPhonePopupEvent_Call$Action, callContext);

        };
        Controller.prototype.logClickedEventAudit$Action = function(in_AuditEventIdIn, in_EventHostIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._logClickedEventAudit$Action, callContext, in_AuditEventIdIn, in_EventHostIdIn);

        };
        Controller.prototype.onClick_Calendar$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Calendar$Action, callContext);

        };
        Controller.prototype.setViewContainerHeight$Action = function(isResetIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setViewContainerHeight$Action, callContext, isResetIn);

        };
        Controller.prototype.onAfterFetch_GetEventsForCalendar$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventsForCalendar$Action, callContext);

        };
        Controller.prototype.onHandle_PhoneCall$Action = function(event_CallPopupDataIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_PhoneCall$Action, callContext, event_CallPopupDataIn);

        };
        Controller.prototype.incrementMyTimelineDates$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._incrementMyTimelineDates$Action, callContext);

        };
        Controller.prototype.onHandle_MyTimelineFilter$Action = function(in_SelectedFiltersIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_MyTimelineFilter$Action, callContext, in_SelectedFiltersIn);

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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsadKUxZz0+omagmDt0wFQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ:TG3hGul8Bx_v2kAU82Nhuw", "Connect2_OrbitMobile_MUI", "LDM_ScreenBlocks_V2", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1rlfP1owDEWuz9VnpH59bQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.1rlfP1owDEWuz9VnpH59bQ:fwak1Fg6gXVhk6VRVqCtEQ", "Connect2_OrbitMobile_MUI", "ScreenBlock_MyEvents_V2", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1rlfP1owDEWuz9VnpH59bQ", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gsadKUxZz0+omagmDt0wFQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2 On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2 On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_MyEvents_V2 On Destroy");
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
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnDestroy.ExecuteScrollCallbackJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.ScrollCallback) {
            $parameters.ScrollCallback();
        }
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetScrollAmount.GetScrollTopJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.ScrollAmount = document.querySelector(".content").scrollTop;
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.OnAfterFetch_GetEventsForMyTimeline.ScrollToTopJS", [], function() {
    return function($actions, $roles, $public) {
        document.querySelector(".content").scrollTop = 0;
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$controller.SetViewContainerHeight.SetViewContainerHeightJS", [], function() {
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

define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_MyEvents_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "6DfbH3tN_0i+w2lQRY0f_A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_ContactPopupDataInLocal;
            }
        },
        "t78Fv2BfLEuIWX8iuwvO8A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_CountryNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KhYm_umsE0+WOx2AcT4XuA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_DateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "FYwKYamKk0CsIZ2F1Tp2yg": {
            getter: function(varBag, idService) {
                return varBag.executeScrollCallbackJSResult.value;
            }
        },
        "TOPCNPQ6ZUGqOKA9hwxd4w": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "9L86TQjBTkKD7FIpjnTyww": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "OpJJVwT2mE6EMJrWWe3bJg": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_EndVar.value;
            }
        },
        "tbvEuipfUkWWp+kJbRUzNA": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_StartVar.value;
            }
        },
        "_FUrqv5hwE2_gnSUojN15w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ClickedDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "xdPSjkQo0E2QSbNp8pzH0A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsToAuditInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Jtobl2jA7kCcWY8VUc4WJA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.maxAgeDaysFetchThresholdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "4GJ7RRHs8EuGpnTX2Cj+sA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "z0rq6+RzT0KinYEHU7_2aQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "7y4kfjcCUESROCxIXSeeJg": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "OTtCvjF61EKrh_zYbjIvCg": {
            getter: function(varBag, idService) {
                return varBag.getScrollTopJSResult.value;
            }
        },
        "dFy88Tn1IUOy8LNL30ezoQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ResetFiltersInLocal;
            }
        },
        "e38Ovvgbv0u2wZC04OpWvA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "DH3AmIZ2kkyw2hbxO4oXQA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "YiO7FuHJZUKpzbfWASWFMQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_CurrentRowNumberInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "TvAFFRnLkkC6lmwW_re5rQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_LengthInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "UN_c_j74J0e1WRXJ1_iuUQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "R7V3YPRFZ0yxUtHUpy3ukg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Mj4tIPmPKkGoRx10hWBQ3g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_RecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "QQ6b_WCXhEWbwt5T1UyQLg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsHostingInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "tCb_8QBT70qmHSmwnz3vCw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isHouseholdDisplayedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "KLmYAMx0NUmPegJEgYyEDA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdIdListInLocal;
            }
        },
        "vOhP5t_oLUCTWQbVAdJtTg": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_EndVar.value;
            }
        },
        "ywfR8HK_h0KcXyp8dMyEjA": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_StartVar.value;
            }
        },
        "KsI8LU55LEqU9mtk+OsZ7w": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "4q9ducyuvUqQpGooVVS5nQ": {
            getter: function(varBag, idService) {
                return varBag.scrollToTopJSResult.value;
            }
        },
        "SEW2ufdgFEO+53PFuCUBQA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isExpandedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "KfkFGdC6e0KUoS+TMc69SQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_AuditEventIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "radC+17dzkC5vVmEK_cPcw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventHostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "NzIMKNakFEeNtuv5glWvnQ": {
            getter: function(varBag, idService) {
                return varBag.listFilter_UpcomingVar.value;
            }
        },
        "I4sKb31hKkmNY0bLCA4uWg": {
            getter: function(varBag, idService) {
                return varBag.listFilter_CalendarVar.value;
            }
        },
        "8mt8_O6HhU2ilv+UcbpJOg": {
            getter: function(varBag, idService) {
                return varBag.listFilter_PastEventsVar.value;
            }
        },
        "xLPkAN88KE6tPPXi2_5bbw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isResetInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "KUGfl88rcEyDcPXoiL_1FA": {
            getter: function(varBag, idService) {
                return varBag.setViewContainerHeightJSResult.value;
            }
        },
        "QdJWw1p+Lk28e_765gNRyg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_CallPopupDataInLocal;
            }
        },
        "DvKy_hpHIEuCqoeyEoe7gA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SelectedFiltersInLocal;
            }
        },
        "BH8Qvl7HFkuM6bn2OK+_bw": {
            getter: function(varBag, idService) {
                return varBag.validateSameFiltersVar.value;
            }
        },
        "uU+tPcEYh0OJ5rtQbIkWog": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentEventViewVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "hgOf__BLgUWDBJQ5wluosQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentCalendarDateVar;
            }
        },
        "znm4uYK1j0+xKzeW3p6QxA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.calendarEventsVar;
            }
        },
        "DeXfNf8dmkO9ti1yDpEC2w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pastEventsDataVar;
            }
        },
        "8ZTDFhQIR0yGf6qbykgcfA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.upcomingEventsDataVar;
            }
        },
        "nQi2WkuzLEK8iNfaEbs0jQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventFiltersVar;
            }
        },
        "q5lj_AaVFkmUjDAjf7zvmw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pastEventFiltersVar;
            }
        },
        "OvfS4esEJ0yPJRWrpwGQ6A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingEventsVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "wq87tBuu8UyFYx4nzQSQzg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingMyTimelineVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "4drGBp2XLUe+ug2_w3nYmQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isWeekMonthCalendarExpandedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "MQMnEfwLyUS178iqTMiTIQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.defaultDateRangeInMonthsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "vp34JojJ+0G9tHEynJ+MYQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFilteringVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "oeh29_Db20C5VVoiNyaEYQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.scrollAmountInPxVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "nJ6E152xdE2chZqjKVZAyg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.scrollEventCallbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "1h_AWAHpSU+sONi37vE0SA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactByPhoneDataVar;
            }
        },
        "8Gzwtfilq0Ks1h9eocCu2Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactByMessagePopupDataVar;
            }
        },
        "iOeLAsKWYE+8pVS_Yzp9QA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getEventsForMyTimelineDataAct;
            }
        },
        "qcjU09eCw0eP4ye1tj682w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getEventsForCalendarDataAct;
            }
        },
        "KU6Szi+o5Uq7xY14M5lKGw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "YMnV74OPd0Kp1I61gNrqmg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "tq1UB1LYXUKE0DNzJV8ZCA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "UyN5WJL5aE+neD5a0qOuhA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MyTimelineView"));
                })(varBag.model, idService);
            }
        },
        "cbptTyiAJkOBUALoe+Pz6Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Popover_DateSelector"));
                })(varBag.model, idService);
            }
        },
        "mkgj6Jfcr0i6JyMPJC1j2Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "DBd6oLG_YEi7ywm4vqjV4Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "TMigyh_l_k+NOvk95OFJvw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "VEo5nrPLaUuQ3oyxdJBGDg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsAgendaOrDay"));
                })(varBag.model, idService);
            }
        },
        "8xxjFGZgb02n5Od75odnSA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FCWeekMonth"));
                })(varBag.model, idService);
            }
        },
        "exjT+_kHYUG3YXHvVSyxCg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "_6I2mplbw0SXsHGeKw23Jw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Month_or_Day_View"));
                })(varBag.model, idService);
            }
        },
        "unYqCeu9BUOVWdljh28dSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsMonth"));
                })(varBag.model, idService);
            }
        },
        "GASzCUHJ20q0LcV9ZhEqRQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasNoFetchError"));
                })(varBag.model, idService);
            }
        },
        "YOGtOYGwvkm0VgPlXj1N9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsFetchingEventsData"));
                })(varBag.model, idService);
            }
        },
        "sbpsV+kgZU6NC304hg+dYw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LoadingCont"));
                })(varBag.model, idService);
            }
        },
        "DD_mIb3T2kG0XJNg9T8lxw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Loading"));
                })(varBag.model, idService);
            }
        },
        "mgYbRNS5WUq1+bC2XfNQvA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Months"));
                })(varBag.model, idService);
            }
        },
        "bSkgL3YxoEynBdrVCPYiZg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsDay"));
                })(varBag.model, idService);
            }
        },
        "FkojnJULuUW7V8Izd6UIsA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Days"));
                })(varBag.model, idService);
            }
        },
        "Yne75zIdYEOr0Gtqu3AvxA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsMyTimelineView"));
                })(varBag.model, idService);
            }
        },
        "NHFvbvqSqUmQAL24LyQ27g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MyTimeline_V2"));
                })(varBag.model, idService);
            }
        },
        "421M9Bs+_0C7IyYxWxciCQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsAgenda"));
                })(varBag.model, idService);
            }
        },
        "KP43InEwOUK50h6xwq5VKw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Agenda_V2"));
                })(varBag.model, idService);
            }
        },
        "umhr2ICHr0Wf1biE7m8kuA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
                })(varBag.model, idService);
            }
        },
        "Qcd1nNDtP0ar9iKref8Hnw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "fOkVKp5RCUuhYsqZy0YSuQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "+8gGb9e17kilFIPo03V+sg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "AemR2sBF7EiU3rKEwFFXDA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});