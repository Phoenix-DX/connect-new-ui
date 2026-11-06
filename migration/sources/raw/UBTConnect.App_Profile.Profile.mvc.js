define("UBTConnect.App_Profile.Profile.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.controller", "MemoryClientCache.model", "NavigationHandler.controller", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$CacheControl_AllSubdivionsBooleanRecord", "APIDomain_Directory_IS.model$Directory_LocalitySubdivisionRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Directory_LocalitySubdivisionList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$DropdownOptionRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "UBTConnect.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityDetailsList", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.model$CacheControl_AllSubdivionsRec", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTJavaScriptUtils.controller$ScreenController_ValidateWidgets", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect.referencesHealth$MemoryClientCache", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "OutSystemsUI_2_23.controller$DropdownNotValid", "OutSystemsUI_2_23.controller$DropdownClearValidation", "UBTConnect_Utils.controller$Get_MemoryCacheKey_UniqueKey", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$PreventNavigation", "UBTJavaScriptUtils.controller$ScreenController_Get", "UBTConnect_Utils.controller$DropdownSearch_ForceResizeOnOpen", "APIDomain_Directory_IS.model$Custom_AddressInfoRec"], function (OutSystems, UBTConnectModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, UBTConnect_UtilsModel, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, MemoryClientCacheController, UBTConnect_UtilsController, MemoryClientCacheModel, NavigationHandlerController) {
var OS = OutSystems.Internal;

var GetCountryInfoDataActRec = (function (_super) {
__extends(GetCountryInfoDataActRec, _super);
function GetCountryInfoDataActRec(defaults) {
_super.apply(this, arguments);
}
GetCountryInfoDataActRec.attributesToDeclare = function () {
return [
this.attr("AddressInfo2", "addressInfo2Out", "AddressInfo2", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Custom_AddressInfoRec());
}, true, APIDomain_Directory_ISModel.Custom_AddressInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
GetCountryInfoDataActRec.fromStructure = function (str) {
return new GetCountryInfoDataActRec(new GetCountryInfoDataActRec.RecordClass({
addressInfo2Out: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetCountryInfoDataActRec.init();
return GetCountryInfoDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AccountForm", "accountFormVar", "AccountForm", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_AccountFormRec());
}, false, Connect_Household_CSModel.UI_AccountFormRec), 
this.attr("AccountFormOriginal", "accountFormOriginalVar", "AccountFormOriginal", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_AccountFormRec());
}, false, Connect_Household_CSModel.UI_AccountFormRec), 
this.attr("AccountForm_ViewPreview", "accountForm_ViewPreviewVar", "AccountForm_ViewPreview", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_AccountFormRec());
}, false, Connect_Household_CSModel.UI_AccountFormRec), 
this.attr("isHouseholder", "isHouseholderVar", "isHouseholder", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasChanges", "hasChangesVar", "HasChanges", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("isSpouse", "isSpouseVar", "isSpouse", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("isLoading_Submit", "isLoading_SubmitVar", "isLoading_Submit", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("LocalCacheControl_UserInformation", "localCacheControl_UserInformationVar", "LocalCacheControl_UserInformation", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BooleanDirectory_UserCurrentRecord());
}, false, UBTConnectModel.BooleanDirectory_UserCurrentRecord), 
this.attr("LocalCacheControl_AllLocalities", "localCacheControl_AllLocalitiesVar", "LocalCacheControl_AllLocalities", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_AllLocalitiesBooleanRecord());
}, false, UBTConnectModel.CacheControl_AllLocalitiesBooleanRecord), 
this.attr("LocalCacheControl_AllSubdivions", "localCacheControl_AllSubdivionsVar", "LocalCacheControl_AllSubdivions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_AllSubdivionsBooleanRecord());
}, false, UBTConnectModel.CacheControl_AllSubdivionsBooleanRecord), 
this.attr("SubdivisionFilteredList", "subdivisionFilteredListVar", "SubdivisionFilteredList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Directory_LocalitySubdivisionList());
}, false, UBTConnectModel.Directory_LocalitySubdivisionList), 
this.attr("MainContainerId", "mainContainerIdVar", "MainContainerId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ScreenController", "screenControllerVar", "ScreenController", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("PreviewHousehold_BottomSheetId", "previewHousehold_BottomSheetIdVar", "PreviewHousehold_BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CurrentCountryCode", "currentCountryCodeVar", "CurrentCountryCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("FormattedAddress", "formattedAddressVar", "FormattedAddress", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("isRequireRequestCreation", "isRequireRequestCreationVar", "isRequireRequestCreation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("GetCountryInfo", "getCountryInfoDataAct", "getCountryInfoDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCountryInfoDataActRec());
}, true, GetCountryInfoDataActRec)
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
DetailsForm: OS.Model.ValidationWidgetRecord,
Input_ContactBaseId: OS.Model.ValidationWidgetRecord,
Input_UBTAccountNumber: OS.Model.ValidationWidgetRecord,
Input_Username: OS.Model.ValidationWidgetRecord,
Input_Email: OS.Model.ValidationWidgetRecord,
Switch1: OS.Model.ValidationWidgetRecord,
AddressInput: OS.Model.ValidationWidgetRecord,
HomeNumber2: OS.Model.ValidationWidgetRecord,
Switch2: OS.Model.ValidationWidgetRecord,
Input_MobileNumber: OS.Model.ValidationWidgetRecord,
Switch3: OS.Model.ValidationWidgetRecord,
Input_WorkNumber: OS.Model.ValidationWidgetRecord
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
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Profile.Profile");
});
define("UBTConnect.App_Profile.Profile.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.controller", "MemoryClientCache.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Profile.Profile.mvc$model", "UBTConnect.App_Profile.Profile.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "OutSystemsUI_2_23.Interaction.DropdownSearch.mvc$view", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_AllSubdivisions.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc$view", "UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$view", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$CacheControl_AllSubdivionsBooleanRecord", "APIDomain_Directory_IS.model$Directory_LocalitySubdivisionRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Directory_LocalitySubdivisionList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$DropdownOptionRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "UBTConnect.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityDetailsList", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.model$CacheControl_AllSubdivionsRec", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTJavaScriptUtils.controller$ScreenController_ValidateWidgets", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect.referencesHealth$MemoryClientCache", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "OutSystemsUI_2_23.controller$DropdownNotValid", "OutSystemsUI_2_23.controller$DropdownClearValidation", "UBTConnect_Utils.controller$Get_MemoryCacheKey_UniqueKey", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$PreventNavigation", "UBTJavaScriptUtils.controller$ScreenController_Get", "UBTConnect_Utils.controller$DropdownSearch_ForceResizeOnOpen", "APIDomain_Directory_IS.model$Custom_AddressInfoRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, UBTConnect_UtilsModel, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, MemoryClientCacheController, UBTConnect_UtilsController, MemoryClientCacheModel, NavigationHandlerController, React, OSView, UBTConnect_App_Profile_Profile_mvc_model, UBTConnect_App_Profile_Profile_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllSubdivisions_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view, UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_view) {
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
        View.displayName = "App_Profile.Profile";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_HomePage_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllSubdivisions_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view, UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Profile_Profile_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Profile_Profile_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Profile";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_HomePage_mvc_view, {
inputs: {
ExtendedClass: "ubt-profile-screen",
SVGHeight: "calc(200px - var(--header-size))",
ContentBackgroundColor: UBTConnectModel.staticEntities.uBT_Color.neutral0,
AddSearchBar: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onReadyEvent$Action: function (contentContainerIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_HomePage OnReadyEvent");
controller.event_Layout_OnReadyEvent$Action(contentContainerIdIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("V9FgGi2NokO_YAL3h8WqRA.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
Text: "Edit Account"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
controller.onClick_Back$Action(controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowLeftAlt
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)
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
name: "Content",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Header.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.medium;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
return rec;
}();
return rec;
}();
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
name: "Header",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr),
ImageSize: model.getCachedValue(idService.getId("7TLoV1LewEeH5JPQDmQE9w.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.doubleExtraLarge_176;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
return rec;
}();
}),
EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
ImageURL: model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
ExtendedClasses: "padding-y-s",
In_Text: model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr,
In_TextOptions: model.getCachedValue(idService.getId("NameText.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading2;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
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
name: "NameText",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("ViewPreview.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.isInlineBlockAttr = true;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
controller.onClick_ViewPreview$Action(controller.callContext(eventHandlerContext));
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
name: "ViewPreview",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("QYngmSiOGUm0yIm1ySeEIw.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
Text: "Preview Household Profile"
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
uuid: "8",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.medium_20,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.idCard,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary
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
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr)]
}), React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
uuid: "10",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "\"form card\"",
_idProps: {
service: idService,
name: "DetailsForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("IdentificationInfo.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "IdentificationInfo",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("Identification.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading6;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Identification",
In_PaddingOptions: model.getCachedValue(idService.getId("Identification.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "Identification",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("ContactBaseID.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_Text: "ContactBase ID",
In_TextOptions: model.getCachedValue(idService.getId("ContactBaseID.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "ContactBaseID",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: false,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 0,
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.memberIdAttr, function (value) {
model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.memberIdAttr = value;
}),
_idProps: {
service: idService,
name: "Input_ContactBaseId"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "UBT Account Number",
In_TextOptions: model.getCachedValue(idService.getId("UBTAccountNumber.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("UBTAccountNumber.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "UBTAccountNumber",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
inputs: {
AlignIconRight: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
uuid: "17",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.contentCopy,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7
},
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
return controller.onClick_UBTAccountNumber$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
uuid: "18",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: false,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 0,
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.accountNumberAttr, function (value) {
model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.accountNumberAttr = value;
}),
_idProps: {
service: idService,
name: "Input_UBTAccountNumber"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.accountNumberAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.accountNumberAttr), asPrimitiveValue(model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.memberIdAttr)]
}), React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
uuid: "20",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("PersonalInfo.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "PersonalInfo",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("PersonalInformation.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading6;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("PersonalInformation.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_Text: "Personal Information"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "PersonalInformation",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("PleaseNote.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("PleaseNote.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_Text: "Please note that all changes may take up to 48 hours to show on your profile."
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "PleaseNote",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Username",
In_PaddingOptions: model.getCachedValue(idService.getId("Username.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("Username.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "Username",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: false,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 50,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/Input_Username OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.accountFormVar.accountForm_PersonalInformationAttr.usernameAttr, function (value) {
model.variables.accountFormVar.accountForm_PersonalInformationAttr.usernameAttr = value;
}),
_idProps: {
service: idService,
name: "Input_Username"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Email",
In_TextOptions: model.getCachedValue(idService.getId("Email.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("Email.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "Email",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Email*/ 7,
mandatory: false,
maxLength: 50,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/Input_Email OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.accountFormVar.accountForm_PersonalInformationAttr.emailAttr, function (value) {
model.variables.accountFormVar.accountForm_PersonalInformationAttr.emailAttr = value;
}),
_idProps: {
service: idService,
name: "Input_Email"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("PleaseNote2.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_Text: "Please note that if you are a householder, changes to your email address will also apply to your Global Media Stream login.",
In_TextOptions: model.getCachedValue(idService.getId("PleaseNote2.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "PleaseNote2",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("BirthDateandAge.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "BirthDateandAge",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("BirthDateandAgeText.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("BirthDateandAgeText.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
FitContent: true,
In_Text: "Display Month and Year of Birth, and Age"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "BirthDateandAgeText",
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Switch, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: true,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/Switch1 OnChange");
return controller.onChange_ShowAgeSwitch$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "switch",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr, function (value) {
model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr = value;
}),
_idProps: {
service: idService,
name: "Switch1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Please note that changes may take up to 12 hours to show in the app.",
In_TextOptions: model.getCachedValue(idService.getId("BirthDateandAgeNote.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("BirthDateandAgeNote.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "BirthDateandAgeNote",
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.emailAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.usernameAttr)]
}), $if(model.variables.isHouseholderVar, false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
uuid: "33",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: (!(model.variables.localCacheControl_AllSubdivionsVar.isFetchedAttr) || !(model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr))
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
uuid: "34",
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("AddressInfo.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "AddressInfo",
alias: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Address Information",
In_PaddingOptions: model.getCachedValue(idService.getId("AddressInformation.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("AddressInformation.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading6;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "AddressInformation",
alias: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr,
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
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).isValidAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).requiredAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).valueAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).labelAttr)]
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("AddressLabel.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).labelAttr,
In_PaddingOptions: model.getCachedValue(idService.getId("AddressLabel.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = (((model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrentRowNumber(callContext.iterationContext) > 0)) ? (UBTConnectModel.staticEntities.uBT_Size.base) : (OS.BuiltinFunctions.nullTextIdentifier()));
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}, function () {
return model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrentRowNumber(callContext.iterationContext);
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.ownerService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "AddressLabel",
alias: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.ownerService.getId("DetailsForm")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).requiredAttr,
maxLength: 50,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/AddressInput OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: model.getCachedValue(idService.getId("AddressInput.Style"), function () {
return ("form-control " + ((model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).isValidAttr) ? ("") : ("not-valid")));
}, function () {
return model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).isValidAttr;
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).valueAttr, function (value) {
model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getCurrent(callContext.iterationContext).valueAttr = value;
}),
_idProps: {
service: idService,
name: "AddressInput"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, callContext, idService, "1")
},
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Locality"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("LocalityLabel.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("LocalityLabel.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Locality"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "LocalityLabel",
alias: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_view, {
inputs: {
OptionsList: model.getCachedValue(idService.getId("LocalityDropdown.OptionsList"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, new UBTConnectModel.DropdownOptionList(), function (source, target) {
target.valueAttr = source.localityIdAttr;
target.labelAttr = (source.nameAttr + ((((source.countryNameAttr) !== (""))) ? ((", " + source.countryNameAttr)) : ("")));
target.groupNameAttr = source.countryNameAttr;
return target;
});
}, function () {
return model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr;
}),
Prompt: "-",
StartingSelection: model.getCachedValue(idService.getId("LocalityDropdown.StartingSelection"), function () {
return function () {
var list = new UBTConnectModel.DropdownOptionList();
list.pushAll([function () {
var rec = new OutSystemsUI_2_23Model.DropdownOptionRec();
rec.valueAttr = model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr;
rec.labelAttr = "";
return rec;
}()]);
return list;
}();
}, function () {
return model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onChanged$Action: function (dropdownSearchIdIn, selectedOptionListIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownSearch OnChanged");
return controller.onChange_LocalityDropdown$Action(dropdownSearchIdIn, selectedOptionListIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "LocalityDropdown",
alias: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Subdivion"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Subdivision",
In_PaddingOptions: model.getCachedValue(idService.getId("SubdivisionLabel.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("SubdivisionLabel.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "SubdivisionLabel",
alias: "35"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OutSystemsUI_2_23_Interaction_DropdownSearch_mvc_view, {
inputs: {
OptionsList: model.getCachedValue(idService.getId("SubdivisionDropdown.OptionsList"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.subdivisionFilteredListVar, new UBTConnectModel.DropdownOptionList(), function (source, target) {
target.valueAttr = source.subdivisionIdAttr;
target.labelAttr = source.subdivisionNameAttr;
return target;
});
}, function () {
return model.variables.subdivisionFilteredListVar;
}),
StartingSelection: model.getCachedValue(idService.getId("SubdivisionDropdown.StartingSelection"), function () {
return function () {
var list = new UBTConnectModel.DropdownOptionList();
list.pushAll([function () {
var rec = new OutSystemsUI_2_23Model.DropdownOptionRec();
rec.valueAttr = model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr;
rec.labelAttr = "";
return rec;
}()]);
return list;
}();
}, function () {
return model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr;
}),
Prompt: "-",
OptionalConfigs: model.getCachedValue(idService.getId("SubdivisionDropdown.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUI_2_23Model.DropdownOptionalConfigsRec();
rec.isDisabledAttr = (model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr === "");
return rec;
}();
}, function () {
return model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onChanged$Action: function (dropdownSearchIdIn, selectedOptionListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/DropdownSearch OnChanged");
controller.onChange_SubdivionDropdown$Action(dropdownSearchIdIn, selectedOptionListIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "SubdivisionDropdown",
alias: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.subdivisionFilteredListVar), asPrimitiveValue(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.subdivisionFilteredListVar), asPrimitiveValue(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr)]
})];
}, function () {
return [];
}), React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
uuid: "47",
alias: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("ContactInfo.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "ContactInfo",
alias: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("ContactInformation.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("ContactInformation.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading6;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Contact Information"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "ContactInformation",
alias: "39"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("HomeNumber.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("HomeNumber.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
In_Text: "Home Number"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "HomeNumber",
alias: "40"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: model.variables.isHouseholderVar,
extendedProperties: {
autoComplete: "off"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Phone*/ 6,
mandatory: false,
maxLength: 15,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/HomeNumber2 OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.PhoneNumber, model.variables.accountFormVar.accountForm_ContactInformationAttr.homeNumberAttr, function (value) {
model.variables.accountFormVar.accountForm_ContactInformationAttr.homeNumberAttr = value;
}),
_idProps: {
service: idService,
name: "HomeNumber2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("MobileNumber_Container.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "MobileNumber_Container",
alias: "41"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("MobileNumber.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "MobileNumber",
alias: "42"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("MobileNumberText.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
}),
In_Text: "Mobile Number",
In_TextOptions: model.getCachedValue(idService.getId("MobileNumberText.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "MobileNumberText",
alias: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [$if((model.variables.isHouseholderVar || model.variables.isSpouseVar), false, this, function () {
return [React.createElement(OSWidgets.Switch, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/Switch2 OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "switch",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr, function (value) {
model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr = value;
}),
_idProps: {
service: idService,
name: "Switch2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr), asPrimitiveValue(model.variables.isSpouseVar), asPrimitiveValue(model.variables.isHouseholderVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr), asPrimitiveValue(model.variables.isSpouseVar), asPrimitiveValue(model.variables.isHouseholderVar)]
}), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: true,
extendedProperties: {
autoComplete: "off"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Phone*/ 6,
mandatory: false,
maxLength: 15,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/Input_MobileNumber OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.PhoneNumber, model.variables.accountFormVar.accountForm_ContactInformationAttr.mobileNumberAttr, function (value) {
model.variables.accountFormVar.accountForm_ContactInformationAttr.mobileNumberAttr = value;
}),
_idProps: {
service: idService,
name: "Input_MobileNumber"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if((model.variables.isHouseholderVar || model.variables.isSpouseVar), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("MobileNumber_Note.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("MobileNumber_Note.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
}),
In_Text: model.getCachedValue(idService.getId("MobileNumber_Note.In_Text"), function () {
return (((model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr) ? ("Display") : ("Hide")) + " mobile number on your profile.");
}, function () {
return model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "MobileNumber_Note",
alias: "44"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("WorkNumberContainer.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "WorkNumberContainer",
alias: "45"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("WorkNumber.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "WorkNumber",
alias: "46"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("WorkNumberText.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
}),
In_Text: "Work Number",
In_TextOptions: model.getCachedValue(idService.getId("WorkNumberText.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "WorkNumberText",
alias: "47"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [$if((model.variables.isHouseholderVar || model.variables.isSpouseVar), false, this, function () {
return [React.createElement(OSWidgets.Switch, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/Switch3 OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "switch",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr, function (value) {
model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr = value;
}),
_idProps: {
service: idService,
name: "Switch3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr), asPrimitiveValue(model.variables.isSpouseVar), asPrimitiveValue(model.variables.isHouseholderVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr), asPrimitiveValue(model.variables.isSpouseVar), asPrimitiveValue(model.variables.isHouseholderVar)]
}), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
enabled: true,
extendedProperties: {
autoComplete: "off"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Phone*/ 6,
mandatory: false,
maxLength: 15,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile/Input_WorkNumber OnChange");
controller.onChange_Fields$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.PhoneNumber, model.variables.accountFormVar.accountForm_ContactInformationAttr.workNumberAttr, function (value) {
model.variables.accountFormVar.accountForm_ContactInformationAttr.workNumberAttr = value;
}),
_idProps: {
service: idService,
name: "Input_WorkNumber"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if((model.variables.isHouseholderVar || model.variables.isSpouseVar), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("WorkNumber_Note.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_Text: model.getCachedValue(idService.getId("WorkNumber_Note.In_Text"), function () {
return (((model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr) ? ("Display") : ("Hide")) + " work number on your profile.");
}, function () {
return model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr;
}),
In_TextOptions: model.getCachedValue(idService.getId("WorkNumber_Note.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("DetailsForm")
},
_idProps: {
service: idService,
name: "WorkNumber_Note",
alias: "48"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isSpouseVar), asPrimitiveValue(model.variables.isHouseholderVar), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.workNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.mobileNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.homeNumberAttr)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isSpouseVar), asPrimitiveValue(model.variables.subdivisionFilteredListVar), asPrimitiveValue(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr), asPrimitiveValue(model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr), asPrimitiveValue(model.variables.localCacheControl_AllSubdivionsVar.isFetchedAttr), asPrimitiveValue(model.variables.isHouseholderVar), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.workNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.mobileNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.homeNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.emailAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.usernameAttr), asPrimitiveValue(model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.accountNumberAttr), asPrimitiveValue(model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.memberIdAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr)]
}), $if(((model.variables.mainContainerIdVar) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, {
inputs: {
ContentContainerId: model.variables.mainContainerIdVar,
useBottomBar: false,
ExpectedFooterHeight: "calc(2 * var(--space-base) + var(--ubt-button-height-m))"
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
alias: "49"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("AJLOtKwuHUupDJ+mkoPEqg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.shadowIdAttr = UBTConnectModel.staticEntities.uBT_Shadow.extraSmallTop;
return rec;
}();
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
uuid: "65",
alias: "50"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("Wt+ZBU5M4k6lZ0z3Ug5sIw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
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
uuid: "66",
alias: "51"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
inputs: {
IsDisabled: model.variables.isLoading_SubmitVar,
ButtonOptions: model.getCachedValue(idService.getId("0KWOvbLwJU6GwPCdV1VUzg.ButtonOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.medium;
rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.scondary;
return rec;
}();
}),
ButtonText: "Close"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
buttonOnClick$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Common/Button buttonOnClick");
controller.onClick_Back$Action(controller.callContext(eventHandlerContext));
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
uuid: "67",
alias: "52"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, {
inputs: {
IsLoading: model.variables.isLoading_SubmitVar
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
uuid: "68",
alias: "53"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
inputs: {
IsDisabled: (!(model.variables.hasChangesVar) || model.variables.isLoading_SubmitVar),
ButtonOptions: model.getCachedValue(idService.getId("sZaSFgufCkibuYXq9Z8p2g.ButtonOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.medium;
rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.primary;
return rec;
}();
}),
ButtonText: "Save"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
buttonOnClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Common/Button buttonOnClick");
return controller.onClick_Save$Action(controller.callContext(eventHandlerContext));
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
uuid: "69",
alias: "54"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isLoading_SubmitVar), asPrimitiveValue(model.variables.hasChangesVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.hasChangesVar), asPrimitiveValue(model.variables.isLoading_SubmitVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.hasChangesVar), asPrimitiveValue(model.variables.isLoading_SubmitVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.hasChangesVar), asPrimitiveValue(model.variables.isLoading_SubmitVar)]
})];
}, function () {
return [];
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
uuid: "70",
alias: "55"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.hasChangesVar), asPrimitiveValue(model.variables.isLoading_SubmitVar), asPrimitiveValue(model.variables.mainContainerIdVar), asPrimitiveValue(model.variables.isSpouseVar), asPrimitiveValue(model.variables.subdivisionFilteredListVar), asPrimitiveValue(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr), asPrimitiveValue(model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr), asPrimitiveValue(model.variables.localCacheControl_AllSubdivionsVar.isFetchedAttr), asPrimitiveValue(model.variables.isHouseholderVar), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.workNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.mobileNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_ContactInformationAttr.homeNumberAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.emailAttr), asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.usernameAttr), asPrimitiveValue(model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.accountNumberAttr), asPrimitiveValue(model.variables.accountFormOriginalVar.accountForm_IdentificationInformationAttr.memberIdAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)]
}), React.createElement(UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
result$Action: function (userInformationIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Cache/CacheControl_UserInfo_Wrapper Result");
return controller.cacheControl_UserInfo_WrapperResult$Action(userInformationIn, controller.callContext(eventHandlerContext));
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
uuid: "71",
alias: "56"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(model.variables.isHouseholderVar, false, this, function () {
return [React.createElement(UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
result$Action: function (cacheControl_ResponseIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl_AllLocalities Result");
controller.cacheControl_AllLocalitiesResult$Action(cacheControl_ResponseIn, controller.callContext(eventHandlerContext));
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
uuid: "72",
alias: "57"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnect_Utils_CacheControl_CacheControl_AllSubdivisions_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
result$Action: function (cacheControl_ResponseIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl_AllSubdivisions Result");
controller.cacheControl_AllSubdivisionsResult$Action(cacheControl_ResponseIn, controller.callContext(eventHandlerContext));
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
uuid: "73",
alias: "58"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(model.variables.hasChangesVar, false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnBackNavigation$Action: function (event_NavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks_PopupDialogs/Dialog_Navigation Event_OnBackNavigation");
controller.event_OnBackNavigation_ConfirmDiscard$Action(event_NavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "74",
alias: "59"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Confirm",
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Body: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Are you sure you want to discard the changes?",
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}, function () {
return [];
}), $if(model.variables.localCacheControl_UserInformationVar.isFetchedAttr, false, this, function () {
return [React.createElement(UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_view, {
inputs: {
Preview: model.getCachedValue(idService.getId("M5dkfD9G0kK7GmQXh8ADyw.Preview"), function () {
return function () {
var rec = new UBTConnectModel.HouseholdPreviewStructureRec();
rec.uI_AccountFormAttr = model.variables.accountForm_ViewPreviewVar;
rec.householdMemberIdAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.longIntegerToText(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr)));
rec.usePreviewAttr = true;
rec.isHouseholderAttr = model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.isHouseholderAttr;
rec.formattedAddressAttr = model.variables.formattedAddressVar;
return rec;
}();
}, function () {
return model.variables.accountForm_ViewPreviewVar;
}, function () {
return model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr;
}, function () {
return model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.isHouseholderAttr;
}, function () {
return model.variables.formattedAddressVar;
}),
HouseholdId: model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.householderIdAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onInitialized$Action: function (idIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Profile/Profile_HouseholdPreview OnInitialized");
controller.event_HouseholdPreview_OnInitialized$Action(idIn, controller.callContext(eventHandlerContext));
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
uuid: "77",
alias: "60"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_view, {
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
name: "AgeConfirmation_PopUp",
alias: "61"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header: PlaceholderContent.Empty,
placeholder_Body: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("LJTJb03zQ0WJ3qGxRCbvLw.Value"), function () {
return ((model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr) ? ("By selecting this option, your Month and Date of Birth, and your Age will display in Directory. You will also be able to see the Birth Date and Age information for other Members who have selected this option.") : ("By deselecting this option, your Month and Date of Birth, and your Age will be hidden so will not display in Directory. You will also not be able to see the Birth Date and Age information for other Members."));
}, function () {
return model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr;
}),
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_ButtonLabel: new PlaceholderContent(function () {
return ["Update Preference"];
}),
placeholder_DismissButtonLabe: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: [asPrimitiveValue(model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_Profile.Profile.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.controller", "MemoryClientCache.model", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Profile.Profile.mvc$debugger", "UBTConnect.App_Profile.controller", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$CacheControl_AllSubdivionsBooleanRecord", "APIDomain_Directory_IS.model$Directory_LocalitySubdivisionRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Directory_LocalitySubdivisionList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$DropdownOptionRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "UBTConnect.model$DropdownOptionList", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityDetailsList", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.model$CacheControl_AllSubdivionsRec", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTJavaScriptUtils.controller$ScreenController_ValidateWidgets", "MemoryClientCache.controller$PutCacheableObject", "UBTConnect.referencesHealth$MemoryClientCache", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "OutSystemsUI_2_23.controller$DropdownNotValid", "OutSystemsUI_2_23.controller$DropdownClearValidation", "UBTConnect_Utils.controller$Get_MemoryCacheKey_UniqueKey", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$PreventNavigation", "UBTJavaScriptUtils.controller$ScreenController_Get", "UBTConnect_Utils.controller$DropdownSearch_ForceResizeOnOpen", "APIDomain_Directory_IS.model$Custom_AddressInfoRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, UBTConnect_UtilsModel, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, MemoryClientCacheController, UBTConnect_UtilsController, MemoryClientCacheModel, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Profile_Profile_mvc_Debugger, _flow_UBTConnect_App_ProfileController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCountryInfo$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getCountryInfo$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.member_EditDetails_Service$ServerAction = function (uI_AccountFormIn, isRequireRequestCreationIn, callContext) {
var controller = this.controller;
var inputs = {
UI_AccountForm: OS.DataConversion.ServerDataConverter.to(uI_AccountFormIn, OS.DataTypes.DataTypes.Record),
isRequireRequestCreation: OS.DataConversion.ServerDataConverter.to(isRequireRequestCreationIn, OS.DataTypes.DataTypes.Boolean)
};
return controller.callServerAction("Member_EditDetails_Service", "screenservices/UBTConnect/App_Profile/Profile/ServiceAPIMember_EditDetails_Service", "sTflMGM7bAp84HNOftkQfA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.getCountryInfo$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NfhZgQrClUid4twNHbw8hg:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/DataActions.NfhZgQrClUid4twNHbw8hg:Ho49KrypHp6Jadcrzy6vBQ", "UBTConnect", "GetCountryInfo", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Profile/Profile/GetCountryInfo");
return controller.callDataAction("DataActionGetCountryInfo", "screenservices/UBTConnect/App_Profile/Profile/DataActionGetCountryInfo", "k5pcMr6WfWvEEwe2zr8s5Q", function (b) {
model.variables.getCountryInfoDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCountryInfoDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCountryInfoDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Profile/Profile/GetCountryInfo On After Fetch");
controller._onAfterFetch_GetCountryInfo$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NfhZgQrClUid4twNHbw8hg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getCountryInfo$DataActRefresh"];
// Client Actions
Controller.prototype._onChange_SubdivionDropdown$Action = function (dropdownSearchIdIn, selectedOptionListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_SubdivionDropdown");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.OnChange_SubdivionDropdown$vars"))());
vars.value.dropdownSearchIdInLocal = dropdownSearchIdIn;
vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5dINCq4lZkq8dCh3+mMqVw:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.5dINCq4lZkq8dCh3+mMqVw:BIF_vhf83zZ2uQhUSAz4bA", "UBTConnect", "OnChange_SubdivionDropdown", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3NSvTw3UP0Sxx7HaRBCzuw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uIS_BBVH8Uq6GDa07Vc0Cg", callContext.id);
// AccountForm.AccountForm_AddressInformation.SubdivionId = SelectedOptionList.Current.Value
model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr = vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j4wkWsSZgEe3BoTRLlqmzw", callContext.id);
// Execute Action: OnChange_Fields
controller._onChange_Fields$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XlMZ8tHc00O_X8zlmO6_WA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5dINCq4lZkq8dCh3+mMqVw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.OnChange_SubdivionDropdown$vars", [{
name: "DropdownSearchId",
attrName: "dropdownSearchIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SelectedOptionList",
attrName: "selectedOptionListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.DropdownOptionList();
},
complexType: UBTConnectModel.DropdownOptionList
}]);
Controller.prototype._action_RefreshSubdivionList$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_RefreshSubdivionList");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.Action_RefreshSubdivionList$vars"))());
var listFilterVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterVar = listFilterVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:i2JcGiJVZ0CArgb4o8xZeQ:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.i2JcGiJVZ0CArgb4o8xZeQ:DKXGoYunq5zrmUlU_O+J1w", "UBTConnect", "Action_RefreshSubdivionList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HekiEdtTjUmoA2xbttUqnw", callContext.id);
// No Locality
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LiHU747A20eOEtvO1fd0RA", callContext.id) && (model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr === ""))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k1cRPBav2ESYMB6DsRDw4w", callContext.id);
// SubdivisionFilteredList = EmptyList
model.variables.subdivisionFilteredListVar = vars.value.emptyListVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k1cRPBav2ESYMB6DsRDw4w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccountForm.AccountForm_AddressInformation.SubdivionId = ""
model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3J9aPz3KD0GUsdrLbEimOA", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qO9gqZbClUy1+L0SHuLn_g", callContext.id) && (((model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr) !== ("")) && model.variables.localCacheControl_AllSubdivionsVar.isFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xKCneGkq8kOERTrJkwbgDQ", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.localCacheControl_AllSubdivionsVar.cacheControl_AllSubdivionsAttr.subdivionsListAttr, function (p) {
return (p.localityIdAttr === model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BWwJPdv3_EiVOhpTmPlYZQ", callContext.id);
// SubdivisionFilteredList = ListFilter.FilteredList
model.variables.subdivisionFilteredListVar = listFilterVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1K+06cYGP0eJozlYMRU4aw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:17bboqDyzES3puto1yZf0Q", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:i2JcGiJVZ0CArgb4o8xZeQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.Action_RefreshSubdivionList$vars", [{
name: "EmptyList",
attrName: "emptyListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Directory_LocalitySubdivisionList();
},
complexType: UBTConnectModel.Directory_LocalitySubdivisionList
}]);
Controller.prototype._event_AgeConfirmation_Confirm$Action = function (event_NavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_AgeConfirmation_Confirm");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.Event_AgeConfirmation_Confirm$vars"))());
vars.value.event_NavigationEventInLocal = event_NavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8DYQL1AuPUqsln8_q34BbA:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.8DYQL1AuPUqsln8_q34BbA:0npSMxZatIAyySmk_JyVJw", "UBTConnect", "Event_AgeConfirmation_Confirm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtAgrizko0KRjMgAElcK1Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wh8wcds2GEmp5uouIOnmYQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8DYQL1AuPUqsln8_q34BbA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.Event_AgeConfirmation_Confirm$vars", [{
name: "Event_NavigationEvent",
attrName: "event_NavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._cacheControl_AllLocalitiesResult$Action = function (cacheControl_ResponseIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControl_AllLocalitiesResult");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.CacheControl_AllLocalitiesResult$vars"))());
vars.value.cacheControl_ResponseInLocal = cacheControl_ResponseIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PrPuQncNlkCHjcovPKiG4A:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.PrPuQncNlkCHjcovPKiG4A:e9F_TWSceIqs8hro6aNkpw", "UBTConnect", "CacheControl_AllLocalitiesResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K+GyBrVon0eIGx0bLj_9qg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b+Ezdv6r3UmlsHDzRPvQ1A", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(vars.value.cacheControl_ResponseInLocal.localityListAttr, function (p) {
return ((p.countryNameAttr + " ") + p.nameAttr);
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:muLjjQToHkGU9ftug6Fpnw", callContext.id);
// LocalCacheControl_AllLocalities.CacheControl_AllLocalities = CacheControl_Response
model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr = vars.value.cacheControl_ResponseInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:muLjjQToHkGU9ftug6Fpnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalCacheControl_AllLocalities.isFetched = True
model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vpX8tQFVa0+qdV7BxAkzuA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PrPuQncNlkCHjcovPKiG4A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.CacheControl_AllLocalitiesResult$vars", [{
name: "CacheControl_Response",
attrName: "cacheControl_ResponseInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec
}]);
Controller.prototype._onClick_ViewPreview$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ViewPreview");
callContext = controller.callContext(callContext);
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hd0IT2Nst0WM_3oVUdmMWQ:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.hd0IT2Nst0WM_3oVUdmMWQ:l71U9PKunYHxbC+P9FcdZg", "UBTConnect", "OnClick_ViewPreview", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rk29ZC2yoECSYMYCZO4ngQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tkP5TT+Pu0Cmq31QlWXXdA", callContext.id);
// AccountForm_ViewPreview = AccountForm
model.variables.accountForm_ViewPreviewVar = model.variables.accountFormVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BxlGlcC3s02rjxvuKz_M5Q", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.previewHousehold_BottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iCQ4np_ha0Wel7Dh7gReWA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hd0IT2Nst0WM_3oVUdmMWQ", callContext.id);
}

};
Controller.prototype._event_HouseholdPreview_OnInitialized$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_HouseholdPreview_OnInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.Event_HouseholdPreview_OnInitialized$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:EMJBY3wpz0mC81bhsrgwdw:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.EMJBY3wpz0mC81bhsrgwdw:RF_Mffs7+Nl1v_QnyRcEXg", "UBTConnect", "Event_HouseholdPreview_OnInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0y1RC6RJ2U+pZGJT42QK2A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YCRVTOSyW0O9mQ_UlzyYcA", callContext.id);
// PreviewHousehold_BottomSheetId = Id
model.variables.previewHousehold_BottomSheetIdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DgJD4hwVVUqTOV8WgGqAuw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:EMJBY3wpz0mC81bhsrgwdw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.Event_HouseholdPreview_OnInitialized$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onClick_Back$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Back");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:W7jQhLPxcE+itgvf2P8tEA:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.W7jQhLPxcE+itgvf2P8tEA:azBSfjnT32gM_mAP2_N6Gw", "UBTConnect", "OnClick_Back", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r6Rp4y+1kUOAUfWmBfQKDg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xuXR0euy0EWfUuQ1OCMKJQ", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:W7jQhLPxcE+itgvf2P8tEA", callContext.id);
}

};
Controller.prototype._cacheControl_AllSubdivisionsResult$Action = function (cacheControl_ResponseIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControl_AllSubdivisionsResult");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.CacheControl_AllSubdivisionsResult$vars"))());
vars.value.cacheControl_ResponseInLocal = cacheControl_ResponseIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uOKhiapvzEmrxAXsZl_MaQ:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.uOKhiapvzEmrxAXsZl_MaQ:+EGMslGrlE0OMAqy0aZHwQ", "UBTConnect", "CacheControl_AllSubdivisionsResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aoynYWECPkOYxDCsXwZfug", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QD9Y+fOCg0+3qdU49fPIbQ", callContext.id);
// LocalCacheControl_AllSubdivions.CacheControl_AllSubdivions = CacheControl_Response
model.variables.localCacheControl_AllSubdivionsVar.cacheControl_AllSubdivionsAttr = vars.value.cacheControl_ResponseInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QD9Y+fOCg0+3qdU49fPIbQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalCacheControl_AllSubdivions.isFetched = True
model.variables.localCacheControl_AllSubdivionsVar.isFetchedAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LuCjRwtWMkeO666u7+gr4w", callContext.id);
// Execute Action: Action_RefreshSubdivionList
controller._action_RefreshSubdivionList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NEkmgRNjZUm036DZJPayVw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uOKhiapvzEmrxAXsZl_MaQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.CacheControl_AllSubdivisionsResult$vars", [{
name: "CacheControl_Response",
attrName: "cacheControl_ResponseInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_AllSubdivionsRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_AllSubdivionsRec
}]);
Controller.prototype._onClick_UBTAccountNumber$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_UBTAccountNumber");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:y3CJimy1SEmAGXqN3IEolw:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.y3CJimy1SEmAGXqN3IEolw:LGPhG57AlhDEgya_w8N+Lw", "UBTConnect", "OnClick_UBTAccountNumber", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:46wl+rEmuESrMWZK8NdyuQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DVLGdDO4ekGXjKaplmXVtg", callContext.id);
// Execute Action: JSUtils_CopyToClipboard
model.flush();
return UBTJavaScriptUtilsController.default.jSUtils_CopyToClipboard$Action(model.variables.accountFormVar.accountForm_IdentificationInformationAttr.accountNumberAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hW7EFr7urEm9nv8LLerr2w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:y3CJimy1SEmAGXqN3IEolw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:y3CJimy1SEmAGXqN3IEolw", callContext.id);
throw ex;

});
};
Controller.prototype._onChange_LocalityDropdown$Action = function (dropdownSearchIdIn, selectedOptionListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_LocalityDropdown");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.OnChange_LocalityDropdown$vars"))());
vars.value.dropdownSearchIdInLocal = dropdownSearchIdIn;
vars.value.selectedOptionListInLocal = selectedOptionListIn.clone();
var listFilterVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterVar = listFilterVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lH3pi6rzfEydDKmGBex4Qg:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.lH3pi6rzfEydDKmGBex4Qg:5TkO510xXLduCGesvKsm6w", "UBTConnect", "OnChange_LocalityDropdown", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Et40LqySZEqlXXgZ2R5ufQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8y41X5kzRESQzKAnRD4i2A", callContext.id);
// AccountForm.AccountForm_AddressInformation.LocalityId = SelectedOptionList.Current.Value
model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr = vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8y41X5kzRESQzKAnRD4i2A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccountForm.AccountForm_AddressInformation.SubdivionId = ""
model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+iH3Nzv3jEiZcgfB+d6z2Q", callContext.id);
// Execute Action: Action_RefreshSubdivionList
controller._action_RefreshSubdivionList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0PoLDje4BE2zDcEfFOAHEw", callContext.id);
// Execute Action: OnChange_Fields
controller._onChange_Fields$Action(callContext);
// Skip
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AAlLX+PtmUqa4zfSxkqP3w", callContext.id) && true)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:244ybk4_qkmtFhGA7aebwg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q8pPvOzohkOU7ZBgfcJJqQ", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, function (p) {
return (p.localityIdAttr === vars.value.selectedOptionListInLocal.getCurrent(callContext.iterationContext).valueAttr);
}, callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N20l6f8uyE6MO5RXmKOflA", callContext.id) && (!(listFilterVar.value.filteredListOut.isEmpty) && ((listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).countryCodeAttr) !== (model.variables.currentCountryCodeVar))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mcT6KaEBEkKS+BI9ptU_4w", callContext.id);
// CurrentCountryCode = ListFilter.FilteredList.Current.CountryCode
model.variables.currentCountryCodeVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).countryCodeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6oqdR7USZk2ycv3PbYQuZw", callContext.id);
// Refresh Query: GetCountryInfo
var result = controller.getCountryInfo$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RHIrd19wmkCeEauFgLAlew", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RHIrd19wmkCeEauFgLAlew", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lH3pi6rzfEydDKmGBex4Qg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lH3pi6rzfEydDKmGBex4Qg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.OnChange_LocalityDropdown$vars", [{
name: "DropdownSearchId",
attrName: "dropdownSearchIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SelectedOptionList",
attrName: "selectedOptionListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.DropdownOptionList();
},
complexType: UBTConnectModel.DropdownOptionList
}]);
Controller.prototype._event_Layout_OnReadyEvent$Action = function (contentContainerIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_Layout_OnReadyEvent");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.Event_Layout_OnReadyEvent$vars"))());
vars.value.contentContainerIdInLocal = contentContainerIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gr0rjg_YakOrEG3pL+Dn_A:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.gr0rjg_YakOrEG3pL+Dn_A:DYsxE4Lo044IyT63I20Tdg", "UBTConnect", "Event_Layout_OnReadyEvent", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SZUCTDyRek+kajJZOoE0iw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8n9YeYBBZEWJI92yx8euQw", callContext.id);
// MainContainerId = ContentContainerId
model.variables.mainContainerIdVar = vars.value.contentContainerIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0GPMzLPt9kCEtPCXY6UpsA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gr0rjg_YakOrEG3pL+Dn_A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.Event_Layout_OnReadyEvent$vars", [{
name: "ContentContainerId",
attrName: "contentContainerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._cacheControl_UserInfo_WrapperResult$Action = function (userInformationIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControl_UserInfo_WrapperResult");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.CacheControl_UserInfo_WrapperResult$vars"))());
vars.value.userInformationInLocal = userInformationIn.clone();
var addressInformationFilterVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.addressInformationFilterVar = addressInformationFilterVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FMXyrKrXbUuY1K710v0w+A:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.FMXyrKrXbUuY1K710v0w+A:5PzZPvevq8UM7HJSCftK8A", "UBTConnect", "CacheControl_UserInfo_WrapperResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fe0vkyCPGkKLXfvZrZ4ptw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// LocalCache
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wlBfC9_0VUi82qWsD8QUSg", callContext.id);
// LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation
model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr = vars.value.userInformationInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wlBfC9_0VUi82qWsD8QUSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalCacheControl_UserInformation.isFetched = True
model.variables.localCacheControl_UserInformationVar.isFetchedAttr = true;
// PersonalInformation
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TosjNRRpTk24AS_lkcYTpQ", callContext.id);
// AccountForm.AccountForm_PersonalInformation.Username = UserInformation.UserName
model.variables.accountFormVar.accountForm_PersonalInformationAttr.usernameAttr = vars.value.userInformationInLocal.userNameAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TosjNRRpTk24AS_lkcYTpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccountForm.AccountForm_PersonalInformation.Email = UserInformation.Email
model.variables.accountFormVar.accountForm_PersonalInformationAttr.emailAttr = vars.value.userInformationInLocal.emailAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TosjNRRpTk24AS_lkcYTpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates = UserInformation.Directory_UserCurrent_Visibility.DisplayAge
model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr = vars.value.userInformationInLocal.directory_UserCurrent_VisibilityAttr.displayAgeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vvlEN30tu0OmPdXZRRgivw", callContext.id);
// AccountForm.AccountForm_IdentificationInformation.MemberId = UserInformation.MemberID
model.variables.accountFormVar.accountForm_IdentificationInformationAttr.memberIdAttr = OS.BuiltinFunctions.longIntegerToText(vars.value.userInformationInLocal.memberIDAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vvlEN30tu0OmPdXZRRgivw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccountForm.AccountForm_IdentificationInformation.AccountNumber = UserInformation.AccountNumber
model.variables.accountFormVar.accountForm_IdentificationInformationAttr.accountNumberAttr = vars.value.userInformationInLocal.accountNumberAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lD2UOQpySkOrJ650woV+Vw", callContext.id);
// Execute Action: AddressInformationFilter
addressInformationFilterVar.value = OS.SystemActions.listFilter(vars.value.userInformationInLocal.directory_UserCurrent_MemberAttr.addressAttr.addressItemsListAttr, function (p) {
return p.visibleAttr;
}, callContext);

// Foreach AddressInformationFilter.FilteredList
callContext.iterationContext.registerIterationStart(addressInformationFilterVar.value.filteredListOut);
try {var filteredListIterator = callContext.iterationContext.getIterator(addressInformationFilterVar.value.filteredListOut);
var filteredListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wO9P2A+sMEqcUXE2TafV2A", callContext.id) && (filteredListIndex < addressInformationFilterVar.value.filteredListOut.length))) {
filteredListIterator.currentRowNumber = filteredListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J5E0s4RpXEGpys+755g4wQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr, function () {
var rec = new APIDomain_Directory_ISModel.Custom_Address_ItemRec();
rec.labelAttr = addressInformationFilterVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).labelAttr;
rec.visibleAttr = addressInformationFilterVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).visibleAttr;
rec.requiredAttr = addressInformationFilterVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).requiredAttr;
rec.valueAttr = addressInformationFilterVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).valueAttr;
rec.numberRefAttr = addressInformationFilterVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).numberRefAttr;
rec.isValidAttr = true;
return rec;
}(), callContext);
filteredListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(addressInformationFilterVar.value.filteredListOut);
}

