# UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc.js`
- Child blocks: UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectCorePatterns.Member_ListItem, UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section, UBTConnectLibrary.ConnectCorePatterns.Member_ListItem, UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem)

## Inputs

| Input | Type |
|---|---|
| isEnabled | Boolean |
| In_NonHouseholdMembers | RecordList UI_HouseholdMemberList |
| In_IsLoading | Boolean |

## Captured DOM variants (1 distinct, 16 instances)

### Variant 1: HouseholdCarousel/default (×16)

```html
<div class="OSBlockWidget" data-block="Directory_Household_Blocks.HouseholdDetails_Members_Block" id="b3-l1-1152_0-b2-b3-b1-$b39">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-1152_0-b2-b3-b1-b39-$b1"><!-- nested block: 315 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Member_ListItem.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$view", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdMemberList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect.controller$GetSkeletonList_UI_HouseholdMembers", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_model, UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Member_ListItem_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.HouseholdDetails_Members_Block";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Member_ListItem_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: model.variables.in_IsLoadingIn,
                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLoadingInDataFetchStatus)
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Household_Members.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.marginSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
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
                                name: "Household_Members",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
                                        inputs: {
                                            In_Title: "Household members"
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
                                            name: "Members",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder_SectionContent: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.List, {
                                                    animateItems: true,
                                                    extendedProperties: {
                                                        "disable-virtualization": "True"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: /*Default*/ 0,
                                                    source: model.variables.in_HouseholdMembersIn,
                                                    style: "list list-group list--gap-s",
                                                    tag: "div",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "3"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersInDataFetchStatus),
                                                    placeholders: {
                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                            return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_Member_ListItem_mvc_view, {
                                                                inputs: {
                                                                    isEnabled: model.variables.isEnabledIn,
                                                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                                    LifeCycleText: model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).lifeCycleTextAttr,
                                                                    _lifeCycleTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersInDataFetchStatus),
                                                                    Title: model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).titleAttr,
                                                                    _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersInDataFetchStatus),
                                                                    LifeCycleText_Italic: model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).lifeCycleText_IsItallicAttr,
                                                                    _lifeCycleText_ItalicInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersInDataFetchStatus)
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    onClickPerson$Action: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);
                                                                                return controller.handler_MemberOnClick$Action(((((model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).memberRoleAttr) !== (UBTConnectModel.staticEntities.connect_HouseholdMemberRole.child))) ? (model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr) : (OS.BuiltinFunctions.integerToLongInteger(0))), controller.callContext(eventHandlerContext));
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
                                                                    name: "ParentsAndChildren",
                                                                    alias: "4"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    placeholder_Left: new PlaceholderContent(function() {
                                                                        return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                                            inputs: {
                                                                                EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr),
                                                                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersInDataFetchStatus),
                                                                                EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
                                                                                ImageSize: model.getCachedValue(idService.getId("OEOYOG6ArEioGeos0fxGeQ.ImageSize"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                                        rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
                                                                                        rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
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
                                                                                uuid: "5",
                                                                                alias: "5"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        })];
                                                                    }),
                                                                    actions: new PlaceholderContent(function() {
                                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                            inputs: {
                                                                                Options: model.getCachedValue(idService.getId("A5Csk_QM+ECOHM8llx_IBA.Options"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                        rec.displayOptionsAttr = function() {
                                                                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                                            rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                                                            rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.spaceBetween;
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
                                                                                    return [$if(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).hasCTAsAttr, false, this, function() {
                                                                                        return [React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, {
                                                                                            inputs: {
```
(… 375 more lines in `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc.js`)
