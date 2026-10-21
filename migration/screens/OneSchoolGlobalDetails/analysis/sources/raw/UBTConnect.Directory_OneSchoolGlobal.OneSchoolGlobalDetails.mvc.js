define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "UBTConnect.controller", "Connect_CommunityBusiness_CS.model", "Connect_Geography_CS.model", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LookupSectionsRec", "UBTConnect.model$Type_OneschoolGlobal_SubsectionRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$BusinessLinkItemRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect.controller$Get_LookupSection", "Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCardRec", "UBTConnect.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnect.controller$GetSkeleton_UI_OneSchoolGlobal_DetailCard", "UBTConnect.model$TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, UBTConnectController, Connect_CommunityBusiness_CSModel, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;

var GetOneSchoolGlobalDetailsDataActRec = (function (_super) {
__extends(GetOneSchoolGlobalDetailsDataActRec, _super);
function GetOneSchoolGlobalDetailsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetOneSchoolGlobalDetailsDataActRec.attributesToDeclare = function () {
return [
this.attr("Out_OneSchoolGlobal", "out_OneSchoolGlobalOut", "Out_OneSchoolGlobal", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record());
}, true, UBTConnectModel.TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record), 
this.attr("HouseholdCoordinates", "householdCoordinatesOut", "HouseholdCoordinates", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CoordinatesRec());
}, true, APIDomain_Directory_ISModel.Directory_CoordinatesRec), 
this.attr("UI_Timezone", "uI_TimezoneOut", "UI_Timezone", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_LocalityTimezoneRec());
}, true, Connect_Geography_CSModel.UI_LocalityTimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
GetOneSchoolGlobalDetailsDataActRec.init();
return GetOneSchoolGlobalDetailsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LookupSections", "lookupSectionsVar", "LookupSections", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.LookupSectionsRec());
}, false, UBTConnectModel.LookupSectionsRec), 
this.attr("Selected_OneschoolGlobal_SubsectionId", "selected_OneschoolGlobal_SubsectionIdVar", "Selected_OneschoolGlobal_SubsectionId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Type_OneschoolGlobal_SubsectionId", "type_OneschoolGlobal_SubsectionIdVar", "Type_OneschoolGlobal_SubsectionId", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Type_OneschoolGlobal_SubsectionRec());
}, false, UBTConnectModel.Type_OneschoolGlobal_SubsectionRec), 
this.attr("LocalIsBookmarked", "localIsBookmarkedVar", "LocalIsBookmarked", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_OneSchoolGlobalId", "in_OneSchoolGlobalIdIn", "In_OneSchoolGlobalId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_OneSchoolGlobalIdInDataFetchStatus", "_in_OneSchoolGlobalIdInDataFetchStatus", "_in_OneSchoolGlobalIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetOneSchoolGlobalDetails", "getOneSchoolGlobalDetailsDataAct", "getOneSchoolGlobalDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetOneSchoolGlobalDetailsDataActRec());
}, true, GetOneSchoolGlobalDetailsDataActRec)
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
ButtonGroup1: OS.Model.ValidationWidgetRecord
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
if("In_OneSchoolGlobalId" in inputs) {
this.variables.in_OneSchoolGlobalIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OneSchoolGlobalId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_OneSchoolGlobal.OneSchoolGlobalDetails");
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect_CommunityBusiness_CS.model", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$model", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", "UBTConnect.App_Common_Blocks.External_Link.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", "UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LookupSectionsRec", "UBTConnect.model$Type_OneschoolGlobal_SubsectionRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$BusinessLinkItemRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect.controller$Get_LookupSection", "Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCardRec", "UBTConnect.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnect.controller$GetSkeleton_UI_OneSchoolGlobal_DetailCard", "UBTConnect.model$TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect_CommunityBusiness_CSModel, Connect_Geography_CSModel, React, OSView, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_model, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, UBTConnect_App_Common_Blocks_External_Link_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnectLibrary_ConnectPatterns_ExpandableSection_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_OneSchoolGlobal.OneSchoolGlobalDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, UBTConnect_App_Common_Blocks_External_Link_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnectLibrary_ConnectPatterns_ExpandableSection_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "OneSchoolGlobalDetails";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "OneSchool Global",
In_TextOptions: model.getCachedValue(idService.getId("rL+rdbyAGU6FddEGT804Lg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_DetailCard: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr)
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, {
inputs: {
In_IsBookmarked: model.variables.localIsBookmarkedVar,
In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.detail
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
lazyImage_Placeholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
ImageURL: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
ImageSize: model.getCachedValue(idService.getId("tCDagrC5R02GS7Xx+Uh1BA.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
return rec;
}();
}),
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.communityBusinessIdAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
HasErrorMessage: true,
EntityType: UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal
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
})];
}),
placeholder_ImageTag: PlaceholderContent.Empty,
avatarList: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
inputs: {
In_Title: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr)
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
uuid: "6",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_TopSectionContent: PlaceholderContent.Empty,
placeholder_BottomSectionContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("bNnsNCIbWkuJe_9OWAM9BQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Educating Students From:"
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
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
In_TextOptions: model.getCachedValue(idService.getId("921RzJYJY06kJJmJYw4Pkw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
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
validationService: validationService
},
_idProps: {
service: idService,
uuid: "8",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("pYqekqKKnEu_pfdrsvCtAg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.cyanDarker;
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("Rbf0Yv3XzEy8xUIXKZQO1w.Style"), function () {
return ((model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr) ? ("school-address") : ("margin-top-s margin-bottom-xs"));
}, function () {
return model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, {
inputs: {
In_Coordinates: model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut,
_in_CoordinatesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
In_Address: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr,
_in_AddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
IconVisible: true,
IsEnabled: true
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
uuid: "11",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "school-link-item",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(UBTConnect_App_Common_Blocks_External_Link_mvc_view, {
inputs: {
IconVisible: true,
IsEnabled: true,
In_Link: model.getCachedValue(idService.getId("w1Sj4WDMIkKNn8io3M2o0Q.In_Link"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr.getCurrent(callContext.iterationContext), new UBTConnectModel.BusinessLinkItemRec(), function (source, target) {
target.textAttr = source.textAttr;
target.linkAttr = source.linkAttr;
target.iDAttr = source.iDAttr;
return target;
});
}, function () {
return model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr.getCurrent(callContext.iterationContext);
}),
_in_LinkInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr)
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
uuid: "14",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.communityBusinessIdAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.communityBusinessIdAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr), asPrimitiveValue(model.variables.localIsBookmarkedVar)]
})];
}),
placeholder_CallToAction: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("huKJ3aQcw0OPs6oBm+Wc9Q.Options"), function () {
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
uuid: "15",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, {
inputs: {
ContactPopUp_OverrideOptions: model.getCachedValue(idService.getId("A0z9SRA9o06M5nuEhcFsQw.ContactPopUp_OverrideOptions"), function () {
return function () {
var rec = new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec();
rec.imageURLAttr = model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr;
rec.nameAttr = OS.BuiltinFunctions.trim(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr);
return rec;
}();
}, function () {
return model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr;
}, function () {
return model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr;
}),
_contactPopUp_OverrideOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
EntityType: UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal,
EntityId: model.variables.in_OneSchoolGlobalIdIn,
EnableOptions: model.getCachedValue(idService.getId("A0z9SRA9o06M5nuEhcFsQw.EnableOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec();
rec.enableNotesAttr = true;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onChange_Bookmark$Action: function (isBookmarkedIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions OnChange_Bookmark");
controller.directory_EntityDetailsActionsOnChange_Bookmark$Action(isBookmarkedIn, controller.callContext(eventHandlerContext));
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
uuid: "16",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_OneSchoolGlobalIdIn), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr)]
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr)
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
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [$if(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnectModel.staticEntities.launchDarkly_FF.mobileStudentInformation, callContext).hasAccessOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Block_StudentNumbers.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
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
name: "Block_StudentNumbers",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_ExpandableSection_mvc_view, {
inputs: {
StartExpanded: false
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
uuid: "19",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("dUR2VCmRMUOrkryxzF6wgA.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small,
Text: model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.singularAttr
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
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.cyanDarker,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_IconId: model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr
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
uuid: "21",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr)]
})];
}),
content: new PlaceholderContent(function () {
return [$if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("atvRlrpJn0+CT8ZEch1a5Q.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.large;
return rec;
}();
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
uuid: "22",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("ComingSoon.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
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
name: "ComingSoon",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.singularAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.singularAttr)]
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Block_ButtonGroup.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
name: "Block_ButtonGroup",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("nJPo8zMgHUus8rGNyxNAKw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = ((OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnectModel.staticEntities.launchDarkly_FF.mobileStudentInformation, callContext).hasAccessOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id)) ? (UBTConnectModel.staticEntities.uBT_Size.extraSmall) : (OS.BuiltinFunctions.nullTextIdentifier()));
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
uuid: "25",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.ButtonGroup, {
_validationProps: {
validationService: validationService
},
enabled: true,
mandatory: false,
style: "button-group ubt-skeleton-section__element",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.selected_OneschoolGlobal_SubsectionIdVar, function (value) {
model.variables.selected_OneschoolGlobal_SubsectionIdVar = value;
}),
_idProps: {
service: idService,
name: "ButtonGroup1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "button-group-item",
value: model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr,
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.ButtonGroupItem, {
enabled: true,
style: "button-group-item",
value: model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr,
visible: true,
_idProps: {
service: idService,
name: "ButtonGroupItem2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr), asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr), asPrimitiveValue(model.variables.selected_OneschoolGlobal_SubsectionIdVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr), asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr), asPrimitiveValue(model.variables.selected_OneschoolGlobal_SubsectionIdVar)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("8pKjne7nj0m9JdU_oFQRYA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
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
uuid: "31",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("ZkJV3Kr4qE6VIBo7dfZYOQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.leftSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.rightSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.large;
return rec;
}();
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
uuid: "32",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("ComingSoon4.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
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
name: "ComingSoon4",
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr), asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr), asPrimitiveValue(model.variables.selected_OneschoolGlobal_SubsectionIdVar), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.singularAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr), asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr), asPrimitiveValue(model.variables.selected_OneschoolGlobal_SubsectionIdVar), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.singularAttr), asPrimitiveValue(model.variables.in_OneSchoolGlobalIdIn), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.localIsBookmarkedVar), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.communityBusinessIdAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr)]
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
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
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
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
uuid: "35",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr), asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr), asPrimitiveValue(model.variables.selected_OneschoolGlobal_SubsectionIdVar), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.singularAttr), asPrimitiveValue(model.variables.in_OneSchoolGlobalIdIn), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.localIsBookmarkedVar), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.communityBusinessIdAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect_CommunityBusiness_CS.model", "Connect_Geography_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$debugger", "UBTConnect.Directory_OneSchoolGlobal.controller", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LookupSectionsRec", "UBTConnect.model$Type_OneschoolGlobal_SubsectionRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$BusinessLinkItemRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect.controller$Get_LookupSection", "Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCardRec", "UBTConnect.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnect.controller$GetSkeleton_UI_OneSchoolGlobal_DetailCard", "UBTConnect.model$TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect_CommunityBusiness_CSModel, Connect_Geography_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_Debugger, _flow_UBTConnect_Directory_OneSchoolGlobalController, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getOneSchoolGlobalDetails$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getOneSchoolGlobalDetails$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getOneSchoolGlobalDetails$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:DM2VFX5JjkuHCDlPuDlDkA:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.rrwjrufeGE6U9UQAzOfghg/DataActions.DM2VFX5JjkuHCDlPuDlDkA:JFFjtXJXQvxS_E_b3QijwQ", "UBTConnect", "GetOneSchoolGlobalDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails/GetOneSchoolGlobalDetails");
return controller.callDataAction("DataActionGetOneSchoolGlobalDetails", "screenservices/UBTConnect/Directory_OneSchoolGlobal/OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails", "_HyxflrvMcBHW4KEfCvaWQ", function (b) {
model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getOneSchoolGlobalDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getOneSchoolGlobalDetailsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DM2VFX5JjkuHCDlPuDlDkA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getOneSchoolGlobalDetails$DataActRefresh"];
// Client Actions
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NEZGHoQPWUy3Akie8b2X+A:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.rrwjrufeGE6U9UQAzOfghg/ClientActions.NEZGHoQPWUy3Akie8b2X+A:vChW9wWgYMc0j41roFLwKg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QIZwuDLJmk+x7R_S81i7AA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ctThjPTF0kWw4M2Wkalcqw", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BjuNT7AJJUSFr_tIVPLVjQ", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LRA_jeq7mUqwG2HHlwyOOQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nngLyvFXE0qO92Q9lxb9eA", callContext.id);
// Selected_OneschoolGlobal_SubsectionId = Type_OneschoolGlobal_SubsectionId.UpcomingEvents
model.variables.selected_OneschoolGlobal_SubsectionIdVar = model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sx01fyctBEisLxTCFPQN5Q", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NEZGHoQPWUy3Akie8b2X+A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._screenEvent_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnReady");
callContext = controller.callContext(callContext);
var get_LookupSectionVar = new OS.DataTypes.VariableHolder();
var getSkeleton_UI_OneSchoolGlobal_DetailCardVar = new OS.DataTypes.VariableHolder();
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.get_LookupSectionVar = get_LookupSectionVar;
varBag.getSkeleton_UI_OneSchoolGlobal_DetailCardVar = getSkeleton_UI_OneSchoolGlobal_DetailCardVar;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nAcCP0vg5kG74X0QncZH_w:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.rrwjrufeGE6U9UQAzOfghg/ClientActions.nAcCP0vg5kG74X0QncZH_w:B1TW48TIIqY9r4+J559vfw", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F+9DrscwqUyyGy8MAUERYA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nrvRaJx5z02o+cY2hGeXxw", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:34RSoIyr0kSCQ+MapAMypg", callContext.id) && ((isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true) && model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XpT7yOl5xU+jSi3AS_io4w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kSYlFPoFqkadr_SJU+xJbQ", callContext.id);
// Execute Action: Get_LookupSection
get_LookupSectionVar.value = UBTConnectController.default.get_LookupSection$Action(false, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4wMG9nB60EKsCXInV3vATA", callContext.id);
// LookupSections = Get_LookupSection.Out_Lookup
model.variables.lookupSectionsVar = get_LookupSectionVar.value.out_LookupOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+F8KLRMczkinSpHw6694mw", callContext.id);
// Execute Action: GetSkeleton_UI_OneSchoolGlobal_DetailCard
getSkeleton_UI_OneSchoolGlobal_DetailCardVar.value = UBTConnectController.default.getSkeleton_UI_OneSchoolGlobal_DetailCard$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IDlB5k0sS0yk3sgu_FVGFA", callContext.id);
// GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard = GetSkeleton_UI_OneSchoolGlobal_DetailCard.UI_OneSchoolGlobal_DetailCard
model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr = getSkeleton_UI_OneSchoolGlobal_DetailCardVar.value.uI_OneSchoolGlobal_DetailCardOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qF5VyGTeJEGZwOiF_2f5iw", callContext.id);
// Refresh Query: GetOneSchoolGlobalDetails
var result = controller.getOneSchoolGlobalDetails$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gCuX7UNqMUqoCSRNGnAEiQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nAcCP0vg5kG74X0QncZH_w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nAcCP0vg5kG74X0QncZH_w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._directory_EntityDetailsActionsOnChange_Bookmark$Action = function (isBookmarkedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Directory_EntityDetailsActionsOnChange_Bookmark");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.Directory_EntityDetailsActionsOnChange_Bookmark$vars"))());
vars.value.isBookmarkedInLocal = isBookmarkedIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Bn1WRw8hJ0iF6M_uGqVGSQ:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.rrwjrufeGE6U9UQAzOfghg/ClientActions.Bn1WRw8hJ0iF6M_uGqVGSQ:pCLUkwU44J+MwN1x8rDAYw", "UBTConnect", "Directory_EntityDetailsActionsOnChange_Bookmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nyw559PkxE2erGrcH0cg3A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SmfocJkFuEiRQKaLrURXgQ", callContext.id);
// LocalIsBookmarked = isBookmarked
model.variables.localIsBookmarkedVar = vars.value.isBookmarkedInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1+jJtddrukqkh6obGur8lA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Bn1WRw8hJ0iF6M_uGqVGSQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.Directory_EntityDetailsActionsOnChange_Bookmark$vars", [{
name: "isBookmarked",
attrName: "isBookmarkedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.directory_EntityDetailsActionsOnChange_Bookmark$Action = function (isBookmarkedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._directory_EntityDetailsActionsOnChange_Bookmark$Action, callContext, isBookmarkedIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ:FzAHevH2JPdbaxcxjhuz_A", "UBTConnect", "Directory_OneSchoolGlobal", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rrwjrufeGE6U9UQAzOfghg:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.rrwjrufeGE6U9UQAzOfghg:krF2VzCjVokdIfr9VeE5pg", "UBTConnect", "OneSchoolGlobalDetails", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rrwjrufeGE6U9UQAzOfghg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails On Ready");
return controller.screenEvent_OnReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Directory_OneSchoolGlobalController.default.handleError(ex, this.callContext());
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
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ctThjPTF0kWw4M2Wkalcqw": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"kSYlFPoFqkadr_SJU+xJbQ": {
getter: function (varBag, idService) {
return varBag.get_LookupSectionVar.value;
}
},
"+F8KLRMczkinSpHw6694mw": {
getter: function (varBag, idService) {
return varBag.getSkeleton_UI_OneSchoolGlobal_DetailCardVar.value;
}
},
"nrvRaJx5z02o+cY2hGeXxw": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"JD3mve7kXE6tJYafHvSPow": {
getter: function (varBag, idService) {
return varBag.vars.value.isBookmarkedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_nFBLoRz9EePhmOVpux_Dg": {
getter: function (varBag, idService) {
return varBag.model.variables.lookupSectionsVar;
}
},
"JpzXnzAoeE+KE32u399TTg": {
getter: function (varBag, idService) {
return varBag.model.variables.selected_OneschoolGlobal_SubsectionIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FfSxZrRbrUCh2on3LdooLw": {
getter: function (varBag, idService) {
return varBag.model.variables.type_OneschoolGlobal_SubsectionIdVar;
}
},
"5SOv+f5C_kaTSaqFJQNlZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.localIsBookmarkedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vjfUqIwA60GIn2Uz22McZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OneSchoolGlobalIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"DM2VFX5JjkuHCDlPuDlDkA": {
getter: function (varBag, idService) {
return varBag.model.variables.getOneSchoolGlobalDetailsDataAct;
}
},
"u6M5R9CRm0mQgLYm_CZiNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"YoCmUHKaR0ybvezmNPu9MQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"xIw9Iodwc0yvx0MzNzqFkg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"KF3RSnWMRUiy2FSCMmtswQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"+MndLZLibUad9mHZDnsCQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DetailCard"));
})(varBag.model, idService);
}
},
"KxNxo76m9E63fC8MsVGYKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"1aFR0nTOT0Cxr2V_pWuBcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LazyImage_Placeholder"));
})(varBag.model, idService);
}
},
"MOdshNIA80OIHpKpzffBRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ImageTag"));
})(varBag.model, idService);
}
},
"oQh7MWVxVEadBxfils0H4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AvatarList"));
})(varBag.model, idService);
}
},
"4BOXh9eJKUClPuIaxvcqAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"kHtMZGt+_k6OZAlefmsF4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TopSectionContent"));
})(varBag.model, idService);
}
},
"iHqXAyh5MEy5NHFfe4Wwkg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomSectionContent"));
})(varBag.model, idService);
}
},
"Hg1upCc4BUKG1kC36ptAKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"CLScB_3zKEemmZMnvrO1aA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CallToAction"));
})(varBag.model, idService);
}
},
"xyLDeNLRbEO8kYipZQ+agQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"qgYDb6tLW0eYFq4dlzc9mQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"_qkmW3uVUk2AoxRU+iuDng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"mw3WLzbWjEOfXBK+ChtoVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasStudentInformationPermission"));
})(varBag.model, idService);
}
},
"x8CeIVNXo0C20GkwcNAGRA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_StudentNumbers"));
})(varBag.model, idService);
}
},
"BpY59PyjtkSw4SkHWTyyQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"6sc3jp4oYUOChiaxIJyv6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"RGO3uVwi90CRCJSc3kNVmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"cvIE2gABAkiu93pwxPslqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"H5J_j31SQ0qeDt+8+resbw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"0JuWh6tBGEOF+XJPfBLQlg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ComingSoon"));
})(varBag.model, idService);
}
},
"fyZO4P3rQ0iyQ7EWYE3FAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_ButtonGroup"));
})(varBag.model, idService);
}
},
"lH7biUrrGE2wnmnOfpzo4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"SAxwOtEO0U+reJrRHXxM9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YYFtzCzNHEKPW_B+xw4m2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroup1"));
})(varBag.model, idService);
}
},
"VunLMGEYGEi0iZSZ+t03dg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem1"));
})(varBag.model, idService);
}
},
"CMU78V7zkkSm7csFnQheTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem2"));
})(varBag.model, idService);
}
},
"mQ_AdLmMsU2pAvhHrntdHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"1IJGpEsTSUerPsNoZpf4Ag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"lAaxwr7q+kW2Um_XhPjU2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ComingSoon4"));
})(varBag.model, idService);
}
},
"VTEvJMjwPUqcuZIAj5uJZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"bB3Q9Ro2iU6jgv2nsBYdmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
