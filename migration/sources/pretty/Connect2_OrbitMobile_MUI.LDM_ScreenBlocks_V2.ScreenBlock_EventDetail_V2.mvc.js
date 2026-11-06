define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "APIDomain_Directory_IS.model", "CommonPlugin.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Section.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SpecialNeeds_ListItem.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$model", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "Connect2_OrbitMobile_MUI.controller$FormatDateForEventBanner", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "UBTConnectLibrary.model$NotesRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "Connect2_OrbitMobile_MUI.model$Note_ItemList", "Connect2_OrbitMobile_IS.model$DetailGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$TimezoneRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.controller$IsFreeSubscriptionPlan", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemExtList", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselServerItemList", "Connect2_OrbitMobile_MUI.controller$CarouselFilteredEventResults", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "Connect2_OrbitMobile_IS.model$DetailGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$DetailGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "CommonPlugin.controller$GetOperatingSystem", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "Connect2_LegacyShared.controller$CleanAddressForMaps", "Connect2_OrbitMobile_BL.model$HostDetailsRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$GetEventCalendarDetailResponse_V2Rec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsModel, UBTConnectLibraryModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsController, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, APIDomain_Directory_ISModel, CommonPluginController, Connect2_OrbitMobile_BLModel, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Section_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SpecialNeeds_ListItem_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvcModel, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel) {
    var OS = OutSystems.Internal;

    var GetCoordinatorDetailsDataActRec = (function(_super) {
        __extends(GetCoordinatorDetailsDataActRec, _super);

        function GetCoordinatorDetailsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetCoordinatorDetailsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_CoordinatorDetails", "out_CoordinatorDetailsOut", "Out_CoordinatorDetails", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.HostDetailsRec());
                }, true, Connect2_OrbitMobile_BLModel.HostDetailsRec),
                this.attr("Out_HasContent", "out_HasContentOut", "Out_HasContent", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, true),
                this.attr("EventName", "eventNameOut", "EventName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetCoordinatorDetailsDataActRec.init();
        return GetCoordinatorDetailsDataActRec;
    })(OS.Model.DataSourceRecord);
    var FetchEventNotesDataActRec = (function(_super) {
        __extends(FetchEventNotesDataActRec, _super);

        function FetchEventNotesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        FetchEventNotesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Notes", "notesOut", "Notes", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
                }, true, UBTConnectLibraryModel.NotesRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FetchEventNotesDataActRec.fromStructure = function(str) {
            return new FetchEventNotesDataActRec(new FetchEventNotesDataActRec.RecordClass({
                notesOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FetchEventNotesDataActRec.init();
        return FetchEventNotesDataActRec;
    })(OS.Model.DataSourceRecord);
    var GetEventByEventIdDataActRec = (function(_super) {
        __extends(GetEventByEventIdDataActRec, _super);

        function GetEventByEventIdDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetEventByEventIdDataActRec.attributesToDeclare = function() {
            return [
                this.attr("EventResponse", "eventResponseOut", "EventResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetEventCalendarDetailResponse_V2Rec());
                }, true, Connect2_OrbitMobile_ISModel.GetEventCalendarDetailResponse_V2Rec),
                this.attr("Out_HasContent", "out_HasContentOut", "Out_HasContent", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetEventByEventIdDataActRec.init();
        return GetEventByEventIdDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsFetching", "isFetchingVar", "IsFetching", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MinBannerHeight", "minBannerHeightVar", "MinBannerHeight", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 210;
                }, false),
                this.attr("SquarePhotoPx", "squarePhotoPxVar", "SquarePhotoPx", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 45;
                }, false),
                this.attr("HasInformation", "hasInformationVar", "HasInformation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MaxPhotoWidth", "maxPhotoWidthVar", "MaxPhotoWidth", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 100;
                }, false),
                this.attr("MaxPhotoHeight", "maxPhotoHeightVar", "MaxPhotoHeight", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 55;
                }, false),
                this.attr("ContactByPhoneData", "contactByPhoneDataVar", "ContactByPhoneData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec),
                this.attr("ContactByMessagePopupData", "contactByMessagePopupDataVar", "ContactByMessagePopupData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord());
                }, false, Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord),
                this.attr("ContactByMessagePopupData_IsCoordinator", "contactByMessagePopupData_IsCoordinatorVar", "ContactByMessagePopupData_IsCoordinator", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("EventNotes", "eventNotesVar", "EventNotes", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
                }, false, UBTConnectLibraryModel.NotesRec),
                this.attr("EventHostId", "eventHostIdIn", "EventHostId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_eventHostIdInDataFetchStatus", "_eventHostIdInDataFetchStatus", "_eventHostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("EventId", "eventIdIn", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", "_eventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetCoordinatorDetails", "getCoordinatorDetailsDataAct", "getCoordinatorDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetCoordinatorDetailsDataActRec());
                }, true, GetCoordinatorDetailsDataActRec),
                this.attr("FetchEventNotes", "fetchEventNotesDataAct", "fetchEventNotesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FetchEventNotesDataActRec());
                }, true, FetchEventNotesDataActRec),
                this.attr("GetEventByEventId", "getEventByEventIdDataAct", "getEventByEventIdDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetEventByEventIdDataActRec());
                }, true, GetEventByEventIdDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((((((((((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Section_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SpecialNeeds_ListItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("EventHostId" in inputs) {
                this.variables.eventHostIdIn = inputs.EventHostId;
                if ("_eventHostIdInDataFetchStatus" in inputs) {
                    this.variables._eventHostIdInDataFetchStatus = inputs._eventHostIdInDataFetchStatus;
                }

            }

            if ("EventId" in inputs) {
                this.variables.eventIdIn = inputs.EventId;
                if ("_eventIdInDataFetchStatus" in inputs) {
                    this.variables._eventIdInDataFetchStatus = inputs._eventIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2");
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "APIDomain_Directory_IS.model", "CommonPlugin.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$model", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventsDetail_Content.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Section.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SpecialNeeds_ListItem.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$view", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "Connect2_OrbitMobile_MUI.controller$FormatDateForEventBanner", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "UBTConnectLibrary.model$NotesRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "Connect2_OrbitMobile_MUI.model$Note_ItemList", "Connect2_OrbitMobile_IS.model$DetailGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$TimezoneRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.controller$IsFreeSubscriptionPlan", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemExtList", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselServerItemList", "Connect2_OrbitMobile_MUI.controller$CarouselFilteredEventResults", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "Connect2_OrbitMobile_IS.model$DetailGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$DetailGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "CommonPlugin.controller$GetOperatingSystem", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "Connect2_LegacyShared.controller$CleanAddressForMaps", "Connect2_OrbitMobile_BL.model$HostDetailsRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$GetEventCalendarDetailResponse_V2Rec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsModel, UBTConnectLibraryModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsController, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, APIDomain_Directory_ISModel, CommonPluginController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_model, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Section_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SpecialNeeds_ListItem_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view) {
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
        View.displayName = "LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Section_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SpecialNeeds_ListItem_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller;
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
                        return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
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
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "text-align-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.isFetchingVar, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Expression, {
                                value: model.getCachedValue(idService.getId("3VwwAdu5FEGoyJZjxDo00Q.Value"), function() {
                                    return (((!(model.variables.hasInformationVar) || model.variables.getEventByEventIdDataAct.hasFetchErrorAttr)) ? ("No Event Available") : (OutSystemsDebugger.handleFunctionCall(function() {
                                        return Connect2_OrbitMobile_MUIController.default.formatDateForEventBanner$Action(OS.BuiltinFunctions.textToDate(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr), callContext).out_FormattedDateOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id)));
                                }, function() {
                                    return model.variables.hasInformationVar;
                                }, function() {
                                    return model.variables.getEventByEventIdDataAct.hasFetchErrorAttr;
                                }, function() {
                                    return model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr;
                                }),
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                            })];
                        }))];
                    }),
                    headerRight: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [$if(!(model.variables.getEventByEventIdDataAct.hasFetchErrorAttr), false, this, function() {
                            return [$if(!(model.variables.isFetchingVar), false, this, function() {
                                return [$if(model.variables.hasInformationVar, false, this, function() {
                                    return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventsDetail_Content_mvc_view, {
                                        inputs: {
                                            In_MinBannerHeight: model.variables.minBannerHeightVar
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
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            banner_Placeholder: new PlaceholderContent(function() {
                                                return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_view, {
                                                    inputs: {
                                                        In_ImageURL: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.signedHallPhotoAttr,
                                                        _in_ImageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                        In_EventLocation: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr,
                                                        _in_EventLocationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                        In_Adults: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.adultsAttr,
                                                        _in_AdultsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                        In_Children: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.childrenAttr,
                                                        _in_ChildrenInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                        In_IsCoordinatorAvailable: model.variables.getCoordinatorDetailsDataAct.out_HasContentOut,
                                                        _in_IsCoordinatorAvailableInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCoordinatorDetailsDataAct.dataFetchStatusAttr),
                                                        In_IsHost: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr,
                                                        _in_IsHostInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                        In_EventDate: model.getCachedValue(idService.getId("NuJhdd55MUS2utQmKxhKkw.In_EventDate"), function() {
                                                            return OS.BuiltinFunctions.textToDate(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr);
                                                        }, function() {
                                                            return model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr;
                                                        }),
                                                        _in_EventDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                        In_MinHeight: model.variables.minBannerHeightVar
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        contactOrganiser$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_Banner ContactOrganiser");
                                                                    return controller.onHandle_ContactOrganiser$Action(controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });
                                                            });;
                                                        },
                                                        setContainerHeight$Action: function(event_BannerHeightIn) {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_Banner SetContainerHeight");
                                                                controller.onHandle_SetContainerHeight$Action(event_BannerHeightIn, controller.callContext(eventHandlerContext));
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
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            }),
                                            guestView_Placeholder: new PlaceholderContent(function() {
                                                return [$if(!(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr), false, this, function() {
                                                    return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_view, {
                                                        inputs: {
                                                            In_HostURL: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.signedURLAttr,
                                                            _in_HostURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            In_HostEmail: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.emailAttr,
                                                            _in_HostEmailInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            In_IsHost: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr,
                                                            _in_IsHostInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            In_Address: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.formattedAddressAttr,
                                                            _in_AddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            MaxPhotoHeight: model.variables.maxPhotoHeightVar,
                                                            EventNotes: model.variables.eventNotesVar,
                                                            In_IsAssigned: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.isPublishedAttr,
                                                            _in_IsAssignedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            In_HostName: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householderNameAttr,
                                                            _in_HostNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            EventHostId: model.variables.eventHostIdIn,
                                                            _eventHostIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._eventHostIdInDataFetchStatus),
                                                            MaxPhotoWidth: model.variables.maxPhotoWidthVar,
                                                            In_Phone: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.phoneAttr,
                                                            _in_PhoneInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            EventId: model.variables.eventIdIn,
                                                            _eventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._eventIdInDataFetchStatus),
                                                            HouseholdDisplay: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householdDisplayAttr,
                                                            _householdDisplayInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            handlerOn_NoteDeleted$Action: function(noteIdIn, wasLastNoteIn) {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard HandlerOn_NoteDeleted");
                                                                    controller.handlerOn_NoteDeleted$Action(noteIdIn, controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });

                                                                ;
                                                            },
                                                            hostInformation$Action: function(isHousholdDisplayedIn) {
                                                                return Promise.resolve().then(function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard HostInformation");
                                                                        return controller.onHandle_HostInformation$Action(isHousholdDisplayedIn, controller.callContext(eventHandlerContext));
                                                                    }, function() {
                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                    });
                                                                });;
                                                            },
                                                            handlerOn_NotesChanged$Action: function(new_NotesIn) {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard HandlerOn_NotesChanged");
                                                                    controller.handler_OnNotesChanged$Action(new_NotesIn, controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });

                                                                ;
                                                            },
                                                            navigateToEmail_Household$Action: function(householdFirstNameIn, householdFullNameIn, emailIn) {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard NavigateToEmail_Household");
                                                                    controller.onHandle_ContactHost_Message$Action(controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });

                                                                ;
                                                            },
                                                            callPhone$Action: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard CallPhone");
                                                                    controller.onHandle_ContactHost_Call$Action(controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });

                                                                ;
                                                            },
                                                            address$Action: function() {
                                                                return Promise.resolve().then(function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard Address");
                                                                        return controller.onHandle_HostCardAddress$Action(controller.callContext(eventHandlerContext));
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
                                                            uuid: "7",
                                                            alias: "5"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, function() {
                                                    return [];
                                                })];
                                            }),
                                            content_Placeholder: new PlaceholderContent(function() {
                                                return [$if((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr && ((!(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.isEmpty) || !(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.isEmpty)) || !(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.isEmpty))), false, this, function() {
                                                    return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Section_mvc_view, {
                                                        inputs: {
                                                            In_IsHost: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr,
                                                            _in_IsHostInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                            In_Title: "Special Needs"
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
                                                            name: "Detail_SpecialNeeds",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            section_Placeholder: new PlaceholderContent(function() {
                                                                return [$if(!(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.isEmpty), false, this, function() {
                                                                    return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, {
                                                                        inputs: {
                                                                            In_Title: "Dietary",
                                                                            In_HasBottomBorder: true
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
                                                                            name: "SubSection_Dietary",
                                                                            alias: "7"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        placeholders: {
                                                                            subSection_Placeholder: new PlaceholderContent(function() {
                                                                                return [React.createElement(OSWidgets.List, {
                                                                                    animateItems: true,
                                                                                    gridProperties: {
                                                                                        classes: "OSFillParent"
                                                                                    },
                                                                                    mode: /*Default*/ 0,
                                                                                    source: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr,
                                                                                    style: "list list-group event-detail-list",
                                                                                    tag: "div",
                                                                                    _idProps: {
                                                                                        service: idService,
                                                                                        name: "List_Dietary"
                                                                                    },
                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                    placeholders: {
                                                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                            return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SpecialNeeds_ListItem_mvc_view, {
                                                                                                inputs: {
                                                                                                    MaxPhotoPx: model.variables.squarePhotoPxVar,
                                                                                                    In_GuestURL: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrent(callContext.iterationContext).signedUrlAttr,
                                                                                                    _in_GuestURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                                    In_HasBottomBorder: (model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrentRowNumber(callContext.iterationContext) < (model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.length - 1)),
                                                                                                    _in_HasBottomBorderInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
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
                                                                                                    name: "SpecialNeeds_ListItem_Dietary",
                                                                                                    alias: "8"
                                                                                                },
                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                placeholders: {
                                                                                                    title_Placeholder: new PlaceholderContent(function() {
                                                                                                        return [React.createElement(OSWidgets.Expression, {
                                                                                                            style: "bold font-size-0-9em",
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrent(callContext.iterationContext).fullNameAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "12"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        })];
                                                                                                    }),
                                                                                                    info_Placeholder: new PlaceholderContent(function() {
                                                                                                        return [React.createElement(OSWidgets.Container, {
                                                                                                            align: /*Default*/ 0,
                                                                                                            animate: false,
                                                                                                            style: "font-size-0-8em text-neutral-7",
                                                                                                            visible: true,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "13"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                                                        }, React.createElement(OSWidgets.Expression, {
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrent(callContext.iterationContext).nameAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "14"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        })), React.createElement(OSWidgets.Container, {
                                                                                                            align: /*Default*/ 0,
                                                                                                            animate: false,
                                                                                                            style: "font-size-0-8em text-neutral-7",
                                                                                                            visible: true,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "15"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                                                        }, React.createElement(OSWidgets.Expression, {
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrent(callContext.iterationContext).notesAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "16"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        }))];
                                                                                                    })
                                                                                                },
                                                                                                _dependencies: [asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrent(callContext.iterationContext).notesAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr.getCurrent(callContext.iterationContext).fullNameAttr)]
                                                                                            })];
                                                                                        }, callContext, idService, "1")
                                                                                    },
                                                                                    _dependencies: [asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.squarePhotoPxVar)]
                                                                                })];
                                                                            })
                                                                        },
                                                                        _dependencies: [asPrimitiveValue(model.variables.squarePhotoPxVar), asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr)]
                                                                    })];
                                                                }, function() {
                                                                    return [];
                                                                }), $if(!(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.isEmpty), false, this, function() {
                                                                    return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, {
                                                                        inputs: {
                                                                            In_Title: "Mobility",
                                                                            In_HasBottomBorder: true
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
                                                                            name: "SubSection_Mobility",
                                                                            alias: "9"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        placeholders: {
                                                                            subSection_Placeholder: new PlaceholderContent(function() {
                                                                                return [React.createElement(OSWidgets.List, {
                                                                                    animateItems: true,
                                                                                    gridProperties: {
                                                                                        classes: "OSFillParent"
                                                                                    },
                                                                                    mode: /*Default*/ 0,
                                                                                    source: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr,
                                                                                    style: "list list-group event-detail-list",
                                                                                    tag: "div",
                                                                                    _idProps: {
                                                                                        service: idService,
                                                                                        name: "List_Mobility"
                                                                                    },
                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                    placeholders: {
                                                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                            return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SpecialNeeds_ListItem_mvc_view, {
                                                                                                inputs: {
                                                                                                    MaxPhotoPx: model.variables.squarePhotoPxVar,
                                                                                                    In_HasBottomBorder: (model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrentRowNumber(callContext.iterationContext) < (model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.length - 1)),
                                                                                                    _in_HasBottomBorderInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                                    In_GuestURL: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrent(callContext.iterationContext).signedUrlAttr,
                                                                                                    _in_GuestURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
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
                                                                                                    name: "SpecialNeeds_ListItem_Mobility",
                                                                                                    alias: "10"
                                                                                                },
                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                placeholders: {
                                                                                                    title_Placeholder: new PlaceholderContent(function() {
                                                                                                        return [React.createElement(OSWidgets.Expression, {
                                                                                                            style: "bold font-size-0-9em",
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrent(callContext.iterationContext).fullNameAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "20"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        })];
                                                                                                    }),
                                                                                                    info_Placeholder: new PlaceholderContent(function() {
                                                                                                        return [React.createElement(OSWidgets.Container, {
                                                                                                            align: /*Default*/ 0,
                                                                                                            animate: false,
                                                                                                            style: "font-size-0-8em text-neutral-7",
                                                                                                            visible: true,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "21"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                                                        }, React.createElement(OSWidgets.Expression, {
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrent(callContext.iterationContext).nameAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "22"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        })), React.createElement(OSWidgets.Container, {
                                                                                                            align: /*Default*/ 0,
                                                                                                            animate: false,
                                                                                                            style: "font-size-0-8em text-neutral-7",
                                                                                                            visible: true,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "23"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                                                        }, React.createElement(OSWidgets.Expression, {
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrent(callContext.iterationContext).notesAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "24"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        }))];
                                                                                                    })
                                                                                                },
                                                                                                _dependencies: [asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrent(callContext.iterationContext).notesAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr.getCurrent(callContext.iterationContext).fullNameAttr)]
                                                                                            })];
                                                                                        }, callContext, idService, "2")
                                                                                    },
                                                                                    _dependencies: [asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.squarePhotoPxVar)]
                                                                                })];
                                                                            })
                                                                        },
                                                                        _dependencies: [asPrimitiveValue(model.variables.squarePhotoPxVar), asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr)]
                                                                    })];
                                                                }, function() {
                                                                    return [];
                                                                }), $if(!(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.isEmpty), false, this, function() {
                                                                    return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_view, {
                                                                        inputs: {
                                                                            In_HasBottomBorder: true,
                                                                            In_Title: "Other"
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
                                                                            name: "SubSection_Other",
                                                                            alias: "11"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        placeholders: {
                                                                            subSection_Placeholder: new PlaceholderContent(function() {
                                                                                return [React.createElement(OSWidgets.List, {
                                                                                    animateItems: true,
                                                                                    gridProperties: {
                                                                                        classes: "OSFillParent"
                                                                                    },
                                                                                    mode: /*Default*/ 0,
                                                                                    source: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr,
                                                                                    style: "list list-group event-detail-list",
                                                                                    tag: "div",
                                                                                    _idProps: {
                                                                                        service: idService,
                                                                                        name: "List_Other"
                                                                                    },
                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                    placeholders: {
                                                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                            return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SpecialNeeds_ListItem_mvc_view, {
                                                                                                inputs: {
                                                                                                    MaxPhotoPx: model.variables.squarePhotoPxVar,
                                                                                                    In_GuestURL: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrent(callContext.iterationContext).signedUrlAttr,
                                                                                                    _in_GuestURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                                    In_HasBottomBorder: (model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrentRowNumber(callContext.iterationContext) < (model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.length - 1)),
                                                                                                    _in_HasBottomBorderInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
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
                                                                                                    name: "SpecialNeeds_ListItem_Other",
                                                                                                    alias: "12"
                                                                                                },
                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                placeholders: {
                                                                                                    title_Placeholder: new PlaceholderContent(function() {
                                                                                                        return [React.createElement(OSWidgets.Expression, {
                                                                                                            style: "bold font-size-0-9em",
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrent(callContext.iterationContext).fullNameAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "28"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        })];
                                                                                                    }),
                                                                                                    info_Placeholder: new PlaceholderContent(function() {
                                                                                                        return [React.createElement(OSWidgets.Container, {
                                                                                                            align: /*Default*/ 0,
                                                                                                            animate: false,
                                                                                                            style: "font-size-0-8em text-neutral-7",
                                                                                                            visible: true,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "29"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                                                        }, React.createElement(OSWidgets.Expression, {
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrent(callContext.iterationContext).nameAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "30"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        })), React.createElement(OSWidgets.Container, {
                                                                                                            align: /*Default*/ 0,
                                                                                                            animate: false,
                                                                                                            style: "font-size-0-8em text-neutral-7",
                                                                                                            visible: true,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "31"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                                                        }, React.createElement(OSWidgets.Expression, {
                                                                                                            value: model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrent(callContext.iterationContext).notesAttr,
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "32"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
                                                                                                        }))];
                                                                                                    })
                                                                                                },
                                                                                                _dependencies: [asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrent(callContext.iterationContext).notesAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr.getCurrent(callContext.iterationContext).fullNameAttr)]
                                                                                            })];
                                                                                        }, callContext, idService, "3")
                                                                                    },
                                                                                    _dependencies: [asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.squarePhotoPxVar)]
                                                                                })];
                                                                            })
                                                                        },
                                                                        _dependencies: [asPrimitiveValue(model.variables.squarePhotoPxVar), asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr)]
                                                                    })];
                                                                }, function() {
                                                                    return [];
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.squarePhotoPxVar), asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr)]
                                                    })];
                                                }, function() {
                                                    return [];
                                                }), $if(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.isPublishedAttr, false, this, function() {
                                                    return [$if(!(model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.isEmpty), false, this, function() {
                                                        return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Section_mvc_view, {
                                                            inputs: {
                                                                In_Title: "Guest Households",
                                                                In_IsHost: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr,
                                                                _in_IsHostInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                In_HasBottomBorder: true
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
                                                                name: "Detail_GuestsHouseholds",
                                                                alias: "13"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            placeholders: {
                                                                section_Placeholder: new PlaceholderContent(function() {
                                                                    return [React.createElement(OSWidgets.List, {
                                                                        animateItems: true,
                                                                        gridProperties: {
                                                                            classes: "OSFillParent"
                                                                        },
                                                                        mode: /*Default*/ 0,
                                                                        source: model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr,
                                                                        style: "list list-group event-detail-list",
                                                                        tag: "div",
                                                                        _idProps: {
                                                                            service: idService,
                                                                            name: "List_Guests"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                        placeholders: {
                                                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_view, {
                                                                                    inputs: {
                                                                                        In_MaxPhotoWidth: model.variables.maxPhotoWidthVar,
                                                                                        IsHosting: model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr,
                                                                                        _isHostingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                        Guest: model.getCachedValue(idService.getId("ListItem_Guests.Guest"), function() {
                                                                                            return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrent(callContext.iterationContext), new Connect2_OrbitMobile_ISModel.DetailGuestItemRec(), function(source, target) {
                                                                                                target.eventGuestIDAttr = source.eventGuestIDAttr;
                                                                                                target.householderNameAttr = source.householderNameAttr;
                                                                                                target.householderIDAttr = source.householderIDAttr;
                                                                                                target.localityNameAttr = source.localityNameAttr;
                                                                                                target.localityIdAttr = source.localityIdAttr;
                                                                                                target.cdnBucketAttr = source.cdnBucketAttr;
                                                                                                target.resize340CdnPathAttr = source.resize340CdnPathAttr;
                                                                                                target.signedURLAttr = source.signedURLAttr;
                                                                                                target.nonAttendingAttr = source.nonAttendingAttr;
                                                                                                target.includingAttr = source.includingAttr;
                                                                                                target.adultsAttr = source.adultsAttr;
                                                                                                target.childrenAttr = source.childrenAttr;
                                                                                                target.recordDisabledAttr = source.recordDisabledAttr;
                                                                                                target.householdDisplayAttr = source.householdDisplayAttr;
                                                                                                target.mobilePhoneAttr = source.mobilePhoneAttr;
                                                                                                target.workPhoneAttr = source.workPhoneAttr;
                                                                                                target.emailAttr = source.emailAttr;
                                                                                                target.formattedAddressAttr = source.formattedAddressAttr;
                                                                                                target.countryNameAttr = source.countryNameAttr;
                                                                                                target.latitudeAttr = source.latitudeAttr;
                                                                                                target.longitudeAttr = source.longitudeAttr;
                                                                                                target.timezoneAttr.timezoneLabelAttr = source.timezoneAttr.timezoneLabelAttr;
                                                                                                target.timezoneAttr.offsetSecondsAttr = source.timezoneAttr.offsetSecondsAttr;
                                                                                                target.homePhoneAttr = source.homePhoneAttr;
                                                                                                target.householderSignedImagePathAttr = source.householderSignedImagePathAttr;
                                                                                                target.householderFirstNameAttr = source.householderFirstNameAttr;
                                                                                                return target;
                                                                                            });
                                                                                        }, function() {
                                                                                            return model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrent(callContext.iterationContext);
                                                                                        }),
                                                                                        _guestInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr),
                                                                                        In_MaxPhotoHeight: model.variables.maxPhotoHeightVar,
                                                                                        In_HasBottomBorder: (model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrentRowNumber(callContext.iterationContext) < (model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.length - 1)),
                                                                                        _in_HasBottomBorderInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr)
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

                                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_ListItem OnClick_Message");
                                                                                                controller.onHandle_ContactByMessage$Action(event_ContactPopupDataIn, event_CountryNameIn, false, controller.callContext(eventHandlerContext));
                                                                                            }, function() {
                                                                                                controller.popDebuggerContext(eventHandlerContext);
                                                                                            });

                                                                                            ;
                                                                                        },
                                                                                        clicked$Action: function(isHouseholdDisplayedIn) {
                                                                                            return Promise.resolve().then(function() {
                                                                                                var eventHandlerContext = callContext.clone();
                                                                                                return OS.Flow.tryFinally(function() {
                                                                                                    var varBag = {};
                                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_ListItem Clicked");
                                                                                                    return controller.onHandle_GoToHousehold$Action(model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrent(callContext.iterationContext).householderIDAttr, model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrent(callContext.iterationContext).householderNameAttr, model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrentRowNumber(callContext.iterationContext), model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrent(callContext.iterationContext).recordDisabledAttr, model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr.getCurrent(callContext.iterationContext).householdDisplayAttr, controller.callContext(eventHandlerContext));
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

                                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_ListItem OnClick_PhoneCall");
                                                                                                controller.onHandle_ContactByPhone$Action(event_PhoneCallInfoIn, controller.callContext(eventHandlerContext));
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
                                                                                        name: "ListItem_Guests",
                                                                                        alias: "14"
                                                                                    },
                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                    _dependencies: []
                                                                                })];
                                                                            }, callContext, idService, "4")
                                                                        },
                                                                        _dependencies: [asPrimitiveValue(model.variables.maxPhotoHeightVar), asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr), asPrimitiveValue(model.variables.maxPhotoWidthVar)]
                                                                    })];
                                                                })
                                                            },
                                                            _dependencies: [asPrimitiveValue(model.variables.maxPhotoHeightVar), asPrimitiveValue(model.variables.maxPhotoWidthVar), asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr)]
                                                        })];
                                                    }, function() {
                                                        return [];
                                                    })];
                                                }, function() {
                                                    return [];
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.squarePhotoPxVar), asPrimitiveValue(model.variables.eventIdIn), asPrimitiveValue(model.variables.maxPhotoWidthVar), asPrimitiveValue(model.variables.eventHostIdIn), asPrimitiveValue(model.variables.eventNotesVar), asPrimitiveValue(model.variables.maxPhotoHeightVar), asPrimitiveValue(model.variables.minBannerHeightVar), asPrimitiveValue(model.variables.getCoordinatorDetailsDataAct.out_HasContentOut), asPrimitiveValue(model.variables._eventIdInDataFetchStatus), asPrimitiveValue(model.variables._eventHostIdInDataFetchStatus), asPrimitiveValue(model.variables.getCoordinatorDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.otherAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.dietAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.specialNeedsAttr.mobilityAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householdDisplayAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.phoneAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householderNameAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.isPublishedAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.formattedAddressAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.emailAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.signedURLAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.childrenAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.adultsAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr), asPrimitiveValue(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.signedHallPhotoAttr)]
                                    })];
                                }, function() {
                                    return [React.createElement(Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, {
                                        inputs: {
                                            In_ErrorMessage: "No event information.",
                                            In_MatchMainContentHeight: true
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
                                            uuid: "36",
                                            alias: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })];
                            }, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "list-updating-cont",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "MarkReadLoading"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "list-updating",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "38"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))];
                            })];
                        }, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, {
                                inputs: {
                                    In_MatchMainContentHeight: true,
                                    In_ErrorMessage: "No event information."
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
                                    uuid: "39",
                                    alias: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
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
                                        controller.onHandle_ContactByPhone_Call$Action(controller.callContext(eventHandlerContext));
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
                                        controller.onHandle_ContactByPhone_Cancel$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "40",
                                alias: "17"
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
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "41",
                                alias: "18"
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
                    alias: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "APIDomain_Directory_IS.model", "CommonPlugin.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$debugger", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller.OnHandle_ContactHost_Message.GetLocalityNameJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller.OnHandle_ContactHost_Call.GetLocalityNameJS", "Connect2_OrbitMobile_MUI.controller$FormatDateForEventBanner", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "UBTConnectLibrary.model$NotesRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "Connect2_OrbitMobile_MUI.model$Note_ItemList", "Connect2_OrbitMobile_IS.model$DetailGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$TimezoneRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.controller$IsFreeSubscriptionPlan", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemExtList", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselServerItemList", "Connect2_OrbitMobile_MUI.controller$CarouselFilteredEventResults", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "Connect2_OrbitMobile_IS.model$DetailGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$DetailGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$GetCurrentTimeInMill", "Connect2_OrbitMobile_MUI.controller$AddAuditRequestAPIEvent", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "CommonPlugin.controller$GetOperatingSystem", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "Connect2_LegacyShared.controller$CleanAddressForMaps", "Connect2_OrbitMobile_BL.model$HostDetailsRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$GetEventCalendarDetailResponse_V2Rec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsModel, UBTConnectLibraryModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsController, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, APIDomain_Directory_ISModel, CommonPluginController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_Debugger, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller_OnHandle_ContactHost_Message_GetLocalityNameJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller_OnHandle_ContactHost_Call_GetLocalityNameJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getCoordinatorDetails$DataActRefresh: 0,
                fetchEventNotes$DataActRefresh: 0,
                getEventByEventId$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getCoordinatorDetails$DataActRefresh: [],
                fetchEventNotes$DataActRefresh: [],
                getEventByEventId$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.getHouseholdCoordinates$ServerAction = function(householdIdIn, callContext) {
            var controller = this.controller;
            var inputs = {
                HouseholdId: OS.DataConversion.ServerDataConverter.to(householdIdIn, OS.DataTypes.DataTypes.LongInteger)
            };
            return controller.callServerAction("GetHouseholdCoordinates", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/ActionGetHouseholdCoordinates", "118pikt0bExYU1slv3vs3A", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2$rssespaceconnect2_orbitmobile_bl_ActionGetHouseholdCoordinates"))();
                executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, APIDomain_Directory_ISModel.Directory_CoordinatesRec);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2$rssespaceconnect2_orbitmobile_bl_ActionGetHouseholdCoordinates", [{
            name: "Response",
            attrName: "responseOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new APIDomain_Directory_ISModel.Directory_CoordinatesRec();
            },
            complexType: APIDomain_Directory_ISModel.Directory_CoordinatesRec
        }]);

        // Aggregates and Data Actions
        Controller.prototype.getCoordinatorDetails$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Fly0XvwOp0miEqM2xkQOxA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/DataActions.Fly0XvwOp0miEqM2xkQOxA:F2_T3jG5KBMZDj_Ndqnm4A", "Connect2_OrbitMobile_MUI", "GetCoordinatorDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/GetCoordinatorDetails");
                return controller.callDataAction("DataActionGetCoordinatorDetails", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetCoordinatorDetails", "PFkB9c+AJ7ZB4YKOJ0EkTA", function(b) {
                    model.variables.getCoordinatorDetailsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getCoordinatorDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCoordinatorDetailsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false);

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Fly0XvwOp0miEqM2xkQOxA", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.fetchEventNotes$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fbrJn6bfDkWpBtIFcvaLpg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/DataActions.fbrJn6bfDkWpBtIFcvaLpg:5fw0m2W9pFRUaKXndOguKQ", "Connect2_OrbitMobile_MUI", "FetchEventNotes", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/FetchEventNotes");
                return controller.callDataAction("DataActionFetchEventNotes", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionFetchEventNotes", "G1tns8n_hOecA9jdno6OJw", function(b) {
                    model.variables.fetchEventNotesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.fetchEventNotesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchEventNotesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/FetchEventNotes On After Fetch");
                    controller._onAfterFetch_FetchEventNotes$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fbrJn6bfDkWpBtIFcvaLpg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.getEventByEventId$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tJbD0ZFaJEKhR85dohlQyQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/DataActions.tJbD0ZFaJEKhR85dohlQyQ:n9z+hIFisS+BCrkx2pVA7g", "Connect2_OrbitMobile_MUI", "GetEventByEventId", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/GetEventByEventId");
                return controller.callDataAction("DataActionGetEventByEventId", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/DataActionGetEventByEventId", "epFhbKGQhW1lr0vIOalt+Q", function(b) {
                    model.variables.getEventByEventIdDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getEventByEventIdDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventByEventIdDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2/GetEventByEventId On After Fetch");
                    controller._onAfterFetch_GetEventByEventId$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tJbD0ZFaJEKhR85dohlQyQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getCoordinatorDetails$DataActRefresh", "fetchEventNotes$DataActRefresh", "getEventByEventId$DataActRefresh"];
        // Client Actions
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cuzFALrX40Cb_9hFkVD36A:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.cuzFALrX40Cb_9hFkVD36A:cYUrtgrfrgeaGLCLKg7Osg", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QaW85iZ3Ekm9hppUzD9aNg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+FAnMxD5REGmUkoP7LKcHQ", callContext.id);
                // ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
                model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+FAnMxD5REGmUkoP7LKcHQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ContactByPhoneData.ContactPopupData.ShowPopup = False
                model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BpdwGhcdp0GQZUnrPAhNHA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cuzFALrX40Cb_9hFkVD36A", callContext.id);
            }

        };
        Controller.prototype._onHandle_ContactByPhone_Cancel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByPhone_Cancel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hoepIxGmz0+xmxsrG5hnkQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.hoepIxGmz0+xmxsrG5hnkQ:T2sIPd6qipxmCXCMfp3VUA", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5dF5aQxR_Ua_d22ia6B3qg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LAM+dyDh1kiBMJhAjAhqdw", callContext.id);
                // ContactByPhoneData.ContactPopupData.ShowPopup = False
                model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NtwQWZbAoE+F8mtXdk9o_Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hoepIxGmz0+xmxsrG5hnkQ", callContext.id);
            }

        };
        Controller.prototype._onHandle_ContactByPhone$Action = function(event_PhoneCallInfoIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByPhone");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactByPhone$vars"))());
            vars.value.event_PhoneCallInfoInLocal = event_PhoneCallInfoIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vur0Kaju0kGm+AE607NvzA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.vur0Kaju0kGm+AE607NvzA:QuhENut+MHH1ue97dJLPTw", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wcfj_LP5pEetd31aXNcKtA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JA+VASMOjEytZ8xz8bXj4w", callContext.id);
                // ContactByPhoneData = Event_PhoneCallInfo
                model.variables.contactByPhoneDataVar = vars.value.event_PhoneCallInfoInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GAq0dSQYr0y27VCcCnFI1g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vur0Kaju0kGm+AE607NvzA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactByPhone$vars", [{
            name: "Event_PhoneCallInfo",
            attrName: "event_PhoneCallInfoInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.ContactByPhonePopupDataRec();
            },
            complexType: UBTConnect_UtilsModel.ContactByPhonePopupDataRec
        }]);
        Controller.prototype._onHandle_GoToHousehold$Action = function(in_Household_IdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_RecordDisabledIn, isHouseholdDisplayedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_GoToHousehold");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_GoToHousehold$vars"))());
            vars.value.in_Household_IdInLocal = in_Household_IdIn;
            vars.value.in_HouseholdNameInLocal = in_HouseholdNameIn;
            vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
            vars.value.in_RecordDisabledInLocal = in_RecordDisabledIn;
            vars.value.isHouseholdDisplayedInLocal = isHouseholdDisplayedIn;
            var isFreeSubscriptionPlanVar = new OS.DataTypes.VariableHolder();
            var isRegionalSubscriptionPlanVar = new OS.DataTypes.VariableHolder();
            var carouselFilteredEventResultsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.isFreeSubscriptionPlanVar = isFreeSubscriptionPlanVar;
            varBag.isRegionalSubscriptionPlanVar = isRegionalSubscriptionPlanVar;
            varBag.carouselFilteredEventResultsVar = carouselFilteredEventResultsVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+m7XM9kQrkavUV9qZfCq+g:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.+m7XM9kQrkavUV9qZfCq+g:ajlfIjipwnblKStJBly2Fw", "Connect2_OrbitMobile_MUI", "OnHandle_GoToHousehold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sxn0BiBU7U6+nm3FiRqFLw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0zRfUYYzek6_B29vht2nbg", callContext.id) && vars.value.isHouseholdDisplayedInLocal)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ObKrRd9_q0meodsyubYq+A", callContext.id) && vars.value.in_RecordDisabledInLocal)) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ybh2S9vjb06CgHT_FAr_pA", callContext.id);
                                // Execute Action: App_Subscription_ShowUpgradePopUp
                                model.flush();
                                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fB4sU83L9EKYHNyNnNoGZQ", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sPODAOC2LES0oxk8A4gkKg", callContext.id);
                                // Execute Action: IsFreeSubscriptionPlan
                                model.flush();
                                return UBTConnect_UtilsController.default.isFreeSubscriptionPlan$Action(callContext).then(function(value) {
                                    isFreeSubscriptionPlanVar.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y0qOvmyKx0SJtjpmFGwkpA", callContext.id);
                                    // Execute Action: IsRegionalSubscriptionPlan
                                    model.flush();
                                    return UBTConnect_UtilsController.default.isRegionalSubscriptionPlan$Action(callContext).then(function(value) {
                                        isRegionalSubscriptionPlanVar.value = value;
                                    });
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:emLU1EDDEEanOXS6_K4YaA", callContext.id);
                                    // Execute Action: CarouselFilteredEventResults
                                    carouselFilteredEventResultsVar.value = Connect2_OrbitMobile_MUIController.default.carouselFilteredEventResults$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr, new Connect2_OrbitMobile_MUIModel.CalendarGuestItemExtList(), function(source, target) {
                                        target.calendarGuestItemAttr.householderIdAttr = source.householderIDAttr;
                                        target.calendarGuestItemAttr.eventGuestIdAttr = source.eventGuestIDAttr;
                                        target.calendarGuestItemAttr.householderNameAttr = source.householderNameAttr;
                                        target.calendarGuestItemAttr.localityIdAttr = source.localityIdAttr;
                                        target.calendarGuestItemAttr.localityNameAttr = source.localityNameAttr;
                                        target.calendarGuestItemAttr.mobilePhoneAttr = source.mobilePhoneAttr;
                                        target.calendarGuestItemAttr.emailAttr = source.emailAttr;
                                        target.calendarGuestItemAttr.workPhoneAttr = source.workPhoneAttr;
                                        target.calendarGuestItemAttr.signedImagePathAttr = source.signedURLAttr;
                                        target.calendarGuestItemAttr.recordDisabledAttr = source.recordDisabledAttr;
                                        target.calendarGuestItemAttr.householdDisplayAttr = source.householdDisplayAttr;
                                        target.calendarGuestItemAttr.addressAttr = source.formattedAddressAttr;
                                        target.calendarGuestItemAttr.countryNameAttr = source.countryNameAttr;
                                        target.calendarGuestItemAttr.longitudeAttr = source.longitudeAttr;
                                        target.calendarGuestItemAttr.latitudeAttr = source.latitudeAttr;
                                        return target;
                                    }), (isFreeSubscriptionPlanVar.value.isFreeSubscriptionPlanOut || isRegionalSubscriptionPlanVar.value.isRegionalSubscriptionPlanOut), vars.value.in_CurrentRowNumberInLocal, callContext);

                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sHBIRkbyU0yeJHCgW_HK2g", callContext.id);
                                    // In_CurrentRowNumber = In_CurrentRowNumber - CarouselFilteredEventResults.NumberFilteredToCurrent
                                    vars.value.in_CurrentRowNumberInLocal = (vars.value.in_CurrentRowNumberInLocal - carouselFilteredEventResultsVar.value.numberFilteredToCurrentOut);
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yDhp81uVCEOSPFzb5+eLFw", callContext.id);
                                    // Execute Action: AddAuditEventDetailEvent
                                    model.flush();
                                    return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr) ? (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.hostClickedGuestHousehold) : (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.guestClickedOtherGuestHousehold)), vars.value.in_Household_IdInLocal, vars.value.in_HouseholdNameInLocal, OS.DataTypes.DateTime.defaultValue, "", callContext);
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2ya87s5T8ESF_vOOUKqKFQ", callContext.id);
                                    // Trigger Event: NavigateTo_HouseholdCarousel
                                    return controller.navigateTo_HouseholdCarousel$Action(vars.value.in_Household_IdInLocal, Connect2_OrbitMobile_MUIModel.staticEntities.householdNavigationType.eventDetail, OS.BuiltinFunctions.integerToLongInteger(carouselFilteredEventResultsVar.value.out_HouseholdIdListOut.length), vars.value.in_CurrentRowNumberInLocal, (vars.value.isLimitedLDMHostVar && model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.hostingAttr), OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getEventByEventIdDataAct.eventResponseOut.guestsAttr, new OS.DataTypes.LongIntegerList(), function(source, target) {
                                        target = source.householderIDAttr;
                                        return target;
                                    }), callContext);
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OHfxOmppo0K_iKFWJ_sPpg", callContext.id);
                                });
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5z9pugEGG0KVP74F30ar4Q", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+m7XM9kQrkavUV9qZfCq+g", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+m7XM9kQrkavUV9qZfCq+g", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_GoToHousehold$vars", [{
            name: "In_Household_Id",
            attrName: "in_Household_IdInLocal",
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
            name: "In_RecordDisabled",
            attrName: "in_RecordDisabledInLocal",
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
            name: "IsLimitedLDMHost",
            attrName: "isLimitedLDMHostVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Vb+pO5_vsk24jpwdFbxlnQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.Vb+pO5_vsk24jpwdFbxlnQ:qzBuakHheMiMEPyiuODF3Q", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EjCQK17BM062E9uM8l8uqQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dk9eu8zzeESLsXG+iIcSFg", callContext.id);
                // Refresh Query: GetCoordinatorDetails
                var result = controller.getCoordinatorDetails$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cymhNJLlJkO+VeKa0Ht_Dw", callContext.id);
                    // Refresh Query: GetEventByEventId
                    var result = controller.getEventByEventId$DataActRefresh(callContext);
                    model.flush();
                    return result;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PB2GfyH_4Ei57_oP7fcJCQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Vb+pO5_vsk24jpwdFbxlnQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Vb+pO5_vsk24jpwdFbxlnQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_ContactByMessage$Action = function(event_ContactPopupDataIn, event_CountryNameIn, event_IsCoordinatorIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByMessage");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactByMessage$vars"))());
            vars.value.event_ContactPopupDataInLocal = event_ContactPopupDataIn.clone();
            vars.value.event_CountryNameInLocal = event_CountryNameIn;
            vars.value.event_IsCoordinatorInLocal = event_IsCoordinatorIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:o3vlQBuZiU2EjyPYpi_7Eg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.o3vlQBuZiU2EjyPYpi_7Eg:CqXMzU5gfqNR0mxn0Y_aVQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6YijVce9skSOyWUNB8Eigg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TEjOPaBJhEGBF5+GKCVICg", callContext.id);
                // ContactByMessagePopupData = Event_ContactPopupData
                model.variables.contactByMessagePopupDataVar = OS.DataConversion.JSConversions.typeConvertRecord(vars.value.event_ContactPopupDataInLocal, new Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord(), function(source, target) {
                    target.countryNameAttr = vars.value.event_CountryNameInLocal;
                    target.uI_ContactByMessage_WrapperDataAttr.emailAttr = source.emailAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.phoneAttr = source.phoneAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.isComboEmailAndPhoneAttr = source.isComboEmailAndPhoneAttr;
                    target.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr = source.contactPopupDataAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TEjOPaBJhEGBF5+GKCVICg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ContactByMessagePopupData_IsCoordinator = Event_IsCoordinator
                model.variables.contactByMessagePopupData_IsCoordinatorVar = vars.value.event_IsCoordinatorInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rRuqdQKTMEqV2VM+CrQFkA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:o3vlQBuZiU2EjyPYpi_7Eg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactByMessage$vars", [{
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
        }, {
            name: "Event_IsCoordinator",
            attrName: "event_IsCoordinatorInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onAfterFetch_GetEventByEventId$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetEventByEventId");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u3qCSQZ8NEGybfYMyr_+kw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.u3qCSQZ8NEGybfYMyr_+kw:qHGP8S6KJJrorod1y+wYhg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventByEventId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TstG6bUi0US9HHiGMFO_Lw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XDtCW8rLwkq+7cWdjeYmZw", callContext.id);
                // HasInformation = GetEventByEventId.Out_HasContent
                model.variables.hasInformationVar = model.variables.getEventByEventIdDataAct.out_HasContentOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v0BwpkcUwkKQu5buNYhiKg", callContext.id);
                // Execute Action: Toggle_IsFetching_False
                controller._toggle_IsFetching$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gf0NeIIMEUqGCDXffBu7+g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u3qCSQZ8NEGybfYMyr_+kw", callContext.id);
            }

        };
        Controller.prototype._onHandle_ContactHost_Message$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactHost_Message");
            callContext = controller.callContext(callContext);
            var flipHouseholdNameVar = new OS.DataTypes.VariableHolder();
            var getLocalityNameJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.flipHouseholdNameVar = flipHouseholdNameVar;
            varBag.getLocalityNameJSResult = getLocalityNameJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kGamU6IuJ0K4p6oGJfXv9w:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.kGamU6IuJ0K4p6oGJfXv9w:47Sb84kmXneCXNlHWF3_pg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHost_Message", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pvG4FnWwC0qT78TyD5qlcw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X3V46ibB0ESpX+oWJkIm+A", callContext.id);
                // Execute Action: FlipHouseholdName
                flipHouseholdNameVar.value = Connect2_LegacySharedController.default.flipHouseholdName$Action(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householderNameAttr, callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YGqpH4WEQUKkRtluhU1HVQ", callContext.id);
                getLocalityNameJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller_OnHandle_ContactHost_Message_GetLocalityNameJS, "GetLocalityName", "OnHandle_ContactHost_Message", {
                    JS_Locality: OS.DataConversion.JSNodeParamConverter.to(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr, OS.DataTypes.DataTypes.Text),
                    JS_LocalityName: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactHost_Message$getLocalityNameJSResult"))();
                    jsNodeResult.jS_LocalityNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.JS_LocalityName, OS.DataTypes.DataTypes.Text);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vD4lNdZGXkuMy+GOrX6sSA", callContext.id);
                // Execute Action: OnHandle_ContactByMessage
                controller._onHandle_ContactByMessage$Action(function() {
                    var rec = new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec();
                    rec.emailAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.emailAttr;
                    rec.phoneAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mobilePhoneAttr;
                    rec.contactPopupDataAttr = function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                        rec.imageURLAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.signedURLAttr;
                        rec.entityTypeIdAttr = Connect2_OrbitMobile_MUIModel.staticEntities.connect_Entity2.household;
                        rec.nameAttr = flipHouseholdNameVar.value.out_HouseholdNameFixedOut;
                        rec.localityAttr = getLocalityNameJSResult.value.jS_LocalityNameOut;
                        rec.timezoneNameAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.timezoneAttr.timezoneLabelAttr;
                        rec.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.timezoneAttr.offsetSecondsAttr);
                        rec.showPopupAttr = true;
                        rec.countryNameAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.countryNameAttr;
                        return rec;
                    }();
                    return rec;
                }(), model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.countryNameAttr, false, callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3DsAnlNEXkCskntKEJx7Uw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kGamU6IuJ0K4p6oGJfXv9w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactHost_Message$getLocalityNameJSResult", [{
            name: "JS_LocalityName",
            attrName: "jS_LocalityNameOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onHandle_SetContainerHeight$Action = function(event_BannerHeightIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_SetContainerHeight");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_SetContainerHeight$vars"))());
            vars.value.event_BannerHeightInLocal = event_BannerHeightIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9knzVhSzikilTl0VPakTAg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.9knzVhSzikilTl0VPakTAg:b2sznBzMXYiU8qTldoN2TA", "Connect2_OrbitMobile_MUI", "OnHandle_SetContainerHeight", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f20O+jW7GUO5EOJM0QVMMg", callContext.id);
                // Has value changed?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6EuUfOujMUWKFzsTawOM9w", callContext.id) && ((vars.value.event_BannerHeightInLocal) !== (model.variables.minBannerHeightVar)))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BC+x_JbyTkuI4rPlUKYqzw", callContext.id);
                    // MinBannerHeight = Event_BannerHeight
                    model.variables.minBannerHeightVar = vars.value.event_BannerHeightInLocal;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MPoMljMKqkGzDX2v8SEVNA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MPoMljMKqkGzDX2v8SEVNA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9knzVhSzikilTl0VPakTAg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_SetContainerHeight$vars", [{
            name: "Event_BannerHeight",
            attrName: "event_BannerHeightInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oEpkYY8U2EC8dDr9oJZDww:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.oEpkYY8U2EC8dDr9oJZDww:jVbakqvI7f0linIkeZwEqg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9yA_ButkvUirDCfqde_eWw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZKU2CVtPiEyIGjnFe8c3rg", callContext.id);
                // ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
                model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WBV+4ULCVUO9zIpFYnWYwQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oEpkYY8U2EC8dDr9oJZDww", callContext.id);
            }

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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:J3ifchbQhE2MCWMifQoFLQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.J3ifchbQhE2MCWMifQoFLQ:NGSau9UGZgB4G+Nb2_p3eg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByMessage_ClickedEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1oDWggOsV0Wqyk98Jb8Y9Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UKvaeRJ5hkehjD3PUSHuhw", callContext.id);
                // Execute Action: OnHandle_ContactByMessage_Cancel
                controller._onHandle_ContactByMessage_Cancel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0pfmAoI8z0+vtOhqcpygnA", callContext.id);
                // Trigger Event: NavigateTo_ContactByEmail
                return controller.navigateTo_ContactByEmail$Action(model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr, "", model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr, model.variables.contactByMessagePopupData_IsCoordinatorVar, ((model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.lDMEventNameAttr + " - ") + OS.BuiltinFunctions.dateToText(OS.BuiltinFunctions.dateTimeToDate(model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.eventDateAttr))), OS.BuiltinFunctions.textToDate(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr), model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aB67d_7ix0efM_P413_tnA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:J3ifchbQhE2MCWMifQoFLQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:J3ifchbQhE2MCWMifQoFLQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OnNotesChanged$Action = function(new_NotesIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnNotesChanged");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.Handler_OnNotesChanged$vars"))());
            vars.value.new_NotesInLocal = new_NotesIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tfMSey4xD0CEPFkvNSBDpg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.tfMSey4xD0CEPFkvNSBDpg:4LJxesr63tFtH0v5mOo+TA", "Connect2_OrbitMobile_MUI", "Handler_OnNotesChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:l2IS2m80QEytaujyPBUU7g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uA_SXkPCE0W+uoCqQyqWyw", callContext.id);
                // EventNotes = New_Notes
                model.variables.eventNotesVar = vars.value.new_NotesInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CXD_MknZQ0qugelS39qPNg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tfMSey4xD0CEPFkvNSBDpg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.Handler_OnNotesChanged$vars", [{
            name: "New_Notes",
            attrName: "new_NotesInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectLibraryModel.NotesRec();
            },
            complexType: UBTConnectLibraryModel.NotesRec
        }]);
        Controller.prototype._onAfterFetch_FetchEventNotes$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_FetchEventNotes");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kwA1p+LzC0KT8lxETAxEbg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.kwA1p+LzC0KT8lxETAxEbg:ePkJcGdXLKEtta_kRHNZPQ", "Connect2_OrbitMobile_MUI", "OnAfterFetch_FetchEventNotes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xLB983eZ5E6g5rODXTuAmA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JxFifJE4LEaDUqI8R4u0EQ", callContext.id);
                // EventNotes = FetchEventNotes.Notes
                model.variables.eventNotesVar = model.variables.fetchEventNotesDataAct.notesOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WuzReCpEtkG75g4LVbOf8Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kwA1p+LzC0KT8lxETAxEbg", callContext.id);
            }

        };
        Controller.prototype._onHandle_ContactByPhone_Call$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactByPhone_Call");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uKCfqCQYOU6A7bGjjBka4g:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.uKCfqCQYOU6A7bGjjBka4g:m15iJl4rcAa56uLQ+y6zHQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone_Call", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mh_1uIIhmEmfthtZkch9XQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZvyOSnGK1kOmR000qJpeBw", callContext.id);
                // Execute Action: OnHandle_ContactByPhone_Cancel
                controller._onHandle_ContactByPhone_Cancel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:suBsKPasEUqf+YiAHzrfqQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uKCfqCQYOU6A7bGjjBka4g", callContext.id);
            }

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
            var getCurrentTimeInMill_EndVar = new OS.DataTypes.VariableHolder();
            var getCurrentTimeInMill_StartVar = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCurrentTimeInMill_EndVar = getCurrentTimeInMill_EndVar;
            varBag.getCurrentTimeInMill_StartVar = getCurrentTimeInMill_StartVar;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9tPAsnF_iUCPgK1V0m3wQA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.9tPAsnF_iUCPgK1V0m3wQA:N4Eq6YwjZGlp_eqOTgn9nQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9i9CXUkC3kaIMhko+GLSZw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NAW9BAIlvU+o9dlwOoV98w", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yH7+_3f430CNax0lf23HVQ", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aKi8TW5XIk69G5nKBHWH1w", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+UX1Ta_ty0udt2sLYaZ3CA", callContext.id);
                        // Execute Action: Toggle_IsFetching_True
                        controller._toggle_IsFetching$Action(true, callContext);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FB5gc5LtiUydH97amI+XrQ", callContext.id);
                        // Execute Action: GetCurrentTimeInMill_Start
                        getCurrentTimeInMill_StartVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n7yuSHZsDk+dFQL2V6DQ9w", callContext.id);
                        // Refresh Query: GetEventByEventId
                        var result = controller.getEventByEventId$DataActRefresh(callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+CvNMeO+VUO3ZpXTFVXQOA", callContext.id);
                            // Execute Action: GetCurrentTimeInMill_End
                            getCurrentTimeInMill_EndVar.value = Connect2_OrbitMobile_MUIController.default.getCurrentTimeInMill$Action(callContext);

                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pN+w76UPLkK+4gBAxrg82A", callContext.id);
                            // Execute Action: AddAuditRequestAPIEvent
                            model.flush();
                            return Connect2_OrbitMobile_MUIController.default.addAuditRequestAPIEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.requestAPI_EventDetail, getCurrentTimeInMill_EndVar.value.out_TimestampOut.sub(getCurrentTimeInMill_StartVar.value.out_TimestampOut), callContext);
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h+er5HNY9ECJzwgmd__86A", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9tPAsnF_iUCPgK1V0m3wQA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9tPAsnF_iUCPgK1V0m3wQA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._toggle_IsFetching$Action = function(setToIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Toggle_IsFetching");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.Toggle_IsFetching$vars"))());
            vars.value.setToInLocal = setToIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4Ymwt8pRXUmPG2S5Xa3CkQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.4Ymwt8pRXUmPG2S5Xa3CkQ:JYwii0n167wgNJ9YKTUwPA", "Connect2_OrbitMobile_MUI", "Toggle_IsFetching", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OEUkXTnFAU2uIGPxDDSryg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kiaid9zPOE6TJuKL3GJSmA", callContext.id);
                // IsFetching = SetTo
                model.variables.isFetchingVar = vars.value.setToInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9UF6ymTIcke1s1IbGVnazw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4Ymwt8pRXUmPG2S5Xa3CkQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.Toggle_IsFetching$vars", [{
            name: "SetTo",
            attrName: "setToInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_HostCardAddress$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_HostCardAddress");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_HostCardAddress$vars"))());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var getHouseholdCoordinatesVar = new OS.DataTypes.VariableHolder();
            var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
            var launchWithDataVar = new OS.DataTypes.VariableHolder();
            var checkAppLauncherPluginVar = new OS.DataTypes.VariableHolder();
            var getOperatingSystemVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.getHouseholdCoordinatesVar = getHouseholdCoordinatesVar;
            varBag.getNetworkStatusVar = getNetworkStatusVar;
            varBag.launchWithDataVar = launchWithDataVar;
            varBag.checkAppLauncherPluginVar = checkAppLauncherPluginVar;
            varBag.getOperatingSystemVar = getOperatingSystemVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:D_aQz3dSdEufJnahD40pYQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.D_aQz3dSdEufJnahD40pYQ:_LLf_QvwLU1w1UJXIP09Mw", "Connect2_OrbitMobile_MUI", "OnHandle_HostCardAddress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dMPhTKwcKUuEPkG8DL8z_A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n3DoDWG5oESf4iejAoBrmA", callContext.id);
                // Execute Action: GetNetworkStatus
                getNetworkStatusVar.value = OutSystemsUI_2_23Controller.default.getNetworkStatus$Action(callContext);

                // IsOnline?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CY3wt_8jmEKCJpLkG5r3IA", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
                        // Has address?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DLdBtqxhY0irMUuddzNSug", callContext.id) && (((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.formattedAddressAttr) !== ("")) && ((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mainHallFormattedAddressAttr) !== (""))))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C+ZVptkYIUawFfxMa6_6aA", callContext.id);
                                // Execute Action: GetHouseholdCoordinates
                                model.flush();
                                return controller.getHouseholdCoordinates$ServerAction(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householderIDAttr, callContext).then(function(value) {
                                    getHouseholdCoordinatesVar.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sQMZShOE4ka8W5pR9OT2yw", callContext.id);
                                    // HostAddress = CleanAddressForMaps(GetEventByEventId.EventResponse.Host.FormattedAddress)
                                    vars.value.hostAddressVar = OutSystemsDebugger.handleFunctionCall(function() {
                                        return Connect2_LegacySharedController.default.cleanAddressForMaps$Action(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.formattedAddressAttr, callContext).addressSafeOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sQMZShOE4ka8W5pR9OT2yw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                    // MainHallAddress = CleanAddressForMaps(GetEventByEventId.EventResponse.Host.MainHallFormattedAddress)
                                    vars.value.mainHallAddressVar = OutSystemsDebugger.handleFunctionCall(function() {
                                        return Connect2_LegacySharedController.default.cleanAddressForMaps$Action(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mainHallFormattedAddressAttr, callContext).addressSafeOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                }).then(function() {
                                    // Use hosehold coordinates?
                                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sem+76Q+gECeDyiJx44DcQ", callContext.id) && ((getHouseholdCoordinatesVar.value.responseOut.useCoordinatesAttr && !(getHouseholdCoordinatesVar.value.responseOut.longitudeAttr.equals(OS.BuiltinFunctions.integerToDecimal(0)))) && !(getHouseholdCoordinatesVar.value.responseOut.latitudeAttr.equals(OS.BuiltinFunctions.integerToDecimal(0)))))) {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yAY0esOUIki8DLjGY7H+rw", callContext.id);
                                        // Destination = GetHouseholdCoordinates.Response.Latitude + "," + GetHouseholdCoordinates.Response.Longitude
                                        vars.value.destinationVar = ((OS.BuiltinFunctions.decimalToText(getHouseholdCoordinatesVar.value.responseOut.latitudeAttr) + ",") + OS.BuiltinFunctions.decimalToText(getHouseholdCoordinatesVar.value.responseOut.longitudeAttr));
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hfAhz_xfz06hOl1V0TbeYQ", callContext.id);
                                        // Destination = EncodeUrl
                                        vars.value.destinationVar = OS.BuiltinFunctions.encodeUrl(vars.value.hostAddressVar);
                                    }

                                    // Use main hall coordinates?
                                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3N_mcuSihEeT8juGonunUw", callContext.id) && ((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mainHallUseLatLongAttr && ((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mainHallLongititudeAttr) !== (""))) && ((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mainHallLatitudeAttr) !== (""))))) {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z0p8bqmfwUKtxH6EWyedFA", callContext.id);
                                        // Origin = GetEventByEventId.EventResponse.Host.MainHallLatitude + "," + GetEventByEventId.EventResponse.Host.MainHallLongititude
                                        vars.value.originVar = ((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mainHallLatitudeAttr + ",") + model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mainHallLongititudeAttr);
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0QwVu3cXG069Fy20bdKK6A", callContext.id);
                                        // Origin = EncodeUrl
                                        vars.value.originVar = OS.BuiltinFunctions.encodeUrl(vars.value.mainHallAddressVar);
                                    }

                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5Gb+JKko6EO7v+hZUDWz7Q", callContext.id);
                                    // MapsAddress = "&origin=" + Origin + "&destination=" + Destination + "&travelmode=driving"
                                    vars.value.mapsAddressVar = (((("&origin=" + vars.value.originVar) + "&destination=") + vars.value.destinationVar) + "&travelmode=driving");
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jY4IzgURA0ebaxaoq8PV4w", callContext.id);
                                    // Execute Action: GetOperatingSystem
                                    getOperatingSystemVar.value = CommonPluginController.default.getOperatingSystem$Action(callContext);

                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ctm6hSnujkKPQkn+P1VwjA", callContext.id);
                                    // Execute Action: AddAuditEventDetailEvent2
                                    model.flush();
                                    return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineGoogleMapsDirections, OS.DataTypes.LongInteger.defaultValue, "", OS.BuiltinFunctions.textToDate(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr), model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr, callContext);
                                }).then(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5q27Vnqwd0WPBz0+Z3A7iA", callContext.id) && (getOperatingSystemVar.value.operatingSystemsIdOut === Connect2_OrbitMobile_MUIModel.staticEntities.mobile_OperatingSystem.android))) {
                                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tAksr9OqKESdPU82YVphxA", callContext.id);
                                            // Execute Action: CheckAppLauncherPlugin
                                            checkAppLauncherPluginVar.value = Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action(callContext);

                                            return OS.Flow.executeSequence(function() {
                                                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RppUJA+01kafQaICLescog", callContext.id) && checkAppLauncherPluginVar.value.isAvailableOut)) {
                                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a0a6LWZ10k2n3eK3TWf5Wg", callContext.id);
                                                    // Execute Action: LaunchWithData
                                                    model.flush();
                                                    return Connect2_AppLauncherPluginController.default.launchWithData$Action(function() {
                                                        var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
                                                        rec.packageNameAttr = "com.google.android.apps.maps";
                                                        rec.uriAttr = ("https://www.google.com/maps/dir/?api=1" + vars.value.mapsAddressVar);
                                                        rec.subActivityAttr = false;
                                                        return rec;
                                                    }(), callContext).then(function(value) {
                                                        launchWithDataVar.value = value;
                                                    }).then(function() {
                                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jo0e3pT6YkWj2DB9n+gAXQ", callContext.id);
                                                        // Execute Action: AddAuditEventDetailEvent
                                                        model.flush();
                                                        return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.guestClickedDistanceFromMainHall, OS.DataTypes.LongInteger.defaultValue, "", OS.BuiltinFunctions.textToDate(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr), model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr, callContext);
                                                    }).then(function() {
                                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CWfpS7bIGkaCjo3kgqNT4A", callContext.id);
                                                    });
                                                } else {
                                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PsfCbJKfJ0e5detep86swQ", callContext.id);
                                                    // Trigger Event: NavigateTo_AndroidMaps
                                                    return controller.navigateTo_AndroidMaps$Action(vars.value.mapsAddressVar, callContext).then(function() {
                                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wDtcEgsK1Um37QnX7hWLLg", callContext.id);
                                                    });
                                                }

                                            });
                                        } else {
                                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kbbg0+E3hEePWCpe_HZ_KQ", callContext.id);
                                            // Trigger Event: NavigateTo_WebMaps
                                            return controller.navigateTo_WebMaps$Action(1, vars.value.mapsAddressVar, callContext).then(function() {
                                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rN6T4QHeg0Gs6TzsjeGlnQ", callContext.id);
                                            });
                                        }

                                    });
                                });
                            } else {
                                // Invalid
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5hrFDYBhFEas0+3qORMBjA", callContext.id);
                                OS.FeedbackMessageService.showFeedbackMessage("Map is not available", /*Info*/ 0);
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ASveWTcSHEC2G+DwxJGERQ", callContext.id);
                            }

                        });
                    } else {
                        // Network
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IHuSKk2SmkGEC25wxOLWgg", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("Please check your network connection and try again", /*Info*/ 0);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VLtTZcSrLkyJZPPH2f9qyw", callContext.id);
                    }

                });
            }).catch(function(ex) {
                OS.Logger.trace("ScreenBlock_EventDetail_V2.OnHandle_HostCardAddress", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BpQckioARE+fLW_C26BIVA", callContext.id);
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Si7FRFG_U02DNVc9MsFyoA", callContext.id) && (OS.BuiltinFunctions.toLower(allExceptionsVar.value.exceptionMessageAttr) === "application not found for uri."))) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X52T2HZ1lUOkw6HsPDCoeA", callContext.id);
                            // Raise Error: GoogleMapsNotInstalled
                            throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.GoogleMapsNotInstalled", "Please install and enable Google Maps");
                        } else {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JLQwQdyYD0etO7kjF4aXoQ", callContext.id);
                            // Raise Error: UnknownError
                            throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
                        }

                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:D_aQz3dSdEufJnahD40pYQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:D_aQz3dSdEufJnahD40pYQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_HostCardAddress$vars", [{
            name: "MapsAddress",
            attrName: "mapsAddressVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "HostAddress",
            attrName: "hostAddressVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "MainHallAddress",
            attrName: "mainHallAddressVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Origin",
            attrName: "originVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Destination",
            attrName: "destinationVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onHandle_ContactHost_Call$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactHost_Call");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactHost_Call$vars"))());
            var getLocalityNameJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getLocalityNameJSResult = getLocalityNameJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fpsA57_PP0myn0E1GODMSw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.fpsA57_PP0myn0E1GODMSw:wRaQfHifRcpTGebJy5SdVg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHost_Call", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:As6oW5N2OUaMij0ThE26YA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P05veIw9JkWVqPW+37M2fA", callContext.id);
                getLocalityNameJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_EventDetail_V2_mvc_controller_OnHandle_ContactHost_Call_GetLocalityNameJS, "GetLocalityName", "OnHandle_ContactHost_Call", {
                    JS_Locality: OS.DataConversion.JSNodeParamConverter.to(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr, OS.DataTypes.DataTypes.Text),
                    JS_LocalityName: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactHost_Call$getLocalityNameJSResult"))();
                    jsNodeResult.jS_LocalityNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.JS_LocalityName, OS.DataTypes.DataTypes.Text);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2EPgvksfS0yIkSawcbj7+Q", callContext.id) && !(((((model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mobilePhoneAttr + model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.homePhoneAttr) + model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.workPhoneAttr)) !== (""))))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PN81h9cN8UWTADidUazFMA", callContext.id);
                    // Phone = GetEventByEventId.EventResponse.Host.Phone
                    vars.value.phoneVar = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.phoneAttr;
                }

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WVclzMJUP06wuYuxa4ZfhQ", callContext.id);
                // Execute Action: OnHandle_ContactByPhone
                controller._onHandle_ContactByPhone$Action(function() {
                    var rec = new UBTConnect_UtilsModel.ContactByPhonePopupDataRec();
                    rec.contactPopupDataAttr = function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                        rec.imageURLAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.signedURLAttr;
                        rec.entityTypeIdAttr = Connect2_OrbitMobile_MUIModel.staticEntities.connect_Entity2.household;
                        rec.nameAttr = OutSystemsDebugger.handleFunctionCall(function() {
                            return Connect2_LegacySharedController.default.flipHouseholdName$Action(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householderNameAttr, callContext).out_HouseholdNameFixedOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                        rec.localityAttr = getLocalityNameJSResult.value.jS_LocalityNameOut;
                        rec.timezoneNameAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.timezoneAttr.timezoneLabelAttr;
                        rec.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.timezoneAttr.offsetSecondsAttr);
                        rec.showPopupAttr = true;
                        rec.countryNameAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.countryNameAttr;
                        return rec;
                    }();
                    rec.phoneAttr = vars.value.phoneVar;
                    rec.mobilePhoneAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.mobilePhoneAttr;
                    rec.homePhoneAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.homePhoneAttr;
                    rec.workPhoneAttr = model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.workPhoneAttr;
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NCX3AMbDBkSydi39_LAGSQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fpsA57_PP0myn0E1GODMSw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactHost_Call$vars", [{
            name: "Phone",
            attrName: "phoneVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_ContactHost_Call$getLocalityNameJSResult", [{
            name: "JS_LocalityName",
            attrName: "jS_LocalityNameOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handlerOn_NoteDeleted$Action = function(noteIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("HandlerOn_NoteDeleted");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.HandlerOn_NoteDeleted$vars"))());
            vars.value.noteIdInLocal = noteIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MKcj5_45lkO9HPsvPjY7Zw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.MKcj5_45lkO9HPsvPjY7Zw:YN8NEfC3s8+lVxCFBnaJpA", "Connect2_OrbitMobile_MUI", "HandlerOn_NoteDeleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dTUtue6uR0KpHLilubMKnA", callContext.id);
                // Foreach EventNotes.Note_Item_List
                callContext.iterationContext.registerIterationStart(model.variables.eventNotesVar.note_Item_ListAttr);
                try {
                    var note_Item_ListIterator = callContext.iterationContext.getIterator(model.variables.eventNotesVar.note_Item_ListAttr);
                    var note_Item_ListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cx0xTRKMXU6QulVte8r4jg", callContext.id) && (note_Item_ListIndex < model.variables.eventNotesVar.note_Item_ListAttr.length))) {
                        note_Item_ListIterator.currentRowNumber = note_Item_ListIndex;
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PXdHJXIH+kS_DkYymcr__g", callContext.id) && !(model.variables.eventNotesVar.note_Item_ListAttr.getItem(note_Item_ListIndex.valueOf()).idAttr.equals(vars.value.noteIdInLocal)))) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DWX6Mpny_ki13TlbOBY+zA", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(vars.value.updatedNotesVar.note_Item_ListAttr, model.variables.eventNotesVar.note_Item_ListAttr.getItem(note_Item_ListIndex.valueOf()), callContext);
                        }

                        note_Item_ListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.eventNotesVar.note_Item_ListAttr);
                }

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cJmDGKJmjkixqfjVzqKH3w", callContext.id);
                // UpdatedNotes.Total = UpdatedNotes.Note_Item_List.Length
                vars.value.updatedNotesVar.totalAttr = vars.value.updatedNotesVar.note_Item_ListAttr.length;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cJmDGKJmjkixqfjVzqKH3w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // EventNotes = UpdatedNotes
                model.variables.eventNotesVar = vars.value.updatedNotesVar;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iB47EnIFd06J2n35wcXQjA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MKcj5_45lkO9HPsvPjY7Zw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.HandlerOn_NoteDeleted$vars", [{
            name: "NoteId",
            attrName: "noteIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "UpdatedNotes",
            attrName: "updatedNotesVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectLibraryModel.NotesRec();
            },
            complexType: UBTConnectLibraryModel.NotesRec
        }]);
        Controller.prototype._onHandle_HostInformation$Action = function(isHousholdDisplayedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_HostInformation");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_HostInformation$vars"))());
            vars.value.isHousholdDisplayedInLocal = isHousholdDisplayedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:IIBG6jhTPUiBnYuyiIVC_A:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.IIBG6jhTPUiBnYuyiIVC_A:cl+dfnwN59ZmDnP43XBa6g", "Connect2_OrbitMobile_MUI", "OnHandle_HostInformation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IjGmzRyOpU2CPsDMRLAxwA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kPtgVm0FLkybmHfMQ6zpTA", callContext.id) && vars.value.isHousholdDisplayedInLocal)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Yl6OvIxQLUSpn96i3IiYTw", callContext.id) && model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.recordDisabledAttr)) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Urtt8T64YUaVCMPNo+ZoRA", callContext.id);
                                // Execute Action: App_Subscription_ShowUpgradePopUp
                                model.flush();
                                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1deIvqMpGkG37d6DcdFODw", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gfClCz1e_kKZrjDJ2JG5hA", callContext.id);
                                // Trigger Event: NavigateTo_HouseholdDetail
                                return controller.navigateTo_HouseholdDetail$Action(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.householderIDAttr, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lS+K+1UajUmXh_cPXlLsyg", callContext.id);
                                });
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f_MfjhmpG06+DvQ7LD3U6Q", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IIBG6jhTPUiBnYuyiIVC_A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IIBG6jhTPUiBnYuyiIVC_A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.OnHandle_HostInformation$vars", [{
            name: "IsHousholdDisplayed",
            attrName: "isHousholdDisplayedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_ContactOrganiser$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactOrganiser");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:DZPY+pV5lUOTKjo4pi3RTQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg/ClientActions.DZPY+pV5lUOTKjo4pi3RTQ:hfcF2WkUKqu15pF1f2jLYw", "Connect2_OrbitMobile_MUI", "OnHandle_ContactOrganiser", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2aH_l9hHRkeBXcENVgBDCw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4e7djubwBkCuerwUoi58fQ", callContext.id);
                // Execute Action: AddAuditEventDetailEvent
                model.flush();
                return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.contactEventOrganiser, OS.DataTypes.LongInteger.defaultValue, "", OS.BuiltinFunctions.textToDate(model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventDateAttr), model.variables.getEventByEventIdDataAct.eventResponseOut.hostAttr.eventLocalityNameAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ppY2U5PftkGshZHlPINDtA", callContext.id);
                    // Execute Action: OnHandle_ContactByMessage
                    controller._onHandle_ContactByMessage$Action(function() {
                        var rec = new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec();
                        rec.emailAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorEmailAttr;
                        rec.phoneAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorPhoneNumberAttr;
                        rec.isComboEmailAndPhoneAttr = true;
                        rec.contactPopupDataAttr = function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                            rec.imageURLAttr = OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_OrbitMobile_MUI.LDM_Logo.svg");
                            rec.entityTypeIdAttr = Connect2_OrbitMobile_MUIModel.staticEntities.connect_Entity2.household;
                            rec.isAvatarImageAttr = false;
                            rec.actionNameAttr = "Contact";
                            rec.nameAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorNameAttr;
                            rec.localityAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.localityNameAttr;
                            rec.timezoneNameAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.timezoneAttr.timezoneLabelAttr;
                            rec.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.timezoneAttr.offsetSecondsAttr);
                            rec.showPopupAttr = true;
                            rec.displayContactNumberAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorPhoneNumberAttr;
                            return rec;
                        }();
                        return rec;
                    }(), model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.countryNameAttr, true, callContext);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s33Sy8uqdkGlF_OGlMUiSA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DZPY+pV5lUOTKjo4pi3RTQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DZPY+pV5lUOTKjo4pi3RTQ", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByPhone_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone_Cancel$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByPhone$Action = function(event_PhoneCallInfoIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone$Action, callContext, event_PhoneCallInfoIn);

        };
        Controller.prototype.onHandle_GoToHousehold$Action = function(in_Household_IdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_RecordDisabledIn, isHouseholdDisplayedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_GoToHousehold$Action, callContext, in_Household_IdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_RecordDisabledIn, isHouseholdDisplayedIn);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByMessage$Action = function(event_ContactPopupDataIn, event_CountryNameIn, event_IsCoordinatorIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage$Action, callContext, event_ContactPopupDataIn, event_CountryNameIn, event_IsCoordinatorIn);

        };
        Controller.prototype.onAfterFetch_GetEventByEventId$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventByEventId$Action, callContext);

        };
        Controller.prototype.onHandle_ContactHost_Message$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactHost_Message$Action, callContext);

        };
        Controller.prototype.onHandle_SetContainerHeight$Action = function(event_BannerHeightIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_SetContainerHeight$Action, callContext, event_BannerHeightIn);

        };
        Controller.prototype.onHandle_ContactByMessage_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage_Cancel$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByMessage_ClickedEmail$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByMessage_ClickedEmail$Action, callContext);

        };
        Controller.prototype.handler_OnNotesChanged$Action = function(new_NotesIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnNotesChanged$Action, callContext, new_NotesIn);

        };
        Controller.prototype.onAfterFetch_FetchEventNotes$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_FetchEventNotes$Action, callContext);

        };
        Controller.prototype.onHandle_ContactByPhone_Call$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone_Call$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.toggle_IsFetching$Action = function(setToIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggle_IsFetching$Action, callContext, setToIn);

        };
        Controller.prototype.onHandle_HostCardAddress$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_HostCardAddress$Action, callContext);

        };
        Controller.prototype.onHandle_ContactHost_Call$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactHost_Call$Action, callContext);

        };
        Controller.prototype.handlerOn_NoteDeleted$Action = function(noteIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handlerOn_NoteDeleted$Action, callContext, noteIdIn);

        };
        Controller.prototype.onHandle_HostInformation$Action = function(isHousholdDisplayedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_HostInformation$Action, callContext, isHousholdDisplayedIn);

        };
        Controller.prototype.onHandle_ContactOrganiser$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactOrganiser$Action, callContext);

        };
        Controller.prototype.navigateTo_WebMaps$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_AndroidMaps$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_ContactByEmail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_HouseholdCarousel$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_HouseholdDetail$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsadKUxZz0+omagmDt0wFQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ:TG3hGul8Bx_v2kAU82Nhuw", "Connect2_OrbitMobile_MUI", "LDM_ScreenBlocks_V2", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cEqSlcX980KfrNUGyVxUcg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.cEqSlcX980KfrNUGyVxUcg:LpDJjoqtMgtfvAEnPXi07w", "Connect2_OrbitMobile_MUI", "ScreenBlock_EventDetail_V2", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cEqSlcX980KfrNUGyVxUcg", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gsadKUxZz0+omagmDt0wFQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_EventDetail_V2 On Parameters Changed");
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
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller.OnHandle_ContactHost_Message.GetLocalityNameJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.JS_LocalityName = $parameters.JS_Locality.replace(/\s*\([^)]*\)/, "");
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$controller.OnHandle_ContactHost_Call.GetLocalityNameJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.JS_LocalityName = $parameters.JS_Locality.replace(/\s*\([^)]*\)/, "");
    };
});

