define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$AccommodationGuestRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_BL.model$GetAccommodationGuest_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel) {
var OS = OutSystems.Internal;

var GetAccommodationGuestDataActRec = (function (_super) {
__extends(GetAccommodationGuestDataActRec, _super);
function GetAccommodationGuestDataActRec(defaults) {
_super.apply(this, arguments);
}
GetAccommodationGuestDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetAccommodationGuest_ScreenRec());
}, true, Connect2_OrbitMobile_BLModel.GetAccommodationGuest_ScreenRec), 
this.attr("HasData", "hasDataOut", "HasData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAccommodationGuestDataActRec.init();
return GetAccommodationGuestDataActRec;
})(OS.Model.DataSourceRecord);
var GetCaptionsDataActRec = (function (_super) {
__extends(GetCaptionsDataActRec, _super);
function GetCaptionsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetCaptionsDataActRec.attributesToDeclare = function () {
return [
this.attr("Success", "successOut", "Success", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PhotobookCaption", "photobookCaptionOut", "PhotobookCaption", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetCaptionsDataActRec.init();
return GetCaptionsDataActRec;
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
this.attr("AccommodationData", "accommodationDataVar", "AccommodationData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.AccommodationGuestRec());
}, false, Connect2_OrbitMobile_ISModel.AccommodationGuestRec), 
this.attr("IsFetchingPhoneData", "isFetchingPhoneDataVar", "IsFetchingPhoneData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HouseholdCaptions", "householdCaptionsVar", "HouseholdCaptions", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsFetchingCaptionData", "isFetchingCaptionDataVar", "IsFetchingCaptionData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ContactByPhoneData", "contactByPhoneDataVar", "ContactByPhoneData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
}, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec), 
this.attr("ContactByMessagePopupData", "contactByMessagePopupDataVar", "ContactByMessagePopupData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord());
}, false, Connect2_OrbitMobile_MUIModel.UI_ContactByMessage_WrapperDataTextRecord), 
this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostId", "in_HostIdIn", "In_HostId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_PreloadEventName", "in_PreloadEventNameIn", "In_PreloadEventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_PreloadEventNameInDataFetchStatus", "_in_PreloadEventNameInDataFetchStatus", "_in_PreloadEventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_PreloadMilestoneName", "in_PreloadMilestoneNameIn", "In_PreloadMilestoneName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_PreloadMilestoneNameInDataFetchStatus", "_in_PreloadMilestoneNameInDataFetchStatus", "_in_PreloadMilestoneNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_OrbitMilestoneTypeId", "in_OrbitMilestoneTypeIdIn", "In_OrbitMilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetAccommodationGuest", "getAccommodationGuestDataAct", "getAccommodationGuestDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetAccommodationGuestDataActRec());
}, true, GetAccommodationGuestDataActRec), 
this.attr("GetCaptions", "getCaptionsDataAct", "getCaptionsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCaptionsDataActRec());
}, true, GetCaptionsDataActRec)
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
return {};
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ((((((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = inputs.In_MilestoneId;
if("_in_MilestoneIdInDataFetchStatus" in inputs) {
this.variables._in_MilestoneIdInDataFetchStatus = inputs._in_MilestoneIdInDataFetchStatus;
}

}

if("In_EventId" in inputs) {
this.variables.in_EventIdIn = inputs.In_EventId;
if("_in_EventIdInDataFetchStatus" in inputs) {
this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
}

}

if("In_HostId" in inputs) {
this.variables.in_HostIdIn = inputs.In_HostId;
if("_in_HostIdInDataFetchStatus" in inputs) {
this.variables._in_HostIdInDataFetchStatus = inputs._in_HostIdInDataFetchStatus;
}

}

if("In_PreloadEventName" in inputs) {
this.variables.in_PreloadEventNameIn = inputs.In_PreloadEventName;
if("_in_PreloadEventNameInDataFetchStatus" in inputs) {
this.variables._in_PreloadEventNameInDataFetchStatus = inputs._in_PreloadEventNameInDataFetchStatus;
}

}

if("In_PreloadMilestoneName" in inputs) {
this.variables.in_PreloadMilestoneNameIn = inputs.In_PreloadMilestoneName;
if("_in_PreloadMilestoneNameInDataFetchStatus" in inputs) {
this.variables._in_PreloadMilestoneNameInDataFetchStatus = inputs._in_PreloadMilestoneNameInDataFetchStatus;
}

}

if("In_OrbitMilestoneTypeId" in inputs) {
this.variables.in_OrbitMilestoneTypeIdIn = inputs.In_OrbitMilestoneTypeId;
if("_in_OrbitMilestoneTypeIdInDataFetchStatus" in inputs) {
this.variables._in_OrbitMilestoneTypeIdInDataFetchStatus = inputs._in_OrbitMilestoneTypeIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$AccommodationGuestRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_BL.model$GetAccommodationGuest_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_controller;
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
CustomClass: "orbit-detail"
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
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, {
inputs: {
In_MilestoneName: model.getCachedValue(idService.getId("56fmGcOEtkirl0VL3BfcRA.In_MilestoneName"), function () {
return ((((model.variables.accommodationDataVar.milestoneTitleAttr) !== (""))) ? (model.variables.accommodationDataVar.milestoneTitleAttr) : (model.variables.in_PreloadMilestoneNameIn));
}, function () {
return model.variables.accommodationDataVar.milestoneTitleAttr;
}, function () {
return model.variables.in_PreloadMilestoneNameIn;
}),
_in_MilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadMilestoneNameInDataFetchStatus),
In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
In_EventName: model.getCachedValue(idService.getId("56fmGcOEtkirl0VL3BfcRA.In_EventName"), function () {
return ((((model.variables.accommodationDataVar.eventDetailsAttr.nameAttr) !== (""))) ? (model.variables.accommodationDataVar.eventDetailsAttr.nameAttr) : (model.variables.in_PreloadEventNameIn));
}, function () {
return model.variables.accommodationDataVar.eventDetailsAttr.nameAttr;
}, function () {
return model.variables.in_PreloadEventNameIn;
}),
_in_EventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadEventNameInDataFetchStatus)
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
_dependencies: []
})];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if((model.variables.getAccommodationGuestDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [$if(model.variables.getAccommodationGuestDataAct.hasDataOut, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, {
inputs: {
Captions: model.variables.householdCaptionsVar,
HostInformation: model.variables.accommodationDataVar.hostInformationAttr,
IsFetchingCaptions: model.variables.isFetchingCaptionDataVar,
In_MilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_MilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
MilestoneDateTime: model.variables.accommodationDataVar.milestoneDateTimeAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked_PhoneNumber$Action: function (phoneNumberIn, callNameIn, localityIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostInformation Clicked_PhoneNumber");
return controller.onHandle_ClickedHostPhone$Action(phoneNumberIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
navigateTo_HostProfile$Action: function (event_HouseholdIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostInformation NavigateTo_HostProfile");
return controller.onHandle_ClickedMember$Action(event_HouseholdIdIn, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
navigateTo_EmailHost$Action: function (hostNameIn, hostEmailIn, formattedDateTimeIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostInformation NavigateTo_EmailHost");
return controller.onHandle_ContactHostByMessage$Action(controller.callContext(eventHandlerContext));
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
uuid: "4",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.accommodationDataVar.helpersAttr.isEmpty), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
ExtendedClass: "orbit-accordion-item",
UsePadding: false
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
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Helper/s",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("exxRY5jXtUmBDo2UWpxpIA.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accommodationDataVar.helpersAttr,
style: "list list-group orbit-household-list",
tag: "div",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-household-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr), asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m padding-bottom-base padding-top-xs font-size-1-1em text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("EgnhxtxWWkKlPn8LJaS95g.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedStringFromHelperType$Action(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr, callContext).out_FormattedStringOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr;
}),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("cq1_2hjLikGkauv8PmVh2A.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr,
style: "list list-group orbit-member-list",
tag: "div",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-member-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_MemberInformation: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
In_HouseholderId: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_DisplayDot: false,
Is_ShowPersonalInfo: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedMember$Action: function (event_HouseholdIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation ClickedMember");
return controller.onHandle_ClickedMember$Action(event_HouseholdIdIn, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
clickedPhone$Action: function (event_PhoneNumberIn, event_CallNameIn, event_LocalityIdIn, event_MemberIdIn, event_SignedPhotoURLIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation ClickedPhone");
return controller.onHandle_ClickedMemberPhone$Action(event_PhoneNumberIn, event_CallNameIn, event_LocalityIdIn, event_MemberIdIn, event_SignedPhotoURLIn, controller.callContext(eventHandlerContext));
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
uuid: "15",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_OrbitAdmin: PlaceholderContent.Empty,
placeholder_Info: PlaceholderContent.Empty
},
_dependencies: []
}))];
}, callContext, idService, "2")
},
_dependencies: []
}))];
}, callContext, idService, "2")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.accommodationDataVar.guestsAttr.isEmpty), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
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
uuid: "16",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
UsePadding: false,
ExtendedClass: model.getCachedValue(idService.getId("qS3mOYlPDE6vuJ7IYj9EMA.ExtendedClass"), function () {
return ("orbit-accordion-item" + ((!(model.variables.accommodationDataVar.helpersAttr.isEmpty)) ? (" orbit-accordion-no-margin") : ("")));
}, function () {
return model.variables.accommodationDataVar.helpersAttr.isEmpty;
})
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
uuid: "17",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Guest/s",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("liwc46Fp3kuJV+lYjDq2UA.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accommodationDataVar.guestsAttr,
style: "list list-group orbit-household-list",
tag: "div",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-household-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr)]
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("NOt7BszGlEKLcDqU7OzQdQ.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr,
style: "list list-group orbit-member-list",
tag: "div",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-member-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr)]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_HouseholderId: model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_HouseholdCountryCode: model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr,
In_DisplayDot: model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr,
In_HouseholdLocality: model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr,
In_MemberInformation: model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
Is_ShowPersonalInfo: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedMember$Action: function (event_HouseholdIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation ClickedMember");
return controller.onHandle_ClickedMember$Action(event_HouseholdIdIn, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
clickedPhone$Action: function (event_PhoneNumberIn, event_CallNameIn, event_LocalityIdIn, event_MemberIdIn, event_SignedPhotoURLIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation ClickedPhone");
return controller.onHandle_ClickedMemberPhone$Action(event_PhoneNumberIn, event_CallNameIn, model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr, event_MemberIdIn, event_SignedPhotoURLIn, controller.callContext(eventHandlerContext));
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
uuid: "23",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_OrbitAdmin: PlaceholderContent.Empty,
placeholder_Info: PlaceholderContent.Empty
},
_dependencies: []
}))];
}, callContext, idService, "4")
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr)]
}))];
}, callContext, idService, "4")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.guestsAttr), asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.isEmpty)]
})];
}, function () {
return [];
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "This accommodation milestone is still being organised. Please check again later or contact the Orbit Helpdesk if you have any questions."
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
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: model.getCachedValue(idService.getId("5IfuSmkB00qXmzx1kHR8BQ.In_SkeletonLoadingId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getSkeletonLoadingIdFromMilestoneTypeId$Action(model.variables.in_OrbitMilestoneTypeIdIn, callContext).skeletonLoadingIdOut;
}, OS.DataTypes.DataTypes.Integer, callContext.id);
}, function () {
return model.variables.in_OrbitMilestoneTypeIdIn;
}),
_in_SkeletonLoadingIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus)
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
uuid: "25",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(model.variables.getAccommodationGuestDataAct.hasDataOut, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/ContactHelpdesk_Footer Click");
return controller.onHandle_ContactHelpdesk$Action(controller.callContext(eventHandlerContext));
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
uuid: "26",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
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
}), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, {
inputs: {
In_CallPopupData: model.variables.contactByPhoneDataVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Cancel");
controller.onHandle_ContactByPhone_Cancel$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Call$Action: function (event_NumberIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Call");
return controller.onHandle_CallClicked$Action(event_NumberIn, controller.callContext(eventHandlerContext));
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
uuid: "28",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, {
inputs: {
In_ContactPopupData: model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_MessageChannel$Action: function (event_ChannelIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_MessageChannel");
controller.onHandle_ContactHostByMessage_Cancel$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Email$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Email");
return controller.onHandle_ContactHostByMessage_ClickedEmail$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_Call$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Call");
controller.onHandle_ContactHostByMessage_Cancel$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Cancel");
controller.onHandle_ContactHostByMessage_Cancel$Action(controller.callContext(eventHandlerContext));
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
uuid: "29",
alias: "15"
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
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$controller.OnAfterFetch_GetAccommodationGuest.RefreshCaptionsJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$AccommodationGuestRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_BL.model$GetAccommodationGuest_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_controller_OnAfterFetch_GetAccommodationGuest_RefreshCaptionsJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
refreshCaptionsData$Action: function () {
return controller.executeActionInsideJSNode(controller._refreshCaptionsData$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "RefreshCaptionsData");
}
};
this.dataFetchDependenciesOriginal = {
getAccommodationGuest$DataActRefresh: -1,
getCaptions$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getAccommodationGuest$DataActRefresh: [],
getCaptions$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getAccommodationGuest$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MJ2GeyW+ukazUjfPERCwfQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/DataActions.MJ2GeyW+ukazUjfPERCwfQ:1zU7ksqoFFJ6pYpmSullag", "Connect2_OrbitMobile_MUI", "GetAccommodationGuest", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest/GetAccommodationGuest");
return controller.callDataAction("DataActionGetAccommodationGuest", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest/DataActionGetAccommodationGuest", "nbidiHEg4xZQviWIzdbtvw", function (b) {
model.variables.getAccommodationGuestDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getAccommodationGuestDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAccommodationGuestDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest/GetAccommodationGuest On After Fetch");
controller._onAfterFetch_GetAccommodationGuest$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MJ2GeyW+ukazUjfPERCwfQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getCaptions$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Mg26x+HYDk2_2LiTOHHV8Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/DataActions.Mg26x+HYDk2_2LiTOHHV8Q:T6xphfR9EpRILGpKi1uNHw", "Connect2_OrbitMobile_MUI", "GetCaptions", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest/GetCaptions");
return controller.callDataAction("DataActionGetCaptions", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest/DataActionGetCaptions", "JGXJQ32YpmOgULXnGXM1KA", function (b) {
model.variables.getCaptionsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCaptionsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCaptionsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest/GetCaptions On After Fetch");
controller._onAfterFetch_GetCaptions$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Mg26x+HYDk2_2LiTOHHV8Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getAccommodationGuest$DataActRefresh", "getCaptions$DataActRefresh"];
// Client Actions
Controller.prototype._onAfterFetch_GetCaptions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetCaptions");
callContext = controller.callContext(callContext);
var unknownErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var extractChildrenNamesFromCaptionsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.unknownErrorVar = unknownErrorVar;
varBag.extractChildrenNamesFromCaptionsVar = extractChildrenNamesFromCaptionsVar;
try {try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ycabThIkhUWyqZWFXb01Nw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.ycabThIkhUWyqZWFXb01Nw:h4J114flM_aR21rVailCQg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetCaptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vX_cORL+gU+3_Yu5_Dmy6A", callContext.id);
// Success?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3l1krxDNYUWc_T68Ps6NWg", callContext.id) && model.variables.getCaptionsDataAct.successOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5uH0MrjOBkec1jEBqUPQ2A", callContext.id);
// Execute Action: ExtractChildrenNamesFromCaptions
extractChildrenNamesFromCaptionsVar.value = Connect2_OrbitMobile_MUIController.default.extractChildrenNamesFromCaptions$Action(model.variables.getCaptionsDataAct.photobookCaptionOut, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9ypAf2xcFE2BpPuiuxKpBg", callContext.id);
// HouseholdCaptions = ExtractChildrenNamesFromCaptions.ChildrenNames
model.variables.householdCaptionsVar = extractChildrenNamesFromCaptionsVar.value.childrenNamesOut;
}

// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gwKWfiXzdEWJnMakIS0Q_w", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lGQI4zxZhkuiEyp3QejN2w", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ScreenBlock_AccommodationGuest.OnAfterFetch_GetCaptions", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
OS.Logger.error(null, ex);
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2dxpFVW9TkqSoak11mUnaA", callContext.id);
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YClo3Tb01EiSjuSFNPAbFA", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SWB+r7EMKEuNyUjcGJVujA", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ycabThIkhUWyqZWFXb01Nw", callContext.id);
}

};
Controller.prototype._onHandle_ContactHostByMessage$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactHostByMessage");
callContext = controller.callContext(callContext);
var getCacheableTimezoneInfoVar = new OS.DataTypes.VariableHolder();
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableTimezoneInfoVar = getCacheableTimezoneInfoVar;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OFUtZnlqME2aQ9xfT26TCQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.OFUtZnlqME2aQ9xfT26TCQ:PCjNLepYFBgvnieQZ0Si0w", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pbg6vD37xEuhCs9XOThFQA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+QbbqCcUUCftQwqR9wpwA", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.Name = AccommodationData.HostInformation.HouseholdName + If
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr = (model.variables.accommodationDataVar.hostInformationAttr.householdNameAttr + ((((model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr) !== (""))) ? ((" " + model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr)) : ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+QbbqCcUUCftQwqR9wpwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.CountryName = AccommodationData.HostInformation.CountryName
model.variables.contactByMessagePopupDataVar.countryNameAttr = model.variables.accommodationDataVar.hostInformationAttr.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+QbbqCcUUCftQwqR9wpwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.Phone = AccommodationData.HostInformation.MobilePhone
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.phoneAttr = model.variables.accommodationDataVar.hostInformationAttr.mobilePhoneAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+QbbqCcUUCftQwqR9wpwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.Email = AccommodationData.HostInformation.Email
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr = model.variables.accommodationDataVar.hostInformationAttr.emailAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+QbbqCcUUCftQwqR9wpwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.Locality = AccommodationData.HostInformation.LocalityName
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr = model.variables.accommodationDataVar.hostInformationAttr.localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+QbbqCcUUCftQwqR9wpwA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.CountryName = AccommodationData.HostInformation.CountryName
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr = model.variables.accommodationDataVar.hostInformationAttr.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zV2qg28a1E+FmgFZLZLVJQ", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = True
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zV2qg28a1E+FmgFZLZLVJQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsLoading = True
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K23ABRqp_0WLOJ0YSiD1Cw", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(model.variables.accommodationDataVar.hostInformationAttr.localityIdAttr, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OM0UeF0oH0KNO6Qc893NWQ", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(model.variables.getAccommodationGuestDataAct.responseOut.getAccommodationGuestResponseAttr.hostInformationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.household, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2K65KLOSWkq0ElvXqr9wCg", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2K65KLOSWkq0ElvXqr9wCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.CacheResult.Milliseconds
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.timezoneOffsetAttr = getCacheableTimezoneInfoVar.value.cacheResultOut.millisecondsAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2K65KLOSWkq0ElvXqr9wCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsLoading = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2K65KLOSWkq0ElvXqr9wCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qB13XjwqL0yvS3pok_dVyg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OFUtZnlqME2aQ9xfT26TCQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OFUtZnlqME2aQ9xfT26TCQ", callContext.id);
throw ex;

});
};
Controller.prototype._buildCallDataMember$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BuildCallDataMember");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.BuildCallDataMember$vars"))());
vars.value.phoneInLocal = phoneIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.callNameInLocal = callNameIn;
var getCacheableMemberContactListVar = new OS.DataTypes.VariableHolder();
var getCacheableTimezoneInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableMemberContactListVar = getCacheableMemberContactListVar;
varBag.getCacheableTimezoneInfoVar = getCacheableTimezoneInfoVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cg8bb48+rUiN0rJuC0jtcw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.cg8bb48+rUiN0rJuC0jtcw:RA_hvee_NVjGNCgArRUDqA", "Connect2_OrbitMobile_MUI", "BuildCallDataMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cLkvuj_aT0GgJQUi0V5ZhQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UUyYI8lGfUSBLUs_z7psSg", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = CallName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = vars.value.callNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UUyYI8lGfUSBLUs_z7psSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ImageURL = SignedPhotoURL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = vars.value.signedPhotoURLInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UUyYI8lGfUSBLUs_z7psSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UUyYI8lGfUSBLUs_z7psSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UUyYI8lGfUSBLUs_z7psSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.IsLoading = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UD8CZJHbr0e99+yVH0SP6g", callContext.id);
// Execute Action: GetCacheableMemberContactList
model.flush();
return Connect2_LegacySharedController.default.getCacheableMemberContactList$Action(function () {
var list = new OS.DataTypes.LongIntegerList();
list.pushAll([vars.value.memberIdInLocal]);
return list;
}(), callContext).then(function (value) {
getCacheableMemberContactListVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2l0ETB4QpkiWdU8hXO_s2Q", callContext.id) && getCacheableMemberContactListVar.value.memberContactListOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2iTeNI+XBUKT1Qifx1dUJg", callContext.id);
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2iTeNI+XBUKT1Qifx1dUJg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yF+ynH97A0qd6izoD6uRJg", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pLgnbdT0X06EX_eeJukkuQ", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pLgnbdT0X06EX_eeJukkuQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pLgnbdT0X06EX_eeJukkuQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pLgnbdT0X06EX_eeJukkuQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8uOVuqTp+0OlsY5TljBUAA", callContext.id);
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableMemberContactList.MemberContactList.Current.LocalityName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8uOVuqTp+0OlsY5TljBUAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.MobilePhone = GetCacheableMemberContactList.MemberContactList.Current.MobilePhoneNumber
model.variables.contactByPhoneDataVar.mobilePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).mobilePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8uOVuqTp+0OlsY5TljBUAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.HomePhone = GetCacheableMemberContactList.MemberContactList.Current.HomePhoneNumber
model.variables.contactByPhoneDataVar.homePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).homePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8uOVuqTp+0OlsY5TljBUAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.WorkPhone = GetCacheableMemberContactList.MemberContactList.Current.WorkPhoneNumber
model.variables.contactByPhoneDataVar.workPhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).workPhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8uOVuqTp+0OlsY5TljBUAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableMemberContactList.MemberContactList.Current.Timezone.TimezoneLabel
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.timezoneLabelAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8uOVuqTp+0OlsY5TljBUAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableMemberContactList.MemberContactList.Current.Timezone.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8uOVuqTp+0OlsY5TljBUAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableMemberContactList.MemberContactList.Current.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).countryNameAttr;
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u7W_XYQDyEq8D6S8qXyMzg", callContext.id);
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u7W_XYQDyEq8D6S8qXyMzg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HzgfOOYmJUKdHu6+Aqmh4A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cg8bb48+rUiN0rJuC0jtcw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cg8bb48+rUiN0rJuC0jtcw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.BuildCallDataMember$vars", [{
name: "Phone",
attrName: "phoneInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SignedPhotoURL",
attrName: "signedPhotoURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "MemberId",
attrName: "memberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CallName",
attrName: "callNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._refreshData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshData");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:S3AYhqeALk+Kon8xpVByUQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.S3AYhqeALk+Kon8xpVByUQ:i8GDhMPC+u9oJOlGkL70yw", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6KxGi1va2km1slxu4rDgnA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vBt0tso1lEOGzDEkqMUIxg", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OBHJq5fNH0qLI7C0EZYEPQ", callContext.id);
// Refresh Query: GetAccommodationGuest
var result = controller.getAccommodationGuest$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7cdbZksvMkql15bSQDHFXw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:S3AYhqeALk+Kon8xpVByUQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:S3AYhqeALk+Kon8xpVByUQ", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_ContactHelpdesk$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactHelpdesk");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uzj5ieQhhEa5n3viuJYLfw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.uzj5ieQhhEa5n3viuJYLfw:x+lRBKi+khBoOsrGNUzwrg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dbS0LsO6CkOPEB+ZGlAr9g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:clUX36hADUyQ0mk6gQeeWw", callContext.id);
// Trigger Event: NavigateTo_ContactHelpdesk
return controller.navigateTo_ContactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, model.variables.accommodationDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_PreloadMilestoneNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jK+hFQ5H8UOUu1j7gtliTw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uzj5ieQhhEa5n3viuJYLfw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uzj5ieQhhEa5n3viuJYLfw", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_ClickedMember$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.typeInLocal = typeIn;
var checkDirectoryAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkDirectoryAccessVar = checkDirectoryAccessVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2Y9YlPfM_USEDAlRFc_k0A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.2Y9YlPfM_USEDAlRFc_k0A:5sbTnavC6kwBzVEbRAXSZw", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+6P3XPSX20OWjNnpRrVgRw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ech5U7w1v0GhwAgjs0GHJg", callContext.id);
// Execute Action: CheckDirectoryAccess
model.flush();
return Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action(vars.value.householdIdInLocal, vars.value.typeInLocal, callContext).then(function (value) {
checkDirectoryAccessVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mYuOTRI890WbdMsKcRY1LA", callContext.id) && checkDirectoryAccessVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TcPtR4TtJki9Q2cd8wiPtA", callContext.id);
// Trigger Event: NavigateTo_HouseholdDetail
return controller.navigateTo_HouseholdDetail$Action(vars.value.householdIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QiIJcw3CrUqqyndMkLAj9A", callContext.id);
// Execute Action: OnApplicationEvent_ViewHousehold
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ViewHousehold$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec();
rec.targetHouseholdIdAttr = vars.value.householdIdInLocal;
rec.milestoneIdAttr = model.variables.in_MilestoneIdIn;
rec.milestoneTitleAttr = model.variables.accommodationDataVar.milestoneTitleAttr;
rec.eventIdAttr = model.variables.accommodationDataVar.eventDetailsAttr.idAttr;
rec.eventTitleAttr = model.variables.accommodationDataVar.eventDetailsAttr.nameAttr;
rec.eventLocationAttr = model.variables.accommodationDataVar.eventDetailsAttr.locationAttr;
return rec;
}(), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PhqBItP+sUKHmhGqaQhjiw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:whXNvEOHR0OwR_+ZtCw_Kw", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PgI2YCp6XEq9WcFFSEE2tQ", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2Y9YlPfM_USEDAlRFc_k0A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2Y9YlPfM_USEDAlRFc_k0A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_ClickedMember$vars", [{
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
Controller.prototype._refreshCaptionsData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshCaptionsData");
callContext = controller.callContext(callContext);
var unknownErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.unknownErrorVar = unknownErrorVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Q2x9nZjKg0ajfKo1a04Erg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.Q2x9nZjKg0ajfKo1a04Erg:bULLDbPnS7quiwcdqPkF6A", "Connect2_OrbitMobile_MUI", "RefreshCaptionsData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:apEQVaBcSEuT3W4zTFFu1Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3CWI1EwxHUiiVkv30HH9mQ", callContext.id);
// Refresh Query: GetCaptions
var result = controller.getCaptions$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:twCB_KaR0U6JGAOQ4N07ig", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_AccommodationGuest.RefreshCaptionsData", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
OS.Logger.error(null, ex);
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RR_vqmzOw0OnjWGqOw88jQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kMRK+AiiiUOIErc31QbwwQ", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i8SDMrgv1E+7uUzehA_n8A", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Q2x9nZjKg0ajfKo1a04Erg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Q2x9nZjKg0ajfKo1a04Erg", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_ContactHostByMessage_Cancel$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactHostByMessage_Cancel");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LKJmozFsiEaXIHeTsaNfWQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.LKJmozFsiEaXIHeTsaNfWQ:tpRPilLohs4gdWRuyDNC1A", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fTrmzPYu2EWzET37q3SouQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wxmXwSSqRUm01+4Rk115ag", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z9mM4w6mSkiTTgtyXLTMCQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LKJmozFsiEaXIHeTsaNfWQ", callContext.id);
}

};
Controller.prototype._onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_CallClicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_CallClicked$vars"))());
vars.value.calledNumberInLocal = calledNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+F2Fq3m2p0G8xgjcL4WAKw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.+F2Fq3m2p0G8xgjcL4WAKw:uTSXy02DuyhhiGayy1pCLA", "Connect2_OrbitMobile_MUI", "OnHandle_CallClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CzLLG2JV502KWpbdmvMjKw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2FFAnKBrSUKUCuPkpgV5Sg", callContext.id);
// Execute Action: OnApplicationEvent_CallMember
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_CallMember$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_CallMemberRec();
rec.milestoneIdAttr = model.variables.in_MilestoneIdIn;
rec.milestoneTitleAttr = model.variables.accommodationDataVar.milestoneTitleAttr;
rec.eventIdAttr = model.variables.accommodationDataVar.eventDetailsAttr.idAttr;
rec.eventTitleAttr = model.variables.accommodationDataVar.eventDetailsAttr.nameAttr;
rec.householdNameAttr = model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr;
rec.householderPhoneAttr = vars.value.calledNumberInLocal;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bh3xYAVDUUmCYCSxnJJXKA", callContext.id);
// Execute Action: OnHandle_ContactByPhone_Cancel
controller._onHandle_ContactByPhone_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IIJ2MdkkeEe_GaRw78Z72g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+F2Fq3m2p0G8xgjcL4WAKw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+F2Fq3m2p0G8xgjcL4WAKw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_CallClicked$vars", [{
name: "CalledNumber",
attrName: "calledNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_ContactHostByMessage_ClickedEmail$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactHostByMessage_ClickedEmail");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HNdzvEzjrk+n7cYIVf++gA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.HNdzvEzjrk+n7cYIVf++gA:M7TGovOxzYKnvSipCTlrCg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage_ClickedEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sZMm9dqWbE6JLVt1m3l0hQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:klLLscg490Sp7ani7AQhJw", callContext.id);
// Execute Action: OnHandle_ContactHostByMessage_Cancel
controller._onHandle_ContactHostByMessage_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rXym_EzRpEq5qZDbgxA_gg", callContext.id);
// Trigger Event: NavigateTo_ContactByEmail
return controller.navigateTo_ContactByEmail$Action(model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr, model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr, OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, model.variables.accommodationDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.accommodationDataVar.milestoneTitleAttr, OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y42MEkF0mEGRFlmRUvQ8QQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HNdzvEzjrk+n7cYIVf++gA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HNdzvEzjrk+n7cYIVf++gA", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_ContactByPhone_Cancel$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactByPhone_Cancel");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:IYzGypSOU0utXxJZDgPkdw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.IYzGypSOU0utXxJZDgPkdw:pEd9rr6tAAg0lAdNj_xSBA", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SpGvd3OCm0ifqD6hc1KLzg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:USJF_xWofUaWI3NRNpSVTw", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ahYuvc_H8E2o2csCuRuU3A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IYzGypSOU0utXxJZDgPkdw", callContext.id);
}

};
Controller.prototype._buildCallDataHost$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, countryNameIn, householdSurnameIn, householdNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BuildCallDataHost");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.BuildCallDataHost$vars"))());
vars.value.phoneInLocal = phoneIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.countryNameInLocal = countryNameIn;
vars.value.householdSurnameInLocal = householdSurnameIn;
vars.value.householdNameInLocal = householdNameIn;
var getCacheableTimezoneInfoVar = new OS.DataTypes.VariableHolder();
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableTimezoneInfoVar = getCacheableTimezoneInfoVar;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:w8PYzVPIFEq69wlWl_ORkw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.w8PYzVPIFEq69wlWl_ORkw:JFOHG9vI+Nzf7EXmtQOVOg", "Connect2_OrbitMobile_MUI", "BuildCallDataHost", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Wpo1AAQZLUq_2QUtpL62Ng", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vOfpJRLBZESJP8tmR2OkAQ", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = HouseholdName + If
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = (vars.value.householdNameInLocal + ((((vars.value.householdSurnameInLocal) !== (""))) ? ((" " + vars.value.householdSurnameInLocal)) : ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vOfpJRLBZESJP8tmR2OkAQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.Locality = CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = vars.value.countryNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vOfpJRLBZESJP8tmR2OkAQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vOfpJRLBZESJP8tmR2OkAQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = vars.value.countryNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qLa7BbZJekan6cyreuz63A", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qLa7BbZJekan6cyreuz63A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FDWvqU5YbUSb4zTX1ABNMw", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(model.variables.getAccommodationGuestDataAct.responseOut.getAccommodationGuestResponseAttr.hostInformationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.household, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jQmdQYlFkkOFNzx5GAOBDA", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5ICBzZOpAEm7LNX70s3UFA", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5ICBzZOpAEm7LNX70s3UFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5ICBzZOpAEm7LNX70s3UFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5ICBzZOpAEm7LNX70s3UFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nkuLJAybuE6Nagy7WsC6AQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:w8PYzVPIFEq69wlWl_ORkw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:w8PYzVPIFEq69wlWl_ORkw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.BuildCallDataHost$vars", [{
name: "Phone",
attrName: "phoneInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SignedPhotoURL",
attrName: "signedPhotoURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CountryName",
attrName: "countryNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HouseholdSurname",
attrName: "householdSurnameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HouseholdName",
attrName: "householdNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_ClickedHostPhone$Action = function (phoneIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedHostPhone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_ClickedHostPhone$vars"))());
vars.value.phoneInLocal = phoneIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rvFvz6jqbEO72rAZXLSZew:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.rvFvz6jqbEO72rAZXLSZew:c622jTGV1xk_c9wWYOXA6w", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedHostPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9VfRZG4vW0+TfYjqE1lJ+g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:prEDnYBfFEutAKRIFqgXZQ", callContext.id) && ((vars.value.phoneInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jc5iC_EvfE+Cb_j6FrgQwQ", callContext.id);
// Execute Action: BuildCallDataHost
return controller._buildCallDataHost$Action(model.variables.accommodationDataVar.hostInformationAttr.phoneAttr, model.variables.accommodationDataVar.hostInformationAttr.signedPhotoURLAttr, model.variables.accommodationDataVar.hostInformationAttr.localityIdAttr, model.variables.accommodationDataVar.hostInformationAttr.countryNameAttr, model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr, model.variables.accommodationDataVar.hostInformationAttr.householdNameAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:202giareNkStDguVxmkLvA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:owV1B5w8hEm8A+_6K5mmEQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rvFvz6jqbEO72rAZXLSZew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rvFvz6jqbEO72rAZXLSZew", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_ClickedHostPhone$vars", [{
name: "Phone",
attrName: "phoneInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onAfterFetch_GetAccommodationGuest$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetAccommodationGuest");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
try {try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ptUe0n9v8k6puA_4NuQArA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.ptUe0n9v8k6puA_4NuQArA:tMjYMBjgJCnRDPCiVX_Hbw", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetAccommodationGuest", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:d6vFO39Gk0W1nXeZG5Fj_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YFs8yQSLe0WtloT0SWkf+w", callContext.id);
// AccommodationData = GetAccommodationGuest.Response.GetAccommodationGuestResponse
model.variables.accommodationDataVar = model.variables.getAccommodationGuestDataAct.responseOut.getAccommodationGuestResponseAttr;
// Set Fetching Flags
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gl5O2HcVmkylVKbodjzF0A", callContext.id);
// IsFetchingCaptionData = True
model.variables.isFetchingCaptionDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gl5O2HcVmkylVKbodjzF0A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BO9rmCgYWE+t+EZdclmmLQ", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_controller_OnAfterFetch_GetAccommodationGuest_RefreshCaptionsJS, "RefreshCaptions", "OnAfterFetch_GetAccommodationGuest", null, function ($parameters) {
}, {
RefreshCaptionsData: controller.clientActionProxies.refreshCaptionsData$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yO644q8GmUmYWKR4id8lmQ", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ScreenBlock_AccommodationGuest.OnAfterFetch_GetAccommodationGuest", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tCzCRMIpa0Ssznnq5nWuiQ", callContext.id);
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xNGHKSxLk0eyI2uGLZf7Mw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EUPuZe9fLkGjSi1NcGspLQ", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ptUe0n9v8k6puA_4NuQArA", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:DDkk0nzP9ke6FvF27zc_wg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.DDkk0nzP9ke6FvF27zc_wg:HYEi_0gbfefjC05mCHajqw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q+djVqoEoEyRj_Xgf9zAKw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X5Wc0dagT0iCqDbXwM5miw", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X5Wc0dagT0iCqDbXwM5miw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lMcvUcnZr0WOVxlyGRUziA", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dQYqWTElpUii5ogCnZgOpA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q_X_lm2xOkmv6KvmMIF8Lg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GkZAfv1zlEy55ttNUDctrQ", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b7VJvaYfsU+h_3io7B2N_A", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DDkk0nzP9ke6FvF27zc_wg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:DDkk0nzP9ke6FvF27zc_wg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedMemberPhone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_ClickedMemberPhone$vars"))());
vars.value.phoneNumberInLocal = phoneNumberIn;
vars.value.callNameInLocal = callNameIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hg0f8Jz0skmMvNXl2xqyAQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g/ClientActions.hg0f8Jz0skmMvNXl2xqyAQ:DG_1t4sj4oWrVBzMYox1Ig", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMemberPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VoHh_FOo6UenHHxK6TYHbg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mIeyg0_jD0CYLq1fggYaIg", callContext.id) && ((vars.value.phoneNumberInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GSdCeoIWxE2Nc289A7q7TA", callContext.id);
// Execute Action: BuildCallDataMember
return controller._buildCallDataMember$Action(vars.value.phoneNumberInLocal, vars.value.signedPhotoURLInLocal, vars.value.localityIdInLocal, vars.value.memberIdInLocal, vars.value.callNameInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hTqezYeByUinTPua3rXJYQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qDqCGgCaekqLuKej2SsS7A", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hg0f8Jz0skmMvNXl2xqyAQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hg0f8Jz0skmMvNXl2xqyAQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.OnHandle_ClickedMemberPhone$vars", [{
name: "PhoneNumber",
attrName: "phoneNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CallName",
attrName: "callNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "MemberId",
attrName: "memberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "SignedPhotoURL",
attrName: "signedPhotoURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onAfterFetch_GetCaptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetCaptions$Action, callContext);

};
Controller.prototype.onHandle_ContactHostByMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage$Action, callContext);

};
Controller.prototype.buildCallDataMember$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildCallDataMember$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

};
Controller.prototype.onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMember$Action, callContext, householdIdIn, typeIn);

};
Controller.prototype.refreshCaptionsData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshCaptionsData$Action, callContext);

};
Controller.prototype.onHandle_ContactHostByMessage_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage_Cancel$Action, callContext);

};
Controller.prototype.onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_CallClicked$Action, callContext, calledNumberIn);

};
Controller.prototype.onHandle_ContactHostByMessage_ClickedEmail$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage_ClickedEmail$Action, callContext);

};
Controller.prototype.onHandle_ContactByPhone_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone_Cancel$Action, callContext);

};
Controller.prototype.buildCallDataHost$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, countryNameIn, householdSurnameIn, householdNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildCallDataHost$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, countryNameIn, householdSurnameIn, householdNameIn);

};
Controller.prototype.onHandle_ClickedHostPhone$Action = function (phoneIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedHostPhone$Action, callContext, phoneIn);

};
Controller.prototype.onAfterFetch_GetAccommodationGuest$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetAccommodationGuest$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMemberPhone$Action, callContext, phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn);

};
Controller.prototype.navigateTo_ContactByEmail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_HouseholdDetail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_ContactHelpdesk$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aU+AeKTRiEa68AnoqntF4g:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.aU+AeKTRiEa68AnoqntF4g:N_BauYYYy4osTPUQw27LSg", "Connect2_OrbitMobile_MUI", "ScreenBlock_AccommodationGuest", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aU+AeKTRiEa68AnoqntF4g", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$controller.OnAfterFetch_GetAccommodationGuest.RefreshCaptionsJS", [], function () {
return function ($actions, $roles, $public) {
$actions.RefreshCaptionsData();
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"2dxpFVW9TkqSoak11mUnaA": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"5uH0MrjOBkec1jEBqUPQ2A": {
getter: function (varBag, idService) {
return varBag.extractChildrenNamesFromCaptionsVar.value;
}
},
"K23ABRqp_0WLOJ0YSiD1Cw": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"OM0UeF0oH0KNO6Qc893NWQ": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"0GWHxizjUkGQ3s1M5dHKgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+DnWVOEMv0iXVbPVKGcx7w": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"p_TlLSyDIUuuSBQnTOTbwA": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"9nDHLmr2y02S9G6CJKkwrg": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"GYlWyUEW5kuuGGgH_nEpLQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UD8CZJHbr0e99+yVH0SP6g": {
getter: function (varBag, idService) {
return varBag.getCacheableMemberContactListVar.value;
}
},
"yF+ynH97A0qd6izoD6uRJg": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"9rkBve1tbUi30mrDiBaC7g": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"eSFQxs+B+keZEyIfwKXTdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ech5U7w1v0GhwAgjs0GHJg": {
getter: function (varBag, idService) {
return varBag.checkDirectoryAccessVar.value;
}
},
"RR_vqmzOw0OnjWGqOw88jQ": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"5CjpzVZoK0+7Jb05eo5xbQ": {
getter: function (varBag, idService) {
return varBag.vars.value.calledNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XzHB91ZaGEmdNe0LWCH_Qw": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Xk7NL2z7_kW55fKarsxRwA": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"N4JwJT+ZHEakQCfslBW9WQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"a5AJ9Js23EyT7BcLGzgEcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.countryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"L+6X4Adj4UKP+f7bYYo7wA": {
getter: function (varBag, idService) {
return varBag.vars.value.householdSurnameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aKvvcKOMqkelxua37MfK7Q": {
getter: function (varBag, idService) {
return varBag.vars.value.householdNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jQmdQYlFkkOFNzx5GAOBDA": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"FDWvqU5YbUSb4zTX1ABNMw": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"Mcv99l54EEKdBSClPf4oqw": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tCzCRMIpa0Ssznnq5nWuiQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"BO9rmCgYWE+t+EZdclmmLQ": {
getter: function (varBag, idService) {
return varBag.refreshCaptionsJSResult.value;
}
},
"lMcvUcnZr0WOVxlyGRUziA": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"Sd_I84eou0+p_x5bm1JY4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TKHpwQ8RcEuQOZDlkXV+LA": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xACyg7YDNU2l4gbksqjDiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"vgaRvMZsJEeq6NOQmD6QZA": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"2E9zSszDWEainXRpdErMag": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cJ_hWz2r80GGR2jnu_vCRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NnhXIa2abke190A5IG_SFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.accommodationDataVar;
}
},
"fEC1yNrN6k+AsHVb_3qXow": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingPhoneDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"UgkcQX_NGE2ahrOQs4cxnw": {
getter: function (varBag, idService) {
return varBag.model.variables.householdCaptionsVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iL+cZCaC_UKRXFponW9U1A": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingCaptionDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"n9wgef4qaUqh2EYoGlKC3g": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByPhoneDataVar;
}
},
"yQXkuny_MUqyE4VFNfE85A": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByMessagePopupDataVar;
}
},
"YfJdo3HLNkSk5r_Vw5Jl_A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"waFkyxpLw0O4xsLAXCvW0w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"hk7ADQAVLUi7zLxGd8eQ7w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"npsfm5RqV0CoCNbfHBWoGg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadEventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ugNY_FB6KkGpNpYx8N7aQw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadMilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3RyXsR3OtU+2AjPnB3ZpxA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MJ2GeyW+ukazUjfPERCwfQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getAccommodationGuestDataAct;
}
},
"Mg26x+HYDk2_2LiTOHHV8Q": {
getter: function (varBag, idService) {
return varBag.model.variables.getCaptionsDataAct;
}
},
"rfHY2NRk40+CR6DsasSkpQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"A2i2+_+eQkGQ+njGfHZdhA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"w12hHMg20ES+2EQZ4rpNZQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"x12wlE5uXkOKJRjAEUKBDA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"CEYg5Lv_Fk6M5gW9QnWD6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"x9sehHwIZE2cMJcsYerJqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"Bvg3Ff55ek2i1TIRvtDdfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"myGY4dOZn0id4HZ43cUSCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"95scICH8i0eKEBdj5iOqRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"3H+vDpE7Mk6Mr4nAsXV4bw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasData"));
})(varBag.model, idService);
}
},
"kz4dBR+vR0yUFmPtP7jJzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelpersData"));
})(varBag.model, idService);
}
},
"dWKtZMa7iUu9_IfMgHrOFQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"stmElWjut0asWZx3Yp1BZQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"IkiRFvNybE66IexZ1jq8YA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Cey6QkcXQk+iqB9MiMc5gA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"Hlcp5o9YIEeL_dVkZiwIjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"WnHnVBP8M0CdSIW+hecdDA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasGuestData"));
})(varBag.model, idService);
}
},
"twRYCbcCJE2sMvV9Vb44Qw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"vneJbNe3kEy81SNUgggDRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"0tvmn69vW0qnlaDpS6c8dA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"cmwFBK_9Z0mlJI4ChVysEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"RSGgsGdIVEu6jB1HBU5KHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"ocMUa1QJs0m6OCZUY6kVug": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"ImTH+G3EtEWqf0MfVy41ZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_APIHasData"));
})(varBag.model, idService);
}
},
"iumgIczwKEihqyfX9IgCrw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"rojgbOpyw0ekhi2PFM0NpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"ag7ql7DimEa9UIavLTPfCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
