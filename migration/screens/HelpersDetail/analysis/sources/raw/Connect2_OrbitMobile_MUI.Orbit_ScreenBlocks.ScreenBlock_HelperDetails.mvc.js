define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetHelperDetailsResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.model$CallInfoStructureRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_BL.model$GetHelperHost_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedModel, UBTConnect_UtilsModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_OrbitMobile_BLModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel) {
var OS = OutSystems.Internal;

var GetHelperDetailsDataActRec = (function (_super) {
__extends(GetHelperDetailsDataActRec, _super);
function GetHelperDetailsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetHelperDetailsDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetHelperHost_ScreenRec());
}, true, Connect2_OrbitMobile_BLModel.GetHelperHost_ScreenRec)
].concat(_super.attributesToDeclare.call(this));
};
GetHelperDetailsDataActRec.fromStructure = function (str) {
return new GetHelperDetailsDataActRec(new GetHelperDetailsDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetHelperDetailsDataActRec.init();
return GetHelperDetailsDataActRec;
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
this.attr("OrbitMilestoneType", "orbitMilestoneTypeVar", "OrbitMilestoneType", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRec());
}, false, Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRec), 
this.attr("HelperData", "helperDataVar", "HelperData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetHelperDetailsResponseRec());
}, false, Connect2_OrbitMobile_ISModel.GetHelperDetailsResponseRec), 
this.attr("CallPopupInfo", "callPopupInfoVar", "CallPopupInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CallInfoStructureRec());
}, false, Connect2_LegacySharedModel.CallInfoStructureRec), 
this.attr("IsFetchingPhoneData", "isFetchingPhoneDataVar", "IsFetchingPhoneData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ContactByPhoneData", "contactByPhoneDataVar", "ContactByPhoneData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
}, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
this.attr("In_HostId", "in_HostIdIn", "In_HostId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetHelperDetails", "getHelperDetailsDataAct", "getHelperDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetHelperDetailsDataActRec());
}, true, GetHelperDetailsDataActRec)
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
Model._hasValidationWidgetsValue = ((((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_EventId" in inputs) {
this.variables.in_EventIdIn = inputs.In_EventId;
if("_in_EventIdInDataFetchStatus" in inputs) {
this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
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

if("In_HostId" in inputs) {
this.variables.in_HostIdIn = inputs.In_HostId;
if("_in_HostIdInDataFetchStatus" in inputs) {
this.variables._in_HostIdInDataFetchStatus = inputs._in_HostIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_HelperDetails");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetHelperDetailsResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.model$CallInfoStructureRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_BL.model$GetHelperHost_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedModel, UBTConnect_UtilsModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_HelperDetails_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_HelperDetails_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_HelperDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_HelperDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_HelperDetails_mvc_controller;
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
In_EventName: model.variables.in_PreloadEventNameIn,
_in_EventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadEventNameInDataFetchStatus),
In_MilestoneName: model.variables.in_PreloadMilestoneNameIn,
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
return [$if(!(model.variables.helperDataVar.helpersAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, {
inputs: {
In_ExtendedClass: model.getCachedValue(idService.getId("38Jq8mrW3kGCfKSmbXmFTg.In_ExtendedClass"), function () {
return ((model.variables.helperDataVar.helpersAttr.isEmpty) ? (" orbit-accordion-no-margin") : (""));
}, function () {
return model.variables.helperDataVar.helpersAttr.isEmpty;
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("vGBBfbThyUOIcuQayzJalQ.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.helperDataVar.helpersAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
ExtendedClass: model.getCachedValue(idService.getId("dNnIpiPDkUSKWek7y0gdew.ExtendedClass"), function () {
return ("orbit-accordion-item" + ((((model.variables.helperDataVar.helpersAttr.getCurrentRowNumber(callContext.iterationContext)) !== (0))) ? (" margin-top-s") : ("")));
}, function () {
return model.variables.helperDataVar.helpersAttr.getCurrentRowNumber(callContext.iterationContext);
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
uuid: "7",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("2jKnCnn3+kqRwtXAi_NiCA.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedStringFromHelperType$Action(model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr, callContext).out_FormattedStringOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr;
}),
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
"disable-virtualization": model.getCachedValue(idService.getId("ZeBcgOq3TE6nj6JTUMtTyw.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr,
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
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_MemberInformation: model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext),
Is_ShowPersonalInfo: true,
In_DisplayDot: false,
In_HouseholderId: model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr.getCurrent(callContext.iterationContext).householderIdAttr
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
uuid: "11",
alias: "6"
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
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).memberInformationAttr), asPrimitiveValue(model.variables.helperDataVar.helpersAttr.getCurrent(callContext.iterationContext).roleAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.helperDataVar.helpersAttr)]
}))];
}, function () {
return [$if((model.variables.getHelperDetailsDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "There is no Helper available."
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: model.getCachedValue(idService.getId("HlxTHCVtL0u7n+DniQGSiA.In_SkeletonLoadingId"), function () {
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
uuid: "13",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if((!(model.variables.getHelperDetailsDataAct.responseOut.getHelperHost_ResponseAttr.helpersAttr.isEmpty) && !(model.variables.isFetchingDataVar)), false, this, function () {
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
uuid: "14",
alias: "9"
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
alias: "10"
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
uuid: "17",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedStringFromHelperType", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetHelperDetailsResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.model$CallInfoStructureRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_OrbitMobile_MUI.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetCacheableMemberContactList", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_OrbitMobile_MUI.model$AuditPayload_CallMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_CallMember", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess", "Connect2_OrbitMobile_BL.model$GetHelperHost_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedModel, UBTConnect_UtilsModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_HelperDetails_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_HelperDetails_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getHelperDetails$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getHelperDetails$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getHelperDetails$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ThXYj7ZEnUS7CcnoZ+fQsg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/DataActions.ThXYj7ZEnUS7CcnoZ+fQsg:U8bnCVX7j5FO1FvT9zqbKg", "Connect2_OrbitMobile_MUI", "GetHelperDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_HelperDetails/GetHelperDetails");
return controller.callDataAction("DataActionGetHelperDetails", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_HelperDetails/DataActionGetHelperDetails", "7bwp8viZz3NNdYpnTx0cUA", function (b) {
model.variables.getHelperDetailsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getHelperDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getHelperDetailsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_HelperDetails/GetHelperDetails On After Fetch");
controller._onAfterFetch_GetHelperHost$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ThXYj7ZEnUS7CcnoZ+fQsg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getHelperDetails$DataActRefresh"];
// Client Actions
Controller.prototype._onAfterFetch_GetHelperHost$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetHelperHost");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Y4aJBd0O8UK2HubKYsEcUA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.Y4aJBd0O8UK2HubKYsEcUA:24FA0LiaT_3UTUclzl0skA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetHelperHost", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DTb41QJdGUi_qo1AuRlEng", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rO+dBeYLMkGHXtLHuX2ywA", callContext.id);
// HelperData = GetHelperDetails.Response.GetHelperHost_Response
model.variables.helperDataVar = model.variables.getHelperDetailsDataAct.responseOut.getHelperHost_ResponseAttr;
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6D1WGOaT6EmtXuhTekj7ig", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I64XmrA4ukCyyLH+HeO9+w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Y4aJBd0O8UK2HubKYsEcUA", callContext.id);
}

};
Controller.prototype._onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ClickedMemberPhone");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnHandle_ClickedMemberPhone$vars"))());
vars.value.phoneNumberInLocal = phoneNumberIn;
vars.value.callNameInLocal = callNameIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.memberIdInLocal = memberIdIn;
vars.value.signedPhotoURLInLocal = signedPhotoURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TNIrDRlWB02SoBFVDGleag:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.TNIrDRlWB02SoBFVDGleag:OX5eRGD2qn4G4zDqYNj+LA", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMemberPhone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qA1X1yZZ1UiB5cOm1qATbA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Phone Number?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tN8aPHRkVkuoEQFWSm0ZfQ", callContext.id) && ((vars.value.phoneNumberInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JiH0K3Io3UykOVt1FKH8hQ", callContext.id);
// Execute Action: BuildMemberCallData
return controller._buildMemberCallData$Action(vars.value.phoneNumberInLocal, vars.value.signedPhotoURLInLocal, vars.value.localityIdInLocal, vars.value.memberIdInLocal, vars.value.callNameInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:THevzJCi00SIG+SAocsSkA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QkD1QfoZpUSt7kWY5+pAQA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TNIrDRlWB02SoBFVDGleag", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TNIrDRlWB02SoBFVDGleag", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnHandle_ClickedMemberPhone$vars", [{
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
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getLocalOrbitMilestoneTypeByIdVar = new OS.DataTypes.VariableHolder();
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getLocalOrbitMilestoneTypeByIdVar = getLocalOrbitMilestoneTypeByIdVar;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:EsVtL0RJfECXKbPyQ4rqBg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.EsVtL0RJfECXKbPyQ4rqBg:zL7LFAQ2vo2FRkUU6Cyuew", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M20iFmNW90eT_zZRTeyJeQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6WPd7pbetE6ex9ErPI9+Uw", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_HelperDetails_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y31N2LvrH0uTqfs+Y4lSHA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8GMnzlm0pUe0DlYCF7AcrA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V090_xWUTUWok6TZe2OXDw", callContext.id);
// Execute Action: GetLocalOrbitMilestoneTypeById
model.flush();
return Connect2_OrbitMobile_MUIController.default.getLocalOrbitMilestoneTypeById$Action(model.variables.in_OrbitMilestoneTypeIdIn, callContext).then(function (value) {
getLocalOrbitMilestoneTypeByIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:soVmj1elnkuQl1WbDUWVFA", callContext.id);
// OrbitMilestoneType = GetLocalOrbitMilestoneTypeById.LocalOrbitMilestoneType
model.variables.orbitMilestoneTypeVar = getLocalOrbitMilestoneTypeByIdVar.value.localOrbitMilestoneTypeOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ueIuxtnrn0SC0i9ze27QNg", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DgVhs+7XqEGxjt1vvF5uBg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EsVtL0RJfECXKbPyQ4rqBg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EsVtL0RJfECXKbPyQ4rqBg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YCnHSLLdEkOFITwl51d4Ug:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.YCnHSLLdEkOFITwl51d4Ug:oSXyJmPDlLww2wmaWPoaGA", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhone_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VH404Tb23k6Sqp9pu8uODQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oqNGPa73BECwdOwKw+ZcgA", callContext.id);
// ContactByPhoneData.ContactPopupData.ShowPopup = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JrqQ2HDzEUecJLwPNZ4hTw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YCnHSLLdEkOFITwl51d4Ug", callContext.id);
}

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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.BuildMemberCallData$vars"))());
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_EGFYSgneEScGKAtrGJJdw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions._EGFYSgneEScGKAtrGJJdw:Q3Ci7zLI21qE7wDzHTivjA", "Connect2_OrbitMobile_MUI", "BuildMemberCallData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:txLwCM2USEOQKHOUBd8bzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RjHkeeNOnk2ntyv8_SpWnA", callContext.id);
// ContactByPhoneData.ContactPopupData.Name = CallName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.nameAttr = vars.value.callNameInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RjHkeeNOnk2ntyv8_SpWnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.ImageURL = SignedPhotoURL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = vars.value.signedPhotoURLInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RjHkeeNOnk2ntyv8_SpWnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.ShowPopup = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RjHkeeNOnk2ntyv8_SpWnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RjHkeeNOnk2ntyv8_SpWnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.IsLoading = True
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7SoL7MhFRk2TE9obbIR0jQ", callContext.id);
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
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C6VFoyaeekalEiimVXou5g", callContext.id) && getCacheableMemberContactListVar.value.memberContactListOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8_EMLRUxd06T5x8xE1gu2Q", callContext.id);
// ContactByPhoneData.Phone = Phone
model.variables.contactByPhoneDataVar.phoneAttr = vars.value.phoneInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8_EMLRUxd06T5x8xE1gu2Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AxcwpUsphE+HNQNNOm9zkg", callContext.id);
// Execute Action: GetCacheableTimezoneInfo
model.flush();
return Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action(vars.value.localityIdInLocal, callContext).then(function (value) {
getCacheableTimezoneInfoVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vj44+wtA50ecP1+WhbVedg", callContext.id);
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableTimezoneInfo.TimezoneResponse.TimezoneAbreviation
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vj44+wtA50ecP1+WhbVedg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableTimezoneInfo.TimezoneResponse.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableTimezoneInfoVar.value.timezoneResponseOut.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vj44+wtA50ecP1+WhbVedg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vj44+wtA50ecP1+WhbVedg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableTimezoneInfo.TimezoneResponse.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableTimezoneInfoVar.value.timezoneResponseOut.countryNameAttr;
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CSLBTuwd802jHGAaW0qADA", callContext.id) && !(((model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dlqBGzY9zUyeQjGSMeZl7Q", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(vars.value.memberIdInLocal, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.small, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yZ0mzvPtU0GSdP7A1+q5Fg", callContext.id);
// ContactByPhoneData.ContactPopupData.ImageURL = GetCacheableSignedImageURL.URL
model.variables.contactByPhoneDataVar.contactPopupDataAttr.imageURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:79xFcJA+kUC4QmePAsyfyA", callContext.id);
// ContactByPhoneData.ContactPopupData.Locality = GetCacheableMemberContactList.MemberContactList.Current.LocalityName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.localityAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:79xFcJA+kUC4QmePAsyfyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.MobilePhone = GetCacheableMemberContactList.MemberContactList.Current.MobilePhoneNumber
model.variables.contactByPhoneDataVar.mobilePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).mobilePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:79xFcJA+kUC4QmePAsyfyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByPhoneData.HomePhone = GetCacheableMemberContactList.MemberContactList.Current.HomePhoneNumber
model.variables.contactByPhoneDataVar.homePhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).homePhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:79xFcJA+kUC4QmePAsyfyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByPhoneData.WorkPhone = GetCacheableMemberContactList.MemberContactList.Current.WorkPhoneNumber
model.variables.contactByPhoneDataVar.workPhoneAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).workPhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:79xFcJA+kUC4QmePAsyfyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ContactByPhoneData.ContactPopupData.TimezoneName = GetCacheableMemberContactList.MemberContactList.Current.Timezone.TimezoneLabel
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.timezoneLabelAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:79xFcJA+kUC4QmePAsyfyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ContactByPhoneData.ContactPopupData.TimezoneOffset = GetCacheableMemberContactList.MemberContactList.Current.Timezone.OffsetSeconds
model.variables.contactByPhoneDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).timezoneAttr.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:79xFcJA+kUC4QmePAsyfyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// ContactByPhoneData.ContactPopupData.CountryName = GetCacheableMemberContactList.MemberContactList.Current.CountryName
model.variables.contactByPhoneDataVar.contactPopupDataAttr.countryNameAttr = getCacheableMemberContactListVar.value.memberContactListOut.getCurrent(callContext.iterationContext).countryNameAttr;
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AwU4sv0akE2DtBQQPtI8pQ", callContext.id);
// ContactByPhoneData.ContactPopupData.IsFetchingTimezone = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isFetchingTimezoneAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AwU4sv0akE2DtBQQPtI8pQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByPhoneData.ContactPopupData.IsLoading = False
model.variables.contactByPhoneDataVar.contactPopupDataAttr.isLoadingAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tXmPOcJ3LEem82_5EEW8VA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_EGFYSgneEScGKAtrGJJdw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_EGFYSgneEScGKAtrGJJdw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.BuildMemberCallData$vars", [{
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:zUjlkYTfjU+iWBDdBWxYXg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.zUjlkYTfjU+iWBDdBWxYXg:QwxAvETl+HMRD09AJRcCDg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J8Oktp7f_0GyD5NX4lkFew", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iOBuM1GmoUiZqdPwnO6G4w", callContext.id);
// Trigger Event: NavigateTo_ContactHelpdesk
return controller.navigateTo_ContactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Event$Action(model.variables.in_PreloadEventNameIn, model.variables.helperDataVar.eventDetailsAttr.startDateAttr, model.variables.helperDataVar.eventDetailsAttr.endDateAttr, model.variables.helperDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_PreloadEventNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+dck0RAHXk25lQ3fwoKnFw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zUjlkYTfjU+iWBDdBWxYXg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zUjlkYTfjU+iWBDdBWxYXg", callContext.id);
throw ex;

});
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnHandle_CallClicked$vars"))());
vars.value.calledNumberInLocal = calledNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:7cRpnmgn2EC6_juT16r7Mg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.7cRpnmgn2EC6_juT16r7Mg:hsWw7gxsd_N+6bSkc3RJNQ", "Connect2_OrbitMobile_MUI", "OnHandle_CallClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bKTHb_THBU6WBUe9mwY7MQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SO9dfGSZ3E6WYBN2Ay4xQg", callContext.id);
// Execute Action: OnApplicationEvent_CallMember
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_CallMember$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_CallMemberRec();
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.helperDataVar.eventDetailsAttr.nameAttr;
rec.householdNameAttr = model.variables.callPopupInfoVar.contactPersonAttr;
rec.householderPhoneAttr = model.variables.callPopupInfoVar.callPhoneAttr;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:99bxWZbRUUmfB2Smiuy1Ig", callContext.id);
// Execute Action: OnHandle_ContactByPhone_Cancel
controller._onHandle_ContactByPhone_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ihx_V2t5Kk6tADUXZCLClQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7cRpnmgn2EC6_juT16r7Mg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7cRpnmgn2EC6_juT16r7Mg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnHandle_CallClicked$vars", [{
name: "CalledNumber",
attrName: "calledNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnHandle_ClickedMember$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.typeInLocal = typeIn;
var checkDirectoryAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkDirectoryAccessVar = checkDirectoryAccessVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Bv8ztQdVY0aDcZBsgMeeZw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.Bv8ztQdVY0aDcZBsgMeeZw:ZcnEgqkkg8z0dZpRcfbwvA", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G8eV1f93MEqkWih8EedHBA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DrQ8+n1hLkuVrWeHJxihNw", callContext.id);
// Execute Action: CheckDirectoryAccess
model.flush();
return Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action(vars.value.householdIdInLocal, vars.value.typeInLocal, callContext).then(function (value) {
checkDirectoryAccessVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+A7VZfkrqU6N+VT9eDnYYg", callContext.id) && checkDirectoryAccessVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M6SWKdXuzkGygtlHkiH8AA", callContext.id);
// Trigger Event: NavigateTo_HouseholdDetail
return controller.navigateTo_HouseholdDetail$Action(vars.value.householdIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aDPVLCpsd0alihbpCzAQsQ", callContext.id);
// Execute Action: OnApplicationEvent_ViewHousehold
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ViewHousehold$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec();
rec.targetHouseholdIdAttr = vars.value.householdIdInLocal;
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.helperDataVar.eventDetailsAttr.nameAttr;
rec.eventLocationAttr = model.variables.helperDataVar.eventDetailsAttr.locationAttr;
return rec;
}(), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JDSrtFlPUkWLxJzKnbpOsQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zXymOumoU0apTiq5ksGHQQ", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c0QXTalAwUCOihdlPvIl2A", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Bv8ztQdVY0aDcZBsgMeeZw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Bv8ztQdVY0aDcZBsgMeeZw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.OnHandle_ClickedMember$vars", [{
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tXO0uAFnDku075sECNdiLQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.tXO0uAFnDku075sECNdiLQ:Kw4XU2XrYDfUKg6vVlALfg", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JNlPHQTbUkq9Fh4lWpE9kQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gI8l98XcyU+cWrAxUgnxww", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:j6KkH5DSK0qNJwEl33YlfQ", callContext.id);
// Refresh Query: GetHelperDetails
var result = controller.getHelperDetails$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g4ismzX1iU2pViyuMxJ5Kw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tXO0uAFnDku075sECNdiLQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tXO0uAFnDku075sECNdiLQ", callContext.id);
throw ex;

});
};
Controller.prototype._togglePhonePopup$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TogglePhonePopup");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:h9QQuxQ2bE2ViH0ZYoqegg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.h9QQuxQ2bE2ViH0ZYoqegg:6BuI1OSJn74PzL75KAnHHw", "Connect2_OrbitMobile_MUI", "TogglePhonePopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aW4N_YJpdE2NaAu5tASE2Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fwfiP0RbnUOce10ZHZm5zA", callContext.id);
// CallPopupInfo.ShowCallPopup = notCallPopupInfo.ShowCallPopup
model.variables.callPopupInfoVar.showCallPopupAttr = !(model.variables.callPopupInfoVar.showCallPopupAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2UUldkiNAkW8Se88sscXgA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:h9QQuxQ2bE2ViH0ZYoqegg", callContext.id);
}

};
Controller.prototype._togglePhoneFetchingFlag$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TogglePhoneFetchingFlag");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HPFivhR620+sMG3oD9RaPw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg/ClientActions.HPFivhR620+sMG3oD9RaPw:rOzfc_JzK1cayu+3WHMbJQ", "Connect2_OrbitMobile_MUI", "TogglePhoneFetchingFlag", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YcUzaIPT+U+odpfRjo7YrQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eaSsvzH650+HDWsmO9B3wQ", callContext.id);
// IsFetchingPhoneData = notIsFetchingPhoneData
model.variables.isFetchingPhoneDataVar = !(model.variables.isFetchingPhoneDataVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QeP0OVdNBUKNYAXmu5NHBw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HPFivhR620+sMG3oD9RaPw", callContext.id);
}

};

Controller.prototype.onAfterFetch_GetHelperHost$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetHelperHost$Action, callContext);

};
Controller.prototype.onHandle_ClickedMemberPhone$Action = function (phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMemberPhone$Action, callContext, phoneNumberIn, callNameIn, localityIdIn, memberIdIn, signedPhotoURLIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_ContactByPhone_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactByPhone_Cancel$Action, callContext);

};
Controller.prototype.buildMemberCallData$Action = function (phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buildMemberCallData$Action, callContext, phoneIn, signedPhotoURLIn, localityIdIn, memberIdIn, callNameIn);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

};
Controller.prototype.onHandle_CallClicked$Action = function (calledNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_CallClicked$Action, callContext, calledNumberIn);

};
Controller.prototype.onHandle_ClickedMember$Action = function (householdIdIn, typeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ClickedMember$Action, callContext, householdIdIn, typeIn);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.togglePhonePopup$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._togglePhonePopup$Action, callContext);

};
Controller.prototype.togglePhoneFetchingFlag$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._togglePhoneFetchingFlag$Action, callContext);

};
Controller.prototype.navigateTo_ContactHelpdesk$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_HouseholdDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:bJTcLbuh_0CVefKNx2ivwg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.bJTcLbuh_0CVefKNx2ivwg:8HuevQweThoFOrlE177VeQ", "Connect2_OrbitMobile_MUI", "ScreenBlock_HelperDetails", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:bJTcLbuh_0CVefKNx2ivwg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_HelperDetails On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_HelperDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"QDrQPGhKDEeL822OWQDllw": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GDiMBCYEI0KNNBPXsKcKIg": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GcqEmuqHm06crR9yaiqajA": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"VgZ0Y2PmTEe2tM93lRjVAg": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"_tUR_TH_GU2PLvOPc1k5sg": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"V090_xWUTUWok6TZe2OXDw": {
getter: function (varBag, idService) {
return varBag.getLocalOrbitMilestoneTypeByIdVar.value;
}
},
"6WPd7pbetE6ex9ErPI9+Uw": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"mDrLIf_We0q1cOdLc4Z5sw": {
getter: function (varBag, idService) {
return varBag.vars.value.phoneInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LDKLuzUze0aWUvu9s6BoMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.signedPhotoURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KHFxiQQMGUC7IMw1DnduQA": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"3avIso1yikiO4D8vfA7big": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"YlevOWd2ck2luMvKvWJo2A": {
getter: function (varBag, idService) {
return varBag.vars.value.callNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dlqBGzY9zUyeQjGSMeZl7Q": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"AxcwpUsphE+HNQNNOm9zkg": {
getter: function (varBag, idService) {
return varBag.getCacheableTimezoneInfoVar.value;
}
},
"7SoL7MhFRk2TE9obbIR0jQ": {
getter: function (varBag, idService) {
return varBag.getCacheableMemberContactListVar.value;
}
},
"ZJcJ8uR+DU64JKy80BPn2A": {
getter: function (varBag, idService) {
return varBag.vars.value.calledNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"A3MRYNsUGE2bs8fKM7hK_g": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"_9_sdiMQdEWWp3SHxjviUw": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DrQ8+n1hLkuVrWeHJxihNw": {
getter: function (varBag, idService) {
return varBag.checkDirectoryAccessVar.value;
}
},
"SIwiKSn8XUuaxeznoNgsEg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZPlRF0D_w0eH3RrRuOJrDQ": {
getter: function (varBag, idService) {
return varBag.model.variables.orbitMilestoneTypeVar;
}
},
"RoLwffnb7UOtjLik7h0hRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.helperDataVar;
}
},
"9UOeIbSnyU+k5k_XEyCMow": {
getter: function (varBag, idService) {
return varBag.model.variables.callPopupInfoVar;
}
},
"Xuy9AS3AkEOBhW292VwpGA": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingPhoneDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2cza7BHweEGGc2kcxvKVXQ": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByPhoneDataVar;
}
},
"qf9ExWjCFUOX_+ZllQeXiQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"1AjVyvxL0kOHvnjrJ90wUA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadEventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BViJrkC170OcvTvPSbBn6A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadMilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"M4MgHwB2SES65xesRaHPYA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1L6djizN5UW3IrI08dsmKg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ThXYj7ZEnUS7CcnoZ+fQsg": {
getter: function (varBag, idService) {
return varBag.model.variables.getHelperDetailsDataAct;
}
},
"bLOJ2mALpkmDiF_yhtSQzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"UKWkxyI+NUq2LmB9Yh61yA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"fQTsXAwtOkuI0rZ3fZ43jg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"z6x92QDpoE6S9_kvBxUCYA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"bD41ZJEOb0WvHDsgDssYnw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"4Y_0zLU3XkevcQ467I96zw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"lvvu6BiVFUS4ZUaAc3mI_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"GToIxTemG0Cc_7a1CvUShQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"2u92LpvslU+fQkU+muuHUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelpersData"));
})(varBag.model, idService);
}
},
"gUA13H6xvUS6nZ5dnP0YzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"PemszOIg_Eulf_3OtsKKlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"MeSoBtLMakyAlJ2FyJBfVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"l5Eg_3TqgEC7QJ+IqZwXtA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"seu38HbeREiVgQnMxusZBw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"TEJAepRYvUi8cUBGzpHZHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"8NkFYbAt5UGPJDU8PVTxtQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"z7mVi3nQJUCfuyh0doA+qA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetchingAndHasHelperData"));
})(varBag.model, idService);
}
},
"hjBEfGPR1EmHzrMvYOp+Bw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"_cHLXRl6ykyPOf9bLSikGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"rkwXSFNlNEy8gOpGZPL7Dw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
