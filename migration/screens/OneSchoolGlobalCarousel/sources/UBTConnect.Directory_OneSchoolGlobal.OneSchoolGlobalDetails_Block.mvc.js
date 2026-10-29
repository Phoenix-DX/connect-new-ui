define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect_CommunityBusiness_CS.model", "UBTConnect.controller", "Connect_Geography_CS.model", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LookupSectionsRec", "UBTConnect.model$Type_OneschoolGlobal_SubsectionRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$BusinessLinkItemRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCardRec", "UBTConnect.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnect.controller$GetSkeleton_UI_OneSchoolGlobal_DetailCard", "UBTConnect.controller$Get_LookupSection", "UBTConnect.model$TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect_CommunityBusiness_CSModel, UBTConnectController, Connect_Geography_CSModel) {
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
this.attr("IsRestoredFromCache", "isRestoredFromCacheIn", "IsRestoredFromCache", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isRestoredFromCacheInDataFetchStatus", "_isRestoredFromCacheInDataFetchStatus", "_isRestoredFromCacheInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
this.variables.in_OneSchoolGlobalIdIn = inputs.In_OneSchoolGlobalId;
if("_in_OneSchoolGlobalIdInDataFetchStatus" in inputs) {
this.variables._in_OneSchoolGlobalIdInDataFetchStatus = inputs._in_OneSchoolGlobalIdInDataFetchStatus;
}

}