// AddressInformation
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LTgLCf1lyEKoONXEp8wTtw", callContext.id);
// AccountForm.AccountForm_AddressInformation.LocalityId = UserInformation.Directory_UserCurrent_Geography.Locality_Id
model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr = OS.BuiltinFunctions.longIntegerToText(vars.value.userInformationInLocal.directory_UserCurrent_GeographyAttr.locality_IdAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LTgLCf1lyEKoONXEp8wTtw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccountForm.AccountForm_AddressInformation.SubdivionId = UserInformation.Directory_UserCurrent_Geography.Subdivision_Id
model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr = OS.BuiltinFunctions.longIntegerToText(vars.value.userInformationInLocal.directory_UserCurrent_GeographyAttr.subdivision_IdAttr);
// ContactInformation
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KAnVzhNnH0+b3zXcUSExcQ", callContext.id);
// AccountForm.AccountForm_ContactInformation.HomeNumber = UserInformation.HomeNumber
model.variables.accountFormVar.accountForm_ContactInformationAttr.homeNumberAttr = vars.value.userInformationInLocal.homeNumberAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KAnVzhNnH0+b3zXcUSExcQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccountForm.AccountForm_ContactInformation.MobileNumber = UserInformation.MobileNumber
model.variables.accountFormVar.accountForm_ContactInformationAttr.mobileNumberAttr = vars.value.userInformationInLocal.mobileNumberAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KAnVzhNnH0+b3zXcUSExcQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AccountForm.AccountForm_ContactInformation.WorkNumber = UserInformation.WorkNumber
model.variables.accountFormVar.accountForm_ContactInformationAttr.workNumberAttr = vars.value.userInformationInLocal.workNumberAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KAnVzhNnH0+b3zXcUSExcQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AccountForm.AccountForm_ContactInformation.ShowMobileNumber = UserInformation.Directory_UserCurrent_Visibility.DisplayMobilePhone
model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr = vars.value.userInformationInLocal.directory_UserCurrent_VisibilityAttr.displayMobilePhoneAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KAnVzhNnH0+b3zXcUSExcQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AccountForm.AccountForm_ContactInformation.ShowWorkNumber = UserInformation.Directory_UserCurrent_Visibility.DisplayWorkPhone
model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr = vars.value.userInformationInLocal.directory_UserCurrent_VisibilityAttr.displayWorkPhoneAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+SohbPhgNUSPPS_5MDrTFg", callContext.id);
// AccountFormOriginal = AccountForm
model.variables.accountFormOriginalVar = model.variables.accountFormVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+SohbPhgNUSPPS_5MDrTFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// isHouseholder = UserInformation.Directory_UserCurrent_Member.isHouseholder
model.variables.isHouseholderVar = vars.value.userInformationInLocal.directory_UserCurrent_MemberAttr.isHouseholderAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+SohbPhgNUSPPS_5MDrTFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CurrentCountryCode = UserInformation.Directory_UserCurrent_Geography.Country_Code
model.variables.currentCountryCodeVar = vars.value.userInformationInLocal.directory_UserCurrent_GeographyAttr.country_CodeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+SohbPhgNUSPPS_5MDrTFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// isSpouse = UserInformation.Directory_UserCurrent_Member.SpouseIsHouseholder
model.variables.isSpouseVar = vars.value.userInformationInLocal.directory_UserCurrent_MemberAttr.spouseIsHouseholderAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+SohbPhgNUSPPS_5MDrTFg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AccountForm_ViewPreview = AccountForm
model.variables.accountForm_ViewPreviewVar = model.variables.accountFormVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:up9qzsjJ1UibWalXJmUbVA", callContext.id);
// Execute Action: Action_RefreshSubdivionList
controller._action_RefreshSubdivionList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NXtOrpf2ykOHwwNrCfyBaw", callContext.id);
// Refresh Query: GetCountryInfo
var result = controller.getCountryInfo$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LF4H3U1pVEqXpk+nie5XCQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FMXyrKrXbUuY1K710v0w+A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FMXyrKrXbUuY1K710v0w+A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.CacheControl_UserInfo_WrapperResult$vars", [{
name: "UserInformation",
attrName: "userInformationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Directory_UserCurrentRec();
},
complexType: APIDomain_Directory_ISModel.Directory_UserCurrentRec
}]);
Controller.prototype._onClick_Save$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Save");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.OnClick_Save$vars"))());
var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dropdownNotValid2Var = new OS.DataTypes.VariableHolder();
var dropdownClearValidation2Var = new OS.DataTypes.VariableHolder();
var dropdownClearValidationVar = new OS.DataTypes.VariableHolder();
var dropdownNotValidVar = new OS.DataTypes.VariableHolder();
var get_MemoryCacheKey_UniqueKeyVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.notRegisteredVar = notRegisteredVar;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
varBag.dropdownNotValid2Var = dropdownNotValid2Var;
varBag.dropdownClearValidation2Var = dropdownClearValidation2Var;
varBag.dropdownClearValidationVar = dropdownClearValidationVar;
varBag.dropdownNotValidVar = dropdownNotValidVar;
varBag.get_MemoryCacheKey_UniqueKeyVar = get_MemoryCacheKey_UniqueKeyVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:XF9ltFFglEa99EPW1d+5QA:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.XF9ltFFglEa99EPW1d+5QA:J0G99a5dxSBEkKCLvlahcQ", "UBTConnect", "OnClick_Save", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mkQ0OFaE2UWa9z114tcVJQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lxsO4IyQB0CR8VoTs_C3Sw", callContext.id);
// isLoading_Submit = True
model.variables.isLoading_SubmitVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Skx_EGCdXUOuuN0ntpDDww", callContext.id);
// Execute Action: ScreenController_ValidateWidgets
UBTJavaScriptUtilsController.default.screenController_ValidateWidgets$Action(model.variables.screenControllerVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dreihBwoHkCCmWLuaEsfDQ", callContext.id);
// isValid = DetailsForm.Valid
vars.value.isValidVar = model.widgets.get(idService.getId("DetailsForm")).validAttr;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TRrjeAvAukyQJN3nKtvdWw", callContext.id) && model.variables.isHouseholderVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4xkskyLydEeQSjgCpSU_sw", callContext.id);
// Execute Action: DropdownClearValidation
dropdownClearValidationVar.value = OutSystemsUI_2_23Controller.default.dropdownClearValidation$Action(idService.getId("LocalityDropdown"), callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jjwkj1kjeUO6H37LxLDxEQ", callContext.id);
// Execute Action: DropdownClearValidation2
dropdownClearValidation2Var.value = OutSystemsUI_2_23Controller.default.dropdownClearValidation$Action(idService.getId("Subdivion"), callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aB6uvH_3DEqlx5ti3gNzhQ", callContext.id) && (model.variables.accountFormVar.accountForm_AddressInformationAttr.localityIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HvjNw5FemkGEQEx5dz6dQw", callContext.id);
// Execute Action: DropdownNotValid
dropdownNotValidVar.value = OutSystemsUI_2_23Controller.default.dropdownNotValid$Action(idService.getId("LocalityDropdown"), "This field is required.", callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MZDivllykEOnUwfiLz975A", callContext.id);
// isValid = False
vars.value.isValidVar = false;
}

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:30TXKXJCY0OPaz22uOqUSA", callContext.id) && (model.variables.accountFormVar.accountForm_AddressInformationAttr.subdivionIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g6VPW449tESMgHN0M5P9Dw", callContext.id);
// Execute Action: DropdownNotValid2
dropdownNotValid2Var.value = OutSystemsUI_2_23Controller.default.dropdownNotValid$Action(idService.getId("SubdivisionDropdown"), "This field is required.", callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eTy_wfWJN0a1A2s5FwzZvg", callContext.id);
// isValid = False
vars.value.isValidVar = false;
}

