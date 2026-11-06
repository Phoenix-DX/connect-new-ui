define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "Connect2_OrbitMobile_IS.model", "MemoryClientCache.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "UBTConnect_Utils.controller$GetHasOrbitEventBooklet", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasOrbitHostSurvey", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_BL.model$GetEventDetailScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$DateFilterRec", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList", "Connect2_OrbitMobile_MUI.model$LongIntegerLongIntegerLongIntegerRecord", "UBTConnectLibrary.model$NotesRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "Connect2_OrbitMobile_MUI.model$Note_ItemList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$ActionBarOptionsRec", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.model$DayFilterList", "Connect2_OrbitMobile_MUI.controller$GetHostAllocation", "Connect2_OrbitMobile_MUI.model$AuditPayload_GenerateQRCodeRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_GenerateQRCode", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_OrbitMobile_MUI.controller$FilterMilestonesByDateGroup", "Connect2_OrbitMobile_IS.model$HostSurveyRec", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, Connect2_OrbitMobile_ISModel, MemoryClientCacheModel, Connect2_OrbitMobile_MUIEntities, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, UBTConnect_Utils_CW_Notes_ItemNotesSection_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_List_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel) {
    var OS = OutSystems.Internal;
    var GetLocalSurveyStatusByJSONNameAggrRec = (function(_super) {
        __extends(GetLocalSurveyStatusByJSONNameAggrRec, _super);

        function GetLocalSurveyStatusByJSONNameAggrRec(defaults) {
            _super.apply(this, arguments);
        }
        GetLocalSurveyStatusByJSONNameAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList;
        GetLocalSurveyStatusByJSONNameAggrRec.init();
        return GetLocalSurveyStatusByJSONNameAggrRec;
    })(OS.Model.AggregateRecord);

    var Get_EventDetailsDataActRec = (function(_super) {
        __extends(Get_EventDetailsDataActRec, _super);

        function Get_EventDetailsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_EventDetailsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetEventDetailScreenRec());
                }, true, Connect2_OrbitMobile_BLModel.GetEventDetailScreenRec),
                this.attr("Response_DateFilters", "response_DateFiltersOut", "Response_DateFilters", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.DateFilterRec());
                }, true, Connect2_OrbitMobile_BLModel.DateFilterRec),
                this.attr("IsNullResponse", "isNullResponseOut", "IsNullResponse", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_EventDetailsDataActRec.init();
        return Get_EventDetailsDataActRec;
    })(OS.Model.DataSourceRecord);
    var Get_HostSurveyStatusDataActRec = (function(_super) {
        __extends(Get_HostSurveyStatusDataActRec, _super);

        function Get_HostSurveyStatusDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_HostSurveyStatusDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurveyRec());
                }, true, Connect2_OrbitMobile_ISModel.HostSurveyRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_HostSurveyStatusDataActRec.fromStructure = function(str) {
            return new Get_HostSurveyStatusDataActRec(new Get_HostSurveyStatusDataActRec.RecordClass({
                responseOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Get_HostSurveyStatusDataActRec.init();
        return Get_HostSurveyStatusDataActRec;
    })(OS.Model.DataSourceRecord);
    var Get_HasQRCodeDataActRec = (function(_super) {
        __extends(Get_HasQRCodeDataActRec, _super);

        function Get_HasQRCodeDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_HasQRCodeDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response_HasQRCode", "response_HasQRCodeOut", "Response_HasQRCode", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("Response_HasScanned", "response_HasScannedOut", "Response_HasScanned", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_HasQRCodeDataActRec.init();
        return Get_HasQRCodeDataActRec;
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
    var Get_HasDocumentsDataActRec = (function(_super) {
        __extends(Get_HasDocumentsDataActRec, _super);

        function Get_HasDocumentsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_HasDocumentsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response_HasDocuments", "response_HasDocumentsOut", "Response_HasDocuments", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_HasDocumentsDataActRec.fromStructure = function(str) {
            return new Get_HasDocumentsDataActRec(new Get_HasDocumentsDataActRec.RecordClass({
                response_HasDocumentsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Get_HasDocumentsDataActRec.init();
        return Get_HasDocumentsDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("EventDetails", "eventDetailsVar", "EventDetails", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetEventDetailScreenRec());
                }, false, Connect2_OrbitMobile_BLModel.GetEventDetailScreenRec),
                this.attr("DateFilters", "dateFiltersVar", "DateFilters", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.DateFilterRec());
                }, false, Connect2_OrbitMobile_BLModel.DateFilterRec),
                this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("HostAllocation", "hostAllocationVar", "HostAllocation", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.Milestone_ScreenList());
                }, false, Connect2_OrbitMobile_MUIModel.Milestone_ScreenList),
                this.attr("HasQRCode", "hasQRCodeVar", "HasQRCode", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("HasScanned", "hasScannedVar", "HasScanned", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("HasDocuments", "hasDocumentsVar", "HasDocuments", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsEventUnavailable", "isEventUnavailableVar", "IsEventUnavailable", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("UserInformation", "userInformationVar", "UserInformation", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LongIntegerLongIntegerLongIntegerRecord());
                }, false, Connect2_OrbitMobile_MUIModel.LongIntegerLongIntegerLongIntegerRecord),
                this.attr("EventNotes", "eventNotesVar", "EventNotes", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
                }, false, UBTConnectLibraryModel.NotesRec),
                this.attr("In_MemberId", "in_MemberIdIn", "In_MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_FromNotification", "in_FromNotificationIn", "In_FromNotification", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetLocalSurveyStatusByJSONName", "getLocalSurveyStatusByJSONNameAggr", "getLocalSurveyStatusByJSONNameAggr", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetLocalSurveyStatusByJSONNameAggrRec());
                }, true, GetLocalSurveyStatusByJSONNameAggrRec),
                this.attr("Get_EventDetails", "get_EventDetailsDataAct", "get_EventDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_EventDetailsDataActRec());
                }, true, Get_EventDetailsDataActRec),
                this.attr("Get_HostSurveyStatus", "get_HostSurveyStatusDataAct", "get_HostSurveyStatusDataAct", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_HostSurveyStatusDataActRec());
                }, true, Get_HostSurveyStatusDataActRec),
                this.attr("Get_HasQRCode", "get_HasQRCodeDataAct", "get_HasQRCodeDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_HasQRCodeDataActRec());
                }, true, Get_HasQRCodeDataActRec),
                this.attr("FetchEventNotes", "fetchEventNotesDataAct", "fetchEventNotesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FetchEventNotesDataActRec());
                }, true, FetchEventNotesDataActRec),
                this.attr("Get_HasDocuments", "get_HasDocumentsDataAct", "get_HasDocumentsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_HasDocumentsDataActRec());
                }, true, Get_HasDocumentsDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Notes_ItemNotesSection_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_List_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_MemberId" in inputs) {
                this.variables.in_MemberIdIn = inputs.In_MemberId;
                if ("_in_MemberIdInDataFetchStatus" in inputs) {
                    this.variables._in_MemberIdInDataFetchStatus = inputs._in_MemberIdInDataFetchStatus;
                }

            }

            if ("In_EventId" in inputs) {
                this.variables.in_EventIdIn = inputs.In_EventId;
                if ("_in_EventIdInDataFetchStatus" in inputs) {
                    this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
                }

            }

            if ("In_EventName" in inputs) {
                this.variables.in_EventNameIn = inputs.In_EventName;
                if ("_in_EventNameInDataFetchStatus" in inputs) {
                    this.variables._in_EventNameInDataFetchStatus = inputs._in_EventNameInDataFetchStatus;
                }

            }

            if ("In_FromNotification" in inputs) {
                this.variables.in_FromNotificationIn = inputs.In_FromNotification;
                if ("_in_FromNotificationInDataFetchStatus" in inputs) {
                    this.variables._in_FromNotificationInDataFetchStatus = inputs._in_FromNotificationInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_EventDetail");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "Connect2_OrbitMobile_IS.model", "MemoryClientCache.model", "Connect2_OrbitMobile_MUI.entities", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_List.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventDateSelection.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "UBTConnect_Utils.controller$GetHasOrbitEventBooklet", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasOrbitHostSurvey", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_BL.model$GetEventDetailScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$DateFilterRec", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList", "Connect2_OrbitMobile_MUI.model$LongIntegerLongIntegerLongIntegerRecord", "UBTConnectLibrary.model$NotesRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "Connect2_OrbitMobile_MUI.model$Note_ItemList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$ActionBarOptionsRec", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.model$DayFilterList", "Connect2_OrbitMobile_MUI.controller$GetHostAllocation", "Connect2_OrbitMobile_MUI.model$AuditPayload_GenerateQRCodeRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_GenerateQRCode", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_OrbitMobile_MUI.controller$FilterMilestonesByDateGroup", "Connect2_OrbitMobile_IS.model$HostSurveyRec", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, Connect2_OrbitMobile_ISModel, MemoryClientCacheModel, Connect2_OrbitMobile_MUIEntities, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_List_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_EventDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_List_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, {
                inputs: {
                    CustomClass: "orbit-detail orbit-header-center"
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
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.getCachedValue(idService.getId("RKk8W6bGHkC2tkzp2hKudg.Value"), function() {
                                return ((((model.variables.in_EventNameIn) !== (""))) ? (model.variables.in_EventNameIn) : (model.variables.eventDetailsVar.eventNameAttr));
                            }, function() {
                                return model.variables.in_EventNameIn;
                            }, function() {
                                return model.variables.eventDetailsVar.eventNameAttr;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
                        })];
                    }),
                    headerRight: new PlaceholderContent(function() {
                        return [$if(!(model.variables.isFetchingDataVar), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "display-flex flex-direction-row align-content-space-evenly align-items-center padding-left-base",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, $if(!(model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr.isEmpty), false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: true,
                                    extendedEvents: {
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Container onclick");
                                                    return controller.onClick_GenerateQRCode$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "line-height: initial;"
                                    },
                                    style: "display-flex align-items-center align-content-center",
                                    visible: (model.variables.hasQRCodeVar && !(model.variables.hasScannedVar)),
                                    _idProps: {
                                        service: idService,
                                        uuid: "5"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Icon, {
                                    icon: "qrcode",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon padding-none font-size-1-5em",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "6"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))];
                            }, function() {
                                return [];
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

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Container onclick");
                                                return controller.onClick_OpenDocuments$Action(controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    }
                                },
                                extendedProperties: {
                                    style: "line-height: initial;"
                                },
                                style: "display-flex align-items-center align-content-center",
                                visible: model.variables.hasDocumentsVar,
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Icon, {
                                extendedProperties: {
                                    className: model.getCachedValue(idService.getId("E5GGOD6+c0W+0LTfaNDGuA.class"), function() {
                                        return ("icon orbit-icon-paper-clip padding-none font-size-1-5em" + (((!(model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr.isEmpty) && (model.variables.hasQRCodeVar && !(model.variables.hasScannedVar)))) ? (" margin-left-base") : ("")));
                                    }, function() {
                                        return model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr.isEmpty;
                                    }, function() {
                                        return model.variables.hasQRCodeVar;
                                    }, function() {
                                        return model.variables.hasScannedVar;
                                    })
                                },
                                icon: "flag",
                                iconSize: /*FontSize*/ 0,
                                style: "\"icon\"",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))];
                        }, function() {
                            return [];
                        })];
                    }),
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [$if(!(model.variables.isFetchingDataVar), false, this, function() {
                            return [$if(!(model.variables.isEventUnavailableVar), false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "font-size-0-9em padding-x-m padding-y-m",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "9"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "flex-center-vertical",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "10"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Icon, {
                                    icon: "flag",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon orbit-icon-date-time",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Expression, {
                                    style: "margin-left-base",
                                    value: model.getCachedValue(idService.getId("qZMbVcP84kSDfZB6BzdrIg.Value"), function() {
                                        return ((OutSystemsDebugger.handleFunctionCall(function() {
                                            return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.eventDetailsVar.eventStartDateAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id) + " - ") + OutSystemsDebugger.handleFunctionCall(function() {
                                            return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.eventDetailsVar.eventEndDateAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id));
                                    }, function() {
                                        return model.variables.eventDetailsVar.eventStartDateAttr;
                                    }, function() {
                                        return model.variables.eventDetailsVar.eventEndDateAttr;
                                    }),
                                    _idProps: {
                                        service: idService,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), $if(((model.variables.eventDetailsVar.orbitEventTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitEventType.eventHost) || (model.variables.eventDetailsVar.orbitEventTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitEventType.eventAdmin)), false, this, function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "flex-center-vertical margin-top-m",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Icon, {
                                        icon: "flag",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon orbit-icon-location",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Expression, {
                                        style: "margin-left-base",
                                        value: model.variables.eventDetailsVar.locationAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "flex-center-vertical margin-top-m",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Icon, {
                                        icon: "flag",
                                        iconSize: /*FontSize*/ 0,
                                        style: "icon orbit-icon-host-guest",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Expression, {
                                        style: "margin-left-base",
                                        value: model.variables.eventDetailsVar.orbitEventTypeAttr.typeAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }, function() {
                                    return [];
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "flex-center-vertical margin-top-m",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Icon, {
                                    icon: "flag",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon orbit-icon-window",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Expression, {
                                    style: "margin-left-base",
                                    value: model.variables.eventDetailsVar.typeOfEventAttr,
                                    _idProps: {
                                        service: idService,
                                        uuid: "21"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Container onclick");
                                                    return controller.onClick_ViewEventBooklet$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        }
                                    },
                                    style: "flex-center-vertical margin-top-m color-orbit-primary-7",
                                    visible: model.getCachedValue(idService.getId("t7T61kVLOU+P6u9GFJvVLQ.Visible"), function() {
                                        return (OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnect_UtilsController.default.getHasOrbitEventBooklet$Action(callContext).hasOrbitEventBookletOut;
                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id) && model.variables.eventDetailsVar.isBookletVisibleAttr);
                                    }, function() {
                                        return model.variables.eventDetailsVar.isBookletVisibleAttr;
                                    }),
                                    _idProps: {
                                        service: idService,
                                        uuid: "22"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Icon, {
                                    icon: "flag",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon orbit-icon-host-guest",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "23"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Text, {
                                    style: "margin-left-base",
                                    text: ["View Event Guest List"],
                                    _idProps: {
                                        service: idService,
                                        uuid: "24"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Icon, {
                                    icon: "flag",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon orbit-icon-arrow margin-left-base",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "25"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: true,
                                    style: "flex-center-vertical margin-top-m",
                                    visible: model.variables.hasQRCodeVar,
                                    _idProps: {
                                        service: idService,
                                        uuid: "26"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Icon, {
                                    icon: "qrcode",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "27"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Container onclick");
                                                    return controller.onClick_GenerateQRCode$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        }
                                    },
                                    extendedProperties: {
                                        className: model.getCachedValue(idService.getId("cCCc1IIBokmG_OqB6qKOSA.class"), function() {
                                            return ("orbit-generate-qrcode-button" + ((model.variables.hasScannedVar) ? (" orbit-generate-qrcode-button-disabled") : ("")));
                                        }, function() {
                                            return model.variables.hasScannedVar;
                                        })
                                    },
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "28"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Icon, {
                                    icon: "camera",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "29"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }), React.createElement(OSWidgets.Expression, {
                                    style: "orbit-generate-qrcode-button-text",
                                    value: model.getCachedValue(idService.getId("xpkoMBdbskG8HAE3YXWUZw.Value"), function() {
                                        return ((model.variables.hasScannedVar) ? ("QR CODE GENERATED") : ("GENERATE QR CODE"));
                                    }, function() {
                                        return model.variables.hasScannedVar;
                                    }),
                                    _idProps: {
                                        service: idService,
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))), React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "orbit-event-notes",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_view, {
                                    inputs: {
                                        ActionBarOptions: model.getCachedValue(idService.getId("+9JHcQ_b2kun0Y2A0woXnA.ActionBarOptions"), function() {
                                            return function() {
                                                var rec = new UBTConnectLibraryModel.ActionBarOptionsRec();
                                                rec.showAddNoteAttr = true;
                                                rec.isAddNoteEnabledAttr = true;
                                                return rec;
                                            }();
                                        }),
                                        In_NoteCategoryId: model.getCachedValue(idService.getId("+9JHcQ_b2kun0Y2A0woXnA.In_NoteCategoryId"), function() {
                                            return OS.BuiltinFunctions.textToIdentifier("Orbit Event");
                                        }),
                                        In_ItemId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_EventIdIn),
                                        _in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus),
                                        In_Notes: model.variables.eventNotesVar
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        on_NoteDeleted$Action: function(noteIdIn, wasLastNoteIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/ItemNotesSection On_NoteDeleted");
                                                controller.handler_OnNoteDeleted$Action(noteIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        on_NotesChanged$Action: function(new_NotesIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/ItemNotesSection On_NotesChanged");
                                                controller.handler_OnNotesChanged$Action(new_NotesIn, controller.callContext(eventHandlerContext));
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
                                        uuid: "32",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                }))), $if((model.variables.eventDetailsVar.eventTypeAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitEventType.eventHost), false, this, function() {
                                    return [$if(!(model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.isEmpty), false, this, function() {
                                        return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnect_UtilsController.default.getHasOrbitHostSurvey$Action(callContext).hasOrbitHostSurveyOut;
                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                            return [$if(((model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.sent) || (model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.confirmed)), false, this, function() {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "full-width padding-m display-flex align-items-center justify-content-space-between",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "33"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedEvents: {
                                                        onClick: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Container onclick");
                                                                    return controller.onClick_NavigateToHostSurvey$Action(controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });
                                                            });;
                                                        }
                                                    },
                                                    style: "orbit-host-survey-link-new",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "34"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Expression, {
                                                    style: "white-space-nowrap",
                                                    value: model.getCachedValue(idService.getId("KAbmhFlthkWd83SidSQc3A.Value"), function() {
                                                        return ((((model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.sent)) ? ("Complete") : ("View")) + " Host Survey");
                                                    }, function() {
                                                        return model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr;
                                                    }),
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "35"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalSurveyStatusByJSONNameAggr.dataFetchStatusAttr)
                                                }), React.createElement(OSWidgets.Icon, {
                                                    icon: "angle-right",
                                                    iconSize: /*FontSize*/ 0,
                                                    style: "icon margin-left-m font-size-1-25em",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "36"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
                                                    inputs: {
                                                        In_IconClass: model.getCachedValue(idService.getId("vw54Vud7zUq5t555vZ1L_A.In_IconClass"), function() {
                                                            return (((model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.sent)) ? ("orbit-icon-circle-warning color-orbit-orange-8") : ("orbit-icon-circle-check color-orbit-green-6"));
                                                        }, function() {
                                                            return model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr;
                                                        }),
                                                        _in_IconClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalSurveyStatusByJSONNameAggr.dataFetchStatusAttr),
                                                        In_IsSmallIcon: true,
                                                        In_PillText: model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.labelAttr,
                                                        _in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalSurveyStatusByJSONNameAggr.dataFetchStatusAttr),
                                                        In_ExtendedStyle: model.getCachedValue(idService.getId("vw54Vud7zUq5t555vZ1L_A.In_ExtendedStyle"), function() {
                                                            return (((model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.sent)) ? ("background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);") : ("background-color: var(--orbit-green-2); color: var(--orbit-green-6);"));
                                                        }, function() {
                                                            return model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr;
                                                        }),
                                                        _in_ExtendedStyleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalSurveyStatusByJSONNameAggr.dataFetchStatusAttr)
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
                                                        uuid: "37",
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }))];
                                            }, function() {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "orbit-host-survey-link",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "38"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Expression, {
                                                    style: "font-size-1-1em color-orbit-primary-7 bold",
                                                    value: "Host Survey",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "39"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }), React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "orbit-host-survey-link-tag",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "40"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Expression, {
                                                    value: model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.labelAttr,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "41"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalSurveyStatusByJSONNameAggr.dataFetchStatusAttr)
                                                })))];
                                            })];
                                        }, function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "orbit-host-survey-link",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "42"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Expression, {
                                                style: "font-size-1-1em color-orbit-primary-7 bold",
                                                value: "Host Survey",
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "43"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }), React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "orbit-host-survey-link-tag",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "44"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Expression, {
                                                value: model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.labelAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "45"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalSurveyStatusByJSONNameAggr.dataFetchStatusAttr)
                                            })))];
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                }, function() {
                                    return [];
                                }), $if(!(model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr.isEmpty), false, this, function() {
                                    return [$if((model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.confirmed), false, this, function() {
                                        return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
                                            inputs: {
                                                In_ColoredContent: true
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
                                                uuid: "46",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
                                                        inputs: {
                                                            IsExpanded: false,
                                                            UsePadding: false,
                                                            ExtendedClass: "orbit-accordion-item"
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
                                                            uuid: "47",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            title: new PlaceholderContent(function() {
                                                                return [React.createElement(OSWidgets.Expression, {
                                                                    value: "Host Allocation",
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "48"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                })];
                                                            }),
                                                            content: new PlaceholderContent(function() {
                                                                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_List_mvc_view, {
                                                                    inputs: {
                                                                        In_HostAllocationList: model.variables.hostAllocationVar
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        },
                                                                        onClick_View$Action: function(event_MilestoneIdIn, event_MilestoneTypeIdIn, event_MilestoneNameIn, event_HostIdIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostAllocation_List OnClick_View");
                                                                                    return controller.onHandle_HostAllocationView$Action(event_MilestoneIdIn, event_MilestoneTypeIdIn, event_MilestoneNameIn, event_HostIdIn, controller.callContext(eventHandlerContext));
                                                                                }, function() {
                                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                                });
                                                                            });;
                                                                        },
                                                                        onClick_ViewHelpers$Action: function(event_MilestoneNameIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostAllocation_List OnClick_ViewHelpers");
                                                                                    return controller.onHandle_ViewHelpers$Action(event_MilestoneNameIn, controller.callContext(eventHandlerContext));
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
                                                                        uuid: "49",
                                                                        alias: "7"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.hostAllocationVar)]
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.hostAllocationVar)]
                                        })];
                                    }, function() {
                                        return [];
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "padding-x-m padding-y-m bold color-orbit-primary-7 font-size-1-1em",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "50"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: "Itinerary",
                                        _idProps: {
                                            service: idService,
                                            uuid: "51"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventDateSelection_mvc_view, {
                                        inputs: {
                                            In_DateList: model.variables.dateFiltersVar
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            clickedDate$Action: function(event_MilestoneTimeTypeIdIn, event_SelectedDateIn, event_PositionIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventDateSelection ClickedDate");
                                                    controller.onHandle_ClickedDate$Action(event_MilestoneTimeTypeIdIn, event_SelectedDateIn, event_PositionIn, controller.callContext(eventHandlerContext));
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
                                            uuid: "52",
                                            alias: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }), React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedProperties: {
                                            "disable-virtualization": model.getCachedValue(idService.getId("wOaXjZCzJkGc0i72y7OULw.disable-virtualization"), function() {
                                                return OutSystemsDebugger.handleFunctionCall(function() {
                                                    return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                            })
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.eventDetailsVar.milestonesAttr,
                                        style: "list list-group orbit-card-list",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            uuid: "53"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "orbit-card-list-cont",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "54"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: [asPrimitiveValue(model.variables.eventDetailsVar.milestonesAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.eventDetailsVar.mealsAttr)]
                                                }, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, {
                                                    inputs: {
                                                        IsOverrideMainColorVar: model.getCachedValue(idService.getId("hLxh6cjnb0aKdXwA4XmS8w.IsOverrideMainColorVar"), function() {
                                                            return OS.BuiltinFunctions.nullTextIdentifier();
                                                        }),
                                                        IsSetUpMeals: !(model.variables.eventDetailsVar.mealsAttr),
                                                        In_MilestoneSummary: model.variables.eventDetailsVar.milestonesAttr.getCurrent(callContext.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        clickedMilestone$Action: function(event_SelectedMilestoneIn) {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Milestone ClickedMilestone");
                                                                    return controller.onHandle_ClickedMilestone$Action(event_SelectedMilestoneIn, controller.callContext(eventHandlerContext));
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
                                                        uuid: "55",
                                                        alias: "9"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }))];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.eventDetailsVar.mealsAttr)]
                                    })];
                                }, function() {
                                    return [$if((model.variables.get_EventDetailsDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function() {
                                        return [$if((model.variables.get_EventDetailsDataAct.responseOut.helpersAttr && (model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.confirmed)), false, this, function() {
                                            return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
                                                inputs: {
                                                    In_ColoredContent: true
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
                                                    uuid: "56",
                                                    alias: "10"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                placeholders: {
                                                    content: new PlaceholderContent(function() {
                                                        return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
                                                            inputs: {
                                                                UsePadding: false,
                                                                IsExpanded: false,
                                                                ExtendedClass: "orbit-accordion-item"
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
                                                                uuid: "57",
                                                                alias: "11"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            placeholders: {
                                                                title: new PlaceholderContent(function() {
                                                                    return [React.createElement(OSWidgets.Expression, {
                                                                        value: "Host Allocation",
                                                                        _idProps: {
                                                                            service: idService,
                                                                            uuid: "58"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider
                                                                    })];
                                                                }),
                                                                content: new PlaceholderContent(function() {
                                                                    return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_List_mvc_view, {
                                                                        inputs: {
                                                                            In_HostAllocationList: model.variables.hostAllocationVar
                                                                        },
                                                                        events: {
                                                                            _handleError: function(ex) {
                                                                                controller.handleError(ex);
                                                                            },
                                                                            onClick_ViewHelpers$Action: function(event_MilestoneNameIn) {
                                                                                return Promise.resolve().then(function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostAllocation_List OnClick_ViewHelpers");
                                                                                        return controller.onHandle_ViewHelpers$Action(event_MilestoneNameIn, controller.callContext(eventHandlerContext));
                                                                                    }, function() {
                                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                                    });
                                                                                });;
                                                                            },
                                                                            onClick_View$Action: function(event_MilestoneIdIn, event_MilestoneTypeIdIn, event_MilestoneNameIn, event_HostIdIn) {
                                                                                return Promise.resolve().then(function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostAllocation_List OnClick_View");
                                                                                        return controller.onHandle_HostAllocationView$Action(event_MilestoneIdIn, event_MilestoneTypeIdIn, event_MilestoneNameIn, event_HostIdIn, controller.callContext(eventHandlerContext));
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
                                                                            uuid: "59",
                                                                            alias: "12"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        _dependencies: []
                                                                    })];
                                                                })
                                                            },
                                                            _dependencies: [asPrimitiveValue(model.variables.hostAllocationVar)]
                                                        })];
                                                    })
                                                },
                                                _dependencies: [asPrimitiveValue(model.variables.hostAllocationVar)]
                                            })];
                                        }, function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "orbit-separator",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "60"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
                                                inputs: {
                                                    Message: model.getCachedValue(idService.getId("Y_b6+y81Oku0_Mj9EO5d4w.Message"), function() {
                                                        return ((model.variables.in_FromNotificationIn) ? (((model.variables.isEventUnavailableVar) ? ("The Event is no longer available for you.") : ("Your itinerary will be available once it has been published by the event organiser."))) : ("Your itinerary will be available once it has been published by the event organiser."));
                                                    }, function() {
                                                        return model.variables.in_FromNotificationIn;
                                                    }, function() {
                                                        return model.variables.isEventUnavailableVar;
                                                    }),
                                                    _messageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus),
                                                    IsUrgent: model.getCachedValue(idService.getId("Y_b6+y81Oku0_Mj9EO5d4w.IsUrgent"), function() {
                                                        return ((model.variables.isEventUnavailableVar) ? (true) : (false));
                                                    }, function() {
                                                        return model.variables.isEventUnavailableVar;
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
                                                    uuid: "61",
                                                    alias: "13"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                })];
                            }, function() {
                                return [$if((model.variables.get_EventDetailsDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function() {
                                    return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
                                        inputs: {
                                            Message: model.getCachedValue(idService.getId("HK73JkeR1E6nq_LuwxJwSQ.Message"), function() {
                                                return ((model.variables.in_FromNotificationIn) ? (((model.variables.isEventUnavailableVar) ? ("The Event is no longer available for you.") : ("Your itinerary will be available once it has been published by the event organiser."))) : ("Your itinerary will be available once it has been published by the event organiser."));
                                            }, function() {
                                                return model.variables.in_FromNotificationIn;
                                            }, function() {
                                                return model.variables.isEventUnavailableVar;
                                            }),
                                            _messageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus),
                                            IsUrgent: model.getCachedValue(idService.getId("HK73JkeR1E6nq_LuwxJwSQ.IsUrgent"), function() {
                                                return ((model.variables.isEventUnavailableVar) ? (true) : (false));
                                            }, function() {
                                                return model.variables.isEventUnavailableVar;
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
                                            uuid: "62",
                                            alias: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [];
                                })];
                            })];
                        }, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
                                inputs: {
                                    In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventDetail
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
                                    uuid: "63",
                                    alias: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    bottomBar: new PlaceholderContent(function() {
                        return [$if((!(model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr.isEmpty) && !(model.variables.isFetchingDataVar)), false, this, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, {
                                inputs: {},
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    click$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/ContactHelpdesk_Footer Click");
                                                return controller.onHandle_ContactHelpdesk$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "64",
                                    alias: "16"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "Connect2_OrbitMobile_IS.model", "MemoryClientCache.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "UBTConnect_Utils.controller$GetHasOrbitEventBooklet", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasOrbitHostSurvey", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_BL.model$GetEventDetailScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$DateFilterRec", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.model$Milestone_ScreenList", "Connect2_OrbitMobile_MUI.model$LongIntegerLongIntegerLongIntegerRecord", "UBTConnectLibrary.model$NotesRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "Connect2_OrbitMobile_MUI.model$Note_ItemList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$ActionBarOptionsRec", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.model$DayFilterList", "Connect2_OrbitMobile_MUI.controller$GetHostAllocation", "Connect2_OrbitMobile_MUI.model$AuditPayload_GenerateQRCodeRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_GenerateQRCode", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_OrbitMobile_MUI.controller$FilterMilestonesByDateGroup", "Connect2_OrbitMobile_IS.model$HostSurveyRec", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, Connect2_OrbitMobile_ISModel, MemoryClientCacheModel, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getLocalSurveyStatusByJSONName$AggrRefresh: -1,
                get_EventDetails$DataActRefresh: -1,
                get_HostSurveyStatus$DataActRefresh: -1,
                get_HasQRCode$DataActRefresh: -1,
                fetchEventNotes$DataActRefresh: 0,
                get_HasDocuments$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getLocalSurveyStatusByJSONName$AggrRefresh: [],
                get_EventDetails$DataActRefresh: [],
                get_HostSurveyStatus$DataActRefresh: ["getLocalSurveyStatusByJSONName$AggrRefresh"],
                get_HasQRCode$DataActRefresh: [],
                fetchEventNotes$DataActRefresh: [],
                get_HasDocuments$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getLocalSurveyStatusByJSONName$AggrRefresh = function(maxRecords) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext();

            var executeQuery = null;
            if (OS.NativeHelper.isRunningOnNative()) {
                executeQuery = function() {
                    var targetListType = Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList;
                    var result = {
                        list: null,
                        count: OS.DataTypes.LongInteger.defaultValue
                    };
                    var countArgsList = new OS.Entities.QueryArgumentsList();
                    if (!(maxRecords)) {
                        maxRecords = 1;
                    }

                    var qpstJSON_Name = model.variables.get_HostSurveyStatusDataAct.responseOut.idAttr;

                    var optimizeSelect = false;
                    var selectSql = "";
                    var fromAndWhereSql = "";
                    var groupByAndHavingSql = "";
                    var orderBySql = "";
                    var argsList = new OS.Entities.QueryArgumentsList();

                    selectSql += "SELECT ";
                    if (optimizeSelect) {
                        selectSql += "\"ENLocalSurveyStatus\".\"Id\" o0, \"ENLocalSurveyStatus\".\"Label\" o1, NULL o2";
                    } else {
                        selectSql += "\"ENLocalSurveyStatus\".\"Id\" o0, \"ENLocalSurveyStatus\".\"Label\" o1, \"ENLocalSurveyStatus\".\"JSON_Name\" o2";
                    }
                    fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalSurveyStatus\" \"ENLocalSurveyStatus\"";
                    fromAndWhereSql += " WHERE (\"ENLocalSurveyStatus\".\"JSON_Name\" = :qpstJSON_Name)";
                    argsList.add("qpstJSON_Name", /*TEXT*/ 0, qpstJSON_Name);
                    if (maxRecords > 0) {
                        orderBySql += " LIMIT ";
                        orderBySql += maxRecords;
                    }
                    var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

                    return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList, function(rec, r) {
                        var indexRef = {
                            value: 0
                        };
                        var attrOrder = [
                            "localSurveyStatusAttr",
                        ];
                        return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

                    }, argsList).then(function(resultList) {
                        result.list = resultList;
                    }).then(function() {}).then(function() {
                        return result;
                    });
                };
            } else {
                executeQuery = function() {
                    if (!(maxRecords)) {
                        maxRecords = 1;
                    }

                    return new Promise(function(resolve, reject) {
                        require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function(Connect2_OrbitMobile_MUIAggregates_IDB) {
                            return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_ScreenBlock_EventDetail$Block$getLocalSurveyStatusByJSONNameAggr(model.variables.get_HostSurveyStatusDataAct.responseOut.idAttr, maxRecords).then(function(result) {
                                resolve(result);
                            }).catch(function(e) {
                                reject(e);
                            });
                        });
                    });
                };
            }

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:3VtiecbyK0215QfPdPYlig:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ScreenDataSets.3VtiecbyK0215QfPdPYlig:dl7qJTipJSDAwgIaLJadOQ", "Connect2_OrbitMobile_MUI", "GetLocalSurveyStatusByJSONName", "NRNodes.WebScreenDataSet", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/GetLocalSurveyStatusByJSONName");
                return controller.executeScreenClientAggregate(executeQuery, function() {
                    return model.variables.getLocalSurveyStatusByJSONNameAggr;
                }, function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/GetLocalSurveyStatusByJSONName On After Fetch");
                    controller._onAfterFetch_GetLocalSurveyStatus$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:3VtiecbyK0215QfPdPYlig", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.get_EventDetails$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9Mlsf22Laku3rrLrKqSDUg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/DataActions.9Mlsf22Laku3rrLrKqSDUg:M0Km9lGNRbdcbQ+g8NxGjQ", "Connect2_OrbitMobile_MUI", "Get_EventDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_EventDetails");
                return controller.callDataAction("DataActionGet_EventDetails", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_EventDetails", "VgbzM9nClqHqVmUhFhmiNg", function(b) {
                    model.variables.get_EventDetailsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_EventDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_EventDetailsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_EventDetails On After Fetch");
                    controller._onAfterFetch_Get_EventDetails$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9Mlsf22Laku3rrLrKqSDUg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.get_HostSurveyStatus$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qgk7rSRux0iRwby4rUttEA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/DataActions.qgk7rSRux0iRwby4rUttEA:ZhP9iI26TX9ma1fkXVn+Gw", "Connect2_OrbitMobile_MUI", "Get_HostSurveyStatus", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_HostSurveyStatus");
                return controller.callDataAction("DataActionGet_HostSurveyStatus", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HostSurveyStatus", "jo_oThPZKbxCnmDFxLglSQ", function(b) {
                    model.variables.get_HostSurveyStatusDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_HostSurveyStatusDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_HostSurveyStatusDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_HostSurveyStatus On After Fetch");
                    return controller._onAfterFetch_Get_HostSurveyStatus$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qgk7rSRux0iRwby4rUttEA", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.get_HasQRCode$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8YcStQVbG0eGpTwHolXinA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/DataActions.8YcStQVbG0eGpTwHolXinA:kZQquCAZkTH0GDo_NdtgHQ", "Connect2_OrbitMobile_MUI", "Get_HasQRCode", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_HasQRCode");
                return controller.callDataAction("DataActionGet_HasQRCode", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasQRCode", "6ANrr+e6VU_4NuKUkSrszg", function(b) {
                    model.variables.get_HasQRCodeDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_HasQRCodeDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_HasQRCodeDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_HasQRCode On After Fetch");
                    controller._onAfterFetch_Get_HasQRCode$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8YcStQVbG0eGpTwHolXinA", callContext.id);
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

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:DIWy0SAHKkGlZfzLbHtqHw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/DataActions.DIWy0SAHKkGlZfzLbHtqHw:Wm_ZTTRc5W71HGNaoJuOfw", "Connect2_OrbitMobile_MUI", "FetchEventNotes", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/FetchEventNotes");
                return controller.callDataAction("DataActionFetchEventNotes", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionFetchEventNotes", "G1tns8n_hOecA9jdno6OJw", function(b) {
                    model.variables.fetchEventNotesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.fetchEventNotesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchEventNotesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/FetchEventNotes On After Fetch");
                    controller._onAfterFetch_FetchEventNotes$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DIWy0SAHKkGlZfzLbHtqHw", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.get_HasDocuments$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:i0T51HZ3K02DCDS1We0Kog:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/DataActions.i0T51HZ3K02DCDS1We0Kog:uUnLvCIyQEwb2h5gucUdpw", "Connect2_OrbitMobile_MUI", "Get_HasDocuments", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_HasDocuments");
                return controller.callDataAction("DataActionGet_HasDocuments", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_EventDetail/DataActionGet_HasDocuments", "UvyO+bqfv0ECmoTXG0HqDw", function(b) {
                    model.variables.get_HasDocumentsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_HasDocumentsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_HasDocumentsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail/Get_HasDocuments On After Fetch");
                    controller._onAfterFetch_GetHasDocuments$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:i0T51HZ3K02DCDS1We0Kog", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getLocalSurveyStatusByJSONName$AggrRefresh", "get_EventDetails$DataActRefresh", "get_HostSurveyStatus$DataActRefresh", "get_HasQRCode$DataActRefresh", "fetchEventNotes$DataActRefresh", "get_HasDocuments$DataActRefresh"];
        // Client Actions
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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:CP36BV0OgUiSfqU2FXxbTg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.CP36BV0OgUiSfqU2FXxbTg:eO7NpodoFKPJcJLqZRCD+Q", "Connect2_OrbitMobile_MUI", "OnAfterFetch_FetchEventNotes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GNfPKzkUPkmBU87JH7NI8A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9M_x8W1iMEaTxfmPSPxKCQ", callContext.id);
                // EventNotes = FetchEventNotes.Notes
                model.variables.eventNotesVar = model.variables.fetchEventNotesDataAct.notesOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UH0M3ExHz0S3Xjm_lEmp+g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:CP36BV0OgUiSfqU2FXxbTg", callContext.id);
            }

        };
        Controller.prototype._handler_OnNoteDeleted$Action = function(noteIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnNoteDeleted");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.Handler_OnNoteDeleted$vars"))());
            vars.value.noteIdInLocal = noteIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LhAEHlHNmEi5ZKJfVB58xw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.LhAEHlHNmEi5ZKJfVB58xw:bms93FEOjph4YAhhxQaVRQ", "Connect2_OrbitMobile_MUI", "Handler_OnNoteDeleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GIK15sCxRUyNo4cKvvwq7g", callContext.id);
                // Foreach EventNotes.Note_Item_List
                callContext.iterationContext.registerIterationStart(model.variables.eventNotesVar.note_Item_ListAttr);
                try {
                    var note_Item_ListIterator = callContext.iterationContext.getIterator(model.variables.eventNotesVar.note_Item_ListAttr);
                    var note_Item_ListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yHBC5FLE0kuyJfvD5tqX0w", callContext.id) && (note_Item_ListIndex < model.variables.eventNotesVar.note_Item_ListAttr.length))) {
                        note_Item_ListIterator.currentRowNumber = note_Item_ListIndex;
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ijkr0rtgakaFdzCSf61Y8w", callContext.id) && !(model.variables.eventNotesVar.note_Item_ListAttr.getItem(note_Item_ListIndex.valueOf()).idAttr.equals(vars.value.noteIdInLocal)))) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KYj6IYGf5kyK7mb5EJoPfA", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(vars.value.updatedNotesVar.note_Item_ListAttr, model.variables.eventNotesVar.note_Item_ListAttr.getItem(note_Item_ListIndex.valueOf()), callContext);
                        }

                        note_Item_ListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.eventNotesVar.note_Item_ListAttr);
                }

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uWhPkd3WVkOqclAcokVwkQ", callContext.id);
                // UpdatedNotes.Total = UpdatedNotes.Note_Item_List.Length
                vars.value.updatedNotesVar.totalAttr = vars.value.updatedNotesVar.note_Item_ListAttr.length;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uWhPkd3WVkOqclAcokVwkQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // EventNotes = UpdatedNotes
                model.variables.eventNotesVar = vars.value.updatedNotesVar;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OuFdrDnY+kavoJulVdjkSA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LhAEHlHNmEi5ZKJfVB58xw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.Handler_OnNoteDeleted$vars", [{
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
        Controller.prototype._onAfterFetch_GetLocalSurveyStatus$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetLocalSurveyStatus");
            callContext = controller.callContext(callContext);
            var getHostAllocationVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getHostAllocationVar = getHostAllocationVar;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:CQZdH3m8zE+MpmhiL9EKXg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.CQZdH3m8zE+MpmhiL9EKXg:FwQeSuF8oDpRuUdxOYt3oQ", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetLocalSurveyStatus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gjNqm7+HGUKMFtGozomzLg", callContext.id);
                // Is Confirmed?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pUGHypinIUKsWJ67F08qeg", callContext.id) && (model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.confirmed))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OtKjoArvyU2e09ZArlBkcQ", callContext.id);
                    // Execute Action: GetHostAllocation
                    getHostAllocationVar.value = Connect2_OrbitMobile_MUIController.default.getHostAllocation$Action(model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr, callContext);

                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nVPfB2xWx0WmQ_K5Ri1VCg", callContext.id);
                    // HostAllocation = GetHostAllocation.Out_MilestonesScreenList
                    model.variables.hostAllocationVar = getHostAllocationVar.value.out_MilestonesScreenListOut;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eiajnpivFUOFjkistL8eGQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zXFLmStc80a2M9p_lAczSg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:CQZdH3m8zE+MpmhiL9EKXg", callContext.id);
            }

        };
        Controller.prototype._onClick_GenerateQRCode$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_GenerateQRCode");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BufrKgmNy0q6AAdOPAMPoQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.BufrKgmNy0q6AAdOPAMPoQ:hmyDR053hoZB4AqW242UKQ", "Connect2_OrbitMobile_MUI", "OnClick_GenerateQRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_9IHRIr5Bka4Vpk4MhWIxw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SZL7RbYmtkGnIXuS_5MQJg", callContext.id) && model.variables.hasScannedVar)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2rbk5i+heUSQDd5abM10gQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YQPxBtv08kqFvzBpmHOBHA", callContext.id);
                        // Trigger Event: NavigateTo_GenerateQRCode
                        return controller.navigateTo_GenerateQRCode$Action(model.variables.eventDetailsVar.eventStartDateAttr, model.variables.eventDetailsVar.eventEndDateAttr, model.variables.eventDetailsVar.locationAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8ZgVsiz46kmM1BrZ8xfz7w", callContext.id);
                            // Execute Action: OnApplicationEvent_GenerateQRCode
                            model.flush();
                            return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_GenerateQRCode$Action(function() {
                                var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_GenerateQRCodeRec();
                                rec.memberIdAttr = model.variables.in_MemberIdIn;
                                rec.eventIdAttr = model.variables.in_EventIdIn;
                                rec.eventTitleAttr = model.variables.eventDetailsVar.eventNameAttr;
                                rec.eventLocationAttr = model.variables.eventDetailsVar.locationAttr;
                                rec.eventStartDateAttr = model.variables.eventDetailsVar.eventStartDateAttr;
                                rec.eventEndDateAttr = model.variables.eventDetailsVar.eventEndDateAttr;
                                return rec;
                            }(), callContext);
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4PnsPzWJC0u7Xdx8G9HAtw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BufrKgmNy0q6AAdOPAMPoQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BufrKgmNy0q6AAdOPAMPoQ", callContext.id);
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
            var getCacheableUserInfoVar = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dAhKLZSFXEuJiBwiyjqHAA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.dAhKLZSFXEuJiBwiyjqHAA:Q_VJWMSKs4aMaiRHzAuHQQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CLztQutCD0epa2vVbEidOg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4PndtZ_67U2Jh7PjOFfWIg", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_EventDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YcSkaCnsAkmGHqtHZSQSGg", callContext.id) && !(wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SKmKJM_pR0SHDDQ9ptdecA", callContext.id);
                        // IsFetchingData = True
                        model.variables.isFetchingDataVar = true;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lFzGfGzwu0utB6GXT0OVJw", callContext.id);
                        // Refresh Query: Get_EventDetails
                        var result = controller.get_EventDetails$DataActRefresh(callContext);
                        model.flush();
                        return result;
                    }

                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7W+61ZuFQUGA1IuNrFWJ5g", callContext.id);
                    // Execute Action: GetCacheableUserInfo
                    model.flush();
                    return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function(value) {
                        getCacheableUserInfoVar.value = value;
                    }).then(function() {
                        // Set Ids
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Umm5akhS3U6F25D7X1+kww", callContext.id);
                        // UserInformation.UserMemberId = GetCacheableUserInfo.UserInformation.Directory_UserCurrent.MemberID
                        model.variables.userInformationVar.userMemberIdAttr = getCacheableUserInfoVar.value.userInformationOut.directory_UserCurrentAttr.memberIDAttr;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Umm5akhS3U6F25D7X1+kww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // UserInformation.HouseholderId = GetCacheableUserInfo.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.HouseholderId
                        model.variables.userInformationVar.householderIdAttr = getCacheableUserInfoVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.householderIdAttr;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Umm5akhS3U6F25D7X1+kww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                        // UserInformation.SpouseMemberId = GetCacheableUserInfo.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.SpouseId
                        model.variables.userInformationVar.spouseMemberIdAttr = getCacheableUserInfoVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.spouseIdAttr;
                    });
                }).then(function() {
                    // Is Event Host?
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b1BbHC6i7UWoZK8dQm97Bg", callContext.id) && (model.variables.eventDetailsVar.orbitEventTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitEventType.eventHost))) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FYkSaWw2sE2W4y5iagpXIA", callContext.id);
                            // Refresh Query: Get_HostSurveyStatus
                            var result = controller.get_HostSurveyStatus$DataActRefresh(callContext);
                            model.flush();
                            return result;
                        }

                    });
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2B_xPJzWHk60+BFWQHi+wQ", callContext.id);
                    // Refresh Query: Get_HasDocuments
                    var result = controller.get_HasDocuments$DataActRefresh(callContext);
                    model.flush();
                    return result;
                }).then(function() {
                    // Has Milestones
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WByOheUCJ0GU7I8jHPKvRw", callContext.id) && !(model.variables.eventDetailsVar.milestonesAttr.isEmpty))) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G8MfI9dYcku1_8CFTISidg", callContext.id);
                            // Refresh Query: Get_HasQRCode
                            var result = controller.get_HasQRCode$DataActRefresh(callContext);
                            model.flush();
                            return result;
                        }

                    });
                }).then(function() {
                    // Set IsFetchingData to False
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OsnHEiwT00eXhpTUi14j_w", callContext.id);
                    // IsFetchingData = False
                    model.variables.isFetchingDataVar = false;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lu7RhGcC40qOKkMRqIVXuA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dAhKLZSFXEuJiBwiyjqHAA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dAhKLZSFXEuJiBwiyjqHAA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onAfterFetch_Get_HasQRCode$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_Get_HasQRCode");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hlxoL89D_0ers1FUL4zE4Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.hlxoL89D_0ers1FUL4zE4Q:pUwQLK4aA_L2B_af1BuPjg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_HasQRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZZzLpGpl10uxCQ2fyC1c7g", callContext.id);
                // Set Screen Data
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:crKtuIPXTEOYXWHUsmb+cA", callContext.id);
                // HasQRCode = Get_HasQRCode.Response_HasQRCode
                model.variables.hasQRCodeVar = model.variables.get_HasQRCodeDataAct.response_HasQRCodeOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:crKtuIPXTEOYXWHUsmb+cA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // HasScanned = Get_HasQRCode.Response_HasScanned
                model.variables.hasScannedVar = model.variables.get_HasQRCodeDataAct.response_HasScannedOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ww7LiKlKsUefidU03z4_Dw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hlxoL89D_0ers1FUL4zE4Q", callContext.id);
            }

        };
        Controller.prototype._onHandle_HostAllocationView$Action = function(current_MilestoneIdIn, current_MilestoneTypeIdIn, current_MilestoneNameIn, current_HostIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_HostAllocationView");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_HostAllocationView$vars"))());
            vars.value.current_MilestoneIdInLocal = current_MilestoneIdIn;
            vars.value.current_MilestoneTypeIdInLocal = current_MilestoneTypeIdIn;
            vars.value.current_MilestoneNameInLocal = current_MilestoneNameIn;
            vars.value.current_HostIdInLocal = current_HostIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:FGYrOcFZYUapmX2FugXxBw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.FGYrOcFZYUapmX2FugXxBw:rnjmFMNZ0oo1rAUKdkoJSQ", "Connect2_OrbitMobile_MUI", "OnHandle_HostAllocationView", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WkBxcGWcoU2AzHwdQyx3ww", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:36voqB1bh0WonHwBV7Pv0A", callContext.id);
                // Trigger Event: NavigateTo_MilestoneDetail
                return controller.navigateTo_MilestoneDetail$Action(vars.value.current_MilestoneIdInLocal, model.variables.in_EventNameIn, vars.value.current_MilestoneNameInLocal, vars.value.current_MilestoneTypeIdInLocal, vars.value.current_HostIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:95d4iuWnQ06nybXn7tEBGQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FGYrOcFZYUapmX2FugXxBw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FGYrOcFZYUapmX2FugXxBw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_HostAllocationView$vars", [{
            name: "Current_MilestoneId",
            attrName: "current_MilestoneIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Current_MilestoneTypeId",
            attrName: "current_MilestoneTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Current_MilestoneName",
            attrName: "current_MilestoneNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Current_HostId",
            attrName: "current_HostIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onClick_NavigateToHostSurvey$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_NavigateToHostSurvey");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1DsrP5Psrk2mgi2tNis5FQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.1DsrP5Psrk2mgi2tNis5FQ:lzwzNOgJtX8g9BVnwRxLcw", "Connect2_OrbitMobile_MUI", "OnClick_NavigateToHostSurvey", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XCrrrqnx4E+0VcAfc6yLfg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Is edit?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0TBOXJ4dL0aoak7E76JuUQ", callContext.id) && (model.variables.getLocalSurveyStatusByJSONNameAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.sent))) {
                    // Has permissions?
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MOvyGTvfTEqKMJUfS8XLCQ", callContext.id) && !((model.variables.userInformationVar.userMemberIdAttr.equals(model.variables.userInformationVar.householderIdAttr) || model.variables.userInformationVar.spouseMemberIdAttr.equals(model.variables.userInformationVar.householderIdAttr))))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9NAWPlT16Eueh1NyFGkU2w", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("Only Householder is able to edit the survey.", /*Error*/ 3);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ijFl5sO6906QHGg7G4eL_g", callContext.id);
                        return OS.Flow.returnAsync();

                    }

                }

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mvCPFuntj0uTT4W7V8r45Q", callContext.id);
                // Trigger Event: NavigateTo_HostSurvey
                return controller.navigateTo_HostSurvey$Action(model.variables.userInformationVar.householderIdAttr, model.variables.eventDetailsVar.eventStartDateAttr, model.variables.eventDetailsVar.eventEndDateAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WkpUo3lg6E6yV4d1U1iZpg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1DsrP5Psrk2mgi2tNis5FQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1DsrP5Psrk2mgi2tNis5FQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_ClickedMilestone$Action = function(milestoneSummaryIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ClickedMilestone");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_ClickedMilestone$vars"))());
            vars.value.milestoneSummaryInLocal = milestoneSummaryIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:W0HIW+h8ykKnLfEZYCrRlQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.W0HIW+h8ykKnLfEZYCrRlQ:pGXP2FbEKFfdCtm0aXYP_Q", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMilestone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ydV4kG5LN0mNqe8_va5rOg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nFYL9Lk0bUKRCD2KmCpysw", callContext.id) && vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.isTransportMilestoneAttr)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8rlMt3CMi0Gv6rYXEV_ocQ", callContext.id);
                        // Trigger Event: NavigateTo_TransportDetail
                        return controller.navigateTo_TransportDetail$Action(vars.value.milestoneSummaryInLocal.milestoneIdAttr, vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr, vars.value.milestoneSummaryInLocal.titleAttr, vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.transportHeaderClassAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ycTvuJJ_4U67BEhPgSijcw", callContext.id);
                        });
                    } else {
                        return OS.Flow.executeSequence(function() {
                            if (((((((vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealGuest) || (vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHost)) || (vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationGuest)) || (vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHost)) || (vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHelper)) || (vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHelper))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2S+VG34SKkiAMFSemns5zA", callContext.id);
                                // Trigger Event: NavigateTo_MilestoneDetail
                                return controller.navigateTo_MilestoneDetail$Action(vars.value.milestoneSummaryInLocal.milestoneIdAttr, model.variables.in_EventNameIn, vars.value.milestoneSummaryInLocal.titleAttr, vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr, vars.value.milestoneSummaryInLocal.milestoneInfoAttr.hostIdAttr, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ycTvuJJ_4U67BEhPgSijcw", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M2uYyIxyEUmPSK5zZcJlHw", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:W0HIW+h8ykKnLfEZYCrRlQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:W0HIW+h8ykKnLfEZYCrRlQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_ClickedMilestone$vars", [{
            name: "MilestoneSummary",
            attrName: "milestoneSummaryInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.Milestone_ScreenRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.Milestone_ScreenRec
        }]);
        Controller.prototype._onHandle_ViewHelpers$Action = function(preloadMilestoneNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ViewHelpers");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_ViewHelpers$vars"))());
            vars.value.preloadMilestoneNameInLocal = preloadMilestoneNameIn;
            var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hwlMby8jj0iJwMuCUtMIvw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.hwlMby8jj0iJwMuCUtMIvw:MkQ5gyXHS_jPhqKdu1eg+g", "Connect2_OrbitMobile_MUI", "OnHandle_ViewHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5cc4Db9EcEW2KfVF7h0Z4w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q9ypFMMoF0aVv9ebf7HlGg", callContext.id);
                // Execute Action: Cache_UserInfo_Get
                model.flush();
                return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function(value) {
                    cache_UserInfo_GetVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ESEJMuAOpkGXk3bGjP9Wkw", callContext.id);
                    // Trigger Event: NavigateTo_Helpers
                    return controller.navigateTo_Helpers$Action(model.variables.in_EventIdIn, cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.householderIdAttr, model.variables.in_EventNameIn, vars.value.preloadMilestoneNameInLocal, callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Rxlqtso2HEyR2U5ibBJtTg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hwlMby8jj0iJwMuCUtMIvw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hwlMby8jj0iJwMuCUtMIvw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_ViewHelpers$vars", [{
            name: "PreloadMilestoneName",
            attrName: "preloadMilestoneNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onClick_OpenDocuments$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_OpenDocuments");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:e0zChwPwD0WEm6IUYoN6Ag:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.e0zChwPwD0WEm6IUYoN6Ag:kzBCJtt+QmD6oX4IvpLm1w", "Connect2_OrbitMobile_MUI", "OnClick_OpenDocuments", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HjQQjPQoWEmOWLeinHNDWg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZnVWIZ06YUqbCLPSg0daBg", callContext.id);
                // Trigger Event: NavigateTo_ViewDocuments
                return controller.navigateTo_ViewDocuments$Action(model.variables.eventDetailsVar.eventStartDateAttr, model.variables.eventDetailsVar.eventEndDateAttr, model.variables.eventDetailsVar.locationAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F1VBL_PgGUSLb4te4AdLjw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:e0zChwPwD0WEm6IUYoN6Ag", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:e0zChwPwD0WEm6IUYoN6Ag", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClick_ViewEventBooklet$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_ViewEventBooklet");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ksBUildUqk2WF7fi6Wy7MQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.ksBUildUqk2WF7fi6Wy7MQ:hZZEulPlB3BaFxG6yvxynQ", "Connect2_OrbitMobile_MUI", "OnClick_ViewEventBooklet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jT703zKGZky+aPZEgchDKw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FO3kJcMbd0OjdgwNzYB6BA", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnect_UtilsController.default.getHasOrbitEventBooklet$Action(callContext).hasOrbitEventBookletOut;
                        }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NWcqvMY6KE2C_RnvfoeEow", callContext.id);
                        // Trigger Event: NavigateTo_EventBooklet
                        return controller.navigateTo_EventBooklet$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ukKSQZQnt0mJIodYyqFu+w", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WnVdP93Ql0yVyrC3wlMTIw", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("You don\'t have access to this feature. Please contact your event organiser for more information.", /*Info*/ 0);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZBqKhSFJ80mqJmJo2fZL9A", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ksBUildUqk2WF7fi6Wy7MQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ksBUildUqk2WF7fi6Wy7MQ", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.Handler_OnNotesChanged$vars"))());
            vars.value.new_NotesInLocal = new_NotesIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BGG5uCQ8mUmYGKRu7A0sjw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.BGG5uCQ8mUmYGKRu7A0sjw:T5PS8WxwC8PGOpb4e4Ksrw", "Connect2_OrbitMobile_MUI", "Handler_OnNotesChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YECPEckHY0SRDg4hmwQnfA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U4LE5x+WHEu7SKlFOqNcYw", callContext.id);
                // EventNotes = New_Notes
                model.variables.eventNotesVar = vars.value.new_NotesInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MjwbpulUO0mm11m9E8U4jQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BGG5uCQ8mUmYGKRu7A0sjw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.Handler_OnNotesChanged$vars", [{
            name: "New_Notes",
            attrName: "new_NotesInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectLibraryModel.NotesRec();
            },
            complexType: UBTConnectLibraryModel.NotesRec
        }]);
        Controller.prototype._onHandle_ContactHelpdesk$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ContactHelpdesk");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Z9iev+Nt1kGXsdy2h7prNw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.Z9iev+Nt1kGXsdy2h7prNw:beR_hA+0e+03bOTEbyXbkg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pgQEJ4MUuUKanWTsrtcQng", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9oiXzxH_g0e9azkCQQABdg", callContext.id);
                // Trigger Event: NavigateTo_ContactHelpdesk
                return controller.navigateTo_ContactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function() {
                    return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Event$Action(model.variables.in_EventNameIn, model.variables.eventDetailsVar.eventStartDateAttr, model.variables.eventDetailsVar.eventEndDateAttr, model.variables.eventDetailsVar.locationAttr, callContext).out_FormattedSubjectOut;
                }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_EventNameIn, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+4inMsZuNEeIj47fqeuVxA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Z9iev+Nt1kGXsdy2h7prNw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Z9iev+Nt1kGXsdy2h7prNw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onAfterFetch_Get_EventDetails$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_Get_EventDetails");
            callContext = controller.callContext(callContext);
            var listFilter_IsSelectedVar = new OS.DataTypes.VariableHolder();
            var filterMilestonesByDateGroup_BeforeVar = new OS.DataTypes.VariableHolder();
            var filterMilestonesByDateGroupVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listFilter_IsSelectedVar = listFilter_IsSelectedVar;
            varBag.filterMilestonesByDateGroup_BeforeVar = filterMilestonesByDateGroup_BeforeVar;
            varBag.filterMilestonesByDateGroupVar = filterMilestonesByDateGroupVar;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_k+4vzCKBUCBTNBH63GH5g:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions._k+4vzCKBUCBTNBH63GH5g:tb97QR7khQsGutdOFZ3A4Q", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_EventDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6xm_ZxY6uku+SLUW9ai_Ng", callContext.id);
                // Set Screen Data
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ixnjdOwtpE6IRsie1PEF+Q", callContext.id);
                // EventDetails = Get_EventDetails.Response
                model.variables.eventDetailsVar = model.variables.get_EventDetailsDataAct.responseOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ixnjdOwtpE6IRsie1PEF+Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // DateFilters = Get_EventDetails.Response_DateFilters
                model.variables.dateFiltersVar = model.variables.get_EventDetailsDataAct.response_DateFiltersOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ixnjdOwtpE6IRsie1PEF+Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // IsEventUnavailable = Get_EventDetails.IsNullResponse
                model.variables.isEventUnavailableVar = model.variables.get_EventDetailsDataAct.isNullResponseOut;
                // Has Milestones?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LXumjeY4VUiszuc7Z6xDow", callContext.id) && !(model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr.isEmpty))) {
                    // Has Day Milestones?
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mzc2mWCySEWKHlqyGwLpfw", callContext.id) && !(model.variables.get_EventDetailsDataAct.response_DateFiltersOut.dayFilterListAttr.isEmpty))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vb2SBKDZSU6gHH3MD6XV1Q", callContext.id);
                        // Execute Action: ListFilter_IsSelected
                        listFilter_IsSelectedVar.value = OS.SystemActions.listFilter(model.variables.get_EventDetailsDataAct.response_DateFiltersOut.dayFilterListAttr, function(p) {
                            return p.isSelectedAttr;
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qNAio7vQUkes7FxfYw24jA", callContext.id);
                        // Execute Action: FilterMilestonesByDateGroup
                        filterMilestonesByDateGroupVar.value = Connect2_OrbitMobile_MUIController.default.filterMilestonesByDateGroup$Action(listFilter_IsSelectedVar.value.filteredListOut.getCurrent(callContext.iterationContext).dateGroupAttr, Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.dAY, model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr, callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OirMVGY5RUiKDjI00hCM9g", callContext.id);
                        // EventDetails.Milestones = FilterMilestonesByDateGroup.Out_Milestones
                        model.variables.eventDetailsVar.milestonesAttr = filterMilestonesByDateGroupVar.value.out_MilestonesOut;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hl9Ym9OhX0ix+4EPnQQMjQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FAiKbRoC0EWNxpCAifQs2w", callContext.id);
                        // Execute Action: FilterMilestonesByDateGroup_Before
                        filterMilestonesByDateGroup_BeforeVar.value = Connect2_OrbitMobile_MUIController.default.filterMilestonesByDateGroup$Action(OS.BuiltinFunctions.nullDate(), Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE, model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr, callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4aL9cYUPXEy5+nJS7BpbLQ", callContext.id);
                        // EventDetails.Milestones = FilterMilestonesByDateGroup_Before.Out_Milestones
                        model.variables.eventDetailsVar.milestonesAttr = filterMilestonesByDateGroup_BeforeVar.value.out_MilestonesOut;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hl9Ym9OhX0ix+4EPnQQMjQ", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MyFOhMf_Xk+fAagladBUIA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_k+4vzCKBUCBTNBH63GH5g", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_GetHasDocuments$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetHasDocuments");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Q8kkyYzwwES6ahs7bJFpDg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.Q8kkyYzwwES6ahs7bJFpDg:tyogkPo19DBr+laVDceFXA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetHasDocuments", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g2OjgsIPwEKWMxU8vYyDlg", callContext.id);
                // Set Screen Data
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lP85P241VkmfkGdFqpf_NQ", callContext.id);
                // HasDocuments = Get_HasDocuments.Response_HasDocuments
                model.variables.hasDocumentsVar = model.variables.get_HasDocumentsDataAct.response_HasDocumentsOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZpH0VpJYE0ucFlF+IOOKWA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Q8kkyYzwwES6ahs7bJFpDg", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_Get_HostSurveyStatus$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_Get_HostSurveyStatus");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:VPUL3X+QFUu9N5tbAsvxBQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.VPUL3X+QFUu9N5tbAsvxBQ:FBpOrjbVHo7nXxIVvfFlNg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_HostSurveyStatus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o2KD_aCYEUGz3GhLUup9hg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Has data?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VaseOEzw20CER1JDPfAA4A", callContext.id) && ((model.variables.get_HostSurveyStatusDataAct.responseOut.idAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xHd3MWgBIES9Z4HMzgzvSw", callContext.id);
                        // Refresh Query: GetLocalSurveyStatusByJSONName
                        var result = controller.getLocalSurveyStatusByJSONName$AggrRefresh(1, 0, callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:za67gfmZk0ejmescobpyJA", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cgRy3ujRwkaMIuGZq0pHCQ", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VPUL3X+QFUu9N5tbAsvxBQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VPUL3X+QFUu9N5tbAsvxBQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_ClickedDate$Action = function(milestoneTimeTypeIdIn, selectedDateIn, positionIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ClickedDate");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_ClickedDate$vars"))());
            vars.value.milestoneTimeTypeIdInLocal = milestoneTimeTypeIdIn;
            vars.value.selectedDateInLocal = selectedDateIn;
            vars.value.positionInLocal = positionIn;
            var filterMilestonesByDateGroupVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.filterMilestonesByDateGroupVar = filterMilestonesByDateGroupVar;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:S2Ap71czfkuHaD5noJtanw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg/ClientActions.S2Ap71czfkuHaD5noJtanw:bQKwX7uFHDz4Sv75sUyjnQ", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedDate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L75qf5jqvEeNbgQ9LmQjpQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XxXJtKo_pkak2S4LOa1Fbg", callContext.id);
                // Execute Action: FilterMilestonesByDateGroup
                filterMilestonesByDateGroupVar.value = Connect2_OrbitMobile_MUIController.default.filterMilestonesByDateGroup$Action(vars.value.selectedDateInLocal, vars.value.milestoneTimeTypeIdInLocal, model.variables.get_EventDetailsDataAct.responseOut.milestonesAttr, callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BB9HLaqFwUac8GqtspA4qQ", callContext.id);
                // EventDetails.Milestones = FilterMilestonesByDateGroup.Out_Milestones
                model.variables.eventDetailsVar.milestonesAttr = filterMilestonesByDateGroupVar.value.out_MilestonesOut;
                // TimeType
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bvLoNVMWzUOczuYeC9EpaA", callContext.id) && ((vars.value.milestoneTimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.bEFORE) || (vars.value.milestoneTimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.aFTER)))) {
                    // Foreach DateFilters.DayFilterList
                    callContext.iterationContext.registerIterationStart(model.variables.dateFiltersVar.dayFilterListAttr);
                    try {
                        var dayFilterListIterator = callContext.iterationContext.getIterator(model.variables.dateFiltersVar.dayFilterListAttr);
                        var dayFilterListIndex = 0;
                        while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_hp4GHoPcUC5YYcpeSCZrA", callContext.id) && (dayFilterListIndex < model.variables.dateFiltersVar.dayFilterListAttr.length))) {
                            dayFilterListIterator.currentRowNumber = dayFilterListIndex;
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mGTzPIHPrkSvuiatlN7_eQ", callContext.id);
                            // DateFilters.DayFilterList.Current.IsSelected = False
                            model.variables.dateFiltersVar.dayFilterListAttr.getItem(dayFilterListIndex.valueOf()).isSelectedAttr = false;
                            dayFilterListIndex++;
                        }

                    } finally {
                        callContext.iterationContext.registerIterationEnd(model.variables.dateFiltersVar.dayFilterListAttr);
                    }

                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5i_aUIzXqUu1EkHb4lNoHQ", callContext.id);
                } else {
                    if ((vars.value.milestoneTimeTypeIdInLocal === Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.dAY)) {
                        // Foreach DateFilters.DayFilterList
                        callContext.iterationContext.registerIterationStart(model.variables.dateFiltersVar.dayFilterListAttr);
                        try {
                            var dayFilterListIterator = callContext.iterationContext.getIterator(model.variables.dateFiltersVar.dayFilterListAttr);
                            var dayFilterListIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PqjnKuyx10KzfqjaJrwSBw", callContext.id) && (dayFilterListIndex < model.variables.dateFiltersVar.dayFilterListAttr.length))) {
                                dayFilterListIterator.currentRowNumber = dayFilterListIndex;
                                // Set Current Selection
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lWQOmGZ+7E6YIuCTVrFiBw", callContext.id);
                                // DateFilters.DayFilterList.Current.IsSelected = DateFilters.DayFilterList.CurrentRowNumber = Position
                                model.variables.dateFiltersVar.dayFilterListAttr.getItem(dayFilterListIndex.valueOf()).isSelectedAttr = (model.variables.dateFiltersVar.dayFilterListAttr.getCurrentRowNumber(callContext.iterationContext) === vars.value.positionInLocal);
                                dayFilterListIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(model.variables.dateFiltersVar.dayFilterListAttr);
                        }

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5i_aUIzXqUu1EkHb4lNoHQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:acZClCLnSk+jw_eJMr3gPQ", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:S2Ap71czfkuHaD5noJtanw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.OnHandle_ClickedDate$vars", [{
            name: "MilestoneTimeTypeId",
            attrName: "milestoneTimeTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "SelectedDate",
            attrName: "selectedDateInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Date,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }, {
            name: "Position",
            attrName: "positionInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

        Controller.prototype.onAfterFetch_FetchEventNotes$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_FetchEventNotes$Action, callContext);

        };
        Controller.prototype.handler_OnNoteDeleted$Action = function(noteIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnNoteDeleted$Action, callContext, noteIdIn);

        };
        Controller.prototype.onAfterFetch_GetLocalSurveyStatus$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalSurveyStatus$Action, callContext);

        };
        Controller.prototype.onClick_GenerateQRCode$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_GenerateQRCode$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onAfterFetch_Get_HasQRCode$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_Get_HasQRCode$Action, callContext);

        };
        Controller.prototype.onHandle_HostAllocationView$Action = function(current_MilestoneIdIn, current_MilestoneTypeIdIn, current_MilestoneNameIn, current_HostIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_HostAllocationView$Action, callContext, current_MilestoneIdIn, current_MilestoneTypeIdIn, current_MilestoneNameIn, current_HostIdIn);

        };
        Controller.prototype.onClick_NavigateToHostSurvey$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_NavigateToHostSurvey$Action, callContext);

        };
        Controller.prototype.onHandle_ClickedMilestone$Action = function(milestoneSummaryIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ClickedMilestone$Action, callContext, milestoneSummaryIn);

        };
        Controller.prototype.onHandle_ViewHelpers$Action = function(preloadMilestoneNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ViewHelpers$Action, callContext, preloadMilestoneNameIn);

        };
        Controller.prototype.onClick_OpenDocuments$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_OpenDocuments$Action, callContext);

        };
        Controller.prototype.onClick_ViewEventBooklet$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_ViewEventBooklet$Action, callContext);

        };
        Controller.prototype.handler_OnNotesChanged$Action = function(new_NotesIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnNotesChanged$Action, callContext, new_NotesIn);

        };
        Controller.prototype.onHandle_ContactHelpdesk$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

        };
        Controller.prototype.onAfterFetch_Get_EventDetails$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_Get_EventDetails$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetHasDocuments$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetHasDocuments$Action, callContext);

        };
        Controller.prototype.onAfterFetch_Get_HostSurveyStatus$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_Get_HostSurveyStatus$Action, callContext);

        };
        Controller.prototype.onHandle_ClickedDate$Action = function(milestoneTimeTypeIdIn, selectedDateIn, positionIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ClickedDate$Action, callContext, milestoneTimeTypeIdIn, selectedDateIn, positionIn);

        };
        Controller.prototype.navigateTo_GenerateQRCode$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_HostSurvey$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_ContactHelpdesk$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_EventBooklet$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_MilestoneDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_TransportDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_Helpers$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_ViewDocuments$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:QOPhlst_AkeQOZd_maLNhg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.QOPhlst_AkeQOZd_maLNhg:TS3Aw544b5CfGaugEDxMKw", "Connect2_OrbitMobile_MUI", "ScreenBlock_EventDetail", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:QOPhlst_AkeQOZd_maLNhg", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_EventDetail On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_EventDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "nLrg1X6EfESvd3bUpB6IFw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updatedNotesVar;
            }
        },
        "SckA8nK7xEi3tBWCzWJ3sQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "OtKjoArvyU2e09ZArlBkcQ": {
            getter: function(varBag, idService) {
                return varBag.getHostAllocationVar.value;
            }
        },
        "7W+61ZuFQUGA1IuNrFWJ5g": {
            getter: function(varBag, idService) {
                return varBag.getCacheableUserInfoVar.value;
            }
        },
        "4PndtZ_67U2Jh7PjOFfWIg": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "_EXsOVp+wkiF8Xf_Cd3U1A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.current_MilestoneIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "h+xWmdJr0EaYdb+zwe_trg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.current_MilestoneTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "eiKvEbg5wEaF4OcsRwaERA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.current_MilestoneNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "A6GjNcZXBUO7SPx0RsrbyQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.current_HostIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "2GEMkoKQHEqXw0nGGaKRbw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneSummaryInLocal;
            }
        },
        "KZNJ4DfaIUqEkaAbyhaJKw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.preloadMilestoneNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "q9ypFMMoF0aVv9ebf7HlGg": {
            getter: function(varBag, idService) {
                return varBag.cache_UserInfo_GetVar.value;
            }
        },
        "qJcH7ctfnEypvn7B7plTNQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.new_NotesInLocal;
            }
        },
        "Vb2SBKDZSU6gHH3MD6XV1Q": {
            getter: function(varBag, idService) {
                return varBag.listFilter_IsSelectedVar.value;
            }
        },
        "FAiKbRoC0EWNxpCAifQs2w": {
            getter: function(varBag, idService) {
                return varBag.filterMilestonesByDateGroup_BeforeVar.value;
            }
        },
        "qNAio7vQUkes7FxfYw24jA": {
            getter: function(varBag, idService) {
                return varBag.filterMilestonesByDateGroupVar.value;
            }
        },
        "YgtpOYZGZkGMcfq73mMcYQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneTimeTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "OfWdn74j3UWaWUpv2KyNBw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedDateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "UQ9ESgX0pEaOl1ZdO4fYTA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.positionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "XxXJtKo_pkak2S4LOa1Fbg": {
            getter: function(varBag, idService) {
                return varBag.filterMilestonesByDateGroupVar.value;
            }
        },
        "FQUJ6zZr3UCTo31gOW50zw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventDetailsVar;
            }
        },
        "P2GMS7JTRUOH3vGZou2ggQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.dateFiltersVar;
            }
        },
        "J3T2TpmOgUyl0XIzmNmIwA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingDataVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "q+SS0nhUWUeut_BWz_7pqw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hostAllocationVar;
            }
        },
        "bEwFgz3C3UOev8ftNUGwjg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasQRCodeVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8O3B7ku_b0SlDENFTHVH2Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasScannedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZHfHL5JTMki+kvoIQ0COvA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasDocumentsVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "oIiYAyyFjUGquwa9z2+QNQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEventUnavailableVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "GpXkIREE20+PHuEw5MiS2A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userInformationVar;
            }
        },
        "hF2WFojxgE+suoBw5EXg4w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventNotesVar;
            }
        },
        "+ylaayBD2kaC4mYkVeXYRA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MemberIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "0J22KlHl4UuRNB0swuN1PA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "CblmxwOmakewNqrGK2BSIw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "DruCsdFgD02DkOEHinZeGQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_FromNotificationIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9Mlsf22Laku3rrLrKqSDUg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_EventDetailsDataAct;
            }
        },
        "qgk7rSRux0iRwby4rUttEA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_HostSurveyStatusDataAct;
            }
        },
        "8YcStQVbG0eGpTwHolXinA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_HasQRCodeDataAct;
            }
        },
        "DIWy0SAHKkGlZfzLbHtqHw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fetchEventNotesDataAct;
            }
        },
        "i0T51HZ3K02DCDS1We0Kog": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_HasDocumentsDataAct;
            }
        },
        "3VtiecbyK0215QfPdPYlig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getLocalSurveyStatusByJSONNameAggr;
            }
        },
        "08g9UT3J30OlA1HHueDJiA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "uXcRegRoX0qpnk2BtdfnPg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "WC_uTU486ES+mhuORBhxnQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "r3hlxmu+k06y470osvDH5g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "W9y6EMlRvkee19o2kVAhHQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "Zllh65Pq2UC925iK6Xh_AQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasFetchedData"));
                })(varBag.model, idService);
            }
        },
        "+mKB8G5ju0Oc2Pm0BLJpeg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasMilestoneData"));
                })(varBag.model, idService);
            }
        },
        "FP1+ii7pvEWPpFjs+23zPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "m5AMML1JlkGfvgDy83ymqg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "1mm0LMkozkmehwz2amEBBw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsNotFetching"));
                })(varBag.model, idService);
            }
        },
        "xbhO__ipv0iiGhyJBnhpTw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_EventDataIsAvailable"));
                })(varBag.model, idService);
            }
        },
        "m2WoqzDNF0eDB5WAEer6pw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsHostOrAdmin"));
                })(varBag.model, idService);
            }
        },
        "dI1MJOMlP0uOSMIBFBiCWw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_EventHost"));
                })(varBag.model, idService);
            }
        },
        "1p7L_yFvwEmq8M8Bhn018g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_FoundStatus"));
                })(varBag.model, idService);
            }
        },
        "CPimQcr7n06BYzCYVRFwPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasOrbitHostSurvey"));
                })(varBag.model, idService);
            }
        },
        "TekuguIJEkW8CgLiZktVEw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_SurveyIsAvailable"));
                })(varBag.model, idService);
            }
        },
        "cUKVg1kTAkSgDddWf17TdA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasMilestones"));
                })(varBag.model, idService);
            }
        },
        "QdhWW1dhb06j4dBX7pHR5A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_SurveyCompleted"));
                })(varBag.model, idService);
            }
        },
        "dKjUoInKwUGJTVR2RkjuOw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "wanYpjaN+Ea8u54ZkxjsmQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "IiA800INx0uZkwMlm1ZXCg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "jz+0YIyOOkyLld88enVt5A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasDataFetched"));
                })(varBag.model, idService);
            }
        },
        "coRsnbxq90eBk43ka1WSeQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasHelpersAndSurveyCompleted"));
                })(varBag.model, idService);
            }
        },
        "Fe6ou5nACUSX73TPjFOtCw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "LajjMxoOCkaNRtOmwuMbAA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "LLCIrMF0pE2tZgZqBvHVYQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "GwVhWyXvoU2vZ7sBdM3BKA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasFetchedData"));
                })(varBag.model, idService);
            }
        },
        "7mdZlwqNQ0O0C+AkiMslXQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "5t+GJ27dsUi_z1h1cU5LYQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasFetchedAndHasMilestones"));
                })(varBag.model, idService);
            }
        },
        "BQLNSu7A+kStLuVZGHcHkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "AU0tCi_7G0m3p0YfmAZqsg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});