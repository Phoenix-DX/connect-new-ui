define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_BL.model$GetGuestArrangements_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel) {
var OS = OutSystems.Internal;

var GetGuestArrangementsDataActRec = (function (_super) {
__extends(GetGuestArrangementsDataActRec, _super);
function GetGuestArrangementsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetGuestArrangementsDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetGuestArrangements_ScreenRec());
}, true, Connect2_OrbitMobile_BLModel.GetGuestArrangements_ScreenRec), 
this.attr("HasData", "hasDataOut", "HasData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetGuestArrangementsDataActRec.init();
return GetGuestArrangementsDataActRec;
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
this.attr("GuestArrangementsData", "guestArrangementsDataVar", "GuestArrangementsData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetGuestArrangements_ScreenRec());
}, false, Connect2_OrbitMobile_BLModel.GetGuestArrangements_ScreenRec), 
this.attr("In_MemberId", "in_MemberIdIn", "In_MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
this.attr("GetGuestArrangements", "getGuestArrangementsDataAct", "getGuestArrangementsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetGuestArrangementsDataActRec());
}, true, GetGuestArrangementsDataActRec)
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
Model._hasValidationWidgetsValue = (((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MemberId" in inputs) {
this.variables.in_MemberIdIn = inputs.In_MemberId;
if("_in_MemberIdInDataFetchStatus" in inputs) {
this.variables._in_MemberIdInDataFetchStatus = inputs._in_MemberIdInDataFetchStatus;
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

if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = inputs.In_MilestoneId;
if("_in_MilestoneIdInDataFetchStatus" in inputs) {
this.variables._in_MilestoneIdInDataFetchStatus = inputs._in_MilestoneIdInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_GuestArrangements");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Accordion_Orbit.mvc$view", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_BL.model$GetGuestArrangements_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_GuestArrangements";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Accordion_Orbit_mvc_view, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_controller;
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
In_MilestoneName: model.variables.in_PreloadMilestoneNameIn,
_in_MilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PreloadMilestoneNameInDataFetchStatus),
In_OrbitMilestoneTypeId: model.variables.in_OrbitMilestoneTypeIdIn,
_in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
In_EventName: model.variables.in_PreloadEventNameIn,
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
return [$if((model.variables.getGuestArrangementsDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function () {
return [$if(model.variables.getGuestArrangementsDataAct.hasDataOut, false, this, function () {
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width padding-x-m margin-bottom-m display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width bold color-orbit-primary-7",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: ((((model.variables.guestArrangementsDataVar.titleAttr + " ") + model.variables.guestArrangementsDataVar.firstNameAttr) + " ") + model.variables.guestArrangementsDataVar.lastNameAttr),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(!(model.variables.guestArrangementsDataVar.specialNeedsAttr.isEmpty), false, this, function () {
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
uuid: "8",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
UsePadding: false,
IsExpanded: true,
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
uuid: "9",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Special Need/s",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("97c+dKUlmEibF8esN5MWVw.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.guestArrangementsDataVar.specialNeedsAttr,
style: "list list-group orbit-household-list",
tag: "div",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_view, {
inputs: {
In_HouseholderId: model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).householderIdAttr,
In_HideMemberInfoLocation: true,
Is_ShowPersonalInfo: false,
In_DisplayDot: false,
In_MemberInformation: model.getCachedValue(idService.getId("YP6LgBTJT0G75V+k5aV4Tw.In_MemberInformation"), function () {
return function () {
var rec = new Connect2_OrbitMobile_ISModel.MemberInformationRec();
rec.householderIdAttr = model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).householderIdAttr;
rec.memberIdAttr = model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).memberIdAttr;
rec.firstNameAttr = model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).firstNameAttr;
rec.lastNameAttr = model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).lastNameAttr;
rec.titleAttr = model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).titleAttr;
rec.isHouseholderAttr = false;
rec.signedPhotoURLAttr = model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).signedPhotoURLAttr;
return rec;
}();
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).householderIdAttr;
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).memberIdAttr;
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).firstNameAttr;
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).lastNameAttr;
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).titleAttr;
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).signedPhotoURLAttr;
})
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
uuid: "12",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_OrbitAdmin: PlaceholderContent.Empty,
placeholder_Info: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width",
visible: !(model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.isEmpty),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("YWDvEFMHs0Oaa2i6yiTq9w.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr,
style: "list list-group orbit-member-list",
tag: "div",
_idProps: {
service: idService,
uuid: "14"
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
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr)]
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("SDcFnhF1eUy8JQhLuUq9rw.Value"), function () {
return (model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr + (((((model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr) !== ("")) && ((model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr) !== ("")))) ? ((": " + model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr)) : (model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr)));
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).typeAttr;
}, function () {
return model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr.getCurrent(callContext.iterationContext).notesAttr;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, callContext, idService, "2")
},
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.specialNeedsAttr.getCurrent(callContext.iterationContext).specialNeedsAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.specialNeedsAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.specialNeedsAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.isEmpty), false, this, function () {
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
uuid: "17",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
ExtendedClass: "orbit-accordion-item",
IsExpanded: true,
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
uuid: "18",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Arrival Details",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("nk9SmkzQRk+x4Ai2Mz59OQ.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.guestArrangementsDataVar.arrivalDetailsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("+r+3OM11BkK6vgT1X_lqJA.class"), function () {
return (("full-width padding-x-m" + (((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrentRowNumber(callContext.iterationContext) === 0)) ? (" padding-top-m") : (" padding-top-base"))) + (((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrentRowNumber(callContext.iterationContext) === (model.variables.guestArrangementsDataVar.arrivalDetailsAttr.length - 1))) ? (" padding-bottom-m") : (" padding-bottom-base border-bottom-neutral-4")));
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.length;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).orbitMilestoneTypeAttr.iconTransportArrivalAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.notesAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.arrivalLocationAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex align-items-center justify-content-flex-start line-height-1",
visible: model.getCachedValue(idService.getId("G7J0Adv3xEy7s6YdRI39qw.Visible"), function () {
return !(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time text-neutral-10",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7",
value: model.getCachedValue(idService.getId("HVEwyadHJ0ycecXrusK1LQ.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr, true, true, false, true, true, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("X9yUYba6LUunM_1eTSW9kg.Style"), function () {
return ("display-flex align-items-center justify-content-flex-start line-height-1" + ((!(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr;
}),
visible: ((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.arrivalLocationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon text-neutral-10 orbit-icon-license-plate",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7",
value: model.getCachedValue(idService.getId("d4Yt_FFpPUCR7RmG9k8VLA.Value"), function () {
return ((((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) !== (""))) ? (model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) : ("Not available"));
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr;
}),
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("NR+qX9PV00GforKolKm8_w.Style"), function () {
return ("display-flex align-items-center justify-content-flex-start line-height-1" + (((!(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) || ((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) !== ("")))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr;
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr;
}),
visible: ((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.arrivalLocationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: ("icon text-neutral-10 " + model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).orbitMilestoneTypeAttr.iconTransportArrivalAttr),
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7",
value: model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.arrivalLocationAttr,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("bIKqt5euH0SatS8B9vmzWg.Style"), function () {
return ("display-flex align-items-baseline justify-content-flex-start line-height-1" + ((((!(model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) || ((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.arrivalLocationAttr) !== (""))) || ((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) !== ("")))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr;
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.arrivalLocationAttr;
}, function () {
return model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr;
}),
visible: ((model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.notesAttr) !== ("")),
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-arrangements text-neutral-10",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7 align-self-center",
value: model.variables.guestArrangementsDataVar.arrivalDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.notesAttr,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, callContext, idService, "3")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.arrivalDetailsAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.guestArrangementsDataVar.mealDetailsAttr.isEmpty), false, this, function () {
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
uuid: "34",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
ExtendedClass: "orbit-accordion-item",
IsExpanded: true,
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
uuid: "35",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Meal Details",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("aSqe_b7KfkS2xqNXHXTvBg.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.guestArrangementsDataVar.mealDetailsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("dSxuVsAin06QGJshcQP3Ww.Style"), function () {
return (("full-width padding-x-m" + (((model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrentRowNumber(callContext.iterationContext) === 0)) ? (" padding-top-m") : (" padding-top-base"))) + (((model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrentRowNumber(callContext.iterationContext) === (model.variables.guestArrangementsDataVar.mealDetailsAttr.length - 1))) ? (" padding-bottom-m") : (" padding-bottom-base border-bottom-neutral-4")));
}, function () {
return model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.guestArrangementsDataVar.mealDetailsAttr.length;
}),
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).eveningMealAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).middayMealAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex align-items-center justify-content-flex-start line-height-1 text-neutral-10",
visible: model.getCachedValue(idService.getId("yHUqvSwH90WYuydCJ92sqg.Visible"), function () {
return !(model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.getCachedValue(idService.getId("ceUG4_bATUyvqVDUowrlTQ.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr, false, true, false, false, true, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("gjFb_3tzHk63ZOyEPxkJvQ.Style"), function () {
return ("text-align-left line-height-1" + ((!(model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "text-neutral-7",
value: ("Midday Meal: " + model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).middayMealAttr),
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("o4NT_r0qRkang_AUKVazCw.Style"), function () {
return ("text-align-left line-height-1" + (((!(model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) || ((model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).middayMealAttr) !== ("")))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).milestoneDateTimeAttr;
}, function () {
return model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).middayMealAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "text-neutral-7",
value: ("Evening Meal: " + model.variables.guestArrangementsDataVar.mealDetailsAttr.getCurrent(callContext.iterationContext).eveningMealAttr),
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, callContext, idService, "4")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.mealDetailsAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.mealDetailsAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.guestArrangementsDataVar.departureDetailsAttr.isEmpty), false, this, function () {
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
uuid: "46",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_view, {
inputs: {
IsExpanded: true,
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
uuid: "47",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Departure Details",
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": model.getCachedValue(idService.getId("605x5unVnUCqoGPe54t89Q.disable-virtualization"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
}, OS.DataTypes.DataTypes.Text, callContext.id);
})
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.guestArrangementsDataVar.departureDetailsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("0xlLgm9FWUaHVx+XlMgejw.class"), function () {
return (("full-width padding-x-m" + (((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrentRowNumber(callContext.iterationContext) === 0)) ? (" padding-top-m") : (" padding-top-base"))) + (((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrentRowNumber(callContext.iterationContext) === (model.variables.guestArrangementsDataVar.departureDetailsAttr.length - 1))) ? (" padding-bottom-m") : (" padding-bottom-base border-bottom-neutral-4")));
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.length;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).orbitMilestoneTypeAttr.iconTransportDepartureAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.notesAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.departureLocationAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr), asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex align-items-center justify-content-flex-start line-height-1",
visible: model.getCachedValue(idService.getId("4Bul7Wq7T0W1qRbscL82uQ.Visible"), function () {
return !(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time text-neutral-10",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7",
value: model.getCachedValue(idService.getId("EDxjLTz1qkC8sr2jDKEkjg.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr, true, true, false, true, true, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneStartDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("CcGWfeXFHE+OIH6_9b53vA.Style"), function () {
return ("display-flex align-items-center justify-content-flex-start line-height-1" + ((!(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr;
}),
visible: ((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.departureLocationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon text-neutral-10 orbit-icon-license-plate",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7",
value: model.getCachedValue(idService.getId("iYMB6G5F3EOsUV_pMPThBA.Value"), function () {
return ((((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) !== (""))) ? (model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) : ("Not available"));
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr;
}),
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("sSrMkxzp2UG4lPn9y6dN2Q.Style"), function () {
return ("display-flex align-items-center justify-content-flex-start line-height-1" + (((!(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) || ((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) !== ("")))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr;
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr;
}),
visible: ((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.departureLocationAttr) !== ("")),
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: ("icon text-neutral-10 " + model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).orbitMilestoneTypeAttr.iconTransportDepartureAttr),
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7",
value: model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.departureLocationAttr,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("+QpupAmtNESgd6lXtjTxgA.Style"), function () {
return ("display-flex align-items-baseline justify-content-flex-start line-height-1" + ((((!(model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) || ((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.departureLocationAttr) !== (""))) || ((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr) !== ("")))) ? (" margin-top-base") : ("")));
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.milestoneEndDateTimeAttr;
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.milestoneInfoAttr.departureLocationAttr;
}, function () {
return model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.travelIdentifierAttr;
}),
visible: ((model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.notesAttr) !== ("")),
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-arrangements text-neutral-10",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base text-neutral-7 align-self-center",
value: model.variables.guestArrangementsDataVar.departureDetailsAttr.getCurrent(callContext.iterationContext).milestoneTransportAttr.notesAttr,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, callContext, idService, "5")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.guestArrangementsDataVar.departureDetailsAttr)]
})];
}, function () {
return [];
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "No guest arrangement data has been found. Please check again later or contact the Orbit Helpdesk if you have any questions."
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
uuid: "63",
alias: "13"
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
In_SkeletonLoadingId: model.getCachedValue(idService.getId("Ouh6oliyAECwbzun2IG1Xg.In_SkeletonLoadingId"), function () {
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
uuid: "64",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(model.variables.getGuestArrangementsDataAct.hasDataOut, false, this, function () {
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
uuid: "65",
alias: "15"
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.controller$GetSkeletonLoadingIdFromMilestoneTypeId", "Connect2_OrbitMobile_BL.model$GetGuestArrangements_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Milestone", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_OrbitMobile_MUI.model$AuditPayload_ViewHouseholdRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ViewHousehold", "Connect2_OrbitMobile_MUI.controller$CheckDirectoryAccess"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getGuestArrangements$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getGuestArrangements$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getGuestArrangements$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ST5YEVB1VEyK6Bjh2XT3cg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.HSUj_vbLnE+y78ntd_LPcg/DataActions.ST5YEVB1VEyK6Bjh2XT3cg:sFq2NYzMoQiRK4PWspgxZw", "Connect2_OrbitMobile_MUI", "GetGuestArrangements", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_GuestArrangements/GetGuestArrangements");
return controller.callDataAction("DataActionGetGuestArrangements", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_GuestArrangements/DataActionGetGuestArrangements", "oHaS4JL2FfsUU_J9E9q2Hg", function (b) {
model.variables.getGuestArrangementsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getGuestArrangementsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getGuestArrangementsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_GuestArrangements/GetGuestArrangements On After Fetch");
controller._onAfterFetch_GetGuestArrangements$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ST5YEVB1VEyK6Bjh2XT3cg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getGuestArrangements$DataActRefresh"];
// Client Actions
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:p4edIVCp_0qo6pMOGAHbSw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.HSUj_vbLnE+y78ntd_LPcg/ClientActions.p4edIVCp_0qo6pMOGAHbSw:rHAaGJIEiZO4veRuyWS93g", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HNdYKz_aK0SgP1dfEjDzDg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TnULRupiQE6x3CkvP76U3w", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_GuestArrangements_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YQya5KkcTECjMGHVNgEcMw", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_wRifkVzt0ajptP3J3A_1Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vx5800tSc0Kucdr18C1cyQ", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Wl3eAinSZEO+LDRoFbghDQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p4edIVCp_0qo6pMOGAHbSw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:p4edIVCp_0qo6pMOGAHbSw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onAfterFetch_GetGuestArrangements$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetGuestArrangements");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+ENbO9jEYkaUFsXBe9InwA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.HSUj_vbLnE+y78ntd_LPcg/ClientActions.+ENbO9jEYkaUFsXBe9InwA:plqqwXhwcpBP4gUe_4x2mA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetGuestArrangements", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LIttSXjfXkOe1MU73h3tNw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W8z32jSOEE+4sW60v+Xyww", callContext.id);
// GuestArrangementsData = GetGuestArrangements.Response
model.variables.guestArrangementsDataVar = model.variables.getGuestArrangementsDataAct.responseOut;
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+l1SfiUonUmeIj7x2YHDdQ", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gHBjAi+NEEGp28oTeD5RNw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+ENbO9jEYkaUFsXBe9InwA", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LsbmereuXEefiPi8WmPr5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.HSUj_vbLnE+y78ntd_LPcg/ClientActions.LsbmereuXEefiPi8WmPr5A:BjyjhjyLs+GYeSXvquOLdw", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZpXkh9CpH0ma7blbKi_iVg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2LFE1aUqUk+AgjAUX8VJZA", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AA6L3QED_E+iYmHGRRy_yA", callContext.id);
// Refresh Query: GetGuestArrangements
var result = controller.getGuestArrangements$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z7VAqhG9ikOv3sNbeMf1pw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LsbmereuXEefiPi8WmPr5A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LsbmereuXEefiPi8WmPr5A", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KY8TsVK_F02mRM0n1iazkQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.HSUj_vbLnE+y78ntd_LPcg/ClientActions.KY8TsVK_F02mRM0n1iazkQ:amzasQuI+JyLi_tFFQ0XDw", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8i5uxvaX70WnWsBkCWW2nQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oeQE_S3jQEuwpTa9kD+n6Q", callContext.id);
// Trigger Event: ContactHelpdesk
return controller.contactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Milestone$Action(model.variables.in_OrbitMilestoneTypeIdIn, model.variables.in_PreloadEventNameIn, model.variables.in_PreloadMilestoneNameIn, model.variables.guestArrangementsDataVar.eventDetailsAttr.startDateAttr, model.variables.guestArrangementsDataVar.eventDetailsAttr.locationAttr, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_PreloadMilestoneNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2RG4GzbXR0iZSMw2tdxGCQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KY8TsVK_F02mRM0n1iazkQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KY8TsVK_F02mRM0n1iazkQ", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.OnHandle_ClickedMember$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.typeInLocal = typeIn;
var checkDirectoryAccessVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkDirectoryAccessVar = checkDirectoryAccessVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dp8a_oqVhEqiNCeftGiE0Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.HSUj_vbLnE+y78ntd_LPcg/ClientActions.dp8a_oqVhEqiNCeftGiE0Q:wq7FzpMcfES8YEd+kYH1Wg", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GJ_dY+EcBEyv8k21Mb_6eg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KJbm58m1YkufpTfFots1mw", callContext.id);
// Execute Action: CheckDirectoryAccess
model.flush();
return Connect2_OrbitMobile_MUIController.default.checkDirectoryAccess$Action(vars.value.householdIdInLocal, vars.value.typeInLocal, callContext).then(function (value) {
checkDirectoryAccessVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KMdFBJ8gBkuNhaXBsjTcnw", callContext.id) && checkDirectoryAccessVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DdW8QY6nDU2SnIqfXcBhaA", callContext.id);
// Trigger Event: NavigateTo_HouseholdDetail
return controller.navigateTo_HouseholdDetail$Action(vars.value.householdIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nU7jrxQ0ZkiMCCR26ihTww", callContext.id);
// Execute Action: OnApplicationEvent_ViewHousehold
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ViewHousehold$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ViewHouseholdRec();
rec.targetHouseholdIdAttr = vars.value.householdIdInLocal;
rec.milestoneIdAttr = model.variables.in_MilestoneIdIn;
rec.milestoneTitleAttr = model.variables.in_PreloadMilestoneNameIn;
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.guestArrangementsDataVar.eventDetailsAttr.nameAttr;
rec.eventLocationAttr = model.variables.guestArrangementsDataVar.eventDetailsAttr.locationAttr;
return rec;
}(), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CQfO_3q7lkOvMrgXVWAN5Q", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9stJnSQC9UqIG83Hg4uiyQ", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cxsWN4ofjEKV2W_Znx3WjQ", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dp8a_oqVhEqiNCeftGiE0Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dp8a_oqVhEqiNCeftGiE0Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.OnHandle_ClickedMember$vars", [{
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

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onAfterFetch_GetGuestArrangements$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetGuestArrangements$Action, callContext);

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
Controller.prototype.contactHelpdesk$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_HouseholdDetail$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HSUj_vbLnE+y78ntd_LPcg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.HSUj_vbLnE+y78ntd_LPcg:+bxAQGMwiN4PfM4sDJsZUQ", "Connect2_OrbitMobile_MUI", "ScreenBlock_GuestArrangements", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HSUj_vbLnE+y78ntd_LPcg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_GuestArrangements On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_GuestArrangements.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"TnULRupiQE6x3CkvP76U3w": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"MqQzkSNe1USNv8bInzFHyw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"i54dQfnL6U2QcRZPLtCgmA": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KJbm58m1YkufpTfFots1mw": {
getter: function (varBag, idService) {
return varBag.checkDirectoryAccessVar.value;
}
},
"Shc3qdLUBESt3Kh3x6k8cw": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ui6slE+cKUaQC8Otw1dFxg": {
getter: function (varBag, idService) {
return varBag.model.variables.guestArrangementsDataVar;
}
},
"GrZQyTlrY0uL9__Wsj2vgQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"RRbiLt3soUOwLTBhg4CiKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"dhUF76uN80yUP93CDx+qUg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"3V530sA5_k6VXbR2ePJydA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sgf2fiTeYUCRf9jltvu40g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadEventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Kx6KajwqeUaq1J+u9SHMBA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PreloadMilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HfiKUprcSE6+ELmNcQilPw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ST5YEVB1VEyK6Bjh2XT3cg": {
getter: function (varBag, idService) {
return varBag.model.variables.getGuestArrangementsDataAct;
}
},
"2TPRxhISzkS7nmCULopwEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"JQPrxJWLW0mKImqf9mU4Mg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"s24PHMdtWkmY1hJ2mBPtmA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"TRfAp9kPI02VUhn+4Z9XDw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"wKRv4G7Dik+3xuhg6r9ZQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"P0qLidEC0EGLtwNoYS3w3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"6jM1Awc9dUWNJt16aZWI5w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"uIXMpTuTb0qgZdBZ2cfx5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"KAS1rYyfYU6GWwrsBPZktg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"YG68XrVV_0GwnjPtbKJM3A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasData"));
})(varBag.model, idService);
}
},
"879X9kYzsUmDV0tHD529wg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasSpecialNeedsData"));
})(varBag.model, idService);
}
},
"CBaTKvm4YE2GdKv+2cgNsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"XXu4cPI1+USxutU7Zfg4eQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"738FXSVhSUapBnqYhjgq_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"0eR5Ur5vX0yWHRlu2Bbh3A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"c6i11trQ6UaMrkrBOGRDcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
},
"S6CrRHiv0kuYxMAAHwbHGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasArrivalDetailsData"));
})(varBag.model, idService);
}
},
"7VywvSv3H0uvCBjUBxgMVg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xvse3_Tx7kOhn5zDvbpc+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"eGeSMIqX4EuzaXgWQxOCgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"TyBw0eRqz02t7e0d58w_qQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasMealDetailsData"));
})(varBag.model, idService);
}
},
"WPNzxrF2v06GFUXGNQSZ5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"eFULYzFCmkGqmt1YhTD9Hw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"Ov_K7FrJ2kSH7uyAH65+nQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"bP1x7TZZ3UitYQK7fUEhVA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasDepartureDetailsData"));
})(varBag.model, idService);
}
},
"6rFNvSMWnkefyDxo88hjnw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xUqmSKCMGk+Tu21WlhI_+g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"pLssdXcDNEepxZFgBC6UPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YjV__vZF2E+RBkNXVbqeng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"ht4qtT_wuU+9wsaOdsHbUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_APIHasData"));
})(varBag.model, idService);
}
},
"A4+TcMcW8kS5ZWeAJPY0hw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"xwNXuxK0rEueGNh1JCfa4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"RrxyWlumz0+6gfZe4qqmXg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