define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_EventDetail_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "ifBdnFQTqE6w19q3r8Ez8w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_PhoneCallInfoInLocal;
            }
        },
        "a3PWNLaYMEaeBU5PNufC+g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isLimitedLDMHostVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "w67_2XsjnEedQqSZwKiDTQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_Household_IdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "DZYx+1ZXYECSELgDXKORfQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "FY+BwWZRIEWFdw1VWxUe3w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_CurrentRowNumberInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "Rl3uwl7zhUiwkQB0YA_FVg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_RecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "H9QjBVIV5EWPgJ6apxVKGg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isHouseholdDisplayedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "sPODAOC2LES0oxk8A4gkKg": {
            getter: function(varBag, idService) {
                return varBag.isFreeSubscriptionPlanVar.value;
            }
        },
        "Y0qOvmyKx0SJtjpmFGwkpA": {
            getter: function(varBag, idService) {
                return varBag.isRegionalSubscriptionPlanVar.value;
            }
        },
        "emLU1EDDEEanOXS6_K4YaA": {
            getter: function(varBag, idService) {
                return varBag.carouselFilteredEventResultsVar.value;
            }
        },
        "i_ZHPAj3jkK86G44L9n_gA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_ContactPopupDataInLocal;
            }
        },
        "wHgJZ4AxVkaY1s50JK1nWg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_CountryNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UINt6wozC0etQcD8xKgKew": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IsCoordinatorInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "X3V46ibB0ESpX+oWJkIm+A": {
            getter: function(varBag, idService) {
                return varBag.flipHouseholdNameVar.value;
            }
        },
        "YGqpH4WEQUKkRtluhU1HVQ": {
            getter: function(varBag, idService) {
                return varBag.getLocalityNameJSResult.value;
            }
        },
        "HtZafBfTHkiYSAZYM6o6Yw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_BannerHeightInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "b1OfXd86ckWqpp_WMpX8eQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.new_NotesInLocal;
            }
        },
        "+CvNMeO+VUO3ZpXTFVXQOA": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_EndVar.value;
            }
        },
        "FB5gc5LtiUydH97amI+XrQ": {
            getter: function(varBag, idService) {
                return varBag.getCurrentTimeInMill_StartVar.value;
            }
        },
        "NAW9BAIlvU+o9dlwOoV98w": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "89fy+TZivEGN1ySJuYV5xA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.setToInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "iNIUMmX_QkefEwq1TkCEJg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.mapsAddressVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "M18kjYtKOkaLiTmZDmpL2A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.hostAddressVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "HyeZxRcT90KykUkZVt7DvQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.mainHallAddressVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "LcZXQOqUEE28yNDgxYBGYA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.originVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ZXnN+BS0+ES+Mhs240U4VQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.destinationVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "BpQckioARE+fLW_C26BIVA": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "C+ZVptkYIUawFfxMa6_6aA": {
            getter: function(varBag, idService) {
                return varBag.getHouseholdCoordinatesVar.value;
            }
        },
        "n3DoDWG5oESf4iejAoBrmA": {
            getter: function(varBag, idService) {
                return varBag.getNetworkStatusVar.value;
            }
        },
        "a0a6LWZ10k2n3eK3TWf5Wg": {
            getter: function(varBag, idService) {
                return varBag.launchWithDataVar.value;
            }
        },
        "tAksr9OqKESdPU82YVphxA": {
            getter: function(varBag, idService) {
                return varBag.checkAppLauncherPluginVar.value;
            }
        },
        "jY4IzgURA0ebaxaoq8PV4w": {
            getter: function(varBag, idService) {
                return varBag.getOperatingSystemVar.value;
            }
        },
        "Vjsk6Th0p0qMhwFU3wXKEQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.phoneVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "P05veIw9JkWVqPW+37M2fA": {
            getter: function(varBag, idService) {
                return varBag.getLocalityNameJSResult.value;
            }
        },
        "IVUskHAwK0u7vP6r17zKFA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updatedNotesVar;
            }
        },
        "C1FdIuC6xU6o55JkQ4UYYw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "ylLkLUG9RUCjSVqj89k2QQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isHousholdDisplayedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8xk9wHSrlEGKreDDkHip2g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0vlfSvVYA0uqmWXGz5a4+w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.minBannerHeightVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "g1hVAdQi5k+ye+VjCFc55g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.squarePhotoPxVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "x4hQiaZ2cU6Il6f6+7AE2g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasInformationVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "QIi6I7hYOEaoIO7uj9wLAg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxPhotoWidthVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "zrExIXXJ_E+M06Uz5C+lWw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxPhotoHeightVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "bUsYFuOhOEutkB6jtb9XpA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactByPhoneDataVar;
            }
        },
        "cacQ1h5vzEyOeessgt8XRQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactByMessagePopupDataVar;
            }
        },
        "t9dF+RRYJEiXwMz_MYp+WQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactByMessagePopupData_IsCoordinatorVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "sdjbUcfxK0aYkz5+U5d71A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventNotesVar;
            }
        },
        "_B6p5XFcokezCMc6DoPICQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventHostIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "m_HNNqwcvkiSEu3voJ8NLw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Fly0XvwOp0miEqM2xkQOxA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getCoordinatorDetailsDataAct;
            }
        },
        "fbrJn6bfDkWpBtIFcvaLpg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fetchEventNotesDataAct;
            }
        },
        "tJbD0ZFaJEKhR85dohlQyQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getEventByEventIdDataAct;
            }
        },
        "w7mip2t_gUqgUD4vMykr2g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "zrRyf4wE0kSd8Bh7m6G+Ag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "Q0WE28wgo0C+VVb0Zk7orA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "SIcbPrsEBEGVLXmOnef3xA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "s+1Cp5TWtEaop3WnMnR0HQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsFetchingData"));
                })(varBag.model, idService);
            }
        },
        "+lxF3hamKkuv5XJPyrVXMg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "UDqFuPGj8EeeMG4+zLQ2uA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "VbGTWqIdxU+1sjf626kbmw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "ymo2Ho3Fl0GhKNT+q68eZA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasNoErrorFetching"));
                })(varBag.model, idService);
            }
        },
        "GVIXhGhu9UWyFXJXPdM2Ng": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsNotFetchingData"));
                })(varBag.model, idService);
            }
        },
        "fKtuLzR5aUmNbLcK5xClJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasData"));
                })(varBag.model, idService);
            }
        },
        "4w5sDP5wRUOOJCYM6lnsmg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Banner_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "gt1tRyRytEK2enI+wxAVFA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("GuestView_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "NplxcfbjTkWDs3hOGot0gA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsNotHost"));
                })(varBag.model, idService);
            }
        },
        "PT76sQblQESUx4LkgsAjPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "GSQyK4LxM06Q+5mZZNLKdg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowSpecialNeeds"));
                })(varBag.model, idService);
            }
        },
        "lZZkyPRD9kOPkNJEbgRuDw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Detail_SpecialNeeds"));
                })(varBag.model, idService);
            }
        },
        "1SXloGTxX0e4tATWcBxZgg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Section_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "7ES8SpqYWEylzXlinw+uCQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasDietary"));
                })(varBag.model, idService);
            }
        },
        "bZ__sPRAOkmHQVY6cyo1AA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Dietary"));
                })(varBag.model, idService);
            }
        },
        "YMh2RwmUnE6tygDMdnlIsQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "jUj_sJ21GUWBiNs3HdP7Sw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Dietary"));
                })(varBag.model, idService);
            }
        },
        "rJEah7Far06oyNXANh6l2Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SpecialNeeds_ListItem_Dietary"));
                })(varBag.model, idService);
            }
        },
        "5a+YzVBCVkaLNtAh4bCF5w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "w7NF2pkBNEuYfFWzuJGgPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Info_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "uHcLF4M2_UaZJZJp7TuvQQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasMobility"));
                })(varBag.model, idService);
            }
        },
        "xbhswlbzAEC77Id4zT2K1Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Mobility"));
                })(varBag.model, idService);
            }
        },
        "dYAa93BzsEekNyic8S8rqA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "ma5mU2Kc4ECwCrcaV2aOmw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Mobility"));
                })(varBag.model, idService);
            }
        },
        "+lPzaBZVyUSlTmyIcvRESA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SpecialNeeds_ListItem_Mobility"));
                })(varBag.model, idService);
            }
        },
        "2rz6Fb8v_kOSStQjF2TmFQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "XVW0FUKEFEm174jJghFipA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Info_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "A+KTpqKs2Em8rXIdhxOpqg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasOther"));
                })(varBag.model, idService);
            }
        },
        "qkZiqgMCu0eHdRRGNd2wNA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Other"));
                })(varBag.model, idService);
            }
        },
        "j2bwTlcR8kC5ijKrrOCxLw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubSection_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "W+HlKUuMiEWrxUD3F2JjHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Other"));
                })(varBag.model, idService);
            }
        },
        "m9Pt6furDk+p3VFmdDPMnA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SpecialNeeds_ListItem_Other"));
                })(varBag.model, idService);
            }
        },
        "3AuEtMySPkCa0_U4Wz8NGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "QdVMM_7YtkOrSdAWKWGDBw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Info_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "2JqkYnmnnEiIu3wDhmJ0mA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsPublished"));
                })(varBag.model, idService);
            }
        },
        "cPWmSZDAJUemC1L2UGsDEw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasGuestData"));
                })(varBag.model, idService);
            }
        },
        "VDd6fRROG06stK_kf35a0g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Detail_GuestsHouseholds"));
                })(varBag.model, idService);
            }
        },
        "WOGPQqornk2SJ_b3oNmw_Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Section_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "ZIS5Fz2O30W11vcLwbJe7A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Guests"));
                })(varBag.model, idService);
            }
        },
        "1T_rNapV5kedHcsKrEZ7WQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListItem_Guests"));
                })(varBag.model, idService);
            }
        },
        "CyQei9TYG06igHnoZgjGkg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MarkReadLoading"));
                })(varBag.model, idService);
            }
        },
        "U+gMyxJxukajpq885Er8kQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "CPbicezPKkCrhpxmHAL6qA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "bHgr2Xock0qWw+BIJCoyHA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "vrByBr+WhE+gXQP1LjgQ8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "QzgDGtFwd0CCFidLC2Y0aw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});