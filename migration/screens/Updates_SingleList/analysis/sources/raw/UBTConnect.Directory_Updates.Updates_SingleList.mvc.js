define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Updates_CS.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$model", "UBTConnect.Directory_Updates.UpdateItem_Header.mvc$model", "UBTConnect.Directory_Updates.Updates_NoItemsFound.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.Directory_Updates.SectionHeader.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_Updates_DateRangeList", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect.model$UI_Updates_DateRangeRec", "UBTConnect.model$TextGender2IdentifierRecordList", "Connect_Updates_CS.model$Filter_DateRec", "UBTConnect.controller$ScrollTop", "UBTConnect.model$UI_UpdateItemList", "UBTConnect.controller$Directory_Updates_GetUpdatedBreakpoints", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$RememberFocusedScrollAnchor", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.model$Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$Directory_Updates_GetCarouselPreloadedHouseholds", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$SwipeActionLongIntegerRecordList", "NavigationHandler.controller$GetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.controller$GetSkeletonList_UI_Updates", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate", "NavigationHandler.controller$GetFocusedScrollAnchorOnBack", "UBTConnect.controller$Directory_Updates_GetBreakpoints", "UBTConnect.controller$Directory_Updates_GetListBreakpoint", "UBTConnect.model$Updates_DateRangesList", "UBTConnect.controller$Directory_Updates_AugmentDateRanges", "UBTConnect.controller$Directory_Updates_MarkAllAsRead"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Updates_CSModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvcModel, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel, UBTConnect_Directory_Updates_UpdateItem_Header_mvcModel, UBTConnect_Directory_Updates_Updates_NoItemsFound_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Directory_Updates_SectionHeader_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvcModel, NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_mvcModel) {
var OS = OutSystems.Internal;

var FetchUpdatesDataActRec = (function (_super) {
__extends(FetchUpdatesDataActRec, _super);
function FetchUpdatesDataActRec(defaults) {
_super.apply(this, arguments);
}
FetchUpdatesDataActRec.attributesToDeclare = function () {
return [
this.attr("UI_UpdateItemList", "uI_UpdateItemListOut", "UI_UpdateItemList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItemList());
}, true, UBTConnectModel.UI_UpdateItemList), 
this.attr("UnreadCount", "unreadCountOut", "UnreadCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FetchUpdatesDataActRec.init();
return FetchUpdatesDataActRec;
})(OS.Model.DataSourceRecord);
var GetDateRangesDataActRec = (function (_super) {
__extends(GetDateRangesDataActRec, _super);
function GetDateRangesDataActRec(defaults) {
_super.apply(this, arguments);
}
GetDateRangesDataActRec.attributesToDeclare = function () {
return [
this.attr("DateRangesList", "dateRangesListOut", "DateRangesList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Updates_DateRangesList());
}, true, UBTConnectModel.Updates_DateRangesList)
].concat(_super.attributesToDeclare.call(this));
};
GetDateRangesDataActRec.fromStructure = function (str) {
return new GetDateRangesDataActRec(new GetDateRangesDataActRec.RecordClass({
dateRangesListOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetDateRangesDataActRec.init();
return GetDateRangesDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Filter_UpdateTypeOptions", "filter_UpdateTypeOptionsVar", "Filter_UpdateTypeOptions", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TagList());
}, false, UBTConnectModel.TagList), 
this.attr("Filter_BottomSheetId", "filter_BottomSheetIdVar", "Filter_BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Filter_Updates", "filter_UpdatesVar", "Filter_Updates", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.Filter_UpdatesRec());
}, false, Connect_Updates_CSModel.Filter_UpdatesRec), 
this.attr("Filter_DefaultState", "filter_DefaultStateVar", "Filter_DefaultState", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.Filter_UpdatesRec());
}, false, Connect_Updates_CSModel.Filter_UpdatesRec), 
this.attr("HasFiltersApplied", "hasFiltersAppliedVar", "HasFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowMarkAll", "showMarkAllVar", "ShowMarkAll", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("DateRanges", "dateRangesVar", "DateRanges", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Updates_DateRangeList());
}, false, UBTConnectModel.UI_Updates_DateRangeList), 
this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_IsLoaded", "bottomSheetId_IsLoadedVar", "BottomSheetId_IsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_ShowSubscription", "bottomSheetId_ShowSubscriptionVar", "BottomSheetId_ShowSubscription", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Breakpoints", "breakpointsVar", "Breakpoints", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointList());
}, false, UBTConnectModel.UI_UpdateItem_BreakpointList), 
this.attr("CurrentBreakpoint", "currentBreakpointVar", "CurrentBreakpoint", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointRec());
}, false, UBTConnectModel.UI_UpdateItem_BreakpointRec), 
this.attr("EventListener", "eventListenerVar", "EventListener", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("EventListenerTarget", "eventListenerTargetVar", "EventListenerTarget", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("IsHeaderScrolled", "isHeaderScrolledVar", "IsHeaderScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShareableUpdateItem", "shareableUpdateItemVar", "ShareableUpdateItem", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.UI_UpdateItemRec());
}, false, Connect_Updates_CSModel.UI_UpdateItemRec), 
this.attr("IsShareOpen", "isShareOpenVar", "IsShareOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShareableObjectId", "shareableObjectIdVar", "ShareableObjectId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsToggleSearch", "isToggleSearchVar", "IsToggleSearch", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("FocusedScrollAnchorId", "focusedScrollAnchorIdVar", "FocusedScrollAnchorId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CurrentSearchString", "currentSearchStringVar", "CurrentSearchString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("FetchUpdates", "fetchUpdatesDataAct", "fetchUpdatesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FetchUpdatesDataActRec());
}, true, FetchUpdatesDataActRec), 
this.attr("GetDateRanges", "getDateRangesDataAct", "getDateRangesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetDateRangesDataActRec());
}, true, GetDateRangesDataActRec)
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
Model._hasValidationWidgetsValue = ((((((((((((((((UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Updates_UpdateItem_Header_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Updates_Updates_NoItemsFound_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Updates_SectionHeader_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvcModel.hasValidationWidgets) || NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Updates.Updates_SingleList");
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Updates_CS.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$model", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon.mvc$view", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$view", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$view", "UBTConnect.Directory_Updates.UpdateItem_Header.mvc$view", "UBTConnect.Directory_Updates.Updates_NoItemsFound.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect.Directory_Updates.SectionHeader.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$view", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.Directory_Updates.Directory_Updates_FilterSheet.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_Updates_DateRangeList", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect.model$UI_Updates_DateRangeRec", "UBTConnect.model$TextGender2IdentifierRecordList", "Connect_Updates_CS.model$Filter_DateRec", "UBTConnect.controller$ScrollTop", "UBTConnect.model$UI_UpdateItemList", "UBTConnect.controller$Directory_Updates_GetUpdatedBreakpoints", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$RememberFocusedScrollAnchor", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.model$Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$Directory_Updates_GetCarouselPreloadedHouseholds", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$SwipeActionLongIntegerRecordList", "NavigationHandler.controller$GetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.controller$GetSkeletonList_UI_Updates", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate", "NavigationHandler.controller$GetFocusedScrollAnchorOnBack", "UBTConnect.controller$Directory_Updates_GetBreakpoints", "UBTConnect.controller$Directory_Updates_GetListBreakpoint", "UBTConnect.model$Updates_DateRangesList", "UBTConnect.controller$Directory_Updates_AugmentDateRanges", "UBTConnect.controller$Directory_Updates_MarkAllAsRead"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Updates_CSModel, UBTConnect_UtilsController, NavigationHandlerController, UBTJavaScriptUtilsController, React, OSView, UBTConnect_Directory_Updates_Updates_SingleList_mvc_model, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnect_Directory_Updates_UpdateItem_Header_mvc_view, UBTConnect_Directory_Updates_Updates_NoItemsFound_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Updates_SectionHeader_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view) {
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
        View.displayName = "Directory_Updates.Updates_SingleList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/UBTConnect.Directory_Updates.Updates_SingleList.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnect_Directory_Updates_UpdateItem_Header_mvc_view, UBTConnect_Directory_Updates_Updates_NoItemsFound_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Updates_SectionHeader_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Updates_Updates_SingleList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Updates_SingleList";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, {
inputs: {
isGrayBackground: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onHeaderScrolled$Action: function (event_IsHeaderScrolledIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages_FixedTitle OnHeaderScrolled");
controller.handler_OnHeaderScrolled$Action(event_IsHeaderScrolledIn, controller.callContext(eventHandlerContext));
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
return [$if(model.variables.isToggleSearchVar, false, this, function () {
return [$if(model.variables.isHeaderScrolledVar, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("PY5nEFVCUU2tmOll5oWO9g.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.row;
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "full-width"
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
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowLeftAlt,
In_ExtendedClasses: "margin-right-s",
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.handler_ToggleSearch$Action(controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("Search_PostScroll.In_Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SearchInputRec();
rec.initalStringAttr = model.variables.currentSearchStringVar;
rec.searchPromptAttr = "Search updates";
rec.debounce_DelayMSAttr = 300;
rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
rec.enableAutocompleteHTMLAttr = false;
rec.isSyncValueWithInputAttr = true;
return rec;
}();
}, function () {
return model.variables.currentSearchStringVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Submit$Action: function (event_SubmittedStringIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
return controller.handler_FilterSearchText$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
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
return controller.handler_FilterSearchText$Action("", controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_OnChange$Action: function (event_CurrentStringIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
controller.handler_OnChangeSearchInput$Action(event_CurrentStringIn, false, controller.callContext(eventHandlerContext));
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
name: "Search_PostScroll",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.currentSearchStringVar)]
})];
}, function () {
return ["Updates"];
})];
}, function () {
return ["Updates"];
})];
}),
placeholder_Header_Right: new PlaceholderContent(function () {
return [$if(model.variables.isHeaderScrolledVar, false, this, function () {
return [$if(model.variables.isToggleSearchVar, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.search,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.handler_ToggleSearch$Action(controller.callContext(eventHandlerContext));
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
name: "Icon_Search",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_view, {
inputs: {
HaveFiltersApplied: model.variables.hasFiltersAppliedVar,
isLoaded: model.variables.bottomSheetId_IsLoadedVar,
BottomSheetId: model.variables.filter_BottomSheetIdVar,
ShowSubscriptionOnClick: model.variables.bottomSheetId_ShowSubscriptionVar
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
name: "Icon_FilterSheet_PostScroll",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, {
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Input: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("Search_PreScroll.In_Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SearchInputRec();
rec.initalStringAttr = model.variables.currentSearchStringVar;
rec.searchPromptAttr = "Search updates";
rec.debounce_DelayMSAttr = 300;
rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
rec.enableAutocompleteHTMLAttr = false;
rec.isSyncValueWithInputAttr = true;
return rec;
}();
}, function () {
return model.variables.currentSearchStringVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClearString$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
return controller.handler_FilterSearchText$Action("", controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_OnChange$Action: function (event_CurrentStringIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
controller.handler_OnChangeSearchInput$Action(event_CurrentStringIn, true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
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
return controller.handler_FilterSearchText$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
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
name: "Search_PreScroll",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Input_Icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_mvc_view, {
inputs: {
ShowSubscriptionOnClick: model.variables.bottomSheetId_ShowSubscriptionVar,
isLoaded: model.variables.bottomSheetId_IsLoadedVar,
BottomSheetId: model.variables.filter_BottomSheetIdVar,
HaveFiltersApplied: model.variables.hasFiltersAppliedVar
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
name: "Icon_FilterSheet_PreScroll",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
headerContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("GR4kwrAAjU2ZPHW734souw.Options"), function () {
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
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
return [React.createElement(UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, {
inputs: {
In_IsSingleSelection: true,
In_TagToggleList: model.variables.filter_UpdateTypeOptionsVar
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
return controller.onChange_FilterType$Action(updatedTagListIn, controller.callContext(eventHandlerContext));
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
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.filter_UpdateTypeOptionsVar)]
}), React.createElement(UBTConnect_Directory_Updates_UpdateItem_Header_mvc_view, {
inputs: {
isLoading: model.variables.isLoadingVar,
ShowMarkAll: model.variables.showMarkAllVar,
BadgeNumber: model.variables.currentBreakpointVar.badgeCountAttr,
Title: model.variables.currentBreakpointVar.sectionNameAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_MarkAll$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Updates/UpdateItem_Header Click_MarkAll");
return controller.handler_MarkAllAsRead$Action(controller.callContext(eventHandlerContext));
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
name: "ListHeader",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
content: new PlaceholderContent(function () {
return [$if(((!(model.variables.isLoadingVar) && model.variables.fetchUpdatesDataAct.isDataFetchedAttr) && model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.isEmpty), false, this, function () {
return [React.createElement(UBTConnect_Directory_Updates_Updates_NoItemsFound_mvc_view, {
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
uuid: "12",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "False"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut,
style: "list list-group background-neutral-0 updates-list",
tag: "div",
_idProps: {
service: idService,
name: "List_Updates"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
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
uuid: "14",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-plus-date": OS.BuiltinFunctions.dateToText(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).dateAttr)
},
style: "updates-list__list-item",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrentRowNumber(callContext.iterationContext)) !== (0)), false, this, function () {
return [React.createElement(UBTConnect_Directory_Updates_SectionHeader_mvc_view, {
inputs: {
In_IsLoading: model.variables.isLoadingVar,
In_IsAscending: ((model.variables.filter_UpdatesVar.sort_ByNewestAttr) !== (UBTConnectModel.staticEntities.choice.yes)),
In_CurrentUpdateDate: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).dateAttr,
_in_CurrentUpdateDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_SiblingId: idService.getId("UpdateItem"),
In_Breakpoints: model.variables.breakpointsVar,
In_PreviousUpdateDate: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem((model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrentRowNumber(callContext.iterationContext) - 1)).dateAttr,
_in_PreviousUpdateDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_UpdateListHeader$Action: function (event_BreakpointIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Updates/SectionHeader Event_UpdateListHeader");
controller.sectionHeaderEvent_UpdateListHeader$Action(event_BreakpointIn, controller.callContext(eventHandlerContext));
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
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, {
inputs: {
In_HasShare: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasShareAttr,
_in_HasShareInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_Location: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).locationStringAttr,
_in_LocationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
ShowImage: false,
In_InitialsList: model.getCachedValue(idService.getId("UpdateItem.In_InitialsList"), function () {
return function () {
var list = new UBTConnectModel.TextGender2IdentifierRecordList();
list.pushAll([function () {
var rec = new UBTConnectModel.TextGender2IdentifierRecord();
rec.genderAttr = model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).genderIdAttr;
return rec;
}()]);
return list;
}();
}, function () {
return model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).genderIdAttr;
}),
_in_InitialsListInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_IsRead: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).isReadAttr,
_in_IsReadInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_BirthType: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).birthTypeAttr,
_in_BirthTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_Date: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).dateAttr,
_in_DateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_Type_UpdateFeedItem: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemTypeIdAttr,
_in_Type_UpdateFeedItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_ParentsNames: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).parentsNamesAttr,
_in_ParentsNamesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_Name: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).nameAttr,
_in_NameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
PaddingSizeId: model.getCachedValue(idService.getId("UpdateItem.PaddingSizeId"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Share$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem Event_Share");
controller.handler_OnShare$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem OnClick");
return controller.handler_OnClickUpdateItem$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_MarkAsRead$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem Event_MarkAsRead");
return controller.handler_MarkAsRead$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_MarkAsUnread$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem Event_MarkAsUnread");
return controller.handler_MarkAsUnread$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
name: "UpdateItem",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, {
inputs: {
Id: OS.BuiltinFunctions.longIntegerToText(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr),
_idInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr)
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
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.breakpointsVar), asPrimitiveValue(model.variables.filter_UpdatesVar.sort_ByNewestAttr), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.breakpointsVar), asPrimitiveValue(model.variables.filter_UpdatesVar.sort_ByNewestAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.isLoadingVar)]
})];
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
inputs: {
ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.updates,
isRootPage: true
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
alias: "18"
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
uuid: "20",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.breakpointsVar), asPrimitiveValue(model.variables.filter_UpdatesVar.sort_ByNewestAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut), asPrimitiveValue(model.variables.fetchUpdatesDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.currentBreakpointVar.sectionNameAttr), asPrimitiveValue(model.variables.currentBreakpointVar.badgeCountAttr), asPrimitiveValue(model.variables.showMarkAllVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.filter_UpdateTypeOptionsVar), asPrimitiveValue(model.variables.bottomSheetId_ShowSubscriptionVar), asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.bottomSheetId_IsLoadedVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.currentSearchStringVar), asPrimitiveValue(model.variables.isHeaderScrolledVar), asPrimitiveValue(model.variables.isToggleSearchVar)]
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_Directory_Updates_Directory_Updates_FilterSheet_mvc_view, {
inputs: {
In_FilterUpdates: model.variables.filter_UpdatesVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
applyFilters$Action: function (filter_UpdatesIn, hasFiltersAppliedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Updates/Directory_Updates_FilterSheet ApplyFilters");
return controller.handler_ApplyFilters$Action(filter_UpdatesIn, hasFiltersAppliedIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
loaded$Action: function (showSubscriptionOnClickIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Updates/Directory_Updates_FilterSheet Loaded");
controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
sheetInitialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Updates/Directory_Updates_FilterSheet SheetInitialized");
controller.handler_FilterSheetSheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
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
uuid: "21",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
inputs: {
In_ShareObjectTypeId: UBTConnectModel.staticEntities.type_ShareObject.update,
In_UpdateType: model.variables.shareableUpdateItemVar.updateItemTypeIdAttr,
In_IsOpen: model.variables.isShareOpenVar,
In_UpdateDate: model.variables.shareableUpdateItemVar.dateAttr,
In_ShareableObjectId: model.variables.shareableObjectIdVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClosedShareSheet$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Share/ShareSheet Event_ClosedShareSheet");
controller.handler_CloseShareSheet$Action(controller.callContext(eventHandlerContext));
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
uuid: "22",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_ShareableObject: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, {
inputs: {
In_Name: model.variables.shareableUpdateItemVar.nameAttr,
HasBorderBottom: false,
In_Date: model.variables.shareableUpdateItemVar.dateAttr,
IsEnabled: false,
In_Type_UpdateFeedItem: model.variables.shareableUpdateItemVar.updateItemTypeIdAttr,
ShowImage: false,
In_InitialsList: model.getCachedValue(idService.getId("tfvWPgrIsUOVUbUxYJvwwQ.In_InitialsList"), function () {
return function () {
var list = new UBTConnectModel.TextGender2IdentifierRecordList();
list.pushAll([function () {
var rec = new UBTConnectModel.TextGender2IdentifierRecord();
rec.genderAttr = model.variables.shareableUpdateItemVar.genderIdAttr;
return rec;
}()]);
return list;
}();
}, function () {
return model.variables.shareableUpdateItemVar.genderIdAttr;
}),
IgnoreReadBackground: true,
In_BirthType: model.variables.shareableUpdateItemVar.birthTypeAttr,
In_Location: model.variables.shareableUpdateItemVar.locationStringAttr,
In_ParentsNames: model.variables.shareableUpdateItemVar.parentsNamesAttr,
In_IsRead: false
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
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.shareableUpdateItemVar.parentsNamesAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.locationStringAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.birthTypeAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.genderIdAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.updateItemTypeIdAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.dateAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.nameAttr)]
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Updates_CS.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$debugger", "UBTConnect.Directory_Updates.controller", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.Handler_OnClickUpdateItem.CaptureScrollPositionJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.SetupScrollThreshold.SetupScrollThresholdsJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnReady.ScrollFixJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnReady.SetStickyHeaderHeightJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.SetupScrollListener.SetupScrollEndListenerJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.SetupScrollListener.SetupScrollListenerJS", "UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.DestroyEventListener.DestroyEventListenerJS", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_Updates_DateRangeList", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect.model$UI_Updates_DateRangeRec", "UBTConnect.model$TextGender2IdentifierRecordList", "Connect_Updates_CS.model$Filter_DateRec", "UBTConnect.controller$ScrollTop", "UBTConnect.model$UI_UpdateItemList", "UBTConnect.controller$Directory_Updates_GetUpdatedBreakpoints", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "NavigationHandler.controller$RememberFocusedScrollAnchor", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.model$Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$Directory_Updates_GetCarouselPreloadedHouseholds", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$SwipeActionLongIntegerRecordList", "NavigationHandler.controller$GetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.controller$GetSkeletonList_UI_Updates", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate", "NavigationHandler.controller$GetFocusedScrollAnchorOnBack", "UBTConnect.controller$Directory_Updates_GetBreakpoints", "UBTConnect.controller$Directory_Updates_GetListBreakpoint", "UBTConnect.model$Updates_DateRangesList", "UBTConnect.controller$Directory_Updates_AugmentDateRanges", "UBTConnect.controller$Directory_Updates_MarkAllAsRead"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Updates_CSModel, UBTConnect_UtilsController, NavigationHandlerController, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Updates_Updates_SingleList_mvc_Debugger, _flow_UBTConnect_Directory_UpdatesController, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_Handler_OnClickUpdateItem_CaptureScrollPositionJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_SetupScrollThreshold_SetupScrollThresholdsJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnReady_ScrollFixJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnReady_SetStickyHeaderHeightJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_SetupScrollListener_SetupScrollEndListenerJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_SetupScrollListener_SetupScrollListenerJS, UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_DestroyEventListener_DestroyEventListenerJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
updateCurrentBreakpoint$Action: function (breakpointIn) {
breakpointIn = (breakpointIn === undefined) ? "" : breakpointIn;
return controller.executeActionInsideJSNode(controller._updateCurrentBreakpoint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(breakpointIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "UpdateCurrentBreakpoint");
},
handler_ScrollEnding_UpdateBreakpoint$Action: function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? "" : in_DateIn;
return controller.executeActionInsideJSNode(controller._handler_ScrollEnding_UpdateBreakpoint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_ScrollEnding_UpdateBreakpoint");
},
setupScrollThreshold$Action: function () {
return controller.executeActionInsideJSNode(controller._setupScrollThreshold$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "SetupScrollThreshold");
}
};
this.dataFetchDependenciesOriginal = {
fetchUpdates$DataActRefresh: -1,
getDateRanges$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
fetchUpdates$DataActRefresh: [],
getDateRanges$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.action_UI_UpdateItem_MarkAsRead$ServerAction = function (updateItemIdIn, callContext) {
var controller = this.controller;
var inputs = {
UpdateItemId: OS.DataConversion.ServerDataConverter.to(updateItemIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("Action_UI_UpdateItem_MarkAsRead", "screenservices/UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAsRead", "8c51s_N5Y36AaVe0DnkJsg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
Controller.prototype.action_UI_UpdateItem_MarkAllAsRead$ServerAction = function (filter_UpdatesIn, callContext) {
var controller = this.controller;
var inputs = {
Filter_Updates: OS.DataConversion.ServerDataConverter.to(filter_UpdatesIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("Action_UI_UpdateItem_MarkAllAsRead", "screenservices/UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAllAsRead", "+WdIU5_kw9pLQimxUkxuew", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
Controller.prototype.action_UI_UpdateItem_MarkAsUnread$ServerAction = function (updateItemIdIn, callContext) {
var controller = this.controller;
var inputs = {
UpdateItemId: OS.DataConversion.ServerDataConverter.to(updateItemIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("Action_UI_UpdateItem_MarkAsUnread", "screenservices/UBTConnect/Directory_Updates/Updates_SingleList/ServiceAPIAction_UI_UpdateItem_MarkAsUnread", "P1t+S8i8Gt4AdEzGwZsuxw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.fetchUpdates$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7x+nHabY9kqS_ETyxeyD3g:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/DataActions.7x+nHabY9kqS_ETyxeyD3g:ssNmK1a8KJMVXpkpydx8Yg", "UBTConnect", "FetchUpdates", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Updates_SingleList/FetchUpdates");
return controller.callDataAction("DataActionFetchUpdates", "screenservices/UBTConnect/Directory_Updates/Updates_SingleList/DataActionFetchUpdates", "fS5yrEY1ATScG7g_Vht4Vg", function (b) {
model.variables.fetchUpdatesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.fetchUpdatesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchUpdatesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Updates_SingleList/FetchUpdates On After Fetch");
return controller._onAfterFetch_FetchUpdates$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7x+nHabY9kqS_ETyxeyD3g", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getDateRanges$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:a_sI0m8H3UaRYTtYV3DvaA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/DataActions.a_sI0m8H3UaRYTtYV3DvaA:8BntoY2WZYBr_2gBgfDBeg", "UBTConnect", "GetDateRanges", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Updates_SingleList/GetDateRanges");
return controller.callDataAction("DataActionGetDateRanges", "screenservices/UBTConnect/Directory_Updates/Updates_SingleList/DataActionGetDateRanges", "VHJtI4240mipQzNI94RA2g", function (b) {
model.variables.getDateRangesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getDateRangesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getDateRangesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Updates_SingleList/GetDateRanges On After Fetch");
return controller._onAfterFetch_GetDateRanges$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:a_sI0m8H3UaRYTtYV3DvaA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["fetchUpdates$DataActRefresh", "getDateRanges$DataActRefresh"];
// Client Actions
Controller.prototype._onChange_FilterType$Action = function (updatedTagListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_FilterType");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.OnChange_FilterType$vars"))());
vars.value.updatedTagListInLocal = updatedTagListIn.clone();
var listFilter_GetSelectedVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_GetSelectedVar = listFilter_GetSelectedVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WwNPBliGJE+L3yyVG3caWA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.WwNPBliGJE+L3yyVG3caWA:Nh432O09E54g8z+GI2BZ_Q", "UBTConnect", "OnChange_FilterType", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:plWK5tlEaUeswp6oTmotRw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B7MGNu0FlEmhVQp0nLSkKA", callContext.id);
// Execute Action: ListFilter_GetSelected
listFilter_GetSelectedVar.value = OS.SystemActions.listFilter(vars.value.updatedTagListInLocal, function (p) {
return p.isSelectedAttr;
}, callContext);

// Already Selected?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c+lsdRJm60CgAnqEjKd6UQ", callContext.id) && (listFilter_GetSelectedVar.value.filteredListOut.getCurrent(callContext.iterationContext).identifierAttr === model.variables.filter_UpdatesVar.filter_UpdateTypeIdAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dHG+B0c_sUKGN6rOYNnGdQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oJamA1JCjEGNr9Ko13Q3vg", callContext.id);
// ShowMarkAll = False
model.variables.showMarkAllVar = false;
// Set  new Filter
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XDV8856h_0G2oSTorKFSfg", callContext.id);
// Filter_Updates.Filter_UpdateTypeId = TextToIdentifier
model.variables.filter_UpdatesVar.filter_UpdateTypeIdAttr = OS.BuiltinFunctions.textToIdentifier(listFilter_GetSelectedVar.value.filteredListOut.getCurrent(callContext.iterationContext).identifierAttr);
// Foreach Filter_UpdateTypeOptions
callContext.iterationContext.registerIterationStart(model.variables.filter_UpdateTypeOptionsVar);
try {var filter_UpdateTypeOptionsIterator = callContext.iterationContext.getIterator(model.variables.filter_UpdateTypeOptionsVar);
var filter_UpdateTypeOptionsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UNO9PvuUVUWU+o7EEAwX_A", callContext.id) && (filter_UpdateTypeOptionsIndex < model.variables.filter_UpdateTypeOptionsVar.length))) {
filter_UpdateTypeOptionsIterator.currentRowNumber = filter_UpdateTypeOptionsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b5Co8fh_PUSqhROeJnR6zg", callContext.id);
// Filter_UpdateTypeOptions.Current.IsSelected = Filter_UpdateTypeOptions.Current.Identifier = ListFilter_GetSelected.FilteredList.Current.Identifier
model.variables.filter_UpdateTypeOptionsVar.getItem(filter_UpdateTypeOptionsIndex.valueOf()).isSelectedAttr = (model.variables.filter_UpdateTypeOptionsVar.getItem(filter_UpdateTypeOptionsIndex.valueOf()).identifierAttr === listFilter_GetSelectedVar.value.filteredListOut.getCurrent(callContext.iterationContext).identifierAttr);
filter_UpdateTypeOptionsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.filter_UpdateTypeOptionsVar);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I5klDQ+cW0GMHmg51uV27g", callContext.id);
// Execute Action: ScrollTop
UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
// isLoading
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:62UIvdFZFkeWTwTViVqcQA", callContext.id);
// isLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G6t4o04f20S_5_cGtICIUA", callContext.id);
// Execute Action: RefreshUpdates
return controller._refreshUpdates$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LQRVCWTmL0KaRgf3jpX1Cg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WwNPBliGJE+L3yyVG3caWA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WwNPBliGJE+L3yyVG3caWA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.OnChange_FilterType$vars", [{
name: "UpdatedTagList",
attrName: "updatedTagListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.TagList();
},
complexType: UBTConnectModel.TagList
}]);
Controller.prototype._handler_CloseShareSheet$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_CloseShareSheet");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aQECDaq4Fk6SBriFgdlG0Q:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.aQECDaq4Fk6SBriFgdlG0Q:yDfN+q_tZ3D75lkowys6Jw", "UBTConnect", "Handler_CloseShareSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qOXgIekAg0aI+JG6SAZr3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QdKSDoZmuEyvfDFcNtAmTQ", callContext.id);
// IsShareOpen = False
model.variables.isShareOpenVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AZuArE85xkO5ePu_ls0zfA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aQECDaq4Fk6SBriFgdlG0Q", callContext.id);
}

};
Controller.prototype._refreshUpdates$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshUpdates");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:69e8DbYD9k6JDbImdT1HfQ:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.69e8DbYD9k6JDbImdT1HfQ:sHI6VLLi+JPkmqIXUX1syA", "UBTConnect", "RefreshUpdates", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AJ3oHkFHO0CRzLjYl1F2uQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5wsQ+kjrC0ygF8gA4IAX5g", callContext.id);
// Refresh Query: FetchUpdates
var result = controller.fetchUpdates$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9ofi91XDwUeEITXF0mcaTA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:69e8DbYD9k6JDbImdT1HfQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:69e8DbYD9k6JDbImdT1HfQ", callContext.id);
throw ex;

});
};
Controller.prototype._setDefaultFilters$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetDefaultFilters");
callContext = controller.callContext(callContext);
var listFilter_OlderVar = new OS.DataTypes.VariableHolder();
var listFilter_TodayVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_OlderVar = listFilter_OlderVar;
varBag.listFilter_TodayVar = listFilter_TodayVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xmdfF481NEubY07_Wxch6g:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.xmdfF481NEubY07_Wxch6g:G_vVYqzW8HOu16qmSAHYnw", "UBTConnect", "SetDefaultFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0k+0wKTEa0ujBLX1Olj+kA", callContext.id);
// Needs Dates?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ceyhISx5pkaOnfWxzTy+_g", callContext.id) && (model.variables.filter_UpdatesVar.filter_DateAttr.date_FromAttr.equals(OS.BuiltinFunctions.nullDate()) || model.variables.filter_UpdatesVar.filter_DateAttr.date_ToAttr.equals(OS.BuiltinFunctions.nullDate())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E2ZJueW0b0C4c0RcwCzMEQ", callContext.id);
// Execute Action: ListFilter_Older
listFilter_OlderVar.value = OS.SystemActions.listFilter(model.variables.dateRangesVar, function (p) {
return (p.rangeAttr === UBTConnectModel.staticEntities.updates_DateRanges.older);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JcM97nuSRkat1SxG24LAEA", callContext.id);
// Execute Action: ListFilter_Today
listFilter_TodayVar.value = OS.SystemActions.listFilter(model.variables.dateRangesVar, function (p) {
return (p.rangeAttr === UBTConnectModel.staticEntities.updates_DateRanges.today);
}, callContext);

// Set Dates
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xZr7SQgekk6NbX_7GtWhNg", callContext.id);
// Filter_Updates.Filter_Date.Date_From = ListFilter_Older.FilteredList.Current.From
model.variables.filter_UpdatesVar.filter_DateAttr.date_FromAttr = listFilter_OlderVar.value.filteredListOut.getCurrent(callContext.iterationContext).fromAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xZr7SQgekk6NbX_7GtWhNg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Filter_Updates.Filter_Date.Date_To = ListFilter_Today.FilteredList.Current.To
model.variables.filter_UpdatesVar.filter_DateAttr.date_ToAttr = listFilter_TodayVar.value.filteredListOut.getCurrent(callContext.iterationContext).toAttr;
}

// Needs Status?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CAlpS355TEipvHYN8gG8wQ", callContext.id) && (model.variables.filter_UpdatesVar.filter_ReadOnlyAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
// Set Status
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TpUl+m0Z8EK4Moj70sanZw", callContext.id);
// Filter_Updates.Filter_ReadOnly = None
model.variables.filter_UpdatesVar.filter_ReadOnlyAttr = UBTConnectModel.staticEntities.choice.none;
}

// Needs Sort?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l62DZOQwdkSmNsQctVNG2A", callContext.id) && (model.variables.filter_UpdatesVar.sort_ByNewestAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
// Set Sort
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6lt9yuERPUWAtDB3kFG9eA", callContext.id);
// Filter_Updates.Sort_ByNewest = Yes
model.variables.filter_UpdatesVar.sort_ByNewestAttr = UBTConnectModel.staticEntities.choice.yes;
}

// Needs Country Id?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7z_tQESj60i+klUQoz3ogQ", callContext.id) && model.variables.filter_UpdatesVar.countryIdsAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vZZ+5rIISUaDHunZ7si2qA", callContext.id);
// Execute Action: ListAppend_CountryId
OS.SystemActions.listAppend(model.variables.filter_UpdatesVar.countryIdsAttr, OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.choice.none), callContext);
}

// Needs Locality Id?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fKBZ0ryxWUWQQGOAlUL+SA", callContext.id) && model.variables.filter_UpdatesVar.localitiesIdsAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IDyPUHLn90q+44A+BKFH+w", callContext.id);
// Execute Action: ListAppend_LocalityId
OS.SystemActions.listAppend(model.variables.filter_UpdatesVar.localitiesIdsAttr, OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.choice.none), callContext);
}

// Needs Default State?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HyOWwhzE10KZ_N7zcCPGrg", callContext.id) && model.variables.filter_DefaultStateVar.countryIdsAttr.isEmpty)) {
// Set Default State
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GZTsU_5LVEqg35w4enZr1w", callContext.id);
// Filter_DefaultState = Filter_Updates
model.variables.filter_DefaultStateVar = model.variables.filter_UpdatesVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+ncrZdTvdEGssNue9ygw0w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+ncrZdTvdEGssNue9ygw0w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xmdfF481NEubY07_Wxch6g", callContext.id);
}

};
Controller.prototype._sectionHeaderEvent_UpdateListHeader$Action = function (event_BreakpointIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SectionHeaderEvent_UpdateListHeader");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.SectionHeaderEvent_UpdateListHeader$vars"))());
vars.value.event_BreakpointInLocal = event_BreakpointIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2yRIJTdNV0KWO0kArhaolA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.2yRIJTdNV0KWO0kArhaolA:lTuLpwfjP0vzT66_FwHIyw", "UBTConnect", "SectionHeaderEvent_UpdateListHeader", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GOuV6gBINEOJI+J0pW+O5g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LVrZBzbiA0yPkRGuBTApOA", callContext.id);
// CurrentBreakpoint = Event_Breakpoint
model.variables.currentBreakpointVar = vars.value.event_BreakpointInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V+uEDKtUsUm8przZGSiWhw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2yRIJTdNV0KWO0kArhaolA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.SectionHeaderEvent_UpdateListHeader$vars", [{
name: "Event_Breakpoint",
attrName: "event_BreakpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.UI_UpdateItem_BreakpointRec();
},
complexType: UBTConnectModel.UI_UpdateItem_BreakpointRec
}]);
Controller.prototype._setMarkAllTag$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetMarkAllTag");
callContext = controller.callContext(callContext);
var listFilter_GetUnreadVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_GetUnreadVar = listFilter_GetUnreadVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BQgeK5Rtc06V3yGs_Zon2w:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.BQgeK5Rtc06V3yGs_Zon2w:aSkFmdw0660aCjWohGyuuw", "UBTConnect", "SetMarkAllTag", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5USCSGNsDku9qeB5lJVkJw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W0PwEDRz_UCuz4CamLtLgQ", callContext.id);
// Execute Action: ListFilter_GetUnread
listFilter_GetUnreadVar.value = OS.SystemActions.listFilter(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut, function (p) {
return !(p.isReadAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2fbAFr8h6kK1l9LOTOkLlQ", callContext.id);
// ShowMarkAll = notListFilter_GetUnread.FilteredList.Empty
model.variables.showMarkAllVar = !(listFilter_GetUnreadVar.value.filteredListOut.isEmpty);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mjkLHazHl0+ZPufis6c2gA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BQgeK5Rtc06V3yGs_Zon2w", callContext.id);
}

};
Controller.prototype._refreshUpdatesAndFlags$Action = function (currentPositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshUpdatesAndFlags");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.RefreshUpdatesAndFlags$vars"))());
vars.value.currentPositionInLocal = currentPositionIn;
var directory_Updates_GetUpdatedBreakpointsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.directory_Updates_GetUpdatedBreakpointsVar = directory_Updates_GetUpdatedBreakpointsVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kAgrKz+UCk22u8QCw7CyvA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.kAgrKz+UCk22u8QCw7CyvA:3NDW3Hvv_LzCe97f5ixz+w", "UBTConnect", "RefreshUpdatesAndFlags", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q+KfjWRBdEG0sqQL1w_IoA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+rLePnbinUWlBeowS176JA", callContext.id);
// Execute Action: Directory_Updates_GetUpdatedBreakpoints
directory_Updates_GetUpdatedBreakpointsVar.value = UBTConnectController.default.directory_Updates_GetUpdatedBreakpoints$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut, vars.value.currentPositionInLocal, model.variables.dateRangesVar, model.variables.breakpointsVar, callContext);

// Update Breakpoints
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JkaP421cYEyBS4_20yvxEQ", callContext.id);
// Breakpoints = Directory_Updates_GetUpdatedBreakpoints.UpdatedBreakpoints
model.variables.breakpointsVar = directory_Updates_GetUpdatedBreakpointsVar.value.updatedBreakpointsOut;
// Updating Current?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rb7i61Oba06MAsOmS+9Guw", callContext.id) && (model.variables.currentBreakpointVar.sectionNameAttr === directory_Updates_GetUpdatedBreakpointsVar.value.changedBreakpointOut.sectionNameAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G0giP4vCH0mHsC3mYRoCFA", callContext.id);
// Execute Action: UpdateCurrentBreakpoint
controller._updateCurrentBreakpoint$Action(directory_Updates_GetUpdatedBreakpointsVar.value.changedBreakpointOut.sectionNameAttr, callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qw0DXkc5UkSyXgOkSAShCg", callContext.id);
// Execute Action: SetMarkAllTag
controller._setMarkAllTag$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aIOM1nF7iE6KV3rpbEz3lA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kAgrKz+UCk22u8QCw7CyvA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.RefreshUpdatesAndFlags$vars", [{
name: "CurrentPosition",
attrName: "currentPositionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_FilterSheetLoaded$vars"))());
vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hpfqMrxbSEC3KqT9z9PgPw:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.hpfqMrxbSEC3KqT9z9PgPw:9yb1Fmglt6NBCjpLc6_2ww", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5sq1HfIzeEiMYxOWOmwZjA", callContext.id);
// Setup Bottom Sheet Info
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YePcVNyFjEiBuu59ijWipA", callContext.id);
// BottomSheetId_IsLoaded = True
model.variables.bottomSheetId_IsLoadedVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YePcVNyFjEiBuu59ijWipA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// BottomSheetId_ShowSubscription = ShowSubscriptionOnClick
model.variables.bottomSheetId_ShowSubscriptionVar = vars.value.showSubscriptionOnClickInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KQJEYJ7k6kixhlE9s4CmYQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hpfqMrxbSEC3KqT9z9PgPw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_FilterSheetLoaded$vars", [{
name: "ShowSubscriptionOnClick",
attrName: "showSubscriptionOnClickInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_FilterSearchText$Action = function (textIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSearchText");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_FilterSearchText$vars"))());
vars.value.textInLocal = textIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UOnANmJ6gUamBuF3QgDrIA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.UOnANmJ6gUamBuF3QgDrIA:IAlRzxG3rD1UVpOstPFSqQ", "UBTConnect", "Handler_FilterSearchText", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VpQpcUHic0KF+1gKxOHK2g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IIPrpZnU_keOgb0Kf_RU4g", callContext.id);
// CurrentSearchString = Text
model.variables.currentSearchStringVar = vars.value.textInLocal;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5HV5JOiQ_0in0wx9+aRb5g", callContext.id) && (vars.value.textInLocal === model.variables.filter_UpdatesVar.filter_SearchTextAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QO4AtcwTS0uN6rb2ckKQcw", callContext.id);
} else {
// Set Text Filter
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iqRodww5kUiO9OFbbY2O0w", callContext.id);
// Filter_Updates.Filter_SearchText = Text
model.variables.filter_UpdatesVar.filter_SearchTextAttr = vars.value.textInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ReznRW6ZP0+U7P2lg2O6dw", callContext.id);
// ShowMarkAll = False
model.variables.showMarkAllVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2PcS48PcukeHrOEZlVa15w", callContext.id);
// Execute Action: ScrollTop
UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
// isLoading
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z4qfHFHRrkGhwyeF+70eZg", callContext.id);
// isLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BgrG0wrhQkGKD5tMevberg", callContext.id);
// Execute Action: RefreshUpdates
return controller._refreshUpdates$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LYX0w5Pdj06D_itKu7RD+w", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UOnANmJ6gUamBuF3QgDrIA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UOnANmJ6gUamBuF3QgDrIA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_FilterSearchText$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_OnClickUpdateItem$Action = function (in_CurrentItemIndexIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnClickUpdateItem");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnClickUpdateItem$vars"))());
vars.value.in_CurrentItemIndexInLocal = in_CurrentItemIndexIn;
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
var listFilter_HasAccessVar = new OS.DataTypes.VariableHolder();
var directory_Updates_GetCarouselPreloadedHouseholdsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
varBag.listFilter_HasAccessVar = listFilter_HasAccessVar;
varBag.directory_Updates_GetCarouselPreloadedHouseholdsVar = directory_Updates_GetCarouselPreloadedHouseholdsVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AZEWSoNWK0Gsep0xvKk30A:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.AZEWSoNWK0Gsep0xvKk30A:zUZb+yKVqAz3rv8kz4hgsQ", "UBTConnect", "Handler_OnClickUpdateItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ax6tF1G7eEebTKCIoxW1DQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sTBLdxY2EEOKN0+Y2GvW3g", callContext.id);
// Execute Action: Handler_MarkAsRead
return controller._handler_MarkAsRead$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.in_CurrentItemIndexInLocal).updateItemIdAttr, vars.value.in_CurrentItemIndexInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uxuGtWzGEUab+qTwU9VoPQ", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_Handler_OnClickUpdateItem_CaptureScrollPositionJS, "CaptureScrollPosition", "Handler_OnClickUpdateItem", {
In_AnchorId: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.longIntegerToText(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.in_CurrentItemIndexInLocal).updateItemIdAttr), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aCpPcN2A+k6AWwDEUsCILg", callContext.id);
// Execute Action: RememberFocusedScrollAnchor
NavigationHandlerController.default.rememberFocusedScrollAnchor$Action(idService.getId("List_Updates"), vars.value.in_CurrentItemIndexInLocal, OS.BuiltinFunctions.longIntegerToText(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.in_CurrentItemIndexInLocal).updateItemIdAttr), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HywELB5hDEmFN12eGxPojA", callContext.id);
// FocusedScrollAnchorId = FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].UpdateItemId
model.variables.focusedScrollAnchorIdVar = OS.BuiltinFunctions.longIntegerToText(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.in_CurrentItemIndexInLocal).updateItemIdAttr);
// Set Local IsRead
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TkT5T93FSEisPKKbXHYMoQ", callContext.id);
// FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].IsRead = True
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.in_CurrentItemIndexInLocal).isReadAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MB_i_qiaO0WNNOVyvegPTQ", callContext.id);
// Execute Action: ScreenModel_Flush
model.flush();
return UBTJavaScriptUtilsController.default.screenModel_Flush$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_xtvDTQxkkeBeyktb1YDNQ", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FuZvT7QCBkKGSWxB1oE2MQ", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sgj914Wsw02lODVe_Q3S1w", callContext.id);
// TargetHouseholdId = FetchUpdates.UI_UpdateItemList[In_CurrentItemIndex].HouseholdId
vars.value.targetHouseholdIdVar = model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.in_CurrentItemIndexInLocal).householdIdAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NrQjUn4fKkW5H0RpHBJnNA", callContext.id);
// Execute Action: ListFilter_HasAccess
listFilter_HasAccessVar.value = OS.SystemActions.listFilter(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut, function (p) {
return p.hasAccessAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1D0xughG2EeJpsXp7F_z4A", callContext.id);
// Execute Action: Directory_Updates_GetCarouselPreloadedHouseholds
directory_Updates_GetCarouselPreloadedHouseholdsVar.value = UBTConnectController.default.directory_Updates_GetCarouselPreloadedHouseholds$Action(OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_HasAccessVar.value.filteredListOut, new UBTConnectModel.Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList(), function (source, target) {
target.householdIdAttr = source.householdIdAttr;
target.isReadAttr = source.isReadAttr;
target.updates_CarouselSwipeCallbackParametersAttr.updateItemIdAttr = source.updateItemIdAttr;
return target;
}), callContext);

// Set Carousel Preload
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2atK2_p6p0KGSkTDjEhCDw", callContext.id);
// CarouselPreloadedHouseholds.CarouselHouseholdItem = Directory_Updates_GetCarouselPreloadedHouseholds.Out_CarouselPreloadedHouseholds.CarouselHouseholdItem
vars.value.carouselPreloadedHouseholdsVar.carouselHouseholdItemAttr = directory_Updates_GetCarouselPreloadedHouseholdsVar.value.out_CarouselPreloadedHouseholdsOut.carouselHouseholdItemAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gHbYkoPmo0uOfGsRpO37Ng", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.carouselPreloadedHouseholdsVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I74dksFf606I0RoQEy2J8A", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.targetHouseholdIdVar, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xY1xXiGLTk+mluL0HUuNIA", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.in_CurrentItemIndexInLocal).householdIdAttr, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AZEWSoNWK0Gsep0xvKk30A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AZEWSoNWK0Gsep0xvKk30A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnClickUpdateItem$vars", [{
name: "In_CurrentItemIndex",
attrName: "in_CurrentItemIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "CarouselPreloadedHouseholds",
attrName: "carouselPreloadedHouseholdsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
},
complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
}, {
name: "TargetHouseholdId",
attrName: "targetHouseholdIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._setupScrollThreshold$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetupScrollThreshold");
callContext = controller.callContext(callContext);
var setupScrollThresholdsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize_BreakpointsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.setupScrollThresholdsJSResult = setupScrollThresholdsJSResult;
varBag.jSONSerialize_BreakpointsVar = jSONSerialize_BreakpointsVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hm6tUt7hC0WsFHF5rPchZA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.hm6tUt7hC0WsFHF5rPchZA:CjXlhcLwFyTkwG9GwHe0Lw", "UBTConnect", "SetupScrollThreshold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q_N0eS19IEeXRMEOQJR_fg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B10CUDPGX0W66yGyHQA8NA", callContext.id);
// JSON Serialize: JSONSerialize_Breakpoints
jSONSerialize_BreakpointsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.breakpointsVar, true, false);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x_yxztYWWEm4TrESF72log", callContext.id);
setupScrollThresholdsJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_SetupScrollThreshold_SetupScrollThresholdsJS, "SetupScrollThresholds", "SetupScrollThreshold", {
In_ScrollContainer: OS.DataConversion.JSNodeParamConverter.to(".active-screen.screen-container:has(.layout)", OS.DataTypes.DataTypes.Text),
In_ListId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("List_Updates"), OS.DataTypes.DataTypes.Text),
In_UpdateItemClass: OS.DataConversion.JSNodeParamConverter.to(".ubt-update-item", OS.DataTypes.DataTypes.Text),
In_HeaderSearchClass: OS.DataConversion.JSNodeParamConverter.to(".header-top-search", OS.DataTypes.DataTypes.Text),
In_Breakpoints: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_BreakpointsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Out_DestroyListener: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_DestroyListenerTarget: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.SetupScrollThreshold$setupScrollThresholdsJSResult"))();
jsNodeResult.out_DestroyListenerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyListener, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_DestroyListenerTargetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyListenerTarget, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
UpdateCurrentBreakpoint: controller.clientActionProxies.updateCurrentBreakpoint$Action
}, {});
// Setup Scroll Objects
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RW80JXYxSE6BQKftCv00HA", callContext.id);
// EventListener = SetupScrollThresholds.Out_DestroyListener
model.variables.eventListenerVar = setupScrollThresholdsJSResult.value.out_DestroyListenerOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RW80JXYxSE6BQKftCv00HA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EventListenerTarget = SetupScrollThresholds.Out_DestroyListenerTarget
model.variables.eventListenerTargetVar = setupScrollThresholdsJSResult.value.out_DestroyListenerTargetOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6oVXrFQUt0Ob6JjDuasz_A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hm6tUt7hC0WsFHF5rPchZA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.SetupScrollThreshold$setupScrollThresholdsJSResult", [{
name: "Out_DestroyListener",
attrName: "out_DestroyListenerOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_DestroyListenerTarget",
attrName: "out_DestroyListenerTargetOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.ScreenEvent_OnInitialize$vars"))());
var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPreloadObjectVar = getPreloadObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.listIndexOfVar = listIndexOfVar;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gcWsVlwiiEuzrKVS2cT2KA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.gcWsVlwiiEuzrKVS2cT2KA:Q9tDNa_V+e2OcVx_hesiLw", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CBMTE+lubE+ZbB18WvLYSg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bfyLRXTGKUSF3CHdLIzoNw", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fd_OATUqCE2fL1JncVkf1Q", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O5fzDsJu9EOm9Ph7S_BP5Q", callContext.id);
// Execute Action: GetPreloadObject
getPreloadObjectVar.value = NavigationHandlerController.default.getPreloadObject$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JgLQ4qJG20W3VL9rcxmS8Q", callContext.id) && ((getPreloadObjectVar.value.preloadOut) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lN8yf1ay70KB0C5VCuRwdw", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(vars.value.entitiesCarousel_SwippedItemsVar), getPreloadObjectVar.value.preloadOut, callContext);

// Foreach EntitiesCarousel_SwippedItems
callContext.iterationContext.registerIterationStart(vars.value.entitiesCarousel_SwippedItemsVar);
try {var entitiesCarousel_SwippedItemsIterator = callContext.iterationContext.getIterator(vars.value.entitiesCarousel_SwippedItemsVar);
var entitiesCarousel_SwippedItemsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rB+_PmfxVEeeGiWNhDX5ZA", callContext.id) && (entitiesCarousel_SwippedItemsIndex < vars.value.entitiesCarousel_SwippedItemsVar.length))) {
entitiesCarousel_SwippedItemsIterator.currentRowNumber = entitiesCarousel_SwippedItemsIndex;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MWjmL6IwZUCNabPBoOoOJw", callContext.id) && ((vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr < model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.length) && (vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).entityItemIdAttr === OS.BuiltinFunctions.longIntegerToText(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).updateItemIdAttr))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vnDjyYLYC0CFqqEIWgJtcg", callContext.id);
// FetchUpdates.UnreadCount = FetchUpdates.UnreadCount - 1
model.variables.fetchUpdatesDataAct.unreadCountOut = (model.variables.fetchUpdatesDataAct.unreadCountOut - 1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vnDjyYLYC0CFqqEIWgJtcg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// FetchUpdates.UI_UpdateItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].IsRead = True
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).isReadAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ec4rjmpOeUeUxV4LvvAceQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.breakpointsVar, function (p) {
return (model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).dateAttr.gte(p.dateRangeAttr.fromAttr) && model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).dateAttr.lte(p.dateRangeAttr.toAttr));
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j92izuZZgkyr7B9jV4M0cw", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u3he3m_pKkWOLBhHYX2kUg", callContext.id);
// Breakpoints[ListIndexOf.Position].BadgeCount = Breakpoints[ListIndexOf.Position].BadgeCount - 1
model.variables.breakpointsVar.getItem(listIndexOfVar.value.positionOut).badgeCountAttr = (model.variables.breakpointsVar.getItem(listIndexOfVar.value.positionOut).badgeCountAttr - 1);
}

// <<
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x_e3pT7sn0+hS7uYg1qMgQ", callContext.id);
}

entitiesCarousel_SwippedItemsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.entitiesCarousel_SwippedItemsVar);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N1FmjwzDgEK3EezeW6a9Kg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0E2nYsZwNUmFqtQNk3_FhQ", callContext.id);
}

} else {
// Set Initial Breakpoint
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CUsGT8zp9kmnSE1XIqwK3Q", callContext.id);
// CurrentBreakpoint.Position = 0
model.variables.currentBreakpointVar.positionAttr = 0;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CUsGT8zp9kmnSE1XIqwK3Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentBreakpoint.SectionName = Today
model.variables.currentBreakpointVar.sectionNameAttr = UBTConnectModel.staticEntities.updates_DateRanges.today;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CUsGT8zp9kmnSE1XIqwK3Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CurrentBreakpoint.BadgeCount = 0
model.variables.currentBreakpointVar.badgeCountAttr = 0;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AqxDvitaEkq0N+tgIgF7NQ", callContext.id);
// Execute Action: UpdateFilterTypesOptions
controller._updateFilterTypesOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:loiysi9kj0aYzuf75d7njA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gcWsVlwiiEuzrKVS2cT2KA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.ScreenEvent_OnInitialize$vars", [{
name: "EntitiesCarousel_SwippedItems",
attrName: "entitiesCarousel_SwippedItemsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.EntitiesCarousel_SwippedItemList();
},
complexType: UBTConnectModel.EntitiesCarousel_SwippedItemList
}]);
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._setBadgeCountsToZero$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetBadgeCountsToZero");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IvnMWrQ1GEyXQIoJLF+Ghg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.IvnMWrQ1GEyXQIoJLF+Ghg:GeZyIbzPRd2qA42IAGjF3Q", "UBTConnect", "SetBadgeCountsToZero", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f2_IRBbDikOIKO8_oo540w", callContext.id);
// Foreach Breakpoints
callContext.iterationContext.registerIterationStart(model.variables.breakpointsVar);
try {var breakpointsIterator = callContext.iterationContext.getIterator(model.variables.breakpointsVar);
var breakpointsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q53hRrYBjk2X9_UBPEjVDg", callContext.id) && (breakpointsIndex < model.variables.breakpointsVar.length))) {
breakpointsIterator.currentRowNumber = breakpointsIndex;
// Set BadgeCount to 0
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ymbFD5nLgkeUyjq0Hlugaw", callContext.id);
// Breakpoints.Current.BadgeCount = 0
model.variables.breakpointsVar.getItem(breakpointsIndex.valueOf()).badgeCountAttr = 0;
breakpointsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.breakpointsVar);
}

