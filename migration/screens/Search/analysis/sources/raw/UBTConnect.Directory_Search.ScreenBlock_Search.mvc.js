define("UBTConnect.Directory_Search.ScreenBlock_Search.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_CommonEntities_DB.model", "Connect_Search_CS.model", "UBTConnect.controller", "UBTJavaScriptUtils.controller", "UBTConnect.entities", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$model", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.Directory_Search.Search_BirthdayOptions.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.Directory_Search.SearchResult_Section.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect_CommonEntities_DB.model$Connect_SearchBirthdayOptionsRec", "UBTConnect.referencesHealth$Connect_CommonEntities_DB", "UBTConnect.model$Connect_SearchBirthdayOptionsList", "Connect_Search_CS.model$SearchResultRec", "UBTConnect.referencesHealth$Connect_Search_CS", "UBTConnect.model$SearchResultList", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.controller$ValidateSearchPhoneNumber", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$ConnectSearch_RecentSearchTermRecord", "UBTConnect.model$ConnectSearch_RecentSearchTermRecordList", "UBTConnect.model$ConnectSearch_RecentSearchTermRec", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecord", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.model$LongIntegerBooleanRecordList", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecordList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$ConnectSearch_RecentClickedResultsRec", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck", "UBTConnect_Utils.model$SearchCategory_ItemRec", "UBTConnect.model$SearchCategory_ItemList", "UBTConnect_Utils.controller$SearchCategory_GetList", "UBTConnect.model$Connect_SearchBirthdayOptionsRecordList"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_CommonEntities_DBModel, Connect_Search_CSModel, UBTConnectController, UBTJavaScriptUtilsController, UBTConnectEntities, UBTConnect_UtilsController, NavigationHandlerController, UBTConnect_UtilsModel, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel, UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, OutSystemsUI_2_23_Adaptive_Gallery_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_Directory_Search_Search_BirthdayOptions_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Directory_Search_SearchResult_Section_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel) {
var OS = OutSystems.Internal;
var Get_RecentClickedResultsAggrRec = (function (_super) {
__extends(Get_RecentClickedResultsAggrRec, _super);
function Get_RecentClickedResultsAggrRec(defaults) {
_super.apply(this, arguments);
}
Get_RecentClickedResultsAggrRec.RecordListType = UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList;
Get_RecentClickedResultsAggrRec.init();
return Get_RecentClickedResultsAggrRec;
})(OS.Model.AggregateRecord);
var Get_RecentSearchTermsAggrRec = (function (_super) {
__extends(Get_RecentSearchTermsAggrRec, _super);
function Get_RecentSearchTermsAggrRec(defaults) {
_super.apply(this, arguments);
}
Get_RecentSearchTermsAggrRec.RecordListType = UBTConnectModel.ConnectSearch_RecentSearchTermRecordList;
Get_RecentSearchTermsAggrRec.init();
return Get_RecentSearchTermsAggrRec;
})(OS.Model.AggregateRecord);
var Get_SearchBirthdayOptionsAggrRec = (function (_super) {
__extends(Get_SearchBirthdayOptionsAggrRec, _super);
function Get_SearchBirthdayOptionsAggrRec(defaults) {
_super.apply(this, arguments);
}
Get_SearchBirthdayOptionsAggrRec.RecordListType = UBTConnectModel.Connect_SearchBirthdayOptionsRecordList;
Get_SearchBirthdayOptionsAggrRec.init();
return Get_SearchBirthdayOptionsAggrRec;
})(OS.Model.AggregateRecord);

var FetchSearchResultsDataActRec = (function (_super) {
__extends(FetchSearchResultsDataActRec, _super);
function FetchSearchResultsDataActRec(defaults) {
_super.apply(this, arguments);
}
FetchSearchResultsDataActRec.attributesToDeclare = function () {
return [
this.attr("Households", "householdsOut", "Households", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SearchResultList());
}, true, UBTConnectModel.SearchResultList), 
this.attr("People", "peopleOut", "People", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SearchResultList());
}, true, UBTConnectModel.SearchResultList), 
this.attr("Places", "placesOut", "Places", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SearchResultList());
}, true, UBTConnectModel.SearchResultList)
].concat(_super.attributesToDeclare.call(this));
};
FetchSearchResultsDataActRec.init();
return FetchSearchResultsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SearchKey_Current", "searchKey_CurrentVar", "SearchKey_Current", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SearchKey_LastSearched", "searchKey_LastSearchedVar", "SearchKey_LastSearched", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("HasSearched", "hasSearchedVar", "HasSearched", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("TagList", "tagListVar", "TagList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TagList());
}, false, UBTConnectModel.TagList), 
this.attr("SelectedCategory", "selectedCategoryVar", "SelectedCategory", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectModel.staticEntities.connect_SearchCategories.all;
}, false), 
this.attr("SelectedCountryIds", "selectedCountryIdsVar", "SelectedCountryIds", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_Filter", "bottomSheetId_FilterVar", "BottomSheetId_Filter", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("HasFiltersApplied", "hasFiltersAppliedVar", "HasFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasPeople", "hasPeopleVar", "HasPeople", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasHouseholds", "hasHouseholdsVar", "HasHouseholds", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasPlaces", "hasPlacesVar", "HasPlaces", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("isBirthdayKeyWord", "isBirthdayKeyWordVar", "isBirthdayKeyWord", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("isBirthdaySearchEnabled", "isBirthdaySearchEnabledVar", "isBirthdaySearchEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_Filter_IsLoaded", "bottomSheetId_Filter_IsLoadedVar", "BottomSheetId_Filter_IsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_Filter_ShowSubscriptionOnClick", "bottomSheetId_Filter_ShowSubscriptionOnClickVar", "BottomSheetId_Filter_ShowSubscriptionOnClick", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_IsInScreenSearch", "in_IsInScreenSearchIn", "In_IsInScreenSearch", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsInScreenSearchInDataFetchStatus", "_in_IsInScreenSearchInDataFetchStatus", "_in_IsInScreenSearchInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsEventNavigation", "in_IsEventNavigationIn", "In_IsEventNavigation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsEventNavigationInDataFetchStatus", "_in_IsEventNavigationInDataFetchStatus", "_in_IsEventNavigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SearchTargetId", "in_SearchTargetIdIn", "In_SearchTargetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectModel.staticEntities.type_SearchTarget.global;
}, false), 
this.attr("_in_SearchTargetIdInDataFetchStatus", "_in_SearchTargetIdInDataFetchStatus", "_in_SearchTargetIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Get_RecentClickedResults", "get_RecentClickedResultsAggr", "get_RecentClickedResultsAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_RecentClickedResultsAggrRec());
}, true, Get_RecentClickedResultsAggrRec), 
this.attr("Get_RecentSearchTerms", "get_RecentSearchTermsAggr", "get_RecentSearchTermsAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_RecentSearchTermsAggrRec());
}, true, Get_RecentSearchTermsAggrRec), 
this.attr("Get_SearchBirthdayOptions", "get_SearchBirthdayOptionsAggr", "get_SearchBirthdayOptionsAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_SearchBirthdayOptionsAggrRec());
}, true, Get_SearchBirthdayOptionsAggrRec), 
this.attr("FetchSearchResults", "fetchSearchResultsDataAct", "fetchSearchResultsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FetchSearchResultsDataActRec());
}, true, FetchSearchResultsDataActRec)
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
Model._hasValidationWidgetsValue = (((((((((((((((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Adaptive_Gallery_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Search_Search_BirthdayOptions_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Search_SearchResult_Section_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsInScreenSearch" in inputs) {
this.variables.in_IsInScreenSearchIn = inputs.In_IsInScreenSearch;
if("_in_IsInScreenSearchInDataFetchStatus" in inputs) {
this.variables._in_IsInScreenSearchInDataFetchStatus = inputs._in_IsInScreenSearchInDataFetchStatus;
}

}

if("In_IsEventNavigation" in inputs) {
this.variables.in_IsEventNavigationIn = inputs.In_IsEventNavigation;
if("_in_IsEventNavigationInDataFetchStatus" in inputs) {
this.variables._in_IsEventNavigationInDataFetchStatus = inputs._in_IsEventNavigationInDataFetchStatus;
}

}

if("In_SearchTargetId" in inputs) {
this.variables.in_SearchTargetIdIn = inputs.In_SearchTargetId;
if("_in_SearchTargetIdInDataFetchStatus" in inputs) {
this.variables._in_SearchTargetIdInDataFetchStatus = inputs._in_SearchTargetIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Search.ScreenBlock_Search");
});
define("UBTConnect.Directory_Search.ScreenBlock_Search.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_CommonEntities_DB.model", "Connect_Search_CS.model", "UBTJavaScriptUtils.controller", "UBTConnect.entities", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect_Utils.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Search.ScreenBlock_Search.mvc$model", "UBTConnect.Directory_Search.ScreenBlock_Search.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$view", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.Directory_Search.Search_BirthdayOptions.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect.Directory_Search.SearchResult_Section.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$view", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect_CommonEntities_DB.model$Connect_SearchBirthdayOptionsRec", "UBTConnect.referencesHealth$Connect_CommonEntities_DB", "UBTConnect.model$Connect_SearchBirthdayOptionsList", "Connect_Search_CS.model$SearchResultRec", "UBTConnect.referencesHealth$Connect_Search_CS", "UBTConnect.model$SearchResultList", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.controller$ValidateSearchPhoneNumber", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$ConnectSearch_RecentSearchTermRecord", "UBTConnect.model$ConnectSearch_RecentSearchTermRecordList", "UBTConnect.model$ConnectSearch_RecentSearchTermRec", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecord", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.model$LongIntegerBooleanRecordList", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecordList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$ConnectSearch_RecentClickedResultsRec", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck", "UBTConnect_Utils.model$SearchCategory_ItemRec", "UBTConnect.model$SearchCategory_ItemList", "UBTConnect_Utils.controller$SearchCategory_GetList", "UBTConnect.model$Connect_SearchBirthdayOptionsRecordList"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_CommonEntities_DBModel, Connect_Search_CSModel, UBTJavaScriptUtilsController, UBTConnectEntities, UBTConnect_UtilsController, NavigationHandlerController, UBTConnect_UtilsModel, React, OSView, UBTConnect_Directory_Search_ScreenBlock_Search_mvc_model, UBTConnect_Directory_Search_ScreenBlock_Search_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_Search_Search_BirthdayOptions_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Search_SearchResult_Section_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view) {
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
        View.displayName = "Directory_Search.ScreenBlock_Search";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_Search_Search_BirthdayOptions_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Search_SearchResult_Section_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Search_ScreenBlock_Search_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Search_ScreenBlock_Search_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
inputs: {
In_InitializeNavigationHandler: !(model.variables.in_IsInScreenSearchIn),
_in_InitializeNavigationHandlerInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsInScreenSearchInDataFetchStatus)
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
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("abgYlS7jHke0yty9XHDa9w.In_Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SearchInputRec();
rec.initalStringAttr = model.variables.searchKey_CurrentVar;
rec.searchPromptAttr = "Search for households, members or places.";
rec.debounce_DelayMSAttr = 300;
rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
rec.focusOnReadyAttr = true;
return rec;
}();
}, function () {
return model.variables.searchKey_CurrentVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnChange$Action: function (event_CurrentStringIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
return controller.inputEvent_OnChange$Action(event_CurrentStringIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_ClearString$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
return controller.inputEvent_ClearString$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_Submit$Action: function (event_SubmittedStringIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
return controller.inputEvent_Submit$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Right: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_view, {
inputs: {
ShowSubscriptionOnClick: model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar,
isLoaded: model.variables.bottomSheetId_Filter_IsLoadedVar,
HaveFiltersApplied: model.variables.hasFiltersAppliedVar,
BottomSheetId: model.variables.bottomSheetId_FilterVar
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
}),
headerContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("ryN0GO6YM0OMl6_hPDBqig.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, {
inputs: {
In_TagToggleList: model.variables.tagListVar,
In_IsSingleSelection: true,
In_HorizontalPadding: UBTConnectModel.staticEntities.uBT_Size.base,
In_IsMandatorySelection: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
changed$Action: function (updatedTagListIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/HorizontalTagList Changed");
return controller.event_HorizontalTagListChanged$Action(updatedTagListIn, controller.callContext(eventHandlerContext));
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.tagListVar)]
})];
}),
content: new PlaceholderContent(function () {
return [$if((!(model.variables.hasSearchedVar) || ((model.variables.searchKey_CurrentVar) !== (model.variables.searchKey_LastSearchedVar))), false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
uuid: "5",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(((!(model.variables.get_RecentClickedResultsAggr.listOut.isEmpty) || !(model.variables.get_RecentSearchTermsAggr.listOut.isEmpty)) && !((model.variables.isBirthdaySearchEnabledVar && model.variables.isBirthdayKeyWordVar))), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("RecentSearch.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
name: "RecentSearch",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if((!(model.variables.get_RecentClickedResultsAggr.listOut.isEmpty) || !(model.variables.get_RecentSearchTermsAggr.listOut.isEmpty)), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("SsA1tf+iFE+IhjIejX9THg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
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
uuid: "7",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
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
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Recent search",
In_TextOptions: model.getCachedValue(idService.getId("wjMeqltnCEiwVuEcpNeCow.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [$if((!(model.variables.get_RecentClickedResultsAggr.listOut.isEmpty) || !(model.variables.get_RecentSearchTermsAggr.listOut.isEmpty)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Clear all",
In_TextOptions: model.getCachedValue(idService.getId("p9bTuBATgUO2v81lqinCbg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomText Clicked");
return controller.onClick_RecentSearch_RemoveAll$Action(controller.callContext(eventHandlerContext));
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
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.listOut.isEmpty), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut.isEmpty)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.listOut.isEmpty), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut.isEmpty)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Recent_SearchResults.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
name: "Recent_SearchResults",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, {
inputs: {
RowItemsPhone: 5,
RowItemsTablet: 5,
ItemsGap: UBTConnectModel.staticEntities.space.extraSmall,
RowItemsDesktop: 5
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
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.get_RecentClickedResultsAggr.listOut,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Search/ScreenBlock_Search/Container onclick");
return controller.event_SectionOnItemClick$Action(OS.DataConversion.JSConversions.typeConvertRecord(model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext), new Connect_Search_CSModel.SearchResultRec(), function (source, target) {
target.idAttr = source.connectSearch_RecentClickedResultsAttr.entityIdAttr;
target.householderIdAttr = source.connectSearch_RecentClickedResultsAttr.householderIdAttr;
target.nameAttr = source.connectSearch_RecentClickedResultsAttr.nameAttr;
target.additionalInformationAttr = source.connectSearch_RecentClickedResultsAttr.additionalInformationAttr;
target.locationAttr = source.connectSearch_RecentClickedResultsAttr.locationAttr;
target.typeAttr = source.connectSearch_RecentClickedResultsAttr.entityTypeAttr;
target.latitudeAttr = source.connectSearch_RecentClickedResultsAttr.latitudeAttr;
target.longitudeAttr = source.connectSearch_RecentClickedResultsAttr.longitudeAttr;
return target;
}), true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: "text-align: center;"
},
style: "overflow-wrap-anywhere",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.nameAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityTypeAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityIdAttr)]
}, React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityId: model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityIdAttr,
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr),
ImageSize: model.getCachedValue(idService.getId("zSm8ceGi00uBgXsDF7LBXw.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.extraSmall_32;
rec.widthAttr = (((model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityTypeAttr === UBTConnectModel.staticEntities.connect_Entity.member)) ? (UBTConnectModel.staticEntities.uBT_ImageSize.square) : (OS.BuiltinFunctions.nullTextIdentifier()));
return rec;
}();
}, function () {
return model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityTypeAttr;
}),
_imageSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr),
EntityType: model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityTypeAttr,
_entityTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr),
In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.soft
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
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("JAA7n73smkOBK6F4UNahaA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.get_RecentClickedResultsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.nameAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr)
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
_dependencies: []
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut)]
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.get_RecentSearchTermsAggr.listOut,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "Recent_SearchTerms"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("wH3XgN7SjEamcGPUOTv8XA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "19",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("NayhIBupHkOzPTPK8cUDtg.ColumnOptions"), function () {
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
validationService: validationService
},
_idProps: {
service: idService,
uuid: "20",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: model.variables.get_RecentSearchTermsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.searchedTermAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr),
TextOptions: model.getCachedValue(idService.getId("k94euQw3c0aQ3wC1g+s12g.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
return controller.onClick_RecentSearchTerm$Action(model.variables.get_RecentSearchTermsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.searchedTermAttr, controller.callContext(eventHandlerContext));
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
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral9,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.history
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
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.close,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
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
return controller.onClick_RecentSearchTerm_Remove$Action(controller.callContext(eventHandlerContext));
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
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.searchedTermAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.searchedTermAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("HBtViLbIs0OTXM1L+Yfytg.In_Text"), function () {
return ((model.variables.hasSearchedVar) ? ("No recent results to show") : ("Please search for a Household, Member or a Place to get started."));
}, function () {
return model.variables.hasSearchedVar;
}),
In_PaddingOptions: model.getCachedValue(idService.getId("HBtViLbIs0OTXM1L+Yfytg.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("HBtViLbIs0OTXM1L+Yfytg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
uuid: "24",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.hasSearchedVar), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.listOut), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut)]
})];
}, function () {
return [];
}), $if((model.variables.isBirthdaySearchEnabledVar && model.variables.isBirthdayKeyWordVar), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Padding.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
name: "Padding",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_Search_Search_BirthdayOptions_mvc_view, {
inputs: {
BirthdayOptions: model.getCachedValue(idService.getId("Ubi7uV5kt0aLbwSxIwDyww.BirthdayOptions"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.get_SearchBirthdayOptionsAggr.listOut, new UBTConnectModel.Connect_SearchBirthdayOptionsList(), function (source, target) {
target = source.connect_SearchBirthdayOptionsAttr;
return target;
});
}, function () {
return model.variables.get_SearchBirthdayOptionsAggr.listOut;
}),
_birthdayOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_SearchBirthdayOptionsAggr.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
selected$Action: function (keyWordIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Search/Search_BirthdayOptions Selected");
return controller.onClick_RecentSearchTerm$Action(keyWordIn, controller.callContext(eventHandlerContext));
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
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.get_SearchBirthdayOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_SearchBirthdayOptionsAggr.listOut)]
})];
}, function () {
return [];
})];
}, function () {
return [];
}), $if(model.variables.hasSearchedVar, false, this, function () {
return [$if(((model.variables.searchKey_CurrentVar) !== (model.variables.searchKey_LastSearchedVar)), false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
uuid: "27",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("jFkcEEKyh0iC7DpLJixe5w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
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
uuid: "28",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_PaddingOptions: model.getCachedValue(idService.getId("c3oWe034D0KNASQiK6lNyA.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
FitContent: true,
In_Text: "Showing results for ",
In_TextOptions: model.getCachedValue(idService.getId("c3oWe034D0KNASQiK6lNyA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
FitContent: true,
In_Text: (("\'" + model.variables.searchKey_LastSearchedVar) + "\':"),
In_PaddingOptions: model.getCachedValue(idService.getId("oDCFJHXeZ0e1C0iHgT9ReA.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("oDCFJHXeZ0e1C0iHgT9ReA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
uuid: "30",
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchKey_LastSearchedVar)]
})];
}, function () {
return [];
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
uuid: "31",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [$if((model.variables.hasPlacesVar || (model.variables.isLoadingVar && (((model.variables.selectedCategoryVar === OS.BuiltinFunctions.nullTextIdentifier()) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.all)) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.places)))), false, this, function () {
return [React.createElement(UBTConnect_Directory_Search_SearchResult_Section_mvc_view, {
inputs: {
HideSeparator: ((model.variables.searchKey_CurrentVar) !== (model.variables.searchKey_LastSearchedVar)),
Type: UBTConnectModel.staticEntities.connect_SearchCategories.places,
SearchTerm: model.variables.searchKey_CurrentVar,
Items: model.variables.fetchSearchResultsDataAct.placesOut,
_itemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onItemClick$Action: function (searchResultIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Search/SearchResult_Section OnItemClick");
return controller.event_SectionOnItemClick$Action(searchResultIn, false, controller.callContext(eventHandlerContext));
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
name: "PlacesSection",
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((model.variables.hasHouseholdsVar || model.variables.isLoadingVar), true, this, function () {
return [React.createElement(UBTConnect_Directory_Search_SearchResult_Section_mvc_view, {
inputs: {
Type: UBTConnectModel.staticEntities.connect_SearchCategories.households,
SearchTerm: model.variables.searchKey_CurrentVar,
Items: model.variables.fetchSearchResultsDataAct.householdsOut,
_itemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr),
HideSeparator: (((model.variables.searchKey_CurrentVar) !== (model.variables.searchKey_LastSearchedVar)) && model.variables.fetchSearchResultsDataAct.placesOut.isEmpty),
_hideSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onItemClick$Action: function (searchResultIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Search/SearchResult_Section OnItemClick");
return controller.event_SectionOnItemClick$Action(searchResultIn, false, controller.callContext(eventHandlerContext));
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
name: "HouseholdsSection",
alias: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((model.variables.hasPeopleVar || model.variables.isLoadingVar), false, this, function () {
return [React.createElement(UBTConnect_Directory_Search_SearchResult_Section_mvc_view, {
inputs: {
SearchTerm: model.variables.searchKey_CurrentVar,
Type: UBTConnectModel.staticEntities.connect_SearchCategories.people,
HideSeparator: ((((model.variables.searchKey_CurrentVar) !== (model.variables.searchKey_LastSearchedVar)) && model.variables.fetchSearchResultsDataAct.placesOut.isEmpty) && model.variables.fetchSearchResultsDataAct.householdsOut.isEmpty),
_hideSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr),
Items: model.variables.fetchSearchResultsDataAct.peopleOut,
_itemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onItemClick$Action: function (searchResultIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Search/SearchResult_Section OnItemClick");
return controller.event_SectionOnItemClick$Action(searchResultIn, false, controller.callContext(eventHandlerContext));
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
name: "MembersSection",
alias: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((((!(model.variables.hasPeopleVar) && !(model.variables.hasHouseholdsVar)) && !(model.variables.hasPlacesVar)) && !(model.variables.isLoadingVar)), false, this, function () {
return [$if((model.variables.searchKey_CurrentVar === model.variables.searchKey_LastSearchedVar), false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
alias: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("NoResults.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
name: "NoResults",
alias: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Ejiqi3hEXkagoSqTmJBxUg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
uuid: "37",
alias: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "We’re sorry. We were not able to find a match.\r\nTry another search?",
FitContent: true,
In_TextOptions: model.getCachedValue(idService.getId("yPIT0wzhoUGP8KxYLfZwXQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
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
uuid: "39",
alias: "35"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "• Check for typos and spelling errors.\r\n• Try more general keywords.\r\n• Try different keywords.",
In_TextOptions: model.getCachedValue(idService.getId("s1fdRYLnrUGsUOJ3lkBraA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("s1fdRYLnrUGsUOJ3lkBraA.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
uuid: "40",
alias: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.hasPeopleVar), asPrimitiveValue(model.variables.hasHouseholdsVar), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.peopleOut), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.householdsOut), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.placesOut), asPrimitiveValue(model.variables.searchKey_LastSearchedVar), asPrimitiveValue(model.variables.searchKey_CurrentVar), asPrimitiveValue(model.variables.selectedCategoryVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.hasPlacesVar)]
})];
}, function () {
return [];
})];
}),
bottom: new PlaceholderContent(function () {
return [$if(model.variables.in_IsInScreenSearchIn, false, this, function () {
return [];
}, function () {
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
uuid: "41",
alias: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
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
uuid: "42",
alias: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_IsInScreenSearchIn), asPrimitiveValue(model.variables.hasPeopleVar), asPrimitiveValue(model.variables.hasHouseholdsVar), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.peopleOut), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.householdsOut), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.placesOut), asPrimitiveValue(model.variables.selectedCategoryVar), asPrimitiveValue(model.variables.hasPlacesVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.get_SearchBirthdayOptionsAggr.listOut), asPrimitiveValue(model.variables._in_IsInScreenSearchInDataFetchStatus), asPrimitiveValue(model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_SearchBirthdayOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.isBirthdayKeyWordVar), asPrimitiveValue(model.variables.isBirthdaySearchEnabledVar), asPrimitiveValue(model.variables.get_RecentSearchTermsAggr.listOut), asPrimitiveValue(model.variables.get_RecentClickedResultsAggr.listOut), asPrimitiveValue(model.variables.searchKey_LastSearchedVar), asPrimitiveValue(model.variables.hasSearchedVar), asPrimitiveValue(model.variables.tagListVar), asPrimitiveValue(model.variables.bottomSheetId_FilterVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_IsLoadedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar), asPrimitiveValue(model.variables.searchKey_CurrentVar)]
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("g9zK5_kJUUyinjwpVuot1A.In_Options"), function () {
return function () {
var rec = new UBTConnectModel.Filter_Common_OptionsRec();
rec.hasSortingAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ChoiceRec();
rec.enableAttr = false;
return rec;
}();
rec.hasCountriesAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ListRec();
rec.enableAttr = true;
return rec;
}();
rec.hasLocalitiesAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ListRec();
rec.enableAttr = false;
return rec;
}();
return rec;
}();
}),
In_StartFilter: model.getCachedValue(idService.getId("g9zK5_kJUUyinjwpVuot1A.In_StartFilter"), function () {
return function () {
var rec = new UBTConnectModel.Filter_CommonRec();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
applyFilters$Action: function (optionList_ControlIn, optionChoice_ControlIn, optionFlatList_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet ApplyFilters");
return controller.event_ApplyFilters$Action(optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
sheetInitialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet SheetInitialized");
controller.event_FilterBottomSheet_tInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
loaded$Action: function (showSubscriptionOnClickIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet Loaded");
controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
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
uuid: "43",
alias: "39"
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
define("UBTConnect.Directory_Search.ScreenBlock_Search.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_CommonEntities_DB.model", "Connect_Search_CS.model", "UBTJavaScriptUtils.controller", "UBTConnect.entities", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect_Utils.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Search.ScreenBlock_Search.mvc$debugger", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect_CommonEntities_DB.model$Connect_SearchBirthdayOptionsRec", "UBTConnect.referencesHealth$Connect_CommonEntities_DB", "UBTConnect.model$Connect_SearchBirthdayOptionsList", "Connect_Search_CS.model$SearchResultRec", "UBTConnect.referencesHealth$Connect_Search_CS", "UBTConnect.model$SearchResultList", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.controller$ValidateSearchPhoneNumber", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$ConnectSearch_RecentSearchTermRecord", "UBTConnect.model$ConnectSearch_RecentSearchTermRecordList", "UBTConnect.model$ConnectSearch_RecentSearchTermRec", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecord", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.model$LongIntegerBooleanRecordList", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecordList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$ConnectSearch_RecentClickedResultsRec", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck", "UBTConnect_Utils.model$SearchCategory_ItemRec", "UBTConnect.model$SearchCategory_ItemList", "UBTConnect_Utils.controller$SearchCategory_GetList", "UBTConnect.model$Connect_SearchBirthdayOptionsRecordList"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_CommonEntities_DBModel, Connect_Search_CSModel, UBTJavaScriptUtilsController, UBTConnectEntities, UBTConnect_UtilsController, NavigationHandlerController, UBTConnect_UtilsModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Search_ScreenBlock_Search_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_RecentClickedResults$AggrRefresh: 0,
get_RecentSearchTerms$AggrRefresh: 0,
get_SearchBirthdayOptions$AggrRefresh: -1,
fetchSearchResults$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
get_RecentClickedResults$AggrRefresh: [],
get_RecentSearchTerms$AggrRefresh: [],
get_SearchBirthdayOptions$AggrRefresh: [],
fetchSearchResults$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.get_RecentClickedResults$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 5;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;
var qpstSearchKey_Current = model.variables.searchKey_CurrentVar;
var qpstSelectedCategory = model.variables.selectedCategoryVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, \"ENConnectSearch_RecentClickedResults\".\"EntityId\" o2, \"ENConnectSearch_RecentClickedResults\".\"EntityType\" o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, \"ENConnectSearch_RecentClickedResults\".\"Name\" o5, \"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" o6, \"ENConnectSearch_RecentClickedResults\".\"Location\" o7, NULL o8, \"ENConnectSearch_RecentClickedResults\".\"Latitude\" o9, \"ENConnectSearch_RecentClickedResults\".\"Longitude\" o10, NULL o11";
} else {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, \"ENConnectSearch_RecentClickedResults\".\"UserId\" o1, \"ENConnectSearch_RecentClickedResults\".\"EntityId\" o2, \"ENConnectSearch_RecentClickedResults\".\"EntityType\" o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, \"ENConnectSearch_RecentClickedResults\".\"Name\" o5, \"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" o6, \"ENConnectSearch_RecentClickedResults\".\"Location\" o7, \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" o8, \"ENConnectSearch_RecentClickedResults\".\"Latitude\" o9, \"ENConnectSearch_RecentClickedResults\".\"Longitude\" o10, \"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentClickedResults\" \"ENConnectSearch_RecentClickedResults\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (((";
if (((qpstSelectedCategory.trim()) !== (""))) {
fromAndWhereSql += "((";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.all.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " = :qpstSelectedCategory) AND (";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.all.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NOT NULL))";
argsList.add("qpstSelectedCategory", /*TEXT*/ 0, qpstSelectedCategory);
} else {
fromAndWhereSql += "(";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.all.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NULL)";
}
fromAndWhereSql += " OR (";
if (((qpstSelectedCategory.trim()) !== (""))) {
fromAndWhereSql += "((";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.households.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " = :qpstSelectedCategory) AND (";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.households.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NOT NULL))";
argsList.add("qpstSelectedCategory", /*TEXT*/ 0, qpstSelectedCategory);
} else {
fromAndWhereSql += "(";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.households.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NULL)";
}
fromAndWhereSql += " AND (\"ENConnectSearch_RecentClickedResults\".\"EntityType\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_Entity.household.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += "))) OR (";
if (((qpstSelectedCategory.trim()) !== (""))) {
fromAndWhereSql += "((";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.people.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " = :qpstSelectedCategory) AND (";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.people.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NOT NULL))";
argsList.add("qpstSelectedCategory", /*TEXT*/ 0, qpstSelectedCategory);
} else {
fromAndWhereSql += "(";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.people.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NULL)";
}
fromAndWhereSql += " AND (\"ENConnectSearch_RecentClickedResults\".\"EntityType\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_Entity.member.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += "))) OR (";
if (((qpstSelectedCategory.trim()) !== (""))) {
fromAndWhereSql += "((";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.places.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " = :qpstSelectedCategory) AND (";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.places.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NOT NULL))";
argsList.add("qpstSelectedCategory", /*TEXT*/ 0, qpstSelectedCategory);
} else {
fromAndWhereSql += "(";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_SearchCategories.places.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += " IS NULL)";
}
fromAndWhereSql += " AND (\"ENConnectSearch_RecentClickedResults\".\"EntityType\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.connect_Entity.locality.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += "))) AND ((((:qpstSearchKey_Current = '') OR (\"ENConnectSearch_RecentClickedResults\".\"Name\" LIKE (('%' || :qpstSearchKey_Current) || '%'))) OR (\"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" LIKE (('%' || :qpstSearchKey_Current) || '%'))) OR (\"ENConnectSearch_RecentClickedResults\".\"Location\" LIKE (('%' || :qpstSearchKey_Current) || '%'))) AND (";
argsList.add("qpstSearchKey_Current", /*TEXT*/ 0, qpstSearchKey_Current);
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)))";
orderBySql += " ORDER BY \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" DESC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentClickedResultsAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 5;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeDirectory_Search_ScreenBlock_Search$Block$get_RecentClickedResultsAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, model.variables.searchKey_CurrentVar, model.variables.selectedCategoryVar, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:DeZJDfgKcE6pJvVbVSIATw:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ScreenDataSets.DeZJDfgKcE6pJvVbVSIATw:U4gLxUWOD60uWLOYl4ZmjA", "UBTConnect", "Get_RecentClickedResults", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Search/ScreenBlock_Search/Get_RecentClickedResults");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.get_RecentClickedResultsAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DeZJDfgKcE6pJvVbVSIATw", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.get_RecentSearchTerms$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentSearchTermRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 10;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;
var qpstSearchKey_Current = model.variables.searchKey_CurrentVar;
var qpstSearchedTerm = model.variables.searchKey_LastSearchedVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENConnectSearch_RecentSearchTerm\".\"Id\" o0, NULL o1, \"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" o2, NULL o3, NULL o4";
} else {
selectSql += "\"ENConnectSearch_RecentSearchTerm\".\"Id\" o0, \"ENConnectSearch_RecentSearchTerm\".\"UserId\" o1, \"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" o2, \"ENConnectSearch_RecentSearchTerm\".\"SearchedOn\" o3, \"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentSearchTerm\" \"ENConnectSearch_RecentSearchTerm\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentSearchTerm\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentSearchTerm\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentSearchTerm\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ((:qpstSearchKey_Current = '') OR (\"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" LIKE (('%' || :qpstSearchKey_Current) || '%'))) AND (\"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" <> :qpstSearchedTerm) AND (";
argsList.add("qpstSearchKey_Current", /*TEXT*/ 0, qpstSearchKey_Current);
argsList.add("qpstSearchedTerm", /*TEXT*/ 0, qpstSearchedTerm);
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NULL)))";
orderBySql += " ORDER BY \"ENConnectSearch_RecentSearchTerm\".\"SearchedOn\" DESC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentSearchTermRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentSearchTermAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 10;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeDirectory_Search_ScreenBlock_Search$Block$get_RecentSearchTermsAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, model.variables.searchKey_CurrentVar, model.variables.searchKey_LastSearchedVar, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:k6wvT39R+EqztkuKRN_3lQ:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ScreenDataSets.k6wvT39R+EqztkuKRN_3lQ:xm9r5ttC9InuhRSnzQSBgQ", "UBTConnect", "Get_RecentSearchTerms", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Search/ScreenBlock_Search/Get_RecentSearchTerms");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.get_RecentSearchTermsAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:k6wvT39R+EqztkuKRN_3lQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.get_SearchBirthdayOptions$AggrRefresh = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GBH9yutyzkG7n8K6STir+Q:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ScreenDataSets.GBH9yutyzkG7n8K6STir+Q:qUqWt71Qnl59UQ5H9Xa6YQ", "UBTConnect", "Get_SearchBirthdayOptions", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Search/ScreenBlock_Search/Get_SearchBirthdayOptions");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGet_SearchBirthdayOptions", "screenservices/UBTConnect/Directory_Search/ScreenBlock_Search/ScreenDataSetGet_SearchBirthdayOptions", "IQB0+9Zv+N3eTA8YS9yBTg", maxRecords, startIndex, function (b) {
model.variables.get_SearchBirthdayOptionsAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_SearchBirthdayOptionsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_SearchBirthdayOptionsAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GBH9yutyzkG7n8K6STir+Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.fetchSearchResults$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HOiixtSk00CGVQHreJKGVQ:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/DataActions.HOiixtSk00CGVQHreJKGVQ:eoFuUIdYWZZzepUIlQyYGg", "UBTConnect", "FetchSearchResults", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Search/ScreenBlock_Search/FetchSearchResults");
return controller.callDataAction("DataActionFetchSearchResults", "screenservices/UBTConnect/Directory_Search/ScreenBlock_Search/DataActionFetchSearchResults", "3SjtlIqCco4R9BDQfHv3xg", function (b) {
model.variables.fetchSearchResultsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.fetchSearchResultsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchSearchResultsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Search/ScreenBlock_Search/FetchSearchResults On After Fetch");
controller._onAfterFetch_FetchSearchResults$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HOiixtSk00CGVQHreJKGVQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_RecentClickedResults$AggrRefresh", "get_RecentSearchTerms$AggrRefresh", "get_SearchBirthdayOptions$AggrRefresh", "fetchSearchResults$DataActRefresh"];
// Client Actions
Controller.prototype._inputEvent_Submit$Action = function (event_SubmittedStringIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InputEvent_Submit");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.InputEvent_Submit$vars"))());
vars.value.event_SubmittedStringInLocal = event_SubmittedStringIn;
var validateSearchPhoneNumberVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validateSearchPhoneNumberVar = validateSearchPhoneNumberVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VaorEifuqkatRCaQJWaC7A:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.VaorEifuqkatRCaQJWaC7A:ehdICvXWiKNVWwLZQImZ6A", "UBTConnect", "InputEvent_Submit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HHJRDziBrUSnH8OVoIOlvg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r+4gqGMGTEihWMr7erirgQ", callContext.id);
// SearchKey_Current = Event_SubmittedString
model.variables.searchKey_CurrentVar = vars.value.event_SubmittedStringInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qr33izqVfk233YBzw0kLAg", callContext.id);
// Execute Action: ValidateSearchPhoneNumber
validateSearchPhoneNumberVar.value = UBTConnectController.default.validateSearchPhoneNumber$Action(model.variables.searchKey_CurrentVar, callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OKEG2aGD9UmDFpZuF++fiA", callContext.id) && validateSearchPhoneNumberVar.value.isValidOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s8LREcPxWkiaoUW68RXpFQ", callContext.id);
// Execute Action: Action_RefreshSearch
return controller._action_RefreshSearch$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F63ADi3PhUaYtSJkFsIOYg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gU6F3_H_bU2ng4HWfSR1BA", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", validateSearchPhoneNumberVar.value.errorMessageOut, UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pqjDHqyilUCHQbUtZYU0rA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VaorEifuqkatRCaQJWaC7A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VaorEifuqkatRCaQJWaC7A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.InputEvent_Submit$vars", [{
name: "Event_SubmittedString",
attrName: "event_SubmittedStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onClick_RecentSearchTerm$Action = function (termIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_RecentSearchTerm");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.OnClick_RecentSearchTerm$vars"))());
vars.value.termInLocal = termIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HD9lHCpC4EyzD3WfLnI4fw:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.HD9lHCpC4EyzD3WfLnI4fw:2S5YidgZYGfwqjwC55_DpA", "UBTConnect", "OnClick_RecentSearchTerm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rd6dwMqnoU24NaasUIoLdg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zulsVFevmE6DOMhzvQgqIA", callContext.id);
// SearchKey_Current = Term
model.variables.searchKey_CurrentVar = vars.value.termInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JpiEeVqs3EuHldcMJWmUNQ", callContext.id);
// Execute Action: Action_RefreshSearch
return controller._action_RefreshSearch$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KU4vOcwSTkeCz9C9EKWZOw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HD9lHCpC4EyzD3WfLnI4fw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HD9lHCpC4EyzD3WfLnI4fw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.OnClick_RecentSearchTerm$vars", [{
name: "Term",
attrName: "termInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._event_FilterBottomSheet_tInitialized$Action = function (sheetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_FilterBottomSheet_tInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_FilterBottomSheet_tInitialized$vars"))());
vars.value.sheetIdInLocal = sheetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dag1JFoHxkKqxZjqMOfhhw:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.dag1JFoHxkKqxZjqMOfhhw:kjoX3qdOjRsQsR82oOmK8g", "UBTConnect", "Event_FilterBottomSheet_tInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rFpiSwkUdk6dELbz+k19tw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UrILK44UiEqHfPaQCOJ_bA", callContext.id);
// BottomSheetId_Filter = SheetId
model.variables.bottomSheetId_FilterVar = vars.value.sheetIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FNsoCGIP1ky2t8lnmymzkg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dag1JFoHxkKqxZjqMOfhhw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_FilterBottomSheet_tInitialized$vars", [{
name: "SheetId",
attrName: "sheetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_RefreshSearch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_RefreshSearch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Action_RefreshSearch$vars"))());
var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var bubbleCommunicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createOrUpdateConnectSearch_RecentSearchTermVar = new OS.DataTypes.VariableHolder();
var checkIfSearchtermAlreadyExistVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnectModel.ConnectSearch_RecentSearchTermRecordList))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.notRegisteredVar = notRegisteredVar;
varBag.bubbleCommunicationExceptionVar = bubbleCommunicationExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
varBag.createOrUpdateConnectSearch_RecentSearchTermVar = createOrUpdateConnectSearch_RecentSearchTermVar;
varBag.checkIfSearchtermAlreadyExistVar = checkIfSearchtermAlreadyExistVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1NmcMRW6uEKdRSgjbWherg:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.1NmcMRW6uEKdRSgjbWherg:k+YSC1XGIPd3zWpsJyx8SA", "UBTConnect", "Action_RefreshSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PlsmPKwnG0uJl+rpEDRjcw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Search Term
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fF4Mz13yEUuzYNfucL18xQ", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.searchKey_CurrentVar)) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kwGpk0Xh1UeAeF7Ey+A5ng", callContext.id);
// Aggregate: CheckIfSearchtermAlreadyExist
var checkIfSearchtermAlreadyExistAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentSearchTermRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;
var qpstSearchedTerm = model.variables.searchKey_CurrentVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENConnectSearch_RecentSearchTerm\".\"Id\" o0, \"ENConnectSearch_RecentSearchTerm\".\"UserId\" o1, \"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" o2, \"ENConnectSearch_RecentSearchTerm\".\"SearchedOn\" o3, \"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" o4";
} else {
selectSql += "\"ENConnectSearch_RecentSearchTerm\".\"Id\" o0, \"ENConnectSearch_RecentSearchTerm\".\"UserId\" o1, \"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" o2, \"ENConnectSearch_RecentSearchTerm\".\"SearchedOn\" o3, \"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentSearchTerm\" \"ENConnectSearch_RecentSearchTerm\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentSearchTerm\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentSearchTerm\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentSearchTerm\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ((Trim(\"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\")) = (Trim(:qpstSearchedTerm))) AND (";
argsList.add("qpstSearchedTerm", /*TEXT*/ 0, qpstSearchedTerm);
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NULL)))";
orderBySql += " ORDER BY \"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentSearchTermRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentSearchTermAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 1;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeScreenBlock_Search$ActionRefreshSearch$Action$checkIfSearchtermAlreadyExistAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, model.variables.searchKey_CurrentVar, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return checkIfSearchtermAlreadyExistVar.value;
});
};
return checkIfSearchtermAlreadyExistAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZU0Gf7TDTUeSMpZVa1ge0A", callContext.id);
// CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.UserId = GetUserId
checkIfSearchtermAlreadyExistVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.userIdAttr = OS.BuiltinFunctions.getUserId();
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZU0Gf7TDTUeSMpZVa1ge0A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.SearchedTerm = Trim
checkIfSearchtermAlreadyExistVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.searchedTermAttr = OS.BuiltinFunctions.trim(model.variables.searchKey_CurrentVar);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZU0Gf7TDTUeSMpZVa1ge0A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.SearchedOn = CurrDateTime
checkIfSearchtermAlreadyExistVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.searchedOnAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZU0Gf7TDTUeSMpZVa1ge0A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CheckIfSearchtermAlreadyExist.List.Current.ConnectSearch_RecentSearchTerm.SearchTargetId = In_SearchTargetId
checkIfSearchtermAlreadyExistVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.searchTargetIdAttr = model.variables.in_SearchTargetIdIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j8YhsU0nMkysRlamFfOztQ", callContext.id);
// Execute Action: CreateOrUpdateConnectSearch_RecentSearchTerm
model.flush();
return UBTConnectModel.entities.ConnectSearch_RecentSearchTerm.createOrUpdate(checkIfSearchtermAlreadyExistVar.value.listOut.getCurrent(callContext.iterationContext), callContext).then(function (value) {
createOrUpdateConnectSearch_RecentSearchTermVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ybc0ipURTUSGgL7LA_qWmA", callContext.id);
// Execute Action: Action_ClearResults
return controller._action_ClearResults$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p4pQ_g8FKEyHS4KsN5e1Tg", callContext.id);
// HasSearched = True
model.variables.hasSearchedVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p4pQ_g8FKEyHS4KsN5e1Tg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SearchKey_LastSearched = SearchKey_Current
model.variables.searchKey_LastSearchedVar = model.variables.searchKey_CurrentVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wsT8yCSPS0u8vFRpMt7Arg", callContext.id);
// IsLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uJBotJ2z30GJ3hs4EMp0Ag", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.loadingListVar, function () {
var rec = new Connect_Search_CSModel.SearchResultRec();
rec.nameAttr = "Loading Name";
rec.additionalInformationAttr = "Name";
rec.locationAttr = "Loading Location";
rec.typeAttr = UBTConnectModel.staticEntities.connect_Entity.household;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:scrCYmIY00GkNaKcvtgUlw", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(vars.value.loadingListVar, function () {
var rec = new Connect_Search_CSModel.SearchResultRec();
rec.nameAttr = "Loading Name";
rec.additionalInformationAttr = "Name";
rec.locationAttr = "Loading Location";
rec.typeAttr = UBTConnectModel.staticEntities.connect_Entity.household;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jxMX2Hy9ZU+BOlCoUFwmJQ", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(vars.value.loadingListVar, function () {
var rec = new Connect_Search_CSModel.SearchResultRec();
rec.nameAttr = "Loading Name";
rec.additionalInformationAttr = "Name";
rec.locationAttr = "Loading Location";
rec.typeAttr = UBTConnectModel.staticEntities.connect_Entity.household;
return rec;
}(), callContext);
}).then(function () {
// Places
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZXRrz+qVz0aPWuhfIhA9sA", callContext.id) && ((model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.all) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.places)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q6LRI5ppFUWvfHgQyf_sew", callContext.id);
// Execute Action: LoadingPlaces
OS.SystemActions.listAppendAll(model.variables.fetchSearchResultsDataAct.placesOut, vars.value.loadingListVar, callContext);
}

