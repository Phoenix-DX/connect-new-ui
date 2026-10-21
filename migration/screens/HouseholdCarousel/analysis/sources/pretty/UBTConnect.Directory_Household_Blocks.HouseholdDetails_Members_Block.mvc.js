define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Member_ListItem.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$model", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdMemberList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect.controller$GetSkeletonList_UI_HouseholdMembers", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function(OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Member_ListItem_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("isEnabled", "isEnabledIn", "isEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HouseholdMembers", "in_HouseholdMembersIn", "In_HouseholdMembers", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdMemberList());
                }, false, UBTConnectModel.UI_HouseholdMemberList),
                this.attr("_in_HouseholdMembersInDataFetchStatus", "_in_HouseholdMembersInDataFetchStatus", "_in_HouseholdMembersInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_NonHouseholdMembers", "in_NonHouseholdMembersIn", "In_NonHouseholdMembers", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdMemberList());
                }, false, UBTConnectModel.UI_HouseholdMemberList),
                this.attr("_in_NonHouseholdMembersInDataFetchStatus", "_in_NonHouseholdMembersInDataFetchStatus", "_in_NonHouseholdMembersInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false)
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
                    Model._hasValidationWidgetsValue = (((((((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_Member_ListItem_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("isEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.isEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("In_HouseholdMembers" in inputs) {
                this.variables.in_HouseholdMembersIn = inputs.In_HouseholdMembers;
                if ("_in_HouseholdMembersInDataFetchStatus" in inputs) {
                    this.variables._in_HouseholdMembersInDataFetchStatus = inputs._in_HouseholdMembersInDataFetchStatus;
                }

            }

            if ("In_NonHouseholdMembers" in inputs) {
                this.variables.in_NonHouseholdMembersIn = inputs.In_NonHouseholdMembers;
                if ("_in_NonHouseholdMembersInDataFetchStatus" in inputs) {
                    this.variables._in_NonHouseholdMembersInDataFetchStatus = inputs._in_NonHouseholdMembersInDataFetchStatus;
                }

            }

            if ("In_IsLoading" in inputs) {
                this.variables.in_IsLoadingIn = inputs.In_IsLoading;
                if ("_in_IsLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Household_Blocks.HouseholdDetails_Members_Block");
});
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

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/HouseholdMember_ListItem OnClickPerson");
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
                                                                                                EnableOptions: model.getCachedValue(idService.getId("bADzFfkKYECWvGw9e0hjuw.EnableOptions"), function() {
                                                                                                    return function() {
                                                                                                        var rec = new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec();
                                                                                                        rec.enableCallAttr = !(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).isDeceasedAttr);
                                                                                                        rec.enableEmailAttr = !(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).isDeceasedAttr);
                                                                                                        return rec;
                                                                                                    }();
                                                                                                }, function() {
                                                                                                    return model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).isDeceasedAttr;
                                                                                                }),
                                                                                                _enableOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersInDataFetchStatus),
                                                                                                EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
                                                                                                IsEnabled: model.variables.isEnabledIn,
                                                                                                _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                                                                EntityId: model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr,
                                                                                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersInDataFetchStatus)
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
                                                                                                uuid: "7",
                                                                                                alias: "7"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            _dependencies: []
                                                                                        })];
                                                                                    }, function() {
                                                                                        return [];
                                                                                    }), $if(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).hasNavigationAttr, false, this, function() {
                                                                                        return [React.createElement(OSWidgets.Container, {
                                                                                            align: /*Default*/ 0,
                                                                                            animate: false,
                                                                                            style: "display-flex flex-direction-column justify-content-center",
                                                                                            visible: true,
                                                                                            _idProps: {
                                                                                                service: idService,
                                                                                                uuid: "8"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                            inputs: {
                                                                                                Options: model.getCachedValue(idService.getId("7PTrlcbCRUCZ+pWnBEu27w.Options"), function() {
                                                                                                    return function() {
                                                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                                        rec.displayOptionsAttr = function() {
                                                                                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                                                            return rec;
                                                                                                        }();
                                                                                                        rec.heightOptionsAttr = function() {
                                                                                                            var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                                                                                            return rec;
                                                                                                        }();
                                                                                                        rec.widthOptionsAttr = function() {
                                                                                                            var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                                                                                            rec.minAttr = "100";
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
                                                                                                uuid: "9",
                                                                                                alias: "8"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            placeholders: {
                                                                                                content: new PlaceholderContent(function() {
                                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                        inputs: {
                                                                                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight,
                                                                                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral4
                                                                                                        },
                                                                                                        events: {
                                                                                                            _handleError: function(ex) {
                                                                                                                controller.handleError(ex);
                                                                                                            },
                                                                                                            click$Action: function() {
                                                                                                                return Promise.resolve().then(function() {
                                                                                                                    var eventHandlerContext = callContext.clone();
                                                                                                                    return OS.Flow.tryFinally(function() {
                                                                                                                        var varBag = {};
                                                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                                                                        return controller.handler_MemberOnClick$Action(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
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
                                                                                                            uuid: "10",
                                                                                                            alias: "9"
                                                                                                        },
                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                        _dependencies: []
                                                                                                    })];
                                                                                                })
                                                                                            },
                                                                                            _dependencies: [asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr)]
                                                                                        }))];
                                                                                    }, function() {
                                                                                        return [];
                                                                                    })];
                                                                                })
                                                                            },
                                                                            _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_HouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).hasNavigationAttr), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).isDeceasedAttr), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).hasCTAsAttr)]
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_HouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).hasNavigationAttr), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).isDeceasedAttr), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).hasCTAsAttr), asPrimitiveValue(model.variables.in_HouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr)]
                                                            })];
                                                        }, callContext, idService, "1")
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables._in_HouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isEnabledIn)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_HouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdMembersIn)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_HouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdMembersIn)]
                        }), React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
                            inputs: {
                                In_PaddingBottom: UBTConnectModel.staticEntities.uBT_Size.base,
                                In_PaddingTop: UBTConnectModel.staticEntities.uBT_Size.small,
                                In_Title: ""
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
                                name: "Members_MarriedChildren",
                                alias: "10"
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
                                        source: model.variables.in_NonHouseholdMembersIn,
                                        style: "list list-group list--gap-s",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus),
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_view, {
                                                    inputs: {
                                                        MarriageHighlightText: model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).marriageHighlightTextAttr,
                                                        _marriageHighlightTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus),
                                                        MarriedPartnerTakenText: model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).marriagePartnerTakenTextAttr,
                                                        _marriedPartnerTakenTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus),
                                                        DeceasedCaption: model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).lifeCycleTextAttr,
                                                        _deceasedCaptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus),
                                                        isEnabled: model.variables.isEnabledIn,
                                                        _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                                        Title: model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).titleAttr,
                                                        _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus),
                                                        LifeCycleText_Italic: model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).lifeCycleText_IsItallicAttr,
                                                        _lifeCycleText_ItalicInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus),
                                                        MarriedCaption: model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).marriageTextAttr,
                                                        _marriedCaptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus)
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

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/NonMember_ListItem OnClickPerson");
                                                                    return controller.handler_NonMemberOnClick$Action(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).localityNameAttr, model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).countryNameAttr, model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).householdIdAttr, controller.callContext(eventHandlerContext));
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
                                                        uuid: "13",
                                                        alias: "11"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        placeholder_Left: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                                inputs: {
                                                                    ImageSize: model.getCachedValue(idService.getId("vlIKP+MRz0CUDHyaX07vew.ImageSize"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                            rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
                                                                            rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
                                                                            return rec;
                                                                        }();
                                                                    }),
                                                                    EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
                                                                    EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr),
                                                                    _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NonHouseholdMembersInDataFetchStatus)
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
                                                                    uuid: "14",
                                                                    alias: "12"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            })];
                                                        }),
                                                        actions: new PlaceholderContent(function() {
                                                            return [$if(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).hasNavigationAttr, false, this, function() {
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
                                                                        Options: model.getCachedValue(idService.getId("tYV1WHk9P06JunSQ_fc49A.Options"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                rec.displayOptionsAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                                    rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                                                    rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                                                                    rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
                                                                                    return rec;
                                                                                }();
                                                                                rec.heightOptionsAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                                                                    return rec;
                                                                                }();
                                                                                rec.widthOptionsAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                                                                    rec.minAttr = "100";
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
                                                                        uuid: "16",
                                                                        alias: "13"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    placeholders: {
                                                                        content: new PlaceholderContent(function() {
                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                inputs: {
                                                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight,
                                                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral4
                                                                                },
                                                                                events: {
                                                                                    _handleError: function(ex) {
                                                                                        controller.handleError(ex);
                                                                                    },
                                                                                    click$Action: function() {
                                                                                        return Promise.resolve().then(function() {
                                                                                            var eventHandlerContext = callContext.clone();
                                                                                            return OS.Flow.tryFinally(function() {
                                                                                                var varBag = {};
                                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                                                return controller.handler_NonMemberOnClick$Action(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).localityNameAttr, model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).countryNameAttr, model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).householdIdAttr, controller.callContext(eventHandlerContext));
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
                                                                                    uuid: "17",
                                                                                    alias: "14"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                _dependencies: []
                                                                            })];
                                                                        })
                                                                    },
                                                                    _dependencies: [asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).householdIdAttr), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).countryNameAttr), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).localityNameAttr)]
                                                                }))];
                                                            }, function() {
                                                                return [];
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables._in_NonHouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).householdIdAttr), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).countryNameAttr), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).localityNameAttr), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).hasNavigationAttr), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn.getCurrent(callContext.iterationContext).idAttr)]
                                                })];
                                            }, callContext, idService, "2")
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_NonHouseholdMembersInDataFetchStatus)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_NonHouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables.in_NonHouseholdMembersIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_NonHouseholdMembersIn), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._in_NonHouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_HouseholdMembersInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdMembersIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$debugger", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdMemberList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect.controller$GetSkeletonList_UI_HouseholdMembers", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_HouseholdDetails_Members_Block_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            var getSkeletonList_UI_HouseholdMembersVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSkeletonList_UI_HouseholdMembersVar = getSkeletonList_UI_HouseholdMembersVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QPIbC4anYEin0kiOm9VC1w:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.9ilrATIyy0+Hxt0jBAMCrQ/ClientActions.QPIbC4anYEin0kiOm9VC1w:alZ8wxz5VmenRCEgpU+cXw", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e65XsPIzNU2yHCD2ncCAmQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2rlL8w4muE677GLflGKLQQ", callContext.id) && (model.variables.in_IsLoadingIn && model.variables.in_HouseholdMembersIn.isEmpty))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VinjZ_tQbkKEZnOW2Eyt5g", callContext.id);
                    // Execute Action: GetSkeletonList_UI_HouseholdMembers
                    getSkeletonList_UI_HouseholdMembersVar.value = UBTConnectController.default.getSkeletonList_UI_HouseholdMembers$Action(5, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1NY2c5hZ90iH8qd2dH2Gtw", callContext.id);
                    // In_HouseholdMembers = GetSkeletonList_UI_HouseholdMembers.UI_HouseholdMember
                    model.variables.in_HouseholdMembersIn = getSkeletonList_UI_HouseholdMembersVar.value.uI_HouseholdMemberOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7d_RJf+rcECGFPheXcZTOw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7d_RJf+rcECGFPheXcZTOw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QPIbC4anYEin0kiOm9VC1w", callContext.id);
            }

        };
        Controller.prototype._handler_MemberOnClick$Action = function(memberIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MemberOnClick");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.Handler_MemberOnClick$vars"))());
            vars.value.memberIdInLocal = memberIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:13FEUZ4N6kypFWyCLugs1Q:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.9ilrATIyy0+Hxt0jBAMCrQ/ClientActions.13FEUZ4N6kypFWyCLugs1Q:XRh2EutgBesfLU49jcha5Q", "UBTConnect", "Handler_MemberOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N9hyqg+X7USTNYCp+1XAtQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cHVxDfAJN0qnPWprBnWgtg", callContext.id) && (vars.value.memberIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0)) || !(model.variables.isEnabledIn)))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cOFsslMHxUuCXGt91nj4Hw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SrD1mXdvJE2k4_FooJrf6A", callContext.id);
                        // Trigger Event: Event_MemberOnClick
                        return controller.event_MemberOnClick$Action(vars.value.memberIdInLocal, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eZBZIgvvYkyiQqnrgJ6X3Q", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:13FEUZ4N6kypFWyCLugs1Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:13FEUZ4N6kypFWyCLugs1Q", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.Handler_MemberOnClick$vars", [{
            name: "MemberId",
            attrName: "memberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._handler_NonMemberOnClick$Action = function(target_LocalityNameIn, target_CountryNameIn, target_HouseholdIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NonMemberOnClick");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.Handler_NonMemberOnClick$vars"))());
            vars.value.target_LocalityNameInLocal = target_LocalityNameIn;
            vars.value.target_CountryNameInLocal = target_CountryNameIn;
            vars.value.target_HouseholdIdInLocal = target_HouseholdIdIn;
            var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.hasAccessToRegionVar = hasAccessToRegionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zznNfvJJDE+dbs2GMSB9cw:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.9ilrATIyy0+Hxt0jBAMCrQ/ClientActions.zznNfvJJDE+dbs2GMSB9cw:pxyq5ORzc5+IPSWUsUEnfg", "UBTConnect", "Handler_NonMemberOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sn26ZHvZZEqsyXpWjj8ubQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ptZ_VcGp1kGER4moeKCKdA", callContext.id);
                // Execute Action: HasAccessToRegion
                model.flush();
                return UBTConnectController.default.hasAccessToRegion$Action(vars.value.target_LocalityNameInLocal, vars.value.target_CountryNameInLocal, callContext).then(function(value) {
                    hasAccessToRegionVar.value = value;
                }).then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+W+toYZYh0yBmEAn6zGN_w", callContext.id) && hasAccessToRegionVar.value.hasAccessOut)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wH1nsGQbdkyCfMYoNPlUTw", callContext.id);
                            // Trigger Event: Event_NonMemberOnClick
                            return controller.event_NonMemberOnClick$Action(vars.value.target_HouseholdIdInLocal, callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_G+rxPFY70+vq_7FdmufRg", callContext.id);
                            });
                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6gOsqYHZwkmwiUprQ0fOfg", callContext.id);
                            // Execute Action: App_Subscription_ShowUpgradePopUp
                            model.flush();
                            return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MmaZ+6iPWkeU2lfipJU2Cw", callContext.id);
                            });
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zznNfvJJDE+dbs2GMSB9cw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zznNfvJJDE+dbs2GMSB9cw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.Handler_NonMemberOnClick$vars", [{
            name: "Target_LocalityName",
            attrName: "target_LocalityNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Target_CountryName",
            attrName: "target_CountryNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Target_HouseholdId",
            attrName: "target_HouseholdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);

        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.handler_MemberOnClick$Action = function(memberIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MemberOnClick$Action, callContext, memberIdIn);

        };
        Controller.prototype.handler_NonMemberOnClick$Action = function(target_LocalityNameIn, target_CountryNameIn, target_HouseholdIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NonMemberOnClick$Action, callContext, target_LocalityNameIn, target_CountryNameIn, target_HouseholdIdIn);

        };
        Controller.prototype.event_MemberOnClick$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_NonMemberOnClick$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ:uCNLUKQMufTVXdBiwtGWyw", "UBTConnect", "Directory_Household_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9ilrATIyy0+Hxt0jBAMCrQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.9ilrATIyy0+Hxt0jBAMCrQ:oQ4FGILixfvG8Lu_a05mCg", "UBTConnect", "HouseholdDetails_Members_Block", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9ilrATIyy0+Hxt0jBAMCrQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household_Blocks/HouseholdDetails_Members_Block On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
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

