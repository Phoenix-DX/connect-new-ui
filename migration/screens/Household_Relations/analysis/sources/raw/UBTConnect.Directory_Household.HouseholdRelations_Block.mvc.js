define("UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Household_CS.model", "UBTConnect_Utils.controller", "UBTConnect.controller", "APIDomain_Directory_IS.model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnect_Utils.CW_Common.Button.mvc$model", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.MemberRelation_ListItem.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$model", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdMemberList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$HasAccessToRegion", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.controller$GetUserInformation_Wrapper"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Household_CSModel, UBTConnect_UtilsController, UBTConnectController, APIDomain_Directory_ISModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnect_Utils_CW_Common_Button_mvcModel, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel, UBTConnectLibrary_ConnectCorePatterns_MemberRelation_ListItem_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvcModel, UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel) {
var OS = OutSystems.Internal;

var Get_ParentHouseholdDetailsDataActRec = (function (_super) {
__extends(Get_ParentHouseholdDetailsDataActRec, _super);
function Get_ParentHouseholdDetailsDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_ParentHouseholdDetailsDataActRec.attributesToDeclare = function () {
return [
this.attr("Out_siblingRelations", "out_siblingRelationsOut", "Out_siblingRelations", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdMemberList());
}, true, UBTConnectModel.UI_HouseholdMemberList)
].concat(_super.attributesToDeclare.call(this));
};
Get_ParentHouseholdDetailsDataActRec.fromStructure = function (str) {
return new Get_ParentHouseholdDetailsDataActRec(new Get_ParentHouseholdDetailsDataActRec.RecordClass({
out_siblingRelationsOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_ParentHouseholdDetailsDataActRec.init();
return Get_ParentHouseholdDetailsDataActRec;
})(OS.Model.DataSourceRecord);
var FetchNotesDataActRec = (function (_super) {
__extends(FetchNotesDataActRec, _super);
function FetchNotesDataActRec(defaults) {
_super.apply(this, arguments);
}
FetchNotesDataActRec.attributesToDeclare = function () {
return [
this.attr("Notes", "notesOut", "Notes", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
}, true, UBTConnectLibraryModel.NotesRec)
].concat(_super.attributesToDeclare.call(this));
};
FetchNotesDataActRec.fromStructure = function (str) {
return new FetchNotesDataActRec(new FetchNotesDataActRec.RecordClass({
notesOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FetchNotesDataActRec.init();
return FetchNotesDataActRec;
})(OS.Model.DataSourceRecord);
var Get_MemberDetailsDataActRec = (function (_super) {
__extends(Get_MemberDetailsDataActRec, _super);
function Get_MemberDetailsDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_MemberDetailsDataActRec.attributesToDeclare = function () {
return [
this.attr("MemberName", "memberNameOut", "MemberName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyName", "familyNameOut", "FamilyName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Father", "fatherOut", "Father", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMemberRec());
}, true, Connect_Household_CSModel.UI_HouseholdMemberRec), 
this.attr("Mother", "motherOut", "Mother", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMemberRec());
}, true, Connect_Household_CSModel.UI_HouseholdMemberRec), 
this.attr("FormerSpouses", "formerSpousesOut", "FormerSpouses", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdMemberList());
}, true, UBTConnectModel.UI_HouseholdMemberList), 
this.attr("ParentHouseholdId", "parentHouseholdIdOut", "ParentHouseholdId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsMemberDeceased", "isMemberDeceasedOut", "IsMemberDeceased", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Get_MemberDetailsDataActRec.init();
return Get_MemberDetailsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UserAge_Visibility", "userAge_VisibilityVar", "UserAge_Visibility", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("ShowNotesSheet", "showNotesSheetVar", "ShowNotesSheet", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HouseholdId", "householdIdIn", "HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MemberId", "memberIdIn", "MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_memberIdInDataFetchStatus", "_memberIdInDataFetchStatus", "_memberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Get_ParentHouseholdDetails", "get_ParentHouseholdDetailsDataAct", "get_ParentHouseholdDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_ParentHouseholdDetailsDataActRec());
}, true, Get_ParentHouseholdDetailsDataActRec), 
this.attr("FetchNotes", "fetchNotesDataAct", "fetchNotesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FetchNotesDataActRec());
}, true, FetchNotesDataActRec), 
this.attr("Get_MemberDetails", "get_MemberDetailsDataAct", "get_MemberDetailsDataAct", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_MemberDetailsDataActRec());
}, true, Get_MemberDetailsDataActRec)
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
Model._hasValidationWidgetsValue = ((((((((((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Common_Button_mvcModel.hasValidationWidgets) || UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_MemberRelation_ListItem_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("HouseholdId" in inputs) {
this.variables.householdIdIn = inputs.HouseholdId;
if("_householdIdInDataFetchStatus" in inputs) {
this.variables._householdIdInDataFetchStatus = inputs._householdIdInDataFetchStatus;
}

}

if("MemberId" in inputs) {
this.variables.memberIdIn = inputs.MemberId;
if("_memberIdInDataFetchStatus" in inputs) {
this.variables._memberIdInDataFetchStatus = inputs._memberIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Household.HouseholdRelations_Block");
});
define("UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$model", "UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.MemberRelation_ListItem.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$view", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdMemberList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$HasAccessToRegion", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.controller$GetUserInformation_Wrapper"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, UBTConnect_UtilsController, APIDomain_Directory_ISModel, React, OSView, UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_model, UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnectLibrary_ConnectCorePatterns_MemberRelation_ListItem_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view) {
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
        View.displayName = "Directory_Household.HouseholdRelations_Block";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnectLibrary_ConnectCorePatterns_MemberRelation_ListItem_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: (!(model.variables.get_MemberDetailsDataAct.isDataFetchedAttr) && !(model.variables.get_MemberDetailsDataAct.hasFetchErrorAttr))
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
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("FMUap_srnUWGua9QOHkEMw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("5r6GdPbzs0Gb0gjDq+X4SA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.memberIdIn),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._memberIdInDataFetchStatus),
ImageSize: model.getCachedValue(idService.getId("W8i9zVC_g0+p5Lj_7AuIYQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.extraLarge_100;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._memberIdInDataFetchStatus), asPrimitiveValue(model.variables.memberIdIn)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("wtWGU3kfEEqIwHwhs6HMhA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.baseline;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("TWXmgkFKO0KXJmZ6Qwe8IA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.get_MemberDetailsDataAct.memberNameOut,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr)
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
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.memberNameOut)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.memberNameOut), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._memberIdInDataFetchStatus), asPrimitiveValue(model.variables.memberIdIn)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Buttons.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
name: "Buttons",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("xfHj2smrkkOVTCShIzbNdQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
inputs: {
ButtonOptions: model.getCachedValue(idService.getId("ak2gOrJzRUqrtMTTsZ0HRQ.ButtonOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.small;
rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.scondary;
return rec;
}();
}),
IconId: UBTConnectModel.staticEntities.uBT_Icons2.tooltip,
IsDisabled: model.variables.get_MemberDetailsDataAct.isMemberDeceasedOut,
_isDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
ButtonText: "Notes",
IconText_SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small
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
return controller.handler_AddNotes$Action(controller.callContext(eventHandlerContext));
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
uuid: "8",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
inputs: {
ButtonOptions: model.getCachedValue(idService.getId("2vkX3bLhCUm5dCohWt8V1w.ButtonOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.small;
rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.primary;
return rec;
}();
}),
IconId: UBTConnectModel.staticEntities.uBT_Icons2.bookmark,
IsDisabled: true,
ButtonText: "Bookmark",
IconText_SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small
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
controller.onClick_Bookmark$Action(controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.isMemberDeceasedOut)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.isMemberDeceasedOut)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.isMemberDeceasedOut), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.memberNameOut), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._memberIdInDataFetchStatus), asPrimitiveValue(model.variables.memberIdIn)]
}), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: model.variables.isLoadingVar
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
uuid: "10",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [$if(((((!(model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) || !(model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) || !(model.variables.get_MemberDetailsDataAct.formerSpousesOut.isEmpty)) || !(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.isEmpty)) || model.variables.isLoadingVar), false, this, function () {
return [React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
inputs: {
In_PaddingBottom: UBTConnectModel.staticEntities.uBT_Size.base,
In_Title: "Relations",
In_PaddingTop: UBTConnectModel.staticEntities.uBT_Size.small
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
name: "Relations",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_SectionContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("FF9_Lu0F_EGGzKHX4p29rQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "12",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(!(model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0))), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_MemberRelation_ListItem_mvc_view, {
inputs: {
isEnabled: true,
In_DeceasedCaption: model.variables.get_MemberDetailsDataAct.fatherOut.lifeCycleTextAttr,
_in_DeceasedCaptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_Relation: "Father",
In_Title: model.variables.get_MemberDetailsDataAct.fatherOut.titleAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_FormattedLocality: model.variables.get_MemberDetailsDataAct.fatherOut.formattedLocalityAttr,
_in_FormattedLocalityInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_IsDeceased: model.variables.get_MemberDetailsDataAct.fatherOut.isDeceasedAttr,
_in_IsDeceasedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickPerson$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/MemberRelation_ListItem OnClickPerson");
return controller.onClick_Member$Action(model.variables.get_MemberDetailsDataAct.fatherOut.localityNameAttr, model.variables.get_MemberDetailsDataAct.fatherOut.countryNameAttr, model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr, false, controller.callContext(eventHandlerContext));
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
uuid: "13",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.get_MemberDetailsDataAct.fatherOut.idAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
ImageSize: model.getCachedValue(idService.getId("iqzlt36isk6umBNPxWQJWQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
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
uuid: "14",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
actions: new PlaceholderContent(function () {
return [$if(model.variables.get_MemberDetailsDataAct.fatherOut.hasNavigationAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("fYBDjxFDtEuDgQVXyRs6hg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
return rec;
}();
rec.heightOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
return rec;
}();
rec.widthOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
rec.minAttr = "100";
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
uuid: "16",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral4
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
return controller.onClick_Member$Action(model.variables.get_MemberDetailsDataAct.fatherOut.localityNameAttr, model.variables.get_MemberDetailsDataAct.fatherOut.countryNameAttr, model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr, false, controller.callContext(eventHandlerContext));
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
uuid: "17",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.localityNameAttr)]
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.idAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectCorePatterns_MemberRelation_ListItem_mvc_view, {
inputs: {
In_DeceasedCaption: model.variables.get_MemberDetailsDataAct.motherOut.lifeCycleTextAttr,
_in_DeceasedCaptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_Title: model.variables.get_MemberDetailsDataAct.motherOut.titleAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
isEnabled: true,
In_IsDeceased: model.variables.get_MemberDetailsDataAct.motherOut.isDeceasedAttr,
_in_IsDeceasedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_FormattedLocality: model.variables.get_MemberDetailsDataAct.motherOut.formattedLocalityAttr,
_in_FormattedLocalityInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_Relation: "Mother"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickPerson$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/MemberRelation_ListItem OnClickPerson");
return controller.onClick_Member$Action(model.variables.get_MemberDetailsDataAct.motherOut.localityNameAttr, model.variables.get_MemberDetailsDataAct.motherOut.countryNameAttr, model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr, false, controller.callContext(eventHandlerContext));
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
uuid: "19",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.get_MemberDetailsDataAct.motherOut.idAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
ImageSize: model.getCachedValue(idService.getId("Jz6zn2GE60OkeOcZdPYr7A.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
return rec;
}();
}),
EntityType: UBTConnectModel.staticEntities.connect_Entity.member
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
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
actions: new PlaceholderContent(function () {
return [$if(model.variables.get_MemberDetailsDataAct.motherOut.hasNavigationAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("N6SWP2Rh4EKyk_toI_PoVg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
return rec;
}();
rec.heightOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
return rec;
}();
rec.widthOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
rec.minAttr = "100";
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
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral4,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight
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
return controller.onClick_Member$Action(model.variables.get_MemberDetailsDataAct.motherOut.localityNameAttr, model.variables.get_MemberDetailsDataAct.motherOut.countryNameAttr, model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr, false, controller.callContext(eventHandlerContext));
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
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.localityNameAttr)]
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.idAttr)]
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-s",
visible: true,
_idProps: {
service: idService,
name: "Previous_Spouses"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.get_MemberDetailsDataAct.formerSpousesOut,
style: "list list-group list--gap-s",
tag: "div",
_idProps: {
service: idService,
name: "PreviousSpouses"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_MemberRelation_ListItem_mvc_view, {
inputs: {
isEnabled: true,
In_IsDeceased: model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).isDeceasedAttr,
_in_IsDeceasedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_Relation: "Previous spouse",
In_FormattedLocality: model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).formattedLocalityAttr,
_in_FormattedLocalityInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_DeceasedCaption: model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).lifeCycleTextAttr,
_in_DeceasedCaptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr),
In_Title: model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).titleAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickPerson$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/MemberRelation_ListItem OnClickPerson");
return controller.onClick_Member$Action(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).localityNameAttr, model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).countryNameAttr, model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).householdIdAttr, false, controller.callContext(eventHandlerContext));
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
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
ImageSize: model.getCachedValue(idService.getId("sURey6mpXUeS9bYFJDM6gQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
return rec;
}();
}),
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).idAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr)
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
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
actions: new PlaceholderContent(function () {
return [$if((model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).hasNavigationAttr && !(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).householdIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0)))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column justify-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("F86qkHmjKUC78zu5J1Pi0A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
return rec;
}();
rec.heightOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
return rec;
}();
rec.widthOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
rec.minAttr = "100";
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
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral4,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight
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
return controller.onClick_Member$Action(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).localityNameAttr, model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).countryNameAttr, model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).householdIdAttr, false, controller.callContext(eventHandlerContext));
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
uuid: "30",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).localityNameAttr)]
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut.getCurrent(callContext.iterationContext).idAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.idAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.formattedLocalityAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.isDeceasedAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.titleAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.lifeCycleTextAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.idAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.isDeceasedAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.formattedLocalityAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.titleAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.lifeCycleTextAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.idAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.formattedLocalityAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.isDeceasedAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.titleAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.lifeCycleTextAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.idAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.isDeceasedAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.formattedLocalityAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.titleAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.lifeCycleTextAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr)]
}), $if(!(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.isEmpty), false, this, function () {
return [React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
inputs: {
In_Title: "Household"
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
name: "Household",
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_SectionContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("q4xtgesyO0CIpKJta_T89w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
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
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut,
style: "list list-group list--gap-s",
tag: "div",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_view, {
inputs: {
isEnabled: true,
Title: model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr),
MarriedPartnerTakenText: model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).marriagePartnerTakenTextAttr,
_marriedPartnerTakenTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr),
DeceasedCaption: model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).lifeCycleTextAttr,
_deceasedCaptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr),
MarriedCaption: model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).marriageTextAttr,
_marriedCaptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr),
MarriageHighlightText: model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).marriageHighlightTextAttr,
_marriageHighlightTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr),
LifeCycleText_Italic: model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).lifeCycleText_IsItallicAttr,
_lifeCycleText_ItalicInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickPerson$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/NonMember_ListItem OnClickPerson");
return controller.onClick_Member$Action(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).localityNameAttr, model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).countryNameAttr, model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).householdIdAttr, false, controller.callContext(eventHandlerContext));
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
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).idAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr),
ImageSize: model.getCachedValue(idService.getId("cWy54V_Wk0SDuvSFhswIXQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
return rec;
}();
}),
EntityType: UBTConnectModel.staticEntities.connect_Entity.member
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
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
actions: new PlaceholderContent(function () {
return [$if(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).hasNavigationAttr, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Zfd53Ijx4EytvObW8Th34A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
return rec;
}();
rec.heightOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
return rec;
}();
rec.widthOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
rec.minAttr = "100";
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
uuid: "36",
alias: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral4,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight
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
return controller.onClick_Member$Action(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).localityNameAttr, model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).countryNameAttr, model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).householdIdAttr, false, controller.callContext(eventHandlerContext));
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
alias: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).householdIdAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).countryNameAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).localityNameAttr)]
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).householdIdAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).countryNameAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).localityNameAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).hasNavigationAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut.getCurrent(callContext.iterationContext).idAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut)]
})];
}, function () {
return [];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-right-base padding-left-base text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No relation or household information avaialble.")];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.formerSpousesOut), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.idAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.formattedLocalityAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.isDeceasedAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.titleAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.lifeCycleTextAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.hasNavigationAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.idAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.countryNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.localityNameAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.isDeceasedAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.formattedLocalityAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.titleAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.lifeCycleTextAttr), asPrimitiveValue(model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr)]
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view, {
inputs: {
In_NoteCategoryId: UBTConnectModel.staticEntities.noteCategory2.member,
In_ItemId: OS.BuiltinFunctions.longIntegerToText(model.variables.memberIdIn),
_in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._memberIdInDataFetchStatus),
In_Notes: model.variables.fetchNotesDataAct.notesOut,
_in_NotesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotesDataAct.dataFetchStatusAttr),
In_IsOpen: model.variables.showNotesSheetVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
on_NoteDeleted$Action: function (noteIdIn, wasLastNoteIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteDeleted");
controller.handler_OnNoteDeleted$Action(noteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
on_NotesChanged$Action: function (new_NotesIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NotesChanged");
controller.handler_OnNotesChanged$Action(new_NotesIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
on_NoteSheet_Closed$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteSheet_Closed");
controller.handler_OnNotesSheetClosed$Action(controller.callContext(eventHandlerContext));
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
uuid: "39",
alias: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$debugger", "UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdMemberList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$HasAccessToRegion", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.controller$GetUserInformation_Wrapper"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, UBTConnect_UtilsController, APIDomain_Directory_ISModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_Debugger, UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_ParentHouseholdDetails$DataActRefresh: -1,
fetchNotes$DataActRefresh: -1,
get_MemberDetails$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
get_ParentHouseholdDetails$DataActRefresh: [],
fetchNotes$DataActRefresh: [],
get_MemberDetails$DataActRefresh: ["get_ParentHouseholdDetails$DataActRefresh"]
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.get_ParentHouseholdDetails$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dgawMJ1jYk64gofwHuDqww:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/DataActions.dgawMJ1jYk64gofwHuDqww:uD2UjeGjvDxZU9Nr1fWlCw", "UBTConnect", "Get_ParentHouseholdDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdRelations_Block/Get_ParentHouseholdDetails");
return controller.callDataAction("DataActionGet_ParentHouseholdDetails", "screenservices/UBTConnect/Directory_Household/HouseholdRelations_Block/DataActionGet_ParentHouseholdDetails", "7SKq2VjVfcTQlo7CZz_ryA", function (b) {
model.variables.get_ParentHouseholdDetailsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_ParentHouseholdDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_ParentHouseholdDetailsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dgawMJ1jYk64gofwHuDqww", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.fetchNotes$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FmjUTAPX_EKjveHeO5NchA:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/DataActions.FmjUTAPX_EKjveHeO5NchA:S6JZxx7TlcznCyAhMx46sg", "UBTConnect", "FetchNotes", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdRelations_Block/FetchNotes");
return controller.callDataAction("DataActionFetchNotes", "screenservices/UBTConnect/Directory_Household/HouseholdRelations_Block/DataActionFetchNotes", "WH122zjVJs_kThBXLU+R_g", function (b) {
model.variables.fetchNotesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.fetchNotesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchNotesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FmjUTAPX_EKjveHeO5NchA", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.get_MemberDetails$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rSQDWkk4D0eHQZMEvY8MWw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/DataActions.rSQDWkk4D0eHQZMEvY8MWw:qA_R8_+e5jzz2L7GE2Turg", "UBTConnect", "Get_MemberDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdRelations_Block/Get_MemberDetails");
return controller.callDataAction("DataActionGet_MemberDetails", "screenservices/UBTConnect/Directory_Household/HouseholdRelations_Block/DataActionGet_MemberDetails", "1EncAAdPlQ4CugvrXXpVfQ", function (b) {
model.variables.get_MemberDetailsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_MemberDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_MemberDetailsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdRelations_Block/Get_MemberDetails On After Fetch");
return controller._onAfterFetch_Get_MemberDetails$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rSQDWkk4D0eHQZMEvY8MWw", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_ParentHouseholdDetails$DataActRefresh", "fetchNotes$DataActRefresh", "get_MemberDetails$DataActRefresh"];
// Client Actions
Controller.prototype._onAfterFetch_Get_MemberDetails$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_Get_MemberDetails");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KPFlFEl2TkSCvJB6I0k16w:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.KPFlFEl2TkSCvJB6I0k16w:6cBltcuIq0XEHXyRG0PlPg", "UBTConnect", "OnAfterFetch_Get_MemberDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2YOwis0YXUeHkUuQHImeVA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rb_YpoU9pEaAGB6jfxBGIA", callContext.id);
// Trigger Event: RelationsDetails_Fetched
return controller.relationsDetails_Fetched$Action(model.variables.get_MemberDetailsDataAct.familyNameOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:65oX0hC0L02bReTuLPsD+g", callContext.id);
// Refresh Query: Get_ParentHouseholdDetails
var result = controller.get_ParentHouseholdDetails$DataActRefresh(callContext);
model.flush();
return result;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:52xC7luRaEiqRiPw8NCFmQ", callContext.id);
// Execute Action: Actions_DefineLoading
controller._actions_DefineLoading$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UYzhLEEwWUKdQDdfrZeJeQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KPFlFEl2TkSCvJB6I0k16w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KPFlFEl2TkSCvJB6I0k16w", callContext.id);
throw ex;

});
};
Controller.prototype._actions_DefineLoading$Action = function (isRefreshIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Actions_DefineLoading");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.Actions_DefineLoading$vars"))());
vars.value.isRefreshInLocal = isRefreshIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gw7tFzhi8kmkl2n8je4vFQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.gw7tFzhi8kmkl2n8je4vFQ:p49MkIXsKqDrT_srlZOlfg", "UBTConnect", "Actions_DefineLoading", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uTW+F8XY206C36LeXj1jhQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X6YdgYMGRkueL3sxw9S0HA", callContext.id) && vars.value.isRefreshInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bmv_ETP5F0y_lzyxfZ3C7A", callContext.id);
// isLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KTFJGTtgpkasuE4U8oXZnw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SzLruRjlTkamBuRC_WfPPA", callContext.id);
// isLoading = notGet_ParentHouseholdDetails.IsDataFetched and notGet_ParentHouseholdDetails.HasFetchError and notGet_MemberDetails.IsDataFetched and notGet_MemberDetails.HasFetchError
model.variables.isLoadingVar = ((!(model.variables.get_ParentHouseholdDetailsDataAct.isDataFetchedAttr) && !(model.variables.get_ParentHouseholdDetailsDataAct.hasFetchErrorAttr)) && (!(model.variables.get_MemberDetailsDataAct.isDataFetchedAttr) && !(model.variables.get_MemberDetailsDataAct.hasFetchErrorAttr)));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m3YJazxM30akRrE9YtBqLw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gw7tFzhi8kmkl2n8je4vFQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.Actions_DefineLoading$vars", [{
name: "isRefresh",
attrName: "isRefreshInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_Bookmark$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Bookmark");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KfKcM49wo0Gojv83IFWAIQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.KfKcM49wo0Gojv83IFWAIQ:7g7z8dT8eAoTW1EOiSo0uA", "UBTConnect", "OnClick_Bookmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rFh4o9pid0K3WdZM4wUaCA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MPLuztUKbUKwLhZ8B31BQg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KfKcM49wo0Gojv83IFWAIQ", callContext.id);
}

};
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:woHaNTA0KUG3stXRDUSpaA:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.woHaNTA0KUG3stXRDUSpaA:1IMYyF17BOLcz0ZyuKJNEg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XoVYkUF00EaXNnEyDl4F6g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pGtu9xtRekeLqdSC6GM95g", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:isrJrobc10CjXnwuRaSZKQ", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dbJH5lNdgUCdAD8ZSSfA6g", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2ONqPiFFJ0KNe6WswiTI1A", callContext.id) && (model.variables.get_MemberDetailsDataAct.isDataFetchedAttr || model.variables.get_ParentHouseholdDetailsDataAct.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dbJH5lNdgUCdAD8ZSSfA6g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSU5+H0H+kKnCps717lCUQ", callContext.id);
// Get_MemberDetails.Father.Title = "Loading"
model.variables.get_MemberDetailsDataAct.fatherOut.titleAttr = "Loading";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSU5+H0H+kKnCps717lCUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Get_MemberDetails.Father.Id = -1
model.variables.get_MemberDetailsDataAct.fatherOut.idAttr = OS.BuiltinFunctions.integerToLongInteger(-1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSU5+H0H+kKnCps717lCUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Get_MemberDetails.Father.HouseholdId = -1
model.variables.get_MemberDetailsDataAct.fatherOut.householdIdAttr = OS.BuiltinFunctions.integerToLongInteger(-1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSU5+H0H+kKnCps717lCUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Get_MemberDetails.Mother.Title = "Loading"
model.variables.get_MemberDetailsDataAct.motherOut.titleAttr = "Loading";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSU5+H0H+kKnCps717lCUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Get_MemberDetails.Mother.Id = -1
model.variables.get_MemberDetailsDataAct.motherOut.idAttr = OS.BuiltinFunctions.integerToLongInteger(-1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSU5+H0H+kKnCps717lCUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Get_MemberDetails.Mother.HouseholdId = -1
model.variables.get_MemberDetailsDataAct.motherOut.householdIdAttr = OS.BuiltinFunctions.integerToLongInteger(-1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HxcmXXusAEaUwh2AkplrTw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut, function () {
var rec = new Connect_Household_CSModel.UI_HouseholdMemberRec();
rec.firstNameAttr = "Loading";
rec.memberRoleAttr = "";
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:792nWaXsak+sW1f7z7hamg", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(model.variables.get_ParentHouseholdDetailsDataAct.out_siblingRelationsOut, function () {
var rec = new Connect_Household_CSModel.UI_HouseholdMemberRec();
rec.firstNameAttr = "Loading";
rec.memberRoleAttr = "";
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eaziwHXnUE254Qq1V8L7Rw", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:woHaNTA0KUG3stXRDUSpaA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_OnNotesChanged$Action = function (new_NotesIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnNotesChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.Handler_OnNotesChanged$vars"))());
vars.value.new_NotesInLocal = new_NotesIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OqwrPTBc+0iFYEi8+Gt3PQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.OqwrPTBc+0iFYEi8+Gt3PQ:xzIoWclnLgB3upxe3mfQ_g", "UBTConnect", "Handler_OnNotesChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_z2sX6fUrku15voxmts2Rw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Spd2N8lpKUWXfETuzToHvg", callContext.id);
// FetchNotes.Notes = New_Notes
model.variables.fetchNotesDataAct.notesOut = vars.value.new_NotesInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z9U+qTCH3EyAgP7nxUNsPQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OqwrPTBc+0iFYEi8+Gt3PQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.Handler_OnNotesChanged$vars", [{
name: "New_Notes",
attrName: "new_NotesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.NotesRec();
},
complexType: UBTConnectLibraryModel.NotesRec
}]);
Controller.prototype._handler_AddNotes$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_AddNotes");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NgNWbN6TY0qIeewHgHRzKg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.NgNWbN6TY0qIeewHgHRzKg:PhNaLyGoX7IT_2US6iskcw", "UBTConnect", "Handler_AddNotes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_hZ5CB3WqEeDWJySz_2oGg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CrToLEkgFkiKnW4vzDA+8A", callContext.id);
// Refresh Query: FetchNotes
var result = controller.fetchNotes$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3Ols7rRInkGvvIRf_dxr1g", callContext.id);
// ShowNotesSheet = True
model.variables.showNotesSheetVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pDKK14mFi0eVDm5JNGVFCg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NgNWbN6TY0qIeewHgHRzKg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NgNWbN6TY0qIeewHgHRzKg", callContext.id);
throw ex;

});
};
Controller.prototype._handler_OnNotesSheetClosed$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnNotesSheetClosed");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IzTcfTAOm0ahkmiSDCoJzA:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.IzTcfTAOm0ahkmiSDCoJzA:f4ze3ilWmiRtEGYOL3Y59g", "UBTConnect", "Handler_OnNotesSheetClosed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iXxNnac1u0Wl3e+EY9AV1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9HD8j6Mf_k2ZicExjx4fzw", callContext.id);
// ShowNotesSheet = False
model.variables.showNotesSheetVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eYmAk8VXaE+bNoVVhmv+Lg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IzTcfTAOm0ahkmiSDCoJzA", callContext.id);
}

};
Controller.prototype._onClick_Member$Action = function (target_LocalityNameIn, target_CountryNameIn, target_HouseholdIdIn, target_IsDeceasedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Member");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.OnClick_Member$vars"))());
vars.value.target_LocalityNameInLocal = target_LocalityNameIn;
vars.value.target_CountryNameInLocal = target_CountryNameIn;
vars.value.target_HouseholdIdInLocal = target_HouseholdIdIn;
vars.value.target_IsDeceasedInLocal = target_IsDeceasedIn;
var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.hasAccessToRegionVar = hasAccessToRegionVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rjCAgLfmGEG_yFlJnZAX0w:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.rjCAgLfmGEG_yFlJnZAX0w:oPbL5tRhapLIqRqLPOpEwA", "UBTConnect", "OnClick_Member", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bE3p7U0ZkkCOQpgrn1HXBg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_Zxqk9c6d023zkDqS5PPwA", callContext.id) && vars.value.target_IsDeceasedInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:36UhPVS7LEyUmKMbNLFUlw", callContext.id);
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6vTdd9uunkqB19noypwv1Q", callContext.id) && vars.value.target_HouseholdIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GWRxp3jPnEO8ZDAviRr3uA", callContext.id);
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_1+hMRaUsEi4l2BVh31Tnw", callContext.id) && (vars.value.target_CountryNameInLocal === ""))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LcSDAkZC8U6Hjn1hgjQSlQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qk0UsNnVnEaJ4h6HTyc1tg", callContext.id);
// Execute Action: HasAccessToRegion
model.flush();
return UBTConnectController.default.hasAccessToRegion$Action(vars.value.target_LocalityNameInLocal, vars.value.target_CountryNameInLocal, callContext).then(function (value) {
hasAccessToRegionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v12FFnfeqk2TYhEBTvJlRQ", callContext.id) && hasAccessToRegionVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S28k_C9S7UO7tAQ77P3Q+A", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.target_HouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qDxDh3H03Ua7ldRqG4QbFw", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WZ3tx1zP6Ua7yVACAQKrOg", callContext.id);
});
}

});
});
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rjCAgLfmGEG_yFlJnZAX0w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rjCAgLfmGEG_yFlJnZAX0w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.OnClick_Member$vars", [{
name: "Target_LocalityName",
attrName: "target_LocalityNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Target_CountryName",
attrName: "target_CountryNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Target_HouseholdId",
attrName: "target_HouseholdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Target_IsDeceased",
attrName: "target_IsDeceasedInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._action_Refresh_Get_MemberDetails$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_Refresh_Get_MemberDetails");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ltj1lZKlCke6gT+OH2i75g:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.Ltj1lZKlCke6gT+OH2i75g:dmc5NlZzb_Yxy1JAq3th+Q", "UBTConnect", "Action_Refresh_Get_MemberDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mpQFfBcWCEKNIPJ4fnDihg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h5IMMnAPD0uvUIUSyqWGEA", callContext.id);
// Execute Action: Actions_DefineLoading
controller._actions_DefineLoading$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XcAcKQtnQEugHDJvhrfxGQ", callContext.id);
// Refresh Query: Get_MemberDetails
var result = controller.get_MemberDetails$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aFUJ7bhMUUWr7Fm2pZWdTA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ltj1lZKlCke6gT+OH2i75g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ltj1lZKlCke6gT+OH2i75g", callContext.id);
throw ex;

});
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
var getUserInformation_WrapperVar = new OS.DataTypes.VariableHolder();
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getUserInformation_WrapperVar = getUserInformation_WrapperVar;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CGbT0hnQdku1hm1ZeGlcww:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.CGbT0hnQdku1hm1ZeGlcww:va8Pj60oy_u3lPTr9Em3wQ", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7L50H6ybjEuDeQezczGKOA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o_pXD8HnNEGEfMciEyoW9Q", callContext.id);
// Execute Action: GetUserInformation_Wrapper
model.flush();
return UBTConnectController.default.getUserInformation_Wrapper$Action(callContext).then(function (value) {
getUserInformation_WrapperVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Pn8W8AfLVEC4xqtxGrWy5g", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
}).then(function () {
// Check if IsViewRestoredFromCache IsRestoredFromCache
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dyhhnd2g8kOaxWiLeYQiZg", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
// Visibility Has Changed
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WS_Gl0Vq2ESYgLS6QxRRmg", callContext.id) && !(((getUserInformation_WrapperVar.value.userInformationOut.directory_UserCurrent_VisibilityAttr.displayAgeAttr) !== (model.variables.userAge_VisibilityVar))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZMBkVp9u4UiIQlv+Z2jnFA", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iIEfwtnGQEyx_vo9GIdhWw", callContext.id);
// UserAge_Visibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge
model.variables.userAge_VisibilityVar = getUserInformation_WrapperVar.value.userInformationOut.directory_UserCurrent_VisibilityAttr.displayAgeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nSJXouWo8kqVOJJs3n0vcg", callContext.id);
// Execute Action: GetRelations
return controller._action_Refresh_Get_MemberDetails$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KQWFsU5bAEaTJk2K8HW2Pw", callContext.id);
});
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CGbT0hnQdku1hm1ZeGlcww", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CGbT0hnQdku1hm1ZeGlcww", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_OnNoteDeleted$Action = function (noteIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnNoteDeleted");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.Handler_OnNoteDeleted$vars"))());
vars.value.noteIdInLocal = noteIdIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8PTH_B6DO0awqSJf8md12Q:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA/ClientActions.8PTH_B6DO0awqSJf8md12Q:t31_xZVFdXl6IDoJEfAKug", "UBTConnect", "Handler_OnNoteDeleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1AqK5dr2SkCYLd5bIo3PnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nl6GmlqQmU+GY4K29oS9Ug", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.fetchNotesDataAct.notesOut.note_Item_ListAttr, function (p) {
return p.idAttr.equals(vars.value.noteIdInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CHjVeyZOa0+V8G4i+Cq9bQ", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9PzGSPSS3Uy0IPPCY78vSQ", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.fetchNotesDataAct.notesOut.note_Item_ListAttr, listIndexOfVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LnoTAZ_mX0ypIi_KrF7acw", callContext.id);
// FetchNotes.Notes.Total = FetchNotes.Notes.Note_Item_List.Length
model.variables.fetchNotesDataAct.notesOut.totalAttr = model.variables.fetchNotesDataAct.notesOut.note_Item_ListAttr.length;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F71gGNZlE0OWeDxNLYC7vA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iwZVC3LTxEu+yceZNbaBAQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8PTH_B6DO0awqSJf8md12Q", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdRelations_Block.Handler_OnNoteDeleted$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

Controller.prototype.onAfterFetch_Get_MemberDetails$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_Get_MemberDetails$Action, callContext);

};
Controller.prototype.actions_DefineLoading$Action = function (isRefreshIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actions_DefineLoading$Action, callContext, isRefreshIn);

};
Controller.prototype.onClick_Bookmark$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Bookmark$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.handler_OnNotesChanged$Action = function (new_NotesIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnNotesChanged$Action, callContext, new_NotesIn);

};
Controller.prototype.handler_AddNotes$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_AddNotes$Action, callContext);

};
Controller.prototype.handler_OnNotesSheetClosed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnNotesSheetClosed$Action, callContext);

};
Controller.prototype.onClick_Member$Action = function (target_LocalityNameIn, target_CountryNameIn, target_HouseholdIdIn, target_IsDeceasedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Member$Action, callContext, target_LocalityNameIn, target_CountryNameIn, target_HouseholdIdIn, target_IsDeceasedIn);

};
Controller.prototype.action_Refresh_Get_MemberDetails$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_Refresh_Get_MemberDetails$Action, callContext);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.handler_OnNoteDeleted$Action = function (noteIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnNoteDeleted$Action, callContext, noteIdIn);

};
Controller.prototype.relationsDetails_Fetched$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw:t9nDzAZAuYZJViBgLBCv_w", "UBTConnect", "Directory_Household", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:03nCiumGkkWi6gqhWUEGzA:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.03nCiumGkkWi6gqhWUEGzA:bPCfSsLenivnUGXsxainhw", "UBTConnect", "HouseholdRelations_Block", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:03nCiumGkkWi6gqhWUEGzA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdRelations_Block On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdRelations_Block On Ready");
return controller.screenEvent_OnReady$Action(callContext);

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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"XBzXmizTjUKkfckJvc7Q_Q": {
getter: function (varBag, idService) {
return varBag.vars.value.isRefreshInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pGtu9xtRekeLqdSC6GM95g": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"NJ93bGk2AEyEBxYsAjYcUA": {
getter: function (varBag, idService) {
return varBag.vars.value.new_NotesInLocal;
}
},
"zDsW+bYkHUG+WTDyBSBecg": {
getter: function (varBag, idService) {
return varBag.vars.value.target_LocalityNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5tx_LeHHA0yyV7Sn8Wyb_g": {
getter: function (varBag, idService) {
return varBag.vars.value.target_CountryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4ScjpEyMfECj0BPRhGM6Ng": {
getter: function (varBag, idService) {
return varBag.vars.value.target_HouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"dHnmhg4GqEq1jSZmvGnVNw": {
getter: function (varBag, idService) {
return varBag.vars.value.target_IsDeceasedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qk0UsNnVnEaJ4h6HTyc1tg": {
getter: function (varBag, idService) {
return varBag.hasAccessToRegionVar.value;
}
},
"o_pXD8HnNEGEfMciEyoW9Q": {
getter: function (varBag, idService) {
return varBag.getUserInformation_WrapperVar.value;
}
},
"Pn8W8AfLVEC4xqtxGrWy5g": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"aA5g1gU2vUSSs2y5zEb4ww": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Nl6GmlqQmU+GY4K29oS9Ug": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"BaWT30TjY0m5251Y17H04A": {
getter: function (varBag, idService) {
return varBag.model.variables.userAge_VisibilityVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BHqojKmQe0e8pG0w2zz7kw": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"MZBLR0s3Mk6qdpVVDhwN_g": {
getter: function (varBag, idService) {
return varBag.model.variables.showNotesSheetVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7Kr8mDyxlEO+k2yFygUzig": {
getter: function (varBag, idService) {
return varBag.model.variables.householdIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"fQ39uCbXKkapp_2JBepy7w": {
getter: function (varBag, idService) {
return varBag.model.variables.memberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"dgawMJ1jYk64gofwHuDqww": {
getter: function (varBag, idService) {
return varBag.model.variables.get_ParentHouseholdDetailsDataAct;
}
},
"FmjUTAPX_EKjveHeO5NchA": {
getter: function (varBag, idService) {
return varBag.model.variables.fetchNotesDataAct;
}
},
"rSQDWkk4D0eHQZMEvY8MWw": {
getter: function (varBag, idService) {
return varBag.model.variables.get_MemberDetailsDataAct;
}
},
"F14TdmHj00ae+ZKXwwL6yA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"5IJ_TVZ35ECsX704zklQMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ocj0vQK1GEeJeGLKMzrbwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Er61Hrg_HEOQQ+TwEd22KA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"J5kULQaJ9EGtPM9IT8RyVg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Buttons"));
})(varBag.model, idService);
}
},
"T77qKcDRh0+INIEGgpdBCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"gO1AJGTX8U+SrNASnFKkeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"0cCsJE+jwEatWk0BZQCjpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"7gx1K9WYkUWWSwL_RvKaVQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"+5kKF8q7NkmosCShMUB+DA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Relations2"));
})(varBag.model, idService);
}
},
"yuplDLtnsECh5Fb8fyAZYQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Relations"));
})(varBag.model, idService);
}
},
"V4sXLzp2tEWgFfANBrC8lA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_SectionContent"));
})(varBag.model, idService);
}
},
"eWElDTmeBEekqWHo0sYAiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YwuFBeG8wEmuVhNShqWCgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasFather"));
})(varBag.model, idService);
}
},
"oftCCFzc5UaXBu35Ly_6uA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Left"));
})(varBag.model, idService);
}
},
"mhxuC9tZhkq7Y+6IM6xGNw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"DBBeWePqt0eTsuRefpr1Dg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"V3AI_Vx2b0WsJxmpctEl+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasMother"));
})(varBag.model, idService);
}
},
"4U6jOy4X4kW5ECdqjQxHUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Left"));
})(varBag.model, idService);
}
},
"U_YPTBg0l0qFuetU3xorqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"8zo+NThXwUCvoREfrDp5mQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YtnVIU8hlU2DUzH6fvKesA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Previous_Spouses"));
})(varBag.model, idService);
}
},
"P_PnYU4ChE2lYpqI4qYZdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PreviousSpouses"));
})(varBag.model, idService);
}
},
"Pgg26PtufEuOizNEtYpgBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Left"));
})(varBag.model, idService);
}
},
"ZZnxAND6SkSAx3fsHXo2Hg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"wQDsFj+PT0iUnSfvhyeWnw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ScwYVzlL+kansmBvpojmHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Household2"));
})(varBag.model, idService);
}
},
"p1H2R8H1hUK4Ox0RzTIZ2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Household"));
})(varBag.model, idService);
}
},
"6r011VqOGEujurxMhWPMMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_SectionContent"));
})(varBag.model, idService);
}
},
"UaFeljSuLEKAhRBMTa5mRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"3hKZM7XjxEOfRr+YK6hPCw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Left"));
})(varBag.model, idService);
}
},
"nX+twoEo4EGUSgVHH7VHQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"Q+JvIXMJRkCIJ01BsPu5HA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"W3xttfBWD0GvfaQ_sucM3A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