// Households
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XbGZVOYFMEmlCPanQKk62Q", callContext.id) && ((model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.all) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.households)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B3I3X7nUZESze_eUkrGSIw", callContext.id);
// Execute Action: LoadingHouseholds
OS.SystemActions.listAppendAll(model.variables.fetchSearchResultsDataAct.householdsOut, vars.value.loadingListVar, callContext);
}

// People
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xOZdRJwnTUWxHE66yl1Y0A", callContext.id) && ((model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.all) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.people)))) {
// Foreach LoadingList
callContext.iterationContext.registerIterationStart(vars.value.loadingListVar);
try {var loadingListIterator = callContext.iterationContext.getIterator(vars.value.loadingListVar);
var loadingListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UfqieivPXUepENwbE37PGg", callContext.id) && (loadingListIndex < vars.value.loadingListVar.length))) {
loadingListIterator.currentRowNumber = loadingListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bKTPTg6zZEmXZw5i4ES8sg", callContext.id);
// LoadingList.Current.Type = Member
vars.value.loadingListVar.getItem(loadingListIndex.valueOf()).typeAttr = UBTConnectModel.staticEntities.connect_Entity.member;
loadingListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.loadingListVar);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BopckayPikiLfZ08CaKr_w", callContext.id);
// Execute Action: LoadingPeople
OS.SystemActions.listAppendAll(model.variables.fetchSearchResultsDataAct.peopleOut, vars.value.loadingListVar, callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iDqMjCQ5N0KipEjuPrqTUQ", callContext.id);
// Refresh Query: FetchSearchResults
var result = controller.fetchSearchResults$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h6Vi5O7oc0Cu4PPEGWWDQA", callContext.id);
});
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qT0eTQ16QUiep3McPkF+yA", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_Search.Action_RefreshSearch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: NotRegistered
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
OS.Logger.error(null, ex);
notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0S_uvfEr7kGd+Ti2Af5z3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_j7p8BRffkutFZvceh5hzQ", callContext.id);
// Raise Error: NotRegistered
throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
});
}

