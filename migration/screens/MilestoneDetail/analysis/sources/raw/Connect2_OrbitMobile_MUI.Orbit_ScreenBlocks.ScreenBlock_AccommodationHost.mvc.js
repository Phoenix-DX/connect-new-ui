define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "FileTransferPlugin.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "CommonPlugin.model", "FileViewerPlugin.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$GetAccommodationHostResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "FileTransferPlugin.model$ProgressRec", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "Connect2_OrbitMobile_MUI.controller$AddExtensionToFile", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "FileTransferPlugin.model$FileTransferErrorRec", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "Connect2_OrbitMobile_MUI.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "Connect2_OrbitMobile_IS.model$GetAccomodationHostDocumentRec", "Connect2_OrbitMobile_BL.model$GetAccommodationHost_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, FileTransferPluginModel, UBTJavaScriptUtilsController, Connect2_LegacySharedModel, MemoryClientCacheModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, CommonPluginModel, FileViewerPluginController, Connect2_OrbitMobile_BLModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, FileTransferPlugin_FileTransfer_HandleDownload_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel) {
var OS = OutSystems.Internal;

var Get_DocumentDataActRec = (function (_super) {
__extends(Get_DocumentDataActRec, _super);
function Get_DocumentDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_DocumentDataActRec.attributesToDeclare = function () {
return [
this.attr("AccommodationHostDocument", "accommodationHostDocumentOut", "AccommodationHostDocument", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetAccomodationHostDocumentRec());
}, true, Connect2_OrbitMobile_ISModel.GetAccomodationHostDocumentRec)
].concat(_super.attributesToDeclare.call(this));
};
Get_DocumentDataActRec.fromStructure = function (str) {
return new Get_DocumentDataActRec(new Get_DocumentDataActRec.RecordClass({
accommodationHostDocumentOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_DocumentDataActRec.init();
return Get_DocumentDataActRec;
})(OS.Model.DataSourceRecord);
var GetAccommodationHostDataActRec = (function (_super) {
__extends(GetAccommodationHostDataActRec, _super);
function GetAccommodationHostDataActRec(defaults) {
_super.apply(this, arguments);
}
GetAccommodationHostDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetAccommodationHost_ScreenRec());
}, true, Connect2_OrbitMobile_BLModel.GetAccommodationHost_ScreenRec), 
this.attr("HasData", "hasDataOut", "HasData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAccommodationHostDataActRec.init();
return GetAccommodationHostDataActRec;
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
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetAccommodationHostResponseRec());
}, false, Connect2_OrbitMobile_ISModel.GetAccommodationHostResponseRec), 
this.attr("IsLoadingDocument", "isLoadingDocumentVar", "IsLoadingDocument", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasDocument", "hasDocumentVar", "HasDocument", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ContactByPhoneData", "contactByPhoneDataVar", "ContactByPhoneData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
}, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec), 
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
this.attr("Get_Document", "get_DocumentDataAct", "get_DocumentDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_DocumentDataActRec());
}, true, Get_DocumentDataActRec), 
this.attr("GetAccommodationHost", "getAccommodationHostDataAct", "getAccommodationHostDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetAccommodationHostDataActRec());
}, true, GetAccommodationHostDataActRec)
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
Model._hasValidationWidgetsValue = ((((((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || FileTransferPlugin_FileTransfer_HandleDownload_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets);
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
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_AccommodationHost");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "FileTransferPlugin.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "CommonPlugin.model", "FileViewerPlugin.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.OrbitAdminTag.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$GetAccommodationHostResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "FileTransferPlugin.model$ProgressRec", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "Connect2_OrbitMobile_MUI.controller$AddExtensionToFile", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "FileTransferPlugin.model$FileTransferErrorRec", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "Connect2_OrbitMobile_MUI.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "Connect2_OrbitMobile_IS.model$GetAccomodationHostDocumentRec", "Connect2_OrbitMobile_BL.model$GetAccommodationHost_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, FileTransferPluginModel, UBTJavaScriptUtilsController, Connect2_LegacySharedModel, MemoryClientCacheModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, CommonPluginModel, FileViewerPluginController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_AccommodationHost";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_OrbitAdminTag_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_controller;
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
In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
In_EventName: model.getCachedValue(idService.getId("rViopabPvkqKyZz2KkfUlA.In_EventName"), function () {
return ((((model.variables.accommodationDataVar.eventDetailsAttr.nameAttr) !== (""))) ? (model.variables.accommodationDataVar.eventDetailsAttr.nameAttr) : (model.variables.in_PreloadEventNameIn));
}, function () {
return model.variables.accommodationDataVar.eventDetailsAttr.nameAttr;
}, function () {
return model.variables.in_PreloadEventNameIn;
}),
_in_EventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadEventNameInDataFetchStatus),
In_MilestoneName: model.getCachedValue(idService.getId("rViopabPvkqKyZz2KkfUlA.In_MilestoneName"), function () {
return ((((model.variables.accommodationDataVar.milestoneTitleAttr) !== (""))) ? (model.variables.accommodationDataVar.milestoneTitleAttr) : (model.variables.in_PreloadMilestoneNameIn));
}, function () {
return model.variables.accommodationDataVar.milestoneTitleAttr;
}, function () {
return model.variables.in_PreloadMilestoneNameIn;
}),
_in_MilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadMilestoneNameInDataFetchStatus)
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
headerRight: new PlaceholderContent(function () {
return [$if(((!(model.variables.isFetchingDataVar) && model.variables.getAccommodationHostDataAct.hasDataOut) && !(model.variables.accommodationDataVar.roomsAttr.isEmpty)), false, this, function () {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/Container onclick");
return controller.onClick_OpenDocument$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: "line-height: initial;"
},
style: "display-flex align-items-center align-content-center",
visible: model.variables.hasDocumentVar,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: "icon orbit-icon-file-doc padding-none font-size-1-5em"
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "\"icon\"",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
}),
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if((model.variables.getAccommodationHostDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [$if(model.variables.getAccommodationHostDataAct.hasDataOut, false, this, function () {
return [$if(!(model.variables.accommodationDataVar.roomsAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width padding-x-m margin-bottom-m display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width bold color-orbit-primary-7",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Accommodation Allocation"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width flex-center-vertical flex-direction-row margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.getCachedValue(idService.getId("l0YhD9NSZEqtqCEgyQxnAQ.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_OrbitMilestoneTypeIdIn;
}, function () {
return model.variables.accommodationDataVar.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus)
}))), $if(false, false, this, function () {
return [];
}, function () {
return [];
}), $if(!(model.variables.accommodationDataVar.helpersAttr.isEmpty), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
inputs: {
In_ExtendedClass: model.getCachedValue(idService.getId("51KjsSnoKk+hWxPYyh0HUg.In_ExtendedClass"), function () {
return ((model.variables.accommodationDataVar.specialNeedsAttr.isEmpty) ? (" orbit-accordion-no-margin") : (""));
}, function () {
return model.variables.accommodationDataVar.specialNeedsAttr.isEmpty;
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
uuid: "12",
alias: "4"
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
uuid: "13",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Helper/s",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("qolS5WfiWka13i7ODMA5rQ.disable-virtualization"), function () {
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
uuid: "15"
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
uuid: "16"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("Le8a__Mcr0W2prZecXL3+Q.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedStringFromHelperType$Action(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr, callContext).out_FormattedStringOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr;
}),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("xEJU8gblKU+b26VXeRwZqQ.disable-virtualization"), function () {
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
uuid: "19"
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
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_DisplayDot: false,
In_HouseholderId: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_MemberInformation: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
Is_ShowPersonalInfo: true
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
uuid: "21",
alias: "6"
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
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: ("Midday Meal: " + model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).middayMealAttr),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width font-size-s text-neutral-6",
visible: ((model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr) !== ("")),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: ("Evening Meal: " + model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr),
_idProps: {
service: idService,
uuid: "25"
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
In_ExtendedClass: model.getCachedValue(idService.getId("MLyqA2O+RUq2Mx+QL0_tlA.In_ExtendedClass"), function () {
return (((model.variables.accommodationDataVar.specialNeedsAttr.isEmpty && model.variables.accommodationDataVar.helpersAttr.isEmpty)) ? (" orbit-accordion-no-margin") : (""));
}, function () {
return model.variables.accommodationDataVar.specialNeedsAttr.isEmpty;
}, function () {
return model.variables.accommodationDataVar.helpersAttr.isEmpty;
}),
In_MultipleItems: true
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
uuid: "26",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("Pg6lB70CL0WSDhFvl1iL1A.disable-virtualization"), function () {
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
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
ExtendedClass: model.getCachedValue(idService.getId("l51X+entmUeaopQsw2UmpQ.ExtendedClass"), function () {
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
uuid: "28",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: ("Room: " + model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomNameAttr),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "room-info-cont",
visible: model.getCachedValue(idService.getId("oRJAUN+4jki55x3w6iTiUg.Visible"), function () {
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
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical justify-content-flex-start flex-direction-row",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-home font-size-1-1em",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-s",
value: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.floorAttr,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical justify-content-center flex-direction-row",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-host-guest",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-s",
value: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.typeAttr,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical justify-content-flex-end flex-direction-row",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-accommodation font-size-1-1em",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-s",
value: OS.BuiltinFunctions.longIntegerToText(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).roomInformationAttr.bedsAttr),
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m padding-top-base font-size-1-1em text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Guest/s",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("si3VVmZOfk+PHn23BVPP6g.disable-virtualization"), function () {
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
uuid: "42"
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
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr)]
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("yrDgfHzHLEeOlUotJ2oRQA.disable-virtualization"), function () {
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
uuid: "44"
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
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_HouseholderId: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_HouseholdCountryCode: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr,
In_ShowAdminTag: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).hasOrbitAdminRoleAttr,
In_HideMemberInfoLocation: false,
In_MemberInformation: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
Is_ShowPersonalInfo: true,
In_DisplayDot: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr,
In_HouseholdLocality: model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr
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
return controller.onHandle_ClickedMemberPhone$Action(event_PhoneNumberIn, event_CallNameIn, model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr, event_MemberIdIn, event_SignedPhotoURLIn, controller.callContext(eventHandlerContext));
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
uuid: "47",
alias: "9"
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
uuid: "48",
alias: "10"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/Container onclick");
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
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-arrangements text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-member-list-item-arrangements",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Guest Arrangements"))];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).hasGuestArrangementsAttr)]
})))];
}, callContext, idService, "5")
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityIdAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).localityAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).displayDotAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).countryCodeAttr), asPrimitiveValue(model.variables.accommodationDataVar.roomsAttr.getCurrent(callContext.iterationContext).guestsAttr.getCurrent(callContext.iterationContext).householderIdAttr)]
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
return [$if(!(model.variables.accommodationDataVar.helpersAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width padding-x-m margin-bottom-m display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width bold color-orbit-primary-7",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Accommodation Allocation"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width flex-center-vertical flex-direction-row margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.getCachedValue(idService.getId("VkoLGt8G2Eyt8qa6Q8ANXg.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_OrbitMilestoneTypeIdIn;
}, function () {
return model.variables.accommodationDataVar.milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus)
}))), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
inputs: {
In_ExtendedClass: model.getCachedValue(idService.getId("rR5W1RSb4EOj0_mstZP+qA.In_ExtendedClass"), function () {
return ((model.variables.accommodationDataVar.specialNeedsAttr.isEmpty) ? (" orbit-accordion-no-margin") : (""));
}, function () {
return model.variables.accommodationDataVar.specialNeedsAttr.isEmpty;
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
uuid: "58",
alias: "11"
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
uuid: "59",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Helper/s",
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("4lji8jAC2UK0fQneQ9O+Lg.disable-virtualization"), function () {
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
uuid: "61"
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
uuid: "62"
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
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("OqqF_G7IqU6i0wTLeqeX3g.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedStringFromHelperType$Action(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr, callContext).out_FormattedStringOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr;
}),
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("8qu_UNzub0CBMBgj0eWYFQ.disable-virtualization"), function () {
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
uuid: "65"
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
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_HouseholderId: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_DisplayDot: false,
In_MemberInformation: model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
Is_ShowPersonalInfo: true
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
uuid: "67",
alias: "13"
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
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: ("Midday Meal: " + model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).middayMealAttr),
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width font-size-s text-neutral-6",
visible: ((model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr) !== ("")),
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: ("Evening Meal: " + model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr),
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).eveningMealAttr), asPrimitiveValue(model.variables.accommodationDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).middayMealAttr)]
}))];
}, callContext, idService, "7")
},
_dependencies: []
}))];
}, callContext, idService, "7")
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
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "No guests have been allocated to this milestone yet. Please check again later or contact the Orbit Helpdesk if you have any questions."
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
uuid: "72",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
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
uuid: "73",
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
In_SkeletonLoadingId: model.getCachedValue(idService.getId("unfN6blk8kGTAKpW6VG8lA.In_SkeletonLoadingId"), function () {
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
uuid: "74",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(model.variables.getAccommodationHostDataAct.hasDataOut, false, this, function () {
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
uuid: "75",
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
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(FileTransferPlugin_FileTransfer_HandleDownload_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onDownloadProgress$Action: function (progressIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FileTransfer/HandleDownload OnDownloadProgress");
controller.handleDownloadOnDownloadProgress$Action(progressIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onDownloadComplete$Action: function (fileDownloadResultIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FileTransfer/HandleDownload OnDownloadComplete");
return controller.handleDownloadOnDownloadComplete$Action(fileDownloadResultIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onDownloadError$Action: function (fileTransferErrorIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FileTransfer/HandleDownload OnDownloadError");
controller.handleDownloadOnDownloadError$Action(fileTransferErrorIn, controller.callContext(eventHandlerContext));
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
uuid: "78",
alias: "19"
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
uuid: "79",
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "FileTransferPlugin.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "CommonPlugin.model", "FileViewerPlugin.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_IS.model$GetAccommodationHostResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "FileTransferPlugin.model$ProgressRec", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "Connect2_OrbitMobile_MUI.controller$AddExtensionToFile", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "FileTransferPlugin.model$FileTransferErrorRec", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "Connect2_OrbitMobile_MUI.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "Connect2_OrbitMobile_IS.model$GetAccomodationHostDocumentRec", "Connect2_OrbitMobile_BL.model$GetAccommodationHost_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, FileTransferPluginModel, UBTJavaScriptUtilsController, Connect2_LegacySharedModel, MemoryClientCacheModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, CommonPluginModel, FileViewerPluginController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_Document$DataActRefresh: -1,
getAccommodationHost$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
get_Document$DataActRefresh: [],
getAccommodationHost$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.get_Document$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:VRhHXcXgska80KgOUWDF1Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/DataActions.VRhHXcXgska80KgOUWDF1Q:2RbiqzGaJciEuV0V+G_4Zw", "Connect2_OrbitMobile_MUI", "Get_Document", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/Get_Document");
return controller.callDataAction("DataActionGet_Document", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGet_Document", "j4PTm5ZtUpKaJpXI8t4duA", function (b) {
model.variables.get_DocumentDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_DocumentDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_DocumentDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/Get_Document On After Fetch");
controller._get_DocumentOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VRhHXcXgska80KgOUWDF1Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getAccommodationHost$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:IxS7YyTFCECk_Zw79CtHmw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/DataActions.IxS7YyTFCECk_Zw79CtHmw:B5AzNdq5nyfFw9Ir1wOafQ", "Connect2_OrbitMobile_MUI", "GetAccommodationHost", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/GetAccommodationHost");
return controller.callDataAction("DataActionGetAccommodationHost", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/DataActionGetAccommodationHost", "CfGJXHTz0Ra1oNSnmspTYg", function (b) {
model.variables.getAccommodationHostDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getAccommodationHostDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAccommodationHostDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost/GetAccommodationHost On After Fetch");
controller._onAfterFetch_GetAccommodationHost$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:IxS7YyTFCECk_Zw79CtHmw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_Document$DataActRefresh", "getAccommodationHost$DataActRefresh"];
// Client Actions
Controller.prototype._get_DocumentOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Get_DocumentOnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rQE3GupTU0mkgl+1GLfUcw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.rQE3GupTU0mkgl+1GLfUcw:9EyndXeqc5qLiEDJMAYKoQ", "Connect2_OrbitMobile_MUI", "Get_DocumentOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Unsx4qRxEUabUeZXprxgpQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JoN8xh0SZUC6vGKt2VF16g", callContext.id);
// HasDocument = Get_Document.AccommodationHostDocument.DocumentURL <> ""
model.variables.hasDocumentVar = ((model.variables.get_DocumentDataAct.accommodationHostDocumentOut.documentURLAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pxdtrcq6wkylDQFZ2P2yKQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rQE3GupTU0mkgl+1GLfUcw", callContext.id);
}

};
Controller.prototype._handleDownloadOnDownloadProgress$Action = function (progressIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.HandleDownloadOnDownloadProgress$vars"))());
vars.value.progressInLocal = progressIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8luYKh9r7U22_Wr6tcD31w:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.8luYKh9r7U22_Wr6tcD31w:DWOlsBphwF3G7qOrS2siyA", "Connect2_OrbitMobile_MUI", "HandleDownloadOnDownloadProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Tc_rXGZFSEuH7vXXTQglDg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z+ZmtsZC30CSahhae6nVeA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8luYKh9r7U22_Wr6tcD31w", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.HandleDownloadOnDownloadProgress$vars", [{
name: "Progress",
attrName: "progressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.ProgressRec();
},
complexType: FileTransferPluginModel.ProgressRec
}]);
Controller.prototype._onClick_OpenDocument$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_OpenDocument");
callContext = controller.callContext(callContext);
var unknownErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var openInApp_TryOpenFileInAppVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.unknownErrorVar = unknownErrorVar;
varBag.openInApp_TryOpenFileInAppVar = openInApp_TryOpenFileInAppVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:FnUzSjnQiEyFNtf_Lxs43w:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.FnUzSjnQiEyFNtf_Lxs43w:ZEhUIdf+qaaC_VH62QdozA", "Connect2_OrbitMobile_MUI", "OnClick_OpenDocument", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7N8ZBDsJS0uOTiwgx1FKrA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vx0QzCMJzkaZUJ+efVTd3g", callContext.id) && model.variables.isLoadingDocumentVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:juYkcLsv6kqByXJhd7bOEQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C0j9xCtmBE2rCFjsQiE2ow", callContext.id);
// IsLoadingDocument = True
model.variables.isLoadingDocumentVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:69EOYt9bA0SGQEt+Kzc7UA", callContext.id);
// Execute Action: OpenInApp_TryOpenFileInApp
model.flush();
return UBTConnect_UtilsController.default.openInApp_TryOpenFileInApp$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.addExtensionToFile$Action(model.variables.get_DocumentDataAct.accommodationHostDocumentOut.documentNameAttr, Connect2_OrbitMobile_MUIModel.staticEntities.fileExtension.pDF, callContext).fileWithExtensionOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.get_DocumentDataAct.accommodationHostDocumentOut.documentURLAttr, "orbit-documents", "pdf", callContext).then(function (value) {
openInApp_TryOpenFileInAppVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JKuwwO05d0SfxBrqUg5CAw", callContext.id) && openInApp_TryOpenFileInAppVar.value.isInAppOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DPKOOub6Ikm+PPxoBD9Wqw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fL+vf5kGf0ib0L+Kx96M9g", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7UBhZPiimkCMcb2t4vFdEQ", callContext.id);
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_AccommodationHost.OnClick_OpenDocument", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vPfspyB8KUyp9qR9py2bIg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y3bnRjov_0mhmF9QVTf2Vg", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U7SiiI7tG0q974Aogi16+A", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", unknownErrorVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FnUzSjnQiEyFNtf_Lxs43w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FnUzSjnQiEyFNtf_Lxs43w", callContext.id);
throw ex;

});
};
Controller.prototype._handleDownloadOnDownloadError$Action = function (fileTransferErrorIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.HandleDownloadOnDownloadError$vars"))());
vars.value.fileTransferErrorInLocal = fileTransferErrorIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5o5dSvecnUO8KURK47mtkw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.5o5dSvecnUO8KURK47mtkw:8eDIHtDRcKz55STJW0iUYQ", "Connect2_OrbitMobile_MUI", "HandleDownloadOnDownloadError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MbHRB5nonEORuRxxnDdaAg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tT2XhtoCpky13xX1xYDbzA", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JpDHnoLbBE2CICd7Ksz_vg", callContext.id) && (vars.value.fileTransferErrorInLocal.messageAttr === "Document not found"))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oDaYRbttqE62A3mTtU99kA", callContext.id);
// Message = "The file you are trying to open is no longer available and cannot be opened."
vars.value.messageVar = "The file you are trying to open is no longer available and cannot be opened.";
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qDaoWIsCBke520b3zfLQfQ", callContext.id);
// Message = "Unfortunately this file could not be opened. Please try again at a later time."
vars.value.messageVar = "Unfortunately this file could not be opened. Please try again at a later time.";
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kKYM1wZTiU208fxpaqk3ug", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", vars.value.fileTransferErrorInLocal.messageAttr, Connect2_OrbitMobile_MUIModel.staticEntities.uBT_MessageType.info, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7TSoHJYggU2w4ILJpTkTfQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5o5dSvecnUO8KURK47mtkw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.HandleDownloadOnDownloadError$vars", [{
name: "FileTransferError",
attrName: "fileTransferErrorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.FileTransferErrorRec();
},
complexType: FileTransferPluginModel.FileTransferErrorRec
}, {
name: "Message",
attrName: "messageVar",
mandatory: false,
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:y+fVU2n8gUSwhiQxybO0Yg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.y+fVU2n8gUSwhiQxybO0Yg:i6xZz9qOnWSWrssGfuSWCA", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LYnf0hJaSEOuUYKM5r6Eag", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1J1m4ob71kWR+JEeRTufEA", callContext.id);
// Refresh Query: GetAccommodationHost
var result = controller.getAccommodationHost$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uqgz4NnspEaCzCTjZ_nKbQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:y+fVU2n8gUSwhiQxybO0Yg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:y+fVU2n8gUSwhiQxybO0Yg", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnClick_GuestArrangements$vars"))());
vars.value.memberIdInLocal = memberIdIn;
vars.value.hasGuestArrangementsInLocal = hasGuestArrangementsIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BAzyYrKxH0SIBIBMmNQIwg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.BAzyYrKxH0SIBIBMmNQIwg:LVMVZn8ddzKID+uComx+Aw", "Connect2_OrbitMobile_MUI", "OnClick_GuestArrangements", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wdzpdHzIJkaE39_YQcUBcA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XhcUXvthZUW_xDiHRoxunQ", callContext.id) && vars.value.hasGuestArrangementsInLocal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KSaoGkGYekSQGOmfO9Rb3A", callContext.id);
// Trigger Event: NavigateTo_GuestArrangements
return controller.navigateTo_GuestArrangements$Action(vars.value.memberIdInLocal, model.variables.in_OrbitMilestoneTypeIdIn, model.variables.accommodationDataVar.milestoneTitleAttr, model.variables.in_HostIdIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:k7sfftvHHEyIGpk5+UPbMg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5V9XoJ07cU+Qu4YUP3HnsQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BAzyYrKxH0SIBIBMmNQIwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BAzyYrKxH0SIBIBMmNQIwg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnClick_GuestArrangements$vars", [{
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
Controller.prototype._buildMemberCallData$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BuildMemberCallData");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.BuildMemberCallData$vars"))());
vars.value.phoneInLocal = phoneIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.callNameInLocal = callNameIn;
var getCacheableMemberContactListVar = new OS.DataTypes.VariableHolder();
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
var getCacheableTimezoneInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableMemberContactListVar = getCacheableMemberContactListVar;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
varBag.getCacheableTimezoneInfoVar = getCacheableTimezoneInfoVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:pdlyZEE_H0aT6ombGMZlhQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.pdlyZEE_H0aT6ombGMZlhQ:p2Dd5XZwGIx4l0GAjzzCQA", "Connect2_OrbitMobile_MUI", "BuildMemberCallData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XWgejfPTb0ap8DIA9_8cog", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:noUamqWNPUSRPkJPZ4I3iQ", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = CallName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = vars.value.callNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:noUamqWNPUSRPkJPZ4I3iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ImageURL = SignedPhotoURL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = vars.value.signedPhotoURLInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:noUamqWNPUSRPkJPZ4I3iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:noUamqWNPUSRPkJPZ4I3iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:noUamqWNPUSRPkJPZ4I3iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.IsLoading = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0speAzXOkUu89Mr7upcylQ", callContext.id);
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
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QzNcR9RdnU+va9+fMYah5g", callContext.id) && getCacheableMemberContactListVar.value.memberContactListOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4dQeM0sPCUiaHEkPhNQnPA", callContext.id);
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4dQeM0sPCUiaHEkPhNQnPA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6pUGp7MX6UulSZcynMO+qg", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a+11+H87I0qKhdFwf+BHCg", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a+11+H87I0qKhdFwf+BHCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a+11+H87I0qKhdFwf+BHCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a+11+H87I0qKhdFwf+BHCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h+qm4HbAnkyhZcJgSKf3ZQ", callContext.id) && !(((model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b2TiRbwZgkGUT6mlhWYI+A", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(vars.value.memberIdInLocal, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.small, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OvXi_qUaFU2vk6EvTNd3zw", callContext.id);
// ContactByPhoneData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOOyDe51vkao57uEzXnOnw", callContext.id);
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableMemberContactList.MemberContactList.Current.LocalityName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOOyDe51vkao57uEzXnOnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.MobilePhone = GetCacheableMemberContactList.MemberContactList.Current.MobilePhoneNumber
model.variables.contactByPhoneDataVar.mobilePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).mobilePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOOyDe51vkao57uEzXnOnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.HomePhone = GetCacheableMemberContactList.MemberContactList.Current.HomePhoneNumber
model.variables.contactByPhoneDataVar.homePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).homePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOOyDe51vkao57uEzXnOnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.WorkPhone = GetCacheableMemberContactList.MemberContactList.Current.WorkPhoneNumber
model.variables.contactByPhoneDataVar.workPhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).workPhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOOyDe51vkao57uEzXnOnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableMemberContactList.MemberContactList.Current.Timezone.TimezoneLabel
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.timezoneLabelAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOOyDe51vkao57uEzXnOnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableMemberContactList.MemberContactList.Current.Timezone.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOOyDe51vkao57uEzXnOnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableMemberContactList.MemberContactList.Current.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).countryNameAttr;
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9v4hhWRg40S4XqWuF5rNXQ", callContext.id);
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9v4hhWRg40S4XqWuF5rNXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HCU5fy_8ZEyUXSNz7ti7Pg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pdlyZEE_H0aT6ombGMZlhQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pdlyZEE_H0aT6ombGMZlhQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.BuildMemberCallData$vars", [{
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
Controller.prototype._onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_CallClicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnHandle_CallClicked$vars"))());
vars.value.calledNumberInLocal = calledNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:r9XpcrkxQ0iXF1oFa42X_A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.r9XpcrkxQ0iXF1oFa42X_A:NKYABOhTa1Lpe1Dkq7yn0Q", "Connect2_OrbitMobile_MUI", "OnHandle_CallClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_Mnt_91ey0G8WoUSPfw_yQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lfD+NXsUfU62q2xhzQEpbQ", callContext.id);
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
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q1FCp4fuGka2pHVWF88VRA", callContext.id);
// Execute Action: OnHandle_ContactByPhone_Cancel
controller._onHandle_ContactByPhone_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IyUoMAeUF0aNhsB2AUDPyQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:r9XpcrkxQ0iXF1oFa42X_A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:r9XpcrkxQ0iXF1oFa42X_A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnHandle_CallClicked$vars", [{
name: "CalledNumber",
attrName: "calledNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:nvNsghJ3KE+BQswznICrKg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.nvNsghJ3KE+BQswznICrKg:w7BHFyfi3AlHJ_ynm5pg6w", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cy8sKy7SmE2qCafzvsnQtg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HShE3TAy40qXHRZ3fId4vg", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T57vNy9s6U6m0mR4LzDqpw", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RUzP+DtVCkqnOBEDtVhQcw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BA2ehHoGQEasJOD3Z4hmnw", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uJgr5tSqi02sZMzT6v7yrA", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:leRTJiE9B06Sfh+PMZiNTg", callContext.id);
// Execute Action: RefreshDocumentData
return controller._refreshDocumentData$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HYf+v2UAGkuIBG92s9cNYA", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SvapPUx_gkGK9M9p_FXd_w", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:nvNsghJ3KE+BQswznICrKg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:nvNsghJ3KE+BQswznICrKg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:XxXfiMKi3k2qb4q0d0iiAg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.XxXfiMKi3k2qb4q0d0iiAg:veJKZqrEWMuE3xFTuAkRuQ", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c6K+6my6YEK15jOFIvStTg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PuEaDQzSbkmswnavkqMVOQ", callContext.id);
// Trigger Event: NavigateTo_ContactHelpdesk
return controller.navigateTo_ContactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.accommodationDataVar.milestoneDateTimeAttr, model.variables.accommodationDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_PreloadMilestoneNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s2stoMLC2kGatbtcF+ZN2Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XxXfiMKi3k2qb4q0d0iiAg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XxXfiMKi3k2qb4q0d0iiAg", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnHandle_ClickedMember$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.typeInLocal = typeIn;
var checkDirectoryAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkDirectoryAccessVar = checkDirectoryAccessVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:7SxMkSJ080awlCggyaX8ig:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.7SxMkSJ080awlCggyaX8ig:GiwmEse1BJoH3HZ3G3RRJQ", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sC7__jMNCE2Tp0xHtFCaAQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ITFZQiCD2ECU+Bc_90Ph5A", callContext.id);
// Execute Action: CheckDirectoryAccess
model.flush();
return Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action(vars.value.householdIdInLocal, vars.value.typeInLocal, callContext).then(function (value) {
checkDirectoryAccessVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CfK6bmt2cUCqrl_+o8a2oA", callContext.id) && checkDirectoryAccessVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Qbc+ceqEJ0yefn4eS5L0wQ", callContext.id);
// Trigger Event: NavigateTo_HouseholdDetail
return controller.navigateTo_HouseholdDetail$Action(vars.value.householdIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2Hs+gR6f4EaFWv0MSatIJg", callContext.id);
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
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g6YHYu28VEqO4uno6u1hnA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jv2E79tETUury5mDdTPpqQ", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1xylhIZmx0CiDHWM7kQdcA", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7SxMkSJ080awlCggyaX8ig", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7SxMkSJ080awlCggyaX8ig", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnHandle_ClickedMember$vars", [{
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
Controller.prototype._refreshDocumentData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshDocumentData");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:e1gOlYyzOkedAocvFCaTuw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.e1gOlYyzOkedAocvFCaTuw:Lft95OPZvTiPSAH53zPTxQ", "Connect2_OrbitMobile_MUI", "RefreshDocumentData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7vgviimlDUiCo5gM+WfQDQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b0ZKEI++uUiDEG3UIPN0qA", callContext.id);
// Refresh Query: Get_Document
var result = controller.get_Document$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jUhUopOMRU2FRMnwgb2p2w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:e1gOlYyzOkedAocvFCaTuw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:e1gOlYyzOkedAocvFCaTuw", callContext.id);
throw ex;

});
};
Controller.prototype._handleDownloadOnDownloadComplete$Action = function (fileDownloadResultIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.HandleDownloadOnDownloadComplete$vars"))());
vars.value.fileDownloadResultInLocal = fileDownloadResultIn.clone();
var openDocumentFromLocalPathVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openDocumentFromLocalPathVar = openDocumentFromLocalPathVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BWh8m0VoEkmV4cXEaJu2nQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.BWh8m0VoEkmV4cXEaJu2nQ:oy32WP62zazV6j3JIInLGA", "Connect2_OrbitMobile_MUI", "HandleDownloadOnDownloadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zkOd1iQ1UUuAEWgbuWos_Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YUtjoQTjkUeKyBHtQWbaWQ", callContext.id);
// Execute Action: OpenDocumentFromLocalPath
model.flush();
return FileViewerPluginController.default.openDocumentFromLocalPath$Action(vars.value.fileDownloadResultInLocal.fullPathAttr, "", "", callContext).then(function (value) {
openDocumentFromLocalPathVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0cBCErfYUkO9ZhozeIZgHA", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+y60fCIAgU+90B9BNNUppw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BWh8m0VoEkmV4cXEaJu2nQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BWh8m0VoEkmV4cXEaJu2nQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.HandleDownloadOnDownloadComplete$vars", [{
name: "FileDownloadResult",
attrName: "fileDownloadResultInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.FileDownloadResultRec();
},
complexType: FileTransferPluginModel.FileDownloadResultRec
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnHandle_ClickedMemberPhone$vars"))());
vars.value.phoneNumberInLocal = phoneNumberIn;
vars.value.callNameInLocal = callNameIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:q9qsnLSDoEOx2ueKqJQ9jg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.q9qsnLSDoEOx2ueKqJQ9jg:rs_DkkwFq+aDvCclZAnDfA", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMemberPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mjKrE2Ppzkufovz3BePnjg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sVejT6gGXUORMsYtzuq4zQ", callContext.id) && ((vars.value.phoneNumberInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8fCxe9Ua+kSCOUCWKGQlog", callContext.id);
// Execute Action: BuildMemberCallData
return controller._buildMemberCallData$Action(vars.value.phoneNumberInLocal, vars.value.signedPhotoURLInLocal, vars.value.localityIdInLocal, vars.value.memberIdInLocal, vars.value.callNameInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:64tnYCw+_ky4z7j+gts12Q", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z4oEaZUFB0eszg47I8oIdw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:q9qsnLSDoEOx2ueKqJQ9jg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:q9qsnLSDoEOx2ueKqJQ9jg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.OnHandle_ClickedMemberPhone$vars", [{
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
Controller.prototype._onAfterFetch_GetAccommodationHost$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetAccommodationHost");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
try {try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:azTKqMRVOUWjTv+_V8RVNg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.azTKqMRVOUWjTv+_V8RVNg:tGslMvEozbUeOFb0LypAqw", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetAccommodationHost", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g7vJSt4tOUqCjpnLFLfinQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5puOUJvQ_0KWMWxMppHeBg", callContext.id);
// AccommodationData = GetAccommodationHost.Response.GetAccommodationHostResponse
model.variables.accommodationDataVar = model.variables.getAccommodationHostDataAct.responseOut.getAccommodationHostResponseAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m6HdgZ5JC0unsKxFqQDc_g", callContext.id);
} catch (ex) {
(function () {
OS.Logger.trace("ScreenBlock_AccommodationHost.OnAfterFetch_GetAccommodationHost", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uO7roe2qk0qatXnoe+fK2Q", callContext.id);
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ee87+YUt0keB4ye1rgYJ4w", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JXkBgY3fZUWbRsY1eF303w", callContext.id);
return ;

}

throw ex;
})();
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:azTKqMRVOUWjTv+_V8RVNg", callContext.id);
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:pJu27_xRCUi44yQvmfZmWw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw/ClientActions.pJu27_xRCUi44yQvmfZmWw:DHqlPoIWwfZ_OMoGjlAdrg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wrmIpxcBGk2diXL95qDNEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w0nuDJi6LE2lcPjhfR1OOg", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:isvowUt_s0+Qnk_MEPyhcA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pJu27_xRCUi44yQvmfZmWw", callContext.id);
}

};

Controller.prototype.get_DocumentOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._get_DocumentOnAfterFetch$Action, callContext);

};
Controller.prototype.handleDownloadOnDownloadProgress$Action = function (progressIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadProgress$Action, callContext, progressIn);

};
Controller.prototype.onClick_OpenDocument$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_OpenDocument$Action, callContext);

};
Controller.prototype.handleDownloadOnDownloadError$Action = function (fileTransferErrorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadError$Action, callContext, fileTransferErrorIn);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.onClick_GuestArrangements$Action = function (memberIdIn, hasGuestArrangementsIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_GuestArrangements$Action, callContext, memberIdIn, hasGuestArrangementsIn);

};
Controller.prototype.buildMemberCallData$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildMemberCallData$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn);

};
Controller.prototype.onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_CallClicked$Action, callContext, calledNumberIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

};
Controller.prototype.onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMember$Action, callContext, householdIdIn, typeIn);

};
Controller.prototype.refreshDocumentData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshDocumentData$Action, callContext);

};
Controller.prototype.handleDownloadOnDownloadComplete$Action = function (fileDownloadResultIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadComplete$Action, callContext, fileDownloadResultIn);

};
Controller.prototype.onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMemberPhone$Action, callContext, phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn);

};
Controller.prototype.onAfterFetch_GetAccommodationHost$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetAccommodationHost$Action, callContext);

};
Controller.prototype.onHandle_ContactByPhone_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone_Cancel$Action, callContext);

};
Controller.prototype.navigateTo_HouseholdDetail$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_ContactHelpdesk$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_GuestArrangements$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:5L7BMaMqcE+Tn+bQ3eBmGw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.5L7BMaMqcE+Tn+bQ3eBmGw:6QBI78L1Di2e0l5jlHUg3w", "Connect2_OrbitMobile_MUI", "ScreenBlock_AccommodationHost", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:5L7BMaMqcE+Tn+bQ3eBmGw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"+2myYXoXM02eVcxIoRLv0g": {
getter: function (varBag, idService) {
return varBag.vars.value.progressInLocal;
}
},
"vPfspyB8KUyp9qR9py2bIg": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"69EOYt9bA0SGQEt+Kzc7UA": {
getter: function (varBag, idService) {
return varBag.openInApp_TryOpenFileInAppVar.value;
}
},
"rQMsrNMwMU6w1qpLiVp5YA": {
getter: function (varBag, idService) {
return varBag.vars.value.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"E13YjPFoV02rhI5rdqbhwg": {
getter: function (varBag, idService) {
return varBag.vars.value.fileTransferErrorInLocal;
}
},
"vq2erHIgmUah60YRiiBLQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"FIPakEbxzUShyWbOraAmaA": {
getter: function (varBag, idService) {
return varBag.vars.value.hasGuestArrangementsInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xYiVNFiUX0CEpWMxGGh10A": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"r9Sy0BrER06tdhLagXveaA": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lyh3Dp61yUOiRYOTiVW6YQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"+gOIqrotGkyqDx+sfIxxIg": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"96lM3UEPekuIQjYc2wOOgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0speAzXOkUu89Mr7upcylQ": {
getter: function (varBag, idService) {
return varBag.getCacheableMemberContactListVar.value;
}
},
"b2TiRbwZgkGUT6mlhWYI+A": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"6pUGp7MX6UulSZcynMO+qg": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"dbIxaplxv0Kfg8edq1uWow": {
getter: function (varBag, idService) {
return varBag.vars.value.calledNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HShE3TAy40qXHRZ3fId4vg": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"6r0B5wWecECtqSWvLQV3+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"IKIHBcFOJkih8DDqBKkWig": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ITFZQiCD2ECU+Bc_90Ph5A": {
getter: function (varBag, idService) {
return varBag.checkDirectoryAccessVar.value;
}
},
"joUBvPTGuEGyn_JjftQXFw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileDownloadResultInLocal;
}
},
"YUtjoQTjkUeKyBHtQWbaWQ": {
getter: function (varBag, idService) {
return varBag.openDocumentFromLocalPathVar.value;
}
},
"kjLrmMVoTEGrwHrYKC5ipg": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wu++33fCQ0ie7giOSU9kfA": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tYakKbLID0avRg2sJ5KFhw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ymW73qzUn0ioQ7TbfvbTvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"IlTIHemYeUiel2hnaKLLKw": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uO7roe2qk0qatXnoe+fK2Q": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"0VoFZE+oYUO4G7u9ZF3xMA": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uw2X2RfzMUi783NC3qOgPA": {
getter: function (varBag, idService) {
return varBag.model.variables.accommodationDataVar;
}
},
"pRWG0GpRfkGCgYkbliGdPQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingDocumentVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"odKxdKh0HEyFCQW_fWKRUw": {
getter: function (varBag, idService) {
return varBag.model.variables.hasDocumentVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SOCUUoo4mUqNtTaEckF77Q": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByPhoneDataVar;
}
},
"FWB0gqMpHEicSEKxtxgzvw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IAmioqzNmkCyMNYvsXNxvQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"uQqgdZ051kuxC8FtQWPDBg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"TbwXpc+qNEiw5Hwaqec43A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadEventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IgZ7PNGbHky30FrpaVsa4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadMilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ChTYsEboCEWnpuIUWADZmw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VRhHXcXgska80KgOUWDF1Q": {
getter: function (varBag, idService) {
return varBag.model.variables.get_DocumentDataAct;
}
},
"IxS7YyTFCECk_Zw79CtHmw": {
getter: function (varBag, idService) {
return varBag.model.variables.getAccommodationHostDataAct;
}
},
"8eWwnQcIOk2quYIQkttbpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"9_2MsIXstESy+qm3cUIJwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"7YrxYoSnh0OPYWYhhChbmA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"Ky_HhcI7ZU6WyApQQTx8gA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"tVNZIu5rok6xQQQFiogi0Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"cgixQ_SH40OTdttm16b3nw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasDataAndGuestsAndFetched"));
})(varBag.model, idService);
}
},
"DcQ2Q0PLFE+EBKAtM+UgEQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"hOBM_GRjxEO7On7mVo9I4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"M5szZspL6UKYuDrJm3swMA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"u6h+zimwEkCwSS4XUewJdw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"z4CHagcqP0WrcBbtrOHBBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasData"));
})(varBag.model, idService);
}
},
"S7F8f9W_U0+IYCrvuCesLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasGuests"));
})(varBag.model, idService);
}
},
"ub7M5tOXB0OFHrtgEIduOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasSpecialNeedsData"));
})(varBag.model, idService);
}
},
"PG8NUBDOREOTzaWQTfsDsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelpersData"));
})(varBag.model, idService);
}
},
"c11YtE1wO065Odichyatyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"AxBu1hse10mVHJ7ryguMag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"6NS2LD8xHUqC3Tk_1+dw3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"BFsoNM4ufkKMob2sgcGFGA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"51fDaCezv0uxT3lK517yQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"dzQD3mki00aFEasPn_s_LA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasRoomData"));
})(varBag.model, idService);
}
},
"i8tAIUK5C0SrV5SWQ0NscA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"wJiLCxNVtUWF52nVvCnTUg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"_Rp8gvUgdUKrPTYKQezI5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Xa32MNfo60GPd6+qglaE1w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"J7xPa22WjE+GgtQf42B8uQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"TFn5tAr8s06IDmnHZ+tdDw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelpersData2"));
})(varBag.model, idService);
}
},
"z1dMpLEk+UaUgUFXRptBbg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"55PIde7sFECF6PHVO57M8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"7ea1O3muJUGvI_oZFFmx7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ublXz5F07k222A8vqTP+xQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"9+NzgdLsP06Y+Q5qo8A9EA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"igUd07eINkOBYgO8UsoH5w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"8RbY7fA_Z0maS1ZuW6D6hw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_APIHasData"));
})(varBag.model, idService);
}
},
"YOzdlznlKE2qf2Ik5d1koA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"wVcnP+f3DUS2xsQyOzaBig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"PfH16apLq0WxNXsmv4HMXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
