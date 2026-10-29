define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "UBTConnectLibrary.model", "Connect_Search_CS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "MemoryClientCache.model", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$model", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$model", "UBTConnect_Utils.CW_Common.Button.mvc$model", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "UBTConnect_Utils.controller$ShareSheet_IsSharing", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$SelectableSearchResultListList", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth$Connect_Search_CS", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.model$SearchResultList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$ExternalShare", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.model$SelectableSearchResultListRec", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, UBTConnectLibraryModel, Connect_Search_CSModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, MemoryClientCacheModel, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_Section_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel, UBTConnect_Utils_CW_Search_SearchResult_Item_mvcModel, UBTConnect_Utils_CW_Common_Button_mvcModel, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel) {
    var OS = OutSystems.Internal;

    var GetAvailableMembersDataActRec = (function(_super) {
        __extends(GetAvailableMembersDataActRec, _super);

        function GetAvailableMembersDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetAvailableMembersDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_SearchResultItemList", "out_SearchResultItemListOut", "Out_SearchResultItemList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SearchResultList());
                }, true, UBTConnect_UtilsModel.SearchResultList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetAvailableMembersDataActRec.fromStructure = function(str) {
            return new GetAvailableMembersDataActRec(new GetAvailableMembersDataActRec.RecordClass({
                out_SearchResultItemListOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetAvailableMembersDataActRec.init();
        return GetAvailableMembersDataActRec;
    })(OS.Model.DataSourceRecord);
    var GetRecentlySharedDataActRec = (function(_super) {
        __extends(GetRecentlySharedDataActRec, _super);

        function GetRecentlySharedDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetRecentlySharedDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_SearchResultItemList", "out_SearchResultItemListOut", "Out_SearchResultItemList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SearchResultList());
                }, true, UBTConnect_UtilsModel.SearchResultList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetRecentlySharedDataActRec.fromStructure = function(str) {
            return new GetRecentlySharedDataActRec(new GetRecentlySharedDataActRec.RecordClass({
                out_SearchResultItemListOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetRecentlySharedDataActRec.init();
        return GetRecentlySharedDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("BottomSheetId", "bottomSheetIdVar", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SearchTerm", "searchTermVar", "SearchTerm", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("IsSearching", "isSearchingVar", "IsSearching", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsOpen", "isOpenVar", "IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SearchResultItemList", "searchResultItemListVar", "SearchResultItemList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList());
                }, false, UBTConnect_UtilsModel.SelectableSearchResultListList),
                this.attr("Skeleton_SearchResultItemList", "skeleton_SearchResultItemListVar", "Skeleton_SearchResultItemList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList());
                }, false, UBTConnect_UtilsModel.SelectableSearchResultListList),
                this.attr("SelectedMembers", "selectedMembersVar", "SelectedMembers", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList());
                }, false, UBTConnect_UtilsModel.SelectableSearchResultListList),
                this.attr("IsSubmitting", "isSubmittingVar", "IsSubmitting", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SearchPromt", "searchPromtVar", "SearchPromt", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "Search";
                }, false),
                this.attr("HasNativeShare", "hasNativeShareVar", "HasNativeShare", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ExternalShareOptions", "externalShareOptionsVar", "ExternalShareOptions", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList());
                }, false, UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList),
                this.attr("ShareId", "shareIdVar", "ShareId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("CurrentExternalShareIdOption", "currentExternalShareIdOptionVar", "CurrentExternalShareIdOption", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SharingRecentMemberId", "sharingRecentMemberIdVar", "SharingRecentMemberId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("RecentlyShared", "recentlySharedVar", "RecentlyShared", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListList());
                }, false, UBTConnect_UtilsModel.SelectableSearchResultListList),
                this.attr("RecentlySharedLabel", "recentlySharedLabelVar", "RecentlySharedLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "Recently Shared";
                }, false),
                this.attr("IsSearchStep", "isSearchStepVar", "IsSearchStep", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("AvatarImageSize_HorizontalList", "avatarImageSize_HorizontalListVar", "AvatarImageSize_HorizontalList", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.small_40;
                }, false),
                this.attr("AvatarImageSize_VerticalList", "avatarImageSize_VerticalListVar", "AvatarImageSize_VerticalList", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.base_52;
                }, false),
                this.attr("AvatarSize_HorizontalList", "avatarSize_HorizontalListVar", "AvatarSize_HorizontalList", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize.small_40;
                }, false),
                this.attr("In_IsOpen", "in_IsOpenIn", "In_IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsOpenInDataFetchStatus", "_in_IsOpenInDataFetchStatus", "_in_IsOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ShareObjectTypeId", "in_ShareObjectTypeIdIn", "In_ShareObjectTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ShareObjectTypeIdInDataFetchStatus", "_in_ShareObjectTypeIdInDataFetchStatus", "_in_ShareObjectTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ShareableObjectId", "in_ShareableObjectIdIn", "In_ShareableObjectId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ShareableObjectIdInDataFetchStatus", "_in_ShareableObjectIdInDataFetchStatus", "_in_ShareableObjectIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsLegacy", "in_IsLegacyIn", "In_IsLegacy", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsLegacyInDataFetchStatus", "_in_IsLegacyInDataFetchStatus", "_in_IsLegacyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_UpdateType", "in_UpdateTypeIn", "In_UpdateType", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_UpdateTypeInDataFetchStatus", "_in_UpdateTypeInDataFetchStatus", "_in_UpdateTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_UpdateDate", "in_UpdateDateIn", "In_UpdateDate", true, false, OS.DataTypes.DataTypes.Date, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("_in_UpdateDateInDataFetchStatus", "_in_UpdateDateInDataFetchStatus", "_in_UpdateDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetAvailableMembers", "getAvailableMembersDataAct", "getAvailableMembersDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetAvailableMembersDataActRec());
                }, true, GetAvailableMembersDataActRec),
                this.attr("GetRecentlyShared", "getRecentlySharedDataAct", "getRecentlySharedDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetRecentlySharedDataActRec());
                }, true, GetRecentlySharedDataActRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.init();
        return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function(_super) {
        __extends(WidgetsRecord, _super);

        function WidgetsRecord() {
            _super.apply(this, arguments);
        }
        WidgetsRecord.getWidgetsType = function() {
            return {};
        };

        return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function(_super) {
        __extends(Model, _super);

        function Model() {
            _super.apply(this, arguments);
        }
        Model.getVariablesRecordConstructor = function() {
            return VariablesRecord;
        };
        Model.getWidgetsRecordConstructor = function() {
            return WidgetsRecord;
        };
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = ((((((((((((UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_Section_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Search_SearchResult_Item_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Common_Button_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_IsOpen" in inputs) {
                this.variables.in_IsOpenIn = inputs.In_IsOpen;
                if ("_in_IsOpenInDataFetchStatus" in inputs) {
                    this.variables._in_IsOpenInDataFetchStatus = inputs._in_IsOpenInDataFetchStatus;
                }

            }

            if ("In_ShareObjectTypeId" in inputs) {
                this.variables.in_ShareObjectTypeIdIn = inputs.In_ShareObjectTypeId;
                if ("_in_ShareObjectTypeIdInDataFetchStatus" in inputs) {
                    this.variables._in_ShareObjectTypeIdInDataFetchStatus = inputs._in_ShareObjectTypeIdInDataFetchStatus;
                }

            }

            if ("In_ShareableObjectId" in inputs) {
                this.variables.in_ShareableObjectIdIn = inputs.In_ShareableObjectId;
                if ("_in_ShareableObjectIdInDataFetchStatus" in inputs) {
                    this.variables._in_ShareableObjectIdInDataFetchStatus = inputs._in_ShareableObjectIdInDataFetchStatus;
                }

            }

            if ("In_IsLegacy" in inputs) {
                this.variables.in_IsLegacyIn = inputs.In_IsLegacy;
                if ("_in_IsLegacyInDataFetchStatus" in inputs) {
                    this.variables._in_IsLegacyInDataFetchStatus = inputs._in_IsLegacyInDataFetchStatus;
                }

            }

            if ("In_UpdateType" in inputs) {
                this.variables.in_UpdateTypeIn = inputs.In_UpdateType;
                if ("_in_UpdateTypeInDataFetchStatus" in inputs) {
                    this.variables._in_UpdateTypeInDataFetchStatus = inputs._in_UpdateTypeInDataFetchStatus;
                }

            }

            if ("In_UpdateDate" in inputs) {
                this.variables.in_UpdateDateIn = inputs.In_UpdateDate;
                if ("_in_UpdateDateInDataFetchStatus" in inputs) {
                    this.variables._in_UpdateDateInDataFetchStatus = inputs._in_UpdateDateInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_Share.ShareSheet");
});
define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "UBTConnectLibrary.model", "Connect_Search_CS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "MemoryClientCache.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$view", "UBTConnect_Utils.CW_Search.SearchResult_Item.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "UBTConnect_Utils.controller$ShareSheet_IsSharing", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$SelectableSearchResultListList", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth$Connect_Search_CS", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.model$SearchResultList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$ExternalShare", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.model$SelectableSearchResultListRec", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, UBTConnectLibraryModel, Connect_Search_CSModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, MemoryClientCacheModel, React, OSView, UBTConnect_Utils_CW_Share_ShareSheet_mvc_model, UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_Section_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function(_super) {
        __extends(View, _super);

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
        View.displayName = "CW_Share.ShareSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_Section_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Share_ShareSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isOpenVar, false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
                    inputs: {
                        ExtendedClasses: model.getCachedValue(idService.getId("BottomSheet.ExtendedClasses"), function() {
                            return (("connect-share-sheet background-neutral-2 ubt-bottom-sheet--dynamic-height" + ((model.variables.isSearchStepVar) ? (" ubt-bottom-sheet--full-height") : (""))) + ((model.variables.in_IsLegacyIn) ? (" connect-share-sheet--legacy") : ("")));
                        }, function() {
                            return model.variables.isSearchStepVar;
                        }, function() {
                            return model.variables.in_IsLegacyIn;
                        }),
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLegacyInDataFetchStatus),
                        IsNotInertWhenClosed: true,
                        FooterHeight: model.getCachedValue(idService.getId("BottomSheet.FooterHeight"), function() {
                            return ((model.variables.isSearchingVar) ? ("0px") : ("auto"));
                        }, function() {
                            return model.variables.isSearchingVar;
                        }),
                        ShowHeader: true,
                        Title: ("Share " + model.variables.in_ShareObjectTypeIdIn),
                        _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareObjectTypeIdInDataFetchStatus),
                        Content_BackgroundColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral2,
                        ShowBackButton: model.variables.isSearchStepVar,
                        Content_Padding: model.getCachedValue(idService.getId("BottomSheet.Content_Padding"), function() {
                            return function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.none;
                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.none;
                                return rec;
                            }();
                        }),
                        In_TouchActionNoneFix: true
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        initialized$Action: function(idIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
                                controller.handler_BottomSheetInitialized$Action(idIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        onClose$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnClose");
                                    return controller.action_ResetAndCloseSheetState$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onToggle$Action: function(isOpenIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnToggle");
                                    return controller.handler_BottomSheetOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onBack$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnBack");
                                    return controller.handler_OnBack$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        }
                    },
                    _validationProps: {
                        validationService: validationService
                    },
                    _idProps: {
                        service: idService,
                        name: "BottomSheet",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new PlaceholderContent(function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("F1POv27WEEKI4ieBxgnfqg.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0;
                                                return rec;
                                            }();
                                            rec.paddingSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.verticalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                                return rec;
                                            }();
                                            rec.marginSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                return rec;
                                            }();
                                            rec.borderOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                rec.radiusAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                    rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Shape.medium;
                                                    return rec;
                                                }();
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                    })
                                },
                                events: {
                                    _handleError: function(ex) {
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
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: model.getCachedValue(idService.getId("4QDZ+SskK0eumBt9jFoovw.Style"), function() {
                                                return ("connect-share-sheet__results text-align-left connect-share-sheet__content " + ((OutSystemsDebugger.handleFunctionCall(function() {
                                                    return UBTConnect_UtilsController.default.shareSheet_IsSharing$Action(model.variables.currentExternalShareIdOptionVar, model.variables.sharingRecentMemberIdVar, callContext).out_IsSharingOut;
                                                }, OS.DataTypes.DataTypes.Boolean, callContext.id)) ? ("connect-share-sheet__content--processing") : ("")));
                                            }, function() {
                                                return model.variables.currentExternalShareIdOptionVar;
                                            }, function() {
                                                return model.variables.sharingRecentMemberIdVar;
                                            }),
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, $if(!(model.variables.isSearchStepVar), false, this, function() {
                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                inputs: {
                                                    Options: model.getCachedValue(idService.getId("UATI3WFCeEi92fHnG5nV3Q.Options"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                            rec.paddingSizeAttr = function() {
                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                                                return rec;
                                                            }();
                                                            return rec;
                                                        }();
                                                    })
                                                },
                                                events: {
                                                    _handleError: function(ex) {
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
                                                placeholders: {
                                                    content: new PlaceholderContent(function() {
                                                        return [React.createElement(OSWidgets.Container, {
                                                            align: /*Default*/ 0,
                                                            animate: false,
                                                            style: "connect-share-sheet__content__first-step display-flex flex-direction-column gap-base",
                                                            visible: true,
                                                            _idProps: {
                                                                service: idService,
                                                                name: "FirstStep"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        }, React.createElement(OSWidgets.Container, {
                                                            align: /*Default*/ 0,
                                                            animate: false,
                                                            visible: true,
                                                            _idProps: {
                                                                service: idService,
                                                                name: "ShareableObject"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                            inputs: {
                                                                Options: model.getCachedValue(idService.getId("CyxibvLAo0m6kygoSkvQeQ.Options"), function() {
                                                                    return function() {
                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                        rec.paddingSizeAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                            rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                                            return rec;
                                                                        }();
                                                                        rec.borderOptionsAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                            rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral5;
                                                                            rec.sizeAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                                                return rec;
                                                                            }();
                                                                            rec.radiusAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                                                rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Shape.large;
                                                                                return rec;
                                                                            }();
                                                                            return rec;
                                                                        }();
                                                                        return rec;
                                                                    }();
                                                                })
                                                            },
                                                            events: {
                                                                _handleError: function(ex) {
                                                                    controller.handleError(ex);
                                                                }
                                                            },
                                                            _validationProps: {
                                                                validationService: validationService
                                                            },
                                                            _idProps: {
                                                                service: idService,
                                                                uuid: "6",
                                                                alias: "4"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            placeholders: {
                                                                content: new PlaceholderContent(function() {
                                                                    return [React.createElement(OSWidgets.Placeholder, {
                                                                        align: /*Default*/ 0,
                                                                        content: _this.props.placeholders.placeholder_ShareableObject,
                                                                        _idProps: {
                                                                            service: idService,
                                                                            name: "Placeholder_ShareableObject"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider
                                                                    })];
                                                                })
                                                            }
                                                        })), React.createElement(OSWidgets.Container, {
                                                            align: /*Default*/ 0,
                                                            animate: false,
                                                            style: "sticky absolute-top connect-share-sheet__search background-neutral-0",
                                                            visible: true,
                                                            _idProps: {
                                                                service: idService,
                                                                name: "DummySearchInput"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                            inputs: {
                                                                ExtendedClasses: "connect-share-sheet__search",
                                                                Options: model.getCachedValue(idService.getId("Block_EmptySearch.Options"), function() {
                                                                    return function() {
                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                        rec.backgroundAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                            rec.backgroundColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0;
                                                                            return rec;
                                                                        }();
                                                                        rec.textOptionsAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                            return rec;
                                                                        }();
                                                                        return rec;
                                                                    }();
                                                                })
                                                            },
                                                            events: {
                                                                _handleError: function(ex) {
                                                                    controller.handleError(ex);
                                                                }
                                                            },
                                                            _validationProps: {
                                                                validationService: validationService
                                                            },
                                                            _idProps: {
                                                                service: idService,
                                                                name: "Block_EmptySearch",
                                                                alias: "5"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            placeholders: {
                                                                content: new PlaceholderContent(function() {
                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
                                                                        inputs: {
                                                                            In_Options: model.getCachedValue(idService.getId("jdhEez2qAEK33W_fI_NIjQ.In_Options"), function() {
                                                                                return function() {
                                                                                    var rec = new UBTConnectLibraryModel.SearchInputRec();
                                                                                    rec.initalStringAttr = model.variables.searchTermVar;
                                                                                    rec.searchPromptAttr = model.variables.searchPromtVar;
                                                                                    rec.debounce_DelayMSAttr = 300;
                                                                                    rec.borderRadiusAttr = UBTConnect_UtilsModel.staticEntities.shape.rounded;
                                                                                    rec.focusOnReadyAttr = false;
                                                                                    return rec;
                                                                                }();
                                                                            }, function() {
                                                                                return model.variables.searchTermVar;
                                                                            }, function() {
                                                                                return model.variables.searchPromtVar;
                                                                            })
                                                                        },
                                                                        events: {
                                                                            _handleError: function(ex) {
                                                                                controller.handleError(ex);
                                                                            },
                                                                            event_OnFocus$Action: function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnFocus");
                                                                                    controller.handler_SearchOnFocus$Action(controller.callContext(eventHandlerContext));
                                                                                }, function() {
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
                                                                            uuid: "10",
                                                                            alias: "6"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        _dependencies: []
                                                                    })];
                                                                })
                                                            },
                                                            _dependencies: [asPrimitiveValue(model.variables.searchPromtVar), asPrimitiveValue(model.variables.searchTermVar)]
                                                        })), $if((model.variables.getRecentlySharedDataAct.isDataFetchedAttr && model.variables.getRecentlySharedDataAct.out_SearchResultItemListOut.isEmpty), false, this, function() {
                                                            return [];
                                                        }, function() {
                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                                                inputs: {
                                                                    In_IsLoading: !(model.variables.getRecentlySharedDataAct.isDataFetchedAttr)
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    }
                                                                },
                                                                _validationProps: {
                                                                    validationService: validationService
                                                                },
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "RecentlyShared_InitialStep",
                                                                    alias: "7"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    placeholder_LoadingSection: new PlaceholderContent(function() {
                                                                        return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_Section_mvc_view, {
                                                                            inputs: {},
                                                                            events: {
                                                                                _handleError: function(ex) {
                                                                                    controller.handleError(ex);
                                                                                }
                                                                            },
                                                                            _validationProps: {
                                                                                validationService: validationService
                                                                            },
                                                                            _idProps: {
                                                                                service: idService,
                                                                                name: "Section_RecentlyShared",
                                                                                alias: "8"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            placeholders: {
                                                                                placeholder_Title: new PlaceholderContent(function() {
                                                                                    return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, {
                                                                                        inputs: {
                                                                                            In_Label: model.variables.recentlySharedLabelVar,
                                                                                            In_FontSize: UBTConnect_UtilsModel.staticEntities.uBT_FontSize.doubleExtraSmall
                                                                                        },
                                                                                        events: {
                                                                                            _handleError: function(ex) {
                                                                                                controller.handleError(ex);
                                                                                            }
                                                                                        },
                                                                                        _validationProps: {
                                                                                            validationService: validationService
                                                                                        },
                                                                                        _idProps: {
                                                                                            service: idService,
                                                                                            uuid: "13",
                                                                                            alias: "9"
                                                                                        },
                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                        _dependencies: []
                                                                                    })];
                                                                                }),
                                                                                placeholder_Content: new PlaceholderContent(function() {
                                                                                    return [React.createElement(OSWidgets.Container, {
                                                                                        align: /*Default*/ 0,
                                                                                        animate: false,
                                                                                        style: "negative-margin-right-base",
                                                                                        visible: true,
                                                                                        _idProps: {
                                                                                            service: idService,
                                                                                            name: "Div_RecentlyShared"
                                                                                        },
                                                                                        _widgetRecordProvider: widgetsRecordProvider
                                                                                    }, React.createElement(OSWidgets.List, {
                                                                                        animateItems: true,
                                                                                        extendedProperties: {
                                                                                            "disable-virtualization": "True"
                                                                                        },
                                                                                        gridProperties: {
                                                                                            classes: "OSFillParent"
                                                                                        },
                                                                                        mode: /*Default*/ 0,
                                                                                        source: model.variables.recentlySharedVar,
                                                                                        style: "list list-group display-flex overflow-horizontal gap-base connect-share-sheet__horizontal-list",
                                                                                        tag: "div",
                                                                                        _idProps: {
                                                                                            service: idService,
                                                                                            uuid: "15"
                                                                                        },
                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                        placeholders: {
                                                                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, {
                                                                                                    inputs: {
                                                                                                        BorderColorId: model.getCachedValue(idService.getId("aYAWrNWHUkuMq7YUeqJ+dg.BorderColorId"), function() {
                                                                                                            return (((model.variables.sharingRecentMemberIdVar === model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr)) ? (UBTConnect_UtilsModel.staticEntities.uBT_Color.primary) : (UBTConnect_UtilsModel.staticEntities.uBT_Color.transparent));
                                                                                                        }, function() {
                                                                                                            return model.variables.sharingRecentMemberIdVar;
                                                                                                        }, function() {
                                                                                                            return model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr;
                                                                                                        }),
                                                                                                        ExtendedClasses: model.getCachedValue(idService.getId("aYAWrNWHUkuMq7YUeqJ+dg.ExtendedClasses"), function() {
                                                                                                            return ("lazy-image-middle " + (((model.variables.recentlySharedVar.getCurrentRowNumber(callContext.iterationContext) === (model.variables.recentlySharedVar.length - 1))) ? ("padding-right-base") : ("")));
                                                                                                        }, function() {
                                                                                                            return model.variables.recentlySharedVar.getCurrentRowNumber(callContext.iterationContext);
                                                                                                        }, function() {
                                                                                                            return model.variables.recentlySharedVar.length;
                                                                                                        }),
                                                                                                        SizeId: model.variables.avatarSize_HorizontalListVar,
                                                                                                        IsProcessing: (model.variables.sharingRecentMemberIdVar === model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr)
                                                                                                    },
                                                                                                    events: {
                                                                                                        _handleError: function(ex) {
                                                                                                            controller.handleError(ex);
                                                                                                        },
                                                                                                        onClick$Action: function() {
                                                                                                            return Promise.resolve().then(function() {
                                                                                                                var eventHandlerContext = callContext.clone();
                                                                                                                return OS.Flow.tryFinally(function() {
                                                                                                                    var varBag = {};
                                                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_WithLabel OnClick");
                                                                                                                    return controller.handler_OnClickRecentMember$Action(controller.callContext(eventHandlerContext));
                                                                                                                }, function() {
                                                                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                                                                });
                                                                                                            });;
                                                                                                        }
                                                                                                    },
                                                                                                    _validationProps: {
                                                                                                        validationService: validationService
                                                                                                    },
                                                                                                    _idProps: {
                                                                                                        service: idService,
                                                                                                        uuid: "16",
                                                                                                        alias: "10"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                    placeholders: {
                                                                                                        icon: new PlaceholderContent(function() {
                                                                                                            return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                                                                                inputs: {
                                                                                                                    EntityType: UBTConnect_UtilsModel.staticEntities.connect_Entity.member,
                                                                                                                    EntityId: model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr,
                                                                                                                    ImageSize: model.getCachedValue(idService.getId("2+DWjapYeE+fdhnBB5nprQ.ImageSize"), function() {
                                                                                                                        return function() {
                                                                                                                            var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                                                                            rec.heightAttr = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.square;
                                                                                                                            rec.widthAttr = model.variables.avatarImageSize_HorizontalListVar;
                                                                                                                            return rec;
                                                                                                                        }();
                                                                                                                    }, function() {
                                                                                                                        return model.variables.avatarImageSize_HorizontalListVar;
                                                                                                                    })
                                                                                                                },
                                                                                                                events: {
                                                                                                                    _handleError: function(ex) {
                                                                                                                        controller.handleError(ex);
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
                                                                                                            })];
                                                                                                        }),
                                                                                                        badge: PlaceholderContent.Empty,
                                                                                                        text: new PlaceholderContent(function() {
                                                                                                            return [React.createElement(OSWidgets.Expression, {
                                                                                                                value: model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.nameAttr,
                                                                                                                _idProps: {
                                                                                                                    service: idService,
                                                                                                                    uuid: "18"
                                                                                                                },
                                                                                                                _widgetRecordProvider: widgetsRecordProvider
                                                                                                            })];
                                                                                                        })
                                                                                                    },
                                                                                                    _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar), asPrimitiveValue(model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.nameAttr), asPrimitiveValue(model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr)]
                                                                                                })];
                                                                                            }, callContext, idService, "1")
                                                                                        },
                                                                                        _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar), asPrimitiveValue(model.variables.avatarSize_HorizontalListVar), asPrimitiveValue(model.variables.sharingRecentMemberIdVar)]
                                                                                    }))];
                                                                                })
                                                                            },
                                                                            _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar), asPrimitiveValue(model.variables.avatarSize_HorizontalListVar), asPrimitiveValue(model.variables.sharingRecentMemberIdVar), asPrimitiveValue(model.variables.recentlySharedVar), asPrimitiveValue(model.variables.recentlySharedLabelVar)]
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar), asPrimitiveValue(model.variables.avatarSize_HorizontalListVar), asPrimitiveValue(model.variables.sharingRecentMemberIdVar), asPrimitiveValue(model.variables.recentlySharedVar), asPrimitiveValue(model.variables.recentlySharedLabelVar)]
                                                            })];
                                                        }), $if(OutSystemsDebugger.handleFunctionCall(function() {
                                                            return UBT_AppManagerController.default.appManager_GetIsNative$Action(callContext).isNativeOut;
                                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                                            return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_Section_mvc_view, {
                                                                inputs: {
                                                                    In_HideBorder: true
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    }
                                                                },
                                                                _validationProps: {
                                                                    validationService: validationService
                                                                },
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Section_ExternalShare",
                                                                    alias: "12"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    placeholder_Title: new PlaceholderContent(function() {
                                                                        return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, {
                                                                            inputs: {
                                                                                In_Label: "Shared To"
                                                                            },
                                                                            events: {
                                                                                _handleError: function(ex) {
                                                                                    controller.handleError(ex);
                                                                                }
                                                                            },
                                                                            _validationProps: {
                                                                                validationService: validationService
                                                                            },
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "20",
                                                                                alias: "13"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        })];
                                                                    }),
                                                                    placeholder_Content: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Container, {
                                                                            align: /*Default*/ 0,
                                                                            animate: false,
                                                                            visible: true,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                name: "Div_ShareTo"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        }, React.createElement(OSWidgets.List, {
                                                                            animateItems: true,
                                                                            extendedProperties: {
                                                                                "disable-virtualization": "True"
                                                                            },
                                                                            gridProperties: {
                                                                                classes: "OSFillParent"
                                                                            },
                                                                            mode: /*Default*/ 0,
                                                                            source: model.variables.externalShareOptionsVar,
                                                                            style: "list list-group display-flex overflow-horizontal gap-base justify-content-flex-start",
                                                                            tag: "div",
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "22"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            placeholders: {
                                                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, {
                                                                                        inputs: {
                                                                                            IsProcessing: (model.variables.currentExternalShareIdOptionVar === model.variables.externalShareOptionsVar.getCurrent(callContext.iterationContext).externalShareOptionIdAttr),
                                                                                            BorderColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.primary,
                                                                                            SizeId: UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize.smallBase_48
                                                                                        },
                                                                                        events: {
                                                                                            _handleError: function(ex) {
                                                                                                controller.handleError(ex);
                                                                                            },
                                                                                            onClick$Action: function() {
                                                                                                return Promise.resolve().then(function() {
                                                                                                    var eventHandlerContext = callContext.clone();
                                                                                                    return OS.Flow.tryFinally(function() {
                                                                                                        var varBag = {};
                                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_WithLabel OnClick");
                                                                                                        return controller.handler_OnClickExternalOption$Action(controller.callContext(eventHandlerContext));
                                                                                                    }, function() {
                                                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                                                    });
                                                                                                });;
                                                                                            }
                                                                                        },
                                                                                        _validationProps: {
                                                                                            validationService: validationService
                                                                                        },
                                                                                        _idProps: {
                                                                                            service: idService,
                                                                                            uuid: "23",
                                                                                            alias: "14"
                                                                                        },
                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                        placeholders: {
                                                                                            icon: new PlaceholderContent(function() {
                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                    inputs: {
                                                                                                        In_IconId: model.variables.externalShareOptionsVar.getCurrent(callContext.iterationContext).iconIdAttr,
                                                                                                        In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.base_24,
                                                                                                        In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.primary
                                                                                                    },
                                                                                                    events: {
                                                                                                        _handleError: function(ex) {
                                                                                                            controller.handleError(ex);
                                                                                                        }
                                                                                                    },
                                                                                                    _validationProps: {
                                                                                                        validationService: validationService
                                                                                                    },
                                                                                                    _idProps: {
                                                                                                        service: idService,
                                                                                                        uuid: "24",
                                                                                                        alias: "15"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                    _dependencies: []
                                                                                                })];
                                                                                            }),
                                                                                            badge: PlaceholderContent.Empty,
                                                                                            text: new PlaceholderContent(function() {
                                                                                                return [React.createElement(OSWidgets.Expression, {
                                                                                                    value: model.variables.externalShareOptionsVar.getCurrent(callContext.iterationContext).labelAttr,
                                                                                                    _idProps: {
                                                                                                        service: idService,
                                                                                                        uuid: "25"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                                                })];
                                                                                            })
                                                                                        },
                                                                                        _dependencies: [asPrimitiveValue(model.variables.externalShareOptionsVar.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.externalShareOptionsVar.getCurrent(callContext.iterationContext).iconIdAttr)]
                                                                                    })];
                                                                                }, callContext, idService, "2")
                                                                            },
                                                                            _dependencies: [asPrimitiveValue(model.variables.currentExternalShareIdOptionVar)]
                                                                        }))];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.currentExternalShareIdOptionVar), asPrimitiveValue(model.variables.externalShareOptionsVar)]
                                                            })];
                                                        }, function() {
                                                            return [];
                                                        }))];
                                                    })
                                                }
                                            })];
                                        }, function() {
                                            return [];
                                        }), $if(model.variables.isSearchStepVar, false, this, function() {
                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                inputs: {
                                                    Options: model.getCachedValue(idService.getId("e2oxE3kP70ex0KG7Ouv4cQ.Options"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                            rec.paddingSizeAttr = function() {
                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                                return rec;
                                                            }();
                                                            rec.displayOptionsAttr = function() {
                                                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                rec.displayAttr = UBTConnect_UtilsModel.staticEntities.uBT_Display.flex;
                                                                rec.flexDirectionAttr = UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection.column;
                                                                return rec;
                                                            }();
                                                            return rec;
                                                        }();
                                                    }),
                                                    ExtendedClasses: "gap-sb flex-1"
                                                },
                                                events: {
                                                    _handleError: function(ex) {
                                                        controller.handleError(ex);
                                                    }
                                                },
                                                _validationProps: {
                                                    validationService: validationService
                                                },
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "26",
                                                    alias: "16"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                placeholders: {
                                                    content: new PlaceholderContent(function() {
                                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
                                                            inputs: {
                                                                In_Options: model.getCachedValue(idService.getId("SearchInput.In_Options"), function() {
                                                                    return function() {
                                                                        var rec = new UBTConnectLibraryModel.SearchInputRec();
                                                                        rec.searchPromptAttr = model.variables.searchPromtVar;
                                                                        rec.debounce_DelayMSAttr = 300;
                                                                        rec.borderRadiusAttr = UBTConnect_UtilsModel.staticEntities.shape.rounded;
                                                                        rec.focusOnReadyAttr = true;
                                                                        return rec;
                                                                    }();
                                                                }, function() {
                                                                    return model.variables.searchPromtVar;
                                                                })
                                                            },
                                                            events: {
                                                                _handleError: function(ex) {
                                                                    controller.handleError(ex);
                                                                },
                                                                event_ClearString$Action: function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
                                                                        controller.handler_InputEventClearString$Action(controller.callContext(eventHandlerContext));
                                                                    }, function() {
                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                    });

                                                                    ;
                                                                },
                                                                event_OnFocus$Action: function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnFocus");
                                                                        controller.handler_SearchOnFocus$Action(controller.callContext(eventHandlerContext));
                                                                    }, function() {
                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                    });

                                                                    ;
                                                                },
                                                                event_Submit$Action: function(event_SubmittedStringIn) {
                                                                    return Promise.resolve().then(function() {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
                                                                            return controller.handler_InputEventSubmit$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
                                                                        }, function() {
                                                                            controller.popDebuggerContext(eventHandlerContext);
                                                                        });
                                                                    });;
                                                                }
                                                            },
                                                            _validationProps: {
                                                                validationService: validationService
                                                            },
                                                            _idProps: {
                                                                service: idService,
                                                                name: "SearchInput",
                                                                alias: "17"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            _dependencies: []
                                                        }), $if(!(model.variables.selectedMembersVar.isEmpty), false, this, function() {
                                                            return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_Section_mvc_view, {
                                                                inputs: {},
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    }
                                                                },
                                                                _validationProps: {
                                                                    validationService: validationService
                                                                },
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "SelectedMembersList",
                                                                    alias: "18"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    placeholder_Title: new PlaceholderContent(function() {
                                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                            inputs: {
                                                                                Options: model.getCachedValue(idService.getId("chBue3vYsUqYoY1u66B6gQ.Options"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                        rec.paddingSizeAttr = function() {
                                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                            rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                                                            return rec;
                                                                                        }();
                                                                                        return rec;
                                                                                    }();
                                                                                })
                                                                            },
                                                                            events: {
                                                                                _handleError: function(ex) {
                                                                                    controller.handleError(ex);
                                                                                }
                                                                            },
                                                                            _validationProps: {
                                                                                validationService: validationService
                                                                            },
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "29",
                                                                                alias: "19"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            placeholders: {
                                                                                content: new PlaceholderContent(function() {
                                                                                    return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, {
                                                                                        inputs: {
                                                                                            In_FontSize: UBTConnect_UtilsModel.staticEntities.uBT_FontSize.doubleExtraSmall,
                                                                                            In_Label: model.getCachedValue(idService.getId("I532_VZhIkSo_nHHEmyXVQ.In_Label"), function() {
                                                                                                return ((((model.variables.selectedMembersVar.length).toString() + " ") + (((model.variables.selectedMembersVar.length === 1)) ? ("person") : ("people"))) + " selected");
                                                                                            }, function() {
                                                                                                return model.variables.selectedMembersVar.length;
                                                                                            })
                                                                                        },
                                                                                        events: {
                                                                                            _handleError: function(ex) {
                                                                                                controller.handleError(ex);
                                                                                            }
                                                                                        },
                                                                                        _validationProps: {
                                                                                            validationService: validationService
                                                                                        },
                                                                                        _idProps: {
                                                                                            service: idService,
                                                                                            uuid: "30",
                                                                                            alias: "20"
                                                                                        },
                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                        _dependencies: []
                                                                                    })];
                                                                                })
                                                                            },
                                                                            _dependencies: [asPrimitiveValue(model.variables.selectedMembersVar.length)]
                                                                        })];
                                                                    }),
                                                                    placeholder_Content: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Container, {
                                                                            align: /*Default*/ 0,
                                                                            animate: false,
                                                                            style: "negative-margin-right-s",
                                                                            visible: true,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                name: "Div_SelectedMembers"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        }, React.createElement(OSWidgets.List, {
                                                                            animateItems: true,
                                                                            extendedProperties: {
                                                                                "disable-virtualization": "True"
                                                                            },
                                                                            gridProperties: {
                                                                                classes: "OSFillParent"
                                                                            },
                                                                            mode: /*Default*/ 0,
                                                                            source: model.variables.selectedMembersVar,
                                                                            style: "list list-group display-flex overflow-horizontal gap-base connect-share-sheet__horizontal-list",
                                                                            tag: "div",
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "32"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            placeholders: {
                                                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, {
                                                                                        inputs: {
                                                                                            ExtendedClasses: model.getCachedValue(idService.getId("NafsXva_EkOaIjL+jSvLBg.ExtendedClasses"), function() {
                                                                                                return ("lazy-image-middle " + (((model.variables.selectedMembersVar.getCurrentRowNumber(callContext.iterationContext) === (model.variables.selectedMembersVar.length - 1))) ? ("padding-right-base") : ("")));
                                                                                            }, function() {
                                                                                                return model.variables.selectedMembersVar.getCurrentRowNumber(callContext.iterationContext);
                                                                                            }, function() {
                                                                                                return model.variables.selectedMembersVar.length;
                                                                                            }),
                                                                                            BorderColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.primary,
                                                                                            SizeId: UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize.smallBase_48,
                                                                                            IsProcessing: false
                                                                                        },
                                                                                        events: {
                                                                                            _handleError: function(ex) {
                                                                                                controller.handleError(ex);
                                                                                            },
                                                                                            onClick$Action: function() {
                                                                                                var eventHandlerContext = callContext.clone();
                                                                                                return OS.Flow.tryFinally(function() {
                                                                                                    var varBag = {};
                                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_WithLabel OnClick");
                                                                                                    controller.handler_SelectedListItemOnClick$Action(controller.callContext(eventHandlerContext));
                                                                                                }, function() {
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
                                                                                            uuid: "33",
                                                                                            alias: "21"
                                                                                        },
                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                        placeholders: {
                                                                                            icon: new PlaceholderContent(function() {
                                                                                                return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                                                                    inputs: {
                                                                                                        EntityType: UBTConnect_UtilsModel.staticEntities.connect_Entity.member,
                                                                                                        ImageSize: model.getCachedValue(idService.getId("Yff7b4xnHU6M2FHnB1xlgA.ImageSize"), function() {
                                                                                                            return function() {
                                                                                                                var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                                                                rec.heightAttr = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.square;
                                                                                                                rec.widthAttr = model.variables.avatarImageSize_HorizontalListVar;
                                                                                                                return rec;
                                                                                                            }();
                                                                                                        }, function() {
                                                                                                            return model.variables.avatarImageSize_HorizontalListVar;
                                                                                                        }),
                                                                                                        EntityId: model.variables.selectedMembersVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr
                                                                                                    },
                                                                                                    events: {
                                                                                                        _handleError: function(ex) {
                                                                                                            controller.handleError(ex);
                                                                                                        }
                                                                                                    },
                                                                                                    _validationProps: {
                                                                                                        validationService: validationService
                                                                                                    },
                                                                                                    _idProps: {
                                                                                                        service: idService,
                                                                                                        uuid: "34",
                                                                                                        alias: "22"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                    _dependencies: []
                                                                                                })];
                                                                                            }),
                                                                                            badge: new PlaceholderContent(function() {
                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                    inputs: {
                                                                                                        In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.primary,
                                                                                                        In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.removeFill,
                                                                                                        In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.small_12
                                                                                                    },
                                                                                                    events: {
                                                                                                        _handleError: function(ex) {
                                                                                                            controller.handleError(ex);
                                                                                                        }
                                                                                                    },
                                                                                                    _validationProps: {
                                                                                                        validationService: validationService
                                                                                                    },
                                                                                                    _idProps: {
                                                                                                        service: idService,
                                                                                                        uuid: "35",
                                                                                                        alias: "23"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                    _dependencies: []
                                                                                                })];
                                                                                            }),
                                                                                            text: new PlaceholderContent(function() {
                                                                                                return [React.createElement(OSWidgets.Expression, {
                                                                                                    style: "text-primary",
                                                                                                    value: model.variables.selectedMembersVar.getCurrent(callContext.iterationContext).searchResultAttr.nameAttr,
                                                                                                    _idProps: {
                                                                                                        service: idService,
                                                                                                        uuid: "36"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                                                })];
                                                                                            })
                                                                                        },
                                                                                        _dependencies: [asPrimitiveValue(model.variables.selectedMembersVar.getCurrent(callContext.iterationContext).searchResultAttr.nameAttr), asPrimitiveValue(model.variables.selectedMembersVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr), asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar)]
                                                                                    })];
                                                                                }, callContext, idService, "3")
                                                                            },
                                                                            _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar)]
                                                                        }))];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar), asPrimitiveValue(model.variables.selectedMembersVar)]
                                                            })];
                                                        }, function() {
                                                            return [];
                                                        }), React.createElement(OSWidgets.Container, {
                                                            align: /*Default*/ 0,
                                                            animate: false,
                                                            style: "connect-share-sheet__content__search-list padding-top-xs negative-margin-bottom-base",
                                                            visible: true,
                                                            _idProps: {
                                                                service: idService,
                                                                name: "Div_SearchList"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        }, $if((model.variables.searchResultItemListVar.isEmpty && (model.variables.isSearchingVar && model.variables.getAvailableMembersDataAct.isDataFetchedAttr)), false, this, function() {
                                                            return [React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: true,
                                                                visible: model.variables.isSearchingVar,
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Div_EmptySearchResults"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, React.createElement(UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, {
                                                                inputs: {
                                                                    IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.search
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    }
                                                                },
                                                                _validationProps: {
                                                                    validationService: validationService
                                                                },
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "39",
                                                                    alias: "24"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    titlePlaceholder: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Expression, {
                                                                            value: (("No results found for \'" + model.variables.searchTermVar) + "\'"),
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "40"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        })];
                                                                    }),
                                                                    textPlaceholder: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Expression, {
                                                                            value: "Sorry, we couldn’t find any results for your search. Please check your spelling or try different keywords.",
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "41"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.searchTermVar)]
                                                            }))];
                                                        }, function() {
                                                            return [$if(((model.variables.searchResultItemListVar.isEmpty && model.variables.getRecentlySharedDataAct.isDataFetchedAttr) && !(model.variables.isSearchingVar)), false, this, function() {
                                                                return [];
                                                            }, function() {
                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                                                    inputs: {
                                                                        In_IsLoading: ((model.variables.isSearchingVar && !(model.variables.getAvailableMembersDataAct.isDataFetchedAttr)) || (!(model.variables.isSearchingVar) && !(model.variables.getRecentlySharedDataAct.isDataFetchedAttr)))
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        }
                                                                    },
                                                                    _validationProps: {
                                                                        validationService: validationService
                                                                    },
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "42",
                                                                        alias: "25"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    placeholders: {
                                                                        placeholder_LoadingSection: new PlaceholderContent(function() {
                                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                inputs: {
                                                                                    Options: model.getCachedValue(idService.getId("seArrRm3IE+7Q0gABMCEpQ.Options"), function() {
                                                                                        return function() {
                                                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                            rec.paddingSizeAttr = function() {
                                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                rec.horizontalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                                                                return rec;
                                                                                            }();
                                                                                            return rec;
                                                                                        }();
                                                                                    })
                                                                                },
                                                                                events: {
                                                                                    _handleError: function(ex) {
                                                                                        controller.handleError(ex);
                                                                                    }
                                                                                },
                                                                                _validationProps: {
                                                                                    validationService: validationService
                                                                                },
                                                                                _idProps: {
                                                                                    service: idService,
                                                                                    uuid: "43",
                                                                                    alias: "26"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                placeholders: {
                                                                                    content: new PlaceholderContent(function() {
                                                                                        return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_SectionTitle_mvc_view, {
                                                                                            inputs: {
                                                                                                In_Label: model.getCachedValue(idService.getId("SyT9n3kJckCe0DSKp8vCTw.In_Label"), function() {
                                                                                                    return ((model.variables.isSearchingVar) ? ("Results") : ("Recently shared"));
                                                                                                }, function() {
                                                                                                    return model.variables.isSearchingVar;
                                                                                                })
                                                                                            },
                                                                                            events: {
                                                                                                _handleError: function(ex) {
                                                                                                    controller.handleError(ex);
                                                                                                }
                                                                                            },
                                                                                            _validationProps: {
                                                                                                validationService: validationService
                                                                                            },
                                                                                            _idProps: {
                                                                                                service: idService,
                                                                                                uuid: "44",
                                                                                                alias: "27"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            _dependencies: []
                                                                                        })];
                                                                                    })
                                                                                },
                                                                                _dependencies: [asPrimitiveValue(model.variables.isSearchingVar)]
                                                                            }), React.createElement(OSWidgets.List, {
                                                                                animateItems: true,
                                                                                gridProperties: {
                                                                                    classes: "OSFillParent"
                                                                                },
                                                                                mode: /*Default*/ 0,
                                                                                source: model.variables.searchResultItemListVar,
                                                                                style: "list list-group padding-bottom-s connect-share-sheet__results",
                                                                                tag: "div",
                                                                                _idProps: {
                                                                                    service: idService,
                                                                                    uuid: "45"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                placeholders: {
                                                                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                        return [React.createElement(UBTConnect_Utils_CW_Search_SearchResult_Item_mvc_view, {
                                                                                            inputs: {
                                                                                                In_SearchTerm: model.variables.searchTermVar,
                                                                                                In_SearchResult: model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).searchResultAttr,
                                                                                                In_ShowSubscriptionWarning: model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).searchResultAttr.recordDisabledAttr,
                                                                                                In_LocationTopPadding: UBTConnect_UtilsModel.staticEntities.uBT_Size.none,
                                                                                                In_ImageHeightId: UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.square,
                                                                                                In_TitleFontSize: UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small,
                                                                                                In_ImageWidthId: model.variables.avatarImageSize_VerticalListVar
                                                                                            },
                                                                                            events: {
                                                                                                _handleError: function(ex) {
                                                                                                    controller.handleError(ex);
                                                                                                },
                                                                                                onClick$Action: function(searchResultIn) {
                                                                                                    var eventHandlerContext = callContext.clone();
                                                                                                    return OS.Flow.tryFinally(function() {
                                                                                                        var varBag = {};
                                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Search/SearchResult_Item OnClick");
                                                                                                        controller.handler_SearchResultItemOnClick$Action(controller.callContext(eventHandlerContext));
                                                                                                    }, function() {
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
                                                                                                uuid: "46",
                                                                                                alias: "28"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            placeholders: {
                                                                                                placeholder_Actions: new PlaceholderContent(function() {
                                                                                                    return [$if(model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).searchResultAttr.recordDisabledAttr, false, this, function() {
                                                                                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                            inputs: {
                                                                                                                In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7,
                                                                                                                In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.lock
                                                                                                            },
                                                                                                            events: {
                                                                                                                _handleError: function(ex) {
                                                                                                                    controller.handleError(ex);
                                                                                                                }
                                                                                                            },
                                                                                                            _validationProps: {
                                                                                                                validationService: validationService
                                                                                                            },
                                                                                                            _idProps: {
                                                                                                                service: idService,
                                                                                                                uuid: "47",
                                                                                                                alias: "29"
                                                                                                            },
                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                            _dependencies: []
                                                                                                        })];
                                                                                                    }, function() {
                                                                                                        return [$if(model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).isSelectedAttr, false, this, function() {
                                                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                inputs: {
                                                                                                                    In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.primary,
                                                                                                                    In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.checkboxFill
                                                                                                                },
                                                                                                                events: {
                                                                                                                    _handleError: function(ex) {
                                                                                                                        controller.handleError(ex);
                                                                                                                    },
                                                                                                                    click$Action: function() {
                                                                                                                        var eventHandlerContext = callContext.clone();
                                                                                                                        return OS.Flow.tryFinally(function() {
                                                                                                                            var varBag = {};
                                                                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                                                                            controller.handler_SearchResultItemOnSelect$Action(false, false, controller.callContext(eventHandlerContext));
                                                                                                                        }, function() {
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
                                                                                                                    uuid: "48",
                                                                                                                    alias: "30"
                                                                                                                },
                                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                _dependencies: []
                                                                                                            })];
                                                                                                        }, function() {
                                                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                inputs: {
                                                                                                                    In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7,
                                                                                                                    In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.checkboxOutlineBlank
                                                                                                                },
                                                                                                                events: {
                                                                                                                    _handleError: function(ex) {
                                                                                                                        controller.handleError(ex);
                                                                                                                    },
                                                                                                                    click$Action: function() {
                                                                                                                        var eventHandlerContext = callContext.clone();
                                                                                                                        return OS.Flow.tryFinally(function() {
                                                                                                                            var varBag = {};
                                                                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                                                                            controller.handler_SearchResultItemOnSelect$Action(true, false, controller.callContext(eventHandlerContext));
                                                                                                                        }, function() {
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
                                                                                                                    uuid: "49",
                                                                                                                    alias: "31"
                                                                                                                },
                                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                _dependencies: []
                                                                                                            })];
                                                                                                        })];
                                                                                                    })];
                                                                                                })
                                                                                            },
                                                                                            _dependencies: [asPrimitiveValue(model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).isSelectedAttr), asPrimitiveValue(model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).searchResultAttr.recordDisabledAttr)]
                                                                                        })];
                                                                                    }, callContext, idService, "4")
                                                                                },
                                                                                _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_VerticalListVar), asPrimitiveValue(model.variables.searchTermVar)]
                                                                            })];
                                                                        })
                                                                    },
                                                                    _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_VerticalListVar), asPrimitiveValue(model.variables.searchTermVar), asPrimitiveValue(model.variables.searchResultItemListVar), asPrimitiveValue(model.variables.isSearchingVar)]
                                                                })];
                                                            })];
                                                        }))];
                                                    })
                                                },
                                                _dependencies: [asPrimitiveValue(model.variables.avatarImageSize_VerticalListVar), asPrimitiveValue(model.variables.getRecentlySharedDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.searchTermVar), asPrimitiveValue(model.variables.getAvailableMembersDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.isSearchingVar), asPrimitiveValue(model.variables.searchResultItemListVar), asPrimitiveValue(model.variables.avatarImageSize_HorizontalListVar), asPrimitiveValue(model.variables.selectedMembersVar), asPrimitiveValue(model.variables.searchPromtVar)]
                                            })];
                                        }, function() {
                                            return [];
                                        }))];
                                    })
                                }
                            })];
                        }),
                        footer: new PlaceholderContent(function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("cQI7S5yxaUOQXocgOslYCg.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0;
                                                return rec;
                                            }();
                                            rec.paddingSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                    })
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    }
                                },
                                _validationProps: {
                                    validationService: validationService
                                },
                                _idProps: {
                                    service: idService,
                                    uuid: "50",
                                    alias: "32"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [$if(model.variables.isSearchStepVar, false, this, function() {
                                            return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
                                                inputs: {
                                                    IsDisabled: (model.variables.selectedMembersVar.isEmpty || model.variables.isSubmittingVar),
                                                    ButtonText: "Send",
                                                    ButtonOptions: model.getCachedValue(idService.getId("GOSsRYqWAEGHkqkn3aYrBQ.ButtonOptions"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
                                                            rec.uBT_ButtonSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize.small;
                                                            return rec;
                                                        }();
                                                    })
                                                },
                                                events: {
                                                    _handleError: function(ex) {
                                                        controller.handleError(ex);
                                                    },
                                                    buttonOnClick$Action: function() {
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Common/Button buttonOnClick");
                                                                return controller.handler_OnClickSend$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });
                                                        });;
                                                    }
                                                },
                                                _validationProps: {
                                                    validationService: validationService
                                                },
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "51",
                                                    alias: "33"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        }, function() {
                                            return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
                                                inputs: {
                                                    ButtonText: "Cancel",
                                                    ButtonOptions: model.getCachedValue(idService.getId("KJ+qpJ1ow0iPu0lZKbPy0w.ButtonOptions"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
                                                            rec.uBT_ButtonSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize.small;
                                                            rec.uBT_ButtonTypeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_ButtonType.tertiary;
                                                            return rec;
                                                        }();
                                                    })
                                                },
                                                events: {
                                                    _handleError: function(ex) {
                                                        controller.handleError(ex);
                                                    },
                                                    buttonOnClick$Action: function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Common/Button buttonOnClick");
                                                            controller.event_ClosedShareSheet$Action(controller.callContext(eventHandlerContext));
                                                        }, function() {
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
                                                    uuid: "52",
                                                    alias: "34"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.isSubmittingVar), asPrimitiveValue(model.variables.selectedMembersVar.isEmpty), asPrimitiveValue(model.variables.isSearchStepVar)]
                            })];
                        })
                    }
                })];
            }, function() {
                return [];
            }), $if(model.variables.isOpenVar, false, this, function() {
                return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        backNavigationPrevented$Action: function(backNavigationEventIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
                                    return controller.handler_OnBack$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        }
                    },
                    _validationProps: {
                        validationService: validationService
                    },
                    _idProps: {
                        service: idService,
                        uuid: "53",
                        alias: "35"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "UBTConnectLibrary.model", "Connect_Search_CS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "MemoryClientCache.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$debugger", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.ScreenEvent_OnParametersChanged.DelaySetIsOpenJS", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.Handler_OnClickExternalOption.ExternalShareWithDelayJS", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.Action_ScrollTop.ScrollToTopJS", "UBTConnect_Utils.controller$ShareSheet_IsSharing", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$SelectableSearchResultListList", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth$Connect_Search_CS", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.model$SearchResultList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$ExternalShare", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord", "UBTConnect_Utils.model$ExternalAppPackageNameRec", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.model$SelectableSearchResultListRec", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, UBTConnectLibraryModel, Connect_Search_CSModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, MemoryClientCacheModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Share_ShareSheet_mvc_Debugger, UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller_ScreenEvent_OnParametersChanged_DelaySetIsOpenJS, UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller_Handler_OnClickExternalOption_ExternalShareWithDelayJS, UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller_Action_ScrollTop_ScrollToTopJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                action_SetLocalIsOpen$Action: function(in_ValueIn) {
                    in_ValueIn = (in_ValueIn === undefined) ? false : in_ValueIn;
                    return controller.executeActionInsideJSNode(controller._action_SetLocalIsOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_ValueIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_SetLocalIsOpen");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getAvailableMembers$DataActRefresh: -1,
                getRecentlyShared$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getAvailableMembers$DataActRefresh: [],
                getRecentlyShared$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.cS_CreateShareProfileLink$ServerAction = function(in_ShareObjectTypeIdIn, in_SharedObjectIdIn, in_UpdateTypeIn, in_UpdateDateIn, callContext) {
            var controller = this.controller;
            var inputs = {
                In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.to(in_ShareObjectTypeIdIn, OS.DataTypes.DataTypes.Text),
                In_SharedObjectId: OS.DataConversion.ServerDataConverter.to(in_SharedObjectIdIn, OS.DataTypes.DataTypes.Text),
                In_UpdateType: OS.DataConversion.ServerDataConverter.to(in_UpdateTypeIn, OS.DataTypes.DataTypes.Text),
                In_UpdateDate: OS.DataConversion.ServerDataConverter.to(in_UpdateDateIn, OS.DataTypes.DataTypes.Date)
            };
            return controller.callServerAction("CS_CreateShareProfileLink", "screenservices/UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink", "qXBmIppyKyiGN5H_4r0QyQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet$rssespaceconnect2_sharing_cs_ActionCS_CreateShareProfileLink"))();
                executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.DataTypes.DataTypes.Text);
                executeServerActionResult.shareIdOut = OS.DataConversion.ServerDataConverter.from(outputs.ShareId, OS.DataTypes.DataTypes.LongInteger);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet$rssespaceconnect2_sharing_cs_ActionCS_CreateShareProfileLink", [{
            name: "URL",
            attrName: "uRLOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ShareId",
            attrName: "shareIdOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype.cS_ShareObject$ServerAction = function(in_ShareObjectTypeIdIn, in_SharedObjectIdIn, in_SharingProfileNameIn, in_TargetCBUserIdsIn, in_UpdateTypeIn, in_UpdateDateIn, callContext) {
            var controller = this.controller;
            var inputs = {
                In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.to(in_ShareObjectTypeIdIn, OS.DataTypes.DataTypes.Text),
                In_SharedObjectId: OS.DataConversion.ServerDataConverter.to(in_SharedObjectIdIn, OS.DataTypes.DataTypes.Text),
                In_SharingProfileName: OS.DataConversion.ServerDataConverter.to(in_SharingProfileNameIn, OS.DataTypes.DataTypes.Text),
                In_TargetCBUserIds: OS.DataConversion.ServerDataConverter.to(in_TargetCBUserIdsIn, OS.DataTypes.DataTypes.RecordList),
                In_UpdateType: OS.DataConversion.ServerDataConverter.to(in_UpdateTypeIn, OS.DataTypes.DataTypes.Text),
                In_UpdateDate: OS.DataConversion.ServerDataConverter.to(in_UpdateDateIn, OS.DataTypes.DataTypes.Date)
            };
            return controller.callServerAction("CS_ShareObject", "screenservices/UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject", "TUzZEOQfPPY0UjosyQxWfg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet$rssespaceconnect2_sharing_cs_ActionCS_ShareObject"))();
                executeServerActionResult.isSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.IsSuccess, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.messageOut = OS.DataConversion.ServerDataConverter.from(outputs.Message, OS.DataTypes.DataTypes.Text);
                executeServerActionResult.isAllowedOut = OS.DataConversion.ServerDataConverter.from(outputs.IsAllowed, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.shareIdOut = OS.DataConversion.ServerDataConverter.from(outputs.ShareId, OS.DataTypes.DataTypes.LongInteger);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet$rssespaceconnect2_sharing_cs_ActionCS_ShareObject", [{
            name: "IsSuccess",
            attrName: "isSuccessOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "Message",
            attrName: "messageOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "IsAllowed",
            attrName: "isAllowedOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ShareId",
            attrName: "shareIdOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);

        // Aggregates and Data Actions
        Controller.prototype.getAvailableMembers$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:mZ9+Lok6eUSFTXV95N0rKA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/DataActions.mZ9+Lok6eUSFTXV95N0rKA:J2WciuUucWRoLe_s904xrQ", "UBTConnect_Utils", "GetAvailableMembers", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Share/ShareSheet/GetAvailableMembers");
                return controller.callDataAction("DataActionGetAvailableMembers", "screenservices/UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers", "hQVgKksvAHpvACGaMXLj3A", function(b) {
                    model.variables.getAvailableMembersDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getAvailableMembersDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAvailableMembersDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Share/ShareSheet/GetAvailableMembers On After Fetch");
                    controller._onAfterFetch_GetAvailableMembers$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:mZ9+Lok6eUSFTXV95N0rKA", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.getRecentlyShared$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:fL8udRtABEuUa_ZkgHakwg:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/DataActions.fL8udRtABEuUa_ZkgHakwg:LiG4zvf1k6GS5wZFf26Hkw", "UBTConnect_Utils", "GetRecentlyShared", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Share/ShareSheet/GetRecentlyShared");
                return controller.callDataAction("DataActionGetRecentlyShared", "screenservices/UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared", "paMzPfFImfV0QamjA7rFzA", function(b) {
                    model.variables.getRecentlySharedDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getRecentlySharedDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getRecentlySharedDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Share/ShareSheet/GetRecentlyShared On After Fetch");
                    controller._onAfterFetch_GetRecentlyShared$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:fL8udRtABEuUa_ZkgHakwg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getAvailableMembers$DataActRefresh", "getRecentlyShared$DataActRefresh"];
        // Client Actions
        Controller.prototype._onAfterFetch_GetAvailableMembers$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetAvailableMembers");
            callContext = controller.callContext(callContext);
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:2HWWB9M2wkW1dLejUNhcqg:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.2HWWB9M2wkW1dLejUNhcqg:D0YbS6biod1aSXAsUmMzYw", "UBTConnect_Utils", "OnAfterFetch_GetAvailableMembers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YQeJTpm3U0OT4hkhbUyknw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1u67A_R0Hk+CTX0v2Bhkdw", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.searchResultItemListVar, callContext);
                // Foreach GetAvailableMembers.Out_SearchResultItemList
                callContext.iterationContext.registerIterationStart(model.variables.getAvailableMembersDataAct.out_SearchResultItemListOut);
                try {
                    var out_SearchResultItemListIterator = callContext.iterationContext.getIterator(model.variables.getAvailableMembersDataAct.out_SearchResultItemListOut);
                    var out_SearchResultItemListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IFLr2vibaE29vodWHlFmvQ", callContext.id) && (out_SearchResultItemListIndex < model.variables.getAvailableMembersDataAct.out_SearchResultItemListOut.length))) {
                        out_SearchResultItemListIterator.currentRowNumber = out_SearchResultItemListIndex;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vK6PorpYrU2ylhwjtxYRHA", callContext.id);
                        // Execute Action: ListIndexOf
                        listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.selectedMembersVar, function(p) {
                            return (p.searchResultAttr.idAttr === model.variables.getAvailableMembersDataAct.out_SearchResultItemListOut.getItem(out_SearchResultItemListIndex.valueOf()).idAttr);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bhZ8mJESxkuiZSeDXoa5YA", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.searchResultItemListVar, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getAvailableMembersDataAct.out_SearchResultItemListOut.getItem(out_SearchResultItemListIndex.valueOf()), new UBTConnect_UtilsModel.SelectableSearchResultListRec(), function(source, target) {
                            target.isSelectedAttr = ((listIndexOfVar.value.positionOut) !== (-1));
                            target.searchResultAttr.scoreAttr = source.scoreAttr;
                            target.searchResultAttr.idAttr = source.idAttr;
                            target.searchResultAttr.householderIdAttr = source.householderIdAttr;
                            target.searchResultAttr.nameAttr = source.nameAttr;
                            target.searchResultAttr.additionalInformationAttr = source.additionalInformationAttr;
                            target.searchResultAttr.locationAttr = source.locationAttr;
                            target.searchResultAttr.typeAttr = source.typeAttr;
                            target.searchResultAttr.recordDisabledAttr = source.recordDisabledAttr;
                            target.searchResultAttr.latitudeAttr = source.latitudeAttr;
                            target.searchResultAttr.longitudeAttr = source.longitudeAttr;
                            target.searchResultAttr.displayHouseholdNameAttr = source.displayHouseholdNameAttr;
                            target.searchResultAttr.displayAddressAttr = source.displayAddressAttr;
                            return target;
                        }), callContext);
                        out_SearchResultItemListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getAvailableMembersDataAct.out_SearchResultItemListOut);
                }

                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TPVHOp3VkkmzAQkG1nZ0Kw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:2HWWB9M2wkW1dLejUNhcqg", callContext.id);
            }

        };
        Controller.prototype._screenEvent_OnParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
            callContext = controller.callContext(callContext);
            var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
            var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.bottomSheetOpenVar = bottomSheetOpenVar;
            varBag.bottomSheetCloseVar = bottomSheetCloseVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:hS1PChwB2kGmE9ZgX2CDTg:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.hS1PChwB2kGmE9ZgX2CDTg:f3jjYJBz_O4X+iTIdbLg_A", "UBTConnect_Utils", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:76EcCjRBuEqV2XPi+20eqA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6hc2AaSDJ0O3gtYs0eLAsQ", callContext.id) && ((model.variables.isOpenVar) !== (model.variables.in_IsOpenIn)))) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:M1_j24XHn0GLo4nbo5kQGA", callContext.id) && model.variables.in_IsOpenIn)) {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:S5f8WAPf2EqEswQuyz1Vvg", callContext.id);
                                // Execute Action: Action_SetLocalIsOpen
                                controller._action_SetLocalIsOpen$Action(true, callContext);
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:OO2P+3NbyE6+5kijaR9JTw", callContext.id);
                                // Execute Action: ScreenModel_Flush
                                model.flush();
                                return UBTJavaScriptUtilsController.default.screenModel_Flush$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:I7QqZS5OwU2rjpVPPPeAZQ", callContext.id);
                                    // Execute Action: Action_ResetLocalVariables
                                    controller._action_ResetLocalVariables$Action(callContext);
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rI+pxeHMH0e6HAzCYk3Crw", callContext.id);
                                    // Execute Action: BottomSheetOpen
                                    bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.bottomSheetIdVar, callContext);

                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ybtlpYP5l0eSQuSBgv6LLQ", callContext.id);
                                    // SearchResultItemList = Skeleton_SearchResultItemList
                                    model.variables.searchResultItemListVar = model.variables.skeleton_SearchResultItemListVar;
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:l4tcZuy1RkGSU9u8SYaInQ", callContext.id);
                                    // Refresh Query: GetRecentlyShared
                                    var result = controller.getRecentlyShared$DataActRefresh(callContext);
                                    model.flush();
                                    return result;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:iHXQtk2YBkKrLlKxqqxxDA", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pjQ9Nv99KUOJhDU5uAMOgQ", callContext.id);
                                controller.safeExecuteJSNode(UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller_ScreenEvent_OnParametersChanged_DelaySetIsOpenJS, "DelaySetIsOpen", "ScreenEvent_OnParametersChanged", {
                                    In_SheetElementId: OS.DataConversion.JSNodeParamConverter.to(model.variables.bottomSheetIdVar, OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {}, {
                                    Action_SetLocalIsOpen: controller.clientActionProxies.action_SetLocalIsOpen$Action
                                }, {});
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RARj3A3trk+CHSn7fPsCAw", callContext.id);
                                // Execute Action: BottomSheetClose
                                bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xA2fheOFD0OO028SYSCxSA", callContext.id);
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0X9sOJjZvESJCDYCbk_FCA", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:hS1PChwB2kGmE9ZgX2CDTg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:hS1PChwB2kGmE9ZgX2CDTg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_SelectedListItemOnClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SelectedListItemOnClick");
            callContext = controller.callContext(callContext);
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:16fWDIH4+E6UPDenEwesYA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.16fWDIH4+E6UPDenEwesYA:pYhFtf_fB2kXjoYPftBGcw", "UBTConnect_Utils", "Handler_SelectedListItemOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:erOyx5DEsU+GkktT00O1Tw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_L4vGEjfW0GLdCrirNKXyQ", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.searchResultItemListVar, function(p) {
                    return (p.searchResultAttr.idAttr === model.variables.selectedMembersVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr);
                }, callContext);

                // In search list?
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:t0mXibFUnECSfDYkjjSXiw", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2d2GIEzZ30a0vMeT4wcW1A", callContext.id);
                    // SearchResultItemList[ListIndexOf.Position].IsSelected = False
                    model.variables.searchResultItemListVar.getItem(listIndexOfVar.value.positionOut).isSelectedAttr = false;
                }

                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:iOU5CJsfc06BeORxcor0AA", callContext.id);
                // Execute Action: ListRemove
                OS.SystemActions.listRemove(model.variables.selectedMembersVar, model.variables.selectedMembersVar.getCurrentRowNumber(callContext.iterationContext), callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3xcpzyP40k+jHPPNfLQnPg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:16fWDIH4+E6UPDenEwesYA", callContext.id);
            }

        };
        Controller.prototype._handler_OnClickExternalOption$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickExternalOption");
            callContext = controller.callContext(callContext);
            var cS_CreateShareProfileLinkVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.cS_CreateShareProfileLinkVar = cS_CreateShareProfileLinkVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:fihSEdgF0U+KfoiL5yLRtA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.fihSEdgF0U+KfoiL5yLRtA:cCjMKFGRYOSip6Kqv3IROQ", "UBTConnect_Utils", "Handler_OnClickExternalOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:r0nxXYynYk2TvSmWzGBkMA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7wq0nfbUQE2qtsAcOEGLKw", callContext.id);
                // CurrentExternalShareIdOption = ExternalShareOptions.Current.ExternalShareOptionId
                model.variables.currentExternalShareIdOptionVar = model.variables.externalShareOptionsVar.getCurrent(callContext.iterationContext).externalShareOptionIdAttr;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ttQuvpO5AUipC3_+a8soMg", callContext.id);
                // Execute Action: CS_CreateShareProfileLink
                model.flush();
                return controller.cS_CreateShareProfileLink$ServerAction(model.variables.in_ShareObjectTypeIdIn, model.variables.in_ShareableObjectIdIn, model.variables.in_UpdateTypeIn, model.variables.in_UpdateDateIn, callContext).then(function(value) {
                    cS_CreateShareProfileLinkVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:N4j479DMFEOcL+QWrOT1nA", callContext.id);
                    controller.safeExecuteJSNode(UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller_Handler_OnClickExternalOption_ExternalShareWithDelayJS, "ExternalShareWithDelay", "Handler_OnClickExternalOption", {
                        In_ShareObjectTypeId: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_ShareObjectTypeIdIn, OS.DataTypes.DataTypes.Text),
                        In_ShareMessage: OS.DataConversion.JSNodeParamConverter.to(cS_CreateShareProfileLinkVar.value.uRLOut, OS.DataTypes.DataTypes.Text),
                        In_ExternalShareOptionTypeId: OS.DataConversion.JSNodeParamConverter.to(model.variables.externalShareOptionsVar.getCurrent(callContext.iterationContext).externalShareOptionIdAttr, OS.DataTypes.DataTypes.Text),
                        In_SheetElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("BottomSheet"), OS.DataTypes.DataTypes.Text),
                        In_ShareableObjectId: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_ShareableObjectIdIn, OS.DataTypes.DataTypes.Text),
                        In_ShareId: OS.DataConversion.JSNodeParamConverter.to(model.variables.shareIdVar, OS.DataTypes.DataTypes.LongInteger)
                    }, function($parameters) {}, {
                        ExternalShare: UBTConnect_UtilsController.default.getClientActionProxies(controller).externalShare$Action
                    }, {});
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:B3AaxOeEJkSUr3HTyG6mxQ", callContext.id);
                    // Execute Action: Action_ResetAndCloseSheetState
                    return controller._action_ResetAndCloseSheetState$Action(callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:D8eRGGBH6U6_FHEtFGTp0w", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:fihSEdgF0U+KfoiL5yLRtA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:fihSEdgF0U+KfoiL5yLRtA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onAfterFetch_GetRecentlyShared$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetRecentlyShared");
            callContext = controller.callContext(callContext);
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:6hkkFOUC1UKqOzu+G7CN2g:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.6hkkFOUC1UKqOzu+G7CN2g:j1QwyeoBrqEM+jAUSf+qIw", "UBTConnect_Utils", "OnAfterFetch_GetRecentlyShared", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5cg0DTYBwUyXOyjFOq7C8Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZTRuUo5llUukFXSKDnT+Ig", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.recentlySharedVar, callContext);
                // Foreach GetRecentlyShared.Out_SearchResultItemList
                callContext.iterationContext.registerIterationStart(model.variables.getRecentlySharedDataAct.out_SearchResultItemListOut);
                try {
                    var out_SearchResultItemListIterator = callContext.iterationContext.getIterator(model.variables.getRecentlySharedDataAct.out_SearchResultItemListOut);
                    var out_SearchResultItemListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:r4hO8lXYzE6VsICZwykRig", callContext.id) && (out_SearchResultItemListIndex < model.variables.getRecentlySharedDataAct.out_SearchResultItemListOut.length))) {
                        out_SearchResultItemListIterator.currentRowNumber = out_SearchResultItemListIndex;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:33FX0+1YBUyz8apgK3XZ2g", callContext.id);
                        // Execute Action: ListIndexOf
                        listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.selectedMembersVar, function(p) {
                            return (p.searchResultAttr.idAttr === model.variables.getRecentlySharedDataAct.out_SearchResultItemListOut.getItem(out_SearchResultItemListIndex.valueOf()).idAttr);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AhCpCn8QWkKcrF70i8rC4Q", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.recentlySharedVar, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getRecentlySharedDataAct.out_SearchResultItemListOut.getItem(out_SearchResultItemListIndex.valueOf()), new UBTConnect_UtilsModel.SelectableSearchResultListRec(), function(source, target) {
                            target.isSelectedAttr = ((listIndexOfVar.value.positionOut) !== (-1));
                            target.isEnabledAttr = ((model.variables.selectedMembersVar.length <= 50) || ((listIndexOfVar.value.positionOut) !== (-1)));
                            target.searchResultAttr.scoreAttr = source.scoreAttr;
                            target.searchResultAttr.idAttr = source.idAttr;
                            target.searchResultAttr.householderIdAttr = source.householderIdAttr;
                            target.searchResultAttr.nameAttr = source.nameAttr;
                            target.searchResultAttr.additionalInformationAttr = source.additionalInformationAttr;
                            target.searchResultAttr.locationAttr = source.locationAttr;
                            target.searchResultAttr.typeAttr = source.typeAttr;
                            target.searchResultAttr.recordDisabledAttr = source.recordDisabledAttr;
                            target.searchResultAttr.latitudeAttr = source.latitudeAttr;
                            target.searchResultAttr.longitudeAttr = source.longitudeAttr;
                            target.searchResultAttr.displayHouseholdNameAttr = source.displayHouseholdNameAttr;
                            target.searchResultAttr.displayAddressAttr = source.displayAddressAttr;
                            return target;
                        }), callContext);
                        out_SearchResultItemListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getRecentlySharedDataAct.out_SearchResultItemListOut);
                }

                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pcfcgiT8rEOWjMsK5rsLoQ", callContext.id) && (model.variables.isSearchStepVar && !(model.variables.isSearchingVar)))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ricrjaAn1EumalfYWGnCKA", callContext.id);
                    // SearchResultItemList = RecentlyShared
                    model.variables.searchResultItemListVar = model.variables.recentlySharedVar;
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4_nZI682pk2TIO9KLvzk3Q", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4_nZI682pk2TIO9KLvzk3Q", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:6hkkFOUC1UKqOzu+G7CN2g", callContext.id);
            }

        };
        Controller.prototype._handler_SearchOnFocus$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SearchOnFocus");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:mkcbGF3Lg0WPOMa6ncAs_Q:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.mkcbGF3Lg0WPOMa6ncAs_Q:CdcgHM8jbwiNtENnZej+gQ", "UBTConnect_Utils", "Handler_SearchOnFocus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:p2OURIlKl0WzDR_DrZhX2A", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:F6GcUh_dz06uyOR7yfUGjw", callContext.id) && model.variables.isSearchStepVar)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:R9j0N5+QNUaTpeEiaNUZIQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uMiuZaoLcUuPz3ujUxwRpg", callContext.id);
                    // IsSearchStep = True
                    model.variables.isSearchStepVar = true;
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Cs6SZrh5XkSMM9jZInw1lQ", callContext.id) && model.variables.getRecentlySharedDataAct.isDataFetchedAttr)) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FChDXnbeEki8DTbiVjbkbQ", callContext.id);
                        // Execute Action: OnAfterFetch_GetRecentlyShared
                        controller._onAfterFetch_GetRecentlyShared$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Xha90N4vPE6w8KRst6GkdQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uCigtNjwRUq+fJfiMV0IvQ", callContext.id);
                        // SearchResultItemList = RecentlyShared
                        model.variables.searchResultItemListVar = model.variables.recentlySharedVar;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Xha90N4vPE6w8KRst6GkdQ", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:mkcbGF3Lg0WPOMa6ncAs_Q", callContext.id);
            }

        };
        Controller.prototype._action_SetExternalShareOptions$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetExternalShareOptions");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_SetExternalShareOptions$vars"))());
            var canLaunchWithData_WhatsAppVar = new OS.DataTypes.VariableHolder();
            var canLaunchWithData_SignalVar = new OS.DataTypes.VariableHolder();
            var canLaunchWithData_OutlookVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.canLaunchWithData_WhatsAppVar = canLaunchWithData_WhatsAppVar;
            varBag.canLaunchWithData_SignalVar = canLaunchWithData_SignalVar;
            varBag.canLaunchWithData_OutlookVar = canLaunchWithData_OutlookVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:tO_cLg6itEabkGyzxi0ShQ:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.tO_cLg6itEabkGyzxi0ShQ:MCKE3TjKBvVv8au_lWGGaQ", "UBTConnect_Utils", "Action_SetExternalShareOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nUN51d5AV0yoXYZLeplDUA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:d055NI5MdUSRe0sRIYZNBg", callContext.id) && model.variables.externalShareOptionsVar.isEmpty)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BTg9YEGDkkundCbRR_btXA", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBT_AppManagerController.default.appManager_GetIsNative$Action(callContext).isNativeOut;
                                }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kbQGDRA9EkmoDDsPURiLKQ", callContext.id);
                                // Execute Action: ListAppend_ShareVia
                                OS.SystemActions.listAppend(model.variables.externalShareOptionsVar, function() {
                                    var rec = new UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord();
                                    rec.externalShareOptionIdAttr = UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.systemShare;
                                    rec.iconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.iosShare;
                                    rec.labelAttr = "Share via";
                                    return rec;
                                }(), callContext);
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:k88fNfnp4UeJltsnvvtEYA", callContext.id);
                                // Execute Action: ListAppend_CopyLink
                                OS.SystemActions.listAppend(model.variables.externalShareOptionsVar, function() {
                                    var rec = new UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord();
                                    rec.externalShareOptionIdAttr = UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.copyLink;
                                    rec.iconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.link;
                                    rec.labelAttr = "Copy link";
                                    return rec;
                                }(), callContext);
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ArsaabkZi0aVyroqfplRyQ", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBT_AppManagerController.default.appManager_GetIsNative$Action(callContext).isNativeOut;
                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DbeiL5W7dkOYK1Hinnltvw", callContext.id);
                                        // Execute Action: CanLaunchWithData_WhatsApp
                                        model.flush();
                                        return Connect2_AppLauncherPluginController.default.canLaunchWithData$Action(function() {
                                            var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
                                            rec.packageNameAttr = vars.value.externalAppPackageNameVar.whatsappAttr;
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            canLaunchWithData_WhatsAppVar.value = value;
                                        }).then(function() {
                                            // Has WhatsApp
                                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jySbHAGboES8FlpipxgeEw", callContext.id) && canLaunchWithData_WhatsAppVar.value.successOut)) {
                                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7cebckibOEO0pLuw1_vg2w", callContext.id);
                                                // Execute Action: ListAppend_WhatsApp
                                                OS.SystemActions.listAppend(model.variables.externalShareOptionsVar, function() {
                                                    var rec = new UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord();
                                                    rec.externalShareOptionIdAttr = UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.whatsapp;
                                                    rec.iconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.whatsapp;
                                                    rec.labelAttr = "WhatsApp";
                                                    return rec;
                                                }(), callContext);
                                            }

                                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vhHbppIlcEmAyQTSaEQI8Q", callContext.id);
                                            // Execute Action: CanLaunchWithData_Signal
                                            model.flush();
                                            return Connect2_AppLauncherPluginController.default.canLaunchWithData$Action(function() {
                                                var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
                                                rec.packageNameAttr = vars.value.externalAppPackageNameVar.signalAttr;
                                                return rec;
                                            }(), callContext).then(function(value) {
                                                canLaunchWithData_SignalVar.value = value;
                                            });
                                        }).then(function() {
                                            // Has Signal
                                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DmlITlHo_0GQHdt4ehBQ1g", callContext.id) && canLaunchWithData_SignalVar.value.successOut)) {
                                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4KriWLVflECOB2sxf0JixA", callContext.id);
                                                // Execute Action: ListAppend_Signal
                                                OS.SystemActions.listAppend(model.variables.externalShareOptionsVar, function() {
                                                    var rec = new UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord();
                                                    rec.externalShareOptionIdAttr = UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.signal;
                                                    rec.iconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.signal;
                                                    rec.labelAttr = "Signal";
                                                    return rec;
                                                }(), callContext);
                                            }

                                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aQDfz+7RBEOHxE63q0rq2w", callContext.id);
                                            // Execute Action: CanLaunchWithData_Outlook
                                            model.flush();
                                            return Connect2_AppLauncherPluginController.default.canLaunchWithData$Action(function() {
                                                var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
                                                rec.packageNameAttr = vars.value.externalAppPackageNameVar.outlookAttr;
                                                return rec;
                                            }(), callContext).then(function(value) {
                                                canLaunchWithData_OutlookVar.value = value;
                                            });
                                        }).then(function() {
                                            // Has outlook
                                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:g6PWyUot80G9j4gKLmSISQ", callContext.id) && canLaunchWithData_OutlookVar.value.successOut)) {
                                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Kw6+VN56MUWU29PSk7CImA", callContext.id);
                                                // Execute Action: ListAppend_Outlook
                                                OS.SystemActions.listAppend(model.variables.externalShareOptionsVar, function() {
                                                    var rec = new UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord();
                                                    rec.externalShareOptionIdAttr = UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.outlook;
                                                    rec.iconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.mail;
                                                    rec.labelAttr = "Outlook";
                                                    return rec;
                                                }(), callContext);
                                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TRZYb9p6RkeTAXJ1UZVpWQ", callContext.id);
                                            } else {
                                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TRZYb9p6RkeTAXJ1UZVpWQ", callContext.id);
                                            }

                                        });
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eU6oSO4JQE2KjO50RrQckQ", callContext.id);
                                    }

                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1TOFNi0oQ0eck0TuM39J6Q", callContext.id);
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:loHLQ27_3UC2uuNzueslrw", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:tO_cLg6itEabkGyzxi0ShQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:tO_cLg6itEabkGyzxi0ShQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_SetExternalShareOptions$vars", [{
            name: "ExternalAppPackageName",
            attrName: "externalAppPackageNameVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.ExternalAppPackageNameRec();
            },
            complexType: UBTConnect_UtilsModel.ExternalAppPackageNameRec
        }]);
        Controller.prototype._handler_OnClickRecentMember$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickRecentMember");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:nNd5MHMkjk+4Uj+guHUsFQ:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.nNd5MHMkjk+4Uj+guHUsFQ:PgyOqq_aDzWOf1dxX2btiQ", "UBTConnect_Utils", "Handler_OnClickRecentMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Fg6v9SOCqUinrhGZckVqKA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+86rZaz_Nk+mY0AOzzxeNA", callContext.id) && model.variables.getRecentlySharedDataAct.isDataFetchedAttr)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hCgK7yjpeUKCMej_mHh8zQ", callContext.id) && model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.recordDisabledAttr)) {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RotNNS5xwE6jyJrVaMSYIg", callContext.id);
                                // Execute Action: App_Subscription_ShowUpgradePopUp
                                model.flush();
                                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:H0bqAS3_YEOnEGOf4F4AUQ", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oKfQGrKEe0yM8vmPYy6RxA", callContext.id);
                                // SharingRecentMemberId = RecentlyShared.Current.SearchResult.Id
                                model.variables.sharingRecentMemberIdVar = model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr;
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hN7CdRTKakOyOm_16Qaj0Q", callContext.id);
                                // Execute Action: Action_SubmitShare
                                return controller._action_SubmitShare$Action(function() {
                                    var list = new OS.DataTypes.TextList();
                                    list.pushAll([model.variables.recentlySharedVar.getCurrent(callContext.iterationContext).searchResultAttr.householderIdAttr]);
                                    return list;
                                }(), callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7GIarC+fb0uU+FHwObnOsA", callContext.id);
                                });
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8m3tL2oLFkCdh5UTBvmK8g", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:nNd5MHMkjk+4Uj+guHUsFQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:nNd5MHMkjk+4Uj+guHUsFQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._action_CreateSkeletonList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_CreateSkeletonList");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_CreateSkeletonList$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:VqUXOwVfVEGeuHRtA96l0g:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.VqUXOwVfVEGeuHRtA96l0g:d__KcfiKW5WJO5k_xsUrqQ", "UBTConnect_Utils", "Action_CreateSkeletonList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2HANc3o4jUWTsjgNCIIMzQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:npEA4dKJR0ONRmOfTwQpeg", callContext.id) && model.variables.skeleton_SearchResultItemListVar.isEmpty)) {
                    while ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Xl2vYUwRRUa+invWR_aTPQ", callContext.id) && (vars.value.indexVar < vars.value.numberOfSkeletonItemsVar))) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:i+VS+JP23EKDnIpAWWUwPA", callContext.id);
                        // Index = Index + 1
                        vars.value.indexVar = (vars.value.indexVar + 1);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IXYaRC7PqU+IDvaqgxHbKQ", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.skeleton_SearchResultItemListVar, function() {
                            var rec = new UBTConnect_UtilsModel.SelectableSearchResultListRec();
                            rec.searchResultAttr = function() {
                                var rec = new Connect_Search_CSModel.SearchResultRec();
                                rec.idAttr = "0";
                                rec.householderIdAttr = "0";
                                rec.nameAttr = "Loading Name";
                                rec.locationAttr = "Locality, Country";
                                rec.typeAttr = UBTConnect_UtilsModel.staticEntities.connect_Entity.member;
                                return rec;
                            }();
                            return rec;
                        }(), callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pXorVKKPJUuHp3D1al2LzQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rndXquXvAkqkBPxrqPLdGA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:VqUXOwVfVEGeuHRtA96l0g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_CreateSkeletonList$vars", [{
            name: "NumberOfSkeletonItems",
            attrName: "numberOfSkeletonItemsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 5;
            }
        }, {
            name: "Index",
            attrName: "indexVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._action_ScrollTop$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_ScrollTop");
            callContext = controller.callContext(callContext);
            var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:N1heYNZelUqxe0xDhYgk3A:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.N1heYNZelUqxe0xDhYgk3A:yZ8OJIitv2sEKlYSAlXJFA", "UBTConnect_Utils", "Action_ScrollTop", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gd27q5gHkEiEVJfPQuhW6A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+faCP1ks10WqhDo+SThrzA", callContext.id);
                // Execute Action: JSUtils_Element_Operations_GetElementById
                jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(idService.getId("BottomSheet"), callContext);

                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5EP7Gft+AEuPiaixZmCxxw", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_Utils_CW_Share_ShareSheet_mvc_controller_Action_ScrollTop_ScrollToTopJS, "ScrollToTop", "Action_ScrollTop", {
                    In_BottomSheet: OS.DataConversion.JSNodeParamConverter.to(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nNAN4S0YEkOhMTfzOE+QKQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:N1heYNZelUqxe0xDhYgk3A", callContext.id);
            }

        };
        Controller.prototype._handler_InputEventClearString$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_InputEventClearString");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:szTqbph2PE+RUdhiW6fKfw:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.szTqbph2PE+RUdhiW6fKfw:nQMj0whZQeOGVaGDtueXzQ", "UBTConnect_Utils", "Handler_InputEventClearString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_pOtPLPD1UGdSNNdGnLYng", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WErjjqrZzUisoKpqb+mcCw", callContext.id);
                // SearchTerm = ""
                model.variables.searchTermVar = "";
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WErjjqrZzUisoKpqb+mcCw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // IsSearching = False
                model.variables.isSearchingVar = false;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WOc9naWqCEWJBqX8+km1xw", callContext.id);
                // Execute Action: OnAfterFetch_GetRecentlyShared
                controller._onAfterFetch_GetRecentlyShared$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gDMbhXpqZEyfwJM4unXGqQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:szTqbph2PE+RUdhiW6fKfw", callContext.id);
            }

        };
        Controller.prototype._handler_BottomSheetOnToggle$Action = function(event_IsOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_BottomSheetOnToggle");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_BottomSheetOnToggle$vars"))());
            vars.value.event_IsOpenInLocal = event_IsOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:LEm6hILXskiUHbSHDx2ygw:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.LEm6hILXskiUHbSHDx2ygw:Tz3I0pJnaqy4ncCaeiktEQ", "UBTConnect_Utils", "Handler_BottomSheetOnToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vwumyJnfhkm1xrkCaUE5Sg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Is close and
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ai4UZfhypkqx+sBeRW4hwA", callContext.id) && (!(vars.value.event_IsOpenInLocal) && model.variables.isOpenVar))) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:s_PNqs7jBkSyMiRqDEsilQ", callContext.id);
                        // Execute Action: Action_ResetAndCloseSheetState
                        return controller._action_ResetAndCloseSheetState$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HZ+4kLfidUqHXa1DnvwrPg", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DyEQAl0i9E2CpFvag84vFA", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:LEm6hILXskiUHbSHDx2ygw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:LEm6hILXskiUHbSHDx2ygw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_BottomSheetOnToggle$vars", [{
            name: "Event_IsOpen",
            attrName: "event_IsOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_InputEventSubmit$Action = function(event_SubmittedStringIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_InputEventSubmit");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_InputEventSubmit$vars"))());
            vars.value.event_SubmittedStringInLocal = event_SubmittedStringIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:6m0djpOhZECODHCvJGRryg:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.6m0djpOhZECODHCvJGRryg:2+89XT0qIpSYRAwc0pAibw", "UBTConnect_Utils", "Handler_InputEventSubmit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xgf+iMeMckucE+yQolKu9w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pkGQOr1D3U2tVFSGtxL2nA", callContext.id);
                // SearchTerm = Trim
                model.variables.searchTermVar = OS.BuiltinFunctions.trim(vars.value.event_SubmittedStringInLocal);
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:X20JTV+MA0K1VZkRbMlHcw", callContext.id) && ((model.variables.searchTermVar) !== ("")))) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HdMkmRdTO0yjg5pbvRYtNA", callContext.id);
                        // IsSearching = True
                        model.variables.isSearchingVar = true;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pkFewaMlWEW41bd3_LiUkA", callContext.id);
                        // SearchResultItemList = Skeleton_SearchResultItemList
                        model.variables.searchResultItemListVar = model.variables.skeleton_SearchResultItemListVar;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:UFWkH4BST02v4YZw72_POg", callContext.id);
                        // Refresh Query: GetAvailableMembers
                        var result = controller.getAvailableMembers$DataActRefresh(callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1_sKvRJEHEaJh0UQxN7PKQ", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gf4onGWZS0SCV4TmTxWY0Q", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:6m0djpOhZECODHCvJGRryg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:6m0djpOhZECODHCvJGRryg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_InputEventSubmit$vars", [{
            name: "Event_SubmittedString",
            attrName: "event_SubmittedStringInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_ResetLocalVariables$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_ResetLocalVariables");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:0ODbqzMx2Eay353Xgp7ckA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.0ODbqzMx2Eay353Xgp7ckA:c3nmdYd4mfaaL3VNZhEMqg", "UBTConnect_Utils", "Action_ResetLocalVariables", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Jxzfi0x4oEGZo7P1DWOagg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z6XFCyc2ZUm4RXQ3M6GYiQ", callContext.id);
                // SearchTerm = ""
                model.variables.searchTermVar = "";
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z6XFCyc2ZUm4RXQ3M6GYiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // IsSubmitting = False
                model.variables.isSubmittingVar = false;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z6XFCyc2ZUm4RXQ3M6GYiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // IsSearching = False
                model.variables.isSearchingVar = false;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z6XFCyc2ZUm4RXQ3M6GYiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // ShareId = NullIdentifier
                model.variables.shareIdVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z6XFCyc2ZUm4RXQ3M6GYiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // CurrentExternalShareIdOption = NullTextIdentifier
                model.variables.currentExternalShareIdOptionVar = OS.BuiltinFunctions.nullTextIdentifier();
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z6XFCyc2ZUm4RXQ3M6GYiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                // SharingRecentMemberId = ""
                model.variables.sharingRecentMemberIdVar = "";
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z6XFCyc2ZUm4RXQ3M6GYiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                // IsSearchStep = False
                model.variables.isSearchStepVar = false;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:c7H9lYzefkKq4RF51OPpZw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0ODbqzMx2Eay353Xgp7ckA", callContext.id);
            }

        };
        Controller.prototype._handler_SearchResultItemOnSelect$Action = function(in_IsSelectedIn, in_IsSharingWithIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SearchResultItemOnSelect");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_SearchResultItemOnSelect$vars"))());
            vars.value.in_IsSelectedInLocal = in_IsSelectedIn;
            vars.value.in_IsSharingWithInLocal = in_IsSharingWithIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Khpps99FoEG9gDMBjPNXFA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.Khpps99FoEG9gDMBjPNXFA:he6lmIG3JxbnlPXZLaCvmg", "UBTConnect_Utils", "Handler_SearchResultItemOnSelect", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pqOPSBm0rUOSHT4EMV7yEg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xP9vzAuffke8oLXYYN1jNw", callContext.id) && (vars.value.in_IsSelectedInLocal && (model.variables.selectedMembersVar.length >= 50)))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tiygFIn5+kyrI5ZUPsREvA", callContext.id);
                    // Execute Action: FeedbackMessage_AutoClose
                    UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "You can select up to 50 recipients only.", OS.BuiltinFunctions.textToInteger("Entities.UBT_MessageType.Error"), true, "", 0, false, callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lzCCrR4cfU+QpKUb72CIRQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:imS9i3La6UGFt7jF8SwNWA", callContext.id);
                    // Execute Action: ListIndexOf
                    listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.selectedMembersVar, function(p) {
                        return (p.searchResultAttr.idAttr === model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).searchResultAttr.idAttr);
                    }, callContext);

                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Qc9Z5WZKUEWBsJk0RCu6qQ", callContext.id);
                    // SearchResultItemList.Current.IsSelected = In_IsSelected
                    model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).isSelectedAttr = vars.value.in_IsSelectedInLocal;
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YQEj4Mdgok+C2DqJ3r44PQ", callContext.id) && model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).isSelectedAttr)) {
                        // In selected list?
                        if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FfWTEUZp5UGt4iVdUOHo5A", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Zbsyps4Wgkap2aVp4Wl4Cw", callContext.id);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IBooWflwo0a_8bXPGMZLXQ", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(model.variables.selectedMembersVar, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.searchResultItemListVar.getCurrent(callContext.iterationContext).searchResultAttr, new UBTConnect_UtilsModel.SelectableSearchResultListRec(), function(source, target) {
                                target.isSelectedAttr = true;
                                target.searchResultAttr.scoreAttr = source.scoreAttr;
                                target.searchResultAttr.idAttr = source.idAttr;
                                target.searchResultAttr.householderIdAttr = source.householderIdAttr;
                                target.searchResultAttr.nameAttr = source.nameAttr;
                                target.searchResultAttr.additionalInformationAttr = source.additionalInformationAttr;
                                target.searchResultAttr.locationAttr = source.locationAttr;
                                target.searchResultAttr.typeAttr = source.typeAttr;
                                target.searchResultAttr.recordDisabledAttr = source.recordDisabledAttr;
                                target.searchResultAttr.latitudeAttr = source.latitudeAttr;
                                target.searchResultAttr.longitudeAttr = source.longitudeAttr;
                                target.searchResultAttr.displayHouseholdNameAttr = source.displayHouseholdNameAttr;
                                target.searchResultAttr.displayAddressAttr = source.displayAddressAttr;
                                return target;
                            }), callContext);
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Zbsyps4Wgkap2aVp4Wl4Cw", callContext.id);
                        }

                    } else {
                        // In selected list?
                        if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bu7K_pEHnkiJjnoDtvTywQ", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wh8paxxppkGmCFzu0Ce5Pg", callContext.id);
                            // Execute Action: ListRemove
                            OS.SystemActions.listRemove(model.variables.selectedMembersVar, listIndexOfVar.value.positionOut, callContext);
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CruDXjrXbEe5bjFG2HDTSQ", callContext.id);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DwPPU8HVtkCJhDQHAFWQkQ", callContext.id);
                        }

                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Khpps99FoEG9gDMBjPNXFA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_SearchResultItemOnSelect$vars", [{
            name: "In_IsSelected",
            attrName: "in_IsSelectedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "In_IsSharingWith",
            attrName: "in_IsSharingWithInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_OnClickSend$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickSend");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_OnClickSend$vars"))());
            var listDistinctVar = new OS.DataTypes.VariableHolder();
            var listFilter_SearchResultsVar = new OS.DataTypes.VariableHolder();
            var listFilter_SelectedMembersVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listDistinctVar = listDistinctVar;
            varBag.listFilter_SearchResultsVar = listFilter_SearchResultsVar;
            varBag.listFilter_SelectedMembersVar = listFilter_SelectedMembersVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:zQlWvon3vkOBL6rMIzEIlA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.zQlWvon3vkOBL6rMIzEIlA:HPHOFNk3GX0mGVtXi3Prng", "UBTConnect_Utils", "Handler_OnClickSend", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qSAEI45JOUW5Z0UnJkP9PA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eQC94laNNUq512Q_7+6xJA", callContext.id);
                // Execute Action: ListFilter_SelectedMembers
                listFilter_SelectedMembersVar.value = OS.SystemActions.listFilter(model.variables.selectedMembersVar, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CboIbdq6fkqllrlFjh41nQ", callContext.id);
                // Execute Action: ListFilter_SearchResults
                listFilter_SearchResultsVar.value = OS.SystemActions.listFilter(model.variables.searchResultItemListVar, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MvX_9qXIGEK_rmAWuqWXYw", callContext.id);
                // SharingRecipientsIds = ListFilter_SelectedMembers.FilteredList
                vars.value.sharingRecipientsIdsVar = OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_SelectedMembersVar.value.filteredListOut, new OS.DataTypes.TextList(), function(source, target) {
                    target = source.searchResultAttr.householderIdAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bQSnD9v2lkuQRJ8JwPphUQ", callContext.id);
                // Execute Action: ListAppendAll_SelectedSearchResults
                OS.SystemActions.listAppendAll(vars.value.sharingRecipientsIdsVar, OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_SearchResultsVar.value.filteredListOut, new OS.DataTypes.TextList(), function(source, target) {
                    target = source.searchResultAttr.householderIdAttr;
                    return target;
                }), callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_JDANV2HR0+l6cPONSRB8g", callContext.id);
                // Execute Action: ListDistinct
                listDistinctVar.value = OS.SystemActions.listDistinct(vars.value.sharingRecipientsIdsVar, callContext);

                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Qww+27ru1kKPBLrliYkdNA", callContext.id);
                // Execute Action: Action_SubmitShare
                return controller._action_SubmitShare$Action(listDistinctVar.value.distinctListOut, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0IDBvlYrIUKossmeZ+8T1Q", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:zQlWvon3vkOBL6rMIzEIlA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:zQlWvon3vkOBL6rMIzEIlA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_OnClickSend$vars", [{
            name: "SharingRecipientsIds",
            attrName: "sharingRecipientsIdsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new OS.DataTypes.TextList();
            },
            complexType: OS.DataTypes.TextList
        }]);
        Controller.prototype._action_SubmitShare$Action = function(in_TargetMemberIdsIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SubmitShare");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_SubmitShare$vars"))());
            vars.value.in_TargetMemberIdsInLocal = in_TargetMemberIdsIn.clone();
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var communicationErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var cS_ShareObjectVar = new OS.DataTypes.VariableHolder();
            var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.notRegisteredVar = notRegisteredVar;
            varBag.communicationErrorVar = communicationErrorVar;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.communicationExceptionVar = communicationExceptionVar;
            varBag.cS_ShareObjectVar = cS_ShareObjectVar;
            varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:aiP22KFDJUy6b4ryG5EFKw:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.aiP22KFDJUy6b4ryG5EFKw:78fSOOQf9heVLXOpppFvKg", "UBTConnect_Utils", "Action_SubmitShare", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:trkqLr6Tuk6TNr4hsLix2Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ryvnq975JUOn9K+yeHGqGw", callContext.id);
                // Execute Action: Cache_UserInfo_Get
                model.flush();
                return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function(value) {
                    cache_UserInfo_GetVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rgxyT9jKNE+wEh3x_+Xu0w", callContext.id);
                    // IsSubmitting = True
                    model.variables.isSubmittingVar = true;
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sVLKbjlWykmNop_D+f5TmA", callContext.id);
                    // Execute Action: CS_ShareObject
                    model.flush();
                    return controller.cS_ShareObject$ServerAction(model.variables.in_ShareObjectTypeIdIn, model.variables.in_ShareableObjectIdIn, ((cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.firstNameAttr + " ") + cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.lastNameAttr), vars.value.in_TargetMemberIdsInLocal, model.variables.in_UpdateTypeIn, model.variables.in_UpdateDateIn, callContext).then(function(value) {
                        cS_ShareObjectVar.value = value;
                    });
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lHgiiZfwhUevb49+o1MboA", callContext.id);
                    // Execute Action: Action_ResetAndCloseSheetState
                    return controller._action_ResetAndCloseSheetState$Action(callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eD4Inccbj0arGq5Qz1bWDw", callContext.id);
                    // SubmitMessage = In_ShareObjectTypeId
                    vars.value.submitMessageVar = model.variables.in_ShareObjectTypeIdIn;
                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ta6G1jiK_kO+td4SNDDqnQ", callContext.id) && (model.variables.in_ShareObjectTypeIdIn === UBTConnect_UtilsModel.staticEntities.type_ShareObject.household))) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tgQF_3Co5UyeOIhXCZLruA", callContext.id);
                        // SubmitMessage = SubmitMessage + " profile"
                        vars.value.submitMessageVar = (vars.value.submitMessageVar + " profile");
                    }

                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:b0jKCN1IREWDJjZEI+aLUQ", callContext.id);
                    OS.FeedbackMessageService.showFeedbackMessage((vars.value.submitMessageVar + " has been shared."), /*Info*/ 0);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qsBTgCFHdkG0kfuqCVwVOw", callContext.id);
                    // IsSubmitting = False
                    model.variables.isSubmittingVar = false;
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qltyS+WrCUGU_+KC19sAog", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("ShareSheet.Action_SubmitShare", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: NotRegistered
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                    OS.Logger.error(null, ex);
                    notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Dw5YV3V2wU+rEwSM+IJg8w", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Tz_bF6dv5UGsyQbuY+O+dQ", callContext.id);
                        // IsSubmitting = False
                        model.variables.isSubmittingVar = false;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tBqf6HLdLkK8jBT7S6C20g", callContext.id);
                        // Raise Error: NotRegistered
                        throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: CommunicationError
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "UBTConnect_Utils.CommunicationError")) {
                    OS.Logger.error(null, ex);
                    communicationErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(communicationErrorVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:OmbFz+dNHUOBtXXA6lkv7A", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uBZI+QUVukKw9PddnGzC3Q", callContext.id);
                        // IsSubmitting = False
                        model.variables.isSubmittingVar = false;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tRScu9_JuUCAQR_WeYDoEw", callContext.id);
                        // Raise Error: CommunicationError
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.CommunicationError", communicationErrorVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: CommunicationException
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                    OS.Logger.error(null, ex);
                    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dWJU2jNetkew_H_mJx+eEA", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YFaLO2YRTEixPBl_DyI6Gg", callContext.id);
                        // IsSubmitting = False
                        model.variables.isSubmittingVar = false;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0FhDlf_dN0e9_+FKht5CDA", callContext.id);
                        // Raise Error: CommunicationError
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.CommunicationError", communicationExceptionVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yRh42JVn1E22jPakJbGeUg", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:luWrr+ErHkasAR6rWa0Vog", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("Share failed. Please try again.", /*Error*/ 3);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tVCRTWngc0imFT73Md9eWQ", callContext.id);
                        // IsSubmitting = False
                        model.variables.isSubmittingVar = false;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:smeiDJbnd0SMKziCWYlFZw", callContext.id);
                        return OS.Flow.returnAsync();

                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:aiP22KFDJUy6b4ryG5EFKw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:aiP22KFDJUy6b4ryG5EFKw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_SubmitShare$vars", [{
            name: "In_TargetMemberIds",
            attrName: "in_TargetMemberIdsInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new OS.DataTypes.TextList();
            },
            complexType: OS.DataTypes.TextList
        }, {
            name: "SubmitMessage",
            attrName: "submitMessageVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_ResetAndCloseSheetState$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_ResetAndCloseSheetState");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:M6Co2Wiie0adIXHXxjTulA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.M6Co2Wiie0adIXHXxjTulA:gMZIfzmYR6_+_IA5rQt9ww", "UBTConnect_Utils", "Action_ResetAndCloseSheetState", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+rl_ePIgq0iNpRziEWLFfw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mRtZQLJzyUyop5t9SNteJQ", callContext.id);
                // Trigger Event: Event_ClosedShareSheet
                return controller.event_ClosedShareSheet$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WMDog_P_h0iJIv8QZh5AZg", callContext.id);
                    // Execute Action: ListClear_SearchResultItemList
                    OS.SystemActions.listClear(model.variables.searchResultItemListVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MVBSv96mBU2n4CHW0j6Eiw", callContext.id);
                    // Execute Action: ListClear_SelectedMembers
                    OS.SystemActions.listClear(model.variables.selectedMembersVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7JIdGvxjnk2eOXJXzgxJyA", callContext.id);
                    // Execute Action: Action_ResetLocalVariables
                    controller._action_ResetLocalVariables$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gnXVUxuk9Uu9Hnn6c3Z4kg", callContext.id);
                    // Execute Action: Action_ScrollTop
                    controller._action_ScrollTop$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZZtu8faTKUep3gDumZkxfw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:M6Co2Wiie0adIXHXxjTulA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:M6Co2Wiie0adIXHXxjTulA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:tLVc3_3IREuN+GOT6FSXgQ:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.tLVc3_3IREuN+GOT6FSXgQ:a5li088JNnvBXg0wjqSXNw", "UBTConnect_Utils", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vBhokHadMUGw_V3wBMb12g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cLnl8J5Q3UGToeUnnc7Vaw", callContext.id);
                // Execute Action: Action_CreateSkeletonList
                controller._action_CreateSkeletonList$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RDXm+yumu0i8E8slPp0d1A", callContext.id);
                // RecentlyShared = Skeleton_SearchResultItemList
                model.variables.recentlySharedVar = model.variables.skeleton_SearchResultItemListVar;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_mLb_+FRaUO5ii9ruPikiQ", callContext.id);
                // HasNativeShare = AppManager_GetIsNative()
                model.variables.hasNativeShareVar = OutSystemsDebugger.handleFunctionCall(function() {
                    return UBT_AppManagerController.default.appManager_GetIsNative$Action(callContext).isNativeOut;
                }, OS.DataTypes.DataTypes.Boolean, callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GLvYZmh_9kC9JkCgG8UVOQ", callContext.id);
                // Execute Action: Action_SetExternalShareOptions
                return controller._action_SetExternalShareOptions$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kL_lch8TCkSzfnz6v5t1sw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:tLVc3_3IREuN+GOT6FSXgQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:tLVc3_3IREuN+GOT6FSXgQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OnBack$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnBack");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:3Jwa5kdF3U6pWwQ8xd9peA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.3Jwa5kdF3U6pWwQ8xd9peA:+iMLL3Woq+6lQMYRDdnU0w", "UBTConnect_Utils", "Handler_OnBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gFpNLwcdrEi3Cb+puwiMSg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9SZf8IZfJ0KPWpe0Txiwvg", callContext.id) && model.variables.isSearchStepVar)) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_LJ1dvSc1kOIF+n6cTKlFA", callContext.id);
                        // SearchTerm = ""
                        model.variables.searchTermVar = "";
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_LJ1dvSc1kOIF+n6cTKlFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // IsSearchStep = False
                        model.variables.isSearchStepVar = false;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_LJ1dvSc1kOIF+n6cTKlFA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                        // IsSearching = False
                        model.variables.isSearchingVar = false;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PWBc5iiEs0aFeCX5hZoMOg", callContext.id);
                        // Execute Action: Action_ScrollTop
                        controller._action_ScrollTop$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Lxjb1VyRl0ONp6Wg+L7FsQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8uwI2lS3ikaSy7zo8WDtLQ", callContext.id);
                        // Execute Action: Action_ResetAndCloseSheetState
                        return controller._action_ResetAndCloseSheetState$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ordiaarlGUKhRJeU2BEi0A", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:3Jwa5kdF3U6pWwQ8xd9peA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:3Jwa5kdF3U6pWwQ8xd9peA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_SearchResultItemOnClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SearchResultItemOnClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:hIOs6VUUmUCAp01v4RnxkQ:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.hIOs6VUUmUCAp01v4RnxkQ:BXo_URsd+GgkWFjtQAFWvw", "UBTConnect_Utils", "Handler_SearchResultItemOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:odov8aNXJU6l5u7+js_xpg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:obcCw93b4EGhh9UYblNOKA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:hIOs6VUUmUCAp01v4RnxkQ", callContext.id);
            }

        };
        Controller.prototype._handler_BottomSheetInitialized$Action = function(idIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_BottomSheetInitialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_BottomSheetInitialized$vars"))());
            vars.value.idInLocal = idIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:a_PQ8lxm+k2BJG1JcfL7hA:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.a_PQ8lxm+k2BJG1JcfL7hA:nixbVv1WhyIILAsLRiwCUw", "UBTConnect_Utils", "Handler_BottomSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3fzCI17RfUqcEOCePHFa+g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fjlmNOLZ3EqOzCeBZKR2HA", callContext.id);
                // BottomSheetId = Id
                model.variables.bottomSheetIdVar = vars.value.idInLocal;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uniRQPjCN0+a4nueW4UAUA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:a_PQ8lxm+k2BJG1JcfL7hA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Handler_BottomSheetInitialized$vars", [{
            name: "Id",
            attrName: "idInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_SetLocalIsOpen$Action = function(in_ValueIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetLocalIsOpen");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_SetLocalIsOpen$vars"))());
            vars.value.in_ValueInLocal = in_ValueIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:fHCf+933pUGiXiPKfFED6g:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg/ClientActions.fHCf+933pUGiXiPKfFED6g:_vR0tNon9HY_V0DxAmKAnw", "UBTConnect_Utils", "Action_SetLocalIsOpen", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:U7Zm30YwNEqYtJzLMOeV8g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WyDMbAfPrEm2bz9f4+4ipA", callContext.id);
                // IsOpen = In_Value
                model.variables.isOpenVar = vars.value.in_ValueInLocal;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MV9X2_KJKk6XlwfkGKxAkg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:fHCf+933pUGiXiPKfFED6g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Share.ShareSheet.Action_SetLocalIsOpen$vars", [{
            name: "In_Value",
            attrName: "in_ValueInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        Controller.prototype.onAfterFetch_GetAvailableMembers$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetAvailableMembers$Action, callContext);

        };
        Controller.prototype.screenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

        };
        Controller.prototype.handler_SelectedListItemOnClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SelectedListItemOnClick$Action, callContext);

        };
        Controller.prototype.handler_OnClickExternalOption$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickExternalOption$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetRecentlyShared$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetRecentlyShared$Action, callContext);

        };
        Controller.prototype.handler_SearchOnFocus$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SearchOnFocus$Action, callContext);

        };
        Controller.prototype.action_SetExternalShareOptions$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetExternalShareOptions$Action, callContext);

        };
        Controller.prototype.handler_OnClickRecentMember$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickRecentMember$Action, callContext);

        };
        Controller.prototype.action_CreateSkeletonList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_CreateSkeletonList$Action, callContext);

        };
        Controller.prototype.action_ScrollTop$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ScrollTop$Action, callContext);

        };
        Controller.prototype.handler_InputEventClearString$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_InputEventClearString$Action, callContext);

        };
        Controller.prototype.handler_BottomSheetOnToggle$Action = function(event_IsOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BottomSheetOnToggle$Action, callContext, event_IsOpenIn);

        };
        Controller.prototype.handler_InputEventSubmit$Action = function(event_SubmittedStringIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_InputEventSubmit$Action, callContext, event_SubmittedStringIn);

        };
        Controller.prototype.action_ResetLocalVariables$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ResetLocalVariables$Action, callContext);

        };
        Controller.prototype.handler_SearchResultItemOnSelect$Action = function(in_IsSelectedIn, in_IsSharingWithIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SearchResultItemOnSelect$Action, callContext, in_IsSelectedIn, in_IsSharingWithIn);

        };
        Controller.prototype.handler_OnClickSend$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickSend$Action, callContext);

        };
        Controller.prototype.action_SubmitShare$Action = function(in_TargetMemberIdsIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SubmitShare$Action, callContext, in_TargetMemberIdsIn);

        };
        Controller.prototype.action_ResetAndCloseSheetState$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ResetAndCloseSheetState$Action, callContext);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.handler_OnBack$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnBack$Action, callContext);

        };
        Controller.prototype.handler_SearchResultItemOnClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SearchResultItemOnClick$Action, callContext);

        };
        Controller.prototype.handler_BottomSheetInitialized$Action = function(idIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BottomSheetInitialized$Action, callContext, idIn);

        };
        Controller.prototype.action_SetLocalIsOpen$Action = function(in_ValueIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetLocalIsOpen$Action, callContext, in_ValueIn);

        };
        Controller.prototype.event_ClosedShareSheet$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:pDMoTWIiTkS1lgPdIBVaUg:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg:HjSruKDLIyQt9ROE1cl6OA", "UBTConnect_Utils", "CW_Share", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:q6Blk2Tc2ECMgVxP4O8rcg:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.q6Blk2Tc2ECMgVxP4O8rcg:cXg2X4fkmgVgaKizt_uXLg", "UBTConnect_Utils", "ShareSheet", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:q6Blk2Tc2ECMgVxP4O8rcg", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:pDMoTWIiTkS1lgPdIBVaUg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Share/ShareSheet On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Share/ShareSheet On Parameters Changed");
                return controller.screenEvent_OnParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});