// Set Current Breakpoint
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ANgIeweRhkCNHFTfN_79Wg", callContext.id);
// CurrentBreakpoint.BadgeCount = 0
model.variables.currentBreakpointVar.badgeCountAttr = 0;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:047c6SL3g06GM8PxlXA+xg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IvnMWrQ1GEyXQIoJLF+Ghg", callContext.id);
}

};
Controller.prototype._handler_MarkAsRead$Action = function (updateItemIdIn, currentPositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_MarkAsRead");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_MarkAsRead$vars"))());
vars.value.updateItemIdInLocal = updateItemIdIn;
vars.value.currentPositionInLocal = currentPositionIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HbojZodU60mEGP_J8lYJcg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.HbojZodU60mEGP_J8lYJcg:KDYOYo_cSXzlVJBnhetZhg", "UBTConnect", "Handler_MarkAsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0xv98k++HEuxityNd18Iew", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sbaU3k+72UyMzlk5vTGz1w", callContext.id);
// Execute Action: Action_UI_UpdateItem_MarkAsRead
model.flush();
return controller.action_UI_UpdateItem_MarkAsRead$ServerAction(vars.value.updateItemIdInLocal, callContext).then(function () {
// Set IsRead to True
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zzpJOMy3jUGor70p4uoVKw", callContext.id);
// FetchUpdates.UI_UpdateItemList[CurrentPosition].IsRead = True
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.currentPositionInLocal).isReadAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:skAhwVca2k+BepF6UYdIqw", callContext.id);
// Execute Action: RefreshUpdatesAndFlags
controller._refreshUpdatesAndFlags$Action(vars.value.currentPositionInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1Ys+pYU_Ykqa2P6vQhQ_DA", callContext.id);
// Execute Action: Directory_Updates_RefreshBottomBarCount
model.flush();
return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b63G7bek_k6YNGEOHLjT5w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HbojZodU60mEGP_J8lYJcg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HbojZodU60mEGP_J8lYJcg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_MarkAsRead$vars", [{
name: "UpdateItemId",
attrName: "updateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CurrentPosition",
attrName: "currentPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._handler_FilterSheetSheetInitialized$Action = function (sheetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetSheetInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_FilterSheetSheetInitialized$vars"))());
vars.value.sheetIdInLocal = sheetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wyradjWpIkmXZHdkfsGtsA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.wyradjWpIkmXZHdkfsGtsA:N0jV6iZZ_poG4XSV9c2BhA", "UBTConnect", "Handler_FilterSheetSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z+CB+z6raESxl8RNgQhYxA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KKTtDSTKFkGFqwZteaT_iw", callContext.id);
// Filter_BottomSheetId = SheetId
model.variables.filter_BottomSheetIdVar = vars.value.sheetIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Yhl0PHtF1kWQbpccF8N_Sg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wyradjWpIkmXZHdkfsGtsA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_FilterSheetSheetInitialized$vars", [{
name: "SheetId",
attrName: "sheetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_OnShare$Action = function (updateItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnShare");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnShare$vars"))());
vars.value.updateItemIdInLocal = updateItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aNRzf8p4PUSc4X_mNs_ggg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.aNRzf8p4PUSc4X_mNs_ggg:quNnAsE3bDzDgEqgsUSRgw", "UBTConnect", "Handler_OnShare", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8oH98qUAaEC5C_EpN4raXQ", callContext.id);
// Has extended share?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SA5PpXVMuEyGbsU22KThtQ", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JjuOnIj1+02DlEIVEur8wg", callContext.id);
// ShareableUpdateItem = FetchUpdates.UI_UpdateItemList.Current
model.variables.shareableUpdateItemVar = model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JjuOnIj1+02DlEIVEur8wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsShareOpen = True
model.variables.isShareOpenVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JjuOnIj1+02DlEIVEur8wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShareableObjectId = FetchUpdates.UI_UpdateItemList.Current.MemberId
model.variables.shareableObjectIdVar = model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).memberIdAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s4iqL7LWbUqOqwnNWl7oSw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NKrtCnJLfEOZTfAICn0ULA", callContext.id);
// Execute Action: ShowComingSoonMessage
UBTConnect_UtilsController.default.showComingSoonMessage$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s4iqL7LWbUqOqwnNWl7oSw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aNRzf8p4PUSc4X_mNs_ggg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnShare$vars", [{
name: "UpdateItemId",
attrName: "updateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
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
var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
var getSkeletonList_UI_UpdatesVar = new OS.DataTypes.VariableHolder();
var getFocusedScrollAnchorOnBackVar = new OS.DataTypes.VariableHolder();
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
varBag.getSkeletonList_UI_UpdatesVar = getSkeletonList_UI_UpdatesVar;
varBag.getFocusedScrollAnchorOnBackVar = getFocusedScrollAnchorOnBackVar;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sk7Fg02oo02JI4c2NzMW2A:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.sk7Fg02oo02JI4c2NzMW2A:8W9gd_SKKYm6bdkAKRXWdQ", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hrluzIFR_EqCVqM24+dqhw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5c7U9BqK3U28UN1pkuTy+g", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eI_pYnURmk+DDohAtvvLJg", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnReady_SetStickyHeaderHeightJS, "SetStickyHeaderHeight", "ScreenEvent_OnReady", null, function ($parameters) {
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EdnLvsZaAEevdXZpTS_ojw", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:099qGL8SlkmP57f12Gn6Hw", callContext.id);
// Execute Action: JSUtils_Element_Operations_GetElementById
jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(idService.getId("List_Updates"), callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:npXcp9Qwyka6YYZN1YhFzw", callContext.id);
// Execute Action: ReactiveInstance_ForceUpdate
UBTJavaScriptUtilsController.default.reactiveInstance_ForceUpdate$Action(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G7D2RMfcnka8UewjInOEaQ", callContext.id);
// Execute Action: SetupScrollListener
controller._setupScrollListener$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yT9zz4SirEGlA48zT7aUoA", callContext.id);
// Execute Action: GetFocusedScrollAnchorOnBack
getFocusedScrollAnchorOnBackVar.value = NavigationHandlerController.default.getFocusedScrollAnchorOnBack$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:km_R6wPntky7XWsj2zbOuw", callContext.id);
// FocusedScrollAnchorId = If
model.variables.focusedScrollAnchorIdVar = ((((getFocusedScrollAnchorOnBackVar.value.scrollAnchorIdOut) !== (""))) ? (OS.BuiltinFunctions.longIntegerToText(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr)) : (model.variables.focusedScrollAnchorIdVar));
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mb5s+_wjkk67KvYxhUch5A", callContext.id) && ((model.variables.focusedScrollAnchorIdVar) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zHyiM6OrVEGXFb0BpoPr4Q", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_ScreenEvent_OnReady_ScrollFixJS, "ScrollFix", "ScreenEvent_OnReady", {
In_AnchorId: OS.DataConversion.JSNodeParamConverter.to(model.variables.focusedScrollAnchorIdVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QmJZksDGe0aX+siNkCTYtQ", callContext.id);
// FocusedScrollAnchorId = ""
model.variables.focusedScrollAnchorIdVar = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tObLMGkmWE6a+X6TFUiCZg", callContext.id);
} else {
// isLoading
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kwJBmFJliUeJgk3OD_XEQg", callContext.id);
// isLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IKNwMHX9lUGziYjrz2WX9w", callContext.id);
// Execute Action: GetSkeletonList_UI_Updates
getSkeletonList_UI_UpdatesVar.value = UBTConnectController.default.getSkeletonList_UI_Updates$Action(10, callContext);

// Setup Skeleton Data
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6cYRwEeB6k2YWQphyoueag", callContext.id);
// FetchUpdates.UI_UpdateItemList = GetSkeletonList_UI_Updates.UI_UpdateItems
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut = getSkeletonList_UI_UpdatesVar.value.uI_UpdateItemsOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XbCRDeh8f0qdUmZvcamVvQ", callContext.id);
// Refresh Query: GetDateRanges
var result = controller.getDateRanges$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Suctu7bUa0mtr7jRWq5KHw", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sk7Fg02oo02JI4c2NzMW2A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sk7Fg02oo02JI4c2NzMW2A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._updateCurrentBreakpoint$Action = function (breakpointIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("UpdateCurrentBreakpoint");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.UpdateCurrentBreakpoint$vars"))());
vars.value.breakpointInLocal = breakpointIn;
var listFilterBreakpointsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterBreakpointsVar = listFilterBreakpointsVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LRruivkw402Qcc42QqoXEg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.LRruivkw402Qcc42QqoXEg:khJ+B2eoAaNoiUUFTdiKyg", "UBTConnect", "UpdateCurrentBreakpoint", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:33lHU5iqCk6yWOdhw0TdGA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hb3YReHTMEe3fKVg3h6i6g", callContext.id);
// Execute Action: ListFilterBreakpoints
listFilterBreakpointsVar.value = OS.SystemActions.listFilter(model.variables.breakpointsVar, function (p) {
return (p.sectionNameAttr === OS.BuiltinFunctions.textToIdentifier(vars.value.breakpointInLocal));
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rTMNvrCKfUujh2sToO4k3A", callContext.id);
// CurrentBreakpoint = If
model.variables.currentBreakpointVar = ((!(listFilterBreakpointsVar.value.filteredListOut.isEmpty)) ? (listFilterBreakpointsVar.value.filteredListOut.getCurrent(callContext.iterationContext)) : (model.variables.currentBreakpointVar));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6tkJZFZoFkymD1p7UvFN_w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LRruivkw402Qcc42QqoXEg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.UpdateCurrentBreakpoint$vars", [{
name: "Breakpoint",
attrName: "breakpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_OnHeaderScrolled$Action = function (event_IsHeaderScrolledIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnHeaderScrolled");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnHeaderScrolled$vars"))());
vars.value.event_IsHeaderScrolledInLocal = event_IsHeaderScrolledIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+z0tjixkLkemk9X8t2KuRg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.+z0tjixkLkemk9X8t2KuRg:E83QgcZ1uY7z7fNq_CvvPA", "UBTConnect", "Handler_OnHeaderScrolled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SYh2kmYSHEeg3_RB3ivLQw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IaR4jze1RUmBMxMN3kQXBg", callContext.id);
// IsHeaderScrolled = Event_IsHeaderScrolled
model.variables.isHeaderScrolledVar = vars.value.event_IsHeaderScrolledInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tlr3NdDyUkqkCWMNTvVBog", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+z0tjixkLkemk9X8t2KuRg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnHeaderScrolled$vars", [{
name: "Event_IsHeaderScrolled",
attrName: "event_IsHeaderScrolledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_ApplyFilters$Action = function (event_Filter_UpdatesIn, event_HasFiltersAppliedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_ApplyFilters$vars"))());
vars.value.event_Filter_UpdatesInLocal = event_Filter_UpdatesIn.clone();
vars.value.event_HasFiltersAppliedInLocal = event_HasFiltersAppliedIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:f3VGkJRUlEGyBLfCew78Cg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.f3VGkJRUlEGyBLfCew78Cg:1LAqYhshwa_2gUsrM7m40Q", "UBTConnect", "Handler_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hDrOnddruU+xEXwwLhdEKA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// No changes?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2Xs6biUV_Uyju5I8F2rPeg", callContext.id) && vars.value.event_Filter_UpdatesInLocal.equals(model.variables.filter_UpdatesVar))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hbczJuR4WUKFbXZiUPtu1g", callContext.id);
} else {
// Setup Variables
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W2lHaYSlAkCPBMzidMP_FQ", callContext.id);
// Filter_Updates = Event_Filter_Updates
model.variables.filter_UpdatesVar = vars.value.event_Filter_UpdatesInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W2lHaYSlAkCPBMzidMP_FQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HasFiltersApplied = Event_HasFiltersApplied
model.variables.hasFiltersAppliedVar = vars.value.event_HasFiltersAppliedInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:06EbQ0bkw02+vbTt50rttA", callContext.id);
// ShowMarkAll = False
model.variables.showMarkAllVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7Dgcl+zpukyz3_J2E6eBjg", callContext.id);
// Execute Action: ScrollTop
UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
// isLoading
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hYz5rS0sf0Kqmi6pd4hc+g", callContext.id);
// isLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+f_fBrPgi0azL4rvAhxiJw", callContext.id);
// Execute Action: RefreshUpdates
return controller._refreshUpdates$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gggTW+6eVk6oJ8inNc+W5g", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:f3VGkJRUlEGyBLfCew78Cg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:f3VGkJRUlEGyBLfCew78Cg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_ApplyFilters$vars", [{
name: "Event_Filter_Updates",
attrName: "event_Filter_UpdatesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Updates_CSModel.Filter_UpdatesRec();
},
complexType: Connect_Updates_CSModel.Filter_UpdatesRec
}, {
name: "Event_HasFiltersApplied",
attrName: "event_HasFiltersAppliedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._updateFilterTypesOptions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("UpdateFilterTypesOptions");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nCSWnyWI7Emf7LR8t+qZiA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.nCSWnyWI7Emf7LR8t+qZiA:EXNkOQKEAGKTIbZ+1cTtYw", "UBTConnect", "UpdateFilterTypesOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IdjanuGGt0i4kpQKt9aNHg", callContext.id);
// Needs options?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2VRcr2QsUWepcuC44Bd0g", callContext.id) && model.variables.filter_UpdateTypeOptionsVar.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2mSf0lQB+0GS7TKRwPCrLw", callContext.id);
// Execute Action: ListAppend_All
OS.SystemActions.listAppend(model.variables.filter_UpdateTypeOptionsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "All";
rec.identifierAttr = OS.BuiltinFunctions.nullTextIdentifier();
rec.isSelectedAttr = true;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jI56cY1620aTWIUmG5sqLA", callContext.id);
// Execute Action: ListAppend_Birth
OS.SystemActions.listAppend(model.variables.filter_UpdateTypeOptionsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "Birth";
rec.identifierAttr = UBTConnectModel.staticEntities.connect_UpdateTypeId.birth;
rec.isSelectedAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KxGHE9VUQ0O2diLgdp_uQQ", callContext.id);
// Execute Action: ListAppend_Marriage
OS.SystemActions.listAppend(model.variables.filter_UpdateTypeOptionsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "Marriage";
rec.identifierAttr = UBTConnectModel.staticEntities.connect_UpdateTypeId.marriage;
rec.isSelectedAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K0Azm5JmR0K2Y3ymkGk00g", callContext.id);
// Execute Action: ListAppend_Taken
OS.SystemActions.listAppend(model.variables.filter_UpdateTypeOptionsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "Taken";
rec.identifierAttr = UBTConnectModel.staticEntities.connect_UpdateTypeId.taken;
rec.isSelectedAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nGt_vhpaxEi18AkS9DZHiQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Fk5yi8FCTU2NLJBeao64bw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nCSWnyWI7Emf7LR8t+qZiA", callContext.id);
}

};
Controller.prototype._onAfterFetch_FetchUpdates$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_FetchUpdates");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.OnAfterFetch_FetchUpdates$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var directory_Updates_GetBreakpointsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.directory_Updates_GetBreakpointsVar = directory_Updates_GetBreakpointsVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GDRAqHhkQkqps2uA54X49A:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.GDRAqHhkQkqps2uA54X49A:_Jkmk+nF+sVmA3W3sCPOsA", "UBTConnect", "OnAfterFetch_FetchUpdates", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kRiPxxX+MUuHeLro24IyhQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NahdZxpGekeAxWmsaz6WLQ", callContext.id);
// Execute Action: Directory_Updates_GetBreakpoints
directory_Updates_GetBreakpointsVar.value = UBTConnectController.default.directory_Updates_GetBreakpoints$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut, model.variables.dateRangesVar, callContext);

// Set Breakpoints
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SS1ijHr5g0aeFDGwvzMXGw", callContext.id);
// Breakpoints = Directory_Updates_GetBreakpoints.Breakpoints
model.variables.breakpointsVar = directory_Updates_GetBreakpointsVar.value.breakpointsOut;
// Has Breakpoints?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1ngyoAXAr02CslCLYF2t5w", callContext.id) && !(directory_Updates_GetBreakpointsVar.value.breakpointsOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cSt7oS9E70Smx8YIxYI4DQ", callContext.id);
// CurrentBreakpoint = Breakpoints[0]
model.variables.currentBreakpointVar = model.variables.breakpointsVar.getItem(0);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vxddj+aLJ0avwFVkwsL8yA", callContext.id);
// CurrentBreakpoint = EmptyBreakpoint
model.variables.currentBreakpointVar = vars.value.emptyBreakpointVar;
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4XEfw9iDuUCeDzt+m2aaXQ", callContext.id);
// ShowMarkAll = FetchUpdates.UnreadCount > 0
model.variables.showMarkAllVar = (model.variables.fetchUpdatesDataAct.unreadCountOut > 0);
// isLoading
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FVJX9JH2QUWmPGukdxw6ew", callContext.id);
// isLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CxLLpSNmMkSLMujY+m3Nvg", callContext.id);
// Execute Action: DestroyEventListener
controller._destroyEventListener$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cilMDhojgE6YAlg0BSWgmA", callContext.id);
// Execute Action: SetupScrollListener
controller._setupScrollListener$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FX6x8Hw0KUygiJ1f4T4E0w", callContext.id);
// Execute Action: Directory_Updates_RefreshBottomBarCount
model.flush();
return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KzEWwC41K0CzXrVIipekQg", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("Updates_SingleList.OnAfterFetch_FetchUpdates", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zS4xqTl3D0qQTGGirW310w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:At509wR7bUyDBvDZ7ppIYA", callContext.id);
// isLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JvUbqge5cECkwoU2n6g4YQ", callContext.id);
// Raise Error: BubbleGenericException
throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GDRAqHhkQkqps2uA54X49A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GDRAqHhkQkqps2uA54X49A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.OnAfterFetch_FetchUpdates$vars", [{
name: "EmptyBreakpoint",
attrName: "emptyBreakpointVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.UI_UpdateItem_BreakpointRec();
},
complexType: UBTConnectModel.UI_UpdateItem_BreakpointRec
}]);
Controller.prototype._handler_ScrollEnding_UpdateBreakpoint$Action = function (in_DateIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ScrollEnding_UpdateBreakpoint");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_ScrollEnding_UpdateBreakpoint$vars"))());
vars.value.in_DateInLocal = in_DateIn;
var directory_Updates_GetListBreakpointVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.directory_Updates_GetListBreakpointVar = directory_Updates_GetListBreakpointVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:L5SuqdQiJEyFWpg3OWJN7w:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.L5SuqdQiJEyFWpg3OWJN7w:LiCtSv8XwCWKljJqEpLxKQ", "UBTConnect", "Handler_ScrollEnding_UpdateBreakpoint", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dKJwV6yyBEy_Pj7r5Pr22Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uAOqOE6N+0abad_ZsHpizQ", callContext.id);
// Execute Action: Directory_Updates_GetListBreakpoint
directory_Updates_GetListBreakpointVar.value = UBTConnectController.default.directory_Updates_GetListBreakpoint$Action(model.variables.breakpointsVar, OS.BuiltinFunctions.textToDate(vars.value.in_DateInLocal), OS.BuiltinFunctions.currDate(), false, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PH9420VnWk+2ziigE9NzLQ", callContext.id);
// CurrentBreakpoint = Directory_Updates_GetListBreakpoint.Out_ListBreakpoint
model.variables.currentBreakpointVar = directory_Updates_GetListBreakpointVar.value.out_ListBreakpointOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hx8hut3Oxkq0uU9wgGsDGQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:L5SuqdQiJEyFWpg3OWJN7w", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_ScrollEnding_UpdateBreakpoint$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_OnChangeSearchInput$Action = function (event_CurrentStringIn, in_IsToggleSearchIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnChangeSearchInput");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnChangeSearchInput$vars"))());
vars.value.event_CurrentStringInLocal = event_CurrentStringIn;
vars.value.in_IsToggleSearchInLocal = in_IsToggleSearchIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MCjXqqUyZU6X9vWwZpAXnA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.MCjXqqUyZU6X9vWwZpAXnA:E3OU2eYB6q9NN6N0xHbj4Q", "UBTConnect", "Handler_OnChangeSearchInput", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wJ7VdMpe3Uy_ocphDMGAVg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mz8GKyinzESAWuw65WbIag", callContext.id);
// CurrentSearchString = Event_CurrentString
model.variables.currentSearchStringVar = vars.value.event_CurrentStringInLocal;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZgIL1ckKdkGumVDm0hZRhA", callContext.id) && vars.value.in_IsToggleSearchInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zi+d0W_DDEmk9ZVRuEQ9cw", callContext.id);
// IsToggleSearch = True
model.variables.isToggleSearchVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PIYECtFnV0mTnnCYdjvBOA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PIYECtFnV0mTnnCYdjvBOA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MCjXqqUyZU6X9vWwZpAXnA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_OnChangeSearchInput$vars", [{
name: "Event_CurrentString",
attrName: "event_CurrentStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_IsToggleSearch",
attrName: "in_IsToggleSearchInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onAfterFetch_GetDateRanges$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetDateRanges");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var directory_Updates_AugmentDateRangesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.directory_Updates_AugmentDateRangesVar = directory_Updates_AugmentDateRangesVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OiAirp+5Bk61PQY3ZjfeaA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.OiAirp+5Bk61PQY3ZjfeaA:SVhGknA+jN4X66DvYRryag", "UBTConnect", "OnAfterFetch_GetDateRanges", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uFFwMAeJdECdV11mSHoB0A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kcPf2WjGy0uif5pwzO+lcA", callContext.id);
// Execute Action: Directory_Updates_AugmentDateRanges
directory_Updates_AugmentDateRangesVar.value = UBTConnectController.default.directory_Updates_AugmentDateRanges$Action(model.variables.getDateRangesDataAct.dateRangesListOut, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yQZOCZF+2k2BfLEIVl4gZg", callContext.id);
// DateRanges = Directory_Updates_AugmentDateRanges.DateRanges
model.variables.dateRangesVar = directory_Updates_AugmentDateRangesVar.value.dateRangesOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UGNcr2PkPUyajIjxkxzTYQ", callContext.id);
// Execute Action: SetDefaultFilters
controller._setDefaultFilters$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lQ+dWJhZwkae6qVdYf_WGA", callContext.id);
// Execute Action: RefreshUpdates
return controller._refreshUpdates$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z40Ny56jQkuZipxV_MMECw", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("Updates_SingleList.OnAfterFetch_GetDateRanges", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HGVb3+juskCKtgYmMu_g1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8QRh0+S4xkOt6Faa2cWUaw", callContext.id);
// isLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ajb+IOhwzk6NFFFAtAxqkA", callContext.id);
// Raise Error: BubbleGenericException
throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OiAirp+5Bk61PQY3ZjfeaA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OiAirp+5Bk61PQY3ZjfeaA", callContext.id);
throw ex;

});
};
Controller.prototype._handler_ToggleSearch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ToggleSearch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Z24wtD5UcUOC5po3gEyjxA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.Z24wtD5UcUOC5po3gEyjxA:yBz9BXrJ7jlcxCMUXb75Fg", "UBTConnect", "Handler_ToggleSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0To3HdeIukKc5F1xnIdisw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GMBZAY9c1UeOQvJ_LXTDbA", callContext.id);
// IsToggleSearch = notIsToggleSearch
model.variables.isToggleSearchVar = !(model.variables.isToggleSearchVar);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qKjOTmW3u0e5Dt2HboU8eA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Z24wtD5UcUOC5po3gEyjxA", callContext.id);
}

};
Controller.prototype._setupScrollListener$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetupScrollListener");
callContext = controller.callContext(callContext);
var jSONSerialize_BreakpointsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.jSONSerialize_BreakpointsVar = jSONSerialize_BreakpointsVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:iHUGuqdq9EivHIs8+f8SMQ:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.iHUGuqdq9EivHIs8+f8SMQ:IXSfwJTmFYHmvamCLtUKKQ", "UBTConnect", "SetupScrollListener", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5Z9MKNc3AUisp0fvOA5kBA", callContext.id);
// delete this remove this
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gaS7Md5v_k2OcxaBXEkPgA", callContext.id) && true)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_JLwQ2mVJEeF+WiA3mxX2g", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_SetupScrollListener_SetupScrollEndListenerJS, "SetupScrollEndListener", "SetupScrollListener", {
In_TopElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ListHeader"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
Handler_ScrollEnding_UpdateBreakpoint: controller.clientActionProxies.handler_ScrollEnding_UpdateBreakpoint$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3brX_a39b0WfFuV4bfIFdQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mDfsZjoBy0+bxvlX9pzmzg", callContext.id);
// JSON Serialize: JSONSerialize_Breakpoints
jSONSerialize_BreakpointsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.breakpointsVar, true, false);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mRl+rmp4MEaI1X6i0KVdDg", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_SetupScrollListener_SetupScrollListenerJS, "SetupScrollListener", "SetupScrollListener", {
In_Breakpoints: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_BreakpointsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
In_ListId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("List_Updates"), OS.DataTypes.DataTypes.Text),
In_UpdateItemClass: OS.DataConversion.JSNodeParamConverter.to(".ubt-update-item", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
SetupScrollThreshold: controller.clientActionProxies.setupScrollThreshold$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wiNYzutTnkqHXseNntjV0g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:iHUGuqdq9EivHIs8+f8SMQ", callContext.id);
}

};
Controller.prototype._handler_MarkAllAsRead$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_MarkAllAsRead");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var directory_Updates_MarkAllAsReadVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.directory_Updates_MarkAllAsReadVar = directory_Updates_MarkAllAsReadVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aWQcztqZo0G8TL67YPfb6Q:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.aWQcztqZo0G8TL67YPfb6Q:hPOOFXcC4kroFvINrV7zBA", "UBTConnect", "Handler_MarkAllAsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CGQg7H2A2EaFcYtamEExow", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tvEf9gmQSUKNn46qclUS9g", callContext.id);
// ShowMarkAll = False
model.variables.showMarkAllVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GZVO501Y4Eyl025QyEnXCA", callContext.id);
// isLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D+YiDuEGzEyYKIR9ZEjt8Q", callContext.id);
// Execute Action: Action_UI_UpdateItem_MarkAllAsRead
model.flush();
return controller.action_UI_UpdateItem_MarkAllAsRead$ServerAction(model.variables.filter_UpdatesVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nO9hA5JB5keXb7FOrJ3SJg", callContext.id);
// Execute Action: Directory_Updates_MarkAllAsRead
directory_Updates_MarkAllAsReadVar.value = UBTConnectController.default.directory_Updates_MarkAllAsRead$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut, callContext);

