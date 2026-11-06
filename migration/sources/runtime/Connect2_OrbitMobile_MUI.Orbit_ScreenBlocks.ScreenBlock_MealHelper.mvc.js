define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$GetMealHelperResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_BL.model$GetMealHelper_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel) {
var OS = OutSystems.Internal;

var GetMealHelperDataActRec = (function (_super) {
__extends(GetMealHelperDataActRec, _super);
function GetMealHelperDataActRec(defaults) {
_super.apply(this, arguments);
}
GetMealHelperDataActRec.attributesToDeclare = function () {
return [
this.attr("HasData", "hasDataOut", "HasData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetMealHelper_ScreenRec());
}, true, Connect2_OrbitMobile_BLModel.GetMealHelper_ScreenRec)
].concat(_super.attributesToDeclare.call(this));
};
GetMealHelperDataActRec.init();
return GetMealHelperDataActRec;
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
this.attr("MealData", "mealDataVar", "MealData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetMealHelperResponseRec());
}, false, Connect2_OrbitMobile_ISModel.GetMealHelperResponseRec), 
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
this.attr("GetMealHelper", "getMealHelperDataAct", "getMealHelperDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetMealHelperDataActRec());
}, true, GetMealHelperDataActRec), 
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
Model._hasValidationWidgetsValue = (((((((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets);
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
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_MealHelper");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$GetMealHelperResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_BL.model$GetMealHelper_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_MealHelper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller;
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
In_EventName: model.getCachedValue(idService.getId("9JE8PKpCWkaSLeIpY+1l7w.In_EventName"), function () {
return ((((model.variables.mealDataVar.eventDetailsAttr.nameAttr) !== (""))) ? (model.variables.mealDataVar.eventDetailsAttr.nameAttr) : (model.variables.in_PreloadEventNameIn));
}, function () {
return model.variables.mealDataVar.eventDetailsAttr.nameAttr;
}, function () {
return model.variables.in_PreloadEventNameIn;
}),
_in_EventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadEventNameInDataFetchStatus),
In_MilestoneName: model.getCachedValue(idService.getId("9JE8PKpCWkaSLeIpY+1l7w.In_MilestoneName"), function () {
return ((((model.variables.mealDataVar.milestoneTitleAttr) !== (""))) ? (model.variables.mealDataVar.milestoneTitleAttr) : (model.variables.in_PreloadMilestoneNameIn));
}, function () {
return model.variables.mealDataVar.milestoneTitleAttr;
}, function () {
return model.variables.in_PreloadMilestoneNameIn;
}),
_in_MilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadMilestoneNameInDataFetchStatus),
In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus)
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
return [$if((model.variables.getMealHelperDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [$if(model.variables.getMealHelperDataAct.hasDataOut, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_view, {
inputs: {
IsFetchingCaptions: model.variables.isFetchingCaptionDataVar,
MilestoneDateTime: model.variables.mealDataVar.milestoneDateTimeAttr,
Captions: model.variables.householdCaptionsVar,
HostInformation: model.variables.mealDataVar.hostInformationAttr,
In_MilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_MilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus)
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
_dependencies: []
}), $if(!(model.variables.getMealHelperDataAct.responseOut.getMealMilestoneHelperResponseAttr.specialNeedsAttr.isEmpty), false, this, function () {
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
UsePadding: false,
ExtendedClass: "orbit-accordion-item"
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
value: "Special Need/s",
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
"disable-virtualization": model.getCachedValue(idService.getId("KAi_w2tdcUK3DdHcPJTb7g.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.mealDataVar.specialNeedsAttr,
style: "list list-group orbit-household-list",
tag: "div",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_MemberInformation: model.getCachedValue(idService.getId("SeBGgw66gk2JKMzSvK8WMQ.In_MemberInformation"), function () {
return function () {
var rec = new Connect2_OrbitMobile_ISModel.MemberInformationRec();
rec.householderIdAttr = model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).householderIdAttr;
rec.memberIdAttr = model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).memberIdAttr;
rec.firstNameAttr = model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).firstNameAttr;
rec.lastNameAttr = model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).lastNameAttr;
rec.titleAttr = model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).titleAttr;
rec.isHouseholderAttr = false;
rec.signedPhotoURLAttr = model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).signedPhotoURLAttr;
return rec;
}();
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).householderIdAttr;
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).memberIdAttr;
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).firstNameAttr;
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).lastNameAttr;
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).titleAttr;
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).signedPhotoURLAttr;
}),
Is_ShowPersonalInfo: false,
In_HideMemberInfoLocation: true,
In_DisplayDot: false,
In_HouseholderId: model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).householderIdAttr
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
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "10",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_OrbitAdmin: PlaceholderContent.Empty,
placeholder_Info: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width",
visible: !(model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.isEmpty),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("0jBHsP2vwESWi5O79UINQg.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr,
style: "list list-group orbit-member-list",
tag: "div",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full width text-neutral-6 margin-top-xs",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr), asPrimitiveValue(model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr)]
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("_uztj790Oky+Ap_nTIJv4w.Value"), function () {
return (model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr + (((((model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr) !== ("")) && ((model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr) !== ("")))) ? ((": " + model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr)) : (model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr)));
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr;
}, function () {
return model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr;
}),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, callContext, idService, "2")
},
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.specialNeedsAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.specialNeedsAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.mealDataVar.helpersAttr.isEmpty), false, this, function () {
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
uuid: "15",
alias: "8"
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
uuid: "16",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Helper/s",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("ppGpo5PQTUSulsUTGkzgzg.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.mealDataVar.helpersAttr,
style: "list list-group orbit-household-list",
tag: "div",
_idProps: {
service: idService,
uuid: "18"
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
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr), asPrimitiveValue(model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m padding-bottom-base padding-top-xs font-size-1-1em text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("qrSQ6CtMP0a_W1E1wN+X8g.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedStringFromHelperType$Action(model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr, callContext).out_FormattedStringOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr;
}),
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("KXGz1PowaUyDx_OcQetrVw.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr,
style: "list list-group orbit-member-list",
tag: "div",
_idProps: {
service: idService,
uuid: "22"
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
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_MemberInformation: model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
In_HouseholdCountryCode: model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).countryCodeAttr,
In_DisplayDot: false,
Is_ShowPersonalInfo: true,
In_HouseholdLocality: model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).localityAttr,
In_HouseholderId: model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).householderIdAttr
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
uuid: "24",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_OrbitAdmin: PlaceholderContent.Empty,
placeholder_Info: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width font-size-s text-neutral-6",
visible: ((model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.hostAttr) !== ("")),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper/Expression onclick");
return controller.onHandle_ClickedMember$Action(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
value: ("Accommodation: " + model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.hostAttr),
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.hostAttr)]
}))];
}, callContext, idService, "4")
},
_dependencies: []
}))];
}, callContext, idService, "4")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.helpersAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.helpersAttr)]
})];
}, function () {
return [];
}), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
inputs: {
In_ExtendedClass: "border-bottom-neutral-4"
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
uuid: "27",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: !(model.variables.mealDataVar.guestsAttr.isEmpty),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
UsePadding: false,
ExtendedClass: "orbit-accordion-item",
IsExpanded: true
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
uuid: "29",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return ["Guest/s"];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("22lptmNI1Eu9t4E2krolpw.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.mealDataVar.guestsAttr,
style: "list list-group orbit-household-list",
tag: "div",
_idProps: {
service: idService,
uuid: "30"
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
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr)]
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("4sEE4TfVFUWVugwPtjVx2Q.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr,
style: "list list-group orbit-member-list",
tag: "div",
_idProps: {
service: idService,
uuid: "32"
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
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr)]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_HouseholdCountryCode: model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr,
In_DisplayDot: model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr,
In_HouseholderId: model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_MemberInformation: model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
In_HouseholdLocality: model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr,
Is_ShowPersonalInfo: true,
In_ShowAdminTag: model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).hasOrbitAdminRoleAttr
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
return controller.onHandle_ClickedMemberPhone$Action(event_PhoneNumberIn, event_CallNameIn, model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr, event_MemberIdIn, event_SignedPhotoURLIn, controller.callContext(eventHandlerContext));
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
uuid: "34",
alias: "13"
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
uuid: "35",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Info: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width font-size-s text-neutral-6",
visible: ((model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.hostAttr) !== ("")),
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper/Expression onclick");
return controller.onHandle_ClickedMember$Action(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
value: ("Accommodation: " + model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.hostAttr),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).accommodationAttr.hostAttr)]
}))];
}, callContext, idService, "6")
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.mealDataVar.guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr)]
}))];
}, callContext, idService, "6")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.guestsAttr)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.mealDataVar.guestsAttr)]
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "This meal milestone is still being organised. Please check again later or contact the Orbit Helpdesk if you have any questions."
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
uuid: "38",
alias: "15"
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
In_SkeletonLoadingId: model.getCachedValue(idService.getId("8sYYyTp0p0Oyr0SMnxiMJQ.In_SkeletonLoadingId"), function () {
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
uuid: "39",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(model.variables.getMealHelperDataAct.hasDataOut, false, this, function () {
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
uuid: "40",
alias: "17"
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
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "42",
alias: "18"
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
alias: "19"
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
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "44",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller.OnAfterFetch_GetMealMilestoneHelper.RefreshCaptionsJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$GetMealHelperResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.model$UI_ContactByMessage_WrapperDataTextRecord", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.controller$ExtractChildrenNamesFromCaptions", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_BL.model$GetMealHelper_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_LegacySharedModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller_OnAfterFetch_GetMealMilestoneHelper_RefreshCaptionsJS) {
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
getMealHelper$DataActRefresh: -1,
getCaptions$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getMealHelper$DataActRefresh: [],
getCaptions$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getMealHelper$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:APyfjJd9gEK7ChwkcDwj5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/DataActions.APyfjJd9gEK7ChwkcDwj5A:bjdMcFFYOFhalNzxYQzVhw", "Connect2_OrbitMobile_MUI", "GetMealHelper", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper/GetMealHelper");
return controller.callDataAction("DataActionGetMealHelper", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_MealHelper/DataActionGetMealHelper", "LWMrcAuWUxtLRPjRiFYzcg", function (b) {
model.variables.getMealHelperDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getMealHelperDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMealHelperDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper/GetMealHelper On After Fetch");
controller._onAfterFetch_GetMealMilestoneHelper$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:APyfjJd9gEK7ChwkcDwj5A", callContext.id);
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

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:6bC_rDzZxE+8Kzjky1+Wqw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/DataActions.6bC_rDzZxE+8Kzjky1+Wqw:B1jqzVrY3eNTpiyEcsgw5A", "Connect2_OrbitMobile_MUI", "GetCaptions", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper/GetCaptions");
return controller.callDataAction("DataActionGetCaptions", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_MealHelper/DataActionGetCaptions", "JGXJQ32YpmOgULXnGXM1KA", function (b) {
model.variables.getCaptionsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCaptionsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCaptionsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper/GetCaptions On After Fetch");
controller._onAfterFetch_GetCaptions$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:6bC_rDzZxE+8Kzjky1+Wqw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getMealHelper$DataActRefresh", "getCaptions$DataActRefresh"];
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:axotDZhe806p0DqdogzArg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.axotDZhe806p0DqdogzArg:jC0ds1+qJXbfW74F6XRTmA", "Connect2_OrbitMobile_MUI", "RefreshCaptionsData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JMzYHunQm0KdPzfuh3mc4g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IDUPdQguwUuIFyEj1nurDw", callContext.id);
// Refresh Query: GetCaptions
var result = controller.getCaptions$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jYa1DMHd3EON3IUEThMXtg", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_MealHelper.RefreshCaptionsData", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
OS.Logger.error(null, ex);
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mcPL2bWj4km_NpM3ow9SmQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:d4HqqatoREmEzHnr5SIbZg", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gf65th8TKEyklMuec4SOog", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:axotDZhe806p0DqdogzArg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:axotDZhe806p0DqdogzArg", callContext.id);
throw ex;

});
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dTHgEz8HQEKYvPXlUcClzA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.dTHgEz8HQEKYvPXlUcClzA:HIB5xOxfQsRaB3QJFHw1Ag", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fPF+voiwJkGoZBlirE4kbg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T8FvrNhO2Ei9pN+XGH1KqQ", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.Name = MealData.HostInformation.HouseholdName + If
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr = (model.variables.mealDataVar.hostInformationAttr.householdNameAttr + ((((model.variables.mealDataVar.hostInformationAttr.householdSurnameAttr) !== (""))) ? ((" " + model.variables.mealDataVar.hostInformationAttr.householdSurnameAttr)) : ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T8FvrNhO2Ei9pN+XGH1KqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.CountryName = MealData.HostInformation.CountryName
model.variables.contactByMessagePopupDataVar.countryNameAttr = model.variables.mealDataVar.hostInformationAttr.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T8FvrNhO2Ei9pN+XGH1KqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.Phone = MealData.HostInformation.MobilePhone
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.phoneAttr = model.variables.mealDataVar.hostInformationAttr.mobilePhoneAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T8FvrNhO2Ei9pN+XGH1KqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.Email = MealData.HostInformation.Email
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr = model.variables.mealDataVar.hostInformationAttr.emailAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T8FvrNhO2Ei9pN+XGH1KqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.Locality = MealData.HostInformation.LocalityName
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr = model.variables.mealDataVar.hostInformationAttr.localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T8FvrNhO2Ei9pN+XGH1KqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.CountryName = MealData.HostInformation.CountryName
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr = model.variables.mealDataVar.hostInformationAttr.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w_NRc9nG_02Hy+l0po4aKg", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = True
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w_NRc9nG_02Hy+l0po4aKg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsLoading = True
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w_NRc9nG_02Hy+l0po4aKg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kGy9PmSPJ06BLA+yTmguQw", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(model.variables.mealDataVar.hostInformationAttr.localityIdAttr, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KnBu7tA020GU7VwYdsOeEg", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(model.variables.mealDataVar.hostInformationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.household, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FewnqaJS3UuSoURZY_bygQ", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FewnqaJS3UuSoURZY_bygQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.CacheResult.Milliseconds
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.timezoneOffsetAttr = getCacheableTimezoneInfoVar.value.cacheResultOut.millisecondsAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FewnqaJS3UuSoURZY_bygQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsLoading = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FewnqaJS3UuSoURZY_bygQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FewnqaJS3UuSoURZY_bygQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cV8aDBTD7kSJQEOg7nHwKw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dTHgEz8HQEKYvPXlUcClzA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dTHgEz8HQEKYvPXlUcClzA", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:QJUATr1+8Eup7e5vcDpEfQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.QJUATr1+8Eup7e5vcDpEfQ:baBJUtepRtLdMmzTUVP4_w", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dfpU2gX_MEy+HvGeBftaVg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7CZzyMfPTkGPMfiUYzIU3A", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ybP+sG+UkUm0MnE_1cR3TA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NblLFj_j+02zGTmsr+kZOQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FQPGGtzJo0Kt_ePzF4d+6g", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1IZT76j1CkOlvFZKnByEMA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:QJUATr1+8Eup7e5vcDpEfQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:QJUATr1+8Eup7e5vcDpEfQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
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
try {try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fcxPTpZH5EK2sNjU5BRH6Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.fcxPTpZH5EK2sNjU5BRH6Q:x1aM7ITdO9GZGp8oVKaBzQ", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetCaptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LnsSZWPimUK4PECRFHWxVw", callContext.id);
// Success?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pfg6LnGwNkmr0m0BtdUa4w", callContext.id) && model.variables.getCaptionsDataAct.successOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tSq8iJ4fTUaYiLabKLLqsA", callContext.id);
// Execute Action: ExtractChildrenNamesFromCaptions
extractChildrenNamesFromCaptionsVar.value = Connect2_OrbitMobile_MUIController.default.extractChildrenNamesFromCaptions$Action(model.variables.getCaptionsDataAct.photobookCaptionOut, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fzwSM_VuXkininQ9H1ScEw", callContext.id);
// HouseholdCaptions = ExtractChildrenNamesFromCaptions.ChildrenNames
model.variables.householdCaptionsVar = extractChildrenNamesFromCaptionsVar.value.childrenNamesOut;
}

// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ppwh8V4ib0+EWZ_zaiPG5Q", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yfFlPlRbBkiK+ZXybl+1Rg", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ScreenBlock_MealHelper.OnAfterFetch_GetCaptions", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
OS.Logger.error(null, ex);
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JHU7+tT+Gk6KcvHpWgf7iA", callContext.id);
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tYekcvd9lEecjX9GWbH_4w", callContext.id);
// IsFetchingCaptionData = False
model.variables.isFetchingCaptionDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WHvWSMz1UEqh_9l7JoyDHQ", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fcxPTpZH5EK2sNjU5BRH6Q", callContext.id);
}

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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rk64Toeec0CXx+6RNw98nA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.rk64Toeec0CXx+6RNw98nA:HgddDJr9vJLNqya_04GlAg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:96snFQpvr0SjI98rFwV0IQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+sF0zZMZJ0aDuvlMXPvXvw", callContext.id);
// Trigger Event: NavigateTo_ContactHelpdesk
return controller.navigateTo_ContactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.mealDataVar.milestoneDateTimeAttr, model.variables.mealDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_PreloadMilestoneNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QqcNmPJZzEWJWOkIaRncqQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rk64Toeec0CXx+6RNw98nA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rk64Toeec0CXx+6RNw98nA", callContext.id);
throw ex;

});
};
Controller.prototype._buildMemberCallData$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BuildMemberCallData");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.BuildMemberCallData$vars"))());
vars.value.phoneInLocal = phoneIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.callNameInLocal = callNameIn;
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
var getCacheableTimezoneInfoVar = new OS.DataTypes.VariableHolder();
var getCacheableMemberContactListVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
varBag.getCacheableTimezoneInfoVar = getCacheableTimezoneInfoVar;
varBag.getCacheableMemberContactListVar = getCacheableMemberContactListVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OuDzUw8Fm0uCwsuxg0tk2Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.OuDzUw8Fm0uCwsuxg0tk2Q:7CZIdxBhP4KjeMhSJo3YDQ", "Connect2_OrbitMobile_MUI", "BuildMemberCallData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8XN6lyz30ESKnbi6D1hb7Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yAIfTP6ql0KrEW49uUiaUQ", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = CallName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = vars.value.callNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yAIfTP6ql0KrEW49uUiaUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ImageURL = SignedPhotoURL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = vars.value.signedPhotoURLInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yAIfTP6ql0KrEW49uUiaUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yAIfTP6ql0KrEW49uUiaUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yAIfTP6ql0KrEW49uUiaUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.IsLoading = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WGXQtjG++UGYLucoI0CWEQ", callContext.id);
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
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8_zxdMv5AkyJ1Sdg+8MsnA", callContext.id) && getCacheableMemberContactListVar.value.memberContactListOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xuYG3ZpvCE22NdjF8djbUA", callContext.id);
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xuYG3ZpvCE22NdjF8djbUA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9SthP2QZv0yZwf1QyxexAw", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PxBHuXQgSkqDf2niuiscgw", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PxBHuXQgSkqDf2niuiscgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PxBHuXQgSkqDf2niuiscgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PxBHuXQgSkqDf2niuiscgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7MuWmP7BlUCUCduyCz_Fvg", callContext.id) && !(((model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F++3BCHEu06LODK5UqDIyg", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(vars.value.memberIdInLocal, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.small, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zGTke41nGUS9f7hWYEKgaw", callContext.id);
// ContactByPhoneData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jg71CR18K0ujJJPSouyZkA", callContext.id);
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableMemberContactList.MemberContactList.Current.LocalityName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jg71CR18K0ujJJPSouyZkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.MobilePhone = GetCacheableMemberContactList.MemberContactList.Current.MobilePhoneNumber
model.variables.contactByPhoneDataVar.mobilePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).mobilePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jg71CR18K0ujJJPSouyZkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.HomePhone = GetCacheableMemberContactList.MemberContactList.Current.HomePhoneNumber
model.variables.contactByPhoneDataVar.homePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).homePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jg71CR18K0ujJJPSouyZkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.WorkPhone = GetCacheableMemberContactList.MemberContactList.Current.WorkPhoneNumber
model.variables.contactByPhoneDataVar.workPhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).workPhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jg71CR18K0ujJJPSouyZkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableMemberContactList.MemberContactList.Current.Timezone.TimezoneLabel
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.timezoneLabelAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jg71CR18K0ujJJPSouyZkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableMemberContactList.MemberContactList.Current.Timezone.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jg71CR18K0ujJJPSouyZkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableMemberContactList.MemberContactList.Current.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).countryNameAttr;
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Wlsur8HyZ02fsO7B56R1gg", callContext.id);
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Wlsur8HyZ02fsO7B56R1gg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2EsN+GwRSESwy9bLyBF5Wg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OuDzUw8Fm0uCwsuxg0tk2Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OuDzUw8Fm0uCwsuxg0tk2Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.BuildMemberCallData$vars", [{
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LZz0av9Sj0ycNndukAXbWQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.LZz0av9Sj0ycNndukAXbWQ:dkR8tW3LdIchEHVyukeExw", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage_ClickedEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Em7LLwZuk28Wj2jXA7urw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0qrsshf7kEWaHSClVOw_6Q", callContext.id);
// Execute Action: OnHandle_ContactHostByMessage_Cancel
controller._onHandle_ContactHostByMessage_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u7anXetvrE28VlQtBT4jXg", callContext.id);
// Trigger Event: NavigateTo_ContactByEmail
return controller.navigateTo_ContactByEmail$Action(model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.imageURLAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.nameAttr, model.variables.mealDataVar.hostInformationAttr.householdSurnameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.localityAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.countryNameAttr, model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.emailAttr, OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.mealDataVar.milestoneDateTimeAttr, model.variables.mealDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.mealDataVar.milestoneTitleAttr, OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.mealDataVar.milestoneDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ESBzWdoZk0SyYDTTmVzBiQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LZz0av9Sj0ycNndukAXbWQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LZz0av9Sj0ycNndukAXbWQ", callContext.id);
throw ex;

});
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.BuildCallDataHost$vars"))());
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:U9Z2crpNB0G1iWC0rhoXAA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.U9Z2crpNB0G1iWC0rhoXAA:5bIpVXIwE+6zJ+LCN0KuqA", "Connect2_OrbitMobile_MUI", "BuildCallDataHost", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:etui5k6cNESyKBEQ2CgvUQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gtGsbBQe2EKZAh+_hm7lGw", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = HouseholdName + If
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = (vars.value.householdNameInLocal + ((((vars.value.householdSurnameInLocal) !== (""))) ? ((" " + vars.value.householdSurnameInLocal)) : ("")));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gtGsbBQe2EKZAh+_hm7lGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.Locality = CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = vars.value.countryNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gtGsbBQe2EKZAh+_hm7lGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gtGsbBQe2EKZAh+_hm7lGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = vars.value.countryNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q_0S4B+YoUW1bpGgf_XH8w", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q_0S4B+YoUW1bpGgf_XH8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XxFtdpl1C0ykTf69CIlQJQ", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WwaPkQeilEKIJleaVK_RzQ", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(model.variables.getMealHelperDataAct.responseOut.getMealMilestoneHelperResponseAttr.hostInformationAttr.householderIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.household, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_XnV+ALesUGtTjJEzleKVQ", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_XnV+ALesUGtTjJEzleKVQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_XnV+ALesUGtTjJEzleKVQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_XnV+ALesUGtTjJEzleKVQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+TchvEvvbUu5lhDC_0g8kA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:U9Z2crpNB0G1iWC0rhoXAA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:U9Z2crpNB0G1iWC0rhoXAA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.BuildCallDataHost$vars", [{
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:GZi0c65WDU2cCCT1qzlHjQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.GZi0c65WDU2cCCT1qzlHjQ:rkLAk5oRHnQtw7GWseypfA", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dVZuS6_0vkC8msvZpZ+oFQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J_7sMuUm50W0B5B4Nz1CbA", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J_7sMuUm50W0B5B4Nz1CbA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jumSv8TCt0aYBK8Nv4Nlfg", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VewePfA+XEeEAd_6SR9Ewg", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LpY4Fz4Wt0m41rRz3e3pIg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ldCCnG_Q70eXH6w6YTgSGQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:GZi0c65WDU2cCCT1qzlHjQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedMember");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_ClickedMember$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.typeInLocal = typeIn;
var checkDirectoryAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkDirectoryAccessVar = checkDirectoryAccessVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:uwesmIDo30aCqLUIhQ607A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.uwesmIDo30aCqLUIhQ607A:pI84SFVYH71U263DMayL_Q", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1npDjb84wkeq_il9IKq3zw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uYK2cB8YM066Xa1HygAUBA", callContext.id);
// Execute Action: CheckDirectoryAccess
model.flush();
return Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action(vars.value.householdIdInLocal, vars.value.typeInLocal, callContext).then(function (value) {
checkDirectoryAccessVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MKpbJIUrU0ag5FP9CESUIQ", callContext.id) && checkDirectoryAccessVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ssvgni5OSEiFU+FXKTe0gA", callContext.id);
// Trigger Event: NavigateTo_HouseholdDetail
return controller.navigateTo_HouseholdDetail$Action(vars.value.householdIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:riqk9Dt6fki0tIcCcNra4Q", callContext.id);
// Execute Action: OnApplicationEvent_ViewHousehold
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ViewHousehold$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec();
rec.targetHouseholdIdAttr = vars.value.householdIdInLocal;
rec.milestoneIdAttr = model.variables.in_MilestoneIdIn;
rec.milestoneTitleAttr = model.variables.mealDataVar.milestoneTitleAttr;
rec.eventIdAttr = model.variables.mealDataVar.eventDetailsAttr.idAttr;
rec.eventTitleAttr = model.variables.mealDataVar.eventDetailsAttr.nameAttr;
rec.eventLocationAttr = model.variables.mealDataVar.eventDetailsAttr.locationAttr;
return rec;
}(), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_k29GeB6yECGHcs7H+8nFg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mNYbgka_SEWjFU+1DNnGhw", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NiGL0F2qCkGlYZXhRRDilQ", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uwesmIDo30aCqLUIhQ607A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:uwesmIDo30aCqLUIhQ607A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_ClickedMember$vars", [{
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
Controller.prototype._onHandle_ClickedHostPhone$Action = function (phoneNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedHostPhone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_ClickedHostPhone$vars"))());
vars.value.phoneNumberInLocal = phoneNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:q7eGopTHKEC2_kas+LoNqA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.q7eGopTHKEC2_kas+LoNqA:NrwSyrhOKwkkO1Fv5v7HlQ", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedHostPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P3eRRrepl0eAqYJ8Ly6OUQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c_rV6qatB0u5KtEvqevvHw", callContext.id) && ((vars.value.phoneNumberInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qDp_l5MFlkyqsP0euLND2A", callContext.id);
// Execute Action: BuildCallDataHost
return controller._buildCallDataHost$Action(model.variables.mealDataVar.hostInformationAttr.phoneAttr, model.variables.mealDataVar.hostInformationAttr.signedPhotoURLAttr, model.variables.mealDataVar.hostInformationAttr.localityIdAttr, model.variables.mealDataVar.hostInformationAttr.countryNameAttr, model.variables.mealDataVar.hostInformationAttr.householdSurnameAttr, model.variables.mealDataVar.hostInformationAttr.householdNameAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gOUfT0ALs0OCnPg+szX5wQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sbmzCEgdOEufUEgedSJZVQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:q7eGopTHKEC2_kas+LoNqA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:q7eGopTHKEC2_kas+LoNqA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_ClickedHostPhone$vars", [{
name: "PhoneNumber",
attrName: "phoneNumberInLocal",
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_CallClicked$vars"))());
vars.value.calledNumberInLocal = calledNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:RThm0unMsESIlaoQk4uUMw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.RThm0unMsESIlaoQk4uUMw:oKOTQBa0yMHBdp44lM5jfw", "Connect2_OrbitMobile_MUI", "OnHandle_CallClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dqYUwoLpRUu6TV2zZ7pGXg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1lcycUm_gkeOiWMmBlISeQ", callContext.id);
// Execute Action: OnApplicationEvent_CallMember
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_CallMember$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_CallMemberRec();
rec.milestoneIdAttr = model.variables.in_MilestoneIdIn;
rec.milestoneTitleAttr = model.variables.mealDataVar.milestoneTitleAttr;
rec.eventIdAttr = model.variables.mealDataVar.eventDetailsAttr.idAttr;
rec.eventTitleAttr = model.variables.mealDataVar.eventDetailsAttr.nameAttr;
rec.householdNameAttr = model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr;
rec.householderPhoneAttr = vars.value.calledNumberInLocal;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7gl7_pPO206gG9OSg2PDuQ", callContext.id);
// Execute Action: OnHandle_ContactByPhone_Cancel
controller._onHandle_ContactByPhone_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FP7rXsOp6E2bYH9Zgfv5uA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RThm0unMsESIlaoQk4uUMw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RThm0unMsESIlaoQk4uUMw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_CallClicked$vars", [{
name: "CalledNumber",
attrName: "calledNumberInLocal",
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_ClickedMemberPhone$vars"))());
vars.value.phoneNumberInLocal = phoneNumberIn;
vars.value.callNameInLocal = callNameIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:h5RF1ZuCvU6BmXmJCPy07Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.h5RF1ZuCvU6BmXmJCPy07Q:dlr4QH0yQMxKY9I_4dG+kw", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMemberPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_5NTqnbdukqCxnvA5g9edQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Orj6lVdkV0i__ZncI1rppQ", callContext.id) && ((vars.value.phoneNumberInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w4AgzFF_20eRPwPBOmy8gw", callContext.id);
// Execute Action: BuildMemberCallData
return controller._buildMemberCallData$Action(vars.value.phoneNumberInLocal, vars.value.signedPhotoURLInLocal, vars.value.localityIdInLocal, vars.value.memberIdInLocal, vars.value.callNameInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cCkCG0nJ6UWDa1E85y41uA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ytSvLPbJ60yaDpxVM7BgYg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:h5RF1ZuCvU6BmXmJCPy07Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:h5RF1ZuCvU6BmXmJCPy07Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.OnHandle_ClickedMemberPhone$vars", [{
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:O_5k2eq5IUOCftKnrBf3ZQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.O_5k2eq5IUOCftKnrBf3ZQ:VbQBGOvAC+jeAKGMi974VQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHostByMessage_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4ha6RyT1Y0a8kaZoYDYTKg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dgnq6unadkmxldFkmnMYQg", callContext.id);
// ContactByMessagePopupData.UI_ContactByMessage_WrapperData.ContactPopupData.ShowPopup = False
model.variables.contactByMessagePopupDataVar.uI_ContactByMessage_WrapperDataAttr.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w2j54Qfd9UujvX1glhfAzw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:O_5k2eq5IUOCftKnrBf3ZQ", callContext.id);
}

};
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wS132X6ORk2TWY3Vi0sY9A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.wS132X6ORk2TWY3Vi0sY9A:e6xazfBHkh4DEi2HATA2Qg", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h7WtTEsvs0u_O9x_X2zVlA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ww4oI4J+lEq+QaJXGPg2jw", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FZkD3tgUGUuyyEuYWtXqyg", callContext.id);
// Refresh Query: GetMealHelper
var result = controller.getMealHelper$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PW3kojEBF0a4iyRjYPBphA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wS132X6ORk2TWY3Vi0sY9A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wS132X6ORk2TWY3Vi0sY9A", callContext.id);
throw ex;

});
};
Controller.prototype._onAfterFetch_GetMealMilestoneHelper$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetMealMilestoneHelper");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
try {try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yF8Q74NBlEGo+twXzIlDVA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.yF8Q74NBlEGo+twXzIlDVA:ilDlJf7UivnzCpPSlBQQxA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetMealMilestoneHelper", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nqmXn7pHuEC4BC69fUgsEA", callContext.id);
// Set data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DY7Ys6dz50mtF62dgRBnaA", callContext.id);
// MealData = GetMealHelper.Response.GetMealMilestoneHelperResponse
model.variables.mealDataVar = model.variables.getMealHelperDataAct.responseOut.getMealMilestoneHelperResponseAttr;
// Set Fetching Flags
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DcD1tZ2Qp0CHm26BRI8Faw", callContext.id);
// IsFetchingCaptionData = True
model.variables.isFetchingCaptionDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DcD1tZ2Qp0CHm26BRI8Faw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G04c+9U+9U26trlsIiYNbA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_controller_OnAfterFetch_GetMealMilestoneHelper_RefreshCaptionsJS, "RefreshCaptions", "OnAfterFetch_GetMealMilestoneHelper", null, function ($parameters) {
}, {
RefreshCaptionsData: controller.clientActionProxies.refreshCaptionsData$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4xwlb7FRbEa2tzQiKNUzLQ", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ScreenBlock_MealHelper.OnAfterFetch_GetMealMilestoneHelper", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+L0AKPR6702sSGU1Wu7Shg", callContext.id);
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VuQr+jOmwUqYYHOo12k4aQ", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GitM5eOrOUWh_xkAat8Kww", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yF8Q74NBlEGo+twXzIlDVA", callContext.id);
}

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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:g4VC9tvUNUqZcHaz83NEkw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw/ClientActions.g4VC9tvUNUqZcHaz83NEkw:80qBA_TY5g48W1qB6lSgdQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UHySTkL8e0yetekrnKF4Iw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mkPDAcKpxEGBG9ANjczkPQ", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tNXqb1dBTkmF4qds5R3DBw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:g4VC9tvUNUqZcHaz83NEkw", callContext.id);
}

};

