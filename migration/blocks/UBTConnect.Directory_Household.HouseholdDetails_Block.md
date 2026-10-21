# UBTConnect.Directory_Household.HouseholdDetails_Block

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js`
- Child blocks: UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions, UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block, UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen, UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading, UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu, UBTConnectLibrary.ConnectPatterns.ComingSoon, UBTConnectLibrary.ConnectPatterns.HorizontalTagList, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText, UBTConnectLibrary.ConnectPatterns.ImageCard__Content, UBTConnectLibrary.ConnectPatterns.SeeMoreSection, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper, UBTConnect_Utils.CW_Image.UBT_LazyImage, UBTConnect_Utils.CW_Share.ShareSheet, UBTConnect_Utils.CW_Share.ShareableObject_Generic (queue: UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions, UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block, UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen, UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading, UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu, UBTConnectLibrary.ConnectPatterns.ComingSoon, UBTConnectLibrary.ConnectPatterns.HorizontalTagList, UBTConnectLibrary.ConnectPatterns.ImageCard__Content, UBTConnectLibrary.ConnectPatterns.SeeMoreSection, UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper, UBTConnect_Utils.CW_Share.ShareSheet, UBTConnect_Utils.CW_Share.ShareableObject_Generic)

## Inputs

| Input | Type |
|---|---|
| In_ShowKebabMenu | Boolean |

## Captured DOM variants (2 distinct, 16 instances)

### Variant 1: HouseholdCarousel/default (×15)

```html
<div class="OSBlockWidget" data-block="Directory_Household.HouseholdDetails_Block" id="b3-l1-1152_0-b2-b3-$b1">
  <div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="b3-l1-1152_0-b2-b3-b1-DirectoryDetailScreenContent"><!-- nested block: 578 nodes --></div>
</div>
```

### Variant 2: Profile/default (×1)

```html
<div class="OSBlockWidget" data-block="Directory_Household.HouseholdDetails_Block" id="b60-$b2">
  <div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="b60-b2-DirectoryDetailScreenContent"><!-- nested block: 552 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_Share.ShareSheet" id="b60-b2-$b40"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$model", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.KebabButtonMenu.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", "UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$view", "UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList", "UBTConnect.model$HouseholdPreviewStructureRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.model$UI_HouseholdMemberList", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnect.model$Member_OptionalRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$GetHasPhotobookAccess", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "UBTConnect.controller$GetSkeleton_UI_HouseholdDetails", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.controller$GetUserInformation_Wrapper"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTConnect_UtilsController, React, OSView, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_model, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_controller, UBTConnectClientVariables, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnectLibrary_ConnectCorePatterns_KebabButtonMenu_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view) {
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
```
(… 1347 more lines in `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js`)