// Set Read List
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vXahOlKhB0iNkGIbDf0B1Q", callContext.id);
// FetchUpdates.UI_UpdateItemList = Directory_Updates_MarkAllAsRead.Out_UI_UpdateItemList
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut = directory_Updates_MarkAllAsReadVar.value.out_UI_UpdateItemListOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f51LsCm7F0+Wdk6vXL1kfw", callContext.id);
// Execute Action: SetBadgeCountsToZero
controller._setBadgeCountsToZero$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xfl5DSp66UyoLEeH0imFWA", callContext.id);
// isLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7F8ELX2YVEKohiKPq8K9Tw", callContext.id);
// Execute Action: Directory_Updates_RefreshBottomBarCount
model.flush();
return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SsxHvh9Xokey8cyhYhbp5Q", callContext.id);
// Execute Action: RefreshUpdates
return controller._refreshUpdates$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OXHWI6nkaky5spRNiM39tw", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("Updates_SingleList.Handler_MarkAllAsRead", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Oh0RdEoJ9kuMIl2U4Qu56Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1of2vMXMikumq_utafDO2g", callContext.id);
// isLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qpmH7kjq6UaQ7OPN7VbvwA", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aWQcztqZo0G8TL67YPfb6Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aWQcztqZo0G8TL67YPfb6Q", callContext.id);
throw ex;

});
};
Controller.prototype._handler_MarkAsUnread$Action = function (updateItemIdIn, currentPositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_MarkAsUnread");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_MarkAsUnread$vars"))());
vars.value.updateItemIdInLocal = updateItemIdIn;
vars.value.currentPositionInLocal = currentPositionIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fGvz3VR7JU+LZTzbSQavkg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.fGvz3VR7JU+LZTzbSQavkg:6M03xgwPZO77BDpH59CBmg", "UBTConnect", "Handler_MarkAsUnread", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WeQljZNo4k2DDLq7EjNUBg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:djxfll7TSEa29bJMrVVLmQ", callContext.id);
// Execute Action: Action_UI_UpdateItem_MarkAsUnread
model.flush();
return controller.action_UI_UpdateItem_MarkAsUnread$ServerAction(vars.value.updateItemIdInLocal, callContext).then(function () {
// Set IsRead to False 
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cgH0awuFFE2bAvDVh4flnw", callContext.id);
// FetchUpdates.UI_UpdateItemList[CurrentPosition].IsRead = False
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(vars.value.currentPositionInLocal).isReadAttr = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9DJJLLv1d0qUoHkYapO8IA", callContext.id);
// Execute Action: RefreshUpdatesAndFlags
controller._refreshUpdatesAndFlags$Action(vars.value.currentPositionInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YTL4UScJn0eqwr8H84uvPQ", callContext.id);
// Execute Action: Directory_Updates_RefreshBottomBarCount
model.flush();
return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oFz2KIOHO02QTNF9mqPTBA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fGvz3VR7JU+LZTzbSQavkg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fGvz3VR7JU+LZTzbSQavkg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Updates.Updates_SingleList.Handler_MarkAsUnread$vars", [{
name: "UpdateItemId",
attrName: "updateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CurrentPosition",
attrName: "currentPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._destroyEventListener$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DestroyEventListener");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+LLG7hcIU06p1mEclpLzSA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg/ClientActions.+LLG7hcIU06p1mEclpLzSA:UgI3sra2c79bbKJG4rT4DA", "UBTConnect", "DestroyEventListener", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YLKNM2hOgkqrC9rNBCbJZw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o1D3YY6eFEWm2WkVgumOBg", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Updates_Updates_SingleList_mvc_controller_DestroyEventListener_DestroyEventListenerJS, "DestroyEventListener", "DestroyEventListener", {
In_EventListenerTarget: OS.DataConversion.JSNodeParamConverter.to(model.variables.eventListenerTargetVar, OS.DataTypes.DataTypes.Object),
In_EventListener: OS.DataConversion.JSNodeParamConverter.to(model.variables.eventListenerVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UDf5pIaB706RtLApnNxNpA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+LLG7hcIU06p1mEclpLzSA", callContext.id);
}

};

Controller.prototype.onChange_FilterType$Action = function (updatedTagListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_FilterType$Action, callContext, updatedTagListIn);

};
Controller.prototype.handler_CloseShareSheet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_CloseShareSheet$Action, callContext);

};
Controller.prototype.refreshUpdates$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshUpdates$Action, callContext);

};
Controller.prototype.setDefaultFilters$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setDefaultFilters$Action, callContext);

};
Controller.prototype.sectionHeaderEvent_UpdateListHeader$Action = function (event_BreakpointIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sectionHeaderEvent_UpdateListHeader$Action, callContext, event_BreakpointIn);

};
Controller.prototype.setMarkAllTag$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setMarkAllTag$Action, callContext);

};
Controller.prototype.refreshUpdatesAndFlags$Action = function (currentPositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshUpdatesAndFlags$Action, callContext, currentPositionIn);

};
Controller.prototype.handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

};
Controller.prototype.handler_FilterSearchText$Action = function (textIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSearchText$Action, callContext, textIn);

};
Controller.prototype.handler_OnClickUpdateItem$Action = function (in_CurrentItemIndexIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClickUpdateItem$Action, callContext, in_CurrentItemIndexIn);

};
Controller.prototype.setupScrollThreshold$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setupScrollThreshold$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.setBadgeCountsToZero$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setBadgeCountsToZero$Action, callContext);

};
Controller.prototype.handler_MarkAsRead$Action = function (updateItemIdIn, currentPositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_MarkAsRead$Action, callContext, updateItemIdIn, currentPositionIn);

};
Controller.prototype.handler_FilterSheetSheetInitialized$Action = function (sheetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetSheetInitialized$Action, callContext, sheetIdIn);

};
Controller.prototype.handler_OnShare$Action = function (updateItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnShare$Action, callContext, updateItemIdIn);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.updateCurrentBreakpoint$Action = function (breakpointIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._updateCurrentBreakpoint$Action, callContext, breakpointIn);

};
Controller.prototype.handler_OnHeaderScrolled$Action = function (event_IsHeaderScrolledIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnHeaderScrolled$Action, callContext, event_IsHeaderScrolledIn);

};
Controller.prototype.handler_ApplyFilters$Action = function (event_Filter_UpdatesIn, event_HasFiltersAppliedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ApplyFilters$Action, callContext, event_Filter_UpdatesIn, event_HasFiltersAppliedIn);

};
Controller.prototype.updateFilterTypesOptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._updateFilterTypesOptions$Action, callContext);

};
Controller.prototype.onAfterFetch_FetchUpdates$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_FetchUpdates$Action, callContext);

};
Controller.prototype.handler_ScrollEnding_UpdateBreakpoint$Action = function (in_DateIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ScrollEnding_UpdateBreakpoint$Action, callContext, in_DateIn);

};
Controller.prototype.handler_OnChangeSearchInput$Action = function (event_CurrentStringIn, in_IsToggleSearchIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnChangeSearchInput$Action, callContext, event_CurrentStringIn, in_IsToggleSearchIn);

};
Controller.prototype.onAfterFetch_GetDateRanges$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetDateRanges$Action, callContext);

};
Controller.prototype.handler_ToggleSearch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ToggleSearch$Action, callContext);

};
Controller.prototype.setupScrollListener$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setupScrollListener$Action, callContext);

};
Controller.prototype.handler_MarkAllAsRead$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_MarkAllAsRead$Action, callContext);

};
Controller.prototype.handler_MarkAsUnread$Action = function (updateItemIdIn, currentPositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_MarkAsUnread$Action, callContext, updateItemIdIn, currentPositionIn);

};
Controller.prototype.destroyEventListener$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._destroyEventListener$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg:C9xuQgCNB04qKzk88z0W5Q", "UBTConnect", "Directory_Updates", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ga+02zaSZ0qKk35XEjWHEg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.Ga+02zaSZ0qKk35XEjWHEg:Qpz7h7tWv_0Vb2HIL1diWQ", "UBTConnect", "Updates_SingleList", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ga+02zaSZ0qKk35XEjWHEg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Updates_SingleList On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Updates_SingleList On Ready");
return controller.screenEvent_OnReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/Updates_SingleList On Destroy");
return controller.destroyEventListener$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Directory_UpdatesController.default.handleError(ex, this.callContext());
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
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.Handler_OnClickUpdateItem.CaptureScrollPositionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
(function (anchorId) {
  var container = document.querySelector('.active-screen.screen-container');
  if (!container) return;

  var el = container.querySelector('[data-dx-scroll-anchor-id="' + anchorId + '"]');
  if (!el) return;

  var delta = el.getBoundingClientRect().top - container.getBoundingClientRect().top;

  localStorage.setItem('scrollAnchorId', anchorId);
  localStorage.setItem('scrollAnchorDelta', delta.toString());
})($parameters.In_AnchorId);
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.SetupScrollThreshold.SetupScrollThresholdsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const scrollCont = document.querySelector($parameters.In_ScrollContainer);
const headerSearch = document.querySelector($parameters.In_HeaderSearchClass);
const updateItem = document.getElementById($parameters.In_ListId).querySelector($parameters.In_UpdateItemClass);
const breakpoints = JSON.parse($parameters.In_Breakpoints);