// Handle Error: BubbleCommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "UBTConnect.BubbleCommunicationException")) {
OS.Logger.error(null, ex);
bubbleCommunicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(bubbleCommunicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mw58xTn_CU6l_TBuSVvj0w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N6_eeGCp5kGocTsF91Praw", callContext.id);
// Execute Action: Action_ClearResults3
return controller._action_ClearResults$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:etB_FqAPKECuy3hCtHQPMg", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rNdt+NxoDU2HR_D32SjU3w", callContext.id);
// Raise Error: BubbleCommunicationException
throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleCommunicationException", bubbleCommunicationExceptionVar.value.exceptionMessageAttr);
});
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l7eu+FyH1U6OmUNoM9wblA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EAtKgxDvG06vKOjn06Nrcw", callContext.id);
// Execute Action: Action_ClearResults2
return controller._action_ClearResults$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bPZZCqPawE6wx1p6eqn7+Q", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kbI6rItIcEOvAAqfdRP4pQ", callContext.id);
// Raise Error: BubbleGenericException
throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
});
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1NmcMRW6uEKdRSgjbWherg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1NmcMRW6uEKdRSgjbWherg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Action_RefreshSearch$vars", [{
name: "LoadingList",
attrName: "loadingListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.SearchResultList();
},
complexType: UBTConnectModel.SearchResultList
}]);
Controller.prototype._action_ClearResults$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_ClearResults");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Pa_8ObG++EWIEexjeCJueQ:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.Pa_8ObG++EWIEexjeCJueQ:vDCbYgSJlkWAgh69KBLTQA", "UBTConnect", "Action_ClearResults", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GbiIIjFluUqEETv0_R8OUA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E4d2dbJOzES0OBlHVVgn5A", callContext.id);
// Refresh Query: Get_RecentClickedResults
var result = controller.get_RecentClickedResults$AggrRefresh(5, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VJv9he2bfEeUWHEr4ZbkmA", callContext.id);
// Refresh Query: Get_RecentSearchTerms
var result = controller.get_RecentSearchTerms$AggrRefresh(10, 0, callContext);
model.flush();
return result;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TKOkLZAhP0KpFFHDsyaaAA", callContext.id);
// Execute Action: ListClear_Places
OS.SystemActions.listClear(model.variables.fetchSearchResultsDataAct.placesOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DUXE0I8mb0SVLkM2bUczLw", callContext.id);
// Execute Action: ListClear_Households
OS.SystemActions.listClear(model.variables.fetchSearchResultsDataAct.householdsOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3N13vM4T_Ei1K4iJtBcAIw", callContext.id);
// Execute Action: ListClear_People
OS.SystemActions.listClear(model.variables.fetchSearchResultsDataAct.peopleOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8o4Z7pqXrUS2St5dEPVqvQ", callContext.id);
// HasSearched = False
model.variables.hasSearchedVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f6aVGuayUE+68CMaqyDNfg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Pa_8ObG++EWIEexjeCJueQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Pa_8ObG++EWIEexjeCJueQ", callContext.id);
throw ex;

});
};
Controller.prototype._event_SectionOnItemClick$Action = function (searchResultIn, isRecentResultIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_SectionOnItemClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_SectionOnItemClick$vars"))());
vars.value.searchResultInLocal = searchResultIn.clone();
vars.value.isRecentResultInLocal = isRecentResultIn;
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
var listFilter_AvailableHouseholdsVar = new OS.DataTypes.VariableHolder();
var createOrUpdateConnectSearch_RecentClickedResultsVar = new OS.DataTypes.VariableHolder();
var listDistinctVar = new OS.DataTypes.VariableHolder();
var getAllSearchRecentClickedResultsByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList))());
var allRecenctClickedResultsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList))());
var getConnectSearchRecentClickedResultsByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
varBag.listFilter_AvailableHouseholdsVar = listFilter_AvailableHouseholdsVar;
varBag.createOrUpdateConnectSearch_RecentClickedResultsVar = createOrUpdateConnectSearch_RecentClickedResultsVar;
varBag.listDistinctVar = listDistinctVar;
varBag.getAllSearchRecentClickedResultsByUserIdVar = getAllSearchRecentClickedResultsByUserIdVar;
varBag.allRecenctClickedResultsVar = allRecenctClickedResultsVar;
varBag.getConnectSearchRecentClickedResultsByUserIdVar = getConnectSearchRecentClickedResultsByUserIdVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:43DRV1XubUG9XYbYXB9oHw:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.43DRV1XubUG9XYbYXB9oHw:3ZatGOWdkgSJELfH2Rn4pw", "UBTConnect", "Event_SectionOnItemClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jAyspD2IWUy5KbSKHWyFxg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ylBhE_GNP0SNE6jLoOqlPQ", callContext.id) && vars.value.searchResultInLocal.recordDisabledAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:caTj7X1v5Eedlk1u0RAv1A", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:siMZ3tUp6EWN5NjtVzPf6w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WeNzrotAD0WkK+MOzQZ1Lw", callContext.id);
// Aggregate: GetConnectSearchRecentClickedResultsByUserId
var getConnectSearchRecentClickedResultsByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;
var qpstEntityId = vars.value.searchResultInLocal.idAttr;
var qpstEntityType = vars.value.searchResultInLocal.typeAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, \"ENConnectSearch_RecentClickedResults\".\"UserId\" o1, \"ENConnectSearch_RecentClickedResults\".\"EntityId\" o2, \"ENConnectSearch_RecentClickedResults\".\"EntityType\" o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, \"ENConnectSearch_RecentClickedResults\".\"Name\" o5, \"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" o6, \"ENConnectSearch_RecentClickedResults\".\"Location\" o7, \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" o8, \"ENConnectSearch_RecentClickedResults\".\"Latitude\" o9, \"ENConnectSearch_RecentClickedResults\".\"Longitude\" o10, \"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" o11";
} else {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, \"ENConnectSearch_RecentClickedResults\".\"UserId\" o1, \"ENConnectSearch_RecentClickedResults\".\"EntityId\" o2, \"ENConnectSearch_RecentClickedResults\".\"EntityType\" o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, \"ENConnectSearch_RecentClickedResults\".\"Name\" o5, \"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" o6, \"ENConnectSearch_RecentClickedResults\".\"Location\" o7, \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" o8, \"ENConnectSearch_RecentClickedResults\".\"Latitude\" o9, \"ENConnectSearch_RecentClickedResults\".\"Longitude\" o10, \"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentClickedResults\" \"ENConnectSearch_RecentClickedResults\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENConnectSearch_RecentClickedResults\".\"EntityId\" = :qpstEntityId) AND ";
argsList.add("qpstEntityId", /*TEXT*/ 0, qpstEntityId);
if (((qpstEntityType.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"EntityType\" = :qpstEntityType) AND (\"ENConnectSearch_RecentClickedResults\".\"EntityType\" IS NOT NULL))";
argsList.add("qpstEntityType", /*TEXT*/ 0, qpstEntityType);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"EntityType\" IS NULL)";
}
fromAndWhereSql += " AND (";
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)))";
orderBySql += " ORDER BY \"ENConnectSearch_RecentClickedResults\".\"Name\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentClickedResultsAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 1;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeScreenBlock_Search$EventSectionOnItemClick$Action$getConnectSearchRecentClickedResultsByUserIdAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, vars.value.searchResultInLocal.idAttr, vars.value.searchResultInLocal.typeAttr, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getConnectSearchRecentClickedResultsByUserIdVar.value;
});
};
return getConnectSearchRecentClickedResultsByUserIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id);
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.UserId = GetUserId
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.userIdAttr = OS.BuiltinFunctions.getUserId();
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.EntityId = SearchResult.Id
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityIdAttr = vars.value.searchResultInLocal.idAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.EntityType = SearchResult.Type
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.entityTypeAttr = vars.value.searchResultInLocal.typeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.HouseholderId = SearchResult.HouseholderId
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.householderIdAttr = vars.value.searchResultInLocal.householderIdAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Name = SearchResult.Name
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.nameAttr = vars.value.searchResultInLocal.nameAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.AdditionalInformation = SearchResult.AdditionalInformation
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.additionalInformationAttr = vars.value.searchResultInLocal.additionalInformationAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Location = SearchResult.Location
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.locationAttr = vars.value.searchResultInLocal.locationAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.SearchedOn = CurrDateTime
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.searchedOnAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Latitude = SearchResult.Latitude
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.latitudeAttr = vars.value.searchResultInLocal.latitudeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.Longitude = SearchResult.Longitude
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.longitudeAttr = vars.value.searchResultInLocal.longitudeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nm5Cc_RfYEq+C1vT4tVJCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// GetConnectSearchRecentClickedResultsByUserId.List.Current.ConnectSearch_RecentClickedResults.SearchTargetId = In_SearchTargetId
getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentClickedResultsAttr.searchTargetIdAttr = model.variables.in_SearchTargetIdIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OQA7XiXMWkiAdb89GRidlw", callContext.id);
// Execute Action: CreateOrUpdateConnectSearch_RecentClickedResults
model.flush();
return UBTConnectModel.entities.ConnectSearch_RecentClickedResults.createOrUpdate(getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getCurrent(callContext.iterationContext), callContext).then(function (value) {
createOrUpdateConnectSearch_RecentClickedResultsVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0pf8jzQXnUe3SHDeBBsWIA", callContext.id);
// Aggregate: AllRecenctClickedResults
var allRecenctClickedResultsAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;
var qpstEntityType = vars.value.searchResultInLocal.typeAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11";
} else {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, \"ENConnectSearch_RecentClickedResults\".\"UserId\" o1, \"ENConnectSearch_RecentClickedResults\".\"EntityId\" o2, \"ENConnectSearch_RecentClickedResults\".\"EntityType\" o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, \"ENConnectSearch_RecentClickedResults\".\"Name\" o5, \"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" o6, \"ENConnectSearch_RecentClickedResults\".\"Location\" o7, \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" o8, \"ENConnectSearch_RecentClickedResults\".\"Latitude\" o9, \"ENConnectSearch_RecentClickedResults\".\"Longitude\" o10, \"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentClickedResults\" \"ENConnectSearch_RecentClickedResults\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ";
if (((qpstEntityType.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"EntityType\" = :qpstEntityType) AND (\"ENConnectSearch_RecentClickedResults\".\"EntityType\" IS NOT NULL))";
argsList.add("qpstEntityType", /*TEXT*/ 0, qpstEntityType);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"EntityType\" IS NULL)";
}
fromAndWhereSql += " AND (";
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)))";
orderBySql += " ORDER BY \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" DESC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentClickedResultsAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeScreenBlock_Search$EventSectionOnItemClick$Action$allRecenctClickedResultsAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, vars.value.searchResultInLocal.typeAttr, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return allRecenctClickedResultsVar.value;
});
};
return allRecenctClickedResultsAggr();
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cPuErnwPTk+Xafnr1BCRnw", callContext.id) && (allRecenctClickedResultsVar.value.listOut.length > UBTConnectClientVariables.getSearch_RecenctClickedResultsLimit()))) {
// Foreach AllRecenctClickedResults.List
callContext.iterationContext.registerIterationStart(allRecenctClickedResultsVar.value.listOut);
return OS.Flow.tryFinally(function () {
var allRecenctClickedResultsIterator = callContext.iterationContext.getIterator(allRecenctClickedResultsVar.value.listOut);
var allRecenctClickedResultsIndex = UBTConnectClientVariables.getSearch_RecenctClickedResultsLimit();
return OS.Flow.whileAsync(function () {
return (OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jrc9S6tDa0COfas8B+MdrA", callContext.id) && (allRecenctClickedResultsIndex < allRecenctClickedResultsVar.value.listOut.length));
}, function () {
allRecenctClickedResultsIterator.currentRowNumber = allRecenctClickedResultsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8DCkKMEBqkSPi2I5Vb8LJw", callContext.id);
// Execute Action: DeleteConnectSearch_RecentClickedResults
model.flush();
return UBTConnectModel.entities.ConnectSearch_RecentClickedResults.delete(allRecenctClickedResultsVar.value.listOut.getItem(allRecenctClickedResultsIndex.valueOf()).connectSearch_RecentClickedResultsAttr.idAttr, callContext).then(function () {
allRecenctClickedResultsIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(allRecenctClickedResultsVar.value.listOut);
});
}

});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xGmjHQtbjEiVdZlyJctxRw", callContext.id) && model.variables.in_IsEventNavigationIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TxaKgHKQ80OYOw6QkGhHog", callContext.id);
// Trigger Event: Event_SearchResultClick
return controller.event_SearchResultClick$Action(vars.value.searchResultInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oeNiK0Fah02LYntmLg9A7Q", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XhAdXN3uz0C6oXHOZZtlew", callContext.id) && (vars.value.searchResultInLocal.typeAttr === UBTConnectModel.staticEntities.connect_Entity.locality))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L5A3pjHO90e7j9EFZqCQzQ", callContext.id);
// Destination: /UBTConnect/Locality_Details
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {
LocalityId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(vars.value.searchResultInLocal.idAttr)), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VAymEHAIakWeF+fWvyxqQQ", callContext.id) && vars.value.isRecentResultInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gQ_OFCQx3UmFdQoOi0RE6A", callContext.id);
// Aggregate: GetAllSearchRecentClickedResultsByUserId
var getAllSearchRecentClickedResultsByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;
var qpstEntityType = vars.value.searchResultInLocal.typeAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11";
} else {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, \"ENConnectSearch_RecentClickedResults\".\"UserId\" o1, \"ENConnectSearch_RecentClickedResults\".\"EntityId\" o2, \"ENConnectSearch_RecentClickedResults\".\"EntityType\" o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, \"ENConnectSearch_RecentClickedResults\".\"Name\" o5, \"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" o6, \"ENConnectSearch_RecentClickedResults\".\"Location\" o7, \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" o8, \"ENConnectSearch_RecentClickedResults\".\"Latitude\" o9, \"ENConnectSearch_RecentClickedResults\".\"Longitude\" o10, \"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentClickedResults\" \"ENConnectSearch_RecentClickedResults\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ";
if (((qpstEntityType.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"EntityType\" = :qpstEntityType) AND (\"ENConnectSearch_RecentClickedResults\".\"EntityType\" IS NOT NULL))";
argsList.add("qpstEntityType", /*TEXT*/ 0, qpstEntityType);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"EntityType\" IS NULL)";
}
fromAndWhereSql += " AND (";
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)))";
orderBySql += " ORDER BY \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" DESC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentClickedResultsAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeScreenBlock_Search$EventSectionOnItemClick$Action$getAllSearchRecentClickedResultsByUserIdAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, vars.value.searchResultInLocal.typeAttr, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getAllSearchRecentClickedResultsByUserIdVar.value;
});
};
return getAllSearchRecentClickedResultsByUserIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wjxN5lMDg0i4fqMda3lnYA", callContext.id);
// SourceListList = GetAllSearchRecentClickedResultsByUserId.List
vars.value.sourceListListVar = OS.DataConversion.JSConversions.typeConvertRecordList(getAllSearchRecentClickedResultsByUserIdVar.value.listOut, new UBTConnectModel.LongIntegerBooleanRecordList(), function (source, target) {
target.householdIdAttr = OS.BuiltinFunctions.textToLongInteger(source.connectSearch_RecentClickedResultsAttr.householderIdAttr);
target.recordDisabledAttr = false;
return target;
});
});
} else {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aforhM1WM0KAmt0i9ZgKcg", callContext.id) && (vars.value.searchResultInLocal.typeAttr === UBTConnectModel.staticEntities.connect_Entity.member))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sf95GgRFx0uAoSObqVsUFA", callContext.id);
// SourceListList = FetchSearchResults.People
vars.value.sourceListListVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.fetchSearchResultsDataAct.peopleOut, new UBTConnectModel.LongIntegerBooleanRecordList(), function (source, target) {
target.householdIdAttr = OS.BuiltinFunctions.textToLongInteger(source.householderIdAttr);
target.recordDisabledAttr = source.recordDisabledAttr;
return target;
});
} else {
if((vars.value.searchResultInLocal.typeAttr === UBTConnectModel.staticEntities.connect_Entity.household)) {
// SourceListList
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PSPfplRwb0+l2++5oCC3rg", callContext.id);
// SourceListList = FetchSearchResults.Households
vars.value.sourceListListVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.fetchSearchResultsDataAct.householdsOut, new UBTConnectModel.LongIntegerBooleanRecordList(), function (source, target) {
target.householdIdAttr = OS.BuiltinFunctions.textToLongInteger(source.idAttr);
target.recordDisabledAttr = source.recordDisabledAttr;
return target;
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NcnyNjvCU0SX7g4yBx3GdA", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EA8vHQA6AkmjOC56UXVMrg", callContext.id);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zm5WKSZayUaaSgVLNXV4uw", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cdAijcWl3UKdlYOxw8N7ag", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aNVpRn3+DUGOficRB5+laA", callContext.id);
// Execute Action: ListFilter_AvailableHouseholds
listFilter_AvailableHouseholdsVar.value = OS.SystemActions.listFilter(vars.value.sourceListListVar, function (p) {
return !(p.recordDisabledAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OmlEtaScP06BTdn39Z3DaA", callContext.id);
// HouseholdIdList.CarouselHouseholdItem = ListFilter_AvailableHouseholds.FilteredList
vars.value.householdIdListVar.carouselHouseholdItemAttr = OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_AvailableHouseholdsVar.value.filteredListOut, new UBTConnectModel.SwipeActionLongIntegerRecordList(), function (source, target) {
target.householdAttr = source.householdIdAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vzxIrz6d7UK6zoqqTA0D0A", callContext.id);
// Execute Action: ListDistinct
listDistinctVar.value = OS.SystemActions.listDistinct(vars.value.householdIdListVar.carouselHouseholdItemAttr, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dVNHuEwVuEOG+_b0O+ILBQ", callContext.id);
// HouseholdIdList.CarouselHouseholdItem = ListDistinct.DistinctList
vars.value.householdIdListVar.carouselHouseholdItemAttr = listDistinctVar.value.distinctListOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3hKKsJN_hkiRHCx16FCfGA", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdIdListVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nlxqloHKY0W7pV8c9ZDR2A", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(vars.value.searchResultInLocal.householderIdAttr)), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k4W721A0GkyO1g0HrMVayg", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(vars.value.searchResultInLocal.householderIdAttr)), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

});
}

});
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:43DRV1XubUG9XYbYXB9oHw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:43DRV1XubUG9XYbYXB9oHw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_SectionOnItemClick$vars", [{
name: "SearchResult",
attrName: "searchResultInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Search_CSModel.SearchResultRec();
},
complexType: Connect_Search_CSModel.SearchResultRec
}, {
name: "IsRecentResult",
attrName: "isRecentResultInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SourceListList",
attrName: "sourceListListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.LongIntegerBooleanRecordList();
},
complexType: UBTConnectModel.LongIntegerBooleanRecordList
}, {
name: "HouseholdIdList",
attrName: "householdIdListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
},
complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
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
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4eylaWKIsUGvxZ2R6wVl8A:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.4eylaWKIsUGvxZ2R6wVl8A:XeZQ4ELwt3jOcflIKmxQag", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q5sOQHauc0CN+e+RAJLErQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:udp7fY+hdE+egngQw+dbzQ", callContext.id);
// isBirthdaySearchEnabled = Connect_OutSystems_PermissionCheck(C2EnableSearchByBirthday)
model.variables.isBirthdaySearchEnabledVar = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnectModel.staticEntities.outSystems_FF.c2EnableSearchByBirthday, callContext).hasAccessOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rKl25qwdFEyHsa7E7rndCQ", callContext.id) && model.variables.isBirthdaySearchEnabledVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SoYF8GD2SkebYf_mXzS9ow", callContext.id);
// Refresh Query: Get_SearchBirthdayOptions
var result = controller.get_SearchBirthdayOptions$AggrRefresh(50, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yGXUFgCwQ0yw1U28nFa2sg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yGXUFgCwQ0yw1U28nFa2sg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4eylaWKIsUGvxZ2R6wVl8A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4eylaWKIsUGvxZ2R6wVl8A", callContext.id);
throw ex;

});
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
var searchCategory_GetListVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.searchCategory_GetListVar = searchCategory_GetListVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NzpebtpAlEij1IXaLmuTYA:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.NzpebtpAlEij1IXaLmuTYA:y70PpdUIjp+DBtlKJtnRnw", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tWIx_mlz8Ei0q4q9mQzt4g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uZ+UvEQxg0KCsJt++Sg3TA", callContext.id) && model.variables.tagListVar.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A_WKn4JwDk6XU3c8F6qpHA", callContext.id);
// Execute Action: SearchCategory_GetList
searchCategory_GetListVar.value = UBTConnect_UtilsController.default.searchCategory_GetList$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tpCbzMDRkUq8DDzIuuCRIg", callContext.id);
// TagList = SearchCategory_GetList.SearchCategoryItemsList
model.variables.tagListVar = OS.DataConversion.JSConversions.typeConvertRecordList(searchCategory_GetListVar.value.searchCategoryItemsListOut, new UBTConnectModel.TagList(), function (source, target) {
target.textAttr = source.labelAttr;
target.identifierAttr = source.searchCategoryIdAttr;
target.iconIdAttr = source.uBTIconAttr;
target.isSelectedAttr = (source.searchCategoryIdAttr === model.variables.selectedCategoryVar);
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:izqfbGCeWUm62dM+fACsgA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:izqfbGCeWUm62dM+fACsgA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NzpebtpAlEij1IXaLmuTYA", callContext.id);
}

};
Controller.prototype._inputEvent_ClearString$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InputEvent_ClearString");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hjtnckPIuUGZK5MB4Kd53Q:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.hjtnckPIuUGZK5MB4Kd53Q:sBGyGaMmXOTBuunonj6aAA", "UBTConnect", "InputEvent_ClearString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HE7jyA65wkG1qjQH_sbWlw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jS9Qp99TmUKYweSyW2wziA", callContext.id);
// SearchKey_Current = ""
model.variables.searchKey_CurrentVar = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jS9Qp99TmUKYweSyW2wziA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SearchKey_LastSearched = ""
model.variables.searchKey_LastSearchedVar = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qjR+7mt_sEaNIZXDYEUhOw", callContext.id);
// Execute Action: Action_ClearResults
return controller._action_ClearResults$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fo2VLwYVdUKRokfdLqeyjg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hjtnckPIuUGZK5MB4Kd53Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hjtnckPIuUGZK5MB4Kd53Q", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_RecentSearch_RemoveAll$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_RecentSearch_RemoveAll");
callContext = controller.callContext(callContext);
var getConnectSearchRecentSearchTermsByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnectModel.ConnectSearch_RecentSearchTermRecordList))());
var getConnectSearchRecentClickedResultsByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList))());
varBag.callContext = callContext;
varBag.getConnectSearchRecentSearchTermsByUserIdVar = getConnectSearchRecentSearchTermsByUserIdVar;
varBag.getConnectSearchRecentClickedResultsByUserIdVar = getConnectSearchRecentClickedResultsByUserIdVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JzEAd113EkexZeLKGgx0xw:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.JzEAd113EkexZeLKGgx0xw:aLe01gjWgUfgvAuLkYOkLQ", "UBTConnect", "OnClick_RecentSearch_RemoveAll", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gNoNSIKWQU2UN9gsXjRTtQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dNz8HbWJs0KE6pDS+61omw", callContext.id);
// Aggregate: GetConnectSearchRecentSearchTermsByUserId
var getConnectSearchRecentSearchTermsByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentSearchTermRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENConnectSearch_RecentSearchTerm\".\"Id\" o0, NULL o1, NULL o2, NULL o3, NULL o4";
} else {
selectSql += "\"ENConnectSearch_RecentSearchTerm\".\"Id\" o0, \"ENConnectSearch_RecentSearchTerm\".\"UserId\" o1, \"ENConnectSearch_RecentSearchTerm\".\"SearchedTerm\" o2, \"ENConnectSearch_RecentSearchTerm\".\"SearchedOn\" o3, \"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentSearchTerm\" \"ENConnectSearch_RecentSearchTerm\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentSearchTerm\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentSearchTerm\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentSearchTerm\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (";
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentSearchTerm\".\"SearchTargetId\" IS NULL)))";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentSearchTermRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentSearchTermAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeScreenBlock_Search$OnClickRecentSearchRemoveAll$Action$getConnectSearchRecentSearchTermsByUserIdAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getConnectSearchRecentSearchTermsByUserIdVar.value;
});
};
return getConnectSearchRecentSearchTermsByUserIdAggr().then(function () {
// Foreach GetConnectSearchRecentSearchTermsByUserId.List
callContext.iterationContext.registerIterationStart(getConnectSearchRecentSearchTermsByUserIdVar.value.listOut);
}).then(function () {
return OS.Flow.tryFinally(function () {
var getConnectSearchRecentSearchTermsByUserIdIterator = callContext.iterationContext.getIterator(getConnectSearchRecentSearchTermsByUserIdVar.value.listOut);
var getConnectSearchRecentSearchTermsByUserIdIndex = 0;
return OS.Flow.whileAsync(function () {
return (OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nx3TxBVY+06k_+HMv_x4hQ", callContext.id) && (getConnectSearchRecentSearchTermsByUserIdIndex < getConnectSearchRecentSearchTermsByUserIdVar.value.listOut.length));
}, function () {
getConnectSearchRecentSearchTermsByUserIdIterator.currentRowNumber = getConnectSearchRecentSearchTermsByUserIdIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6oRGYzfyBE+g6sm4En3D4A", callContext.id);
// Execute Action: DeleteConnectSearch_RecentSearchTerm
model.flush();
return UBTConnectModel.entities.ConnectSearch_RecentSearchTerm.delete(getConnectSearchRecentSearchTermsByUserIdVar.value.listOut.getItem(getConnectSearchRecentSearchTermsByUserIdIndex.valueOf()).connectSearch_RecentSearchTermAttr.idAttr, callContext).then(function () {
getConnectSearchRecentSearchTermsByUserIdIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(getConnectSearchRecentSearchTermsByUserIdVar.value.listOut);
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2w4m3WQuZ0SgWt+ZYQ5L6g", callContext.id);
// Aggregate: GetConnectSearchRecentClickedResultsByUserId
var getConnectSearchRecentClickedResultsByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstSearchTargetId = model.variables.in_SearchTargetIdIn;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11";
} else {
selectSql += "\"ENConnectSearch_RecentClickedResults\".\"Id\" o0, \"ENConnectSearch_RecentClickedResults\".\"UserId\" o1, \"ENConnectSearch_RecentClickedResults\".\"EntityId\" o2, \"ENConnectSearch_RecentClickedResults\".\"EntityType\" o3, \"ENConnectSearch_RecentClickedResults\".\"HouseholderId\" o4, \"ENConnectSearch_RecentClickedResults\".\"Name\" o5, \"ENConnectSearch_RecentClickedResults\".\"AdditionalInformation\" o6, \"ENConnectSearch_RecentClickedResults\".\"Location\" o7, \"ENConnectSearch_RecentClickedResults\".\"SearchedOn\" o8, \"ENConnectSearch_RecentClickedResults\".\"Latitude\" o9, \"ENConnectSearch_RecentClickedResults\".\"Longitude\" o10, \"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_yde_ConnectSearch_RecentClickedResults\" \"ENConnectSearch_RecentClickedResults\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"UserId\" = :qpinUserId) AND (\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (";
if (((qpstSearchTargetId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = :qpstSearchTargetId) AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NOT NULL))";
argsList.add("qpstSearchTargetId", /*TEXT*/ 0, qpstSearchTargetId);
} else {
fromAndWhereSql += "(\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)";
}
fromAndWhereSql += " OR ((\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" = ";
fromAndWhereSql += ("\'" + (UBTConnectModel.staticEntities.type_SearchTarget.global.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ") AND (\"ENConnectSearch_RecentClickedResults\".\"SearchTargetId\" IS NULL)))";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"connectSearch_RecentClickedResultsAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect.aggregates.IDB"], function (UBTConnectAggregates_IDB) {
return UBTConnectAggregates_IDB.executeScreenBlock_Search$OnClickRecentSearchRemoveAll$Action$getConnectSearchRecentClickedResultsByUserIdAggr(OS.BuiltinFunctions.getUserId(), model.variables.in_SearchTargetIdIn, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getConnectSearchRecentClickedResultsByUserIdVar.value;
});
};
return getConnectSearchRecentClickedResultsByUserIdAggr().then(function () {
// Foreach GetConnectSearchRecentClickedResultsByUserId.List
callContext.iterationContext.registerIterationStart(getConnectSearchRecentClickedResultsByUserIdVar.value.listOut);
});
}).then(function () {
return OS.Flow.tryFinally(function () {
var getConnectSearchRecentClickedResultsByUserIdIterator = callContext.iterationContext.getIterator(getConnectSearchRecentClickedResultsByUserIdVar.value.listOut);
var getConnectSearchRecentClickedResultsByUserIdIndex = 0;
return OS.Flow.whileAsync(function () {
return (OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZNTQrg+RGUOYUAODcCe0CA", callContext.id) && (getConnectSearchRecentClickedResultsByUserIdIndex < getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.length));
}, function () {
getConnectSearchRecentClickedResultsByUserIdIterator.currentRowNumber = getConnectSearchRecentClickedResultsByUserIdIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VDPoaS9adkiQz6OLgumEPA", callContext.id);
// Execute Action: DeleteConnectSearch_RecentClickedResults
model.flush();
return UBTConnectModel.entities.ConnectSearch_RecentClickedResults.delete(getConnectSearchRecentClickedResultsByUserIdVar.value.listOut.getItem(getConnectSearchRecentClickedResultsByUserIdIndex.valueOf()).connectSearch_RecentClickedResultsAttr.idAttr, callContext).then(function () {
getConnectSearchRecentClickedResultsByUserIdIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(getConnectSearchRecentClickedResultsByUserIdVar.value.listOut);
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1iLFNG8cakSwM8ZB2G_mQQ", callContext.id);
// Refresh Query: Get_RecentSearchTerms
var result = controller.get_RecentSearchTerms$AggrRefresh(10, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tZjirShhikOlSUdHdSeqbQ", callContext.id);
// Refresh Query: Get_RecentClickedResults
var result = controller.get_RecentClickedResults$AggrRefresh(5, 0, callContext);
model.flush();
return result;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TZvmIPqGukCLNvk+yDVVvA", callContext.id);
});
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JzEAd113EkexZeLKGgx0xw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JzEAd113EkexZeLKGgx0xw", callContext.id);
throw ex;

});
};
Controller.prototype._event_ApplyFilters$Action = function (optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFilterAppliedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_ApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_ApplyFilters$vars"))());
vars.value.optionList_ControlInLocal = optionList_ControlIn.clone();
vars.value.optionChoice_ControlInLocal = optionChoice_ControlIn.clone();
vars.value.subState_LocalitiesInLocal = subState_LocalitiesIn;
vars.value.subState_CountriesInLocal = subState_CountriesIn;
vars.value.sortBy_TitleInLocal = sortBy_TitleIn;
vars.value.hasFilterAppliedInLocal = hasFilterAppliedIn;
var countriesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.countriesVar = countriesVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Zsikd00wD0aW5HuxXWSyGQ:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.Zsikd00wD0aW5HuxXWSyGQ:Ti1aeZ_E+0xxoMF_VDL0kA", "UBTConnect", "Event_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xLojwGUTTEGzpxnWkman3Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jQh65tE3Ck+dKuZxpCG4fA", callContext.id);
// Execute Action: Countries
countriesVar.value = OS.SystemActions.listFilter(vars.value.optionList_ControlInLocal, function (p) {
return (p.titleAttr === vars.value.subState_CountriesInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JjZgQK+xdUW4o4Gd9ChFZQ", callContext.id);
// SelectedCountryIds = Countries.FilteredList.Current.SelectedIds
model.variables.selectedCountryIdsVar = countriesVar.value.filteredListOut.getCurrent(callContext.iterationContext).selectedIdsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JjZgQK+xdUW4o4Gd9ChFZQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HasFiltersApplied = hasFilterApplied
model.variables.hasFiltersAppliedVar = vars.value.hasFilterAppliedInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kbpaOthRykm+yaM1OC0S1Q", callContext.id);
// Execute Action: Action_RefreshSearch
return controller._action_RefreshSearch$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YKK++Z2LkUKA6K6g5tqbDw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Zsikd00wD0aW5HuxXWSyGQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Zsikd00wD0aW5HuxXWSyGQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_ApplyFilters$vars", [{
name: "OptionList_Control",
attrName: "optionList_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListList();
},
complexType: UBTConnectModel.Filter_Common_Control_ListList
}, {
name: "OptionChoice_Control",
attrName: "optionChoice_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ChoiceList();
},
complexType: UBTConnectModel.Filter_Common_Control_ChoiceList
}, {
name: "SubState_Localities",
attrName: "subState_LocalitiesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SubState_Countries",
attrName: "subState_CountriesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SortBy_Title",
attrName: "sortBy_TitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "hasFilterApplied",
attrName: "hasFilterAppliedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetLoaded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Handler_FilterSheetLoaded$vars"))());
vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:x7hGiwrwxUK+uQJrefebQw:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.x7hGiwrwxUK+uQJrefebQw:6jZ2PCxygqNt7bdFXE4Kow", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wP2pB5zMDUyrjXDQPC__Zg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lAZiZpc5xEmqLSe4+6PgOA", callContext.id);
// BottomSheetId_Filter_IsLoaded = True
model.variables.bottomSheetId_Filter_IsLoadedVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lAZiZpc5xEmqLSe4+6PgOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// BottomSheetId_Filter_ShowSubscriptionOnClick = ShowSubscriptionOnClick
model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar = vars.value.showSubscriptionOnClickInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h1AtDLzfKUuiDzLME3Q_uw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:x7hGiwrwxUK+uQJrefebQw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Handler_FilterSheetLoaded$vars", [{
name: "ShowSubscriptionOnClick",
attrName: "showSubscriptionOnClickInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_RecentSearchTerm_Remove$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_RecentSearchTerm_Remove");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Z+6Nlkytrk2lhL5YMB7qqA:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.Z+6Nlkytrk2lhL5YMB7qqA:_4_Fek7efjCMoSSTJfn3Sg", "UBTConnect", "OnClick_RecentSearchTerm_Remove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oPLpogwUH0eFvZuXkvTi7w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FBnqhSEg2k24fGHdBlXMLQ", callContext.id);
// Execute Action: DeleteConnectSearch_RecentSearchTerm
model.flush();
return UBTConnectModel.entities.ConnectSearch_RecentSearchTerm.delete(model.variables.get_RecentSearchTermsAggr.listOut.getCurrent(callContext.iterationContext).connectSearch_RecentSearchTermAttr.idAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z000mcrpp025D4_sy9WZ1Q", callContext.id);
// Refresh Query: Get_RecentSearchTerms
var result = controller.get_RecentSearchTerms$AggrRefresh(10, 0, callContext);
model.flush();
return result;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jMABFiXWwEWtH_3DC78+fQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Z+6Nlkytrk2lhL5YMB7qqA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Z+6Nlkytrk2lhL5YMB7qqA", callContext.id);
throw ex;

});
};
Controller.prototype._inputEvent_OnChange$Action = function (event_CurrentStringIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InputEvent_OnChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.InputEvent_OnChange$vars"))());
vars.value.event_CurrentStringInLocal = event_CurrentStringIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LmrhowTENUiF+0gonC0otA:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.LmrhowTENUiF+0gonC0otA:PsNbrUUBYhWPxIEMtW45vQ", "UBTConnect", "InputEvent_OnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PJ5uDvcTPEC__9sX1VS7IA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XDmFD9OSL0+RYe98YrngKw", callContext.id);
// SearchKey_Current = Event_CurrentString
model.variables.searchKey_CurrentVar = vars.value.event_CurrentStringInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XDmFD9OSL0+RYe98YrngKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// isBirthdayKeyWord = Index <> -1
model.variables.isBirthdayKeyWordVar = ((OS.BuiltinFunctions.index(model.variables.searchKey_CurrentVar, "birthday", 0, false, true)) !== (-1));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Wi2ozo5QE0ir1hFqHlQEog", callContext.id);
// Refresh Query: Get_RecentClickedResults
var result = controller.get_RecentClickedResults$AggrRefresh(5, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v12rEtlAGUW+ds_0Ebinww", callContext.id);
// Refresh Query: Get_RecentSearchTerms
var result = controller.get_RecentSearchTerms$AggrRefresh(10, 0, callContext);
model.flush();
return result;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z7tEhEk4cEyWbapkt0SIfw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LmrhowTENUiF+0gonC0otA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LmrhowTENUiF+0gonC0otA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.InputEvent_OnChange$vars", [{
name: "Event_CurrentString",
attrName: "event_CurrentStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onAfterFetch_FetchSearchResults$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_FetchSearchResults");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:iIJE4lkkUkWBOUJ1eeER_w:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.iIJE4lkkUkWBOUJ1eeER_w:4qAFAw36PL_M_YUn5D+M+Q", "UBTConnect", "OnAfterFetch_FetchSearchResults", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YT1CI1NDB0aWCb0EpUjghw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FjsA7xNti0uU_M6xs4zz_w", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FjsA7xNti0uU_M6xs4zz_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HasPeople = notFetchSearchResults.People.Empty and SelectedCategory = NullTextIdentifier or SelectedCategory = All or SelectedCategory = People
model.variables.hasPeopleVar = (!(model.variables.fetchSearchResultsDataAct.peopleOut.isEmpty) && (((model.variables.selectedCategoryVar === OS.BuiltinFunctions.nullTextIdentifier()) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.all)) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.people)));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FjsA7xNti0uU_M6xs4zz_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HasHouseholds = notFetchSearchResults.Households.Empty and SelectedCategory = NullTextIdentifier or SelectedCategory = All or SelectedCategory = Households
model.variables.hasHouseholdsVar = (!(model.variables.fetchSearchResultsDataAct.householdsOut.isEmpty) && (((model.variables.selectedCategoryVar === OS.BuiltinFunctions.nullTextIdentifier()) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.all)) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.households)));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FjsA7xNti0uU_M6xs4zz_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// HasPlaces = notFetchSearchResults.Places.Empty and SelectedCategory = NullTextIdentifier or SelectedCategory = All or SelectedCategory = Places
model.variables.hasPlacesVar = (!(model.variables.fetchSearchResultsDataAct.placesOut.isEmpty) && (((model.variables.selectedCategoryVar === OS.BuiltinFunctions.nullTextIdentifier()) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.all)) || (model.variables.selectedCategoryVar === UBTConnectModel.staticEntities.connect_SearchCategories.places)));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6pLBagf2K0GACRq+aJGI0w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:iIJE4lkkUkWBOUJ1eeER_w", callContext.id);
}

};
Controller.prototype._event_HorizontalTagListChanged$Action = function (updatedTagListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_HorizontalTagListChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_HorizontalTagListChanged$vars"))());
vars.value.updatedTagListInLocal = updatedTagListIn.clone();
var listFilterVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterVar = listFilterVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:I2Z8+kjbe0moFPcRiX9NVg:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q/ClientActions.I2Z8+kjbe0moFPcRiX9NVg:nue8B1PtC9Vo_ZAszepI4A", "UBTConnect", "Event_HorizontalTagListChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XdlKoH9zu0Ct8WogdyX7Cg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C_viqIHn_ketHz5G5v1tNg", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(vars.value.updatedTagListInLocal, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lIx+GLzCpEmfvtUEVAbTrA", callContext.id);
// SelectedCategory = TextToIdentifier
model.variables.selectedCategoryVar = OS.BuiltinFunctions.textToIdentifier(listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).identifierAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lIx+GLzCpEmfvtUEVAbTrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TagList = UpdatedTagList
model.variables.tagListVar = vars.value.updatedTagListInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hqr__u7YJUmROnOVGh11+w", callContext.id);
// Refresh Query: Get_RecentClickedResults
var result = controller.get_RecentClickedResults$AggrRefresh(5, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x6xDoVgDnkicbHAMKW58bA", callContext.id);
// Execute Action: Action_RefreshSearch
return controller._action_RefreshSearch$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a3d0KuN46kGBirV75NTipg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:I2Z8+kjbe0moFPcRiX9NVg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:I2Z8+kjbe0moFPcRiX9NVg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Search.ScreenBlock_Search.Event_HorizontalTagListChanged$vars", [{
name: "UpdatedTagList",
attrName: "updatedTagListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.TagList();
},
complexType: UBTConnectModel.TagList
}]);