// Foreach AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList
callContext.iterationContext.registerIterationStart(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr);
try {var custom_Address_ItemListIterator = callContext.iterationContext.getIterator(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr);
var custom_Address_ItemListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OlZbzSrx3UCJBOno5HSC7Q", callContext.id) && (custom_Address_ItemListIndex < model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.length))) {
custom_Address_ItemListIterator.currentRowNumber = custom_Address_ItemListIndex;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0GYL+9SPbUWpo+0zKK+sxw", callContext.id) && (model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getItem(custom_Address_ItemListIndex.valueOf()).requiredAttr && (model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getItem(custom_Address_ItemListIndex.valueOf()).valueAttr === "")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QUkePR1L1ku87Nl86OtDGg", callContext.id);
// AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.IsValid = False
model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getItem(custom_Address_ItemListIndex.valueOf()).isValidAttr = false;
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ejl65P5rLkipN7xtdVkNSA", callContext.id);
// AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList.Current.IsValid = True
model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getItem(custom_Address_ItemListIndex.valueOf()).isValidAttr = true;
}

custom_Address_ItemListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr);
}

}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XgoCy_lS30eWwhCn0KT8ow", callContext.id) && vars.value.isValidVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:APsoGwxD80SBtvLJq70OiA", callContext.id);
// isRequireRequestCreation = notAccountForm.AccountForm_AddressInformation = AccountFormOriginal.AccountForm_AddressInformation or AccountForm.AccountForm_PersonalInformation.Username <> AccountFormOriginal.AccountForm_PersonalInformation.Username or AccountForm.AccountForm_PersonalInformation.Email <> AccountFormOriginal.AccountForm_PersonalInformation.Email or AccountForm.AccountForm_ContactInformation.HomeNumber <> AccountFormOriginal.AccountForm_ContactInformation.HomeNumber or AccountForm.AccountForm_ContactInformation.MobileNumber <> AccountFormOriginal.AccountForm_ContactInformation.MobileNumber or AccountForm.AccountForm_ContactInformation.WorkNumber <> AccountFormOriginal.AccountForm_ContactInformation.WorkNumber
model.variables.isRequireRequestCreationVar = (((((!(model.variables.accountFormVar.accountForm_AddressInformationAttr.equals(model.variables.accountFormOriginalVar.accountForm_AddressInformationAttr)) || ((model.variables.accountFormVar.accountForm_PersonalInformationAttr.usernameAttr) !== (model.variables.accountFormOriginalVar.accountForm_PersonalInformationAttr.usernameAttr))) || ((model.variables.accountFormVar.accountForm_PersonalInformationAttr.emailAttr) !== (model.variables.accountFormOriginalVar.accountForm_PersonalInformationAttr.emailAttr))) || ((model.variables.accountFormVar.accountForm_ContactInformationAttr.homeNumberAttr) !== (model.variables.accountFormOriginalVar.accountForm_ContactInformationAttr.homeNumberAttr))) || ((model.variables.accountFormVar.accountForm_ContactInformationAttr.mobileNumberAttr) !== (model.variables.accountFormOriginalVar.accountForm_ContactInformationAttr.mobileNumberAttr))) || ((model.variables.accountFormVar.accountForm_ContactInformationAttr.workNumberAttr) !== (model.variables.accountFormOriginalVar.accountForm_ContactInformationAttr.workNumberAttr)));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+eO5Hp_7P0KDD+T1Uy8yrA", callContext.id);
// Execute Action: Member_EditDetails_Service
model.flush();
return controller.member_EditDetails_Service$ServerAction(model.variables.accountFormVar, model.variables.isRequireRequestCreationVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T9JcGRYpukmpsMmDR06RpA", callContext.id);
// isLoading_Submit = False
model.variables.isLoading_SubmitVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T9JcGRYpukmpsMmDR06RpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AccountFormOriginal = AccountForm
model.variables.accountFormOriginalVar = model.variables.accountFormVar;
}).then(function () {
// ChangedVisibilityPreferences
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FLuhXqLnp02AJiAYcPaPiw", callContext.id) && (model.variables.accountFormOriginalVar.accountForm_ContactInformationAttr.equals(model.variables.accountFormVar.accountForm_ContactInformationAttr) && (model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr === model.variables.accountFormOriginalVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rtOG6GJ3UU2nNrcbEWc9ng", callContext.id);
// Execute Action: Cache_UserInfo_Get
model.flush();
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jZPETuGqx0uyttYdB9KMOg", callContext.id);
// Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayAge = AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates
cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_VisibilityAttr.displayAgeAttr = model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jZPETuGqx0uyttYdB9KMOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayMobilePhone = AccountForm.AccountForm_ContactInformation.ShowMobileNumber
cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_VisibilityAttr.displayMobilePhoneAttr = model.variables.accountFormVar.accountForm_ContactInformationAttr.showMobileNumberAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jZPETuGqx0uyttYdB9KMOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Visibility.DisplayWorkPhone = AccountForm.AccountForm_ContactInformation.ShowWorkNumber
cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_VisibilityAttr.displayWorkPhoneAttr = model.variables.accountFormVar.accountForm_ContactInformationAttr.showWorkNumberAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yHhY1hYXsEOrmjz_s1eiGw", callContext.id);
// Execute Action: Get_MemoryCacheKey_UniqueKey
get_MemoryCacheKey_UniqueKeyVar.value = UBTConnect_UtilsController.default.get_MemoryCacheKey_UniqueKey$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5Ew6EiGQB0CAuBZk9qdcqQ", callContext.id);
// Execute Action: PutCacheableObject
MemoryClientCacheController.default.putCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.connect_CacheType.directoryUser), get_MemoryCacheKey_UniqueKeyVar.value.keyOut, OS.BuiltinFunctions.toObject(cache_UserInfo_GetVar.value.userInformationOut), 7200, callContext);
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nliGc2ZiEUmUEEutzWgwBw", callContext.id);
// Execute Action: OnChange_Fields
controller._onChange_Fields$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CcyfHfjED0W1N8BgAjIR_A", callContext.id);
// Execute Action: FeedbackMessage_AutoClose2
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Your update request has been submitted.", UBTConnectModel.staticEntities.uBT_MessageType.success, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HMwQh3ycwEKtbxUzMxQDwg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f6QRHq6N+USuLD+nv258WQ", callContext.id);
// isLoading_Submit = False
model.variables.isLoading_SubmitVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f6QRHq6N+USuLD+nv258WQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HasChanges = False
model.variables.hasChangesVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zjg8muwl20SjdV7hK90kOQ", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("Profile.OnClick_Save", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: NotRegistered
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
OS.Logger.error(null, ex);
notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Kf85Rl+kUkuNn4OA9y7uIw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EOLb3jSd+EagKBPMNMIKsA", callContext.id);
// Raise Error: NotRegistered
throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
});
}

// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UGDM2IyXqEmU2mywD2Dk3A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OB21eqfrEEygb0neT+pzKA", callContext.id);
// isLoading_Submit = False
model.variables.isLoading_SubmitVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:14YDgdPLHUyZdzdEUX4OwA", callContext.id);
// Raise Error: BubbleCommunicationException
throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleCommunicationException", communicationExceptionVar.value.exceptionMessageAttr);
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xcl36Fj+pEqRdC0vPDZ4gg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kp23ahocfUaOhUtM8cpQhg", callContext.id);
// isLoading_Submit = False
model.variables.isLoading_SubmitVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K0z+ZD7Tu0K6WqfHFfp+Jw", callContext.id);
// Raise Error: BubbleGenericException
throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XF9ltFFglEa99EPW1d+5QA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XF9ltFFglEa99EPW1d+5QA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.OnClick_Save$vars", [{
name: "isValid",
attrName: "isValidVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "UpdatedAdressItems",
attrName: "updatedAdressItemsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Custom_Address_ItemList();
},
complexType: UBTConnectModel.Custom_Address_ItemList
}, {
name: "SourceAddressItem",
attrName: "sourceAddressItemVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Custom_Address_ItemRec();
},
complexType: APIDomain_Directory_ISModel.Custom_Address_ItemRec
}, {
name: "test",
attrName: "testVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Custom_Address_ItemList();
},
complexType: UBTConnectModel.Custom_Address_ItemList
}]);
Controller.prototype._action_FormatAddress$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_FormatAddress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.Action_FormatAddress$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ZDDAtUvTtEymsq95iXGYOw:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.ZDDAtUvTtEymsq95iXGYOw:8SGuowexjaWHfsjQtJM65g", "UBTConnect", "Action_FormatAddress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1v3i9xbJRESvZd6TaN9jqw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E6kX0vWuh0uV8RhNEvBCnA", callContext.id);
// FormatToUse = Replace
vars.value.formatToUseVar = OS.BuiltinFunctions.replace(model.variables.getCountryInfoDataAct.addressInfo2Out.addressFormatAttr, "\\r\\n", " ");
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E6kX0vWuh0uV8RhNEvBCnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FormattedAddress = FormatToUse
model.variables.formattedAddressVar = vars.value.formatToUseVar;
// Foreach AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList
callContext.iterationContext.registerIterationStart(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr);
try {var custom_Address_ItemListIterator = callContext.iterationContext.getIterator(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr);
var custom_Address_ItemListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f6j3yp7nek+nO6yujlqz+w", callContext.id) && (custom_Address_ItemListIndex < model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.length))) {
custom_Address_ItemListIterator.currentRowNumber = custom_Address_ItemListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ic43cp2rckGyOOfdaZDA6Q", callContext.id);
// FormattedAddress = Replace
model.variables.formattedAddressVar = OS.BuiltinFunctions.replace(model.variables.formattedAddressVar, (("[Address" + (model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getItem(custom_Address_ItemListIndex.valueOf()).numberRefAttr).toString()) + "]"), model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr.getItem(custom_Address_ItemListIndex.valueOf()).valueAttr);
custom_Address_ItemListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.accountFormVar.accountForm_AddressInformationAttr.custom_Address_ItemListAttr);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+6uujvH2Z0Gp48YpsB13DA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZDDAtUvTtEymsq95iXGYOw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.Action_FormatAddress$vars", [{
name: "FormatToUse",
attrName: "formatToUseVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onChange_Fields$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Fields");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BC6du4seK0ubdwu258Omhw:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.BC6du4seK0ubdwu258Omhw:kUODwvf+DtJICPN5RJXxjA", "UBTConnect", "OnChange_Fields", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9ZpwbnQwpUGZKWk1_qLv1w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_KNw+qwchk2T3BidCW2qkQ", callContext.id);
// HasChanges = notAccountForm = AccountFormOriginal
model.variables.hasChangesVar = !(model.variables.accountFormVar.equals(model.variables.accountFormOriginalVar));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EYdxOuPLn0O0R4sRsni+IQ", callContext.id);
// Execute Action: Action_FormatAddress
controller._action_FormatAddress$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M2FqmRiDRUmENXUBpnCAfA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BC6du4seK0ubdwu258Omhw", callContext.id);
}

};
Controller.prototype._onChange_ShowAgeSwitch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_ShowAgeSwitch");
callContext = controller.callContext(callContext);
var confirmActionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.confirmActionVar = confirmActionVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AXWVxOR0QU2H669i2rCn0w:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.AXWVxOR0QU2H669i2rCn0w:oJxrAKXioik5qOVcxi5Wzw", "UBTConnect", "OnChange_ShowAgeSwitch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GaP2Caee20ugNE_rHMSCfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SsmGToxdj06NvjYtn_ey+w", callContext.id);
// Execute Action: ConfirmAction
model.flush();
return NavigationHandlerController.default.confirmAction$Action(idService.getId("AgeConfirmation_PopUp"), callContext).then(function (value) {
confirmActionVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iDbn7sweBEyzg0v3KK68Uw", callContext.id) && confirmActionVar.value.isConfirmedOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S_Jn32Sd4keX5BJKH9UkhQ", callContext.id);
// Execute Action: OnChange_Fields
controller._onChange_Fields$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5rV2dKGd0UGpCAOACN0Cyw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GAWmuHJR9Eqb0e_EOgcXuA", callContext.id);
// AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates = notAccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates
model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr = !(model.variables.accountFormVar.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gZR2JvEanU2uObZEMCw4yw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AXWVxOR0QU2H669i2rCn0w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AXWVxOR0QU2H669i2rCn0w", callContext.id);
throw ex;

});
};
Controller.prototype._event_OnBackNavigation_ConfirmDiscard$Action = function (event_NavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_OnBackNavigation_ConfirmDiscard");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Profile.Profile.Event_OnBackNavigation_ConfirmDiscard$vars"))());
vars.value.event_NavigationEventInLocal = event_NavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jvAmx8qKfUeugk29_V22ew:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.jvAmx8qKfUeugk29_V22ew:T78RKHhp046x4NolQ4ngPw", "UBTConnect", "Event_OnBackNavigation_ConfirmDiscard", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fnem94zN_0KryzOuSOjK4A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s35vUn+HOkiSg82ySEhYjw", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.event_NavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Tg2x7ymzw0SU8sc3AdAkKQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jvAmx8qKfUeugk29_V22ew", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Profile.Profile.Event_OnBackNavigation_ConfirmDiscard$vars", [{
name: "Event_NavigationEvent",
attrName: "event_NavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onAfterFetch_GetCountryInfo$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetCountryInfo");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dN7C186dmEO9LBs1k5fCkA:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.dN7C186dmEO9LBs1k5fCkA:DLGJhv63OnRJzo6spWmcAw", "UBTConnect", "OnAfterFetch_GetCountryInfo", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AlclyKHy6E6AQwL42QgAxA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+13HXpGg1UOpZhj_Z74ovA", callContext.id);
// Execute Action: Action_FormatAddress
controller._action_FormatAddress$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+wWS9XOT3kO4AfdRzE96Ew", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dN7C186dmEO9LBs1k5fCkA", callContext.id);
}

};
Controller.prototype._screenEvent_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnReady");
callContext = controller.callContext(callContext);
var screenController_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.screenController_GetVar = screenController_GetVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AT1F7cfB8Em2wdqQHMr3Bw:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw/ClientActions.AT1F7cfB8Em2wdqQHMr3Bw:0IQa82U3ZeVyPuvjMNIyzg", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:glGsWP1kcEKO_l9GaO2X9Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tghmCfXfQkGP3TTnQWvnzQ", callContext.id);
// Execute Action: ScreenController_Get
model.flush();
return UBTJavaScriptUtilsController.default.screenController_Get$Action(callContext).then(function (value) {
screenController_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hFVN0NRYvkWWC_QMipeLTA", callContext.id);
// ScreenController = ScreenController_Get.Object
model.variables.screenControllerVar = screenController_GetVar.value.objectOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l7GzzrvK7U2DJEoDPmxQ4A", callContext.id);
// Execute Action: DropdownSearch_ForceResizeOnOpen
UBTConnect_UtilsController.default.dropdownSearch_ForceResizeOnOpen$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jAfTblHoXkq9bHkzR_IatA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AT1F7cfB8Em2wdqQHMr3Bw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AT1F7cfB8Em2wdqQHMr3Bw", callContext.id);
throw ex;

});
};

