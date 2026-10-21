define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "OutSystemsUI_2_23.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.controller$GetHelperRoleByJSON_Name", "Connect2_OrbitMobile_IS.model$EventBooklet_EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$PopupFiltersRec", "Connect2_OrbitMobile_MUI.model$CurrentFiltersRec", "Connect2_OrbitMobile_MUI.model$SelectedFiltersRec", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByLocalityList", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByRoleList", "Connect2_OrbitMobile_IS.model$EventBookletMembersRec", "Connect2_OrbitMobile_MUI.model$EventBookletMembersList", "Connect2_OrbitMobile_MUI.model$LongIntegerLongIntegerBooleanBooleanBooleanBooleanIntegerIntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_OrbitMobile_MUI.model$DropdownOptionList", "Connect2_OrbitMobile_IS.model$EventBooklet_CountryItemRec", "Connect2_OrbitMobile_MUI.model$EventBooklet_CountryItemList", "Connect2_OrbitMobile_MUI.controller$FocusOnInput", "Connect2_OrbitMobile_MUI.controller$BlurInput", "Connect2_OrbitMobile_MUI.controller$SetBookletMaxRows", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "Connect2_OrbitMobile_MUI.controller$GroupMembersByCountry", "Connect2_OrbitMobile_MUI.controller$CheckSelectedDates", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecordList", "Connect2_OrbitMobile_MUI.controller$GroupHelpersByRole", "Connect2_OrbitMobile_IS.model$GetEventBookletFiltersResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, OutSystemsUI_2_23Model, NavigationHandlerController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIEntities) {
var OS = OutSystems.Internal;
var GetLocalHelperRolesAggrRec = (function (_super) {
__extends(GetLocalHelperRolesAggrRec, _super);
function GetLocalHelperRolesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalHelperRolesAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecordList;
GetLocalHelperRolesAggrRec.init();
return GetLocalHelperRolesAggrRec;
})(OS.Model.AggregateRecord);

var Get_EventBookletHelpersDataActRec = (function (_super) {
__extends(Get_EventBookletHelpersDataActRec, _super);
function Get_EventBookletHelpersDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_EventBookletHelpersDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventBookletMembersList());
}, true, Connect2_OrbitMobile_MUIModel.EventBookletMembersList)
].concat(_super.attributesToDeclare.call(this));
};
Get_EventBookletHelpersDataActRec.fromStructure = function (str) {
return new Get_EventBookletHelpersDataActRec(new Get_EventBookletHelpersDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_EventBookletHelpersDataActRec.init();
return Get_EventBookletHelpersDataActRec;
})(OS.Model.DataSourceRecord);
var Get_EventBookletFiltersDataActRec = (function (_super) {
__extends(Get_EventBookletFiltersDataActRec, _super);
function Get_EventBookletFiltersDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_EventBookletFiltersDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetEventBookletFiltersResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetEventBookletFiltersResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
Get_EventBookletFiltersDataActRec.fromStructure = function (str) {
return new Get_EventBookletFiltersDataActRec(new Get_EventBookletFiltersDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_EventBookletFiltersDataActRec.init();
return Get_EventBookletFiltersDataActRec;
})(OS.Model.DataSourceRecord);
var Get_EventBookletGuestsDataActRec = (function (_super) {
__extends(Get_EventBookletGuestsDataActRec, _super);
function Get_EventBookletGuestsDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_EventBookletGuestsDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventBookletMembersList());
}, true, Connect2_OrbitMobile_MUIModel.EventBookletMembersList)
].concat(_super.attributesToDeclare.call(this));
};
Get_EventBookletGuestsDataActRec.fromStructure = function (str) {
return new Get_EventBookletGuestsDataActRec(new Get_EventBookletGuestsDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_EventBookletGuestsDataActRec.init();
return Get_EventBookletGuestsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("EventInfo", "eventInfoVar", "EventInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventBooklet_EventInfoRec());
}, false, Connect2_OrbitMobile_ISModel.EventBooklet_EventInfoRec), 
this.attr("AvailableFilters", "availableFiltersVar", "AvailableFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.PopupFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.PopupFiltersRec), 
this.attr("CurrentFilters", "currentFiltersVar", "CurrentFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.CurrentFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.CurrentFiltersRec), 
this.attr("SelectedFilters", "selectedFiltersVar", "SelectedFilters", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.SelectedFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.SelectedFiltersRec), 
this.attr("Guests", "guestsVar", "Guests", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList());
}, false, Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList), 
this.attr("Guests_InvitedList", "guests_InvitedListVar", "Guests_InvitedList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList());
}, false, Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList), 
this.attr("Guests_HostingList", "guests_HostingListVar", "Guests_HostingList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList());
}, false, Connect2_OrbitMobile_MUIModel.BookletMembers_ByLocalityList), 
this.attr("Helpers", "helpersVar", "Helpers", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.BookletMembers_ByRoleList());
}, false, Connect2_OrbitMobile_MUIModel.BookletMembers_ByRoleList), 
this.attr("IsSearchMode", "isSearchModeVar", "IsSearchMode", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("FiltersPopUp", "filtersPopUpVar", "FiltersPopUp", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("LocalHelperRoles", "localHelperRolesVar", "LocalHelperRoles", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHelperRoleList), 
this.attr("IsGuestView", "isGuestViewVar", "IsGuestView", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("HasFiltersApplied", "hasFiltersAppliedVar", "HasFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("LastFetchedGuests", "lastFetchedGuestsVar", "LastFetchedGuests", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventBookletMembersList());
}, false, Connect2_OrbitMobile_MUIModel.EventBookletMembersList), 
this.attr("LastFetchedHelpers", "lastFetchedHelpersVar", "LastFetchedHelpers", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventBookletMembersList());
}, false, Connect2_OrbitMobile_MUIModel.EventBookletMembersList), 
this.attr("PaginationSettings", "paginationSettingsVar", "PaginationSettings", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LongIntegerLongIntegerBooleanBooleanBooleanBooleanIntegerIntegerIntegerIntegerRecord());
}, false, Connect2_OrbitMobile_MUIModel.LongIntegerLongIntegerBooleanBooleanBooleanBooleanIntegerIntegerIntegerIntegerRecord), 
this.attr("LastFilters_Guest", "lastFilters_GuestVar", "LastFilters_Guest", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.SelectedFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.SelectedFiltersRec), 
this.attr("LastFilters_Helpers", "lastFilters_HelpersVar", "LastFilters_Helpers", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.SelectedFiltersRec());
}, false, Connect2_OrbitMobile_MUIModel.SelectedFiltersRec), 
this.attr("LastFetched_Guests_InvitedLocality", "lastFetched_Guests_InvitedLocalityVar", "LastFetched_Guests_InvitedLocality", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventBookletMembersList());
}, false, Connect2_OrbitMobile_MUIModel.EventBookletMembersList), 
this.attr("LastFetched_Guests_HostLocality", "lastFetched_Guests_HostLocalityVar", "LastFetched_Guests_HostLocality", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventBookletMembersList());
}, false, Connect2_OrbitMobile_MUIModel.EventBookletMembersList), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetLocalHelperRoles", "getLocalHelperRolesAggr", "getLocalHelperRolesAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalHelperRolesAggrRec());
}, true, GetLocalHelperRolesAggrRec), 
this.attr("Get_EventBookletHelpers", "get_EventBookletHelpersDataAct", "get_EventBookletHelpersDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_EventBookletHelpersDataActRec());
}, true, Get_EventBookletHelpersDataActRec), 
this.attr("Get_EventBookletFilters", "get_EventBookletFiltersDataAct", "get_EventBookletFiltersDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_EventBookletFiltersDataActRec());
}, true, Get_EventBookletFiltersDataActRec), 
this.attr("Get_EventBookletGuests", "get_EventBookletGuestsDataAct", "get_EventBookletGuestsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_EventBookletGuestsDataActRec());
}, true, Get_EventBookletGuestsDataActRec)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {
Input_SearchTerm: OS.Model.ValidationWidgetRecord
};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_EventId" in inputs) {
this.variables.in_EventIdIn = inputs.In_EventId;
if("_in_EventIdInDataFetchStatus" in inputs) {
this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
}

}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = inputs.In_EventName;
if("_in_EventNameInDataFetchStatus" in inputs) {
this.variables._in_EventNameInDataFetchStatus = inputs._in_EventNameInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "OutSystemsUI_2_23.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.entities", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DoubleAction.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventBooklet_ListHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoResults.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.EventBooklet_MembersItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.controller$GetHelperRoleByJSON_Name", "Connect2_OrbitMobile_IS.model$EventBooklet_EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$PopupFiltersRec", "Connect2_OrbitMobile_MUI.model$CurrentFiltersRec", "Connect2_OrbitMobile_MUI.model$SelectedFiltersRec", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByLocalityList", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByRoleList", "Connect2_OrbitMobile_IS.model$EventBookletMembersRec", "Connect2_OrbitMobile_MUI.model$EventBookletMembersList", "Connect2_OrbitMobile_MUI.model$LongIntegerLongIntegerBooleanBooleanBooleanBooleanIntegerIntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_OrbitMobile_MUI.model$DropdownOptionList", "Connect2_OrbitMobile_IS.model$EventBooklet_CountryItemRec", "Connect2_OrbitMobile_MUI.model$EventBooklet_CountryItemList", "Connect2_OrbitMobile_MUI.controller$FocusOnInput", "Connect2_OrbitMobile_MUI.controller$BlurInput", "Connect2_OrbitMobile_MUI.controller$SetBookletMaxRows", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "Connect2_OrbitMobile_MUI.controller$GroupMembersByCountry", "Connect2_OrbitMobile_MUI.controller$CheckSelectedDates", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecordList", "Connect2_OrbitMobile_MUI.controller$GroupHelpersByRole", "Connect2_OrbitMobile_IS.model$GetEventBookletFiltersResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, OutSystemsUI_2_23Model, NavigationHandlerController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIEntities, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DoubleAction_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_ListHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoResults_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_MembersItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
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
        View.displayName = "Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DoubleAction_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_ListHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoResults_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_MembersItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
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
CustomClass: "orbit-detail orbit-header-center",
ExtendedClasses: "orbit-booklet"
},
events: {
_handleError: function (ex) {
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
menu: new PlaceholderContent(function () {
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
headerLeft: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
inputs: {
MenuAction: Connect2_OrbitMobile_MUIModel.staticEntities.menuAction.auto
},
events: {
_handleError: function (ex) {
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
title: new PlaceholderContent(function () {
return [$if(model.variables.isSearchModeVar, false, this, function () {
return [React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
inputs: {
AlignIconRight: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-search",
visible: (model.variables.currentFiltersVar.searchTermAttr === ""),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
inputs: {
AlignIconRight: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Icon onclick");
controller.onClick_ClearSearch$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "rocket",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-cross",
visible: ((model.variables.currentFiltersVar.searchTermAttr) !== ("")),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Input_SearchTerm onkeyup");
return controller.onKeyUp_SearchTerm$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Search*/ 8,
mandatory: false,
maxLength: 50,
prompt: "Search guest or host name",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.currentFiltersVar.searchTermAttr, function (value) {
model.variables.currentFiltersVar.searchTermAttr = value;
}),
_idProps: {
service: idService,
name: "Input_SearchTerm"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.currentFiltersVar.searchTermAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.currentFiltersVar.searchTermAttr)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s bold text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Event Guest List"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-base text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("_Gz8mwfve0WJQSwdwo4VdQ.Value"), function () {
return ((((model.variables.eventInfoVar.eventNameAttr) !== (""))) ? (model.variables.eventInfoVar.eventNameAttr) : (model.variables.in_EventNameIn));
}, function () {
return model.variables.eventInfoVar.eventNameAttr;
}, function () {
return model.variables.in_EventNameIn;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
}))];
})];
}),
headerRight: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("+7JB+XpXZkioA02_QGx6uw.Style"), function () {
return ("flex-center-all" + (((model.variables.getLocalHelperRolesAggr.isDataFetchedAttr && model.variables.get_EventBookletFiltersDataAct.isDataFetchedAttr)) ? ("") : (" opacity-0-50")));
}, function () {
return model.variables.getLocalHelperRolesAggr.isDataFetchedAttr;
}, function () {
return model.variables.get_EventBookletFiltersDataAct.isDataFetchedAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Icon onclick");
controller.toggleSearchMode$Action(false, true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-search",
visible: !(model.variables.isSearchModeVar),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Icon onclick");
controller.toggleFiltersPopUp$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-filter",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
headerContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-double-button-cont",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-double-button-border-cont",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Container onclick");
return controller.onClick_ViewSwap$Action(true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: model.getCachedValue(idService.getId("h_7_23mK+UOCMQ2cKR6Jng.Style"), function () {
return ("orbit-double-button-btn" + ((model.variables.isGuestViewVar) ? (" orbit-double-button-btn-active") : ("")));
}, function () {
return model.variables.isGuestViewVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Guests"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Container onclick");
return controller.onClick_ViewSwap$Action(false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: model.getCachedValue(idService.getId("s+GAPScqokCw+2cJgxI4kg.Style"), function () {
return ("orbit-double-button-btn" + ((model.variables.isGuestViewVar) ? ("") : (" orbit-double-button-btn-active")));
}, function () {
return model.variables.isGuestViewVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Helpers"))), $if((model.variables.hasFiltersAppliedVar && ((model.variables.isGuestViewVar) ? ((!(model.variables.guestsVar.isEmpty) || model.variables.paginationSettingsVar.guest_NoResultsAttr)) : ((!(model.variables.helpersVar.isEmpty) || model.variables.paginationSettingsVar.helper_NoResultsAttr)))), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DoubleAction_mvc_view, {
inputs: {
ExtendedClass: "orbit-border-background"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "18",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Expression onclick");
controller.onClick_SelectedFilters$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "color-orbit-primary-7 bold font-size-s",
value: "Filters Applied",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Expression onclick");
return controller.clearAllFilters$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "font-size-s text-neutral-10",
value: "Clear All",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}, function () {
return [];
})];
}),
content: new PlaceholderContent(function () {
return [$if(model.variables.isGuestViewVar, false, this, function () {
return [$if((model.variables.isFetchingDataVar && model.variables.paginationSettingsVar.guest_IsNewSearchAttr), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-list-header-sticky-cont",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_ListHeader_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Guest Name",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventBooklet
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "24",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if(!(model.variables.paginationSettingsVar.guest_IsNewSearchAttr), false, this, function () {
return [$if(model.variables.paginationSettingsVar.guest_NoResultsAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoResults_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "25",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("DxAsBNVKQUK4aMf_3XVCJQ.Value"), function () {
return ((model.variables.hasFiltersAppliedVar) ? (((((model.variables.lastFilters_GuestVar.searchTermAttr) !== (""))) ? (((("No results for " + "\'") + model.variables.lastFilters_GuestVar.searchTermAttr) + "\'.")) : ("No results."))) : ("No results."));
}, function () {
return model.variables.hasFiltersAppliedVar;
}, function () {
return model.variables.lastFilters_GuestVar.searchTermAttr;
}),
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Message: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("d7b85wp5sk+MM50frohK5A.Value"), function () {
return ((model.variables.hasFiltersAppliedVar) ? ("Make sure that all words are spelled correctly, or refine your search terms.") : ("There are no guests allocated to this event. Please check again later or contact the Orbit Helpdesk if you have any questions."));
}, function () {
return model.variables.hasFiltersAppliedVar;
}),
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.lastFilters_GuestVar.searchTermAttr), asPrimitiveValue(model.variables.hasFiltersAppliedVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-list-header-sticky-cont",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_ListHeader_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "29",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Guest Name",
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-s margin-bottom-s padding-left-base font-size-xs font-semi-bold",
visible: true,
_idProps: {
service: idService,
name: "InviteList"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Invite List"), React.createElement(OSWidgets.List, {
animateItems: true,
extendedEvents: {
"componentdidmount": function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/List_Guests_InvitedLocality componentdidmount");
return controller.onHandle_ComponentDidMount$Action(idService.getId("List_Guests_InvitedLocality"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
"disable-virtualization": "True",
"infinite-scroll-threshold": OS.BuiltinFunctions.longIntegerToText(model.variables.paginationSettingsVar.guest_ScrollThresholdAttr)
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
onScrollEnding: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/List_Guests_InvitedLocality OnScrollEnding");
return controller.onScrollEnding_Guests$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
source: model.variables.guests_InvitedListVar,
style: "list list-group orbit-booklet-main-list",
tag: "div",
_idProps: {
service: idService,
name: "List_Guests_InvitedLocality"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-list-cont",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).membersAttr), asPrimitiveValue(model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).countryAttr), asPrimitiveValue(model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).localityAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-location-pill-cont",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IsSmallIcon: true,
In_ExtendedClass: "orbit-booklet-location-pill",
In_PillText: model.getCachedValue(idService.getId("_WHMXYJLI0uvgtlwHpPtsw.In_PillText"), function () {
return ((((model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).localityAttr) !== (""))) ? ((model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).localityAttr + ((((model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).countryAttr) !== (""))) ? ((", " + model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).countryAttr)) : ("")))) : (model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).countryAttr));
}, function () {
return model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).localityAttr;
}, function () {
return model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).countryAttr;
}),
In_IconClass: "orbit-icon-location text-neutral-7"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "35",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).membersAttr,
style: "list list-group orbit-booklet-list-members",
tag: "div",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_MembersItem_mvc_view, {
inputs: {
MemberItem: model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_Host$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventBooklet_MembersItem Click_Host");
return controller.onHandle_ClickedMember$Action(model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext).hostHouseholderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
click_Member$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventBooklet_MembersItem Click_Member");
return controller.onHandle_ClickedMember$Action(model.variables.guests_InvitedListVar.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext).householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "37",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: []
}))];
}, callContext, idService, "2")
},
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "margin-top-s margin-bottom-s padding-left-base font-size-xs font-semi-bold",
visible: !(model.variables.guests_HostingListVar.isEmpty),
_idProps: {
service: idService,
name: "HostList"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Host Localities"), React.createElement(OSWidgets.List, {
animateItems: true,
extendedEvents: {
"componentdidmount": function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/List_Guests_HostingLocality componentdidmount");
return controller.onHandle_ComponentDidMount$Action(idService.getId("List_Guests_HostingLocality"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
"disable-virtualization": "True",
"infinite-scroll-threshold": OS.BuiltinFunctions.longIntegerToText(model.variables.paginationSettingsVar.guest_ScrollThresholdAttr)
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
onScrollEnding: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/List_Guests_HostingLocality OnScrollEnding");
return controller.onScrollEnding_Guests$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
source: model.variables.guests_HostingListVar,
style: "list list-group orbit-booklet-main-list",
tag: "div",
_idProps: {
service: idService,
name: "List_Guests_HostingLocality"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-list-cont",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).membersAttr), asPrimitiveValue(model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).countryAttr), asPrimitiveValue(model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).localityAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-location-pill-cont",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_PillText: model.getCachedValue(idService.getId("5bw_TRtv9EOmidTBDocuKA.In_PillText"), function () {
return ((((model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).localityAttr) !== (""))) ? ((model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).localityAttr + ((((model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).countryAttr) !== (""))) ? ((", " + model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).countryAttr)) : ("")))) : (model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).countryAttr));
}, function () {
return model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).localityAttr;
}, function () {
return model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).countryAttr;
}),
In_IsSmallIcon: true,
In_ExtendedClass: "orbit-booklet-location-pill",
In_IconClass: "orbit-icon-location text-neutral-7"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "42",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).membersAttr,
style: "list list-group orbit-booklet-list-members",
tag: "div",
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_MembersItem_mvc_view, {
inputs: {
MemberItem: model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_Member$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventBooklet_MembersItem Click_Member");
return controller.onHandle_ClickedMember$Action(model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext).householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
click_Host$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventBooklet_MembersItem Click_Host");
return controller.onHandle_ClickedMember$Action(model.variables.guests_HostingListVar.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext).hostHouseholderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "44",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "4")
},
_dependencies: []
}))];
}, callContext, idService, "4")
},
_dependencies: []
})];
}), $if(model.variables.isFetchingDataVar, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventBooklet
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "45",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}, function () {
return [];
})];
})];
}, function () {
return [];
}), $if(!(model.variables.isGuestViewVar), false, this, function () {
return [$if((model.variables.isFetchingDataVar && model.variables.paginationSettingsVar.helper_IsNewSearchAttr), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-list-header-sticky-cont",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_ListHeader_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "47",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Helper",
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventBooklet
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "49",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if(!(model.variables.paginationSettingsVar.helper_IsNewSearchAttr), false, this, function () {
return [$if(model.variables.paginationSettingsVar.helper_NoResultsAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoResults_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "50",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("D3pV9pumJEiLuqwKIO1kGA.Value"), function () {
return ((model.variables.hasFiltersAppliedVar) ? (((((model.variables.lastFilters_HelpersVar.searchTermAttr) !== (""))) ? (((("No results for " + "\'") + model.variables.lastFilters_HelpersVar.searchTermAttr) + "\'.")) : ("No results."))) : ("No results."));
}, function () {
return model.variables.hasFiltersAppliedVar;
}, function () {
return model.variables.lastFilters_HelpersVar.searchTermAttr;
}),
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Message: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("II0mPKxJk0GdcQRgJJyHWg.Value"), function () {
return ((model.variables.hasFiltersAppliedVar) ? ("Make sure that all words are spelled correctly, or refine your search terms.") : ("There are no helpers allocated to this event. Please check again later or contact the Orbit Helpdesk if you have any questions."));
}, function () {
return model.variables.hasFiltersAppliedVar;
}),
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.lastFilters_HelpersVar.searchTermAttr), asPrimitiveValue(model.variables.hasFiltersAppliedVar)]
})];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedEvents: {
"componentdidmount": function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/List_Helpers componentdidmount");
return controller.onHandle_ComponentDidMount$Action(idService.getId("List_Helpers"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
"disable-virtualization": "True",
"infinite-scroll-threshold": OS.BuiltinFunctions.longIntegerToText(model.variables.paginationSettingsVar.helper_ScrollThresholdAttr)
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
onScrollEnding: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/List_Helpers OnScrollEnding");
return controller.onScrollEnding_Helpers$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
source: model.variables.helpersVar,
style: "list list-group orbit-booklet-main-list",
tag: "div",
_idProps: {
service: idService,
name: "List_Helpers"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.localHelperRolesVar), asPrimitiveValue(model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr), asPrimitiveValue(model.variables.helpersVar.getCurrent(callContext.iterationContext).roleAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-list-header-sticky-cont",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_ListHeader_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "56",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("7rNhG7tR9U2Ozl4IwzT+7w.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHelperRoleByJSON_Name$Action(model.variables.helpersVar.getCurrent(callContext.iterationContext).roleAttr, model.variables.localHelperRolesVar, callContext).out_HelperRolesOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr;
}, function () {
return model.variables.helpersVar.getCurrent(callContext.iterationContext).roleAttr;
}, function () {
return model.variables.localHelperRolesVar;
}),
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.localHelperRolesVar), asPrimitiveValue(model.variables.helpersVar.getCurrent(callContext.iterationContext).roleAttr)]
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr,
style: "list list-group orbit-booklet-secondary-list",
tag: "div",
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-list-cont",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).membersAttr), asPrimitiveValue(model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).countryAttr), asPrimitiveValue(model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).localityAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-booklet-location-pill-cont",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_IconClass: "orbit-icon-location text-neutral-7",
In_IsSmallIcon: true,
In_PillText: model.getCachedValue(idService.getId("8XZCeKGwcUmQBSabp_Swlw.In_PillText"), function () {
return ((((model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).localityAttr) !== (""))) ? ((model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).localityAttr + ((((model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).countryAttr) !== (""))) ? ((", " + model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).countryAttr)) : ("")))) : (model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).countryAttr));
}, function () {
return model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).localityAttr;
}, function () {
return model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).countryAttr;
}),
In_ExtendedClass: "orbit-booklet-location-pill"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "61",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).membersAttr,
style: "list list-group orbit-booklet-list-members",
tag: "div",
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_EventBooklet_MembersItem_mvc_view, {
inputs: {
MemberItem: model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_Member$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventBooklet_MembersItem Click_Member");
return controller.onHandle_ClickedMember$Action(model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext).householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
click_Host$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/EventBooklet_MembersItem Click_Host");
return controller.onHandle_ClickedMember$Action(model.variables.helpersVar.getCurrent(callContext.iterationContext).membersByLocalityAttr.getCurrent(callContext.iterationContext).membersAttr.getCurrent(callContext.iterationContext).hostHouseholderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "63",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "7")
},
_dependencies: []
}))];
}, callContext, idService, "7")
},
_dependencies: []
}))];
}, callContext, idService, "7")
},
_dependencies: [asPrimitiveValue(model.variables.localHelperRolesVar)]
})];
}), $if(model.variables.isFetchingDataVar, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventBooklet
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "64",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}, function () {
return [];
})];
})];
}, function () {
return [];
})];
}),
bottomBar: PlaceholderContent.Empty,
commonUI_Elements: new PlaceholderContent(function () {
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
}), React.createElement(OSWidgets.Popup, {
showPopup: model.variables.filtersPopUpVar,
style: "popup-dialog orbit-booklet-popup",
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_PopUp_OrbitBookletFilters_mvc_view, {
inputs: {
CurrentFilters: model.getCachedValue(idService.getId("bHRr+edHoECXSWOwZ1OsTQ.CurrentFilters"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.currentFiltersVar, new Connect2_OrbitMobile_MUIModel.PopupFiltersRec(), function (source, target) {
target.isGuestAttr = source.isGuestAttr;
target.isHelperAttr = source.isHelperAttr;
target.dateRangeAttr = source.dateRangeAttr;
target.helperRolesAttr = source.helperRolesAttr;
target.countriesAttr = source.countriesAttr;
target.localitiesAttr = source.localitiesAttr;
return target;
});
}, function () {
return model.variables.currentFiltersVar;
}),
AvailableFilters: model.variables.availableFiltersVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closePopUp$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/PopUp_OrbitBookletFilters ClosePopUp");
controller.toggleFiltersPopUp$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
applyFilters$Action: function (event_SelectedFiltersIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/PopUp_OrbitBookletFilters ApplyFilters");
return controller.onHandle_ApplyFilters$Action(event_SelectedFiltersIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "67",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
controller.onHandle_BackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
}, function () {
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
uuid: "68",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "FreeSubscriptionAlert",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "OutSystemsUI_2_23.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnHandle_ComponentDidMount.DetermineIfNeedsNewFetchJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnKeyUp_SearchTerm.CheckForEnterKeyJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.RefreshEventGuests_AsyncJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.RefreshEventFilters_AsyncJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.RefreshHelperRoles_AsyncJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.controller$GetHelperRoleByJSON_Name", "Connect2_OrbitMobile_IS.model$EventBooklet_EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$PopupFiltersRec", "Connect2_OrbitMobile_MUI.model$CurrentFiltersRec", "Connect2_OrbitMobile_MUI.model$SelectedFiltersRec", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByLocalityList", "Connect2_OrbitMobile_MUI.model$BookletMembers_ByRoleList", "Connect2_OrbitMobile_IS.model$EventBookletMembersRec", "Connect2_OrbitMobile_MUI.model$EventBookletMembersList", "Connect2_OrbitMobile_MUI.model$LongIntegerLongIntegerBooleanBooleanBooleanBooleanIntegerIntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "Connect2_OrbitMobile_MUI.model$DropdownOptionList", "Connect2_OrbitMobile_IS.model$EventBooklet_CountryItemRec", "Connect2_OrbitMobile_MUI.model$EventBooklet_CountryItemList", "Connect2_OrbitMobile_MUI.controller$FocusOnInput", "Connect2_OrbitMobile_MUI.controller$BlurInput", "Connect2_OrbitMobile_MUI.controller$SetBookletMaxRows", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "Connect2_OrbitMobile_MUI.controller$GroupMembersByCountry", "Connect2_OrbitMobile_MUI.controller$CheckSelectedDates", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecordList", "Connect2_OrbitMobile_MUI.controller$GroupHelpersByRole", "Connect2_OrbitMobile_IS.model$GetEventBookletFiltersResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, OutSystemsUI_2_23Model, NavigationHandlerController, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnHandle_ComponentDidMount_DetermineIfNeedsNewFetchJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnKeyUp_SearchTerm_CheckForEnterKeyJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_RefreshEventGuests_AsyncJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_RefreshEventFilters_AsyncJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_RefreshHelperRoles_AsyncJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
refreshEventGuests$Action: function () {
return controller.executeActionInsideJSNode(controller._refreshEventGuests$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "RefreshEventGuests");
},
refreshEventFilters$Action: function () {
return controller.executeActionInsideJSNode(controller._refreshEventFilters$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "RefreshEventFilters");
},
refreshHelperRoles$Action: function () {
return controller.executeActionInsideJSNode(controller._refreshHelperRoles$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "RefreshHelperRoles");
}
};
this.dataFetchDependenciesOriginal = {
getLocalHelperRoles$AggrRefresh: -1,
get_EventBookletHelpers$DataActRefresh: -1,
get_EventBookletFilters$DataActRefresh: -1,
get_EventBookletGuests$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getLocalHelperRoles$AggrRefresh: [],
get_EventBookletHelpers$DataActRefresh: [],
get_EventBookletFilters$DataActRefresh: [],
get_EventBookletGuests$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLocalHelperRoles$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 20;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalHelperRole\".\"Id\" o0, \"ENLocalHelperRole\".\"Label\" o1, \"ENLocalHelperRole\".\"Order\" o2, \"ENLocalHelperRole\".\"JSON_Name\" o3, \"ENLocalHelperRole\".\"isReadOnly\" o4";
} else {
selectSql += "\"ENLocalHelperRole\".\"Id\" o0, \"ENLocalHelperRole\".\"Label\" o1, \"ENLocalHelperRole\".\"Order\" o2, \"ENLocalHelperRole\".\"JSON_Name\" o3, \"ENLocalHelperRole\".\"isReadOnly\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalHelperRole\" \"ENLocalHelperRole\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localHelperRoleAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 20;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet$Block$getLocalHelperRolesAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8ifbg_1QYEqY426wdRF+bg:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ScreenDataSets.8ifbg_1QYEqY426wdRF+bg:v51pVtgU0Nn5hc1sw2t_kA", "Connect2_OrbitMobile_MUI", "GetLocalHelperRoles", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/GetLocalHelperRoles");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalHelperRolesAggr;
}, function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/GetLocalHelperRoles On After Fetch");
controller._onAfterFetch_GetLocalHelperRoles$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8ifbg_1QYEqY426wdRF+bg", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.get_EventBookletHelpers$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Ys99hTxJOE228YFJz0oANQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/DataActions.Ys99hTxJOE228YFJz0oANQ:3f+qokFahIG8FAJhkIRuZw", "Connect2_OrbitMobile_MUI", "Get_EventBookletHelpers", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Get_EventBookletHelpers");
return controller.callDataAction("DataActionGet_EventBookletHelpers", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/DataActionGet_EventBookletHelpers", "hvXDzvmIYOMyxtCpUwjAug", function (b) {
model.variables.get_EventBookletHelpersDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_EventBookletHelpersDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_EventBookletHelpersDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Get_EventBookletHelpers On After Fetch");
controller._onAfterFetch_GetEventBookletHelpers$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ys99hTxJOE228YFJz0oANQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.get_EventBookletFilters$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:h661xY5P+0KoR+An_W3hDA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/DataActions.h661xY5P+0KoR+An_W3hDA:j95SXjGYYWpCs0beMtxMfw", "Connect2_OrbitMobile_MUI", "Get_EventBookletFilters", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Get_EventBookletFilters");
return controller.callDataAction("DataActionGet_EventBookletFilters", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/DataActionGet_EventBookletFilters", "6XATsNfbr4rScwVCM6ZnrA", function (b) {
model.variables.get_EventBookletFiltersDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_EventBookletFiltersDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_EventBookletFiltersDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Get_EventBookletFilters On After Fetch");
return controller._onAfterFetch_GetEventBookletFilters$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:h661xY5P+0KoR+An_W3hDA", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.get_EventBookletGuests$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:j+w9+ULD0EWN6KHw+4zpJA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/DataActions.j+w9+ULD0EWN6KHw+4zpJA:ylqGotI90CV1gclRbLxWZA", "Connect2_OrbitMobile_MUI", "Get_EventBookletGuests", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Get_EventBookletGuests");
return controller.callDataAction("DataActionGet_EventBookletGuests", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/DataActionGet_EventBookletGuests", "jYcqlbQlX1BdeXZxs2s49A", function (b) {
model.variables.get_EventBookletGuestsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_EventBookletGuestsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_EventBookletGuestsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet/Get_EventBookletGuests On After Fetch");
controller._onAfterFetch_GetEventBookletGuests$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:j+w9+ULD0EWN6KHw+4zpJA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getLocalHelperRoles$AggrRefresh", "get_EventBookletHelpers$DataActRefresh", "get_EventBookletFilters$DataActRefresh", "get_EventBookletGuests$DataActRefresh"];
// Client Actions
Controller.prototype._onAfterFetch_GetEventBookletFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetEventBookletFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnAfterFetch_GetEventBookletFilters$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:0J7NAJK6W0eF52CrXx1qKg:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.0J7NAJK6W0eF52CrXx1qKg:gLD3D6UfqlHd9EbTGlhbJg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventBookletFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QslfpsYp6kCXc5AKNYbioA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P9cAvzVqZEekU2ePT2CWWw", callContext.id);
// EventInfo = Get_EventBookletFilters.Response.EventInfo
model.variables.eventInfoVar = model.variables.get_EventBookletFiltersDataAct.responseOut.eventInfoAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P9cAvzVqZEekU2ePT2CWWw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AvailableFilters.IsGuest = IsGuestView
model.variables.availableFiltersVar.isGuestAttr = model.variables.isGuestViewVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P9cAvzVqZEekU2ePT2CWWw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AvailableFilters.IsHelper = notIsGuestView
model.variables.availableFiltersVar.isHelperAttr = !(model.variables.isGuestViewVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z6XL+T+uyk2mfeN08u+qfQ", callContext.id);
// Execute Action: ListClear_Dates
OS.SystemActions.listClear(model.variables.availableFiltersVar.dateRangeAttr, callContext);
// Event Days
// Foreach Get_EventBookletFilters.Response.Filters.EventDays
callContext.iterationContext.registerIterationStart(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.eventDaysAttr);
try {var eventDaysIterator = callContext.iterationContext.getIterator(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.eventDaysAttr);
var eventDaysIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7SagtwQuSE+orEkJ03Q8qQ", callContext.id) && (eventDaysIndex < model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.eventDaysAttr.length))) {
eventDaysIterator.currentRowNumber = eventDaysIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MdtOhZk1PEWFZ0HDv7Ll1Q", callContext.id);
// Execute Action: ListAppend_Day
OS.SystemActions.listAppend(model.variables.availableFiltersVar.dateRangeAttr, function () {
var rec = new Connect2_OrbitMobile_BLModel.DayFilterRec();
rec.dateGroupAttr = model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.eventDaysAttr.getItem(eventDaysIndex.valueOf());
rec.isSelectedAttr = false;
return rec;
}(), callContext);
eventDaysIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.eventDaysAttr);
}

// Has Fetched Roles?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fP+72M_myU2BimWJfvhK3A", callContext.id) && !(model.variables.getLocalHelperRolesAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vXnA7Nmi_kWN7tCGmWrTdA", callContext.id);
// Refresh Query: GetLocalHelperRoles
var result = controller.getLocalHelperRoles$AggrRefresh(20, 0, callContext);
model.flush();
return result;
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OIQBXgZzPEOvetrhnS4sEA", callContext.id);
// Execute Action: ListClear_Roles
OS.SystemActions.listClear(model.variables.availableFiltersVar.helperRolesAttr, callContext);
// Helper Roles
// Foreach Get_EventBookletFilters.Response.Filters.HelperRoles
callContext.iterationContext.registerIterationStart(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.helperRolesAttr);
try {var helperRolesIterator = callContext.iterationContext.getIterator(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.helperRolesAttr);
var helperRolesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gFT7e6SmIEuE8HgYDGZU+w", callContext.id) && (helperRolesIndex < model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.helperRolesAttr.length))) {
helperRolesIterator.currentRowNumber = helperRolesIndex;
// Set Helper Role
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dp+mjcBsQUaV2InWr6+p+A", callContext.id);
// HelperRole.Value = Get_EventBookletFilters.Response.Filters.HelperRoles.Current
vars.value.helperRoleVar.valueAttr = model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.helperRolesAttr.getItem(helperRolesIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dp+mjcBsQUaV2InWr6+p+A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HelperRole.Label = GetHelperRoleByJSON_Name(Get_EventBookletFilters.Response.Filters.HelperRoles.Current, LocalHelperRoles).Label
vars.value.helperRoleVar.labelAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHelperRoleByJSON_Name$Action(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.helperRolesAttr.getItem(helperRolesIndex.valueOf()), model.variables.localHelperRolesVar, callContext).out_HelperRolesOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7kgLqcZjl0igjtjDmv8P3A", callContext.id);
// Execute Action: ListAppend_HelperRoles
OS.SystemActions.listAppend(model.variables.availableFiltersVar.helperRolesAttr, vars.value.helperRoleVar, callContext);
helperRolesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.helperRolesAttr);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3VRudSMZIk2T5q8sm8oBCA", callContext.id);
// Execute Action: ListClear_Countries
OS.SystemActions.listClear(model.variables.availableFiltersVar.countriesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YDWkVqnlhk2f1luoz6v6+A", callContext.id);
// Execute Action: ListClear_Localities
OS.SystemActions.listClear(model.variables.availableFiltersVar.localitiesAttr, callContext);
// Countries
// Foreach Get_EventBookletFilters.Response.Filters.Countries
callContext.iterationContext.registerIterationStart(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr);
try {var countriesIterator = callContext.iterationContext.getIterator(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr);
var countriesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aYDFte4Yd0yk8desIAyAtg", callContext.id) && (countriesIndex < model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.length))) {
countriesIterator.currentRowNumber = countriesIndex;
// Set Country
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EkqzR3pvd0ygzbvgDbplQQ", callContext.id);
// Country.Value = Get_EventBookletFilters.Response.Filters.Countries.Current.CountryName
vars.value.countryVar.valueAttr = model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EkqzR3pvd0ygzbvgDbplQQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Country.Label = Get_EventBookletFilters.Response.Filters.Countries.Current.CountryName
vars.value.countryVar.labelAttr = model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:x8gBdIGVf0Ch_L_7TXixwg", callContext.id);
// Execute Action: ListAppend_Country
OS.SystemActions.listAppend(model.variables.availableFiltersVar.countriesAttr, vars.value.countryVar, callContext);
// Localities
// Foreach Get_EventBookletFilters.Response.Filters.Countries.Current.Localities
callContext.iterationContext.registerIterationStart(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).localitiesAttr);
try {var localitiesIterator = callContext.iterationContext.getIterator(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).localitiesAttr);
var localitiesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aVy3gfiCMUmVYdnTbUPG7w", callContext.id) && (localitiesIndex < model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).localitiesAttr.length))) {
localitiesIterator.currentRowNumber = localitiesIndex;
// Set Locality
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gRPlWv_hFkWR7yb9WMuxuA", callContext.id);
// Locality.Value = Get_EventBookletFilters.Response.Filters.Countries.Current.Localities.Current
vars.value.localityVar.valueAttr = model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).localitiesAttr.getItem(localitiesIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gRPlWv_hFkWR7yb9WMuxuA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Locality.Label = Get_EventBookletFilters.Response.Filters.Countries.Current.Localities.Current
vars.value.localityVar.labelAttr = model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).localitiesAttr.getItem(localitiesIndex.valueOf());
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gRPlWv_hFkWR7yb9WMuxuA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Locality.GroupName = Get_EventBookletFilters.Response.Filters.Countries.Current.CountryName
vars.value.localityVar.groupNameAttr = model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lrCYzye4_UWaOlMaD_U5_Q", callContext.id);
// Execute Action: ListAppend_Locality
OS.SystemActions.listAppend(model.variables.availableFiltersVar.localitiesAttr, vars.value.localityVar, callContext);
localitiesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr.getItem(countriesIndex.valueOf()).localitiesAttr);
}

countriesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.get_EventBookletFiltersDataAct.responseOut.filtersAttr.countriesAttr);
}

// Fisnished fetching?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M7AKAnYB+k+MJ0Xf3PmtHA", callContext.id) && ((model.variables.isGuestViewVar) ? (((model.variables.get_EventBookletGuestsDataAct.isDataFetchedAttr) ? (true) : (false))) : (((model.variables.get_EventBookletHelpersDataAct.isDataFetchedAttr) ? (true) : (false)))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BavZoZBmuEuWvfOu1P+ocg", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gTpnodnfV06Ut6iwfhq_pQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a4CZgGNuckKLP5cYsfKZ5A", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:0J7NAJK6W0eF52CrXx1qKg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:0J7NAJK6W0eF52CrXx1qKg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnAfterFetch_GetEventBookletFilters$vars", [{
name: "HelperRole",
attrName: "helperRoleVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsUI_2_23Model.DropdownOptionRec();
},
complexType: OutSystemsUI_2_23Model.DropdownOptionRec
}, {
name: "Country",
attrName: "countryVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsUI_2_23Model.DropdownOptionRec();
},
complexType: OutSystemsUI_2_23Model.DropdownOptionRec
}, {
name: "Locality",
attrName: "localityVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsUI_2_23Model.DropdownOptionRec();
},
complexType: OutSystemsUI_2_23Model.DropdownOptionRec
}]);
Controller.prototype._refreshEventHelpers$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshEventHelpers");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:o8M1BoZvMU2wLGciflq3Gw:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.o8M1BoZvMU2wLGciflq3Gw:E7F8gPGBY_37+0Yn64+l3g", "Connect2_OrbitMobile_MUI", "RefreshEventHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3vxG8xV0okaNrbeA2UwSxQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ky+18WC3PEa5vCpPP1Egtw", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MWNyOvvqnUeBy8OYX8KmGA", callContext.id);
// Refresh Query: Get_EventBookletHelpers
var result = controller.get_EventBookletHelpers$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qQt+im8FREuYxtMUZj3mcw", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_EventBooklet.RefreshEventHelpers", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BbbxJ6G0l0O7SSkZye3k4g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HWVXoHgu7UKJswKUxZ+Mqg", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pbRZwI3eO0COh51qW0NZZQ", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:o8M1BoZvMU2wLGciflq3Gw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:o8M1BoZvMU2wLGciflq3Gw", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_ApplyFilters$Action = function (event_SelectedFiltersIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ApplyFilters$vars"))());
vars.value.event_SelectedFiltersInLocal = event_SelectedFiltersIn.clone();
var listFilter_SelectedDatesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_SelectedDatesVar = listFilter_SelectedDatesVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:En3jByDR4UW91O2wycGVWA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.En3jByDR4UW91O2wycGVWA:NupDlbVsXLGxJsgjynzniA", "Connect2_OrbitMobile_MUI", "OnHandle_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+AxfJs4eXEORgjWSAFIWLA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has broken selectors?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v+vK5jiYrEqNj4R7a8fJfQ", callContext.id) && ((!(vars.value.event_SelectedFiltersInLocal.isGuestAttr) && !(vars.value.event_SelectedFiltersInLocal.isHelperAttr)) || (vars.value.event_SelectedFiltersInLocal.isGuestAttr && vars.value.event_SelectedFiltersInLocal.isHelperAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KTfIbtGw_kGjZV4GZUBtBw", callContext.id);
// Execute Action: OnAfterFetch_GetEventBookletFilters
return controller._onAfterFetch_GetEventBookletFilters$Action(callContext).then(function () {
// Invalid Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Rt4HjHIc8U6iXnJ+Yk0nZQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("The chosen filters were invalid, filters have been reset.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NwKA5ZZ8EUugNhaP1T68+Q", callContext.id);
});
} else {
// Set Selected Search Term
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bS2gvN+vMk6cFt6gIjClkA", callContext.id);
// SelectedFilters.SearchTerm = CurrentFilters.SearchTerm
model.variables.selectedFiltersVar.searchTermAttr = model.variables.currentFiltersVar.searchTermAttr;
// Set Selected Helper Roles
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ziHE7CObpUO2HF2l8sNpbg", callContext.id);
// SelectedFilters.HelperRoles = Event_SelectedFilters.HelperRoles
model.variables.selectedFiltersVar.helperRolesAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.event_SelectedFiltersInLocal.helperRolesAttr, new OS.DataTypes.TextList(), function (source, target) {
target = source.valueAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lOb0J0Zc+UynXFpSYx1bug", callContext.id);
// Execute Action: ListFilter_SelectedDates
listFilter_SelectedDatesVar.value = OS.SystemActions.listFilter(vars.value.event_SelectedFiltersInLocal.dateRangeAttr, function (p) {
return p.isSelectedAttr;
}, callContext);

// Has Selected Dates?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WMOY+cRr00qJ5TNbovFu0w", callContext.id) && !(listFilter_SelectedDatesVar.value.filteredListOut.isEmpty))) {
// Set Selected Date Range
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G3S3u+BSC0CyOBluUoxh1A", callContext.id);
// SelectedFilters.DateRange = ListFilter_SelectedDates.FilteredList
model.variables.selectedFiltersVar.dateRangeAttr = listFilter_SelectedDatesVar.value.filteredListOut;
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KzP8aw75C0aeqEEEhHmLFA", callContext.id);
// Execute Action: ListClear_SelectedDateRange
OS.SystemActions.listClear(model.variables.selectedFiltersVar.dateRangeAttr, callContext);
}

// Set Selected locations
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VucSUYjwT02Ufm5+pU4FjQ", callContext.id);
// SelectedFilters.Countries = Event_SelectedFilters.Countries
model.variables.selectedFiltersVar.countriesAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.event_SelectedFiltersInLocal.countriesAttr, new OS.DataTypes.TextList(), function (source, target) {
target = source.valueAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VucSUYjwT02Ufm5+pU4FjQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedFilters.Localities = Event_SelectedFilters.Localities
model.variables.selectedFiltersVar.localitiesAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.event_SelectedFiltersInLocal.localitiesAttr, new OS.DataTypes.TextList(), function (source, target) {
target = source.valueAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s_JlCxXqTUqPcwBNDSoa0w", callContext.id);
// Execute Action: SetCurrentView
controller._setCurrentView$Action(vars.value.event_SelectedFiltersInLocal.isGuestAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:08AUw_CvjUuqHfx2jLt2tQ", callContext.id);
// Execute Action: ResetPaginationSettings
controller._resetPaginationSettings$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XbX4teh4G0y8mARMRrpMEQ", callContext.id);
// Execute Action: ResetData
controller._resetData$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+wVlK_2ZrkyRuuuDVpCOlw", callContext.id);
// Execute Action: ToggleFiltersPopUp
controller._toggleFiltersPopUp$Action(callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YrPyXO_F5E6wQzUuNLebyA", callContext.id) && vars.value.event_SelectedFiltersInLocal.isHelperAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aYwVErCan0qxOVXwFc_PCQ", callContext.id);
// Execute Action: RefreshEventHelpers
return controller._refreshEventHelpers$Action(callContext);
} else {
return OS.Flow.executeSequence(function () {
if(vars.value.event_SelectedFiltersInLocal.isGuestAttr) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:is2Cw3oOM06GJuew9vSqVQ", callContext.id);
// Execute Action: RefreshEventGuests
return controller._refreshEventGuests$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hlET2tX+XEaNKHisIRaH_A", callContext.id);
return OS.Flow.returnAsync();

}

});
}

}).then(function () {
// Set Current Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uqLG7XByXkewQB0S_QZSSA", callContext.id);
// CurrentFilters.IsHelper = Event_SelectedFilters.IsHelper
model.variables.currentFiltersVar.isHelperAttr = vars.value.event_SelectedFiltersInLocal.isHelperAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uqLG7XByXkewQB0S_QZSSA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentFilters.IsGuest = Event_SelectedFilters.IsGuest
model.variables.currentFiltersVar.isGuestAttr = vars.value.event_SelectedFiltersInLocal.isGuestAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uqLG7XByXkewQB0S_QZSSA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CurrentFilters.DateRange = Event_SelectedFilters.DateRange
model.variables.currentFiltersVar.dateRangeAttr = vars.value.event_SelectedFiltersInLocal.dateRangeAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uqLG7XByXkewQB0S_QZSSA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CurrentFilters.HelperRoles = Event_SelectedFilters.HelperRoles
model.variables.currentFiltersVar.helperRolesAttr = vars.value.event_SelectedFiltersInLocal.helperRolesAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uqLG7XByXkewQB0S_QZSSA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// CurrentFilters.Countries = Event_SelectedFilters.Countries
model.variables.currentFiltersVar.countriesAttr = vars.value.event_SelectedFiltersInLocal.countriesAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uqLG7XByXkewQB0S_QZSSA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// CurrentFilters.Localities = Event_SelectedFilters.Localities
model.variables.currentFiltersVar.localitiesAttr = vars.value.event_SelectedFiltersInLocal.localitiesAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vLeAT8qkfUyIgBOSBQSz4Q", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:En3jByDR4UW91O2wycGVWA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:En3jByDR4UW91O2wycGVWA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ApplyFilters$vars", [{
name: "Event_SelectedFilters",
attrName: "event_SelectedFiltersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.PopupFiltersRec();
},
complexType: Connect2_OrbitMobile_MUIModel.PopupFiltersRec
}]);
Controller.prototype._onClick_ViewSwap$Action = function (isGuestButtonIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ViewSwap");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnClick_ViewSwap$vars"))());
vars.value.isGuestButtonInLocal = isGuestButtonIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BooOELxI0kSv_D5iWGD7Tg:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.BooOELxI0kSv_D5iWGD7Tg:K0GPImOR6Le4oOXrI2i4hg", "Connect2_OrbitMobile_MUI", "OnClick_ViewSwap", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ge9EiRg31kqGokl3rhXSPQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ervWjzBDUE2NB+77Pr6LKQ", callContext.id) && model.variables.isFetchingDataVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RLXir3hhC0+ZaCVzyDHQfQ", callContext.id);
} else {
// Same option?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_fCCOWiTJU2gEaXeAvbGng", callContext.id) && ((vars.value.isGuestButtonInLocal && model.variables.isGuestViewVar) || (!(vars.value.isGuestButtonInLocal) && !(model.variables.isGuestViewVar))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BAqsXmX1SUameoXknFa_tw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fNX8fKOJCk+WJwkTzLmPDQ", callContext.id);
// Execute Action: SetCurrentView
controller._setCurrentView$Action(vars.value.isGuestButtonInLocal, callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Esw5JdsORUWLxuIe7S0Apw", callContext.id) && model.variables.isGuestViewVar)) {
// Needs data fetch?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0NM6Bh8r8UqY9WPoZgUWMw", callContext.id) && (model.variables.guestsVar.isEmpty || ((model.variables.lastFilters_GuestVar) !== (model.variables.selectedFiltersVar))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eisVn1MC0ki92QQgPOxUYw", callContext.id);
// Execute Action: ResetPaginationSettings_Guests
controller._resetPaginationSettings$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yObyBUr9OUy3rGsNW4t47A", callContext.id);
// Execute Action: ResetData_Guests
controller._resetData$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:41yB0BWrnkK2XGqC9Qmq8w", callContext.id);
// Execute Action: RefreshEventGuests
return controller._refreshEventGuests$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lKYSBDNWg0ipNs6F2Z3NSA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4qkxxzKwYk2xyD2tb1PFwg", callContext.id);
}

});
} else {
// Needs data fetch?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ly5xuEDsVEK_205oERbPdw", callContext.id) && (model.variables.helpersVar.isEmpty || ((model.variables.lastFilters_HelpersVar) !== (model.variables.selectedFiltersVar))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v6AuN48zM0+m4vv0OeFhrg", callContext.id);
// Execute Action: ResetPaginationSettings_Helpers
controller._resetPaginationSettings$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:86AUPK8OvEiHXljW7hNuVA", callContext.id);
// Execute Action: ResetData_Helpers
controller._resetData$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:epbZDRx5RkSzavEMdJjFWQ", callContext.id);
// Execute Action: RefreshEventHelpers
return controller._refreshEventHelpers$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4qkxxzKwYk2xyD2tb1PFwg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4qkxxzKwYk2xyD2tb1PFwg", callContext.id);
}

});
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BooOELxI0kSv_D5iWGD7Tg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BooOELxI0kSv_D5iWGD7Tg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnClick_ViewSwap$vars", [{
name: "IsGuestButton",
attrName: "isGuestButtonInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._toggleSearchMode$Action = function (forceSearchModeIn, forceBlurOnInputIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleSearchMode");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ToggleSearchMode$vars"))());
vars.value.forceSearchModeInLocal = forceSearchModeIn;
vars.value.forceBlurOnInputInLocal = forceBlurOnInputIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:XMVcGJZ_WkelhOBaquL3Hg:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.XMVcGJZ_WkelhOBaquL3Hg:HsqY1nuisY46t_dDDFJk2A", "Connect2_OrbitMobile_MUI", "ToggleSearchMode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CfvNVhVIvkeuYCEWbGh5xg", callContext.id);
// Has fetched Filter Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NK++nbmntU+TessecFe53Q", callContext.id) && (model.variables.getLocalHelperRolesAggr.isDataFetchedAttr && model.variables.get_EventBookletFiltersDataAct.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8J9tasPv1U2TvqGufWUnNg", callContext.id);
// IsSearchMode = If
model.variables.isSearchModeVar = ((vars.value.forceSearchModeInLocal) ? (model.variables.isSearchModeVar) : (!(model.variables.isSearchModeVar)));
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:06OlUEt4X02K2f2Iom+wPQ", callContext.id) && vars.value.forceBlurOnInputInLocal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K9DAIidVzke0kSz5enf54A", callContext.id);
// Execute Action: FocusOnInput
Connect2_OrbitMobile_MUIController.default.focusOnInput$Action(idService.getId("Input_SearchTerm"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+XiIMRax0S6qa4wCImXTQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7Ii3tgKX+EqXEP3QgINOpw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:neSN1lzG40aLDX6yafWUGQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XMVcGJZ_WkelhOBaquL3Hg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ToggleSearchMode$vars", [{
name: "ForceSearchMode",
attrName: "forceSearchModeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ForceBlurOnInput",
attrName: "forceBlurOnInputInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._setCurrentView$Action = function (setGuestViewIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetCurrentView");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.SetCurrentView$vars"))());
vars.value.setGuestViewInLocal = setGuestViewIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fzYpH5_z6EGWAcW69YpCzQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.fzYpH5_z6EGWAcW69YpCzQ:bFHgRfZRM62hWM+SesZpJg", "Connect2_OrbitMobile_MUI", "SetCurrentView", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3yOM5_5PUkONxpPT2bhiMA", callContext.id);
// Set View and Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+NdbNjb+OEia03e8vPbnrA", callContext.id);
// IsGuestView = SetGuestView
model.variables.isGuestViewVar = vars.value.setGuestViewInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+NdbNjb+OEia03e8vPbnrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentFilters.IsGuest = IsGuestView
model.variables.currentFiltersVar.isGuestAttr = model.variables.isGuestViewVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+NdbNjb+OEia03e8vPbnrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CurrentFilters.IsHelper = notIsGuestView
model.variables.currentFiltersVar.isHelperAttr = !(model.variables.isGuestViewVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nMm1eI7zNEmcA6l4h1XFiQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fzYpH5_z6EGWAcW69YpCzQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.SetCurrentView$vars", [{
name: "SetGuestView",
attrName: "setGuestViewInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onScrollEnding_Helpers$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnScrollEnding_Helpers");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+W7CLDSOAUufXbsN6QGDXA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.+W7CLDSOAUufXbsN6QGDXA:L9QROlMaouQACrD6ozQdkQ", "Connect2_OrbitMobile_MUI", "OnScrollEnding_Helpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f6bp7kwK9UOf14Zv9itJtQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Able to fetch?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SKHHLeikM02FJ_rdkhjOnw", callContext.id) && (!(model.variables.isGuestViewVar) && !(model.variables.isFetchingDataVar)))) {
// Needs more records?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QiaV+Y6X0EGErr_SmbKaGw", callContext.id) && (model.variables.lastFetchedHelpersVar.length >= (model.variables.paginationSettingsVar.helper_PageNumberAttr * model.variables.paginationSettingsVar.helper_MaxRowsAttr)))) {
// Last call had data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3gVT1AI_Y0uMXCiIzRe86g", callContext.id) && (model.variables.get_EventBookletHelpersDataAct.isDataFetchedAttr && !(model.variables.get_EventBookletHelpersDataAct.responseOut.isEmpty)))) {
// Set Pagination Settings
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YJ6iwwWLv0GPUySRfaIGAw", callContext.id);
// PaginationSettings.Helper_PageNumber = PaginationSettings.Helper_PageNumber + 1
model.variables.paginationSettingsVar.helper_PageNumberAttr = (model.variables.paginationSettingsVar.helper_PageNumberAttr + 1);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YJ6iwwWLv0GPUySRfaIGAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PaginationSettings.Helper_IsNewSearch = False
model.variables.paginationSettingsVar.helper_IsNewSearchAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XhD7+S1kdUmr9bBm8TztoQ", callContext.id);
// Execute Action: RefreshEventHelpers
return controller._refreshEventHelpers$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Txd8uoAavkCAcea1NGty+g", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ty63CmHfb0qYLIT2BJfymA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+yEp+N8OMUGxmmNqfQM65g", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oYwXNCoBRkWnlnsdKTqeNA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+W7CLDSOAUufXbsN6QGDXA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+W7CLDSOAUufXbsN6QGDXA", callContext.id);
throw ex;

});
};
Controller.prototype._resetPaginationSettings$Action = function (isClearAllIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ResetPaginationSettings");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ResetPaginationSettings$vars"))());
vars.value.isClearAllInLocal = isClearAllIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+c6hMuhk30y+7PpGLzy0EQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.+c6hMuhk30y+7PpGLzy0EQ:keutOqPvmiJmMuS6YiwvNg", "Connect2_OrbitMobile_MUI", "ResetPaginationSettings", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:k895iX5exkWsk7Lku1EA_Q", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xwz12nPO2U2+2xhzR7c2DQ", callContext.id) && vars.value.isClearAllInLocal)) {
// Reset Guests
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qCjZQlfu7E2hNRrHnMNa+g", callContext.id);
// PaginationSettings.Guest_MaxRows = BookletGuestsMaxRows
model.variables.paginationSettingsVar.guest_MaxRowsAttr = Connect2_OrbitMobile_MUIClientVariables.getBookletGuestsMaxRows();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qCjZQlfu7E2hNRrHnMNa+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PaginationSettings.Guest_PageNumber = 1
model.variables.paginationSettingsVar.guest_PageNumberAttr = 1;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qCjZQlfu7E2hNRrHnMNa+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PaginationSettings.Guest_IsNewSearch = True
model.variables.paginationSettingsVar.guest_IsNewSearchAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qCjZQlfu7E2hNRrHnMNa+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PaginationSettings.Guest_NoResults = False
model.variables.paginationSettingsVar.guest_NoResultsAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qCjZQlfu7E2hNRrHnMNa+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// PaginationSettings.Guest_ScrollThreshold = BookletGuestsMaxRows * 30
model.variables.paginationSettingsVar.guest_ScrollThresholdAttr = OS.BuiltinFunctions.integerToLongInteger((Connect2_OrbitMobile_MUIClientVariables.getBookletGuestsMaxRows() * 30));
// Reset Helpers
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BCcLGirbYk6nJL3wujcLzA", callContext.id);
// PaginationSettings.Helper_MaxRows = BookletHelpersMaxRows
model.variables.paginationSettingsVar.helper_MaxRowsAttr = Connect2_OrbitMobile_MUIClientVariables.getBookletHelpersMaxRows();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BCcLGirbYk6nJL3wujcLzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PaginationSettings.Helper_PageNumber = 1
model.variables.paginationSettingsVar.helper_PageNumberAttr = 1;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BCcLGirbYk6nJL3wujcLzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PaginationSettings.Helper_IsNewSearch = True
model.variables.paginationSettingsVar.helper_IsNewSearchAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BCcLGirbYk6nJL3wujcLzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PaginationSettings.Helper_NoResults = False
model.variables.paginationSettingsVar.helper_NoResultsAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BCcLGirbYk6nJL3wujcLzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// PaginationSettings.Helper_ScrollThreshold = BookletHelpersMaxRows * 30
model.variables.paginationSettingsVar.helper_ScrollThresholdAttr = OS.BuiltinFunctions.integerToLongInteger((Connect2_OrbitMobile_MUIClientVariables.getBookletHelpersMaxRows() * 30));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Uym1BLCybUyATt7ETJDtcw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s7LJPs365kWiE0LodIEZlw", callContext.id) && model.variables.isGuestViewVar)) {
// Reset Guests
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pw0deDnJ10WZWRn7L+OGFA", callContext.id);
// PaginationSettings.Guest_MaxRows = BookletGuestsMaxRows
model.variables.paginationSettingsVar.guest_MaxRowsAttr = Connect2_OrbitMobile_MUIClientVariables.getBookletGuestsMaxRows();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pw0deDnJ10WZWRn7L+OGFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PaginationSettings.Guest_PageNumber = 1
model.variables.paginationSettingsVar.guest_PageNumberAttr = 1;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pw0deDnJ10WZWRn7L+OGFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PaginationSettings.Guest_IsNewSearch = True
model.variables.paginationSettingsVar.guest_IsNewSearchAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pw0deDnJ10WZWRn7L+OGFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PaginationSettings.Guest_NoResults = False
model.variables.paginationSettingsVar.guest_NoResultsAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bBEljYZ8PkaQHRAf0PUe5g", callContext.id);
} else {
// Reset Helpers
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YJT7yJEF0E2dQnuz1CEm+w", callContext.id);
// PaginationSettings.Helper_MaxRows = BookletHelpersMaxRows
model.variables.paginationSettingsVar.helper_MaxRowsAttr = Connect2_OrbitMobile_MUIClientVariables.getBookletHelpersMaxRows();
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YJT7yJEF0E2dQnuz1CEm+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PaginationSettings.Helper_PageNumber = 1
model.variables.paginationSettingsVar.helper_PageNumberAttr = 1;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YJT7yJEF0E2dQnuz1CEm+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PaginationSettings.Helper_IsNewSearch = True
model.variables.paginationSettingsVar.helper_IsNewSearchAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YJT7yJEF0E2dQnuz1CEm+w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PaginationSettings.Helper_NoResults = False
model.variables.paginationSettingsVar.helper_NoResultsAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bBEljYZ8PkaQHRAf0PUe5g", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+c6hMuhk30y+7PpGLzy0EQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ResetPaginationSettings$vars", [{
name: "IsClearAll",
attrName: "isClearAllInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_ComponentDidMount$Action = function (in_ListIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ComponentDidMount");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ComponentDidMount$vars"))());
vars.value.in_ListIdInLocal = in_ListIdIn;
var determineIfNeedsNewFetchJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.determineIfNeedsNewFetchJSResult = determineIfNeedsNewFetchJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xIjORC4vmUOfIM_4dPc+SA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.xIjORC4vmUOfIM_4dPc+SA:eGMrQo+pFzPuhncYc+jx2A", "Connect2_OrbitMobile_MUI", "OnHandle_ComponentDidMount", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:haVR9pYShEetKwtRANar+Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TodagzigT0qbBYn+2oi7UQ", callContext.id);
determineIfNeedsNewFetchJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnHandle_ComponentDidMount_DetermineIfNeedsNewFetchJS, "DetermineIfNeedsNewFetch", "OnHandle_ComponentDidMount", {
ListId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ListIdInLocal, OS.DataTypes.DataTypes.Text),
PageNumber: OS.DataConversion.JSNodeParamConverter.to(((model.variables.isGuestViewVar) ? (model.variables.paginationSettingsVar.guest_PageNumberAttr) : (model.variables.paginationSettingsVar.helper_PageNumberAttr)), OS.DataTypes.DataTypes.Integer),
NeedsFetch: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ComponentDidMount$determineIfNeedsNewFetchJSResult"))();
jsNodeResult.needsFetchOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NeedsFetch, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Needs Fetch?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_WjrVUANuku353oYPsggUA", callContext.id) && determineIfNeedsNewFetchJSResult.value.needsFetchOut)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EPDMFHjov0S4DSPplqdD3A", callContext.id) && model.variables.isGuestViewVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NrjNtN4N4EmcXkXjO1+qVg", callContext.id);
// Execute Action: OnScrollEnding_Guests
return controller._onScrollEnding_Guests$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LbKkdxLwHUat6y+uRLAZOw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X2cha79350aP7uLcUx2VZg", callContext.id);
// Execute Action: OnScrollEnding_Helpers
return controller._onScrollEnding_Helpers$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LbKkdxLwHUat6y+uRLAZOw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IK4ZU4Z0q0iO0cADoXVaPg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xIjORC4vmUOfIM_4dPc+SA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xIjORC4vmUOfIM_4dPc+SA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ComponentDidMount$vars", [{
name: "In_ListId",
attrName: "in_ListIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ComponentDidMount$determineIfNeedsNewFetchJSResult", [{
name: "NeedsFetch",
attrName: "needsFetchOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_ClearSearch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ClearSearch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KK6WTMPdaEKpKTJOq8TwVQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.KK6WTMPdaEKpKTJOq8TwVQ:PDhXG8aznOisalRRcez+QQ", "Connect2_OrbitMobile_MUI", "OnClick_ClearSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:d5KRhRvjC0W9eKx7dbV03w", callContext.id);
// Clear Search
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rMMGLpTgiE2s94OG9OBJAA", callContext.id);
// CurrentFilters.SearchTerm = ""
model.variables.currentFiltersVar.searchTermAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rMMGLpTgiE2s94OG9OBJAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedFilters.SearchTerm = ""
model.variables.selectedFiltersVar.searchTermAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HLx+GejrgkGHV2FcVeDYJQ", callContext.id);
// Execute Action: FocusOnInput
Connect2_OrbitMobile_MUIController.default.focusOnInput$Action(idService.getId("Input_SearchTerm"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u7FA8qaB+ka1QJM1i_NKcQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KK6WTMPdaEKpKTJOq8TwVQ", callContext.id);
}

};
Controller.prototype._onInitialize$Action = function (callContext) {
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_0XiVFyAR0qijNPFwC0+Ug:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions._0XiVFyAR0qijNPFwC0+Ug:01tylIyNCaSZGmjak69ESg", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GE2z7ApV6kyJC+kHoV3v+g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E1BTd+X1P0WMOi8qCSIU8A", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4Jg_ITw_AUixqpZ+6GCWKA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q1WXAhsgcke_TbLyQiVJuw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:atZF539Rj0Ov7LGpgHCcZw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p0SAsxebNkCbZCcYjvdHCg", callContext.id);
// Execute Action: SetCurrentView
controller._setCurrentView$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OoUIZkLJJ0qv_skR8XilUg", callContext.id);
// Execute Action: ResetData
controller._resetData$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sw8eIuCHQUCBHJ3+fanx_g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_0XiVFyAR0qijNPFwC0+Ug", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onKeyUp_SearchTerm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyUp_SearchTerm");
callContext = controller.callContext(callContext);
var checkForEnterKeyJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkForEnterKeyJSResult = checkForEnterKeyJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:npgKcdhw3E6eI6+yiZhYoQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.npgKcdhw3E6eI6+yiZhYoQ:X2OrL6DxmVYllIIDSwip1A", "Connect2_OrbitMobile_MUI", "OnKeyUp_SearchTerm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pf1fjgqzaUu6d86YNMg+5A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:422XwEO+vUS35YO8RMIo3A", callContext.id);
checkForEnterKeyJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnKeyUp_SearchTerm_CheckForEnterKeyJS, "CheckForEnterKey", "OnKeyUp_SearchTerm", {
IsEnterKey: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnKeyUp_SearchTerm$checkForEnterKeyJSResult"))();
jsNodeResult.isEnterKeyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEnterKey, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Is Enter Key?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zdBNRLGTD0eB+jiDr0_XXA", callContext.id) && checkForEnterKeyJSResult.value.isEnterKeyOut)) {
// Set Selected Search Term
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sWG0v11SnEK1eeKup8yRsQ", callContext.id);
// SelectedFilters.SearchTerm = CurrentFilters.SearchTerm
model.variables.selectedFiltersVar.searchTermAttr = model.variables.currentFiltersVar.searchTermAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S+qq7VtxwEmqHrhPeP_Neg", callContext.id);
// Execute Action: ResetPaginationSettings
controller._resetPaginationSettings$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g0tNrW4AYUCOsJLf4zV4+w", callContext.id);
// Execute Action: ResetData
controller._resetData$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ar9_iJ86mkGKmgDzVjWBdQ", callContext.id);
// Execute Action: BlurInput
Connect2_OrbitMobile_MUIController.default.blurInput$Action(idService.getId("Input_SearchTerm"), callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ktr_Mbn_c0ydYW3QXtVKOQ", callContext.id) && model.variables.isGuestViewVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ae3NmQSXkEm5tpJDdq6NdQ", callContext.id);
// Execute Action: RefreshEventGuests
return controller._refreshEventGuests$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gzI3nPKz8kuw3P0VkNBjkA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0wFuGpRj8kqnCG5CIThAzQ", callContext.id);
// Execute Action: RefreshEventHelpers
return controller._refreshEventHelpers$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gzI3nPKz8kuw3P0VkNBjkA", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ePj3IPS__EKsc2ThVUXErQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:npgKcdhw3E6eI6+yiZhYoQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:npgKcdhw3E6eI6+yiZhYoQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnKeyUp_SearchTerm$checkForEnterKeyJSResult", [{
name: "IsEnterKey",
attrName: "isEnterKeyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._toggleFiltersPopUp$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleFiltersPopUp");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:pK5tdfZglEmhWDibXVp0yQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.pK5tdfZglEmhWDibXVp0yQ:tEi1YVxhLjGvhRVE28IMvw", "Connect2_OrbitMobile_MUI", "ToggleFiltersPopUp", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1TMd8rG3ckKK+5ptnXMXFA", callContext.id);
// Has fetched Filter Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:puP+kFoNxUKj6qjWSnNUTA", callContext.id) && (model.variables.getLocalHelperRolesAggr.isDataFetchedAttr && model.variables.get_EventBookletFiltersDataAct.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TxEm9VOvZECc9aIeqQEQTQ", callContext.id);
// FiltersPopUp = notFiltersPopUp
model.variables.filtersPopUpVar = !(model.variables.filtersPopUpVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZIgc_2lofkWrutgk+tvWvg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_nHh9Galv02zyTt3xdY4Zw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pK5tdfZglEmhWDibXVp0yQ", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:J9xwhDLrYUae_P5Woxbupw:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.J9xwhDLrYUae_P5Woxbupw:EyTxjYU8QDpRTRMKmzH49g", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t5DtrQb2NkS1CXvnzLMLAQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:boRl_n1Bbkqzf3eF2wFRfQ", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KQKZgmSic0C9vU26LTiltg", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5nfweFbK10iiqT5QJIyAGg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gNhD47BCrkuR2XN4x7Tdvg", callContext.id);
// Execute Action: SetBookletMaxRows
model.flush();
return Connect2_OrbitMobile_MUIController.default.setBookletMaxRows$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+l_WavCW50CgWVZ8yKjAUA", callContext.id);
// Execute Action: ResetPaginationSettings
controller._resetPaginationSettings$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5F1BmyDyik2suIATHoLMZg", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_RefreshHelperRoles_AsyncJS, "RefreshHelperRoles_Async", "OnReady", null, function ($parameters) {
}, {
RefreshHelperRoles: controller.clientActionProxies.refreshHelperRoles$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Woc6e0+GNUCDoURkp3GUEw", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_RefreshEventFilters_AsyncJS, "RefreshEventFilters_Async", "OnReady", null, function ($parameters) {
}, {
RefreshEventFilters: controller.clientActionProxies.refreshEventFilters$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xIzQJPh6iEqWbHxBYo7c4g", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_EventBooklet_ScreenBlock_EventBooklet_mvc_controller_OnReady_RefreshEventGuests_AsyncJS, "RefreshEventGuests_Async", "OnReady", null, function ($parameters) {
}, {
RefreshEventGuests: controller.clientActionProxies.refreshEventGuests$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SYcTL9n1q06LJynDf0Hcgw", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:J9xwhDLrYUae_P5Woxbupw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:J9xwhDLrYUae_P5Woxbupw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._refreshHelperRoles$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshHelperRoles");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qUJahYfN6Uq9lG_Ao6DiNA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.qUJahYfN6Uq9lG_Ao6DiNA:198YGaT6W6Mxs56pNkd8Dg", "Connect2_OrbitMobile_MUI", "RefreshHelperRoles", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3Obvapv1dUmQEk27WnD1eg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QH+LQyaqyUKTjmFxbe17PQ", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NtXkJu2piUCNcLceU5qBTg", callContext.id);
// Refresh Query: GetLocalHelperRoles
var result = controller.getLocalHelperRoles$AggrRefresh(20, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9uiuXr5Ws0uIE0mvEOaIsA", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_EventBooklet.RefreshHelperRoles", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pQ6uOuLjc0+aPsdMiAO0hw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:490Hlw0DL0Cs892LQzb9Wg", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XJXhp_ualUWqSWBq_0XWDA", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qUJahYfN6Uq9lG_Ao6DiNA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qUJahYfN6Uq9lG_Ao6DiNA", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_BackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_BackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tjUqi4CGHEibmOmJnvaJxw:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.tjUqi4CGHEibmOmJnvaJxw:HLWnSeIEdsGh0IeXepsXfw", "Connect2_OrbitMobile_MUI", "OnHandle_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OGQzXYn87UuydDEN7sHg_A", callContext.id);
// Is both active?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xh3BB9vjBkKzB6si7FtHRA", callContext.id) && !((model.variables.isSearchModeVar && model.variables.filtersPopUpVar)))) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w2LeNY5lwkK+vstXaU5sFQ", callContext.id) && !(model.variables.filtersPopUpVar))) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3IK2xg08k0aTPPlzYJaMfA", callContext.id) && model.variables.isSearchModeVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5lBoQvBQAkOkXgBZ7cbn_g", callContext.id);
// Execute Action: PreventNavigation_CloseSearch
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pGxIAkxTSkOHQRNn0geY3w", callContext.id);
// Execute Action: ToggleSearchMode
controller._toggleSearchMode$Action(false, false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mKD1t6o0lESBmknxb1tg+g", callContext.id);
return ;

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OMS4S1Zey0GskIU6gR7rvQ", callContext.id);
return ;

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i1E0qLx9TEy61ip87TPU0Q", callContext.id);
// Execute Action: PreventNavigation_ClosePopUp
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SyWHSmpLzUanZd+duaTGvg", callContext.id);
// Execute Action: ToggleFiltersPopUp
controller._toggleFiltersPopUp$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K2hSU_ewBEqIxDKQ9WvXiw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tjUqi4CGHEibmOmJnvaJxw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_BackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._clearAllFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ClearAllFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ClearAllFilters$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Y3hUlaA+x0aFMmHx8hQFHg:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.Y3hUlaA+x0aFMmHx8hQFHg:74OIWSaD1gHA0+G8+L3CiQ", "Connect2_OrbitMobile_MUI", "ClearAllFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:abaSMLkwfE+OvhuoxsL42g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Clear Filters
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E_XnZA4vyUqHE1xvc6j+YA", callContext.id);
// CurrentFilters = Temp_CurrentFilters
model.variables.currentFiltersVar = vars.value.temp_CurrentFiltersVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E_XnZA4vyUqHE1xvc6j+YA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SelectedFilters = Temp_SelectedFilters
model.variables.selectedFiltersVar = vars.value.temp_SelectedFiltersVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TwdfbndR_E+V943mGOasuw", callContext.id);
// Execute Action: ResetData
controller._resetData$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sOoLlA7iSU+kXKl3vMN_cw", callContext.id);
// Execute Action: ResetPaginationSettings
controller._resetPaginationSettings$Action(true, callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f50lM2LXWUirDkAQvUlabA", callContext.id) && model.variables.isGuestViewVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eLVj1oyYAEyrryoosmbfpg", callContext.id);
// Execute Action: RefreshEventGuests
return controller._refreshEventGuests$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L_+BtdhhLEiZsxA7UCT1SQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pp1f76B5Wku24r5B54AKJg", callContext.id);
// Execute Action: RefreshEventHelpers
return controller._refreshEventHelpers$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L_+BtdhhLEiZsxA7UCT1SQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Y3hUlaA+x0aFMmHx8hQFHg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Y3hUlaA+x0aFMmHx8hQFHg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ClearAllFilters$vars", [{
name: "Temp_CurrentFilters",
attrName: "temp_CurrentFiltersVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.CurrentFiltersRec();
},
complexType: Connect2_OrbitMobile_MUIModel.CurrentFiltersRec
}, {
name: "Temp_SelectedFilters",
attrName: "temp_SelectedFiltersVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.SelectedFiltersRec();
},
complexType: Connect2_OrbitMobile_MUIModel.SelectedFiltersRec
}]);
Controller.prototype._refreshEventGuests$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshEventGuests");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:p09DmUsWykyxXnRh1_RlRA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.p09DmUsWykyxXnRh1_RlRA:kop8ks4YxrDxOAGHm2uxQw", "Connect2_OrbitMobile_MUI", "RefreshEventGuests", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IFd7R4PBCE+O_OXKJpqsbg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tgxwC2LNlUqIYKl9uE4Iyw", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nmYCOb6Akk+XSJnFIYH_ow", callContext.id);
// Refresh Query: Get_EventBookletGuests
var result = controller.get_EventBookletGuests$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9ZQZfSuzAEidZRYHLNnkXA", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_EventBooklet.RefreshEventGuests", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xTCo3lmFMkKah+mFHFpnPw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hPdlm9qBukqTL5uAkmo1QQ", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4PXPYaSw_0uT3VqLE4Xxjg", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p09DmUsWykyxXnRh1_RlRA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p09DmUsWykyxXnRh1_RlRA", callContext.id);
throw ex;

});
};
Controller.prototype._onScrollEnding_Guests$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnScrollEnding_Guests");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mKuquiQQa0SSFoBcMlCk1g:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.mKuquiQQa0SSFoBcMlCk1g:7AMop9rdUL7Kqgwirl6wrw", "Connect2_OrbitMobile_MUI", "OnScrollEnding_Guests", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WyjjXIv12kiqZuhHUjPLRA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Able to fetch?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:raJZMi0JJ02GmFppgg3dHg", callContext.id) && (model.variables.isGuestViewVar && !(model.variables.isFetchingDataVar)))) {
// Needs more records?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nu0IcvalYEWTtNhDult5rw", callContext.id) && (model.variables.lastFetchedGuestsVar.length >= (model.variables.paginationSettingsVar.guest_PageNumberAttr * model.variables.paginationSettingsVar.guest_MaxRowsAttr)))) {
// Last call had data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1V8_A+SkDUidzCVtuQXKzg", callContext.id) && (model.variables.get_EventBookletGuestsDataAct.isDataFetchedAttr && !(model.variables.get_EventBookletGuestsDataAct.responseOut.isEmpty)))) {
// Set Pagination Settings
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vaO1MW9EOEWcZy+f9QBTFA", callContext.id);
// PaginationSettings.Guest_PageNumber = PaginationSettings.Guest_PageNumber + 1
model.variables.paginationSettingsVar.guest_PageNumberAttr = (model.variables.paginationSettingsVar.guest_PageNumberAttr + 1);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vaO1MW9EOEWcZy+f9QBTFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PaginationSettings.Guest_IsNewSearch = False
model.variables.paginationSettingsVar.guest_IsNewSearchAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+wyPSuYetUWANGlrGGpm4w", callContext.id);
// Execute Action: RefreshEventGuests
return controller._refreshEventGuests$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fQ9QBdg+CEWr9oUK6K5dJg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2bUGFSD3SU6Zzk+k2TqMuA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WTazGmRUXk6D_ICgf82haw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vn29n63KZE+FdVHPeGPg_A", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mKuquiQQa0SSFoBcMlCk1g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mKuquiQQa0SSFoBcMlCk1g", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_SelectedFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_SelectedFilters");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8aiPvNPBR0qf6YPmCgJrgQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.8aiPvNPBR0qf6YPmCgJrgQ:5_SrMqTS4JrXqNMtSPVmIw", "Connect2_OrbitMobile_MUI", "OnClick_SelectedFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RKx_CyzoC0mQ6cXBVU137w", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oDbjDQQGx0+j+smEr6+YhA", callContext.id);
// Execute Action: ToggleSearchMode
controller._toggleSearchMode$Action(true, false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e3BgtwD1VE66OgZyl4cVCg", callContext.id);
// Execute Action: ToggleFiltersPopUp
controller._toggleFiltersPopUp$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EggliavIO0OPcA3j2oijfg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8aiPvNPBR0qf6YPmCgJrgQ", callContext.id);
}

};
Controller.prototype._onAfterFetch_GetEventBookletGuests$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetEventBookletGuests");
callContext = controller.callContext(callContext);
var listFilterGuestsHostLocalityVar = new OS.DataTypes.VariableHolder();
var groupMembersByCountry_InvitedGuestsVar = new OS.DataTypes.VariableHolder();
var groupMembersByCountryVar = new OS.DataTypes.VariableHolder();
var listFilterGuestInvitedLocalityVar = new OS.DataTypes.VariableHolder();
var groupMembersByCountry_HostingLocalityVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilterGuestsHostLocalityVar = listFilterGuestsHostLocalityVar;
varBag.groupMembersByCountry_InvitedGuestsVar = groupMembersByCountry_InvitedGuestsVar;
varBag.groupMembersByCountryVar = groupMembersByCountryVar;
varBag.listFilterGuestInvitedLocalityVar = listFilterGuestInvitedLocalityVar;
varBag.groupMembersByCountry_HostingLocalityVar = groupMembersByCountry_HostingLocalityVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KO9o0TyFx02aPhV5PCCIlA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.KO9o0TyFx02aPhV5PCCIlA:w7dC1O32aM7Y0S7RZ+d5AA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventBookletGuests", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vuNGp+LUXE6tgj9jJSU1Jg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bNFTrfrQ_kuWqVpVk74tKA", callContext.id);
// Execute Action: ListAppendAll_NewGuests
OS.SystemActions.listAppendAll(model.variables.lastFetchedGuestsVar, model.variables.get_EventBookletGuestsDataAct.responseOut, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6wGd7dWz3ke6AyzqHR2zpQ", callContext.id);
// Execute Action: ListFilterGuestInvitedLocality
listFilterGuestInvitedLocalityVar.value = OS.SystemActions.listFilter(model.variables.get_EventBookletGuestsDataAct.responseOut, function (p) {
return !(p.isHostLocalityAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bg7oC8TtCU2PX+2F_ZZx1Q", callContext.id);
// Execute Action: ListAppendAll_GuestInvitedLocality
OS.SystemActions.listAppendAll(model.variables.lastFetched_Guests_InvitedLocalityVar, listFilterGuestInvitedLocalityVar.value.filteredListOut, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IHW9NX1vuUqwbZSpkf4ejw", callContext.id);
// Execute Action: GroupMembersByCountry_InvitedGuests
groupMembersByCountry_InvitedGuestsVar.value = Connect2_OrbitMobile_MUIController.default.groupMembersByCountry$Action(model.variables.lastFetched_Guests_InvitedLocalityVar, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KLLxJIJ5o0O1a6DMMjMTcQ", callContext.id);
// Execute Action: ListFilterGuestsHostLocality
listFilterGuestsHostLocalityVar.value = OS.SystemActions.listFilter(model.variables.get_EventBookletGuestsDataAct.responseOut, function (p) {
return p.isHostLocalityAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q7sr_7f_H0GiFaz3O_6Uyg", callContext.id);
// Execute Action: ListAppendAll_GuestsHostLocality
OS.SystemActions.listAppendAll(model.variables.lastFetched_Guests_HostLocalityVar, listFilterGuestsHostLocalityVar.value.filteredListOut, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_z+U8tKut0CIxREXwyemWw", callContext.id);
// Execute Action: GroupMembersByCountry_HostingLocality
groupMembersByCountry_HostingLocalityVar.value = Connect2_OrbitMobile_MUIController.default.groupMembersByCountry$Action(model.variables.lastFetched_Guests_HostLocalityVar, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:frTYlkVZNkypjQWzD+90kg", callContext.id);
// Execute Action: GroupMembersByCountry
groupMembersByCountryVar.value = Connect2_OrbitMobile_MUIController.default.groupMembersByCountry$Action(model.variables.lastFetchedGuestsVar, callContext);

// Set Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rQH7+8TJAEK9FEZCRPkBGw", callContext.id);
// Guests = GroupMembersByCountry.MembersByLocality
model.variables.guestsVar = groupMembersByCountryVar.value.membersByLocalityOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rQH7+8TJAEK9FEZCRPkBGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Guests_InvitedList = GroupMembersByCountry_InvitedGuests.MembersByLocality
model.variables.guests_InvitedListVar = groupMembersByCountry_InvitedGuestsVar.value.membersByLocalityOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rQH7+8TJAEK9FEZCRPkBGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Guests_HostingList = GroupMembersByCountry_HostingLocality.MembersByLocality
model.variables.guests_HostingListVar = groupMembersByCountry_HostingLocalityVar.value.membersByLocalityOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rQH7+8TJAEK9FEZCRPkBGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PaginationSettings.Guest_NoResults = Guests.Empty
model.variables.paginationSettingsVar.guest_NoResultsAttr = model.variables.guestsVar.isEmpty;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rQH7+8TJAEK9FEZCRPkBGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// PaginationSettings.Guest_IsNewSearch = False
model.variables.paginationSettingsVar.guest_IsNewSearchAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rQH7+8TJAEK9FEZCRPkBGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// LastFilters_Guest = SelectedFilters
model.variables.lastFilters_GuestVar = model.variables.selectedFiltersVar;
// Set Filtering
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:___CJEdG5EytRSGV7oHXtg", callContext.id);
// HasFiltersApplied = SelectedFilters.SearchTerm <> "" or CheckSelectedDates(SelectedFilters.DateRange) or notSelectedFilters.HelperRoles.Empty or notSelectedFilters.Countries.Empty or notSelectedFilters.Localities.Empty
model.variables.hasFiltersAppliedVar = ((((((model.variables.selectedFiltersVar.searchTermAttr) !== ("")) || OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.checkSelectedDates$Action(model.variables.selectedFiltersVar.dateRangeAttr, callContext).hasSelectedOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id)) || !(model.variables.selectedFiltersVar.helperRolesAttr.isEmpty)) || !(model.variables.selectedFiltersVar.countriesAttr.isEmpty)) || !(model.variables.selectedFiltersVar.localitiesAttr.isEmpty));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K8Ut7+aKWEKVLU54IuE27Q", callContext.id);
// Execute Action: SetCurrentView
controller._setCurrentView$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iwLUofvu7U2LZ+3r4qtD+w", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TyJC5MNCs0GGA6zxdcK+jQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KO9o0TyFx02aPhV5PCCIlA", callContext.id);
}

};
Controller.prototype._refreshEventFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshEventFilters");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1o7x0rU2x0+LRFODM8NlnA:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.1o7x0rU2x0+LRFODM8NlnA:9oKr6ergXzXZwOAGZ9VChg", "Connect2_OrbitMobile_MUI", "RefreshEventFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f97lOCnr602TsIRLKkDwmw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LL6LzYWVeU+aVeAE306QPQ", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ToJr9hnm3UeH7X28v32vvw", callContext.id);
// Refresh Query: Get_EventBookletFilters
var result = controller.get_EventBookletFilters$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dcd_3WVD6Uu+rCl+zHV5CA", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_EventBooklet.RefreshEventFilters", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v6Rkc7iY1keFg4oXg3EgAw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a4KfiVXAJUGhtQIYGgpEnw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aIFDUSEI2kaTyAky5PH1DQ", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1o7x0rU2x0+LRFODM8NlnA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1o7x0rU2x0+LRFODM8NlnA", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedMember");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ClickedMember$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.typeInLocal = typeIn;
var checkDirectoryAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkDirectoryAccessVar = checkDirectoryAccessVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fCtj49AkR0C_yAUcn9IByQ:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.fCtj49AkR0C_yAUcn9IByQ:jk_kZof+xCS90CPRydlH0Q", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JUx0eZZ7GUWK7N4nzTAqdw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pEHfWy5VwkeP0A_w8o_p7A", callContext.id) && model.variables.isFetchingDataVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cdUmB1y4YEmQBbTaqM5LRg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please wait until all data has finished loading", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9siYngAja0yBu9b8yxejtQ", callContext.id);
} else {
// Has Value?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5qk7kr1FxEOeixTx2Jz0Og", callContext.id) && !(vars.value.householdIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mOlWNXkLmUilpJoThGf1lA", callContext.id);
// Execute Action: CheckDirectoryAccess
model.flush();
return Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action(vars.value.householdIdInLocal, vars.value.typeInLocal, callContext).then(function (value) {
checkDirectoryAccessVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q3dFSTqHnE+D2rHGyfc24Q", callContext.id) && checkDirectoryAccessVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nhV4JGDwHU6YlZ34NCSBtA", callContext.id);
// Trigger Event: NavigateTo_HouseholdDetail
return controller.navigateTo_HouseholdDetail$Action(vars.value.householdIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9o6cYH7u7EeYrMYrKsyEZQ", callContext.id);
// Execute Action: OnApplicationEvent_ViewHousehold
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ViewHousehold$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec();
rec.targetHouseholdIdAttr = vars.value.householdIdInLocal;
rec.eventIdAttr = model.variables.eventInfoVar.eventIdAttr;
rec.eventTitleAttr = model.variables.eventInfoVar.eventNameAttr;
rec.eventLocationAttr = model.variables.eventInfoVar.eventLocationAttr;
return rec;
}(), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aVDnJG_HBUKG66+8AVqrzw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_5c4zMXpc0CcyekHGzHbiw", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IkJU2TkONkG3OjLGfrA_oA", callContext.id);
});
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6BOEzEYVG0+QRkwvUBuBrw", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fCtj49AkR0C_yAUcn9IByQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fCtj49AkR0C_yAUcn9IByQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.OnHandle_ClickedMember$vars", [{
name: "HouseholdId",
attrName: "householdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onAfterFetch_GetLocalHelperRoles$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetLocalHelperRoles");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Uabh9QPpaEqYXBMKvRCBDg:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.Uabh9QPpaEqYXBMKvRCBDg:YULjQrSiyhojuYUn2z_79w", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetLocalHelperRoles", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D8IVS2rJ40i01cvGu2qjIg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ReVyT1aaF0u+Zzj4ofI8NQ", callContext.id);
// LocalHelperRoles = GetLocalHelperRoles.List
model.variables.localHelperRolesVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalHelperRolesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList(), function (source, target) {
target = source.localHelperRoleAttr;
return target;
});
// Fisnished fetching?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:caEO7+y4lE++gaMwPvr_Mw", callContext.id) && ((model.variables.isGuestViewVar) ? (((model.variables.get_EventBookletGuestsDataAct.isDataFetchedAttr) ? (true) : (false))) : (((model.variables.get_EventBookletHelpersDataAct.isDataFetchedAttr) ? (true) : (false)))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pgMJdKjJOE+8AcJp3_l4KA", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xGUIRtJjKUSPwyR4hosgxw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R1ZleoU_PEWjjkdEhaeGDg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Uabh9QPpaEqYXBMKvRCBDg", callContext.id);
}

};
Controller.prototype._resetData$Action = function (isClearAllIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ResetData");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ResetData$vars"))());
vars.value.isClearAllInLocal = isClearAllIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cdmB9qSOsEOiDfWFiDQ7sg:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.cdmB9qSOsEOiDfWFiDQ7sg:gqdk1iF9qEw7iw4GfBtvXA", "Connect2_OrbitMobile_MUI", "ResetData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ug_azSTQXkCf0HAuZfR+yg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HHHbLE0r30KH2FVgjjRMdw", callContext.id) && vars.value.isClearAllInLocal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+9Ipfo1_MU+X2mvfGbPNhw", callContext.id);
// Execute Action: ListClear_AllGuests
OS.SystemActions.listClear(model.variables.guestsVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fB0chm9_RUSC7CqP478WpQ", callContext.id);
// Execute Action: ListClear_AllLastFetchedGuests
OS.SystemActions.listClear(model.variables.lastFetchedGuestsVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pSBAFRVxR0uPNxpXW+a+Ww", callContext.id);
// Execute Action: ListClear_AllHelpers
OS.SystemActions.listClear(model.variables.helpersVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g94K+voDAUKM_nqJnsDwWQ", callContext.id);
// Execute Action: ListClear_AllLastFetchedHelpers
OS.SystemActions.listClear(model.variables.lastFetchedHelpersVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g7i16AmhYkyz98AXtkZZug", callContext.id);
// Execute Action: ListClear_InvitedList2
OS.SystemActions.listClear(model.variables.guests_InvitedListVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XUr6TqNrBU2C+ofI_gv3EA", callContext.id);
// Execute Action: ListClear_LastFetch_GuestsInvited2
OS.SystemActions.listClear(model.variables.lastFetched_Guests_InvitedLocalityVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c3mwUVK0T0eE5D4__QoZRQ", callContext.id);
// Execute Action: ListClearHostLocalityGuestList2
OS.SystemActions.listClear(model.variables.guests_HostingListVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5Qdme+3wlUKmiNoXRc8igw", callContext.id);
// Execute Action: ListClearLastFetchedGuestHostLocality2
OS.SystemActions.listClear(model.variables.lastFetched_Guests_HostLocalityVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TtrRBjpLqkq7qoSfiEk9Vw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FjJxdxZdl0yj4ClM14QPqg", callContext.id) && model.variables.isGuestViewVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4o034BQGW0y0BK9Yn7NuPA", callContext.id);
// Execute Action: ListClear_Guests
OS.SystemActions.listClear(model.variables.guestsVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H_ztXDGuhEybA4EW4TyTVg", callContext.id);
// Execute Action: ListClear_LastFetchedGuests
OS.SystemActions.listClear(model.variables.lastFetchedGuestsVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UISM_fxjl0OARjA8Ad9l1g", callContext.id);
// Execute Action: ListClear_InvitedList
OS.SystemActions.listClear(model.variables.guests_InvitedListVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UorloREw0kahT2SE7Gb1Gw", callContext.id);
// Execute Action: ListClear_LastFetch_GuestsInvited
OS.SystemActions.listClear(model.variables.lastFetched_Guests_InvitedLocalityVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t8ZyyWvqA0KbUHn2l63e5A", callContext.id);
// Execute Action: ListClearHostLocalityGuestList
OS.SystemActions.listClear(model.variables.guests_HostingListVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bkEZfVaLzES727fwTxBmcA", callContext.id);
// Execute Action: ListClearLastFetchedGuestHostLocality
OS.SystemActions.listClear(model.variables.lastFetched_Guests_HostLocalityVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K3zHaRNdbk2_+9M4su4dCw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_47RXK1OuUOw+NZDjq+Rsw", callContext.id);
// Execute Action: ListClear_Helpers
OS.SystemActions.listClear(model.variables.helpersVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EkstFv4Xt0qWaMoUZ6i1_w", callContext.id);
// Execute Action: ListClear_LastFetchedHelpers
OS.SystemActions.listClear(model.variables.lastFetchedHelpersVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K3zHaRNdbk2_+9M4su4dCw", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cdmB9qSOsEOiDfWFiDQ7sg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.ResetData$vars", [{
name: "IsClearAll",
attrName: "isClearAllInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onAfterFetch_GetEventBookletHelpers$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetEventBookletHelpers");
callContext = controller.callContext(callContext);
var groupHelpersByRoleVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.groupHelpersByRoleVar = groupHelpersByRoleVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:31TT+9bhEEyXs1MJaZr5tw:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw/ClientActions.31TT+9bhEEyXs1MJaZr5tw:RgfYhWMcizt7GN+RzsnzUg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventBookletHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gffrafGYlkqZ4mx0ugzM2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LQ0WaROLTEez0kz3UGkoYg", callContext.id);
// Execute Action: ListAppendAll_NewHelpers
OS.SystemActions.listAppendAll(model.variables.lastFetchedHelpersVar, model.variables.get_EventBookletHelpersDataAct.responseOut, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qD1ctE9EiEWoj6QkzTMwjQ", callContext.id);
// Execute Action: GroupHelpersByRole
groupHelpersByRoleVar.value = Connect2_OrbitMobile_MUIController.default.groupHelpersByRole$Action(model.variables.lastFetchedHelpersVar, callContext);

// Set Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2I+Mi8lL7EW8tQQCBPbYTw", callContext.id);
// Helpers = GroupHelpersByRole.HelpersByRole
model.variables.helpersVar = groupHelpersByRoleVar.value.helpersByRoleOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2I+Mi8lL7EW8tQQCBPbYTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PaginationSettings.Helper_NoResults = Helpers.Empty
model.variables.paginationSettingsVar.helper_NoResultsAttr = model.variables.helpersVar.isEmpty;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2I+Mi8lL7EW8tQQCBPbYTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PaginationSettings.Helper_IsNewSearch = False
model.variables.paginationSettingsVar.helper_IsNewSearchAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2I+Mi8lL7EW8tQQCBPbYTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LastFilters_Helpers = SelectedFilters
model.variables.lastFilters_HelpersVar = model.variables.selectedFiltersVar;
// Set Filtering
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F7yG_+Rxc0GE+Nt9YGAV2A", callContext.id);
// HasFiltersApplied = SelectedFilters.SearchTerm <> "" or CheckSelectedDates(SelectedFilters.DateRange) or notSelectedFilters.HelperRoles.Empty or notSelectedFilters.Countries.Empty or notSelectedFilters.Localities.Empty
model.variables.hasFiltersAppliedVar = ((((((model.variables.selectedFiltersVar.searchTermAttr) !== ("")) || OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.checkSelectedDates$Action(model.variables.selectedFiltersVar.dateRangeAttr, callContext).hasSelectedOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id)) || !(model.variables.selectedFiltersVar.helperRolesAttr.isEmpty)) || !(model.variables.selectedFiltersVar.countriesAttr.isEmpty)) || !(model.variables.selectedFiltersVar.localitiesAttr.isEmpty));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KHJB8l5dz0asQrWB5WRNFg", callContext.id);
// Execute Action: SetCurrentView
controller._setCurrentView$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7p4aEdUMK0u0qWSE1ScdCw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DFMMI1jqQU2TKjzYZ8wchA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:31TT+9bhEEyXs1MJaZr5tw", callContext.id);
}

};

Controller.prototype.onAfterFetch_GetEventBookletFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventBookletFilters$Action, callContext);

};
Controller.prototype.refreshEventHelpers$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshEventHelpers$Action, callContext);

};
Controller.prototype.onHandle_ApplyFilters$Action = function (event_SelectedFiltersIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ApplyFilters$Action, callContext, event_SelectedFiltersIn);

};
Controller.prototype.onClick_ViewSwap$Action = function (isGuestButtonIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ViewSwap$Action, callContext, isGuestButtonIn);

};
Controller.prototype.toggleSearchMode$Action = function (forceSearchModeIn, forceBlurOnInputIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleSearchMode$Action, callContext, forceSearchModeIn, forceBlurOnInputIn);

};
Controller.prototype.setCurrentView$Action = function (setGuestViewIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setCurrentView$Action, callContext, setGuestViewIn);

};
Controller.prototype.onScrollEnding_Helpers$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onScrollEnding_Helpers$Action, callContext);

};
Controller.prototype.resetPaginationSettings$Action = function (isClearAllIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._resetPaginationSettings$Action, callContext, isClearAllIn);

};
Controller.prototype.onHandle_ComponentDidMount$Action = function (in_ListIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ComponentDidMount$Action, callContext, in_ListIdIn);

};
Controller.prototype.onClick_ClearSearch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ClearSearch$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onKeyUp_SearchTerm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyUp_SearchTerm$Action, callContext);

};
Controller.prototype.toggleFiltersPopUp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleFiltersPopUp$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.refreshHelperRoles$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshHelperRoles$Action, callContext);

};
Controller.prototype.onHandle_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_BackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.clearAllFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._clearAllFilters$Action, callContext);

};
Controller.prototype.refreshEventGuests$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshEventGuests$Action, callContext);

};
Controller.prototype.onScrollEnding_Guests$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onScrollEnding_Guests$Action, callContext);

};
Controller.prototype.onClick_SelectedFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_SelectedFilters$Action, callContext);

};
Controller.prototype.onAfterFetch_GetEventBookletGuests$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventBookletGuests$Action, callContext);

};
Controller.prototype.refreshEventFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshEventFilters$Action, callContext);

};
Controller.prototype.onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMember$Action, callContext, householdIdIn, typeIn);

};
Controller.prototype.onAfterFetch_GetLocalHelperRoles$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalHelperRoles$Action, callContext);

};
Controller.prototype.resetData$Action = function (isClearAllIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._resetData$Action, callContext, isClearAllIn);

};
Controller.prototype.onAfterFetch_GetEventBookletHelpers$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventBookletHelpers$Action, callContext);

};
Controller.prototype.navigateTo_HouseholdDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:DGumZ33WfkO_jSTMQDHe0A:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A:+eTYkIptdIRG_aoeDHzoJQ", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_EventBooklet", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wGHdhgDFJEaIOizoSLFUHw:/NRWebFlows.DGumZ33WfkO_jSTMQDHe0A/NodesShownInESpaceTree.wGHdhgDFJEaIOizoSLFUHw:TBIXWwgj5+AKZGLDK2pglQ", "Connect2_OrbitMobile_MUI", "ScreenBlock_EventBooklet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wGHdhgDFJEaIOizoSLFUHw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DGumZ33WfkO_jSTMQDHe0A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_EventBooklet/ScreenBlock_EventBooklet On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnHandle_ComponentDidMount.DetermineIfNeedsNewFetchJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let listToCheck = document.getElementById($parameters.ListId);
let contentCont = document.querySelector(".content");
if(listToCheck && contentCont){
    if(listToCheck.clientHeight > 0 && listToCheck.clientHeight < contentCont.clientHeight && $parameters.PageNumber == 1){
        $parameters.NeedsFetch = true;
    }else{
        $parameters.NeedsFetch = false;
    }
}else{
    $parameters.NeedsFetch = false;
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnKeyUp_SearchTerm.CheckForEnterKeyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(event.keyCode == 13){
    $parameters.IsEnterKey = true;
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.RefreshEventGuests_AsyncJS", [], function () {
return function ($actions, $roles, $public) {
window.setTimeout($actions.RefreshEventGuests,0);
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.RefreshEventFilters_AsyncJS", [], function () {
return function ($actions, $roles, $public) {
window.setTimeout($actions.RefreshEventFilters,0);
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.RefreshHelperRoles_AsyncJS", [], function () {
return function ($actions, $roles, $public) {
window.setTimeout($actions.RefreshHelperRoles,0);
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_EventBooklet.ScreenBlock_EventBooklet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"KYYHluIJzEKuWjodx7gTIw": {
getter: function (varBag, idService) {
return varBag.vars.value.helperRoleVar;
}
},
"FKjTPFkDZkqdrnXzLId_fA": {
getter: function (varBag, idService) {
return varBag.vars.value.countryVar;
}
},
"UOw0j2BE_kCnLiGkNgOt+g": {
getter: function (varBag, idService) {
return varBag.vars.value.localityVar;
}
},
"BbbxJ6G0l0O7SSkZye3k4g": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"hjumLYIsJEKetgaHErcPCw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SelectedFiltersInLocal;
}
},
"lOb0J0Zc+UynXFpSYx1bug": {
getter: function (varBag, idService) {
return varBag.listFilter_SelectedDatesVar.value;
}
},
"lyOvnD03WECD1G+Ds0daWg": {
getter: function (varBag, idService) {
return varBag.vars.value.isGuestButtonInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gTqUfRM4ikOXySfUdufNrw": {
getter: function (varBag, idService) {
return varBag.vars.value.forceSearchModeInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"AAMMyDnaM06cBcYlp8QxeA": {
getter: function (varBag, idService) {
return varBag.vars.value.forceBlurOnInputInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"heG7aT39dUi2RcwtVj+oVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.setGuestViewInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8BhyJ7bzeUSMM0_ebP2JqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isClearAllInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9kiVgq1Y90+3Nx_EP0e2fg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ListIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TodagzigT0qbBYn+2oi7UQ": {
getter: function (varBag, idService) {
return varBag.determineIfNeedsNewFetchJSResult.value;
}
},
"E1BTd+X1P0WMOi8qCSIU8A": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"422XwEO+vUS35YO8RMIo3A": {
getter: function (varBag, idService) {
return varBag.checkForEnterKeyJSResult.value;
}
},
"xIzQJPh6iEqWbHxBYo7c4g": {
getter: function (varBag, idService) {
return varBag.refreshEventGuests_AsyncJSResult.value;
}
},
"Woc6e0+GNUCDoURkp3GUEw": {
getter: function (varBag, idService) {
return varBag.refreshEventFilters_AsyncJSResult.value;
}
},
"5F1BmyDyik2suIATHoLMZg": {
getter: function (varBag, idService) {
return varBag.refreshHelperRoles_AsyncJSResult.value;
}
},
"boRl_n1Bbkqzf3eF2wFRfQ": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"pQ6uOuLjc0+aPsdMiAO0hw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"yyDh316GfECyu7FxqEXxyw": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"uxh+_35s9kS_OcXbWJ1LoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.temp_CurrentFiltersVar;
}
},
"zHLa7wWpHkWw7oFs2ztcxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.temp_SelectedFiltersVar;
}
},
"xTCo3lmFMkKah+mFHFpnPw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"KLLxJIJ5o0O1a6DMMjMTcQ": {
getter: function (varBag, idService) {
return varBag.listFilterGuestsHostLocalityVar.value;
}
},
"IHW9NX1vuUqwbZSpkf4ejw": {
getter: function (varBag, idService) {
return varBag.groupMembersByCountry_InvitedGuestsVar.value;
}
},
"frTYlkVZNkypjQWzD+90kg": {
getter: function (varBag, idService) {
return varBag.groupMembersByCountryVar.value;
}
},
"6wGd7dWz3ke6AyzqHR2zpQ": {
getter: function (varBag, idService) {
return varBag.listFilterGuestInvitedLocalityVar.value;
}
},
"_z+U8tKut0CIxREXwyemWw": {
getter: function (varBag, idService) {
return varBag.groupMembersByCountry_HostingLocalityVar.value;
}
},
"v6Rkc7iY1keFg4oXg3EgAw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"0dJvwu8XeEyQPoP1RFAoqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"844A4XgiNEmYSRY5DW_fKg": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mOlWNXkLmUilpJoThGf1lA": {
getter: function (varBag, idService) {
return varBag.checkDirectoryAccessVar.value;
}
},
"48LxRQhp+U+nC+XrraXI0g": {
getter: function (varBag, idService) {
return varBag.vars.value.isClearAllInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qD1ctE9EiEWoj6QkzTMwjQ": {
getter: function (varBag, idService) {
return varBag.groupHelpersByRoleVar.value;
}
},
"_EedxyLinUqMwv8i0+lqVQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"E1Y9Tarc3ESoYfTXapG1Gw": {
getter: function (varBag, idService) {
return varBag.model.variables.eventInfoVar;
}
},
"BRz7LXPvbkawDRXElufKwA": {
getter: function (varBag, idService) {
return varBag.model.variables.availableFiltersVar;
}
},
"Nt1ig4Oxzk2OVQQpM65TZw": {
getter: function (varBag, idService) {
return varBag.model.variables.currentFiltersVar;
}
},
"lzJCoTLTeUa4l_1wyJQr8Q": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedFiltersVar;
}
},
"hnhmT4XtWEeLaa2ERdCPng": {
getter: function (varBag, idService) {
return varBag.model.variables.guestsVar;
}
},
"VEIU7F+lSEudPEvxJHruDQ": {
getter: function (varBag, idService) {
return varBag.model.variables.guests_InvitedListVar;
}
},
"j5BI+2dhO0SroVlkQiPL8w": {
getter: function (varBag, idService) {
return varBag.model.variables.guests_HostingListVar;
}
},
"6X2ABNyi7U2iNyCxg8W3ig": {
getter: function (varBag, idService) {
return varBag.model.variables.helpersVar;
}
},
"u9kdLQxpbkSTwmpZ2J8lQg": {
getter: function (varBag, idService) {
return varBag.model.variables.isSearchModeVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2vs2YTg4lUS2nWGiCeDAng": {
getter: function (varBag, idService) {
return varBag.model.variables.filtersPopUpVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vzRLPlZIjUOyyUpk4wi6VA": {
getter: function (varBag, idService) {
return varBag.model.variables.localHelperRolesVar;
}
},
"70H5LSpwUkmKDi8XzyO3RA": {
getter: function (varBag, idService) {
return varBag.model.variables.isGuestViewVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BPLUs3FhiEO3YhwtDQnd_g": {
getter: function (varBag, idService) {
return varBag.model.variables.hasFiltersAppliedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"b0bPtZWZz0i5rX4yo8NN0w": {
getter: function (varBag, idService) {
return varBag.model.variables.lastFetchedGuestsVar;
}
},
"OgTY4Sc0OUapTnJzXVCK6Q": {
getter: function (varBag, idService) {
return varBag.model.variables.lastFetchedHelpersVar;
}
},
"zePeW41v20C8O54v5p7XGg": {
getter: function (varBag, idService) {
return varBag.model.variables.paginationSettingsVar;
}
},
"as+E4aQl80m5E0h3qe70Lw": {
getter: function (varBag, idService) {
return varBag.model.variables.lastFilters_GuestVar;
}
},
"SdrkVVUo2U6qoujIJxWKxQ": {
getter: function (varBag, idService) {
return varBag.model.variables.lastFilters_HelpersVar;
}
},
"kMSAAFpUM0WK3Rf3hEEmBw": {
getter: function (varBag, idService) {
return varBag.model.variables.lastFetched_Guests_InvitedLocalityVar;
}
},
"H+HsbpcAYkiqiIRWLsTCKg": {
getter: function (varBag, idService) {
return varBag.model.variables.lastFetched_Guests_HostLocalityVar;
}
},
"79bmisfcB06CnF6_XNzcSg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"AkUc+mbVaUq23em3YcRoWw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ys99hTxJOE228YFJz0oANQ": {
getter: function (varBag, idService) {
return varBag.model.variables.get_EventBookletHelpersDataAct;
}
},
"h661xY5P+0KoR+An_W3hDA": {
getter: function (varBag, idService) {
return varBag.model.variables.get_EventBookletFiltersDataAct;
}
},
"j+w9+ULD0EWN6KHw+4zpJA": {
getter: function (varBag, idService) {
return varBag.model.variables.get_EventBookletGuestsDataAct;
}
},
"8ifbg_1QYEqY426wdRF+bg": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalHelperRolesAggr;
}
},
"eP9+kAzVuEakqm94UnMQhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"VkF49xBOB0SFG0QKFj7fUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"3BY0l5j6XUm3yaJmCN1RwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"MY3SPCSyAEevPkG+4ofSoQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"gz+g6pCQxUeX_MgG+Ctx_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsSearchMode_Header"));
})(varBag.model, idService);
}
},
"YyAyOrDhAEqHACJNCDZmlQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"LHrGzkDEXkizTF9U5Nkocg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"k2+vrTjE8EaVRlMUAQxYyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"0cznAAxS70CTKp+3_qGJfA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"YjZw15NbXES9oGu+oYQVyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_SearchTerm"));
})(varBag.model, idService);
}
},
"AAyiQ3Eph0SoqUeb8OAB1w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"JlAxZSk0ZEaRs4m5pqeI4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"BowcXI_DOEqqaQIaL0CfyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFiltersApplied"));
})(varBag.model, idService);
}
},
"1IglDode4UCH4OI38bRaHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Left"));
})(varBag.model, idService);
}
},
"I1vQILBSp06x9VTV8RIukg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Right"));
})(varBag.model, idService);
}
},
"H0jTRH+Hn0ujhKgtmuEmBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"bguLsxMXBUqiZxvJFfOcQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsGuestView"));
})(varBag.model, idService);
}
},
"jDWE5gzVgUie5TVhZNPteg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsFetchingDataAndNewSearch_Guest"));
})(varBag.model, idService);
}
},
"wxpG4U4EQU6nhj2LF3TXjQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"ouCsSiK+j0CV_5NfZSF8xQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_NotNewSearch_Guest"));
})(varBag.model, idService);
}
},
"zgvZqegtOkS_2KJccRNejw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_NoResultsFound_Guest"));
})(varBag.model, idService);
}
},
"ZMnYXF3f0UWCM4DFfR4HGA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"We+4vNqQYkez5LVfZ+rgTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Message"));
})(varBag.model, idService);
}
},
"5MsPEonpGkub3z0IOk2qmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"E4rYIHk2Mku9bBMUSXUdyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("InviteList"));
})(varBag.model, idService);
}
},
"SHDTqFyh1ke1bzOefletqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_Guests_InvitedLocality"));
})(varBag.model, idService);
}
},
"tGELjw0ms0mGQsop3j_xJA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HostList"));
})(varBag.model, idService);
}
},
"0YvJrUI3vkOfcK0ByEC93A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_Guests_HostingLocality"));
})(varBag.model, idService);
}
},
"IHUgxJAWYE2CGcloh4wfGw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsFetchingData_Guest"));
})(varBag.model, idService);
}
},
"sATShRVq1ka+9cayh2SXQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsHelperView"));
})(varBag.model, idService);
}
},
"czZoepOHmkqqg8kGrV8VpQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsFetchingDataAndNewSearch_Helper"));
})(varBag.model, idService);
}
},
"L8wuzt3KKEG00ihFfcN7VA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"y7YFhZ3CukWkVV6cwKa9qg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_NotNewSearch_Helper"));
})(varBag.model, idService);
}
},
"nN+MI9R+_0ePv7EhgCmk2g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_NoResultsFound_Helper"));
})(varBag.model, idService);
}
},
"Q05kTEB1bUm4UIC6wKLdLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"Xa7+SKqoR02P0dIzrBKiTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Message"));
})(varBag.model, idService);
}
},
"F6a034ITjU20ecaq4dRx6g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_Helpers"));
})(varBag.model, idService);
}
},
"1fAceahL6kOczzV89xR+ng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"iDRQD5s4UkeE39838Cl6ug": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsFetchingData_Helper"));
})(varBag.model, idService);
}
},
"5ZQfm7C_S0OzBfP5K5gNNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"em9ETuGKI0ya3E6zipgH3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"w1GS39pDSEqEQQwYS8O2cQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"6zqVUocyZ06LvIwfURrtiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