define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_Members_Block.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "VinjZ_tQbkKEZnOW2Eyt5g": {
            getter: function(varBag, idService) {
                return varBag.getSkeletonList_UI_HouseholdMembersVar.value;
            }
        },
        "m73KLTkTP0y81pooa7gXZA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "3PkcQAtjcEaEWXTgkKFMGQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.target_LocalityNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "lllbH9Ms4U6qchBBJ9lPwQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.target_CountryNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "izuX44FhG0qO78kxk60ahQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.target_HouseholdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "ptZ_VcGp1kGER4moeKCKdA": {
            getter: function(varBag, idService) {
                return varBag.hasAccessToRegionVar.value;
            }
        },
        "XOWSr1XsrEC3TNkzQIwlxg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "oZCfXAdZkE2iFnZn5rzC3g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HouseholdMembersIn;
            }
        },
        "cMvZZv0g4kiyFDH82gXXhA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_NonHouseholdMembersIn;
            }
        },
        "vM4mCGQZKkCDG7Mjsv_Twg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "DNpRNf0Hf0eyW7vNwppA+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "EwvjzzP2AkCGOFHYf3bk9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Members"));
                })(varBag.model, idService);
            }
        },
        "r8x8oA88SUK2L1ocwlQkLw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "qNNLgjy9B02UiSiREnn2gQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Members"));
                })(varBag.model, idService);
            }
        },
        "eMFd9fMlZU2jNr175Ks60g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_SectionContent"));
                })(varBag.model, idService);
            }
        },
        "QZiqAFCLLUKoX4C5E8rEew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ParentsAndChildren"));
                })(varBag.model, idService);
            }
        },
        "HCdkYO5sy0q4WFU+NsVEqA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Left"));
                })(varBag.model, idService);
            }
        },
        "krvQB0+d00a5i_XAHeMk0g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Actions"));
                })(varBag.model, idService);
            }
        },
        "NdlZalHBHUSaxkuVEtXc2Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "+Rimbn4e30OkdZJZhc_Ojw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasCTAs"));
                })(varBag.model, idService);
            }
        },
        "sNH+rjQI70SYkw2a2lYWhw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "KHOXeDbV_EqmF7ZNjTLk+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Members_MarriedChildren"));
                })(varBag.model, idService);
            }
        },
        "idf9q5yRL0urgudbnefYyg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_SectionContent"));
                })(varBag.model, idService);
            }
        },
        "3MZs9gN0p0iFES3RPEI7Sg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Left"));
                })(varBag.model, idService);
            }
        },
        "7MBGRKm4n0qsGYKz9a35wg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Actions"));
                })(varBag.model, idService);
            }
        },
        "nwwWAbkavkGFbJv4lik9cQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});