Controller.prototype.inputEvent_Submit$Action = function (event_SubmittedStringIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputEvent_Submit$Action, callContext, event_SubmittedStringIn);

};
Controller.prototype.onClick_RecentSearchTerm$Action = function (termIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_RecentSearchTerm$Action, callContext, termIn);

};
Controller.prototype.event_FilterBottomSheet_tInitialized$Action = function (sheetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_FilterBottomSheet_tInitialized$Action, callContext, sheetIdIn);

};
Controller.prototype.action_RefreshSearch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_RefreshSearch$Action, callContext);

};
Controller.prototype.action_ClearResults$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_ClearResults$Action, callContext);

};
Controller.prototype.event_SectionOnItemClick$Action = function (searchResultIn, isRecentResultIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_SectionOnItemClick$Action, callContext, searchResultIn, isRecentResultIn);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.inputEvent_ClearString$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputEvent_ClearString$Action, callContext);

};
Controller.prototype.onClick_RecentSearch_RemoveAll$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_RecentSearch_RemoveAll$Action, callContext);

};
Controller.prototype.event_ApplyFilters$Action = function (optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFilterAppliedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_ApplyFilters$Action, callContext, optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFilterAppliedIn);

};
Controller.prototype.handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

};
Controller.prototype.onClick_RecentSearchTerm_Remove$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_RecentSearchTerm_Remove$Action, callContext);

};
Controller.prototype.inputEvent_OnChange$Action = function (event_CurrentStringIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputEvent_OnChange$Action, callContext, event_CurrentStringIn);

};
Controller.prototype.onAfterFetch_FetchSearchResults$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_FetchSearchResults$Action, callContext);

};
Controller.prototype.event_HorizontalTagListChanged$Action = function (updatedTagListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_HorizontalTagListChanged$Action, callContext, updatedTagListIn);

};
Controller.prototype.event_SearchResultClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SL8K4QWPmUuYK_Un+Uh_LA:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA:3Wo_76LXOCU7x0L+1+Cyxw", "UBTConnect", "Directory_Search", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BgyAyR5gyUCviAR8VhUs+Q:/NRWebFlows.SL8K4QWPmUuYK_Un+Uh_LA/NodesShownInESpaceTree.BgyAyR5gyUCviAR8VhUs+Q:UwJiVZZqMA0JFpBuNysQmA", "UBTConnect", "ScreenBlock_Search", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BgyAyR5gyUCviAR8VhUs+Q", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SL8K4QWPmUuYK_Un+Uh_LA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Search/ScreenBlock_Search On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Search/ScreenBlock_Search On Ready");
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

