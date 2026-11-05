define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$AccommodationHelperRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "Connect2_OrbitMobile_BL.model$GetAccommodationHelper_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel) {
var OS = OutSystems.Internal;

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
var GetAccommodationHelperDataActRec = (function (_super) {
__extends(GetAccommodationHelperDataActRec, _super);
function GetAccommodationHelperDataActRec(defaults) {
_super.apply(this, arguments);
}
GetAccommodationHelperDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetAccommodationHelper_ScreenRec());
}, true, Connect2_OrbitMobile_BLModel.GetAccommodationHelper_ScreenRec), 
this.attr("HasData", "hasDataOut", "HasData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAccommodationHelperDataActRec.init();
return GetAccommodationHelperDataActRec;
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
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.AccommodationHelperRec());
}, false, Connect2_OrbitMobile_ISModel.AccommodationHelperRec), 
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
this.attr("GetCaptions", "getCaptionsDataAct", "getCaptionsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCaptionsDataActRec());
}, true, GetCaptionsDataActRec), 
this.attr("GetAccommodationHelper", "getAccommodationHelperDataAct", "getAccommodationHelperDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetAccommodationHelperDataActRec());
}, true, GetAccommodationHelperDataActRec)
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
Model._hasValidationWidgetsValue = (((((((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets);
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
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$AccommodationHelperRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "Connect2_OrbitMobile_BL.model$GetAccommodationHelper_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_controller;
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
In_MilestoneName: model.getCachedValue(idService.getId("16g3YG6JL0inS62N9K8r1A.In_MilestoneName"), function () {
return ((((model.variables.accommodationDataVar.milestoneTitleAttr) !== (""))) ? (model.variables.accommodationDataVar.milestoneTitleAttr) : (model.variables.in_PreloadMilestoneNameIn));
}, function () {
return model.variables.accommodationDataVar.milestoneTitleAttr;
}, function () {
return model.variables.in_PreloadMilestoneNameIn;
}),
_in_MilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadMilestoneNameInDataFetchStatus),
In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
In_EventName: model.getCachedValue(idService.getId("16g3YG6JL0inS62N9K8r1A.In_EventName"), function () {
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
return [$if((model.variables.getAccommodationHelperDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [$if(model.variables.getAccommodationHelperDataAct.hasDataOut, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, {
inputs: {
In_MilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_MilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
IsFetchingCaptions: model.variables.isFetchingCaptionDataVar,
MilestoneDateTime: model.variables.accommodationDataVar.milestoneDateTimeAttr,
Captions: model.variables.householdCaptionsVar,
HostInformation: model.variables.accommodationDataVar.hostInformationAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
style: "margin-top-m full-width display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(false, false, this, function () {
return [];
}, function () {
return [];
}), $if(!(model.variables.accommodationDataVar.helpersAttr.isEmpty), false, this, function () {
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
"disable-virtualization": model.getCachedValue(idService.getId("57v8XUSTl0eJ1vGSpXsGcg.disable-virtualization"), function () {
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
value: model.getCachedValue(idService.getId("leYFkOWn3ke+re8wnIWiQQ.Value"), function () {
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
"disable-virtualization": model.getCachedValue(idService.getId("uwrBP4a6gUmJBVFpi_6W7w.disable-virtualization"), function () {
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
Is_ShowPersonalInfo: true,
In_MemberInformation: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
In_DisplayDot: false,
In_HouseholderId: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_HouseholdLocality: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).localityAttr,
In_HouseholdCountryCode: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).countryCodeAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
placeholder_Info: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width font-size-s text-neutral-6",
visible: ((model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).middayMealAttr) !== ("")),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: ("Midday Meal: " + model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).middayMealAttr),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width font-size-s text-neutral-6",
visible: ((model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr) !== ("")),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: ("Evening Meal: " + model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr), asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).middayMealAttr)]
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
}), $if(!(model.variables.accommodationDataVar.roomsAttr.isEmpty), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
inputs: {
In_MultipleItems: true,
In_ExtendedClass: model.getCachedValue(idService.getId("cXpf7J47gkKB9gCOuuohdw.In_ExtendedClass"), function () {
return (((model.variables.accommodationDataVar.specialNeedsAttr.isEmpty && model.variables.accommodationDataVar.helpersAttr.isEmpty)) ? (" orbit-accordion-no-margin") : (""));
}, function () {
return model.variables.accommodationDataVar.specialNeedsAttr.isEmpty;
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
uuid: "20",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("e4wke+kId0CvmTIpo_WWbA.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accommodationDataVar.roomsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
ExtendedClass: model.getCachedValue(idService.getId("hT0NRF5iEUmvTs6Yk94Zmw.ExtendedClass"), function () {
return ("orbit-accordion-item" + ((((model.variables.accommodationDataVar.roomsAttr.getCurrentRowNumber(callContext.iterationContext)) !== (0))) ? (" margin-top-s") : ("")));
}, function () {
return model.variables.accommodationDataVar.roomsAttr.getCurrentRowNumber(callContext.iterationContext);
}),
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
uuid: "22",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: ("Room: " + model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomNameAttr),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "room-info-cont",
visible: model.getCachedValue(idService.getId("Yy1ac2DzFkiNd4t6nV+aVQ.Visible"), function () {
return ((((model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.floorAttr) !== ("")) || ((model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.typeAttr) !== (""))) || !(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.bedsAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))));
}, function () {
return model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.floorAttr;
}, function () {
return model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.typeAttr;
}, function () {
return model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.bedsAttr;
}),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical justify-content-flex-start flex-direction-row",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-home font-size-1-1em",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-s",
value: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.floorAttr,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical justify-content-center flex-direction-row",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-host-guest",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-s",
value: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.typeAttr,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical justify-content-flex-end flex-direction-row",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-accommodation font-size-1-1em",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-s",
value: OS.BuiltinFunctions.longIntegerToText(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.bedsAttr),
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m padding-top-base font-size-1-1em text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Guest/s",
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("yY72MB8tjUqPX8zckydy3A.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr,
style: "list list-group orbit-household-list",
tag: "div",
_idProps: {
service: idService,
uuid: "36"
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
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr)]
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("hOwmJYsdWUePE4RR6jcfuA.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr,
style: "list list-group orbit-member-list",
tag: "div",
_idProps: {
service: idService,
uuid: "38"
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
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_HouseholderId: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_HouseholdLocality: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr,
In_ShowAdminTag: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).hasOrbitAdminRoleAttr,
In_HouseholdCountryCode: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr,
In_DisplayDot: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr,
In_HideMemberInfoLocation: false,
In_MemberInformation: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
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
return controller.onHandle_ClickedMemberPhone$Action(event_PhoneNumberIn, event_CallNameIn, model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr, event_MemberIdIn, event_SignedPhotoURLIn, controller.callContext(eventHandlerContext));
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
uuid: "41",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_OrbitAdmin: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvc_view, {
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
uuid: "42",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Info: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper/Container onclick");
return controller.onClick_GuestArrangements$Action(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).memberIdAttr, model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).hasGuestArrangementsAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "margin-top-s display-flex justify-content-flex-start align-items-center",
visible: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).hasGuestArrangementsAttr,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-arrangements text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-member-list-item-arrangements",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Guest Arrangements"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).hasGuestArrangementsAttr)]
})))];
}, callContext, idService, "5")
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr)]
}))];
}, callContext, idService, "5")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.bedsAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.typeAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.floorAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomNameAttr)]
})];
}, callContext, idService, "5")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr)]
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
uuid: "46",
alias: "12"
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
In_SkeletonLoadingId: model.getCachedValue(idService.getId("cFXJ9cWOXk+4LgfQHYeY8w.In_SkeletonLoadingId"), function () {
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
uuid: "47",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(model.variables.getAccommodationHelperDataAct.hasDataOut, false, this, function () {
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
uuid: "48",
alias: "14"
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
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
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
uuid: "51",
alias: "16"
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
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "52",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$controller.OnAfterFetch_GetAccommodationHelper.RefreshCaptionsJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$AccommodationHelperRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "Connect2_OrbitMobile_BL.model$GetAccommodationHelper_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_controller_OnAfterFetch_GetAccommodationHelper_RefreshCaptionsJS) {
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
getCaptions$DataActRefresh: -1,
getAccommodationHelper$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getCaptions$DataActRefresh: [],
getAccommodationHelper$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getCaptions$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:CBDDCvLwkEqH2I8z8RDTLw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/DataActions.CBDDCvLwkEqH2I8z8RDTLw:Lz9qJUHm7VQYDlaVbTdxnQ", "Connect2_OrbitMobile_MUI", "GetCaptions", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper/GetCaptions");
return controller.callDataAction("DataActionGetCaptions", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper/DataActionGetCaptions", "JGXJQ32YpmOgULXnGXM1KA", function (b) {
model.variables.getCaptionsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCaptionsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCaptionsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper/GetCaptions On After Fetch");
controller._onAfterFetch_GetCaptions$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:CBDDCvLwkEqH2I8z8RDTLw", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getAccommodationHelper$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YPEnsgax2kqGPYW3cX9dZw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/DataActions.YPEnsgax2kqGPYW3cX9dZw:U9Kp1wQMm0IehO7jk+e1KA", "Connect2_OrbitMobile_MUI", "GetAccommodationHelper", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper/GetAccommodationHelper");
return controller.callDataAction("DataActionGetAccommodationHelper", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper/DataActionGetAccommodationHelper", "Ojn7E36wkzZYnf6sQY13rQ", function (b) {
model.variables.getAccommodationHelperDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getAccommodationHelperDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAccommodationHelperDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper/GetAccommodationHelper On After Fetch");
controller._onAfterFetch_GetAccommodationHelper$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YPEnsgax2kqGPYW3cX9dZw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getCaptions$DataActRefresh", "getAccommodationHelper$DataActRefresh"];
// Client Actions
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9ndAKp+HkE2TilG1G9t8qQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.9ndAKp+HkE2TilG1G9t8qQ:Eidh9J_rF9diIXAg_Gk0Wg", "Connect2_OrbitMobile_MUI", "RefreshCaptionsData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3k5huFF+IkmIfoQ0y9L0cw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_ndlxK3IukO7hJPPDXYnjQ", callContext.id);
// Refresh Query: GetCaptions
var result = controller.getCaptions$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1bY7m7JQKEyHppP2kWOcTg", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_AccommodationHelper.RefreshCaptionsData", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
OS.Logger.error(null, ex);
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dG8rETXSTEitfbtjSBmb6w", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+45DJBeMoU6yMcA3DnhPXA", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ox1Ge7FgGUiB561MYEJV+g", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9ndAKp+HkE2TilG1G9t8qQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9ndAKp+HkE2TilG1G9t8qQ", callContext.id);
throw ex;

});
};
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:28u4KoKZ5EuL88qo+7omjA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.28u4KoKZ5EuL88qo+7omjA:EjA5Imq2nqbrMiy9cWHoHg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage_ClickedEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sGAjrM0YJkeqRfCGkLKCEg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TPem1ZZAikiJSdcAweVKsw", callContext.id);
// Execute Action: OnHandle_ContactHostByMessage_Cancel
controller._onHandle_ContactHostByMessage_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CGKbfmuV50iBcIpctZ4oWg", callContext.id);
// Trigger Event: NavigateTo_ContactByEmail
return controller.navigateTo_ContactByEmail$Action(model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr, model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr, OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, model.variables.accommodationDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.accommodationDataVar.milestoneTitleAttr, OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CgN4fgTcNUOm7wDO6XRtpQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:28u4KoKZ5EuL88qo+7omjA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:28u4KoKZ5EuL88qo+7omjA", callContext.id);
throw ex;

});
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:EyroWkHSUkGdnVAahPoK5g:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.EyroWkHSUkGdnVAahPoK5g:wjUUPPHX3eAurZEz4w3tKg", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K5Z22jD15ky15ACgIvshlQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wPpD9kUPoUGfFxk51DP7sA", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wPpD9kUPoUGfFxk51DP7sA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pHR5zLF_F069uH7KWxzFRw", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gDUNvbBCcE2wm0RIDBU_BQ", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gpE5ahgsMk+9eqi8dVHrPg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vwIb0GImlkWu3_WLC9k65Q", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VVkPwX3xFUOUTjoKMKBAhQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EyroWkHSUkGdnVAahPoK5g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EyroWkHSUkGdnVAahPoK5g", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_ClickedHostPhone$Action = function (phoneNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedHostPhone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_ClickedHostPhone$vars"))());
vars.value.phoneNumberInLocal = phoneNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HnBKY5PHSkywBARcJoi84A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.HnBKY5PHSkywBARcJoi84A:R8nh9M__YWHYL_ShAl5g_g", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedHostPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q1YWMMLhSUCGpqVb3B1BrA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:19Z7LZ7e1kuovJx4mGapiQ", callContext.id) && ((vars.value.phoneNumberInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TLO0kZ4_g06AgY56FQmxVA", callContext.id);
// Execute Action: BuildCallDataHost
return controller._buildCallDataHost$Action(model.variables.accommodationDataVar.hostInformationAttr.phoneAttr, model.variables.accommodationDataVar.hostInformationAttr.signedPhotoURLAttr, model.variables.accommodationDataVar.hostInformationAttr.localityIdAttr, model.variables.accommodationDataVar.hostInformationAttr.countryNameAttr, model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr, model.variables.accommodationDataVar.hostInformationAttr.householdNameAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GC+t8cCtB02PE9whKlg83w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K7EEIviMQkeNTqd6g4gU9w", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HnBKY5PHSkywBARcJoi84A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HnBKY5PHSkywBARcJoi84A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_ClickedHostPhone$vars", [{
name: "PhoneNumber",
attrName: "phoneNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:H3Ulayp2NkyP0ry2jUSVMQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.H3Ulayp2NkyP0ry2jUSVMQ:Obd0eI9D1lagLPO0DxiGGg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hA78u8pyt0ClX9Qitm3hsQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dW3egqvAhkmlkggP733VMg", callContext.id);
// Trigger Event: NavigateTo_ContactHelpdesk
return controller.navigateTo_ContactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, model.variables.accommodationDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_PreloadMilestoneNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:74Z74hlRMkmEm0dico42eA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:H3Ulayp2NkyP0ry2jUSVMQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:H3Ulayp2NkyP0ry2jUSVMQ", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_ClickedMember$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.typeInLocal = typeIn;
var checkDirectoryAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkDirectoryAccessVar = checkDirectoryAccessVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TyEcfm8vR0SqoOGOMc2_Fw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.TyEcfm8vR0SqoOGOMc2_Fw:X6Fpel28yyDzamyLZVoHew", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RjqPINnC40O4cczfqzAJuw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y4fJR87DaUmLzXEMSD66aA", callContext.id);
// Execute Action: CheckDirectoryAccess
model.flush();
return Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action(vars.value.householdIdInLocal, vars.value.typeInLocal, callContext).then(function (value) {
checkDirectoryAccessVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EZNWsBnHF0ubA5glZbnLpQ", callContext.id) && checkDirectoryAccessVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_cLyk1jiJEy7xq_+0CS1vA", callContext.id);
// Trigger Event: NavigateTo_HouseholdDetail
return controller.navigateTo_HouseholdDetail$Action(vars.value.householdIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7UkuNvpDmEGtyq5XKmd8+g", callContext.id);
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
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F_peAIz40EyFEs5c09wGjw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gJ2HsyZAH0KzSnWvRnz3mA", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LUcInmWtuU+B2zb97PPR6Q", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TyEcfm8vR0SqoOGOMc2_Fw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TyEcfm8vR0SqoOGOMc2_Fw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_ClickedMember$vars", [{
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
Controller.prototype._onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_CallClicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_CallClicked$vars"))());
vars.value.calledNumberInLocal = calledNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aSl7iLrsjkSIBdE6YrkwEA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.aSl7iLrsjkSIBdE6YrkwEA:EInV0RQqMHJvcOAk1SgfuQ", "Connect2_OrbitMobile_MUI", "OnHandle_CallClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:su3D7BMpAki16eBG6glAiA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v64915rvkU+tZl4ra9LoYA", callContext.id);
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
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZEpFREbtWEeq9ZdKQvpbdg", callContext.id);
// Execute Action: OnHandle_ContactByPhone_Cancel
controller._onHandle_ContactByPhone_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0qAS75JjOkyMbPqdTLhAiQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aSl7iLrsjkSIBdE6YrkwEA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aSl7iLrsjkSIBdE6YrkwEA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_CallClicked$vars", [{
name: "CalledNumber",
attrName: "calledNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onAfterFetch_GetAccommodationHelper$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetAccommodationHelper");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
try {try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:3i60kZSGkEOdawMaJaDgRw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.3i60kZSGkEOdawMaJaDgRw:1P5EBE2hwgshPRrXNhrFlw", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetAccommodationHelper", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OG1V+vALRUqzsY6cAtwgQw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t0vqs4Tu7UCsY9gAhm4C6w", callContext.id);
// AccommodationData = GetAccommodationHelper.Response.GetAccommodationHelperResponse
model.variables.accommodationDataVar = model.variables.getAccommodationHelperDataAct.responseOut.getAccommodationHelperResponseAttr;
// Set Fetching Flags
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fe6Vq4KVi0G4+9tb+jBDHA", callContext.id);
// IsFetchingCaptionData = True
model.variables.isFetchingCaptionDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fe6Vq4KVi0G4+9tb+jBDHA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zRQ9nqAcxUahhSyhSOLShw", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_controller_OnAfterFetch_GetAccommodationHelper_RefreshCaptionsJS, "RefreshCaptions", "OnAfterFetch_GetAccommodationHelper", null, function ($parameters) {
}, {
RefreshCaptionsData: controller.clientActionProxies.refreshCaptionsData$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NaLHpFGR+E6c74fTzAUYgg", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ScreenBlock_AccommodationHelper.OnAfterFetch_GetAccommodationHelper", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xw9kHt8h5k+w+wxPJy0_pA", callContext.id);
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HzF2iVgSl0SEmClt4R+Fug", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jF7chiDwhUKqF2yKLIw+qg", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:3i60kZSGkEOdawMaJaDgRw", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.BuildCallDataHost$vars"))());
vars.value.phoneInLocal = phoneIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.countryNameInLocal = countryNameIn;
vars.value.householdSurnameInLocal = householdSurnameIn;
vars.value.householdNameInLocal = householdNameIn;
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
var getCacheableTimezoneInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
varBag.getCacheableTimezoneInfoVar = getCacheableTimezoneInfoVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hZK8kqvN2UeWHnGRxZZkFA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.hZK8kqvN2UeWHnGRxZZkFA:eCaxZCL5NW8xMwEfb28gjA", "Connect2_OrbitMobile_MUI", "BuildCallDataHost", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eI5zpDor902zoBQ1aLI+UA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LDUDJWZS1EOyneYj+aUfFg", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = HouseholdName + If
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = (vars.value.householdNameInLocal + ((((vars.value.householdSurnameInLocal) !== (""))) ? ((" " + vars.value.householdSurnameInLocal)) : ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LDUDJWZS1EOyneYj+aUfFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.Locality = CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = vars.value.countryNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LDUDJWZS1EOyneYj+aUfFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LDUDJWZS1EOyneYj+aUfFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = vars.value.countryNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PFTMMvTFI0ONS4GcOSn+KQ", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PFTMMvTFI0ONS4GcOSn+KQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mFppNNSCRUu3uzNhvz3x4w", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EjMeMFaEsEOvztJpvDbTXA", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(model.variables.getAccommodationHelperDataAct.responseOut.getAccommodationHelperResponseAttr.hostInformationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.household, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:96FxyC9ecU6Q2vXTmvaqRw", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:96FxyC9ecU6Q2vXTmvaqRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:96FxyC9ecU6Q2vXTmvaqRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:96FxyC9ecU6Q2vXTmvaqRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MWGMJvoPjUuz8zM0ETFaYA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hZK8kqvN2UeWHnGRxZZkFA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hZK8kqvN2UeWHnGRxZZkFA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.BuildCallDataHost$vars", [{
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
Controller.prototype._onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedMemberPhone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_ClickedMemberPhone$vars"))());
vars.value.phoneNumberInLocal = phoneNumberIn;
vars.value.callNameInLocal = callNameIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:r3yon7NsRUm4emom+8DlQA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.r3yon7NsRUm4emom+8DlQA:fU5l1+qbPo5hXQ6ocXmB5A", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMemberPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vjwdX2VZFEGAkiAyAaW2tg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UoD0vwR9z02n_1TQ5i5GCQ", callContext.id) && ((vars.value.phoneNumberInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U1Ldt5_pfk2KPuoCW0_vUw", callContext.id);
// Execute Action: BuildCallDataMember
return controller._buildCallDataMember$Action(vars.value.phoneNumberInLocal, vars.value.signedPhotoURLInLocal, vars.value.localityIdInLocal, vars.value.memberIdInLocal, vars.value.callNameInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oWAV+RiGZk+ebx5P6BwrHg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+NMpDdCaWUa+_33_QpP2HQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:r3yon7NsRUm4emom+8DlQA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:r3yon7NsRUm4emom+8DlQA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnHandle_ClickedMemberPhone$vars", [{
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:QVF8rl5MlEK4U84ZICQkBQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.QVF8rl5MlEK4U84ZICQkBQ:MY1kilvP+cy1qDOUaj3Y+w", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5Lm8ssmwkEqt9Kt5eDaPdw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XwGqO6wt7EyZ4n69uwuEAg", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vd3zYT_Dv06J2kDRS4TMxw", callContext.id);
// Refresh Query: GetAccommodationHelper
var result = controller.getAccommodationHelper$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y9bH33e1PkOJ+tIj9tc9Hw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:QVF8rl5MlEK4U84ZICQkBQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:QVF8rl5MlEK4U84ZICQkBQ", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_GuestArrangements$Action = function (memberIdIn, hasGuestArrangementsIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_GuestArrangements");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnClick_GuestArrangements$vars"))());
vars.value.memberIdInLocal = memberIdIn;
vars.value.hasGuestArrangementsInLocal = hasGuestArrangementsIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Vcck5W6BYE+eBbiO+4MRzQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.Vcck5W6BYE+eBbiO+4MRzQ:KfsTQNIXkEUj0KAvamzcXg", "Connect2_OrbitMobile_MUI", "OnClick_GuestArrangements", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VlyG7BvbmkeF95fXPleelw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GjUcvkCqg0Owq0WL3MiJ_Q", callContext.id) && vars.value.hasGuestArrangementsInLocal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hf5Hi0+RVEKD+jtYOIK5mg", callContext.id);
// Trigger Event: NavigateTo_GuestArrangements
return controller.navigateTo_GuestArrangements$Action(vars.value.memberIdInLocal, model.variables.in_OrbitMilestoneTypeIdIn, model.variables.accommodationDataVar.milestoneTitleAttr, model.variables.in_HostIdIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MYL881GKHUO7R3_nFczeew", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xBYCPEzJB0GAyqCJaZUWAg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Vcck5W6BYE+eBbiO+4MRzQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Vcck5W6BYE+eBbiO+4MRzQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.OnClick_GuestArrangements$vars", [{
name: "MemberId",
attrName: "memberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "HasGuestArrangements",
attrName: "hasGuestArrangementsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._buildCallDataMember$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BuildCallDataMember");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.BuildCallDataMember$vars"))());
vars.value.phoneInLocal = phoneIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.callNameInLocal = callNameIn;
var getCacheableTimezoneInfoVar = new OS.DataTypes.VariableHolder();
var getCacheableMemberContactListVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableTimezoneInfoVar = getCacheableTimezoneInfoVar;
varBag.getCacheableMemberContactListVar = getCacheableMemberContactListVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mC7w5nlchE6egik3y_1Gsg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.mC7w5nlchE6egik3y_1Gsg:6ZKwYx2j+zT8jHMu0uP6JA", "Connect2_OrbitMobile_MUI", "BuildCallDataMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q6lAaw97EUmQQTRzHlZNAA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e6Mw2kARckCwM_oD+FE2mg", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = CallName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = vars.value.callNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e6Mw2kARckCwM_oD+FE2mg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ImageURL = SignedPhotoURL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = vars.value.signedPhotoURLInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e6Mw2kARckCwM_oD+FE2mg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e6Mw2kARckCwM_oD+FE2mg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e6Mw2kARckCwM_oD+FE2mg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.IsLoading = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NPsr4HhAVkKIPy1wuDB0TA", callContext.id);
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
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8gxZ5iaa70mHY0EAU4BaUQ", callContext.id) && getCacheableMemberContactListVar.value.memberContactListOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o+paEjPIAE+Bm9iks3pZYg", callContext.id);
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o+paEjPIAE+Bm9iks3pZYg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JcU92AzHKEqe53OAXQKIYA", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kXeprq_LK02UnVVGvz35Rg", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kXeprq_LK02UnVVGvz35Rg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kXeprq_LK02UnVVGvz35Rg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kXeprq_LK02UnVVGvz35Rg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ew4LEmAFZki4c598sdCCLQ", callContext.id);
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableMemberContactList.MemberContactList.Current.LocalityName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ew4LEmAFZki4c598sdCCLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.MobilePhone = GetCacheableMemberContactList.MemberContactList.Current.MobilePhoneNumber
model.variables.contactByPhoneDataVar.mobilePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).mobilePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ew4LEmAFZki4c598sdCCLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.HomePhone = GetCacheableMemberContactList.MemberContactList.Current.HomePhoneNumber
model.variables.contactByPhoneDataVar.homePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).homePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ew4LEmAFZki4c598sdCCLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.WorkPhone = GetCacheableMemberContactList.MemberContactList.Current.WorkPhoneNumber
model.variables.contactByPhoneDataVar.workPhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).workPhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ew4LEmAFZki4c598sdCCLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableMemberContactList.MemberContactList.Current.Timezone.TimezoneLabel
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.timezoneLabelAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ew4LEmAFZki4c598sdCCLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableMemberContactList.MemberContactList.Current.Timezone.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ew4LEmAFZki4c598sdCCLQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableMemberContactList.MemberContactList.Current.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).countryNameAttr;
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_GG9ceBtjk23K6ZB5q_hvg", callContext.id);
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_GG9ceBtjk23K6ZB5q_hvg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MFzx+tmMRE2_vbhv+PI0wA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mC7w5nlchE6egik3y_1Gsg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mC7w5nlchE6egik3y_1Gsg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.BuildCallDataMember$vars", [{
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:o4Y_69Zi4UKLMXl6zjgYKQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.o4Y_69Zi4UKLMXl6zjgYKQ:UtjLRAogqNIXP0U91jlFog", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F0c_EJhKBEi3OsftSFRxKA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dGOB56yDDkiCZmj5gGpMXw", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Cox06HUC20ezMvvcXKJjbA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:o4Y_69Zi4UKLMXl6zjgYKQ", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Yivh7JTESEWxOatiEgAzuA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.Yivh7JTESEWxOatiEgAzuA:G9emd5UCBkxf3YLPSl_WqQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:N1jeRgT7Bk2K1mV0OHuGiQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEba7SWVukWpt38vybcQTQ", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.Name = AccommodationData.HostInformation.HouseholdName + If
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr = (model.variables.accommodationDataVar.hostInformationAttr.householdNameAttr + ((((model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr) !== (""))) ? ((" " + model.variables.accommodationDataVar.hostInformationAttr.householdSurnameAttr)) : ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEba7SWVukWpt38vybcQTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.CountryName = AccommodationData.HostInformation.CountryName
model.variables.contactByMessagePopupDataVar.countryNameAttr = model.variables.accommodationDataVar.hostInformationAttr.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEba7SWVukWpt38vybcQTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.Phone = AccommodationData.HostInformation.MobilePhone
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.phoneAttr = model.variables.accommodationDataVar.hostInformationAttr.mobilePhoneAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEba7SWVukWpt38vybcQTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.Email = AccommodationData.HostInformation.Email
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr = model.variables.accommodationDataVar.hostInformationAttr.emailAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEba7SWVukWpt38vybcQTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.Locality = AccommodationData.HostInformation.LocalityName
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr = model.variables.accommodationDataVar.hostInformationAttr.localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oEba7SWVukWpt38vybcQTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.CountryName = AccommodationData.HostInformation.CountryName
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr = model.variables.accommodationDataVar.hostInformationAttr.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0t6cPqbfXkGSAmNQHM16jw", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = True
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0t6cPqbfXkGSAmNQHM16jw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsLoading = True
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pXOnH7HxcEym2WW2Vx8Law", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(model.variables.accommodationDataVar.hostInformationAttr.localityIdAttr, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Da0exwqrZ0Cf4tNvBD83Gw", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(model.variables.getAccommodationHelperDataAct.responseOut.getAccommodationHelperResponseAttr.hostInformationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.household, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dz8Gk6mSsUCDRvRGTIx4PA", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dz8Gk6mSsUCDRvRGTIx4PA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.CacheResult.Milliseconds
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.timezoneOffsetAttr = getCacheableTimezoneInfoVar.value.cacheResultOut.millisecondsAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dz8Gk6mSsUCDRvRGTIx4PA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsLoading = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dz8Gk6mSsUCDRvRGTIx4PA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9zIcVWCfuU6O2Kui5yshKg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Yivh7JTESEWxOatiEgAzuA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Yivh7JTESEWxOatiEgAzuA", callContext.id);
throw ex;

});
};
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
try {try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vVtk9gSbIUWahfg2LyH2yw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.vVtk9gSbIUWahfg2LyH2yw:Rz0u33ceIjdKHqZH5TusyA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetCaptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T60ktMf3BkqnM1CwyIDruQ", callContext.id);
// Success?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Vp0754T4km5OtEmrHYeXA", callContext.id) && model.variables.getCaptionsDataAct.successOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UUYDT5UR3EuqXaX4UHd_mg", callContext.id);
// Execute Action: ExtractChildrenNamesFromCaptions
extractChildrenNamesFromCaptionsVar.value = Connect2_OrbitMobile_MUIController.default.extractChildrenNamesFromCaptions$Action(model.variables.getCaptionsDataAct.photobookCaptionOut, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pb5QdIxwGU2GfSbqvgjUkQ", callContext.id);
// HouseholdCaptions = ExtractChildrenNamesFromCaptions.ChildrenNames
model.variables.householdCaptionsVar = extractChildrenNamesFromCaptionsVar.value.childrenNamesOut;
}

// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lvuHl6g73Uerwg6TtU+ETg", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CKGwzllHYk+4Q7x9hATsOw", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ScreenBlock_AccommodationHelper.OnAfterFetch_GetCaptions", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
OS.Logger.error(null, ex);
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cm0xkLd_ckyQ4R+qHmcsag", callContext.id);
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VIJAYG_z0UCnOSSyl3Wncw", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lm0ZhWlop0W6v4LVr0ASGQ", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vVtk9gSbIUWahfg2LyH2yw", callContext.id);
}

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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:RtSy_WlhpECL_pHVhJsY7Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw/ClientActions.RtSy_WlhpECL_pHVhJsY7Q:N4ppzce1jJ_YERI+0mlOHw", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4WMDyfhzZkSmbcN4Kl9NWA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6uzHG8yL5kepkOdiAGquEw", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z3eJDJ8wqEqx+Cyi2C+0uA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RtSy_WlhpECL_pHVhJsY7Q", callContext.id);
}

};

