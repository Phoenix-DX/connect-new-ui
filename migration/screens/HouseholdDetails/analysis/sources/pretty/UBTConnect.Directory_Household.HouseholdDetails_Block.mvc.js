define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTConnect.controller", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$model", "UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$model", "UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList", "UBTConnect.model$HouseholdPreviewStructureRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.model$UI_HouseholdMemberList", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnect.model$Member_OptionalRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$GetHasPhotobookAccess", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "UBTConnect.controller$GetSkeleton_UI_HouseholdDetails", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.controller$GetUserInformation_Wrapper"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTConnectController, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel, UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvcModel, UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvcModel, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvcModel, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel, UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_mvcModel, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel) {
    var OS = OutSystems.Internal;

    var GetHousehold_CoordinatesDataActRec = (function(_super) {
        __extends(GetHousehold_CoordinatesDataActRec, _super);

        function GetHousehold_CoordinatesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetHousehold_CoordinatesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("HouseholdCoordinates", "householdCoordinatesOut", "HouseholdCoordinates", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CoordinatesRec());
                }, true, APIDomain_Directory_ISModel.Directory_CoordinatesRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetHousehold_CoordinatesDataActRec.fromStructure = function(str) {
            return new GetHousehold_CoordinatesDataActRec(new GetHousehold_CoordinatesDataActRec.RecordClass({
                householdCoordinatesOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetHousehold_CoordinatesDataActRec.init();
        return GetHousehold_CoordinatesDataActRec;
    })(OS.Model.DataSourceRecord);
    var GetHouseholdDataActRec = (function(_super) {
        __extends(GetHouseholdDataActRec, _super);

        function GetHouseholdDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetHouseholdDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Household", "householdOut", "Household", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec());
                }, true, Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec),
                this.attr("Out_HouseholdMembers", "out_HouseholdMembersOut", "Out_HouseholdMembers", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdMemberList());
                }, true, UBTConnectModel.UI_HouseholdMemberList),
                this.attr("Out_NonHouseholdMembers", "out_NonHouseholdMembersOut", "Out_NonHouseholdMembers", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdMemberList());
                }, true, UBTConnectModel.UI_HouseholdMemberList),
                this.attr("isVisible", "isVisibleOut", "isVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetHouseholdDataActRec.init();
        return GetHouseholdDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("TagsList", "tagsListVar", "TagsList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TagList());
                }, false, UBTConnectModel.TagList),
                this.attr("TagsList_SelectedTag", "tagsList_SelectedTagVar", "TagsList_SelectedTag", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("TagsList_Id_About", "tagsList_Id_AboutVar", "TagsList_Id_About", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "About";
                }, false),
                this.attr("TagsList_Id_Photos", "tagsList_Id_PhotosVar", "TagsList_Id_Photos", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "Photos";
                }, false),
                this.attr("TEMP_TimelineImages", "tEMP_TimelineImagesVar", "TEMP_TimelineImages", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdTimelineImagesList());
                }, false, UBTConnectModel.UI_HouseholdTimelineImagesList),
                this.attr("LocalIsBookmarked", "localIsBookmarkedVar", "LocalIsBookmarked", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("UserAge_Visibility", "userAge_VisibilityVar", "UserAge_Visibility", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsSkeletonOnly", "isSkeletonOnlyVar", "IsSkeletonOnly", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("HideActions_PhotoBook", "hideActions_PhotoBookVar", "HideActions_PhotoBook", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsShareOpen", "isShareOpenVar", "IsShareOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("HouseholdId", "householdIdIn", "HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isEnabled", "isEnabledIn", "isEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Preview", "previewIn", "Preview", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.HouseholdPreviewStructureRec());
                }, false, UBTConnectModel.HouseholdPreviewStructureRec),
                this.attr("_previewInDataFetchStatus", "_previewInDataFetchStatus", "_previewInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ShowKebabMenu", "in_ShowKebabMenuIn", "In_ShowKebabMenu", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_ShowKebabMenuInDataFetchStatus", "_in_ShowKebabMenuInDataFetchStatus", "_in_ShowKebabMenuInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_CheckVisibility", "in_CheckVisibilityIn", "In_CheckVisibility", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_CheckVisibilityInDataFetchStatus", "_in_CheckVisibilityInDataFetchStatus", "_in_CheckVisibilityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsSkeletonOnly", "in_IsSkeletonOnlyIn", "In_IsSkeletonOnly", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsSkeletonOnlyInDataFetchStatus", "_in_IsSkeletonOnlyInDataFetchStatus", "_in_IsSkeletonOnlyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HideActions", "in_HideActionsIn", "In_HideActions", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_HideActionsInDataFetchStatus", "_in_HideActionsInDataFetchStatus", "_in_HideActionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetHousehold_Coordinates", "getHousehold_CoordinatesDataAct", "getHousehold_CoordinatesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetHousehold_CoordinatesDataActRec());
                }, true, GetHousehold_CoordinatesDataActRec),
                this.attr("GetHousehold", "getHouseholdDataAct", "getHouseholdDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetHouseholdDataActRec());
                }, true, GetHouseholdDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((((((((((((((UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_ComingSoon_mvcModel.hasValidationWidgets) || UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("HouseholdId" in inputs) {
                this.variables.householdIdIn = inputs.HouseholdId;
                if ("_householdIdInDataFetchStatus" in inputs) {
                    this.variables._householdIdInDataFetchStatus = inputs._householdIdInDataFetchStatus;
                }

            }

            if ("isEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.isEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("Preview" in inputs) {
                this.variables.previewIn = inputs.Preview;
                if ("_previewInDataFetchStatus" in inputs) {
                    this.variables._previewInDataFetchStatus = inputs._previewInDataFetchStatus;
                }

            }

            if ("In_ShowKebabMenu" in inputs) {
                this.variables.in_ShowKebabMenuIn = inputs.In_ShowKebabMenu;
                if ("_in_ShowKebabMenuInDataFetchStatus" in inputs) {
                    this.variables._in_ShowKebabMenuInDataFetchStatus = inputs._in_ShowKebabMenuInDataFetchStatus;
                }

            }

            if ("In_CheckVisibility" in inputs) {
                this.variables.in_CheckVisibilityIn = inputs.In_CheckVisibility;
                if ("_in_CheckVisibilityInDataFetchStatus" in inputs) {
                    this.variables._in_CheckVisibilityInDataFetchStatus = inputs._in_CheckVisibilityInDataFetchStatus;
                }

            }

            if ("In_IsSkeletonOnly" in inputs) {
                this.variables.in_IsSkeletonOnlyIn = inputs.In_IsSkeletonOnly;
                if ("_in_IsSkeletonOnlyInDataFetchStatus" in inputs) {
                    this.variables._in_IsSkeletonOnlyInDataFetchStatus = inputs._in_IsSkeletonOnlyInDataFetchStatus;
                }

            }

            if ("In_HideActions" in inputs) {
                this.variables.in_HideActionsIn = inputs.In_HideActions;
                if ("_in_HideActionsInDataFetchStatus" in inputs) {
                    this.variables._in_HideActionsInDataFetchStatus = inputs._in_HideActionsInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Household.HouseholdDetails_Block");
});
define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$model", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", "UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$view", "UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList", "UBTConnect.model$HouseholdPreviewStructureRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.model$UI_HouseholdMemberList", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnect.model$Member_OptionalRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$GetHasPhotobookAccess", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "UBTConnect.controller$GetSkeleton_UI_HouseholdDetails", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.controller$GetUserInformation_Wrapper"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, React, OSView, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_model, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller, UBTConnectClientVariables, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view) {
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
        View.displayName = "Directory_Household.HouseholdDetails_Block";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, {
                inputs: {
                    HideActions: (model.variables.in_HideActionsIn && (model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar)),
                    _hideActionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HideActionsInDataFetchStatus)
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
                    name: "DirectoryDetailScreenContent",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_DetailCard: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: !(model.variables.getHouseholdDataAct.isDataFetchedAttr)
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
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, {
                                        inputs: {
                                            In_IsBookmarked: model.variables.localIsBookmarkedVar,
                                            In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.detail
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
                                            name: "ImageCard_LazyLoading",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            lazyImage_Placeholder: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                    inputs: {
                                                        HasErrorMessage: true,
                                                        ImageSize: model.getCachedValue(idService.getId("O5yIa3QCCk2I__k+mNrypQ.ImageSize"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
                                                                return rec;
                                                            }();
                                                        }),
                                                        EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
                                                        EntityId: model.getCachedValue(idService.getId("O5yIa3QCCk2I__k+mNrypQ.EntityId"), function() {
                                                            return ((((!(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isHiddenAttr) && !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr)) && !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr))) ? (OS.BuiltinFunctions.longIntegerToText(model.variables.householdIdIn)) : (""));
                                                        }, function() {
                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isHiddenAttr;
                                                        }, function() {
                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr;
                                                        }, function() {
                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr;
                                                        }, function() {
                                                            return model.variables.householdIdIn;
                                                        }),
                                                        _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr, model.variables._householdIdInDataFetchStatus)
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
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            }),
                                            placeholder_ImageTag: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Placeholder, {
                                                    align: /*Default*/ 0,
                                                    content: _this.props.placeholders.placeholder_CarouselTag,
                                                    _idProps: {
                                                        service: idService,
                                                        name: "Placeholder_CarouselTag"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            }),
                                            avatarList: PlaceholderContent.Empty,
                                            placeholder_Content: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
                                                    inputs: {
                                                        In_Title: model.getCachedValue(idService.getId("FNDw001DLkeeUvSkEHuueQ.In_Title"), function() {
                                                            return (((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar)) ? (model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr) : ("Household gallery"));
                                                        }, function() {
                                                            return model.variables.tagsList_SelectedTagVar;
                                                        }, function() {
                                                            return model.variables.tagsList_Id_AboutVar;
                                                        }, function() {
                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr;
                                                        }),
                                                        _in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr),
                                                        In_Subtitle: model.getCachedValue(idService.getId("FNDw001DLkeeUvSkEHuueQ.In_Subtitle"), function() {
                                                            return (((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar)) ? (model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.familyNamesAttr) : (""));
                                                        }, function() {
                                                            return model.variables.tagsList_SelectedTagVar;
                                                        }, function() {
                                                            return model.variables.tagsList_Id_AboutVar;
                                                        }, function() {
                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.familyNamesAttr;
                                                        }),
                                                        _in_SubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr),
                                                        In_ShowSubtitle: ((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar) && ((model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.familyNamesAttr) !== (""))),
                                                        _in_ShowSubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr)
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
                                                        uuid: "5",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        placeholder_TopSectionContent: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                inputs: {
                                                                    Options: model.getCachedValue(idService.getId("N3l44YFZI0mzHQaJuFuQtg.Options"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                            rec.displayOptionsAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                                rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                                                rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                                                                rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.spaceBetween;
                                                                                rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.row;
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
                                                                    alias: "6"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    content: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Container, {
                                                                            align: /*Default*/ 0,
                                                                            animate: false,
                                                                            visible: true,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "7"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        }, React.createElement(UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, {
                                                                            inputs: {
                                                                                isEnabled: model.variables.isEnabledIn,
                                                                                _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                                                In_IsMandatorySelection: true,
                                                                                In_IsSingleSelection: true,
                                                                                In_TagToggleList: model.variables.tagsListVar
                                                                            },
                                                                            events: {
                                                                                _handleError: function(ex) {
                                                                                    controller.handleError(ex);
                                                                                },
                                                                                changed$Action: function(updatedTagListIn) {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/HorizontalTagList Changed");
                                                                                        controller.onChangeTag$Action(updatedTagListIn, controller.callContext(eventHandlerContext));
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
                                                                                uuid: "8",
                                                                                alias: "7"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        })), React.createElement(OSWidgets.Container, {
                                                                            align: /*Default*/ 0,
                                                                            animate: true,
                                                                            visible: model.variables.in_ShowKebabMenuIn,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "9"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowKebabMenuInDataFetchStatus)
                                                                        }, React.createElement(UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_view, {
                                                                            inputs: {
                                                                                isEnable: model.variables.isEnabledIn,
                                                                                _isEnableInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                                                In_DisableShare: !(model.variables.getHouseholdDataAct.isVisibleOut),
                                                                                _in_DisableShareInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr)
                                                                            },
                                                                            events: {
                                                                                _handleError: function(ex) {
                                                                                    controller.handleError(ex);
                                                                                },
                                                                                edit$Action: function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/KebabButtonMenu Edit");
                                                                                        controller.handler_OnMenuEdit$Action(controller.callContext(eventHandlerContext));
                                                                                    }, function() {
                                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                                    });

                                                                                    ;
                                                                                },
                                                                                share$Action: function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/KebabButtonMenu Share");
                                                                                        controller.handler_OnShare$Action(controller.callContext(eventHandlerContext));
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
                                                                                alias: "8"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }))];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.isVisibleOut), asPrimitiveValue(model.variables.in_ShowKebabMenuIn), asPrimitiveValue(model.variables.tagsListVar), asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._in_ShowKebabMenuInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isEnabledIn)]
                                                            }), $if(!(model.variables.getHouseholdDataAct.isVisibleOut), false, this, function() {
                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                    inputs: {
                                                                        Options: model.getCachedValue(idService.getId("R4+YImbsUUSRHzdz679wcg.Options"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                rec.marginSizeAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                    rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                                        uuid: "11",
                                                                        alias: "9"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    placeholders: {
                                                                        content: new PlaceholderContent(function() {
                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                                inputs: {
                                                                                    SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                                                                                    TextOptions: model.getCachedValue(idService.getId("wpq61uaUq02mzH4OHTQ0gQ.TextOptions"), function() {
                                                                                        return function() {
                                                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.info;
                                                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
                                                                                            return rec;
                                                                                        }();
                                                                                    }),
                                                                                    Text: "Your profile is private and only visible to you"
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
                                                                                    uuid: "12",
                                                                                    alias: "10"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                placeholders: {
                                                                                    icon: new PlaceholderContent(function() {
                                                                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                            inputs: {
                                                                                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.lock,
                                                                                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
                                                                                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.info
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
                                                                                                alias: "11"
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
                                                            }, function() {
                                                                return [];
                                                            })];
                                                        }),
                                                        placeholder_BottomSectionContent: new PlaceholderContent(function() {
                                                            return [$if((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar), false, this, function() {
                                                                return [React.createElement(OSWidgets.Container, {
                                                                    align: /*Default*/ 0,
                                                                    animate: true,
                                                                    style: "householdAddress",
                                                                    visible: (((!(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isHiddenAttr) && !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr)) && !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr)) && ((model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.addressAttr) !== (""))),
                                                                    _idProps: {
                                                                        service: idService,
                                                                        name: "AddressSection"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr)
                                                                }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                    inputs: {
                                                                        Options: model.getCachedValue(idService.getId("Address.Options"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                rec.marginSizeAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                    rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                    return rec;
                                                                                }();
                                                                                rec.displayOptionsAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
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
                                                                        name: "Address",
                                                                        alias: "12"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    placeholders: {
                                                                        content: new PlaceholderContent(function() {
                                                                            return [React.createElement(UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, {
                                                                                inputs: {
                                                                                    IconVisible: true,
                                                                                    IsEnabled: model.variables.isEnabledIn,
                                                                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                                                    In_Address: model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.addressAttr,
                                                                                    _in_AddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr),
                                                                                    In_Coordinates: model.variables.getHousehold_CoordinatesDataAct.householdCoordinatesOut,
                                                                                    _in_CoordinatesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHousehold_CoordinatesDataAct.dataFetchStatusAttr)
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
                                                                                    uuid: "16",
                                                                                    alias: "13"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                _dependencies: []
                                                                            })];
                                                                        })
                                                                    },
                                                                    _dependencies: [asPrimitiveValue(model.variables.getHousehold_CoordinatesDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getHousehold_CoordinatesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isEnabledIn)]
                                                                })), React.createElement(OSWidgets.Container, {
                                                                    align: /*Default*/ 0,
                                                                    animate: false,
                                                                    style: "full-width padding-top-s",
                                                                    visible: true,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        name: "SeeMoreSection"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                }, React.createElement(UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_view, {
                                                                    inputs: {
                                                                        isEnabled: model.variables.isEnabledIn,
                                                                        _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                                        StartExpanded: false
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
                                                                        uuid: "18",
                                                                        alias: "14"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    placeholders: {
                                                                        content: new PlaceholderContent(function() {
                                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                inputs: {
                                                                                    ExtendedClasses: "see-more-locality-cont",
                                                                                    Options: model.getCachedValue(idService.getId("9zpoKmMPwUCHX0O88v3NBA.Options"), function() {
                                                                                        return function() {
                                                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                            rec.paddingSizeAttr = function() {
                                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                return rec;
                                                                                            }();
                                                                                            rec.borderOptionsAttr = function() {
                                                                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
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
                                                                                    uuid: "19",
                                                                                    alias: "15"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                placeholders: {
                                                                                    content: new PlaceholderContent(function() {
                                                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                                                            inputs: {
                                                                                                ColumnOptions: model.getCachedValue(idService.getId("EKoN7h9qvEyhe0zTwqr0Qg.ColumnOptions"), function() {
                                                                                                    return function() {
                                                                                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
                                                                                                        rec.columnSizesAttr = function() {
                                                                                                            var rec = new UBTConnectModel.IntegerIntegerIntegerRecord();
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
                                                                                                uuid: "20",
                                                                                                alias: "16"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            placeholders: {
                                                                                                left: new PlaceholderContent(function() {
                                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                                                        inputs: {
                                                                                                            SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                                                                                                            Text: "Locality: ",
                                                                                                            TextOptions: model.getCachedValue(idService.getId("J2OskS3AnUCcL1umhG9W5w.TextOptions"), function() {
                                                                                                                return function() {
                                                                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
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
                                                                                                            uuid: "21",
                                                                                                            alias: "17"
                                                                                                        },
                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                        placeholders: {
                                                                                                            icon: new PlaceholderContent(function() {
                                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                    inputs: {
                                                                                                                        In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral8,
                                                                                                                        In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
                                                                                                                        In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.homePIn
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
                                                                                                                        uuid: "22",
                                                                                                                        alias: "18"
                                                                                                                    },
                                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                    _dependencies: []
                                                                                                                })];
                                                                                                            })
                                                                                                        },
                                                                                                        _dependencies: []
                                                                                                    })];
                                                                                                }),
                                                                                                right: new PlaceholderContent(function() {
                                                                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                                        inputs: {
                                                                                                            Options: model.getCachedValue(idService.getId("Locality.Options"), function() {
                                                                                                                return function() {
                                                                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                                                    rec.marginSizeAttr = function() {
                                                                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                                        rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                                        return rec;
                                                                                                                    }();
                                                                                                                    rec.displayOptionsAttr = function() {
                                                                                                                        var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                                                                        return rec;
                                                                                                                    }();
                                                                                                                    return rec;
                                                                                                                }();
                                                                                                            })
                                                                                                        },
                                                                                                        events: {
                                                                                                            _handleError: function(ex) {
                                                                                                                controller.handleError(ex);
                                                                                                            },
                                                                                                            clicked$Action: function() {
                                                                                                                var eventHandlerContext = callContext.clone();
                                                                                                                return OS.Flow.tryFinally(function() {
                                                                                                                    var varBag = {};
                                                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                                                                                                                    controller.onClick_NavigateToLocality$Action(controller.callContext(eventHandlerContext));
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
                                                                                                            name: "Locality",
                                                                                                            alias: "19"
                                                                                                        },
                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                        placeholders: {
                                                                                                            content: new PlaceholderContent(function() {
                                                                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                                                                    inputs: {
                                                                                                                        In_TextOptions: model.getCachedValue(idService.getId("Qq74YzEDSkqv5tMT1AGzvw.In_TextOptions"), function() {
                                                                                                                            return function() {
                                                                                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
                                                                                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                                                                rec.isUnderlinedAttr = true;
                                                                                                                                return rec;
                                                                                                                            }();
                                                                                                                        }),
                                                                                                                        ExtendedClasses: model.getCachedValue(idService.getId("Qq74YzEDSkqv5tMT1AGzvw.ExtendedClasses"), function() {
                                                                                                                            return (((model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr || model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr)) ? ("link-disabled-view") : (""));
                                                                                                                        }, function() {
                                                                                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr;
                                                                                                                        }, function() {
                                                                                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr;
                                                                                                                        }),
                                                                                                                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr),
                                                                                                                        In_Text: model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr,
                                                                                                                        _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr)
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
                                                                                                                        alias: "20"
                                                                                                                    },
                                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                    _dependencies: []
                                                                                                                })];
                                                                                                            })
                                                                                                        },
                                                                                                        _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr)]
                                                                                                    })];
                                                                                                })
                                                                                            },
                                                                                            _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr)]
                                                                                        })];
                                                                                    })
                                                                                },
                                                                                _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr)]
                                                                            }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                inputs: {
                                                                                    Options: model.getCachedValue(idService.getId("ygkeeNrQLkSF7y7NdPzNkQ.Options"), function() {
                                                                                        return function() {
                                                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                            rec.paddingSizeAttr = function() {
                                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                                                    uuid: "25",
                                                                                    alias: "21"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                placeholders: {
                                                                                    content: new PlaceholderContent(function() {
                                                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                                                            inputs: {
                                                                                                ColumnOptions: model.getCachedValue(idService.getId("ULsL_CE0cEyR17dplbdVyw.ColumnOptions"), function() {
                                                                                                    return function() {
                                                                                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
                                                                                                        rec.columnSizesAttr = function() {
                                                                                                            var rec = new UBTConnectModel.IntegerIntegerIntegerRecord();
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
                                                                                                uuid: "26",
                                                                                                alias: "22"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            placeholders: {
                                                                                                left: new PlaceholderContent(function() {
                                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                                                        inputs: {
                                                                                                            Text: "Supper Meeting: ",
                                                                                                            SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                                                                                                            TextOptions: model.getCachedValue(idService.getId("ipC+1khrBU+VJtSzQZxEVQ.TextOptions"), function() {
                                                                                                                return function() {
                                                                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
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
                                                                                                            uuid: "27",
                                                                                                            alias: "23"
                                                                                                        },
                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                        placeholders: {
                                                                                                            icon: new PlaceholderContent(function() {
                                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                    inputs: {
                                                                                                                        In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
                                                                                                                        In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral8,
                                                                                                                        In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.cottage
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
                                                                                                                        uuid: "28",
                                                                                                                        alias: "24"
                                                                                                                    },
                                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                    _dependencies: []
                                                                                                                })];
                                                                                                            })
                                                                                                        },
                                                                                                        _dependencies: []
                                                                                                    })];
                                                                                                }),
                                                                                                right: new PlaceholderContent(function() {
                                                                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                                        inputs: {
                                                                                                            Options: model.getCachedValue(idService.getId("SupperMeeting.Options"), function() {
                                                                                                                return function() {
                                                                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                                                    rec.marginSizeAttr = function() {
                                                                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                                        rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                                        return rec;
                                                                                                                    }();
                                                                                                                    rec.displayOptionsAttr = function() {
                                                                                                                        var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                                                                        return rec;
                                                                                                                    }();
                                                                                                                    return rec;
                                                                                                                }();
                                                                                                            })
                                                                                                        },
                                                                                                        events: {
                                                                                                            _handleError: function(ex) {
                                                                                                                controller.handleError(ex);
                                                                                                            },
                                                                                                            clicked$Action: function() {
                                                                                                                var eventHandlerContext = callContext.clone();
                                                                                                                return OS.Flow.tryFinally(function() {
                                                                                                                    var varBag = {};
                                                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                                                                                                                    controller.onClick_NavigateToSupperMeeting$Action(controller.callContext(eventHandlerContext));
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
                                                                                                            name: "SupperMeeting",
                                                                                                            alias: "25"
                                                                                                        },
                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                        placeholders: {
                                                                                                            content: new PlaceholderContent(function() {
                                                                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                                                                    inputs: {
                                                                                                                        In_Text: model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.supperMeetingNameAttr,
                                                                                                                        _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr),
                                                                                                                        In_TextOptions: model.getCachedValue(idService.getId("rmZRjZ1W2EGuRnung+VM5A.In_TextOptions"), function() {
                                                                                                                            return function() {
                                                                                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
                                                                                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                                                                rec.isUnderlinedAttr = true;
                                                                                                                                return rec;
                                                                                                                            }();
                                                                                                                        }),
                                                                                                                        ExtendedClasses: model.getCachedValue(idService.getId("rmZRjZ1W2EGuRnung+VM5A.ExtendedClasses"), function() {
                                                                                                                            return (((model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr || model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr)) ? ("link-disabled-view") : (""));
                                                                                                                        }, function() {
                                                                                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr;
                                                                                                                        }, function() {
                                                                                                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr;
                                                                                                                        }),
                                                                                                                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr)
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
                                                                                                                        alias: "26"
                                                                                                                    },
                                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                    _dependencies: []
                                                                                                                })];
                                                                                                            })
                                                                                                        },
                                                                                                        _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.supperMeetingNameAttr)]
                                                                                                    })];
                                                                                                })
                                                                                            },
                                                                                            _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.supperMeetingNameAttr)]
                                                                                        })];
                                                                                    })
                                                                                },
                                                                                _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.supperMeetingNameAttr)]
                                                                            })];
                                                                        })
                                                                    },
                                                                    _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.supperMeetingNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr)]
                                                                }))];
                                                            }, function() {
                                                                return [];
                                                            }), $if((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_PhotosVar), false, this, function() {
                                                                return [React.createElement(OSWidgets.Container, {
                                                                    align: /*Default*/ 0,
                                                                    animate: false,
                                                                    visible: true,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        name: "Gallery"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                }, React.createElement(UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_view, {
                                                                    inputs: {
                                                                        In_HouseholdTimelineImages: model.variables.tEMP_TimelineImagesVar
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        },
                                                                        event_DateSelected$Action: function(dateIn) {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household_Blocks/HouseholdDetails_TimelinePhoto_List Event_DateSelected");
                                                                                controller.handler_TimelinePhotoSelected$Action(dateIn, controller.callContext(eventHandlerContext));
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
                                                                        uuid: "32",
                                                                        alias: "27"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })), $if(OutSystemsDebugger.handleFunctionCall(function() {
                                                                    return UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnectModel.staticEntities.launchDarkly_FF.mobileDirectoryHouseholdGallery, callContext).hasAccessOut;
                                                                }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                                                    return [];
                                                                }, function() {
                                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                        inputs: {
                                                                            Options: model.getCachedValue(idService.getId("BOpKBfXXrkGzshaxkQDDOA.Options"), function() {
                                                                                return function() {
                                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                    rec.borderOptionsAttr = function() {
                                                                                        var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
                                                                                        rec.sizeAttr = function() {
                                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                            return rec;
                                                                                        }();
                                                                                        rec.radiusAttr = function() {
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
                                                                            _handleError: function(ex) {
                                                                                controller.handleError(ex);
                                                                            }
                                                                        },
                                                                        _validationProps: {
                                                                            validationService: validationService
                                                                        },
                                                                        _idProps: {
                                                                            service: idService,
                                                                            uuid: "33",
                                                                            alias: "28"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        placeholders: {
                                                                            content: new PlaceholderContent(function() {
                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, {
                                                                                    inputs: {
                                                                                        In_TextOptions: model.getCachedValue(idService.getId("ComingSoon.In_TextOptions"), function() {
                                                                                            return function() {
                                                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                                                                rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                                                                                        name: "ComingSoon",
                                                                                        alias: "29"
                                                                                    },
                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                    _dependencies: []
                                                                                })];
                                                                            })
                                                                        },
                                                                        _dependencies: []
                                                                    })];
                                                                })];
                                                            }, function() {
                                                                return [];
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.tEMP_TimelineImagesVar), asPrimitiveValue(model.variables.tagsList_Id_PhotosVar), asPrimitiveValue(model.variables.getHousehold_CoordinatesDataAct.householdCoordinatesOut), asPrimitiveValue(model.variables.tagsList_Id_AboutVar), asPrimitiveValue(model.variables.tagsList_SelectedTagVar), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.supperMeetingNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.addressAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isHiddenAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.isVisibleOut), asPrimitiveValue(model.variables.in_ShowKebabMenuIn), asPrimitiveValue(model.variables.tagsListVar), asPrimitiveValue(model.variables.getHousehold_CoordinatesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._in_ShowKebabMenuInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isEnabledIn)]
                                                })];
                                            })
                                        }
                                    })];
                                })
                            }
                        })];
                    }),
                    placeholder_CallToAction: new PlaceholderContent(function() {
                        return [$if(model.variables.hideActions_PhotoBookVar, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                inputs: {
                                    In_IsLoading: !(model.variables.getHouseholdDataAct.isDataFetchedAttr)
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
                                    alias: "30"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    placeholder_LoadingSection: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                            inputs: {
                                                Options: model.getCachedValue(idService.getId("Actions.Options"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                        rec.backgroundAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                            rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                            return rec;
                                                        }();
                                                        rec.paddingSizeAttr = function() {
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
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                name: "Actions",
                                                alias: "31"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_Text: model.getCachedValue(idService.getId("N52znOtmYUGEv4W6z78Rdg.In_Text"), function() {
                                                                return (((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar)) ? ("Actions") : ("Photobook"));
                                                            }, function() {
                                                                return model.variables.tagsList_SelectedTagVar;
                                                            }, function() {
                                                                return model.variables.tagsList_Id_AboutVar;
                                                            }),
                                                            In_TextOptions: model.getCachedValue(idService.getId("N52znOtmYUGEv4W6z78Rdg.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                                                            uuid: "37",
                                                            alias: "32"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    }), $if((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar), false, this, function() {
                                                        return [React.createElement(OSWidgets.Container, {
                                                            align: /*Default*/ 0,
                                                            animate: false,
                                                            style: "margin-bottom-xs",
                                                            visible: true,
                                                            _idProps: {
                                                                service: idService,
                                                                uuid: "38"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        }), React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, {
                                                            inputs: {
                                                                EntityId: model.variables.householdIdIn,
                                                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdIdInDataFetchStatus),
                                                                ContactPopUp_OverrideOptions: model.getCachedValue(idService.getId("JEi2KC2WRUGAmBr8_Mv0wA.ContactPopUp_OverrideOptions"), function() {
                                                                    return function() {
                                                                        var rec = new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec();
                                                                        rec.nameAttr = model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr;
                                                                        return rec;
                                                                    }();
                                                                }, function() {
                                                                    return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr;
                                                                }),
                                                                _contactPopUp_OverrideOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr),
                                                                IsEnabled: model.variables.isEnabledIn,
                                                                _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                                EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
                                                                EnableOptions: model.getCachedValue(idService.getId("JEi2KC2WRUGAmBr8_Mv0wA.EnableOptions"), function() {
                                                                    return function() {
                                                                        var rec = new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec();
                                                                        rec.enableNotesAttr = !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr);
                                                                        rec.enableShareAttr = !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr);
                                                                        return rec;
                                                                    }();
                                                                }, function() {
                                                                    return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr;
                                                                }),
                                                                _enableOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr)
                                                            },
                                                            events: {
                                                                _handleError: function(ex) {
                                                                    controller.handleError(ex);
                                                                },
                                                                onChange_Bookmark$Action: function(isBookmarkedIn) {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions OnChange_Bookmark");
                                                                        controller.directory_EntityDetailsActionsOnChange_Bookmark$Action(isBookmarkedIn, controller.callContext(eventHandlerContext));
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
                                                                uuid: "39",
                                                                alias: "33"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            _dependencies: []
                                                        })];
                                                    }, function() {
                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                            inputs: {
                                                                Options: model.getCachedValue(idService.getId("JZE3qpXCXEmmhXYBguubRg.Options"), function() {
                                                                    return function() {
                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                        rec.paddingSizeAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                            rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                                            return rec;
                                                                        }();
                                                                        rec.displayOptionsAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                            return rec;
                                                                        }();
                                                                        return rec;
                                                                    }();
                                                                })
                                                            },
                                                            events: {
                                                                _handleError: function(ex) {
                                                                    controller.handleError(ex);
                                                                },
                                                                clicked$Action: function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                                                                        controller.handler_OnClickPhotobook$Action(controller.callContext(eventHandlerContext));
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
                                                                uuid: "40",
                                                                alias: "34"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            placeholders: {
                                                                content: new PlaceholderContent(function() {
                                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                                        inputs: {
                                                                            ColumnOptions: model.getCachedValue(idService.getId("moLe3fohjkiVz+Rzirir2A.ColumnOptions"), function() {
                                                                                return function() {
                                                                                    var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                                    rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                                                                                    rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                                            uuid: "41",
                                                                            alias: "35"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        placeholders: {
                                                                            left: new PlaceholderContent(function() {
                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                                    inputs: {
                                                                                        Text: "Photobook",
                                                                                        SpacingSize: UBTConnectModel.staticEntities.uBT_Size.base
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
                                                                                        alias: "36"
                                                                                    },
                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                    placeholders: {
                                                                                        icon: new PlaceholderContent(function() {
                                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                inputs: {
                                                                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.bookClosed
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
                                                                                                    alias: "37"
                                                                                                },
                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                _dependencies: []
                                                                                            })];
                                                                                        })
                                                                                    },
                                                                                    _dependencies: []
                                                                                })];
                                                                            }),
                                                                            right: new PlaceholderContent(function() {
                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                    inputs: {
                                                                                        In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight
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
                                                                                        alias: "38"
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
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._householdIdInDataFetchStatus), asPrimitiveValue(model.variables.householdIdIn), asPrimitiveValue(model.variables.tagsList_Id_AboutVar), asPrimitiveValue(model.variables.tagsList_SelectedTagVar)]
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._householdIdInDataFetchStatus), asPrimitiveValue(model.variables.householdIdIn), asPrimitiveValue(model.variables.tagsList_Id_AboutVar), asPrimitiveValue(model.variables.tagsList_SelectedTagVar)]
                            })];
                        })];
                    }),
                    placeholder_Content: new PlaceholderContent(function() {
                        return [$if(model.variables.isSkeletonOnlyVar, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: model.getCachedValue(idService.getId("VisibleAboutTab.Style"), function() {
                                    return (((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_AboutVar)) ? ("") : ("hidden"));
                                }, function() {
                                    return model.variables.tagsList_SelectedTagVar;
                                }, function() {
                                    return model.variables.tagsList_Id_AboutVar;
                                }),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    name: "VisibleAboutTab"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_view, {
                                inputs: {
                                    In_NonHouseholdMembers: model.variables.getHouseholdDataAct.out_NonHouseholdMembersOut,
                                    _in_NonHouseholdMembersInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr),
                                    isEnabled: model.variables.isEnabledIn,
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                    In_IsLoading: !(model.variables.getHouseholdDataAct.isDataFetchedAttr),
                                    In_HouseholdMembers: model.variables.getHouseholdDataAct.out_HouseholdMembersOut,
                                    _in_HouseholdMembersInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdDataAct.dataFetchStatusAttr)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    event_NonMemberOnClick$Action: function(householdIdIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household_Blocks/HouseholdDetails_Members_Block Event_NonMemberOnClick");
                                            controller.handler_OnClickNavigateTomarriedChildren_Household$Action(householdIdIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    event_MemberOnClick$Action: function(memberIdIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household_Blocks/HouseholdDetails_Members_Block Event_MemberOnClick");
                                            controller.handler_OnClickMember$Action(memberIdIn, controller.callContext(eventHandlerContext));
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
                                    alias: "39"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))];
                        })];
                    })
                }
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [$if(model.variables.in_ShowKebabMenuIn, false, this, function() {
                    return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
                        inputs: {
                            In_ShareableObjectId: OS.BuiltinFunctions.longIntegerToText(model.variables.householdIdIn),
                            _in_ShareableObjectIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdIdInDataFetchStatus),
                            In_IsOpen: model.variables.isShareOpenVar,
                            In_ShareObjectTypeId: UBTConnectModel.staticEntities.type_ShareObject.myHousehold
                        },
                        events: {
                            _handleError: function(ex) {
                                controller.handleError(ex);
                            },
                            event_ClosedShareSheet$Action: function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Share/ShareSheet Event_ClosedShareSheet");
                                    controller.handler_CloseShareSheet$Action(controller.callContext(eventHandlerContext));
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
                            uuid: "47",
                            alias: "40"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            placeholder_ShareableObject: new PlaceholderContent(function() {
                                return [React.createElement(UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view, {
                                    inputs: {
                                        In_ShareableObject: model.getCachedValue(idService.getId("5pxuE0Bls02DkF0oS+aTqg.In_ShareableObject"), function() {
                                            return function() {
                                                var rec = new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec();
                                                rec.connectEntityTypeIdAttr = UBTConnectModel.staticEntities.connect_Entity.household;
                                                rec.idAttr = OS.BuiltinFunctions.longIntegerToText(model.variables.householdIdIn);
                                                rec.titleAttr = model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr;
                                                rec.subtitleAttr = model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.familyNamesAttr;
                                                rec.locationAttr = ((model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr + ", ") + model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.countryNameAttr);
                                                return rec;
                                            }();
                                        }, function() {
                                            return model.variables.householdIdIn;
                                        }, function() {
                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr;
                                        }, function() {
                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.familyNamesAttr;
                                        }, function() {
                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr;
                                        }, function() {
                                            return model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.countryNameAttr;
                                        }),
                                        _in_ShareableObjectInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdIdInDataFetchStatus, model.variables.getHouseholdDataAct.dataFetchStatusAttr)
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
                                        uuid: "48",
                                        alias: "41"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            })
                        },
                        _dependencies: [asPrimitiveValue(model.variables.getHouseholdDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._householdIdInDataFetchStatus), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.countryNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.familyNamesAttr), asPrimitiveValue(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.nameAttr), asPrimitiveValue(model.variables.householdIdIn)]
                    })];
                }, function() {
                    return [];
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$debugger", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller.ScreenEvent_OnReady.RefreshesJS", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller.ScreenEvent_OnReady.CheckRestoredJS", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller.ScreenEvent_OnParametersChanged.RefreshesJS", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList", "UBTConnect.model$HouseholdPreviewStructureRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.model$UI_HouseholdMemberList", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnect.model$Member_OptionalRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$GetHasPhotobookAccess", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "UBTConnect.controller$GetSkeleton_UI_HouseholdDetails", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.controller$GetUserInformation_Wrapper"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_Debugger, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller_ScreenEvent_OnReady_RefreshesJS, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller_ScreenEvent_OnReady_CheckRestoredJS, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller_ScreenEvent_OnParametersChanged_RefreshesJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                refresh_GetHouseholdDetail$Action: function() {
                    return controller.executeActionInsideJSNode(controller._refresh_GetHouseholdDetail$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Refresh_GetHouseholdDetail");
                },
                refresh_GetHouseholdCoordinates$Action: function() {
                    return controller.executeActionInsideJSNode(controller._refresh_GetHouseholdCoordinates$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Refresh_GetHouseholdCoordinates");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getHousehold_Coordinates$DataActRefresh: -1,
                getHousehold$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getHousehold_Coordinates$DataActRefresh: [],
                getHousehold$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getHousehold_Coordinates$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CQcrIBm+H0WvE0PTl4Lsvg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/DataActions.CQcrIBm+H0WvE0PTl4Lsvg:KlQveJdBUl0KIaSQxIVbGA", "UBTConnect", "GetHousehold_Coordinates", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdDetails_Block/GetHousehold_Coordinates");
                return controller.callDataAction("DataActionGetHousehold_Coordinates", "screenservices/UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold_Coordinates", "jpWTkNScgFIOvj9F16NuQg", function(b) {
                    model.variables.getHousehold_CoordinatesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getHousehold_CoordinatesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getHousehold_CoordinatesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false);

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CQcrIBm+H0WvE0PTl4Lsvg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.getHousehold$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1V6p6NFnVESlfNKzHj5D4A:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/DataActions.1V6p6NFnVESlfNKzHj5D4A:PxVXBSeAEUdd5+E_LldNOg", "UBTConnect", "GetHousehold", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdDetails_Block/GetHousehold");
                return controller.callDataAction("DataActionGetHousehold", "screenservices/UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold", "dzXxi49+2f0HuKY6DW0MgA", function(b) {
                    model.variables.getHouseholdDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getHouseholdDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getHouseholdDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdDetails_Block/GetHousehold On After Fetch");
                    return controller._onAfterFetch_GetHouseholdDetail$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1V6p6NFnVESlfNKzHj5D4A", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getHousehold_Coordinates$DataActRefresh", "getHousehold$DataActRefresh"];
        // Client Actions
        Controller.prototype._handler_OnClickMember$Action = function(meberIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickMember");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Handler_OnClickMember$vars"))());
            vars.value.meberIdInLocal = meberIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UChjA1xDvkmZfzmTWcFpBg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.UChjA1xDvkmZfzmTWcFpBg:0NmaJ9b2Bgg49kVc_VUcFg", "UBTConnect", "Handler_OnClickMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pfsIccmgG0qcAAqx1Wr1Bw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uk_RGUc0oUWnRwfCYlcbqw", callContext.id) && model.variables.isEnabledIn)) {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ez3EaNKvDEmIdOQKHClixg", callContext.id) && true)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yQm8MV62pkmE0IeLguBnRw", callContext.id);
                        // Destination: /UBTConnect/Household_Relations
                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Household_Relations", {
                            HouseholdId: OS.DataConversion.ServerDataConverter.asString(model.variables.householdIdIn, OS.DataTypes.DataTypes.LongInteger),
                            MemberId: OS.DataConversion.ServerDataConverter.asString(vars.value.meberIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                    } else {
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7Ck6RG1OoUuZV90au4HTpg", callContext.id) && vars.value.meberIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0)))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1j5Z6TL6DEWYO54j_n1vkg", callContext.id);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Zv0KR02DvkW2dIrJF1wdKA", callContext.id);
                        }

                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Lr2x846Q+U6NodbTgB8kcg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UChjA1xDvkmZfzmTWcFpBg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Handler_OnClickMember$vars", [{
            name: "MeberId",
            attrName: "meberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "Member",
            attrName: "memberVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Member_OptionalRec();
            },
            complexType: UBTConnectModel.Member_OptionalRec
        }, {
            name: "IsAwayMother",
            attrName: "isAwayMotherVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "IsAwayFather",
            attrName: "isAwayFatherVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "RelationsHouseholdId",
            attrName: "relationsHouseholdIdVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._directory_EntityDetailsActionsOnChange_Bookmark$Action = function(isBookmarkedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Directory_EntityDetailsActionsOnChange_Bookmark");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Directory_EntityDetailsActionsOnChange_Bookmark$vars"))());
            vars.value.isBookmarkedInLocal = isBookmarkedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ax_LBeMcoEizptNVBAif+A:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.Ax_LBeMcoEizptNVBAif+A:6lRuhrrWxR7THjeFfh646A", "UBTConnect", "Directory_EntityDetailsActionsOnChange_Bookmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ir+xk_j9iUWcKaWFrUK0Ww", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bJ_VJOG6EUeQAjG2Fy2a9A", callContext.id);
                // LocalIsBookmarked = isBookmarked
                model.variables.localIsBookmarkedVar = vars.value.isBookmarkedInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9i+LskeAIE+ePxF5o7x52w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ax_LBeMcoEizptNVBAif+A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Directory_EntityDetailsActionsOnChange_Bookmark$vars", [{
            name: "isBookmarked",
            attrName: "isBookmarkedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_OnShare$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnShare");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nWwjDUr9DU2Mmbih9bGR1Q:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.nWwjDUr9DU2Mmbih9bGR1Q:zokCXDkbfh0Tltp3yl2zEw", "UBTConnect", "Handler_OnShare", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j+lmYnt9oEKFmsrwEHAK+g", callContext.id);
                // Has extended share?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nTzmQsqQKEWJLdG9DywaYA", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
                    }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4TcvbFNM1EemEAmtff0Ajg", callContext.id);
                    // IsShareOpen = True
                    model.variables.isShareOpenVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GKcfhY5kr0O5v3r1pPPegg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RYOk+rOFckO28r6lSCQ07w", callContext.id);
                    // Execute Action: ShowComingSoonMessage
                    UBTConnect_UtilsController.default.showComingSoonMessage$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yt6y_LwqIUKmzmeOKVzqow", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nWwjDUr9DU2Mmbih9bGR1Q", callContext.id);
            }

        };
        Controller.prototype._action_HandlePreviewData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_HandlePreviewData");
            callContext = controller.callContext(callContext);
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HoLTFhn7okaPF9YT9uV9Sw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.HoLTFhn7okaPF9YT9uV9Sw:_k9Y3mOZUc_foq3k1iFpjg", "UBTConnect", "Action_HandlePreviewData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QM2gMVCA6UWST_dS04lLpw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Og4Q+gAPnU+M50fPT7WJHw", callContext.id) && model.variables.previewIn.usePreviewAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bkUiXezxAkuOlBWlGR5Acg", callContext.id);
                    // GetHousehold.Household.HouseholdCard.Household_Card_Content.Address = Preview.FormattedAddress
                    model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.addressAttr = model.variables.previewIn.formattedAddressAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K6BmbOzAF0mlUqoCBj7xNQ", callContext.id);
                    // Execute Action: ListIndexOf
                    listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.getHouseholdDataAct.out_HouseholdMembersOut, function(p) {
                        return p.idAttr.equals(model.variables.previewIn.householdMemberIdAttr);
                    }, callContext);

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wbgwClsxI0miBsdVtvZ8YQ", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QCWe3czykkWUCEMzqriJiA", callContext.id);
                        // GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].DisplayAge = Preview.UI_AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates
                        model.variables.getHouseholdDataAct.out_HouseholdMembersOut.getItem(listIndexOfVar.value.positionOut).displayAgeAttr = model.variables.previewIn.uI_AccountFormAttr.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QCWe3czykkWUCEMzqriJiA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].MobilePhone = If
                        model.variables.getHouseholdDataAct.out_HouseholdMembersOut.getItem(listIndexOfVar.value.positionOut).mobilePhoneAttr = ((model.variables.previewIn.uI_AccountFormAttr.accountForm_ContactInformationAttr.showMobileNumberAttr) ? (model.variables.previewIn.uI_AccountFormAttr.accountForm_ContactInformationAttr.mobileNumberAttr) : (""));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QCWe3czykkWUCEMzqriJiA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                        // GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].WorkPhone = If
                        model.variables.getHouseholdDataAct.out_HouseholdMembersOut.getItem(listIndexOfVar.value.positionOut).workPhoneAttr = ((model.variables.previewIn.uI_AccountFormAttr.accountForm_ContactInformationAttr.showWorkNumberAttr) ? (model.variables.previewIn.uI_AccountFormAttr.accountForm_ContactInformationAttr.workNumberAttr) : (""));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QCWe3czykkWUCEMzqriJiA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                        // GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].Email = Preview.UI_AccountForm.AccountForm_PersonalInformation.Email
                        model.variables.getHouseholdDataAct.out_HouseholdMembersOut.getItem(listIndexOfVar.value.positionOut).emailAttr = model.variables.previewIn.uI_AccountFormAttr.accountForm_PersonalInformationAttr.emailAttr;
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:boMqoczhv0GlABxQp03U6Q", callContext.id) && model.variables.previewIn.isHouseholderAttr)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TamBndE_DU+_e2aheDZHkA", callContext.id);
                            // GetHousehold.Out_HouseholdMembers[ListIndexOf.Position].HomePhone = Preview.UI_AccountForm.AccountForm_ContactInformation.HomeNumber
                            model.variables.getHouseholdDataAct.out_HouseholdMembersOut.getItem(listIndexOfVar.value.positionOut).homePhoneAttr = model.variables.previewIn.uI_AccountFormAttr.accountForm_ContactInformationAttr.homeNumberAttr;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mc841xBjUUKOnwmx+Uw8Dw", callContext.id);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mc841xBjUUKOnwmx+Uw8Dw", callContext.id);
                        }

                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mc841xBjUUKOnwmx+Uw8Dw", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fJrFSXLOSUuU8aYRTHp6Ow", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HoLTFhn7okaPF9YT9uV9Sw", callContext.id);
            }

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
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xw8jJOuaWEKg5SM5V0w5vQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.xw8jJOuaWEKg5SM5V0w5vQ:_z8T8jBxL6EJnLAlrVZK9Q", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sPzA5WZhjEKkmN0LUkHquA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+7F703DoCkWXPQeY4pnZ3g", callContext.id);
                // Execute Action: ScreenEvent_OnReady
                return controller._screenEvent_OnReady$Action(callContext).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:naVA8XEtxUquX5_xy9m6tA", callContext.id) && model.variables.tagsListVar.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:51C7ftYYxE6MVl_eNKhxpw", callContext.id);
                        // Execute Action: ListAppend_About
                        OS.SystemActions.listAppend(model.variables.tagsListVar, function() {
                            var rec = new UBTConnectLibraryModel.TagRec();
                            rec.textAttr = model.variables.tagsList_Id_AboutVar;
                            rec.identifierAttr = model.variables.tagsList_Id_AboutVar;
                            rec.isSelectedAttr = true;
                            return rec;
                        }(), callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JU26nuxH1kyj7q8jOLSrZA", callContext.id);
                        // Execute Action: ListAppend_Photos
                        OS.SystemActions.listAppend(model.variables.tagsListVar, function() {
                            var rec = new UBTConnectLibraryModel.TagRec();
                            rec.textAttr = model.variables.tagsList_Id_PhotosVar;
                            rec.identifierAttr = model.variables.tagsList_Id_PhotosVar;
                            rec.isSelectedAttr = false;
                            return rec;
                        }(), callContext);
                        // Set Selected Tag
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jcQBTEZ+v0O+BrY3ITBIbA", callContext.id);
                        // TagsList_SelectedTag = TagsList_Id_About
                        model.variables.tagsList_SelectedTagVar = model.variables.tagsList_Id_AboutVar;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jXY2I_Sxo0qPsS8q1hLrbA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jiqk98vIDkGfmCUkpP0gHw", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xw8jJOuaWEKg5SM5V0w5vQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xw8jJOuaWEKg5SM5V0w5vQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OnClickPhotobook$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickPhotobook");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gZYbJQApQ0q0nOXmuKw_UQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.gZYbJQApQ0q0nOXmuKw_UQ:KFCZsflDFkP05cTe8fhsWQ", "UBTConnect", "Handler_OnClickPhotobook", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cjkRmTaQ6EOh0NvbMRAgSw", callContext.id);
                // Has LocalityId?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kLY1Qm6lVkmHkO_VzJPVDQ", callContext.id) && !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SjiWk0bmAk2auo__iWt9YA", callContext.id);
                    // Destination: /UBTConnect/Photobook
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Photobook", {
                        In_HouseholdId: OS.DataConversion.ServerDataConverter.asString(model.variables.householdIdIn, OS.DataTypes.DataTypes.LongInteger),
                        In_LocalityId: OS.DataConversion.ServerDataConverter.asString(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityIdAttr, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VqttC+Yh4UKO_5Smf8b3mA", callContext.id);
                    OS.FeedbackMessageService.showFeedbackMessage("Photobook is currently unavailable for this household. Please try again later.", /*Info*/ 0);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6dBwPFIfUk6R6uH35+GauA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gZYbJQApQ0q0nOXmuKw_UQ", callContext.id);
            }

        };
        Controller.prototype._handler_OnClickNavigateTomarriedChildren_Household$Action = function(in_HouseholdIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickNavigateTomarriedChildren_Household");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Handler_OnClickNavigateTomarriedChildren_Household$vars"))());
            vars.value.in_HouseholdIdInLocal = in_HouseholdIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Vo5mOOBNNU6Taogd7am53A:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.Vo5mOOBNNU6Taogd7am53A:NjfRypqDCY9b91ZbSRTBCA", "UBTConnect", "Handler_OnClickNavigateTomarriedChildren_Household", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LpbQhzK+RUyKNNDlvqvBkw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BT3HPsVyy0KanlyUC5CGOA", callContext.id) && model.variables.isEnabledIn)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bzP_1rdpD0KMmYuw6a3oKA", callContext.id);
                    // Destination: /UBTConnect/HouseholdDetails
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
                        HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.in_HouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6EUUKybG_Uu6lKR3tcgEPg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Vo5mOOBNNU6Taogd7am53A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Handler_OnClickNavigateTomarriedChildren_Household$vars", [{
            name: "In_HouseholdId",
            attrName: "in_HouseholdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._refresh_GetHouseholdDetail$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_GetHouseholdDetail");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FJ8YOmFa60CeGsLt41ppYA:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.FJ8YOmFa60CeGsLt41ppYA:sLGKhJMB2aka1rmWZzy1OA", "UBTConnect", "Refresh_GetHouseholdDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rBNDd1VXzECWQ4N6wVpabw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VGn_q3g8vkCTCFFH5zF+Rg", callContext.id);
                // Refresh Query: GetHousehold
                var result = controller.getHousehold$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_4TnUMANok6sC27etddtGw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FJ8YOmFa60CeGsLt41ppYA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FJ8YOmFa60CeGsLt41ppYA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OnMenuEdit$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnMenuEdit");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:j3EnTZECF0OumXFibdtrUQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.j3EnTZECF0OumXFibdtrUQ:m_9iIpmPBzn4pEokAn8F0Q", "UBTConnect", "Handler_OnMenuEdit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RSaRaYi__UGCXrJR6fNsNA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A3AtpE7J20Op2nrEHultxQ", callContext.id);
                // Destination: /UBTConnect/Profile
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Profile", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:j3EnTZECF0OumXFibdtrUQ", callContext.id);
            }

        };
        Controller.prototype._onChangeTag$Action = function(updatedTagListIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChangeTag");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.OnChangeTag$vars"))());
            vars.value.updatedTagListInLocal = updatedTagListIn.clone();
            var listIndexOf_IsSelectedVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOf_IsSelectedVar = listIndexOf_IsSelectedVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wrtwVD2TFEKm4STbTQPGtQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.wrtwVD2TFEKm4STbTQPGtQ:UCvHn4ceZuisIM+FFeXl7g", "UBTConnect", "OnChangeTag", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LWygS3LcCEardFjYmUTlFg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:csvIHdVzBU6PF+_lK2ZNTg", callContext.id);
                // TagsList = UpdatedTagList
                model.variables.tagsListVar = vars.value.updatedTagListInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oDGhsjlG5USMmObNLMJNdw", callContext.id);
                // Execute Action: ListIndexOf_IsSelected
                listIndexOf_IsSelectedVar.value = OS.SystemActions.listIndexOf(model.variables.tagsListVar, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LqfYes0u5ky8rvhITItOpw", callContext.id);
                // TagsList_SelectedTag = TagsList[ListIndexOf_IsSelected.Position].Identifier
                model.variables.tagsList_SelectedTagVar = model.variables.tagsListVar.getItem(listIndexOf_IsSelectedVar.value.positionOut).identifierAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qMW7wQwHHkyzu0mCQKWseQ", callContext.id);
                // Execute Action: Action_SetHideActionsPhotobook
                controller._action_SetHideActionsPhotobook$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OeRF2XagBUW65TcrDiAJ1g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wrtwVD2TFEKm4STbTQPGtQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.OnChangeTag$vars", [{
            name: "UpdatedTagList",
            attrName: "updatedTagListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new UBTConnectModel.TagList();
            },
            complexType: UBTConnectModel.TagList
        }]);
        Controller.prototype._onClick_NavigateToSupperMeeting$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_NavigateToSupperMeeting");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:bNT4aXd0IkGEoaAT6ik3bg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.bNT4aXd0IkGEoaAT6ik3bg:pJnJiZ4gyLNGCLVKHFrNoA", "UBTConnect", "OnClick_NavigateToSupperMeeting", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l8S2QoyhRE62IPYr_PXpew", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E+rZ9GKgvkio+gowwIV3ug", callContext.id) && (model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr || model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0VOF9Z7+u0+clEUCZ0C37Q", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2XJFbYTyG0mfBIpyiqU6CQ", callContext.id);
                    // Destination: /UBTConnect/SupperMeeting_Details
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
                        In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.supperMeetingIdAttr, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bNT4aXd0IkGEoaAT6ik3bg", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_GetHouseholdDetail$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetHouseholdDetail");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:o4aGb6FqiUGvWXHy0vxE7w:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.o4aGb6FqiUGvWXHy0vxE7w:BpwrBLNaBTNNMfqZhovm8g", "UBTConnect", "OnAfterFetch_GetHouseholdDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bggZQWFb1ECQ5UjQp6LZNA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U56KREZVeU+7olj85kMjJQ", callContext.id);
                // Execute Action: Action_HandlePreviewData
                controller._action_HandlePreviewData$Action(callContext);
                // Foreach TagsList
                callContext.iterationContext.registerIterationStart(model.variables.tagsListVar);
                try {
                    var tagsListIterator = callContext.iterationContext.getIterator(model.variables.tagsListVar);
                    var tagsListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sRbXRB9LEEiK_ZnXQwVaQw", callContext.id) && (tagsListIndex < model.variables.tagsListVar.length))) {
                        tagsListIterator.currentRowNumber = tagsListIndex;
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GEzFiI8tlkmA4biDg1ZRvQ", callContext.id) && (model.variables.tagsListVar.getItem(tagsListIndex.valueOf()).identifierAttr === UBTConnectModel.staticEntities.householdDetailTags.photos))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wkv3ELhEHUCuKMSSwAseNQ", callContext.id);
                            // TagsList.Current.Enabled = notGetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased and notGetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsAncestry and notGetHousehold.Household.HouseholdCard.Household_Card_Content.DisplayOptions.IsHidden
                            model.variables.tagsListVar.getItem(tagsListIndex.valueOf()).enabledAttr = ((!(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr) && !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr)) && !(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isHiddenAttr));
                        }

                        tagsListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.tagsListVar);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AAwCC_G0m0eHE2aP8B8WEw", callContext.id);
                // Trigger Event: HouseholdDataFetched
                return controller.householdDataFetched$Action(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr, model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.countryNameAttr, (model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr || model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr), callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IK+jnCHIgUippQ3NGwNNeQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o4aGb6FqiUGvWXHy0vxE7w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o4aGb6FqiUGvWXHy0vxE7w", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._refresh_GetHouseholdCoordinates$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_GetHouseholdCoordinates");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:bGAvmNv4FEizT2UMvWJ79Q:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.bGAvmNv4FEizT2UMvWJ79Q:hLqc_kjheh5rnuY2zJ4MvA", "UBTConnect", "Refresh_GetHouseholdCoordinates", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6wm89KHBqkq9UbCsDQhIZA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K3XMRYi1pky8dB2jWFThUg", callContext.id);
                // Refresh Query: GetHousehold_Coordinates
                var result = controller.getHousehold_Coordinates$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pvWOnDTbLkeNio672Xh4MQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bGAvmNv4FEizT2UMvWJ79Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bGAvmNv4FEizT2UMvWJ79Q", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._checkUserAccessToHousehold$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CheckUserAccessToHousehold");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Gr+Yml7dnk6iXt0snsNwVg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.Gr+Yml7dnk6iXt0snsNwVg:LEI1_yrMJu9SRRCKe_6HbQ", "UBTConnect", "CheckUserAccessToHousehold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i35nxX1m+k+H56Iv9AI2jw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ylsltXwwBkqDnoCCM3G+jQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Gr+Yml7dnk6iXt0snsNwVg", callContext.id);
            }

        };
        Controller.prototype._action_SetHideActionsPhotobook$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetHideActionsPhotobook");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GziVpMYY_ECHL4LC6d54YQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.GziVpMYY_ECHL4LC6d54YQ:_XEJRmIjY4QefulUy7UMZQ", "UBTConnect", "Action_SetHideActionsPhotobook", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4P4E0w8myUaobqAQagLZkw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lm5nAw9ikUSLHaBQ3J2yTA", callContext.id);
                // HideActions_PhotoBook = TagsList_SelectedTag = TagsList_Id_Photos and notGetHasPhotobookAccess()
                model.variables.hideActions_PhotoBookVar = ((model.variables.tagsList_SelectedTagVar === model.variables.tagsList_Id_PhotosVar) && !(OutSystemsDebugger.handleFunctionCall(function() {
                    return UBTConnect_UtilsController.default.getHasPhotobookAccess$Action(callContext).hasPhotobookAccessOut;
                }, OS.DataTypes.DataTypes.Boolean, callContext.id)));
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D_yJ8ergP0OF_2640uIsKg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GziVpMYY_ECHL4LC6d54YQ", callContext.id);
            }

        };
        Controller.prototype._onClick_NavigateToLocality$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_NavigateToLocality");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:TSBxzL6QZUaX_yaLsVwZGQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.TSBxzL6QZUaX_yaLsVwZGQ:AeNN+MzMAXUhqZODrlawwA", "UBTConnect", "OnClick_NavigateToLocality", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ArCY9rqA8EaTo+ofzQ7sbQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YpSBXc6N6Uezr7fi4FuYJw", callContext.id) && (model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isDeceasedAttr || model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.displayOptionsAttr.isAncestryAttr))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TB2fv6_HO0uDNcANZOJ5YA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y2ntx2gxKkOG2fHz7eOtwQ", callContext.id);
                    // Destination: /UBTConnect/Locality_Details
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {
                        PreloadedLocalityLabel: OS.DataConversion.ServerDataConverter.asString(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr, OS.DataTypes.DataTypes.Text),
                        LocalityId: OS.DataConversion.ServerDataConverter.asString(model.variables.getHouseholdDataAct.householdOut.householdCardAttr.household_Card_ContentAttr.localityIdAttr, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:TSBxzL6QZUaX_yaLsVwZGQ", callContext.id);
            }

        };
        Controller.prototype._checUserAwayHouseholdAccess$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ChecUserAwayHouseholdAccess");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wbfL0ImhRk6+BMnn4jsqkg:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.wbfL0ImhRk6+BMnn4jsqkg:JPBrWcR0WlrHEZMLeHubYg", "UBTConnect", "ChecUserAwayHouseholdAccess", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oWfw3+Ipl0iJUisE1HZvCQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:be84Vvi+Eki8_ODt3g3Lkw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wbfL0ImhRk6+BMnn4jsqkg", callContext.id);
            }

        };
        Controller.prototype._handler_CloseShareSheet$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_CloseShareSheet");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FHSp5DTreE6nTmyAwmxEWQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.FHSp5DTreE6nTmyAwmxEWQ:9Kqss8IX9jM1bBWf+nQcNA", "UBTConnect", "Handler_CloseShareSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1yg8rV1Ti0CS2W87vr6UNA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mMHg7VOJj0KY84f4Zol+1Q", callContext.id);
                // IsShareOpen = False
                model.variables.isShareOpenVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M3rsRIkGQ0KgxrPu1iiGWg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FHSp5DTreE6nTmyAwmxEWQ", callContext.id);
            }

        };
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            var getSkeleton_UI_HouseholdDetailsVar = new OS.DataTypes.VariableHolder();
            var getUserInformation_WrapperVar = new OS.DataTypes.VariableHolder();
            var checkRestoredJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSkeleton_UI_HouseholdDetailsVar = getSkeleton_UI_HouseholdDetailsVar;
            varBag.getUserInformation_WrapperVar = getUserInformation_WrapperVar;
            varBag.checkRestoredJSResult = checkRestoredJSResult;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YcOF5mU3tUuG69a4lsmUww:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.YcOF5mU3tUuG69a4lsmUww:kKt37gaU7HnkNvRxf8_hzQ", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JP3dgNAzEkqVJyyRrX4_lA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:35sg6sfbT0S_R_sOWPq8jw", callContext.id);
                // Execute Action: GetUserInformation_Wrapper
                model.flush();
                return UBTConnectController.default.getUserInformation_Wrapper$Action(callContext).then(function(value) {
                    getUserInformation_WrapperVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eAsMe5uVuUifhc57qZDRHQ", callContext.id);
                    checkRestoredJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller_ScreenEvent_OnReady_CheckRestoredJS, "CheckRestored", "ScreenEvent_OnReady", {
                        FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                        FromHistory: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                    }, function($parameters) {
                        var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.ScreenEvent_OnReady$checkRestoredJSResult"))();
                        jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                        jsNodeResult.fromHistoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory, OS.DataTypes.DataTypes.Boolean);
                        return jsNodeResult;
                    }, {}, {});
                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BC8lPGV3lE6soMaEcIZXlg", callContext.id) && (checkRestoredJSResult.value.fromCacheOut || checkRestoredJSResult.value.fromHistoryOut))) {
                        // Visibility Has Changed
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JXDqR5aOHkSM2SPjMTDJ5g", callContext.id) && !(((getUserInformation_WrapperVar.value.userInformationOut.directory_UserCurrent_VisibilityAttr.displayAgeAttr) !== (model.variables.userAge_VisibilityVar))))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dcoVLf48mE6GurN41D143A", callContext.id);
                            return OS.Flow.returnAsync();

                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BmiEFKPh9EmiuBJxa6JZ1A", callContext.id);
                    // UserAge_Visibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge
                    model.variables.userAge_VisibilityVar = getUserInformation_WrapperVar.value.userInformationOut.directory_UserCurrent_VisibilityAttr.displayAgeAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+DDOnzKqrE+riKFx5Z6zwQ", callContext.id);
                    // Execute Action: GetSkeleton_UI_HouseholdDetails
                    getSkeleton_UI_HouseholdDetailsVar.value = UBTConnectController.default.getSkeleton_UI_HouseholdDetails$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2ky2jUhX5ky3ZyCBuHsTWQ", callContext.id);
                    // GetHousehold.Household = GetSkeleton_UI_HouseholdDetails.UI_HouseholdDetails
                    model.variables.getHouseholdDataAct.householdOut = getSkeleton_UI_HouseholdDetailsVar.value.uI_HouseholdDetailsOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5qec2+xdgkW5tKk7F96OrA", callContext.id);
                    // IsSkeletonOnly = In_IsSkeletonOnly
                    model.variables.isSkeletonOnlyVar = model.variables.in_IsSkeletonOnlyIn;
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e1puTo_H_kWCYtNHS2jOaw", callContext.id) && false)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tKC9ScukWE+0eT0lj+7QAQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rERQJMk59kaOHpDMBQXI0w", callContext.id);
                        controller.safeExecuteJSNode(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller_ScreenEvent_OnReady_RefreshesJS, "Refreshes", "ScreenEvent_OnReady", null, function($parameters) {}, {
                            Refresh_GetHouseholdDetail: controller.clientActionProxies.refresh_GetHouseholdDetail$Action,
                            Refresh_GetHouseholdCoordinates: controller.clientActionProxies.refresh_GetHouseholdCoordinates$Action
                        }, {});
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tKC9ScukWE+0eT0lj+7QAQ", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YcOF5mU3tUuG69a4lsmUww", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YcOF5mU3tUuG69a4lsmUww", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.ScreenEvent_OnReady$checkRestoredJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "FromHistory",
            attrName: "fromHistoryOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._screenEvent_OnParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:v3+W7b9Xj02aWc4TJnFbLQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.v3+W7b9Xj02aWc4TJnFbLQ:cvneC6cvaYdzPlQWdRPh5Q", "UBTConnect", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+KkwXf08DEe2QPjlNq0dLA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qztXzRNtsUGxX+nnsU3XbA", callContext.id) && model.variables.previewIn.usePreviewAttr)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S6syP4ScHU23xjrNWzG_Lw", callContext.id);
                        // UserAge_Visibility = Preview.UI_AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates
                        model.variables.userAge_VisibilityVar = model.variables.previewIn.uI_AccountFormAttr.accountForm_PersonalInformationAttr.showLifeCycleDatesAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n5UmLW8OIkaX4iR5RGqBrw", callContext.id);
                        // Refresh Query: GetHousehold
                        var result = controller.getHousehold$DataActRefresh(callContext);
                        model.flush();
                        return result;
                    }

                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wgL1D0N3sEukzpjG2k61Gg", callContext.id) && (model.variables.isSkeletonOnlyVar && !(model.variables.in_IsSkeletonOnlyIn)))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xUo6GGP260eRrpt7oIdNBQ", callContext.id);
                        // IsSkeletonOnly = False
                        model.variables.isSkeletonOnlyVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DDUz8d_cAUyaUjkg3K_jQA", callContext.id);
                        controller.safeExecuteJSNode(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller_ScreenEvent_OnParametersChanged_RefreshesJS, "Refreshes", "ScreenEvent_OnParametersChanged", null, function($parameters) {}, {
                            Refresh_GetHouseholdDetail: controller.clientActionProxies.refresh_GetHouseholdDetail$Action,
                            Refresh_GetHouseholdCoordinates: controller.clientActionProxies.refresh_GetHouseholdCoordinates$Action
                        }, {});
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Aes073HDE06nfiOyBxiddA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Aes073HDE06nfiOyBxiddA", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:v3+W7b9Xj02aWc4TJnFbLQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:v3+W7b9Xj02aWc4TJnFbLQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_TimelinePhotoSelected$Action = function(dateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_TimelinePhotoSelected");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Handler_TimelinePhotoSelected$vars"))());
            vars.value.dateInLocal = dateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ghq3+tSXkkOheJHTkv070w:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g/ClientActions.Ghq3+tSXkkOheJHTkv070w:Hai_xPzpySIadnInDnvtOw", "UBTConnect", "Handler_TimelinePhotoSelected", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UbFo50VlfUyV14cSEZLVTg", callContext.id);
                // Out_TimelineImages
                // Foreach TEMP_TimelineImages
                callContext.iterationContext.registerIterationStart(model.variables.tEMP_TimelineImagesVar);
                try {
                    var tEMP_TimelineImagesIterator = callContext.iterationContext.getIterator(model.variables.tEMP_TimelineImagesVar);
                    var tEMP_TimelineImagesIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aoONtL3J0UyUz5RSCwf2NQ", callContext.id) && (tEMP_TimelineImagesIndex < model.variables.tEMP_TimelineImagesVar.length))) {
                        tEMP_TimelineImagesIterator.currentRowNumber = tEMP_TimelineImagesIndex;
                        // Set IsCurrent
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YvKcHms9DkeM433T1NWkpw", callContext.id);
                        // TEMP_TimelineImages.Current.IsCurrent = If
                        model.variables.tEMP_TimelineImagesVar.getItem(tEMP_TimelineImagesIndex.valueOf()).isCurrentAttr = ((model.variables.tEMP_TimelineImagesVar.getItem(tEMP_TimelineImagesIndex.valueOf()).dateAttr.equals(vars.value.dateInLocal)) ? (true) : (false));
                        tEMP_TimelineImagesIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.tEMP_TimelineImagesVar);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xFEyBZSOBkKJrh9zfkejEg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ghq3+tSXkkOheJHTkv070w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails_Block.Handler_TimelinePhotoSelected$vars", [{
            name: "Date",
            attrName: "dateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.DateTime,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }]);

        Controller.prototype.handler_OnClickMember$Action = function(meberIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickMember$Action, callContext, meberIdIn);

        };
        Controller.prototype.directory_EntityDetailsActionsOnChange_Bookmark$Action = function(isBookmarkedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._directory_EntityDetailsActionsOnChange_Bookmark$Action, callContext, isBookmarkedIn);

        };
        Controller.prototype.handler_OnShare$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnShare$Action, callContext);

        };
        Controller.prototype.action_HandlePreviewData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_HandlePreviewData$Action, callContext);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.handler_OnClickPhotobook$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickPhotobook$Action, callContext);

        };
        Controller.prototype.handler_OnClickNavigateTomarriedChildren_Household$Action = function(in_HouseholdIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickNavigateTomarriedChildren_Household$Action, callContext, in_HouseholdIdIn);

        };
        Controller.prototype.refresh_GetHouseholdDetail$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetHouseholdDetail$Action, callContext);

        };
        Controller.prototype.handler_OnMenuEdit$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnMenuEdit$Action, callContext);

        };
        Controller.prototype.onChangeTag$Action = function(updatedTagListIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChangeTag$Action, callContext, updatedTagListIn);

        };
        Controller.prototype.onClick_NavigateToSupperMeeting$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_NavigateToSupperMeeting$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetHouseholdDetail$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetHouseholdDetail$Action, callContext);

        };
        Controller.prototype.refresh_GetHouseholdCoordinates$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetHouseholdCoordinates$Action, callContext);

        };
        Controller.prototype.checkUserAccessToHousehold$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._checkUserAccessToHousehold$Action, callContext);

        };
        Controller.prototype.action_SetHideActionsPhotobook$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetHideActionsPhotobook$Action, callContext);

        };
        Controller.prototype.onClick_NavigateToLocality$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_NavigateToLocality$Action, callContext);

        };
        Controller.prototype.checUserAwayHouseholdAccess$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._checUserAwayHouseholdAccess$Action, callContext);

        };
        Controller.prototype.handler_CloseShareSheet$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_CloseShareSheet$Action, callContext);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.screenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

        };
        Controller.prototype.handler_TimelinePhotoSelected$Action = function(dateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_TimelinePhotoSelected$Action, callContext, dateIn);

        };
        Controller.prototype.householdDataFetched$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw:t9nDzAZAuYZJViBgLBCv_w", "UBTConnect", "Directory_Household", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:pusb6o2QYEar2Lx3ksPB3g:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.pusb6o2QYEar2Lx3ksPB3g:EofOVUael3M++ySBWKbxcQ", "UBTConnect", "HouseholdDetails_Block", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pusb6o2QYEar2Lx3ksPB3g", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdDetails_Block On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household/HouseholdDetails_Block On Parameters Changed");
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller.ScreenEvent_OnReady.RefreshesJS", [], function() {
    return function($actions, $roles, $public) {
        $actions.Refresh_GetHouseholdDetail();
        $actions.Refresh_GetHouseholdCoordinates();
    };
});
define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller.ScreenEvent_OnReady.CheckRestoredJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
        //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
    };
});
define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller.ScreenEvent_OnParametersChanged.RefreshesJS", [], function() {
    return function($actions, $roles, $public) {
        $actions.Refresh_GetHouseholdDetail();
        $actions.Refresh_GetHouseholdCoordinates();
    };
});