define("UBTConnect.Directory_Search.ScreenBlock_Search.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"zPAINc5sC0mgNOgC0rN_OQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SubmittedStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qr33izqVfk233YBzw0kLAg": {
getter: function (varBag, idService) {
return varBag.validateSearchPhoneNumberVar.value;
}
},
"bP8zYrlEBUWkDQVuySm+Pg": {
getter: function (varBag, idService) {
return varBag.vars.value.termInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LFKfLITh9UiqO5gGWfvpnA": {
getter: function (varBag, idService) {
return varBag.vars.value.sheetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QoYAYKZ3t0KOt_JFZWwKEA": {
getter: function (varBag, idService) {
return varBag.vars.value.loadingListVar;
}
},
"0S_uvfEr7kGd+Ti2Af5z3Q": {
getter: function (varBag, idService) {
return varBag.notRegisteredVar.value;
}
},
"mw58xTn_CU6l_TBuSVvj0w": {
getter: function (varBag, idService) {
return varBag.bubbleCommunicationExceptionVar.value;
}
},
"l7eu+FyH1U6OmUNoM9wblA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"j8YhsU0nMkysRlamFfOztQ": {
getter: function (varBag, idService) {
return varBag.createOrUpdateConnectSearch_RecentSearchTermVar.value;
}
},
"kwGpk0Xh1UeAeF7Ey+A5ng": {
getter: function (varBag, idService) {
return varBag.checkIfSearchtermAlreadyExistVar.value;
}
},
"IhRGHjzf10KpRjKNn5+Vug": {
getter: function (varBag, idService) {
return varBag.vars.value.sourceListListVar;
}
},
"GSIgiUnZV0GwYj4S6vx0dw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdListVar;
}
},
"otLaq0_iAkOUGGY+W9deEw": {
getter: function (varBag, idService) {
return varBag.vars.value.searchResultInLocal;
}
},
"L6E00ksOHEKuiV1IDyBBSQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isRecentResultInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zm5WKSZayUaaSgVLNXV4uw": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"aNVpRn3+DUGOficRB5+laA": {
getter: function (varBag, idService) {
return varBag.listFilter_AvailableHouseholdsVar.value;
}
},
"OQA7XiXMWkiAdb89GRidlw": {
getter: function (varBag, idService) {
return varBag.createOrUpdateConnectSearch_RecentClickedResultsVar.value;
}
},
"vzxIrz6d7UK6zoqqTA0D0A": {
getter: function (varBag, idService) {
return varBag.listDistinctVar.value;
}
},
"gQ_OFCQx3UmFdQoOi0RE6A": {
getter: function (varBag, idService) {
return varBag.getAllSearchRecentClickedResultsByUserIdVar.value;
}
},
"0pf8jzQXnUe3SHDeBBsWIA": {
getter: function (varBag, idService) {
return varBag.allRecenctClickedResultsVar.value;
}
},
"WeNzrotAD0WkK+MOzQZ1Lw": {
getter: function (varBag, idService) {
return varBag.getConnectSearchRecentClickedResultsByUserIdVar.value;
}
},
"A_WKn4JwDk6XU3c8F6qpHA": {
getter: function (varBag, idService) {
return varBag.searchCategory_GetListVar.value;
}
},
"dNz8HbWJs0KE6pDS+61omw": {
getter: function (varBag, idService) {
return varBag.getConnectSearchRecentSearchTermsByUserIdVar.value;
}
},
"2w4m3WQuZ0SgWt+ZYQ5L6g": {
getter: function (varBag, idService) {
return varBag.getConnectSearchRecentClickedResultsByUserIdVar.value;
}
},
"lfcWEE8TW0a9FwKcUMy+2g": {
getter: function (varBag, idService) {
return varBag.vars.value.optionList_ControlInLocal;
}
},
"+HAIf_yAfkuO4z4BSFM0mA": {
getter: function (varBag, idService) {
return varBag.vars.value.optionChoice_ControlInLocal;
}
},
"ODtjx3r_T0eULlUW8lCXOg": {
getter: function (varBag, idService) {
return varBag.vars.value.subState_LocalitiesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cGWrHCeC4UedS0vKLcweug": {
getter: function (varBag, idService) {
return varBag.vars.value.subState_CountriesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pP3QMeDkU0iiVcce5WeLLA": {
getter: function (varBag, idService) {
return varBag.vars.value.sortBy_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hpPlPn7NGEycHDBdSdMU2w": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFilterAppliedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jQh65tE3Ck+dKuZxpCG4fA": {
getter: function (varBag, idService) {
return varBag.countriesVar.value;
}
},
"IfohWx0y6kyZ_Om+x6qB1A": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JGhMoNDtv0u77whbwGlA6w": {
getter: function (varBag, idService) {
return varBag.vars.value.event_CurrentStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vpS1d4F4i0KX_g+nNkfQnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.updatedTagListInLocal;
}
},
"C_viqIHn_ketHz5G5v1tNg": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"VcHAkqBggkyuANpt0e0YwA": {
getter: function (varBag, idService) {
return varBag.model.variables.searchKey_CurrentVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MnjapX0j1UCpBk+krTb57A": {
getter: function (varBag, idService) {
return varBag.model.variables.searchKey_LastSearchedVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0S_lO+f2f0ut7uT+VaCmQg": {
getter: function (varBag, idService) {
return varBag.model.variables.hasSearchedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"23Ek9_hRU0i28WkgLXePZw": {
getter: function (varBag, idService) {
return varBag.model.variables.tagListVar;
}
},
"U9+Ja97jpEq7omUb6AhfEg": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedCategoryVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PpmLhS51sUK50Y1tOG3mRA": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedCountryIdsVar;
}
},
"dLV1SS0We0uvS+7ekH+9RQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"t2BBbeLUEEa_qjQ9vqWveA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_FilterVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"81LsOofsO0GDq7Cro5L_xA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasFiltersAppliedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Pe8kJjiuGkiXrAggi4SW4w": {
getter: function (varBag, idService) {
return varBag.model.variables.hasPeopleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1lqh087yAUy2RnVjb8R5MQ": {
getter: function (varBag, idService) {
return varBag.model.variables.hasHouseholdsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6clqHjyN4E6FMICQZZFXnA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasPlacesVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"AORTx10sUECnBqFXuJU6Qg": {
getter: function (varBag, idService) {
return varBag.model.variables.isBirthdayKeyWordVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"X+eei7EhokeqLdRLGtnUiA": {
getter: function (varBag, idService) {
return varBag.model.variables.isBirthdaySearchEnabledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"s0XR6WWYX02_bbcAMZQ_fA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_Filter_IsLoadedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+BVxILWnA0uO0IWj2LA6ug": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1ZUkDVgLUkiwMMUzQxWVzA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsInScreenSearchIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rn8zoDFYAkyZLOXWy0jHiw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsEventNavigationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+ihEZ0nR4UKTVcnKGe+DQw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchTargetIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HOiixtSk00CGVQHreJKGVQ": {
getter: function (varBag, idService) {
return varBag.model.variables.fetchSearchResultsDataAct;
}
},
"DeZJDfgKcE6pJvVbVSIATw": {
getter: function (varBag, idService) {
return varBag.model.variables.get_RecentClickedResultsAggr;
}
},
"k6wvT39R+EqztkuKRN_3lQ": {
getter: function (varBag, idService) {
return varBag.model.variables.get_RecentSearchTermsAggr;
}
},
"GBH9yutyzkG7n8K6STir+Q": {
getter: function (varBag, idService) {
return varBag.model.variables.get_SearchBirthdayOptionsAggr;
}
},
"szL9S1+PO0up+UHMzdPO6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"8A2O0fM3tE6L4WXSTJU4Ug": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"TF1PsKLlvk+KIuoBIsj_Jg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"zVTWcF4ZZ0mAsDtu1Cw2iQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Nd9DoStQNkaFN_e84tsZvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"G37Zllr6l06i26ePBJkKjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowRecentSearches"));
})(varBag.model, idService);
}
},
"ktOlcNh4lkCxOW4Qt3Y9tA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasResultsAndNotBirthday"));
})(varBag.model, idService);
}
},
"M3Z82khM2U2h4CvUYl1ySw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RecentSearch"));
})(varBag.model, idService);
}
},
"tTq5EoVOtk+it43doIt+TQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"AhUhEc1_wEaLcb9VYYbTvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasRecentItems"));
})(varBag.model, idService);
}
},
"84qBrpSDWEqJTDgnYk4umQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"zIvOX41UT0qqBy5grogc5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"pzYKHIsowkqDks_wG5_SbQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"PAKpvP7+Ok+snxSIUQoMsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Recent_SearchResults"));
})(varBag.model, idService);
}
},
"gquqI7SiLk66k2sEsYa1CQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"XrkYjYNKgEuIsZZWkR2few": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"qOgFg+cSZUuvBtelTcI05Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Recent_SearchTerms"));
})(varBag.model, idService);
}
},
"FRGKE0KQs0GCLKwTmFYv4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"u36eCTcnM0CgBmVZKJ92Yw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"oHf62dGawUKSoE3KHfM5pg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"wxIPai4l9EKJ9_qPDCaSpw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"HAI3+HCRrk6qaSVnLg3Yvg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("isBirthday"));
})(varBag.model, idService);
}
},
"1aiZgJXSY0+F3b3wCehM7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Padding"));
})(varBag.model, idService);
}
},
"bno9sVVppUCBpZJ6MIp1gQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"XSogtVQwwUmtKWXW+3xopg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSubmittedSearched"));
})(varBag.model, idService);
}
},
"tZ_305lLdUOt4yWGAtGlpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("StartedDifferentSearch"));
})(varBag.model, idService);
}
},
"vfcWKQeaaUeFbb0EJeQ4xw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"HLmFsid3Ck+KblNMDKENlQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"BGpJfcuZ102V+se24KNbXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasPlaces_"));
})(varBag.model, idService);
}
},
"DJfcvEzJHE6Mlm0MFtNhuw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PlacesSection"));
})(varBag.model, idService);
}
},
"v0WJLKNP7ki6w4ltiF6IRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasHouseholds_"));
})(varBag.model, idService);
}
},
"+rQRtsHl5Eq_fcX0cLUa8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HouseholdsSection"));
})(varBag.model, idService);
}
},
"64s0mYEt6EmtB41G0KTM7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasPeople_"));
})(varBag.model, idService);
}
},
"ZmQsCt2lxkemsOFVasGHDw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MembersSection"));
})(varBag.model, idService);
}
},
"8U+jU8c_Dk6LBCF9KIeHSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("EmptyState"));
})(varBag.model, idService);
}
},
"YEHfSwOQHECmmrH5qeXrZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowSeparator"));
})(varBag.model, idService);
}
},
"28IZnKEchkaWP4au+M9BDg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NoResults"));
})(varBag.model, idService);
}
},
"rqOOqpaHCEiVNp2rgvSeDA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Y4GJOtd2PU+KcnP4PqVYzw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"J_LTV0gtWECCpYgWoHgzhw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"IXWwsnoWQ0SVysGdLmK1cw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"d10PK+GuxUG3cQuZKJ8+wA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheets"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