define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.ScreenEvent_OnParametersChanged.DelaySetIsOpenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const sheetElement = document.getElementById($parameters.In_SheetElementId)?.querySelector(".osui-bottom-sheet");


        function transitionEndHandler() {
            $actions.Action_SetLocalIsOpen(false);
            if (sheetElement) {
                sheetElement.removeEventListener("transitionend", transitionEndHandler);
            }
        }

        if (sheetElement) {
            sheetElement.addEventListener("transitionend", transitionEndHandler);
        }
    };
});
define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.Handler_OnClickExternalOption.ExternalShareWithDelayJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const sheetElement = document.getElementById($parameters.In_SheetElementId)?.querySelector(".osui-bottom-sheet");

        function transitionEndHandler() {
            $actions.ExternalShare($parameters.In_ShareId, $parameters.In_ShareObjectTypeId, $parameters.In_ShareableObjectId, $parameters.In_ShareMessage, $parameters.In_ExternalShareOptionTypeId);
            if (sheetElement) {
                sheetElement.removeEventListener("transitionend", transitionEndHandler);
            }
        }

        if (sheetElement) {
            sheetElement.addEventListener("transitionend", transitionEndHandler);
        }
    };
});
define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$controller.Action_ScrollTop.ScrollToTopJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.In_BottomSheet) {
            let sheetContent = $parameters.In_BottomSheet.querySelector(".osui-bottom-sheet__content");
            if (sheetContent) {
                sheetContent.scrollTop = 0;
            }
        }
    };
});