if(scrollCont && headerSearch && updateItem && (Array.isArray(breakpoints) && breakpoints.length !== 0)){
    const itemHeight = updateItem.offsetHeight;
    let previousBreakpoint = -1;
    let isDebouncing = { value: false };

    function getIndex(scrollTop) {
        const index = Math.floor((scrollTop - headerSearch.offsetHeight) / itemHeight);
        if (!Number.isFinite(index)) {
            return 0;
        }
        return Math.max(0, index);
    }

    function getCurrentBreakpoint(index) {
        for (let i = breakpoints.length - 1; i >= 0; i--) {
            if (index >= breakpoints[i].position) {
                return breakpoints[i];
            }
        }
        return breakpoints[0];
    }

    function onScrollThreshold(){

        const currentScroll = scrollCont.scrollTop;
        const currentBreakpoint = getCurrentBreakpoint(getIndex(currentScroll));

        if(currentBreakpoint !== previousBreakpoint){
            previousBreakpoint = currentBreakpoint;
            $actions.UpdateCurrentBreakpoint(currentBreakpoint.sectionName);
        }
    }

    const processScroll = () => {
        ScrollEvent.debounceScroll(onScrollThreshold, isDebouncing);
    }

    scrollCont.addEventListener('scroll', processScroll, { passive: true });
    
    $parameters.Out_DestroyListener = processScroll;
    $parameters.Out_DestroyListenerTarget = scrollCont;
}
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnReady.ScrollFixJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
(function (newAnchorId) {
  var anchorId = newAnchorId || localStorage.getItem('scrollAnchorId');
  var delta = parseFloat(localStorage.getItem('scrollAnchorDelta') || '0');
  if (!anchorId) return;

  var container = document.querySelector('.active-screen.screen-container');
  if (!container) return;

  var frames = 0, maxFrames = 180;

  function tryRestore() {
    var el = document.querySelector('[data-dx-scroll-anchor-id="' + anchorId + '"]');
    if (el) {
      var relativeTop = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
      container.scrollTop = container.scrollTop + relativeTop - delta;
      localStorage.removeItem('scrollAnchorId');
      localStorage.removeItem('scrollAnchorDelta');
      return;
    }
    if (++frames < maxFrames) window.requestAnimationFrame(tryRestore);
  }
  window.requestAnimationFrame(tryRestore);
})($parameters.In_AnchorId);
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnReady.SetStickyHeaderHeightJS", [], function () {
return function ($actions, $roles, $public) {
function setStickyTopOffsetVariable() {
  const headerEl = document.querySelector('.header');
  const updatesHeaderEl = document.querySelector('.updates-list__header');
  const scrollContainer = document.querySelector('.active-screen.screen-container');

  if (!headerEl || !updatesHeaderEl || !scrollContainer) {
    console.warn('Could not find element(s) for offset calculation:', { headerEl, updatesHeaderEl, scrollContainer });
    return;
  }

  const headerHeight = headerEl.getBoundingClientRect().height;
  const updatesHeaderHeight = updatesHeaderEl.getBoundingClientRect().height;
  const topOffsetPx = headerHeight + updatesHeaderHeight + 9;

  scrollContainer.style.setProperty('--sticky-top-offset', `${topOffsetPx}px`);

  if (window._stickyDebug) {
    console.log('Set --sticky-top-offset:', { headerHeight, updatesHeaderHeight, topOffsetPx });
  }
}

setStickyTopOffsetVariable();
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.SetupScrollListener.SetupScrollEndListenerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function setupScrollEndCorrection(scrollContainerSelector, stickyHeaderId, listItemSelector) {
  if (typeof window._stickyDebug === 'undefined') {
    window._stickyDebug = false;
  }

  const scrollContainer = document.querySelector(scrollContainerSelector);
  const stickyHeaderEl = document.getElementById(stickyHeaderId);

  if (!scrollContainer || !stickyHeaderEl) {
    console.warn('Missing element(s):', { scrollContainer, stickyHeaderEl });
    return;
  }

  function resolveCurrentDate(retriesLeft = 3) {
    const headerRect = stickyHeaderEl.getBoundingClientRect();
    const boundaryY = headerRect.bottom; // the line we're checking against

    // grab all currently rendered list items
    const allItems = [...document.querySelectorAll(listItemSelector)];

    // find the item whose bounds straddle the boundary line
    // i.e. top is above (or at) the line, and bottom is below (or at) the line
    let currentItem = null;
    for (const item of allItems) {
      const rect = item.getBoundingClientRect();
      if (rect.top <= boundaryY && rect.bottom >= boundaryY) {
        currentItem = item;
        break; // there should only be one true match at a time
      }
    }

    if (!currentItem) {
      // virtualized list may not have committed the correct render window yet —
      // retry on the next frame(s) instead of giving up immediately
      if (retriesLeft > 0) {
        if (window._stickyDebug) {
          console.warn(`No list item currently intersects the sticky header boundary — retrying (${retriesLeft} left)`);
        }
        requestAnimationFrame(() => resolveCurrentDate(retriesLeft - 1));
      } else {
        if (window._stickyDebug) {
          console.warn('No list item currently intersects the sticky header boundary after retries — giving up.');
        }
      }
      return;
    }

    const plusDate = currentItem.getAttribute('data-plus-date');

    if (window._stickyDebug) {
      console.log('%c SCROLLEND CORRECTION', 'color: white; background: darkorange; padding: 2px 6px; border-radius: 3px;');
      console.log('Resolved item:', currentItem, '| data-plus-date:', plusDate);
    }

    $actions.Handler_ScrollEnding_UpdateBreakpoint(plusDate);

    if (window._stickyDebug) {
      console.log(plusDate);
    }
  }

  scrollContainer.addEventListener('scrollend', () => resolveCurrentDate(), { passive: true });
  resolveCurrentDate(); // run once on load to establish correct initial state

  return resolveCurrentDate;
}

window.setTimeout(() => setupScrollEndCorrection(
  '.active-screen.screen-container',
  $parameters.In_TopElementId,
  '.updates-list__list-item' // adjust to whatever the actual list item selector is
), 0);
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.SetupScrollListener.SetupScrollListenerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let attempt = 0;
const maxAttempts = 360;

function waitForList() {
    attempt++;

    const updateItem = document.getElementById($parameters.In_ListId)?.querySelector($parameters.In_UpdateItemClass);
    const breakpoints = JSON.parse($parameters.In_Breakpoints);

    if(updateItem && updateItem.offsetHeight !== 0 && Array.isArray(breakpoints) && breakpoints.length !== 0){
        $actions.SetupScrollThreshold();
    }else if(attempt < maxAttempts){
        requestAnimationFrame(waitForList);
        return;
    }
}

waitForList();
};
});
define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$controller.DestroyEventListener.DestroyEventListenerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.In_EventListener && $parameters.In_EventListenerTarget){
    $parameters.In_EventListenerTarget.removeEventListener('scroll',$parameters.In_EventListener);
}
};
});

