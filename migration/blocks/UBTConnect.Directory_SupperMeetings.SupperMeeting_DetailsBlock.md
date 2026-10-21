# UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js`
- Child blocks: UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions, UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList, UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section, UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions, UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList, UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section, UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading)

## Inputs

| Input | Type |
|---|---|
| In_SubdivsionId | LongInteger |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: SupperMeeting_Carousel/default (×12)

```html
<div class="OSBlockWidget" data-block="Directory_SupperMeetings.SupperMeeting_DetailsBlock" id="b3-l1-1164_0-b2-b1-$b1">
  <div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="b3-l1-1164_0-b2-b1-b1-$b1"><!-- nested block: 573 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Subdivision_CS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$view", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$view", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "Connect_Subdivision_CS.model$UI_Screen_SubdivisionDetailsRec", "UBTConnect.controller$GetSkeleton_UI_SubdivisionDetails"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Subdivision_CSModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_controller, UBTConnectClientVariables, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_DetailsBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_controller;
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_DetailCard: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: !(model.variables.getSubdivisionDataAct.isDataFetchedAttr)
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
                                            uuid: "2",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            lazyImage_Placeholder: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                    inputs: {
                                                        EntityType: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
                                                        HasErrorMessage: true,
                                                        EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivisionIdAttr),
                                                        _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getSubdivisionDataAct.dataFetchStatusAttr),
                                                        ImageSize: model.getCachedValue(idService.getId("w1kVUIFZT0GwLyL50WuPtQ.ImageSize"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
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
                                                return [React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view, {
                                                    inputs: {
                                                        In_ShowAddress: true,
                                                        In_Subdivision_CardContent: model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr,
                                                        _in_Subdivision_CardContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getSubdivisionDataAct.dataFetchStatusAttr)
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
                                                    _dependencies: []
                                                })];
                                            })
                                        }
                                    })];
                                })
                            }
                        })];
                    }),
                    placeholder_CallToAction: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: !(model.variables.getSubdivisionDataAct.isDataFetchedAttr)
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
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
                                        inputs: {
                                            In_Title: model.getCachedValue(idService.getId("VOvwmc6mKkSQrPDlSne1cw.In_Title"), function() {
                                                    return UBTConnectController.default.get_LookupSection$Action(false, callContext).out_LookupOut;
                                                }, OS.DataTypes.DataTypes.Record, callContext.id).actionsAttr.pluralAttr;
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
                                            uuid: "8",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder_SectionContent: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, {
                                                    inputs: {
                                                        EntityType: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
                                                        ContactPopUp_OverrideOptions: model.getCachedValue(idService.getId("Nep7VSJbcE6MIFQjSLd5qg.ContactPopUp_OverrideOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec();
                                                                rec.nameAttr = model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr.nameAttr;
                                                                return rec;
                                                            }();
                                                        }, function() {
                                                            return model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr.nameAttr;
                                                        }),
```
(… 77 more lines in `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js`)