Controller.prototype.refreshCaptionsData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshCaptionsData$Action, callContext);

};
Controller.prototype.onHandle_ContactHostByMessage_ClickedEmail$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage_ClickedEmail$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_ClickedHostPhone$Action = function (phoneNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedHostPhone$Action, callContext, phoneNumberIn);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

};
Controller.prototype.onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMember$Action, callContext, householdIdIn, typeIn);

};
Controller.prototype.onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_CallClicked$Action, callContext, calledNumberIn);

};
Controller.prototype.onAfterFetch_GetAccommodationHelper$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetAccommodationHelper$Action, callContext);

};
Controller.prototype.buildCallDataHost$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, countryNameIn, householdSurnameIn, householdNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildCallDataHost$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, countryNameIn, householdSurnameIn, householdNameIn);

};
Controller.prototype.onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMemberPhone$Action, callContext, phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.onClick_GuestArrangements$Action = function (memberIdIn, hasGuestArrangementsIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_GuestArrangements$Action, callContext, memberIdIn, hasGuestArrangementsIn);

};
Controller.prototype.buildCallDataMember$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildCallDataMember$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn);

};
Controller.prototype.onHandle_ContactByPhone_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone_Cancel$Action, callContext);

};
Controller.prototype.onHandle_ContactHostByMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage$Action, callContext);

};
Controller.prototype.onAfterFetch_GetCaptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetCaptions$Action, callContext);

};
Controller.prototype.onHandle_ContactHostByMessage_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage_Cancel$Action, callContext);

};
Controller.prototype.navigateTo_ContactByEmail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_ContactHelpdesk$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_GuestArrangements$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_HouseholdDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qlMs27cqL0maySAJOxxAQw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.qlMs27cqL0maySAJOxxAQw:phGzGYbVWKgUguDMiU68cw", "Connect2_OrbitMobile_MUI", "ScreenBlock_AccommodationHelper", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qlMs27cqL0maySAJOxxAQw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$controller.OnAfterFetch_GetAccommodationHelper.RefreshCaptionsJS", [], function () {
return function ($actions, $roles, $public) {
$actions.RefreshCaptionsData();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"dG8rETXSTEitfbtjSBmb6w": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"pHR5zLF_F069uH7KWxzFRw": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"I6VCfAl_cka8xspaGWxUaA": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uEzm2Mb0vEWK4ZAfd3d6fw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"gpyJS+unTU699dvjE8x1Vw": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"y4fJR87DaUmLzXEMSD66aA": {
getter: function (varBag, idService) {
return varBag.checkDirectoryAccessVar.value;
}
},
"MZPgjYkpFEms4TXoExj4mg": {
getter: function (varBag, idService) {
return varBag.vars.value.calledNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xw9kHt8h5k+w+wxPJy0_pA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"zRQ9nqAcxUahhSyhSOLShw": {
getter: function (varBag, idService) {
return varBag.refreshCaptionsJSResult.value;
}
},
"Te7WkCDpHUmFJ__qZ5SaHg": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jQ__AT1T1ECACJLM2Uhvjw": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KoA_wXKK6kuAzhc7fqj7jQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"UTwVRuAHxEmgElTuARG_qg": {
getter: function (varBag, idService) {
return varBag.vars.value.countryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kTD3YNgB7kSyXwOBmF6PAA": {
getter: function (varBag, idService) {
return varBag.vars.value.householdSurnameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a8VGwic_GES68gjWSdB25A": {
getter: function (varBag, idService) {
return varBag.vars.value.householdNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EjMeMFaEsEOvztJpvDbTXA": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"mFppNNSCRUu3uzNhvz3x4w": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"VazDD6fbnkOLh2TdsMOk_w": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b89ZXhBkFECqBuZ37hUIuw": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IOzCq0p3fk6Nz2d3cUJaFw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"WkRpM4ys2U+Oo_71gxAHTg": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"rfLzCmyR8k61mbpFukbOkg": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fU5Y6y_qd06KG1xxV9NSLA": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"NFO70EMQa0aeCV+tygqL7A": {
getter: function (varBag, idService) {
return varBag.vars.value.hasGuestArrangementsInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ResS7tjlSUmjUhljHUJPqA": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xCtQFU7i9UaWljZyaeWjWA": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OOWueLoJ3k2LEyItttM4lg": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"W_B4+HII+U+gxp1cnwOxJA": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ZeY3N1+dcEyVJCgSTYYMQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JcU92AzHKEqe53OAXQKIYA": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"NPsr4HhAVkKIPy1wuDB0TA": {
getter: function (varBag, idService) {
return varBag.getCacheableMemberContactListVar.value;
}
},
"pXOnH7HxcEym2WW2Vx8Law": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"Da0exwqrZ0Cf4tNvBD83Gw": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"cm0xkLd_ckyQ4R+qHmcsag": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"UUYDT5UR3EuqXaX4UHd_mg": {
getter: function (varBag, idService) {
return varBag.extractChildrenNamesFromCaptionsVar.value;
}
},
"k2EuQ8FSHkeackFZMOZvjg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OMiH0dASaEa7r3EpS5ijaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.accommodationDataVar;
}
},
"76UF2CuzaUC4iyulocQQzA": {
getter: function (varBag, idService) {
return varBag.model.variables.householdCaptionsVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"te+60X86u0OGFsM2okN5Lg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingCaptionDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yoXwcc3NG0aZ1+cTXofZKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByPhoneDataVar;
}
},
"O9A_d91AS0aPRM6gx5g29Q": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByMessagePopupDataVar;
}
},
"bZt6jBho7E2rI6Gnpc5Gxw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RUfHjCwPlUapng5jceSesQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"RIP3b9X+p0qfLUrD8GDq7w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"0nkJazQbo0mKsHqHbmT2sw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadEventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UQr72ea5702bSnWqdrykcw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadMilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MqCXiQID8UiduCgna46Vpg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CBDDCvLwkEqH2I8z8RDTLw": {
getter: function (varBag, idService) {
return varBag.model.variables.getCaptionsDataAct;
}
},
"YPEnsgax2kqGPYW3cX9dZw": {
getter: function (varBag, idService) {
return varBag.model.variables.getAccommodationHelperDataAct;
}
},
"oxXs7DYrmUC6ejbfVZ6svQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"5wX2xYXZ3kOgxntFkSH+oA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"3ybrgdz_kkqp1u4CBZR6iw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"1VYyzjgnIk61N8CoaVF7YQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"kbi8zGrAQkS8Cuggbx4M4w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"3as4zRHM1EWNK3W7HVLyHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"D6KdREUCiEa8HOM3JH66Hw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"S0eQ2ogerk+E0SUPeiZSxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"gbS_LosSBUe0iIm0uc6qvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"mcv0j+juNk65jZ1IMky+tw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasData"));
})(varBag.model, idService);
}
},
"Ngo9k5RHdEm3jw_hLxmVeA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasSpecialNeedsData"));
})(varBag.model, idService);
}
},
"nS_RSyVeH0WUFa3tdMHEeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelpersData"));
})(varBag.model, idService);
}
},
"7ak5acWcakSndFrqnIYkXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"C22jgrUTCUGzd+qT4xOzYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"+CXewXIJJ0yU9XDC7L0cmw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"J1e2iPsCl0CZ1ueLddqJXw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"suVwqi2b1ESMN39N3VU69Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"voGen34NhUuTLdY7mP_p7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasRoomData"));
})(varBag.model, idService);
}
},
"miM+ruGlg0Cg4u5gBRfblw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"1PrUqEl7lkqLTzAAFx0qHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"Be06xaLbykqUpUzdRaIq1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"aOTo0OUhDkqH_lXUAeaakA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"PsfUPt7MpUemE7GG07mpVg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"9TrgB0FBhU+pQE_a9b1z7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"f4IfPzHR_E6Ptt5AYHJing": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_APIHasData"));
})(varBag.model, idService);
}
},
"ems9qiDtAkanw4VYNUnR_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"kE3TRJsxmkWEPxyFsx2pmw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"vRCWqMx9Gk6E8pN6cpwYaQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