define("UBTConnect.Directory_Updates.Updates_SingleList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"5wodGKUhEE62pJFlvtizyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.updatedTagListInLocal;
}
},
"B7MGNu0FlEmhVQp0nLSkKA": {
getter: function (varBag, idService) {
return varBag.listFilter_GetSelectedVar.value;
}
},
"E2ZJueW0b0C4c0RcwCzMEQ": {
getter: function (varBag, idService) {
return varBag.listFilter_OlderVar.value;
}
},
"JcM97nuSRkat1SxG24LAEA": {
getter: function (varBag, idService) {
return varBag.listFilter_TodayVar.value;
}
},
"9p8G42BWdUyPKJ64rw+uMw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_BreakpointInLocal;
}
},
"W0PwEDRz_UCuz4CamLtLgQ": {
getter: function (varBag, idService) {
return varBag.listFilter_GetUnreadVar.value;
}
},
"ticq3Qrjg02KR0GZ93XsNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.currentPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"+rLePnbinUWlBeowS176JA": {
getter: function (varBag, idService) {
return varBag.directory_Updates_GetUpdatedBreakpointsVar.value;
}
},
"FvnQFgkJ7kynXTxqrkcSww": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wkIl0OjM3kCnOSlmHOGMcg": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"s0Xc8q3WvU2ofAAbHgrnxA": {
getter: function (varBag, idService) {
return varBag.vars.value.carouselPreloadedHouseholdsVar;
}
},
"9W9g0SZtwEi3A9Lx_WRVMg": {
getter: function (varBag, idService) {
return varBag.vars.value.targetHouseholdIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"JWOZJiuJGk2gy6B3caOF8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentItemIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"_xtvDTQxkkeBeyktb1YDNQ": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"NrQjUn4fKkW5H0RpHBJnNA": {
getter: function (varBag, idService) {
return varBag.listFilter_HasAccessVar.value;
}
},
"1D0xughG2EeJpsXp7F_z4A": {
getter: function (varBag, idService) {
return varBag.directory_Updates_GetCarouselPreloadedHouseholdsVar.value;
}
},
"uxuGtWzGEUab+qTwU9VoPQ": {
getter: function (varBag, idService) {
return varBag.captureScrollPositionJSResult.value;
}
},
"B10CUDPGX0W66yGyHQA8NA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_BreakpointsVar.value;
}
},
"x_yxztYWWEm4TrESF72log": {
getter: function (varBag, idService) {
return varBag.setupScrollThresholdsJSResult.value;
}
},
"PMXlq4Mx5EOeSN9paJuZSQ": {
getter: function (varBag, idService) {
return varBag.vars.value.entitiesCarousel_SwippedItemsVar;
}
},
"O5fzDsJu9EOm9Ph7S_BP5Q": {
getter: function (varBag, idService) {
return varBag.getPreloadObjectVar.value;
}
},
"lN8yf1ay70KB0C5VCuRwdw": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"ec4rjmpOeUeUxV4LvvAceQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"bfyLRXTGKUSF3CHdLIzoNw": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"4dJjeQXPL02nfGDbiM4Evw": {
getter: function (varBag, idService) {
return varBag.vars.value.updateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"h3dieuYKIEW+MXffwJwRSg": {
getter: function (varBag, idService) {
return varBag.vars.value.currentPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"x4SgfVj+OUyGIZdX91WOTw": {
getter: function (varBag, idService) {
return varBag.vars.value.sheetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"msGYTNIe+UWbkVGKiDmzcg": {
getter: function (varBag, idService) {
return varBag.vars.value.updateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"099qGL8SlkmP57f12Gn6Hw": {
getter: function (varBag, idService) {
return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
}
},
"IKNwMHX9lUGziYjrz2WX9w": {
getter: function (varBag, idService) {
return varBag.getSkeletonList_UI_UpdatesVar.value;
}
},
"yT9zz4SirEGlA48zT7aUoA": {
getter: function (varBag, idService) {
return varBag.getFocusedScrollAnchorOnBackVar.value;
}
},
"zHyiM6OrVEGXFb0BpoPr4Q": {
getter: function (varBag, idService) {
return varBag.scrollFixJSResult.value;
}
},
"eI_pYnURmk+DDohAtvvLJg": {
getter: function (varBag, idService) {
return varBag.setStickyHeaderHeightJSResult.value;
}
},
"5c7U9BqK3U28UN1pkuTy+g": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"6cGz4ui6B06j7NQUJEHgLw": {
getter: function (varBag, idService) {
return varBag.vars.value.breakpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Hb3YReHTMEe3fKVg3h6i6g": {
getter: function (varBag, idService) {
return varBag.listFilterBreakpointsVar.value;
}
},
"O8vcZvq9i02+Z_mb0zA3jQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_IsHeaderScrolledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"aMQY1fiNTU6o4LdGQhPyCg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_Filter_UpdatesInLocal;
}
},
"MPG6JPukn0OzQUDsJY7qmg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_HasFiltersAppliedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"hWHmRDrGV02mW+rpC9ot2g": {
getter: function (varBag, idService) {
return varBag.vars.value.emptyBreakpointVar;
}
},
"zS4xqTl3D0qQTGGirW310w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"NahdZxpGekeAxWmsaz6WLQ": {
getter: function (varBag, idService) {
return varBag.directory_Updates_GetBreakpointsVar.value;
}
},
"RsFPfdrflEWyWNGe5mKQYg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uAOqOE6N+0abad_ZsHpizQ": {
getter: function (varBag, idService) {
return varBag.directory_Updates_GetListBreakpointVar.value;
}
},
"a67VuVSwZEu1IMFpMkIRoA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_CurrentStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CzsdFC89aUiDcDd8UCktVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsToggleSearchInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HGVb3+juskCKtgYmMu_g1A": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"kcPf2WjGy0uif5pwzO+lcA": {
getter: function (varBag, idService) {
return varBag.directory_Updates_AugmentDateRangesVar.value;
}
},
"mDfsZjoBy0+bxvlX9pzmzg": {
getter: function (varBag, idService) {
return varBag.jSONSerialize_BreakpointsVar.value;
}
},
"_JLwQ2mVJEeF+WiA3mxX2g": {
getter: function (varBag, idService) {
return varBag.setupScrollEndListenerJSResult.value;
}
},
"mRl+rmp4MEaI1X6i0KVdDg": {
getter: function (varBag, idService) {
return varBag.setupScrollListenerJSResult.value;
}
},
"Oh0RdEoJ9kuMIl2U4Qu56Q": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"nO9hA5JB5keXb7FOrJ3SJg": {
getter: function (varBag, idService) {
return varBag.directory_Updates_MarkAllAsReadVar.value;
}
},
"Eez0TheZV0eMJdkc3PQsxw": {
getter: function (varBag, idService) {
return varBag.vars.value.updateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"zg8JRV8y4kaPxzn+_flkCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.currentPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"o1D3YY6eFEWm2WkVgumOBg": {
getter: function (varBag, idService) {
return varBag.destroyEventListenerJSResult.value;
}
},
"1WCD51TjDUGjnUusIkD7RA": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_UpdateTypeOptionsVar;
}
},
"Zk6udNJxhUmvGzFs9lwaww": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_BottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hM5tBLMqlU6vEcc4oeIkpw": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_UpdatesVar;
}
},
"pK8om0eyeE2zOG8IBN76DA": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_DefaultStateVar;
}
},
"J1fSSLiJY0SffHODCsLl5A": {
getter: function (varBag, idService) {
return varBag.model.variables.hasFiltersAppliedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+dqFuHudV0CvDOMHC5gTzw": {
getter: function (varBag, idService) {
return varBag.model.variables.showMarkAllVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1zX33Q2auk+_ddV6qOpALw": {
getter: function (varBag, idService) {
return varBag.model.variables.dateRangesVar;
}
},
"KZ4LfW8DJkGm8EI201jg0Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"v1AyZM00xkWen7qbdZXSJw": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_IsLoadedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"UkNmTgjZZkWx31Au8mbrQA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_ShowSubscriptionVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1d5GA1Y8_Uijru5xspVfwg": {
getter: function (varBag, idService) {
return varBag.model.variables.breakpointsVar;
}
},
"vVYeaq3OsU6oJ6e6aI7Crg": {
getter: function (varBag, idService) {
return varBag.model.variables.currentBreakpointVar;
}
},
"3I8zIUzJWEqOBTW_yWunhg": {
getter: function (varBag, idService) {
return varBag.model.variables.eventListenerVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Y5sCe07M0kGTBxScbOM1Vw": {
getter: function (varBag, idService) {
return varBag.model.variables.eventListenerTargetVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"VORFzVLygEqMkA9M8AHOuw": {
getter: function (varBag, idService) {
return varBag.model.variables.isHeaderScrolledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"y6OqMg+JOkmw7fWmw3hm5w": {
getter: function (varBag, idService) {
return varBag.model.variables.shareableUpdateItemVar;
}
},
"XMPyLI5v8Ua4JbBpHKcU4g": {
getter: function (varBag, idService) {
return varBag.model.variables.isShareOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OptFQaVLHEez1gxVW6jyTg": {
getter: function (varBag, idService) {
return varBag.model.variables.shareableObjectIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IfYqTX58d0mSEoLerNLNLw": {
getter: function (varBag, idService) {
return varBag.model.variables.isToggleSearchVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QgfRFWq1_EKlwJ8OMH4H6w": {
getter: function (varBag, idService) {
return varBag.model.variables.focusedScrollAnchorIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"N_5BsSJJV0WXmT5Dax7Qmg": {
getter: function (varBag, idService) {
return varBag.model.variables.currentSearchStringVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7x+nHabY9kqS_ETyxeyD3g": {
getter: function (varBag, idService) {
return varBag.model.variables.fetchUpdatesDataAct;
}
},
"a_sI0m8H3UaRYTtYV3DvaA": {
getter: function (varBag, idService) {
return varBag.model.variables.getDateRangesDataAct;
}
},
"BmA7L1NMJUC3Bb37ll3dWQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"MefYh9zp6EK8kIcvRCrNRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsSearchToggled_Input"));
})(varBag.model, idService);
}
},
"ahmlZHLp3US3CbsjH2w8MQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsHeaderScrolled_Search"));
})(varBag.model, idService);
}
},
"ZLMF9BQ2gkCmrRgY2BE_JQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"g0W8nyXCFUa7pXAf0DWiDw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Search_PostScroll"));
})(varBag.model, idService);
}
},
"MW5aa1dV2Ui2JXjGqJ4oww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"WDjc6_Bz4U67he_yl1HWAw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsHeaderScrolled_Icons"));
})(varBag.model, idService);
}
},
"xwfkJpi0z0qKvk6YV5EaTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsSearchToggled_Icon"));
})(varBag.model, idService);
}
},
"gNO9M1DKU0S7o9ay_FDwnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon_Search"));
})(varBag.model, idService);
}
},
"4jvWnFbutECWP_0ZzV6UyQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon_FilterSheet_PostScroll"));
})(varBag.model, idService);
}
},
"X8sibV1eOkupV0Iah8Vlrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input"));
})(varBag.model, idService);
}
},
"j5OiQhuDG0a3D7OxmJy24g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Search_PreScroll"));
})(varBag.model, idService);
}
},
"iZnOxw3P4UKNK_RMyKCNsA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
})(varBag.model, idService);
}
},
"ur7kypQ5ckev3aqf+Iqq1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon_FilterSheet_PreScroll"));
})(varBag.model, idService);
}
},
"2K7gpU+Ea0+uEieN9vVeIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"NPdkryxmlk+9s84Y242KMg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"7D1g33XNIkSGj8BKP4Ec4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ListHeader"));
})(varBag.model, idService);
}
},
"4iXeY7TXG0SzBXMVjE5BRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ra45ZbXSuka1cyHAxDPaPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasNoUpdates"));
})(varBag.model, idService);
}
},
"6dG9Gka6EUGGLGIISQDTaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_Updates"));
})(varBag.model, idService);
}
},
"fJaO9oNr0E2tsaJToUtGYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"oM4G6pL2q0ueIxsXw1_F0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("UpdateItem"));
})(varBag.model, idService);
}
},
"3gMLDm7Vn0ad1wBuTIxCzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"wXK51GHJ_Ea+qkRk4_8Bew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"79KZPWADXUSA9g0x+ZwIOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
})(varBag.model, idService);
}
},
"RgxNelbh4U+hD7AHUmY2Hw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_ShareSheet"));
})(varBag.model, idService);
}
},
"HrosLFkiQ0aVkOlNmwk7hg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ShareableObject"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