define("UBTConnect_Utils.CW_Share.ShareSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "vK6PorpYrU2ylhwjtxYRHA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "rI+pxeHMH0e6HAzCYk3Crw": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetOpenVar.value;
            }
        },
        "RARj3A3trk+CHSn7fPsCAw": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "pjQ9Nv99KUOJhDU5uAMOgQ": {
            getter: function(varBag, idService) {
                return varBag.delaySetIsOpenJSResult.value;
            }
        },
        "_L4vGEjfW0GLdCrirNKXyQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "ttQuvpO5AUipC3_+a8soMg": {
            getter: function(varBag, idService) {
                return varBag.cS_CreateShareProfileLinkVar.value;
            }
        },
        "N4j479DMFEOcL+QWrOT1nA": {
            getter: function(varBag, idService) {
                return varBag.externalShareWithDelayJSResult.value;
            }
        },
        "33FX0+1YBUyz8apgK3XZ2g": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "zTy_qxG7VU2jxkvsLUIL2Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.externalAppPackageNameVar;
            }
        },
        "DbeiL5W7dkOYK1Hinnltvw": {
            getter: function(varBag, idService) {
                return varBag.canLaunchWithData_WhatsAppVar.value;
            }
        },
        "vhHbppIlcEmAyQTSaEQI8Q": {
            getter: function(varBag, idService) {
                return varBag.canLaunchWithData_SignalVar.value;
            }
        },
        "aQDfz+7RBEOHxE63q0rq2w": {
            getter: function(varBag, idService) {
                return varBag.canLaunchWithData_OutlookVar.value;
            }
        },
        "9PqBfslsFkOMen8UZ4RSUQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.numberOfSkeletonItemsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "8aMomijEcEKqVpkgPBak5g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.indexVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "+faCP1ks10WqhDo+SThrzA": {
            getter: function(varBag, idService) {
                return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
            }
        },
        "5EP7Gft+AEuPiaixZmCxxw": {
            getter: function(varBag, idService) {
                return varBag.scrollToTopJSResult.value;
            }
        },
        "vJWmPwD2R0W610nNd48FCg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IsOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "C4BJihDRTkixwoduASUWvg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_SubmittedStringInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "vZbgcDp7+026RbtEUTRD3w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsSelectedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0nEMj5ojx0W1dROq2lYxbw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsSharingWithInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "imS9i3La6UGFt7jF8SwNWA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "sd2kllA7NkK1DlvePt5klA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.sharingRecipientsIdsVar;
            }
        },
        "_JDANV2HR0+l6cPONSRB8g": {
            getter: function(varBag, idService) {
                return varBag.listDistinctVar.value;
            }
        },
        "CboIbdq6fkqllrlFjh41nQ": {
            getter: function(varBag, idService) {
                return varBag.listFilter_SearchResultsVar.value;
            }
        },
        "eQC94laNNUq512Q_7+6xJA": {
            getter: function(varBag, idService) {
                return varBag.listFilter_SelectedMembersVar.value;
            }
        },
        "pGgayR7PQkW8ftLcuy24bg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.submitMessageVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "5JOAbFpejkS1xYarVaKWcw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_TargetMemberIdsInLocal;
            }
        },
        "Dw5YV3V2wU+rEwSM+IJg8w": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "OmbFz+dNHUOBtXXA6lkv7A": {
            getter: function(varBag, idService) {
                return varBag.communicationErrorVar.value;
            }
        },
        "yRh42JVn1E22jPakJbGeUg": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "dWJU2jNetkew_H_mJx+eEA": {
            getter: function(varBag, idService) {
                return varBag.communicationExceptionVar.value;
            }
        },
        "sVLKbjlWykmNop_D+f5TmA": {
            getter: function(varBag, idService) {
                return varBag.cS_ShareObjectVar.value;
            }
        },
        "ryvnq975JUOn9K+yeHGqGw": {
            getter: function(varBag, idService) {
                return varBag.cache_UserInfo_GetVar.value;
            }
        },
        "+xOXnsmULUCCUl7US2uPuA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.idInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gM0OjpQsk0yHey3cOImjqg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ValueInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0TgHTfYsFU+UjgLlwtKkdQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "TExrt_05SkCFys+f1XeWdQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchTermVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "R+lRVIBPsEiIDqgcZOoKfA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isSearchingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "A8e4bRmWQkyyXqL+TFFTBw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isOpenVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "PNLHDMYtOE2gqPmvY9jndw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchResultItemListVar;
            }
        },
        "zX5JVU2qHE+T4KxLIleO5w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.skeleton_SearchResultItemListVar;
            }
        },
        "GbIJbvejhECVZ4s9YAQ7kA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedMembersVar;
            }
        },
        "CYPKsqh_CEaMnE5_u0fNDg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isSubmittingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "fweBpY6UgkSL7PzJcxm5Ug": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchPromtVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "_vyLfzUrO0mnvZoSKT2XcQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasNativeShareVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "gP9GfSEmH0OY3vUmVklwHg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.externalShareOptionsVar;
            }
        },
        "wQFdCK+hu0izzaJa20Y+Hg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "sMdwIEFo7EW+KfCQdlzLJA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentExternalShareIdOptionVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "G1Pyj+AfiU+m9EL_AHhcLw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sharingRecentMemberIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "+Ei_v3tWo0eXuxILKtm0Xw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.recentlySharedVar;
            }
        },
        "OSoPTOoCek+P9_xS8a465g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.recentlySharedLabelVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "2CfA6jbI2EidoHjeZASXtQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isSearchStepVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "c+OlDv04b0qmTuZM0zmTaQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.avatarImageSize_HorizontalListVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KWp1Xd8TL0i+8LaHoxSUbw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.avatarImageSize_VerticalListVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "xrFOXg7Kz0Cw28_I+D7zTw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.avatarSize_HorizontalListVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KmWHd5W1AEaMCtfs6nfoEw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsOpenIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "3Aydb6cbYkeznExT65begg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ShareObjectTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "kN00M1GBJ0qLKHh0dJz+Lg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ShareableObjectIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "+MzuGm_1cEmvrGzYrjl2jQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsLegacyIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZFjou+LWS0Czq0ahMsfHWQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_UpdateTypeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "OBabb8bIJU6wvECKgCpArQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_UpdateDateIn;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "mZ9+Lok6eUSFTXV95N0rKA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getAvailableMembersDataAct;
            }
        },
        "fL8udRtABEuUa_ZkgHakwg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getRecentlySharedDataAct;
            }
        },
        "1JW2sf1C1Ua5C4AysH90rA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomSheet"));
                })(varBag.model, idService);
            }
        },
        "UmGSMQdOt0eJ3DyPrhJB_A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "9t7ygL5Q+0OCtODoYSpVcw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "rGuADCKQ3US26qWVtXROvA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowInitialStep"));
                })(varBag.model, idService);
            }
        },
        "6yptoHDVSEGaqzTAMrczqw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "TgUCVltid0CNf2NwT9Hqfg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FirstStep"));
                })(varBag.model, idService);
            }
        },
        "dQL7ndv_9kiF52XCuupgiQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShareableObject"));
                })(varBag.model, idService);
            }
        },
        "JrmHpjHUcE6rUBaBRney7Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "O3QRTIgNh0q2fa5gw3svIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_ShareableObject"));
                })(varBag.model, idService);
            }
        },
        "m0lzETEjJES3PYbyCauFFg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DummySearchInput"));
                })(varBag.model, idService);
            }
        },
        "29VkgYXHAUGlaw88N9KDcg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Block_EmptySearch"));
                })(varBag.model, idService);
            }
        },
        "rHkYTs15VkCOw4SYQf18Kg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "BljNYyFHBEyD3HaUQchbNw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("NoRecentlySharedResults"));
                })(varBag.model, idService);
            }
        },
        "tCjhQojKy0GcbMTlF1K9Hw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("RecentlyShared_InitialStep"));
                })(varBag.model, idService);
            }
        },
        "caG58fDv10eUdAXxp0bYig": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "4sZxoJJ6J0OMKy3rOA7XNQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Section_RecentlyShared"));
                })(varBag.model, idService);
            }
        },
        "MDyCroyInkO0mTlpZ3DBlg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Title"));
                })(varBag.model, idService);
            }
        },
        "tby1U8pb5UykjveWNrSN5Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        },
        "sZXkK45wKk+qfj9GVpxOeA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Div_RecentlyShared"));
                })(varBag.model, idService);
            }
        },
        "XxN8eg05lECqz2A_AjapHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "ND+SntCC4UONzaai+TxfYA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "5yANKjwfx0OjfV222TymVw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Text"));
                })(varBag.model, idService);
            }
        },
        "mVpYsxvKV0ylUKj_DVCqcw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowExternalShare"));
                })(varBag.model, idService);
            }
        },
        "Ha15I6gjDkWcaQrrX606vA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Section_ExternalShare"));
                })(varBag.model, idService);
            }
        },
        "fLzsuLzeo0WhIE30+eS9Lg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Title"));
                })(varBag.model, idService);
            }
        },
        "ZI9HHhB06U+2_YJHhd4Fzw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        },
        "gpH_QSYHBEyuFZLeYFREEQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Div_ShareTo"));
                })(varBag.model, idService);
            }
        },
        "kP4BKN6NwUW22v0A2ButSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "q4uiqh1nXUWIpHI22rifVA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "bSv2IcRCuk+DSeRkf59Sgg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Text"));
                })(varBag.model, idService);
            }
        },
        "bN6QOoVIFU6ptLz6sqC4sg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowSearchStep"));
                })(varBag.model, idService);
            }
        },
        "bCRYXFRjEEqJNLcp8WJSHA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "tS7lbv5DtEyxijYn7J5T7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SearchInput"));
                })(varBag.model, idService);
            }
        },
        "koRnnbGshUmN_R8Cu0M+pg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasSelectedMembers"));
                })(varBag.model, idService);
            }
        },
        "fyv3+uhEHUuFyTbCtQ45zg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SelectedMembersList"));
                })(varBag.model, idService);
            }
        },
        "4G1X6OQSxEmGtgXoW4noig": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Title"));
                })(varBag.model, idService);
            }
        },
        "P7jDsmFZIEKKzMwVA8qfDg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "LKfHiydsW0SScBvidNixjA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        },
        "cX0K5AIleEumPENzjAkF8Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Div_SelectedMembers"));
                })(varBag.model, idService);
            }
        },
        "_P60qnFSAUiNRb7PiLPMjQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "KmTPEv3JoUmbp17GkbVfqQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "4sh62HGSOU+BlC4SaBVpwg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Text"));
                })(varBag.model, idService);
            }
        },
        "sgzXe5wkrEGbj4vbRnXTqg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Div_SearchList"));
                })(varBag.model, idService);
            }
        },
        "Mhm2CxVPbkyv0pj3v61uuA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListEmpty"));
                })(varBag.model, idService);
            }
        },
        "JoekKFiw40OFTu7UZ0Yi8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Div_EmptySearchResults"));
                })(varBag.model, idService);
            }
        },
        "6Mt6ix5JFkaRP4kItJCTGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TitlePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "8smHUXwFWUGGI_aRS0mGSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TextPlaceholder"));
                })(varBag.model, idService);
            }
        },
        "tdwyvFvG2kuGgE5uxExsTQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("EmptyAndShowingRecent"));
                })(varBag.model, idService);
            }
        },
        "oR86X1G5HEe87RarKomNvw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "AobImJqmREaH8w74sItLIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "nCM9VYAMu0m4eVMpAHJT3g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Actions"));
                })(varBag.model, idService);
            }
        },
        "vDPddBDi7UKMmDm6FqImHw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsSelected"));
                })(varBag.model, idService);
            }
        },
        "rEm+qm+27EWcM1q9fMD9IA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Footer"));
                })(varBag.model, idService);
            }
        },
        "fGB9LC0KKESFWZJAM6NTmA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "R71WM5OOwUyEW1eTJn4H4w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowSubmit"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});