Controller.prototype.onChange_SubdivionDropdown$Action = function (dropdownSearchIdIn, selectedOptionListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_SubdivionDropdown$Action, callContext, dropdownSearchIdIn, selectedOptionListIn);

};
Controller.prototype.action_RefreshSubdivionList$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_RefreshSubdivionList$Action, callContext);

};
Controller.prototype.event_AgeConfirmation_Confirm$Action = function (event_NavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_AgeConfirmation_Confirm$Action, callContext, event_NavigationEventIn);

};
Controller.prototype.cacheControl_AllLocalitiesResult$Action = function (cacheControl_ResponseIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControl_AllLocalitiesResult$Action, callContext, cacheControl_ResponseIn);

};
Controller.prototype.onClick_ViewPreview$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ViewPreview$Action, callContext);

};
Controller.prototype.event_HouseholdPreview_OnInitialized$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_HouseholdPreview_OnInitialized$Action, callContext, idIn);

};
Controller.prototype.onClick_Back$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Back$Action, callContext);

};
Controller.prototype.cacheControl_AllSubdivisionsResult$Action = function (cacheControl_ResponseIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControl_AllSubdivisionsResult$Action, callContext, cacheControl_ResponseIn);

};
Controller.prototype.onClick_UBTAccountNumber$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_UBTAccountNumber$Action, callContext);

};
Controller.prototype.onChange_LocalityDropdown$Action = function (dropdownSearchIdIn, selectedOptionListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_LocalityDropdown$Action, callContext, dropdownSearchIdIn, selectedOptionListIn);

};
Controller.prototype.event_Layout_OnReadyEvent$Action = function (contentContainerIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_Layout_OnReadyEvent$Action, callContext, contentContainerIdIn);

};
Controller.prototype.cacheControl_UserInfo_WrapperResult$Action = function (userInformationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControl_UserInfo_WrapperResult$Action, callContext, userInformationIn);

};
Controller.prototype.onClick_Save$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Save$Action, callContext);

};
Controller.prototype.action_FormatAddress$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_FormatAddress$Action, callContext);

};
Controller.prototype.onChange_Fields$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Fields$Action, callContext);

};
Controller.prototype.onChange_ShowAgeSwitch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_ShowAgeSwitch$Action, callContext);

};
Controller.prototype.event_OnBackNavigation_ConfirmDiscard$Action = function (event_NavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_OnBackNavigation_ConfirmDiscard$Action, callContext, event_NavigationEventIn);

};
Controller.prototype.onAfterFetch_GetCountryInfo$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetCountryInfo$Action, callContext);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+Ecj6GgNgEOBGVT8iphmjQ:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ:bInaa6_gbF9cBaV75zFs2g", "UBTConnect", "App_Profile", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Z+PsGYgq0k6gIawHWN6VGw:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.Z+PsGYgq0k6gIawHWN6VGw:5Nezg81iK4xIwpgGIgOnrQ", "UBTConnect", "Profile", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Z+PsGYgq0k6gIawHWN6VGw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+Ecj6GgNgEOBGVT8iphmjQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Profile/Profile On Ready");
return controller.screenEvent_OnReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_App_ProfileController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Profile.Profile.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8f0znr5rF0Opw6B858gxKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownSearchIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b0f3HvfBO0O3QRo1I5h4Ng": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionListInLocal;
}
},
"YtRoutgP5EO48AZvipStCg": {
getter: function (varBag, idService) {
return varBag.vars.value.emptyListVar;
}
},
"xKCneGkq8kOERTrJkwbgDQ": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"C+eM4L5uKUaezZTZdCPV0g": {
getter: function (varBag, idService) {
return varBag.vars.value.event_NavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"K9cOFtMNFEeNCd3BG5+UYA": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheControl_ResponseInLocal;
}
},
"BxlGlcC3s02rjxvuKz_M5Q": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"wK7KPFMfh0CpmG46xNvtBA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NTmMXz6yS0WjdnwepraWrw": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheControl_ResponseInLocal;
}
},
"psS3fFPVoUiv+Czn4hzUOA": {
getter: function (varBag, idService) {
return varBag.vars.value.dropdownSearchIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oWCN_WaIOECOFG72Min4OQ": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedOptionListInLocal;
}
},
"Q8pPvOzohkOU7ZBgfcJJqQ": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"pVDoSyIBPUi9yqHb+RNstQ": {
getter: function (varBag, idService) {
return varBag.vars.value.contentContainerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lPr5eAuXQkqgfKs2lxAK2w": {
getter: function (varBag, idService) {
return varBag.vars.value.userInformationInLocal;
}
},
"lD2UOQpySkOrJ650woV+Vw": {
getter: function (varBag, idService) {
return varBag.addressInformationFilterVar.value;
}
},
"_zhGNMqBW0qPYVgulvaAvg": {
getter: function (varBag, idService) {
return varBag.vars.value.isValidVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Sceb4nrFXk6HIhxx2Hjr0A": {
getter: function (varBag, idService) {
return varBag.vars.value.updatedAdressItemsVar;
}
},
"bCMMPDHBXUug7PgCMShV5g": {
getter: function (varBag, idService) {
return varBag.vars.value.sourceAddressItemVar;
}
},
"W0gjiz4A6U2nF_bixdnKqQ": {
getter: function (varBag, idService) {
return varBag.vars.value.testVar;
}
},
"Kf85Rl+kUkuNn4OA9y7uIw": {
getter: function (varBag, idService) {
return varBag.notRegisteredVar.value;
}
},
"UGDM2IyXqEmU2mywD2Dk3A": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"xcl36Fj+pEqRdC0vPDZ4gg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"g6VPW449tESMgHN0M5P9Dw": {
getter: function (varBag, idService) {
return varBag.dropdownNotValid2Var.value;
}
},
"jjwkj1kjeUO6H37LxLDxEQ": {
getter: function (varBag, idService) {
return varBag.dropdownClearValidation2Var.value;
}
},
"4xkskyLydEeQSjgCpSU_sw": {
getter: function (varBag, idService) {
return varBag.dropdownClearValidationVar.value;
}
},
"HvjNw5FemkGEQEx5dz6dQw": {
getter: function (varBag, idService) {
return varBag.dropdownNotValidVar.value;
}
},
"yHhY1hYXsEOrmjz_s1eiGw": {
getter: function (varBag, idService) {
return varBag.get_MemoryCacheKey_UniqueKeyVar.value;
}
},
"rtOG6GJ3UU2nNrcbEWc9ng": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"USQSGczYTkugMP0d0UdL3g": {
getter: function (varBag, idService) {
return varBag.vars.value.formatToUseVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SsmGToxdj06NvjYtn_ey+w": {
getter: function (varBag, idService) {
return varBag.confirmActionVar.value;
}
},
"4iIlL3Ahm0+grZJ1jFY8bw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_NavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"tghmCfXfQkGP3TTnQWvnzQ": {
getter: function (varBag, idService) {
return varBag.screenController_GetVar.value;
}
},
"G56JAZgwZESin48+EfACqQ": {
getter: function (varBag, idService) {
return varBag.model.variables.accountFormVar;
}
},
"zGDk0DHmc0CdMxsEs0ajWw": {
getter: function (varBag, idService) {
return varBag.model.variables.accountFormOriginalVar;
}
},
"37IrY4SBNU2+TA6nZ6oKeQ": {
getter: function (varBag, idService) {
return varBag.model.variables.accountForm_ViewPreviewVar;
}
},
"laAsUtYYCk2w_VdyB+Zr4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isHouseholderVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"alVGNT3YVU+iPDJoaJKD9w": {
getter: function (varBag, idService) {
return varBag.model.variables.hasChangesVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_eBjqBDTkUSA7T88XO9Evw": {
getter: function (varBag, idService) {
return varBag.model.variables.isSpouseVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pAapvTPKokOmAYoLstUd0A": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoading_SubmitVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"koRPyA3kTEOipHX7k9NjiA": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_UserInformationVar;
}
},
"WR2llnLFP0qgn_A94aMOBg": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_AllLocalitiesVar;
}
},
"NIVGXokCnEG2mD+FRxC4fg": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_AllSubdivionsVar;
}
},
"pPdmWo5DJEaLZIfZ0pHqrQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subdivisionFilteredListVar;
}
},
"iWXHPa0tgU28VBAPOxMW5g": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UNK4GNC8A0SikMbCowldkQ": {
getter: function (varBag, idService) {
return varBag.model.variables.screenControllerVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"ABgggwwuUEqG7d5vpqIgIA": {
getter: function (varBag, idService) {
return varBag.model.variables.previewHousehold_BottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"60kExC3udEmz2HRBNTRqMw": {
getter: function (varBag, idService) {
return varBag.model.variables.currentCountryCodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9vJBSbpb902Vk+IbZWRQYA": {
getter: function (varBag, idService) {
return varBag.model.variables.formattedAddressVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O00H7Pd5b0i0ZWP0Fh1hYA": {
getter: function (varBag, idService) {
return varBag.model.variables.isRequireRequestCreationVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NfhZgQrClUid4twNHbw8hg": {
getter: function (varBag, idService) {
return varBag.model.variables.getCountryInfoDataAct;
}
},
"K_3DXGAK8EyH5ocF+9xGpQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"rZv3Q7NHZEujHKZzxcZCuw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"Szp3SbxkukaImThVWIrEvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"RzEq0UNNmUuLmVez1_Vojg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"mdVhZmWyBES7q1NdWZwa5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"f3r_LnDTHk+N7rwUA2IM9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"JKV7CC_PL0yN8bcrSIXZMg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"nJkzfIbfsU633uLlWYjmQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"0k1HDJ06e0CV1_eK6x9PBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"pvmV+PYE30K2dnOmvvjEFw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NameText"));
})(varBag.model, idService);
}
},
"5j1ENWSSLEmGCUC0OQPAFQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ViewPreview"));
})(varBag.model, idService);
}
},
"ZY6IUMnG2kqeVvayOyCgQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"8j5Fz4oBIk2ZqyeJUqRt3w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"xEaiElN9Z0GjOXBFN69v7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DetailsForm"));
})(varBag.model, idService);
}
},
"7S707S8Jtka_I8Z8so8b7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IdentificationInfo"));
})(varBag.model, idService);
}
},
"YpdisgISIkeFw8kR4pcJfg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xzanYxJNaUunRKifXOF4mA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Identification"));
})(varBag.model, idService);
}
},
"y97FlSg7bUuCmsGfGMVOSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContactBaseID"));
})(varBag.model, idService);
}
},
"hsEDKUymv0qa97z0tIK8oQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_ContactBaseId"));
})(varBag.model, idService);
}
},
"nS3r7kOGy06tspU2MuqOGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("UBTAccountNumber"));
})(varBag.model, idService);
}
},
"i0UT3qYSF0GqFijKHDhk6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"ifkx4CIegESxnW_MKxMc+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"82YgY6ctjUydl39LTybarQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_UBTAccountNumber"));
})(varBag.model, idService);
}
},
"AkEBBLpSZkaSOIiayTOFlw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PersonalInfo"));
})(varBag.model, idService);
}
},
"oqp0vmnTlk660WHEvcD+AA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Krzc9aa_N0S8IaJjkJgSrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PersonalInformation"));
})(varBag.model, idService);
}
},
"5QHo+XJWGUWDLG5MFXQolQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PleaseNote"));
})(varBag.model, idService);
}
},
"1Lb_TZUNaEm_IrqXUgT8FA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Username"));
})(varBag.model, idService);
}
},
"N6sgLBqzQkWRyESrLNoc_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Username"));
})(varBag.model, idService);
}
},
"NY02Zk4zG0GHeR4s9QNkhA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Email"));
})(varBag.model, idService);
}
},
"SXMRZVRFFEeKTdYqAO0hiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Email"));
})(varBag.model, idService);
}
},
"LESNqxibHkqGrxdqLESRTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PleaseNote2"));
})(varBag.model, idService);
}
},
"SCaoQMaogkiHpo9ZHo7e4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BirthDateandAge"));
})(varBag.model, idService);
}
},
"qrgeT_LJtUKr5Aa1yF9UIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"MLZ2irbdmUmjpbwsKwpegw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BirthDateandAgeText"));
})(varBag.model, idService);
}
},
"HVbz2i6GxEuByaJ7WfKndw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"mc7huZzP2EC6LM7JwfAcsA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Switch1"));
})(varBag.model, idService);
}
},
"ZFWO804iJky3u+JoQ4CZ7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BirthDateandAgeNote"));
})(varBag.model, idService);
}
},
"Aa5cb6RWI0qiPMj15NbwPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("isHouseholder_Address"));
})(varBag.model, idService);
}
},
"Bfn0Nn7tJ0uz+G6DLdeCng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"a98h4rNlY0i28eWstDpBsA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AddressInfo"));
})(varBag.model, idService);
}
},
"eJAO3ner0EumOR5a+eStgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Ho48ViTdWE+fwCuYrCMiBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AddressInformation"));
})(varBag.model, idService);
}
},
"w2CkHbJGjE6bx_ApR_B0cg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AddressLabel"));
})(varBag.model, idService);
}
},
"CR8ZcRYXe0aBG2Crcjj82w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AddressInput"));
})(varBag.model, idService);
}
},
"md2SU6_zrUycFXSUaaFU8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Locality"));
})(varBag.model, idService);
}
},
"Pym9JSXmzE6qv0B9v8m0lg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LocalityLabel"));
})(varBag.model, idService);
}
},
"ike8ZBCW5UeeB9ctLKZttQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LocalityDropdown"));
})(varBag.model, idService);
}
},
"Wk7kWRV5M0esCq404BCZmw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Subdivion"));
})(varBag.model, idService);
}
},
"VvdDDrHMZEO8+HyxDDi4RQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SubdivisionLabel"));
})(varBag.model, idService);
}
},
"3d8m6nlWoUebBxP9BzM5Nw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SubdivisionDropdown"));
})(varBag.model, idService);
}
},
"ebCr_jgCAEeZOYMZnD5kpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContactInfo"));
})(varBag.model, idService);
}
},
"3fXneMtJp0yyVU7JMeed_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"x26ZAwAzl0mzhJmgU9ARRA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContactInformation"));
})(varBag.model, idService);
}
},
"lDDYmUkNYE2QfDq87Js1LQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HomeNumber"));
})(varBag.model, idService);
}
},
"Vlt6akZeiE2RG9ouCq88zw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HomeNumber2"));
})(varBag.model, idService);
}
},
"7x0IHoRKFEeAGWLnoEuXEA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MobileNumber_Container"));
})(varBag.model, idService);
}
},
"EjuGgpG6e02wLvUeZbuB9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4kWDMKlbVEWnfbEbu5S96A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MobileNumber"));
})(varBag.model, idService);
}
},
"4Phqlbhz9UCJNi_JrPO5tw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"Rl1ccB_VXk29Nd_3ETGvBA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MobileNumberText"));
})(varBag.model, idService);
}
},
"RhyBXivi6kikaZY38bLLaQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"nNoj3_D5c0eZBLNaORG_OQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("isHouseholder2"));
})(varBag.model, idService);
}
},
"fo+Qp_QU0EaQAolDYUhnEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Switch2"));
})(varBag.model, idService);
}
},
"_lYOhRZoFESqfif292eu+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_MobileNumber"));
})(varBag.model, idService);
}
},
"8MrjURhToEG4Q58IVQIxmA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MobileNumber_Note"));
})(varBag.model, idService);
}
},
"r8wpOB7xS0G9DKBkTpbc_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("WorkNumberContainer"));
})(varBag.model, idService);
}
},
"Bsq4I3eEn0iE1DaTUDUCJQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"z9IB_l0nw0SmOMGCtYR2Hg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("WorkNumber"));
})(varBag.model, idService);
}
},
"WqBt_pAcq0CKsxMO7m+LRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"jfun3Me1G0CfbAo_Ql7QBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("WorkNumberText"));
})(varBag.model, idService);
}
},
"akvwLBotz0+SEwvYfkR3tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"7nhrZ0lMFEO7zYYoSwINPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Switch3"));
})(varBag.model, idService);
}
},
"NU16crEPFEq0Wg4s9WCp1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_WorkNumber"));
})(varBag.model, idService);
}
},
"kL4K7GWKG0upUIFia880yA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("WorkNumber_Note"));
})(varBag.model, idService);
}
},
"+nHIdY287E+u_+yYkRmtGw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FooterStickButtons"));
})(varBag.model, idService);
}
},
"vc9YPdoTdkC7is8VhMHT7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"W1TQtPnIeE6EvLJb+tZDog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"B5gUwFj1V0GdLJjIxxB2bQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"L0KL3_dWpEiZXb9FMV5wrw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"KsPcDUAkOkiKRbZ0Ss3Lxw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"1I2lvAx+6USm7sVXNaHYJQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"DdCERAQ5CkSUx3MvfVFcOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"1VR5pms69Ee7R3Me1nyOPw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("isHouseholder_Cache"));
})(varBag.model, idService);
}
},
"wyzhHA8vVUKpTlMcn6ZtNw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp_Change"));
})(varBag.model, idService);
}
},
"Z11vfWYSEUuhcMag7rXlAw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"XP7zDugzTkmDvdOwKyVHmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Body"));
})(varBag.model, idService);
}
},
"73tEFMwcKE+DGQMUz3gWcg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PreviewBottomSheet"));
})(varBag.model, idService);
}
},
"Qc2X5z28zUOA+LJjR6faYA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AgeConfirmation_PopUp"));
})(varBag.model, idService);
}
},
"J1V8WS7EuUSLJsNcSjve2g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"aS0DMf16306CBeFq8Or6QQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Body"));
})(varBag.model, idService);
}
},
"z6es193WJUqOa00roSecbw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ButtonLabel"));
})(varBag.model, idService);
}
},
"2Og55grOvEyIU0CngZiAdA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DismissButtonLabe"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