define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "mgNvAO2tkEihad_R+QkIAQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberVar;
            }
        },
        "NjR4Pl062kSMvwnWbSSFlg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isAwayMotherVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "X90CV1byO0mn1q6Iz5SMwA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isAwayFatherVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZD_oC69AxkmtDZHqjaf0lw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.relationsHouseholdIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KNa+sSqGHEWdpY81COQgTA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.meberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "KeYPx4dfHkWRiCxzCxnquw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isBookmarkedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "K6BmbOzAF0mlUqoCBj7xNQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "a5gaTjCztkeeT7yTfdswKA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Pa4W+RC+S0y+g9K+7tJjdg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updatedTagListInLocal;
            }
        },
        "oDGhsjlG5USMmObNLMJNdw": {
            getter: function(varBag, idService) {
                return varBag.listIndexOf_IsSelectedVar.value;
            }
        },
        "+DDOnzKqrE+riKFx5Z6zwQ": {
            getter: function(varBag, idService) {
                return varBag.getSkeleton_UI_HouseholdDetailsVar.value;
            }
        },
        "35sg6sfbT0S_R_sOWPq8jw": {
            getter: function(varBag, idService) {
                return varBag.getUserInformation_WrapperVar.value;
            }
        },
        "rERQJMk59kaOHpDMBQXI0w": {
            getter: function(varBag, idService) {
                return varBag.refreshesJSResult.value;
            }
        },
        "eAsMe5uVuUifhc57qZDRHQ": {
            getter: function(varBag, idService) {
                return varBag.checkRestoredJSResult.value;
            }
        },
        "DDUz8d_cAUyaUjkg3K_jQA": {
            getter: function(varBag, idService) {
                return varBag.refreshesJSResult.value;
            }
        },
        "5zP2N_Z3sUSvHf0+FO4WYw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.dateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "nG1F6IupYEqz1K_dAm+auQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tagsListVar;
            }
        },
        "X8jQNewCj0qPppQkhAMxnw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tagsList_SelectedTagVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "tgaSwLxe00OUVMwthxBmeA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tagsList_Id_AboutVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "WltPLRF8JUmSO1SBhr81Ng": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tagsList_Id_PhotosVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "EfCAlCQXWUinsrcxeqrC0Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tEMP_TimelineImagesVar;
            }
        },
        "Oj7WYyFOjkWBRaDKfIjYpg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localIsBookmarkedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "xciG3BTvdUOa1zAnaRHNCw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userAge_VisibilityVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "pQ7qs6cK3kqGVNyAZTDQ7Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isSkeletonOnlyVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Ibf6TOHmH0yFKQ9qg6FjrA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hideActions_PhotoBookVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "o2_FPBjq7EKjUfBVgk2Zwg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isShareOpenVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "CDUpDurXCky3x1Bmi1ZEsw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "ChWlAAeFGkGNPZ6BykRGsA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "G+Ny5jztWUmsAlebx8wMcQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.previewIn;
            }
        },
        "ocEiWVmNREuCzSry52um8A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ShowKebabMenuIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "dHqm+9RyWESTr0Gxgu_0QQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_CheckVisibilityIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "OPm3vPhLwEKNOh5e15Thwg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsSkeletonOnlyIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "p7PeZPElpU2kfaM52SwgJw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HideActionsIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "CQcrIBm+H0WvE0PTl4Lsvg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getHousehold_CoordinatesDataAct;
            }
        },
        "1V6p6NFnVESlfNKzHj5D4A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getHouseholdDataAct;
            }
        },
        "ACN3FLVwnk+ukDNTRDhztw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DirectoryDetailScreenContent"));
                })(varBag.model, idService);
            }
        },
        "8iHOZ5WSE0KH_ESRULq8iQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_DetailCard"));
                })(varBag.model, idService);
            }
        },
        "8Zbdn_ywrkGKzLYm_3tUHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "iS2mp2EFvEiGhj1S2c3gMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImageCard_LazyLoading"));
                })(varBag.model, idService);
            }
        },
        "dEgb5ZMQV0Og7Q5xnw2o4g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LazyImage_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "iodU9WWMyEqzA83XKrKiuw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_ImageTag"));
                })(varBag.model, idService);
            }
        },
        "wsPvBXIVH0OuQK2Blx6Cbw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
                })(varBag.model, idService);
            }
        },
        "KVI9pdx0306pkniXZRqRMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("AvatarList"));
                })(varBag.model, idService);
            }
        },
        "f7IMB4yPCUCxVbn0cbWrQg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        },
        "wpWYFufE0UW+LYl57rFStg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_TopSectionContent"));
                })(varBag.model, idService);
            }
        },
        "9tkiA4K700KLGVXeoKga9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "WdIgrd7p7USVnYoMBnZ6Qw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("isHouseholdHidden"));
                })(varBag.model, idService);
            }
        },
        "SUReepIb8kKfWQU8ZbUzxQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "tzT4_2evR064VXabT33u7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "7QshMBv4TkqQVjPwN8wxsw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_BottomSectionContent"));
                })(varBag.model, idService);
            }
        },
        "8W0b9b9e+kmUDW3l+xufpg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("About"));
                })(varBag.model, idService);
            }
        },
        "VxFJXK4BSkucSY6sVnfIiw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("AddressSection"));
                })(varBag.model, idService);
            }
        },
        "uHn4VKhxiUCGp8L3at5lsQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Address"));
                })(varBag.model, idService);
            }
        },
        "jdlyvZlFzk+pIvw+AAEBCA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "FbzeU4il+kereoR4kOzQnQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SeeMoreSection"));
                })(varBag.model, idService);
            }
        },
        "vBknuH4M6UW5RfHNhAncnw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "seK2FSSYC0SOqvLLy8lVqw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "LGTmStgV9UGZMNSUH6pNPg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "PVT6acdBFEysVKlPXGqXBA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "hbe_lRhfr0aU48hN9xNKTQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "iLA9TFWjxkmEDfuMNlLAOg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Locality"));
                })(varBag.model, idService);
            }
        },
        "KidhkcB2h0GIov6LrHFm4Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "yYaFXGYWy0OOMOoc639kag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "tkYKPZ8FLUKaP4MKVUUung": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "TdqnAHaTo0mDwplUXjMB2w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "dYXhTIW+fEKvTNDWPvVVGQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "+oOcZ2K_nUqxcWkE0Lx6lw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SupperMeeting"));
                })(varBag.model, idService);
            }
        },
        "3GKWZK7O2UOqhEqkOA_gyQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "lcSW7ze1GEu1awwlxEBi3A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Photos"));
                })(varBag.model, idService);
            }
        },
        "GWx2utApfUSzWgREr3BmRA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Gallery"));
                })(varBag.model, idService);
            }
        },
        "bPh8WQrPuUGqUgPEHlaSsw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LD_Checks"));
                })(varBag.model, idService);
            }
        },
        "Z0O4nQzzNUOEY8GvPb8GIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "9s188VAbsk2Ww6wX6g0fnQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ComingSoon"));
                })(varBag.model, idService);
            }
        },
        "RTrjebCbokuFNJWz2NbZkg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CallToAction"));
                })(varBag.model, idService);
            }
        },
        "CbVifRGZ8EKShIUi3GYouQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideActionsPhotoBook2"));
                })(varBag.model, idService);
            }
        },
        "n9Z4HZI3H0C5MT+zFdnGAQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "koxTPLLXCUOlYDIz14y+XA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Actions"));
                })(varBag.model, idService);
            }
        },
        "66R7G_dHB0y4ajii+WGb8Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "FxW6pMBdb0m9+tCQXoE10A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsAbout"));
                })(varBag.model, idService);
            }
        },
        "sWg7_5B6OkWi7olGiqghXw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "J68igXrdw0SSHNAdCfatkA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "I_DR6b6aMEWTeDcuISEEtg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "g9DSVvMhoU2IXJ3_FUyuqQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "ZrIn0Guo+Uyg0cNC4nECBQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        },
        "3Drel3KPGECn_hGHhFogxw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsSkeleton"));
                })(varBag.model, idService);
            }
        },
        "2rybvZwB8ES4RmjPh3CqJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("VisibleAboutTab"));
                })(varBag.model, idService);
            }
        },
        "f0E0lh4fUEWEC0VpXYFgSQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideInServiceStudio"));
                })(varBag.model, idService);
            }
        },
        "JHHIyz8_H0+m9Cdi65__ew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowShareSheet"));
                })(varBag.model, idService);
            }
        },
        "OFGLwpmR5kKSHgL7Y_tu9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_ShareableObject"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});