if("IsRestoredFromCache" in inputs) {
this.variables.isRestoredFromCacheIn = inputs.IsRestoredFromCache;
if("_isRestoredFromCacheInDataFetchStatus" in inputs) {
this.variables._isRestoredFromCacheInDataFetchStatus = inputs._isRestoredFromCacheInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block");
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect_CommunityBusiness_CS.model", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$model", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", "UBTConnect.App_Common_Blocks.External_Link.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", "UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc$view", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LookupSectionsRec", "UBTConnect.model$Type_OneschoolGlobal_SubsectionRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$BusinessLinkItemRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCardRec", "UBTConnect.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnect.controller$GetSkeleton_UI_OneSchoolGlobal_DetailCard", "UBTConnect.controller$Get_LookupSection", "UBTConnect.model$TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect_CommunityBusiness_CSModel, Connect_Geography_CSModel, React, OSView, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_model, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_controller, UBTConnectClientVariables, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, UBTConnect_App_Common_Blocks_External_Link_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnectLibrary_ConnectPatterns_ExpandableSection_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view) {
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
        View.displayName = "Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, UBTConnect_App_Common_Blocks_External_Link_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnectLibrary_ConnectPatterns_ExpandableSection_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, {
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
uuid: "1",
alias: "2"
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
lazyImage_Placeholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
ImageSize: model.getCachedValue(idService.getId("lEX+T8Rs3EmFgnnq2VZjZw.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
return rec;
}();
}),
ImageURL: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
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
uuid: "3",
alias: "4"
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_TopSectionContent: PlaceholderContent.Empty,
placeholder_BottomSectionContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Educating Students From:",
In_TextOptions: model.getCachedValue(idService.getId("p4WchWYzA0S_THCFGWhOxQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
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
In_Text: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
In_TextOptions: model.getCachedValue(idService.getId("KQnKCx_+8kmx7VrRiyfR9w.In_TextOptions"), function () {
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
uuid: "6",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("8WQ2mddY8kWsIrjj95u+5g.Options"), function () {
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
uuid: "7",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("nv3VrKnSMkKDKgt30qH4EA.Style"), function () {
return ((model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr) ? ("school-address") : ("margin-top-s margin-bottom-xs"));
}, function () {
return model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, {
inputs: {
IsEnabled: true,
IconVisible: true,
In_Address: model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr,
_in_AddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
In_Coordinates: model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut,
_in_CoordinatesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr)
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
alias: "9"
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
uuid: "10"
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
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(UBTConnect_App_Common_Blocks_External_Link_mvc_view, {
inputs: {
IconVisible: true,
In_Link: model.getCachedValue(idService.getId("R70iHrqp20eeJ4KItdbywA.In_Link"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr.getCurrent(callContext.iterationContext), new UBTConnectModel.BusinessLinkItemRec(), function (source, target) {
target.textAttr = source.textAttr;
target.linkAttr = source.linkAttr;
target.iDAttr = source.iDAttr;
return target;
});
}, function () {
return model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr.getCurrent(callContext.iterationContext);
}),
_in_LinkInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr),
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
uuid: "12",
alias: "10"
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
_dependencies: [asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr)]
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
Options: model.getCachedValue(idService.getId("zlGSBqsZGEKF5GT8lK1THA.Options"), function () {
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
uuid: "13",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, {
inputs: {
EnableOptions: model.getCachedValue(idService.getId("YXZR_LbIOEOULpWVtnD8rA.EnableOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec();
rec.enableNotesAttr = true;
return rec;
}();
}),
ContactPopUp_OverrideOptions: model.getCachedValue(idService.getId("YXZR_LbIOEOULpWVtnD8rA.ContactPopUp_OverrideOptions"), function () {
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
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OneSchoolGlobalIdInDataFetchStatus)
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
uuid: "14",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_OneSchoolGlobalIdIn), asPrimitiveValue(model.variables._in_OneSchoolGlobalIdInDataFetchStatus), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr)]
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
uuid: "15",
alias: "13"
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
alias: "14"
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
uuid: "17",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("LXlZ5Z1tLUqbAzVskzkYNA.TextOptions"), function () {
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
uuid: "18",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_IconId: model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.cyanDarker
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
Options: model.getCachedValue(idService.getId("8GctZkZUq06lW0RiavvOhQ.Options"), function () {
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
uuid: "20",
alias: "18"
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
alias: "19"
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
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("D2NOegWhm0abKrn0lMb1cQ.Options"), function () {
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
uuid: "23",
alias: "21"
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
uuid: "26"
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
uuid: "28"
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
Options: model.getCachedValue(idService.getId("3JDzJOhz4E2ZixVwDHJUnw.Options"), function () {
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
uuid: "29",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("9_UNN5Lx806+S4sLF1w4cw.Options"), function () {
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
uuid: "30",
alias: "23"
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
alias: "24"
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
_dependencies: [asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.aboutOurCampusAttr), asPrimitiveValue(model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr), asPrimitiveValue(model.variables.selected_OneschoolGlobal_SubsectionIdVar), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.iconAttr), asPrimitiveValue(model.variables.lookupSectionsVar.oneSchoolStatistiticsAttr.singularAttr), asPrimitiveValue(model.variables.in_OneSchoolGlobalIdIn), asPrimitiveValue(model.variables._in_OneSchoolGlobalIdInDataFetchStatus), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.localIsBookmarkedVar), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.businesLinksAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.oneSchoolGlobal__DetailCard_ContentAttr.areasServedAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.uI_OneSchool_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.communityBusinessIdAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr.signedURLAttr), asPrimitiveValue(model.variables.getOneSchoolGlobalDetailsDataAct.isDataFetchedAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect_CommunityBusiness_CS.model", "Connect_Geography_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$debugger", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LookupSectionsRec", "UBTConnect.model$Type_OneschoolGlobal_SubsectionRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$BusinessLinkItemRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCardRec", "UBTConnect.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnect.controller$GetSkeleton_UI_OneSchoolGlobal_DetailCard", "UBTConnect.controller$Get_LookupSection", "UBTConnect.model$TextLocalityNameLocalityIdRecordListUI_OneSchoolGlobal_DetailCard2Record", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect_CommunityBusiness_CSModel, Connect_Geography_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_OneSchoolGlobal_OneSchoolGlobalDetails_Block_mvc_Debugger) {
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

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4QFaTGudvUeqjGr8spFWxQ:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.iiryIbbwtESYDjJie7WGXw/DataActions.4QFaTGudvUeqjGr8spFWxQ:Xl35EboHYcZFhjNzkP9AMw", "UBTConnect", "GetOneSchoolGlobalDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block/GetOneSchoolGlobalDetails");
return controller.callDataAction("DataActionGetOneSchoolGlobalDetails", "screenservices/UBTConnect/Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails", "_HyxflrvMcBHW4KEfCvaWQ", function (b) {
model.variables.getOneSchoolGlobalDetailsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getOneSchoolGlobalDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getOneSchoolGlobalDetailsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4QFaTGudvUeqjGr8spFWxQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getOneSchoolGlobalDetails$DataActRefresh"];
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
var getSkeleton_UI_OneSchoolGlobal_DetailCardVar = new OS.DataTypes.VariableHolder();
var get_LookupSectionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSkeleton_UI_OneSchoolGlobal_DetailCardVar = getSkeleton_UI_OneSchoolGlobal_DetailCardVar;
varBag.get_LookupSectionVar = get_LookupSectionVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:TmUaDdadaU2YoTjPhivlYA:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.iiryIbbwtESYDjJie7WGXw/ClientActions.TmUaDdadaU2YoTjPhivlYA:Ugha70lQFzRdz7I+aNaeiw", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Wizn37yKuEqolCTAO8AWRw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jwoE1f1xAkmljhVMCWq5ag", callContext.id) && model.variables.isRestoredFromCacheIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FFrbYLOfSESzCdG5muqFcA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dy+iXKJ2skKuZy4w9iynfg", callContext.id);
// Execute Action: Get_LookupSection
get_LookupSectionVar.value = UBTConnectController.default.get_LookupSection$Action(false, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8VnDt6bxIkSs9eKW50YGmA", callContext.id);
// LookupSections = Get_LookupSection.Out_Lookup
model.variables.lookupSectionsVar = get_LookupSectionVar.value.out_LookupOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y59SR7+VZUWeFqsVYl_j0w", callContext.id);
// Execute Action: GetSkeleton_UI_OneSchoolGlobal_DetailCard
getSkeleton_UI_OneSchoolGlobal_DetailCardVar.value = UBTConnectController.default.getSkeleton_UI_OneSchoolGlobal_DetailCard$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fCEaJaECEEyIZgbWVkePNQ", callContext.id);
// GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard = GetSkeleton_UI_OneSchoolGlobal_DetailCard.UI_OneSchoolGlobal_DetailCard
model.variables.getOneSchoolGlobalDetailsDataAct.out_OneSchoolGlobalOut.oneSchoolGlobal_DetailCardAttr = getSkeleton_UI_OneSchoolGlobal_DetailCardVar.value.uI_OneSchoolGlobal_DetailCardOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zs_zNV3wGESzpmh3qOx2uw", callContext.id);
// Refresh Query: GetOneSchoolGlobalDetails
var result = controller.getOneSchoolGlobalDetails$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LanGOvY8+EmhV84osBBQvQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:TmUaDdadaU2YoTjPhivlYA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:TmUaDdadaU2YoTjPhivlYA", callContext.id);
throw ex;

});
};
Controller.prototype._directory_EntityDetailsActionsOnChange_Bookmark$Action = function (isBookmarkedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Directory_EntityDetailsActionsOnChange_Bookmark");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.Directory_EntityDetailsActionsOnChange_Bookmark$vars"))());
vars.value.isBookmarkedInLocal = isBookmarkedIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FeNoQCZ5yEm6Fu6+dPADiQ:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.iiryIbbwtESYDjJie7WGXw/ClientActions.FeNoQCZ5yEm6Fu6+dPADiQ:PKnR3PPyH3QqG8lp+1jgsA", "UBTConnect", "Directory_EntityDetailsActionsOnChange_Bookmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hi5GMxAQukCGX934_tMlcg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qjDb8jrHtUCU56MVL8jx9A", callContext.id);
// LocalIsBookmarked = isBookmarked
model.variables.localIsBookmarkedVar = vars.value.isBookmarkedInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HMKXPuICZ0mxS_rQpBuxjg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FeNoQCZ5yEm6Fu6+dPADiQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.Directory_EntityDetailsActionsOnChange_Bookmark$vars", [{
name: "isBookmarked",
attrName: "isBookmarkedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8fZum_X55USNzAtumVuYwA:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.iiryIbbwtESYDjJie7WGXw/ClientActions.8fZum_X55USNzAtumVuYwA:2BFLpitX4LAPy5g2NJjAVQ", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JCX6XQ0l5kCIuwUBtVJsDA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OP9ZJQTn0kmx4hrgpoxG4w", callContext.id) && model.variables.isRestoredFromCacheIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jYc5TIFQF0SW7sUJwXan8w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SvPp_0tjhku8tf006KZaQw", callContext.id);
// Selected_OneschoolGlobal_SubsectionId = Type_OneschoolGlobal_SubsectionId.UpcomingEvents
model.variables.selected_OneschoolGlobal_SubsectionIdVar = model.variables.type_OneschoolGlobal_SubsectionIdVar.upcomingEventsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0cqgmw8j0kqE18lqvWiuRg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8fZum_X55USNzAtumVuYwA", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:c1nX+bsPBEafCT8TxYkdTg:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.iiryIbbwtESYDjJie7WGXw/ClientActions.c1nX+bsPBEafCT8TxYkdTg:fbDoXxlMk_Szu7jQFkkkTA", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e6ulSeDF8ku9icghSjNysw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Xm+Ni4kCHEyrah5ZToLyqw", callContext.id);
// Execute Action: OnReady
return controller._onReady$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IoiRTUQ43EGwbhRNgOe3Zw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:c1nX+bsPBEafCT8TxYkdTg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:c1nX+bsPBEafCT8TxYkdTg", callContext.id);
throw ex;

});
};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.directory_EntityDetailsActionsOnChange_Bookmark$Action = function (isBookmarkedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._directory_EntityDetailsActionsOnChange_Bookmark$Action, callContext, isBookmarkedIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ:61tRPbddoF5C2aoWKab8HA", "UBTConnect", "Directory_OneSchoolGlobal", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:iiryIbbwtESYDjJie7WGXw:/NRWebFlows.3J4QFNDNrkSZEJPtQ2GNEQ/NodesShownInESpaceTree.iiryIbbwtESYDjJie7WGXw:yMazi505dLi2dASYK3CqhA", "UBTConnect", "OneSchoolGlobalDetails_Block", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:iiryIbbwtESYDjJie7WGXw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3J4QFNDNrkSZEJPtQ2GNEQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Y59SR7+VZUWeFqsVYl_j0w": {
getter: function (varBag, idService) {
return varBag.getSkeleton_UI_OneSchoolGlobal_DetailCardVar.value;
}
},
"dy+iXKJ2skKuZy4w9iynfg": {
getter: function (varBag, idService) {
return varBag.get_LookupSectionVar.value;
}
},
"yx4TNUZHfkKuM0KlrVkmXw": {
getter: function (varBag, idService) {
return varBag.vars.value.isBookmarkedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"X5Mo_gIUfkuGBlkoFUiKzQ": {
getter: function (varBag, idService) {
return varBag.model.variables.lookupSectionsVar;
}
},
"XBECvFtQg06_HWLB0QOEfQ": {
getter: function (varBag, idService) {
return varBag.model.variables.selected_OneschoolGlobal_SubsectionIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"v0+m0TDeVEOkKX1zmg8lKw": {
getter: function (varBag, idService) {
return varBag.model.variables.type_OneschoolGlobal_SubsectionIdVar;
}
},
"BNEE92yFSkqZDpoEIyve_A": {
getter: function (varBag, idService) {
return varBag.model.variables.localIsBookmarkedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"mFq4Y748mEaPR5rj+rXVkQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OneSchoolGlobalIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"5tdXisfGjUGrCWS6hDIVyg": {
getter: function (varBag, idService) {
return varBag.model.variables.isRestoredFromCacheIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4QFaTGudvUeqjGr8spFWxQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getOneSchoolGlobalDetailsDataAct;
}
},
"Ve9E_0ou7ka_9s6Nuu1KCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DetailCard"));
})(varBag.model, idService);
}
},
"uVa48yjEhUGXce9LfaqJsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"9ZSn6nGT_E61uW4PTVe2PQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LazyImage_Placeholder"));
})(varBag.model, idService);
}
},
"bFGQw8rIp0WbIsalKvFm3A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ImageTag"));
})(varBag.model, idService);
}
},
"fy7b4MEMIEyh03TyyoTZSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AvatarList"));
})(varBag.model, idService);
}
},
"nKEOB2vNB0CYC1nzbZBx6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"HNGgMRNYiUe_DRxK6xBVRA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TopSectionContent"));
})(varBag.model, idService);
}
},
"LwkVFQrG30yFgIzAUnkT1Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomSectionContent"));
})(varBag.model, idService);
}
},
"E7WyVBrwmE6Z1lDOo9nQ+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Me1HKrFFCUOqKw57Xe4o+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CallToAction"));
})(varBag.model, idService);
}
},
"h8GLgvKF0UidoEA9o7_1yA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"w8qgm7k6a0myAQwmNJlXLw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"ua1bmhe2l0SZpgi_RdgrzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"K43IX_Stb0iv8YqxKXYuow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasStudentInformationPermission"));
})(varBag.model, idService);
}
},
"jnx1BeJ_Z02xYQEYlKSktA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_StudentNumbers"));
})(varBag.model, idService);
}
},
"xheJ_N96M0yvSKTMbCqnOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"bAs8F+ymnEW57Jfk0GJ2rA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"iGS4skmgCEqWTVQixcvdJA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"+EIv8kQ5iUGe72w1pt8Yog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ohc4h+e7oE6+i+58oA4xgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"_tUJhDf9+kC5SNncm+MJCw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ComingSoon"));
})(varBag.model, idService);
}
},
"HzqHSeOlmUaME8DUvlSLhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_ButtonGroup"));
})(varBag.model, idService);
}
},
"nHQKnbpHfUClZPBsxFnVDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"vZcqDqdCbk2J3qsY4oDwXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"6SYblKGgZUCWDk3wiUoVng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroup1"));
})(varBag.model, idService);
}
},
"i1_SoL5nQUaaCr2y55QO_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem1"));
})(varBag.model, idService);
}
},
"8uRD7eYnFUel1YuYOoHk8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroupItem2"));
})(varBag.model, idService);
}
},
"jNhrbzSLXUeA6NYbBuVEhg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"VNpzMM5MgUmJQNjoKfppzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"dbQ+q4KpW02L_HCiO2i1Ew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ComingSoon4"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