Controller.prototype.refreshCaptionsData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshCaptionsData$Action, callContext);

};
Controller.prototype.onHandle_ContactHostByMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onAfterFetch_GetCaptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetCaptions$Action, callContext);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

};
Controller.prototype.buildMemberCallData$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildMemberCallData$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn);

};
Controller.prototype.onHandle_ContactHostByMessage_ClickedEmail$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage_ClickedEmail$Action, callContext);

};
Controller.prototype.buildCallDataHost$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, countryNameIn, householdSurnameIn, householdNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildCallDataHost$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, countryNameIn, householdSurnameIn, householdNameIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMember$Action, callContext, householdIdIn, typeIn);

};
Controller.prototype.onHandle_ClickedHostPhone$Action = function (phoneNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedHostPhone$Action, callContext, phoneNumberIn);

};
Controller.prototype.onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_CallClicked$Action, callContext, calledNumberIn);

};
Controller.prototype.onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMemberPhone$Action, callContext, phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn);

};
Controller.prototype.onHandle_ContactHostByMessage_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHostByMessage_Cancel$Action, callContext);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.onAfterFetch_GetMealMilestoneHelper$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetMealMilestoneHelper$Action, callContext);

};
Controller.prototype.onHandle_ContactByPhone_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone_Cancel$Action, callContext);

};
Controller.prototype.navigateTo_HouseholdDetail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_ContactByEmail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_ContactHelpdesk$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:g+7c78VpQkGpOvhDPTl+tw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.g+7c78VpQkGpOvhDPTl+tw:nzlmDXEtcZm1cE0pLWe+gQ", "Connect2_OrbitMobile_MUI", "ScreenBlock_MealHelper", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:g+7c78VpQkGpOvhDPTl+tw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$controller.OnAfterFetch_GetMealMilestoneHelper.RefreshCaptionsJS", [], function () {
return function ($actions, $roles, $public) {
$actions.RefreshCaptionsData();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"mcPL2bWj4km_NpM3ow9SmQ": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"kGy9PmSPJ06BLA+yTmguQw": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"KnBu7tA020GU7VwYdsOeEg": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"7CZzyMfPTkGPMfiUYzIU3A": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"JHU7+tT+Gk6KcvHpWgf7iA": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"tSq8iJ4fTUaYiLabKLLqsA": {
getter: function (varBag, idService) {
return varBag.extractChildrenNamesFromCaptionsVar.value;
}
},
"Gu+m+_ODekSoF6m0CMhqlA": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DSFihACoGU2iwANBLynOQw": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"z+Xvn8+MKkqSce8XOlEx6g": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"UYNiKxpYy0eWFpgapRS5_g": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"w4hsGVtG1EOHlnoVKYFkFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"F++3BCHEu06LODK5UqDIyg": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"9SthP2QZv0yZwf1QyxexAw": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"WGXQtjG++UGYLucoI0CWEQ": {
getter: function (varBag, idService) {
return varBag.getCacheableMemberContactListVar.value;
}
},
"Icnqc+BWrESQS2q04STEuw": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2i3VuMpdh02TFIvHjIGUiw": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gNoKKCaIE0iPrUa8jCuowQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"RiNwtr66wkiOW_TctLb5VA": {
getter: function (varBag, idService) {
return varBag.vars.value.countryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3bDgCqDU1Ea8b6aaWZ++Uw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdSurnameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_tUu_qPVtUqPff2qfKYdBw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XxFtdpl1C0ykTf69CIlQJQ": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"WwaPkQeilEKIJleaVK_RzQ": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"jumSv8TCt0aYBK8Nv4Nlfg": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"TBhqDR_ZSUqufAFpPZQmWg": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"P9DPVB6Rxk2qBFCSF75kEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uYK2cB8YM066Xa1HygAUBA": {
getter: function (varBag, idService) {
return varBag.checkDirectoryAccessVar.value;
}
},
"e1l2Nc6Z0EaQMwjR4NPf9Q": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pNuCwXlapE2RejS1vk7vog": {
getter: function (varBag, idService) {
return varBag.vars.value.calledNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+dFWMusfaUK2e6w10HX44Q": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+b1CcxWVHE2ngyAtX3estw": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a3v4p2GJc06B1GLv3hBcUw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"CAzeaRLJoUSczN5WlwIe5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"JSCvIjRgik+_gEW223SfcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+L0AKPR6702sSGU1Wu7Shg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"G04c+9U+9U26trlsIiYNbA": {
getter: function (varBag, idService) {
return varBag.refreshCaptionsJSResult.value;
}
},
"PXdX4C61b0ajw5nhogRRxA": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PZEHEjLYSkSaBnU+qdh_Nw": {
getter: function (varBag, idService) {
return varBag.model.variables.mealDataVar;
}
},
"XF+Ue2H8t02KOV+geGpPSQ": {
getter: function (varBag, idService) {
return varBag.model.variables.householdCaptionsVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O47j1X4tTkOa2XLjh1LDGA": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingCaptionDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zANpoY+YvEKSSwe1ijaqrw": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByPhoneDataVar;
}
},
"klc5OxF3LUyTTikdyWV0fg": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByMessagePopupDataVar;
}
},
"80XylsQOB0y4Gnf4Q2vRAQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q5ei5SydDkati2mJ06FgZA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"M_7Z_vSqKEeKLAxO6N0lfQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"iHHx6__BnkG8v90hM0+BfA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadEventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LpLPHXy+nki+HIkd+Fof3Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadMilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3bInJRDBA0KGdU55ru+jQQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"APyfjJd9gEK7ChwkcDwj5A": {
getter: function (varBag, idService) {
return varBag.model.variables.getMealHelperDataAct;
}
},
"6bC_rDzZxE+8Kzjky1+Wqw": {
getter: function (varBag, idService) {
return varBag.model.variables.getCaptionsDataAct;
}
},
"IPX70Re+l0CzO2_detme4w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"Q7Zefp9JE0ObxeBBgDAnjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"2BDLC2i4mUWldHzUg2is4w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"THO90zWA+0yKJFmO1ZhhCw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"pcBR09Rg80SdeojSAdLD1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"N69JbUmSa0m_CxRp+pe0KA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"ubzqD53uUE2VKQ1Y_jcONw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4gcO7komPU+IjGUxlzEGCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"gBBBAigeYUmPmPe_VrlG1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"PyRL8eKiyUCGQImyoWccxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasData"));
})(varBag.model, idService);
}
},
"DMrHQbiX10O_vAlTKVmuHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSpecialNeeds"));
})(varBag.model, idService);
}
},
"Xlm31JryPEarkOs9dtOW5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"raIiRjsGK0m8JRyAIWEX8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"2SGLQHd1Z0SiiefyfP4HcA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"byJhPX3J2UO42iyunQ+WKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"ufBujHvy20SAAoIkesnbqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"ohl+e1N500i1cWUwFmfVPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasHelpersData"));
})(varBag.model, idService);
}
},
"3DL6tB5pEUuU_QmMz3ZUGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"TqpQphNmuk+lU2haXhp2MQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"WpEUJHDhXUiOJznl52VYXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"O2OqeGUUYkSi55BJmnwyEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"8RmwF8wF30eE6IwilWDffQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"LPC59OgXu0imrykgjUoZ7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"sSlwBPYq3EmVL8A_EX1OVQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"MB9UVOKAnU2+gv4nhzf4VQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"u08U+pLGjEax1Q0xQuXRGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"TamgTP_rHk+TlnT9yUHTlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"M1Dx4sihdUmFw_DsVVWOCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"VgBG792MAUa4oiQrEm7GHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_APIHasData"));
})(varBag.model, idService);
}
},
"+98F_jyk2UycJ4GuAWqoUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"qG1lCZ16cEC5klsXRE8v0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"Wgm8o_EnT0WNVlQuAMUL0A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
