define("UBTConnect.Directory_Locality.Locality_Details.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "Connect_Geography_CS.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$model", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.Layouts.SubHeader_MainPages.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect.Directory_Locality.Locality_DateTimeLabel.mvc$model", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$model", "UBTConnect.Directory_Locality.Locality_Households.mvc$model", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$model", "UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$model", "UBTConnect.Directory_Locality.Locality_Interchange.mvc$model", "UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$model", "UBTConnectLibrary.ConnectPatterns.ComingSoon_V2.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.controller$GetHasMapsEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$Entities_LocalityMenuOptionsRec", "UBTConnect.controller$GetLocalityMenu", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "UBTConnect.model$LongIntegerLongIntegerRecord", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect_Utils.controller$GetHasC1DirectoryView", "UBTConnect.controller$GetSample_FilterTags", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.controller$GetUserInformation_Wrapper", "UBTConnectLibrary.controller$StopPropagationHelper_Check", "Connect_Geography_CS.model$UI_LocalityDetails_ForHouseholdRec"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, Connect_Geography_CSModel, UBTConnectLibraryController, UBTConnectLibrary_Layouts_Layout_MainPages_mvcModel, UBTConnectLibrary_ConnectPatterns_StaticInput_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_Layouts_SubHeader_MainPages_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Directory_Locality_Locality_DateTimeLabel_mvcModel, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel, UBTConnect_Directory_Locality_Locality_Households_mvcModel, UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel, UBTConnect_Directory_Locality_Locality_Subdivisions_mvcModel, UBTConnect_Directory_Locality_Locality_Interchange_mvcModel, UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvcModel, UBTConnectLibrary_ConnectPatterns_ComingSoon_V2_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;

    var Get_LocalityDetailsDataActRec = (function(_super) {
        __extends(Get_LocalityDetailsDataActRec, _super);

        function Get_LocalityDetailsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_LocalityDetailsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("LocalityDetails", "localityDetailsOut", "LocalityDetails", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_LocalityDetails_ForHouseholdRec());
                }, true, Connect_Geography_CSModel.UI_LocalityDetails_ForHouseholdRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_LocalityDetailsDataActRec.fromStructure = function(str) {
            return new Get_LocalityDetailsDataActRec(new Get_LocalityDetailsDataActRec.RecordClass({
                localityDetailsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Get_LocalityDetailsDataActRec.init();
        return Get_LocalityDetailsDataActRec;
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
                this.attr("HeaderIsScrolled", "headerIsScrolledVar", "HeaderIsScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("TagsList_SelectedTag", "tagsList_SelectedTagVar", "TagsList_SelectedTag", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Logged_User", "logged_UserVar", "Logged_User", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.LongIntegerLongIntegerRecord());
                }, false, UBTConnectModel.LongIntegerLongIntegerRecord),
                this.attr("IsUserLocality", "isUserLocalityVar", "IsUserLocality", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("LocalityLabel", "localityLabelVar", "LocalityLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("IsScreenInitialized", "isScreenInitializedVar", "IsScreenInitialized", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("LocalityId", "localityIdIn", "LocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_localityIdInDataFetchStatus", "_localityIdInDataFetchStatus", "_localityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("PreloadedLocalityLabel", "preloadedLocalityLabelIn", "PreloadedLocalityLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_preloadedLocalityLabelInDataFetchStatus", "_preloadedLocalityLabelInDataFetchStatus", "_preloadedLocalityLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Get_LocalityDetails", "get_LocalityDetailsDataAct", "get_LocalityDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_LocalityDetailsDataActRec());
                }, true, Get_LocalityDetailsDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((((((((((((((UBTConnectLibrary_Layouts_Layout_MainPages_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_StaticInput_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_Layouts_SubHeader_MainPages_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Locality_DateTimeLabel_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Locality_Households_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Locality_Subdivisions_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Locality_Interchange_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_ComingSoon_V2_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("LocalityId" in inputs) {
                this.variables.localityIdIn = OS.DataConversion.ServerDataConverter.from(inputs.LocalityId, OS.DataTypes.DataTypes.LongInteger);
            }

            if ("PreloadedLocalityLabel" in inputs) {
                this.variables.preloadedLocalityLabelIn = OS.DataConversion.ServerDataConverter.from(inputs.PreloadedLocalityLabel, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.Locality_Details");
});
define("UBTConnect.Directory_Locality.Locality_Details.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "Connect_Geography_CS.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.Locality_Details.mvc$model", "UBTConnect.Directory_Locality.Locality_Details.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.Layouts.SubHeader_MainPages.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect.Directory_Locality.Locality_DateTimeLabel.mvc$view", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$view", "UBTConnect.Directory_Locality.Locality_Households.mvc$view", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$view", "UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$view", "UBTConnect.Directory_Locality.Locality_Interchange.mvc$view", "UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$view", "UBTConnectLibrary.ConnectPatterns.ComingSoon_V2.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.controller$GetHasMapsEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$Entities_LocalityMenuOptionsRec", "UBTConnect.controller$GetLocalityMenu", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "UBTConnect.model$LongIntegerLongIntegerRecord", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect_Utils.controller$GetHasC1DirectoryView", "UBTConnect.controller$GetSample_FilterTags", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.controller$GetUserInformation_Wrapper", "UBTConnectLibrary.controller$StopPropagationHelper_Check", "Connect_Geography_CS.model$UI_LocalityDetails_ForHouseholdRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, Connect_Geography_CSModel, UBTConnectLibraryController, React, OSView, UBTConnect_Directory_Locality_Locality_Details_mvc_model, UBTConnect_Directory_Locality_Locality_Details_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_Layouts_SubHeader_MainPages_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Directory_Locality_Locality_DateTimeLabel_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnect_Directory_Locality_Locality_Households_mvc_view, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_view, UBTConnect_Directory_Locality_Locality_Interchange_mvc_view, UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_V2_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_Locality.Locality_Details";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_Layouts_SubHeader_MainPages_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Directory_Locality_Locality_DateTimeLabel_mvc_view, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, UBTConnect_Directory_Locality_Locality_Households_mvc_view, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_view, UBTConnect_Directory_Locality_Locality_Interchange_mvc_view, UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_view, UBTConnectLibrary_ConnectPatterns_ComingSoon_V2_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Locality_Details_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Locality_Details_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "Locality_Details";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onHeaderScrolled$Action: function(event_IsHeaderScrolledIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages OnHeaderScrolled");
                            controller.handler_OnHeaderScrolled$Action(event_IsHeaderScrolledIn, controller.callContext(eventHandlerContext));
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return ["Directory"];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    placeholder_Header_Input: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, {
                            inputs: {
                                In_Prompt: "Search for households or members"
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                click_Input$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/StaticInput Click_Input");
                                        controller.onClick_Search$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_Header_Input_Icon: new PlaceholderContent(function() {
                        return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnect_UtilsController.default.getHasMapsEnabled$Action(callContext).hasAccessOut;
                        }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.explore
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
                                            controller.onClick_Maps$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        })];
                    }),
                    headerContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "locality-subtitle",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_Layouts_SubHeader_MainPages_mvc_view, {
                            inputs: {
                                In_IsShowSearchIcon: model.variables.headerIsScrolledVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                click_Search$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/SubHeader_MainPages Click_Search");
                                        controller.onClick_Search$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "4",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_Title: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: true,
                                        visible: model.variables.localityIdIn.equals(model.variables.logged_UserVar.localityIdAttr),
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: "font-size-xxs font-regular",
                                        text: ["My Locality:"],
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedEvents: {
                                            onClick: function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/Locality_Details/Container onclick");
                                                    controller.handler_NavigateTo_BrowsebyLocation$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });

                                                ;
                                            }
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                        inputs: {
                                            ColumnOptions: model.getCachedValue(idService.getId("XQlkxL0NZ02L9nSdFJMDJA.ColumnOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                    rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                                                    return rec;
                                                }();
                                            }),
                                            ExtendedClasses: "fit-content"
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
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            left: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                                    inputs: {
                                                        In_IsLoading: (model.variables.localityLabelVar === "")
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
                                                        alias: "6"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        placeholder_LoadingSection: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                inputs: {
                                                                    Options: model.getCachedValue(idService.getId("97dPzvc4OkW8udF092BRgQ.Options"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                            rec.displayOptionsAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                                rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                                                rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
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
                                                                    uuid: "10",
                                                                    alias: "7"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    content: new PlaceholderContent(function() {
                                                                        return [$if((model.variables.localityLabelVar === ""), false, this, function() {
                                                                            return [React.createElement(OSWidgets.Expression, {
                                                                                style: "font-size-s font-semi-bold",
                                                                                value: model.variables.localityLabelVar,
                                                                                _idProps: {
                                                                                    service: idService,
                                                                                    uuid: "11"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider
                                                                            })];
                                                                        }, function() {
                                                                            return [React.createElement(OSWidgets.Expression, {
                                                                                style: "font-size-s font-semi-bold",
                                                                                value: model.variables.localityLabelVar,
                                                                                _idProps: {
                                                                                    service: idService,
                                                                                    uuid: "12"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider
                                                                            })];
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.localityLabelVar)]
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.localityLabelVar)]
                                                })];
                                            }),
                                            right: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                    inputs: {
                                                        Options: model.getCachedValue(idService.getId("onixKdqP_kiNJG598Fi6Jg.Options"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                rec.displayOptionsAttr = function() {
                                                                    var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                                    rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                                    rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
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
                                                        uuid: "13",
                                                        alias: "8"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                inputs: {
                                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.expandMore,
                                                                    In_ExtendedClasses: "directory-locality padding-left-xs"
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
                                                                    alias: "9"
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
                                        _dependencies: [asPrimitiveValue(model.variables.localityLabelVar)]
                                    }), $if((model.variables.get_LocalityDetailsDataAct.isDataFetchedAttr && (model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr.timezoneNameAttr === "")), false, this, function() {
                                        return [];
                                    }, function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                            inputs: {
                                                In_IsLoading: (!(model.variables.get_LocalityDetailsDataAct.isDataFetchedAttr) || model.variables.get_LocalityDetailsDataAct.hasFetchErrorAttr)
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
                                                uuid: "15",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                        inputs: {
                                                            Options: model.getCachedValue(idService.getId("Xl3Ft+Nm1EaGOx9D8tvNJg.Options"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                    rec.textOptionsAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
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
                                                            alias: "11"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            content: new PlaceholderContent(function() {
                                                                return [$if((model.variables.localityLabelVar === ""), false, this, function() {
                                                                    return [React.createElement(OSWidgets.Expression, {
                                                                        style: "font-size-s font-semi-bold",
                                                                        value: "Local Timezone And UTC Offset",
                                                                        _idProps: {
                                                                            service: idService,
                                                                            uuid: "17"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider
                                                                    })];
                                                                }, function() {
                                                                    return [React.createElement(UBTConnect_Directory_Locality_Locality_DateTimeLabel_mvc_view, {
                                                                        inputs: {
                                                                            In_TimezoneOffset: OS.BuiltinFunctions.longIntegerToInteger(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr.timezoneOffsetAttr),
                                                                            _in_TimezoneOffsetInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr)
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
                                                                            alias: "12"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        _dependencies: []
                                                                    })];
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr.timezoneOffsetAttr), asPrimitiveValue(model.variables.localityLabelVar)]
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr.timezoneOffsetAttr), asPrimitiveValue(model.variables.localityLabelVar)]
                                        })];
                                    }))];
                                }),
                                placeholder_Icons: new PlaceholderContent(function() {
                                    return [$if(model.variables.headerIsScrolledVar, false, this, function() {
                                        return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnect_UtilsController.default.getHasMapsEnabled$Action(callContext).hasAccessOut;
                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                inputs: {
                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.explore
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
                                                            controller.onClick_Maps$Action(controller.callContext(eventHandlerContext));
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
                                                    uuid: "19",
                                                    alias: "13"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.headerIsScrolledVar), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr.timezoneOffsetAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr.timezoneNameAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.localityLabelVar), asPrimitiveValue(model.variables.logged_UserVar.localityIdAttr), asPrimitiveValue(model.variables.localityIdIn)]
                        })), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                ExtendedClasses: "background-neutral-0",
                                Options: model.getCachedValue(idService.getId("nTR69g+VjEq8tqFgA5+eVQ.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                alias: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                        inputs: {
                                            In_IsLoading: !(model.variables.isScreenInitializedVar)
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
                                            alias: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder_LoadingSection: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_view, {
                                                    inputs: {
                                                        ExtendedClasses: "household-tag",
                                                        In_TagToggleList: model.variables.tagsListVar,
                                                        In_HorizontalPadding: UBTConnectModel.staticEntities.uBT_Size.base,
                                                        In_IsMandatorySelection: true,
                                                        In_IsSingleSelection: true
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
                                                                controller.handler_HorizontalTagListChanged$Action(updatedTagListIn, controller.callContext(eventHandlerContext));
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
                                                        uuid: "22",
                                                        alias: "16"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.tagsListVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.tagsListVar), asPrimitiveValue(model.variables.isScreenInitializedVar)]
                        })];
                    }),
                    content: new PlaceholderContent(function() {
                        return [$if((model.variables.tagsList_SelectedTagVar === OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptionsOut;
                        }, OS.DataTypes.DataTypes.Record, callContext.id).householdsAttr), false, this, function() {
                            return [React.createElement(UBTConnect_Directory_Locality_Locality_Households_mvc_view, {
                                inputs: {
                                    In_HouseholdCount: model.variables.get_LocalityDetailsDataAct.localityDetailsOut.householdCountAttr,
                                    _in_HouseholdCountInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr),
                                    In_LocalityId: model.variables.localityIdIn,
                                    In_BretherenCount: model.variables.get_LocalityDetailsDataAct.localityDetailsOut.bretherenCountAttr,
                                    _in_BretherenCountInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    event_NavigateToHouseholdDetails$Action: function(event_HouseholdIdIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/Locality_Households Event_NavigateToHouseholdDetails");
                                            controller.handler_NavigateTo_HouseholdDetails$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
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
                                    uuid: "23",
                                    alias: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if((model.variables.tagsList_SelectedTagVar === OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptionsOut;
                        }, OS.DataTypes.DataTypes.Record, callContext.id).myHouseholdAttr), false, this, function() {
                            return [React.createElement(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, {
                                inputs: {
                                    In_ShowKebabMenu: true,
                                    HouseholdId: model.variables.logged_UserVar.householdIdAttr,
                                    In_CheckVisibility: true,
                                    In_HideActions: true
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
                                    alias: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    placeholder_CarouselTag: PlaceholderContent.Empty
                                },
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if((model.variables.tagsList_SelectedTagVar === OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptionsOut;
                        }, OS.DataTypes.DataTypes.Record, callContext.id).subdivsionAttr), false, this, function() {
                            return [React.createElement(UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_view, {
                                inputs: {
                                    LocalityId: model.variables.localityIdIn
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
                                    alias: "19"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if((model.variables.tagsList_SelectedTagVar === OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptionsOut;
                        }, OS.DataTypes.DataTypes.Record, callContext.id).interchangeAttr), false, this, function() {
                            return [React.createElement(UBTConnect_Directory_Locality_Locality_Interchange_mvc_view, {
                                inputs: {
                                    In_InterchangeLocalityId: model.variables.localityIdIn
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
                                    alias: "20"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if((model.variables.tagsList_SelectedTagVar === OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptionsOut;
                        }, OS.DataTypes.DataTypes.Record, callContext.id).oneSchoolGlobalAttr), false, this, function() {
                            return [React.createElement(UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_view, {
                                inputs: {
                                    In_LocalityTimezoneData: model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr,
                                    _in_LocalityTimezoneDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr),
                                    In_LocalityId: model.variables.localityIdIn
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    event_OnClick_Bookmark$Action: function(isBookmarkedIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/Locality_OneSchoolGlobal Event_OnClick_Bookmark");
                                            controller.handler_OnClick_Bookmark$Action(isBookmarkedIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    event_OnClick$Action: function(event_OneSchoolGlobalIdIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/Locality_OneSchoolGlobal Event_OnClick");
                                            controller.handler_NavigateTo_OneschoolGlobalDetails$Action(event_OneSchoolGlobalIdIn, controller.callContext(eventHandlerContext));
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
                                    name: "Block_OneSchoolGlobal_List",
                                    alias: "21"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if((model.variables.tagsList_SelectedTagVar === OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptionsOut;
                        }, OS.DataTypes.DataTypes.Record, callContext.id).localityContactsAttr), false, this, function() {
                            return [$if(true, false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "margin-top-s  margin-x-base",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "28"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(UBTConnectLibrary_ConnectPatterns_ComingSoon_V2_mvc_view, {
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
                                        uuid: "29",
                                        alias: "22"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                }))];
                            }, function() {
                                return [];
                            })];
                        }, function() {
                            return [];
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
                            inputs: {
                                ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.directory
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
                                alias: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
                                uuid: "31",
                                alias: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.tagsList_SelectedTagVar), asPrimitiveValue(model.variables.tagsListVar), asPrimitiveValue(model.variables.isScreenInitializedVar), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.bretherenCountAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.householdCountAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityTimezoneAttr), asPrimitiveValue(model.variables.get_LocalityDetailsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.localityLabelVar), asPrimitiveValue(model.variables.logged_UserVar.householdIdAttr), asPrimitiveValue(model.variables.logged_UserVar.localityIdAttr), asPrimitiveValue(model.variables.localityIdIn), asPrimitiveValue(model.variables.headerIsScrolledVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Directory_Locality.Locality_Details.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "Connect_Geography_CS.model", "UBTConnectLibrary.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.Locality_Details.mvc$debugger", "UBTConnect.Directory_Locality.controller", "UBTConnect.Directory_Locality.Locality_Details.mvc$controller.Handler_HorizontalTagListChanged.ScrollTopJS", "UBTConnect_Utils.controller$GetHasMapsEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$Entities_LocalityMenuOptionsRec", "UBTConnect.controller$GetLocalityMenu", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "UBTConnect.model$LongIntegerLongIntegerRecord", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec", "Connect_Geography_CS.model$UI_LocalityTimezoneRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect_Utils.controller$GetHasC1DirectoryView", "UBTConnect.controller$GetSample_FilterTags", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.controller$GetUserInformation_Wrapper", "UBTConnectLibrary.controller$StopPropagationHelper_Check", "Connect_Geography_CS.model$UI_LocalityDetails_ForHouseholdRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, Connect_Geography_CSModel, UBTConnectLibraryController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_Locality_Details_mvc_Debugger, _flow_UBTConnect_Directory_LocalityController, UBTConnect_Directory_Locality_Locality_Details_mvc_controller_Handler_HorizontalTagListChanged_ScrollTopJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                get_LocalityDetails$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                get_LocalityDetails$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.get_LocalityDetails$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zRD_rdL_rUSlwxTVbO9h0w:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/DataActions.zRD_rdL_rUSlwxTVbO9h0w:ZEG7LnPi_03ScB3zUhDn7g", "UBTConnect", "Get_LocalityDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Details/Get_LocalityDetails");
                return controller.callDataAction("DataActionGet_LocalityDetails", "screenservices/UBTConnect/Directory_Locality/Locality_Details/DataActionGet_LocalityDetails", "h_OXUKCj5P70ZmPiR_aMHQ", function(b) {
                    model.variables.get_LocalityDetailsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_LocalityDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_LocalityDetailsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Details/Get_LocalityDetails On After Fetch");
                    controller._onAfterFetch_Get_LocalityDetails$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zRD_rdL_rUSlwxTVbO9h0w", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["get_LocalityDetails$DataActRefresh"];
        // Client Actions
        Controller.prototype._handler_NavigateTo_BrowsebyLocation$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_BrowsebyLocation");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yhXTH8uD7UO992bZqrGT9A:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.yhXTH8uD7UO992bZqrGT9A:EzWPl_gKC1mircE+49NM6Q", "UBTConnect", "Handler_NavigateTo_BrowsebyLocation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CH_BQ+P2QUi9hufbB5n3Bg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f0BNK24GyUil0kZ31tblqw", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnect_UtilsController.default.getHasC1DirectoryView$Action(callContext).hasC1DirectoryViewOut;
                    }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9EAz8FlGCkaREarG3eWi2Q", callContext.id);
                    // Destination: /UBTConnect/CountryDetails
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/CountryDetails", {
                        CountryCode: OS.DataConversion.ServerDataConverter.asString(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityDetailsAttr.countryCodeAttr, OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oqHSIL3nAU+FhtDEUxVmPA", callContext.id);
                    // Destination: /UBTConnect/BrowseDirectory
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/BrowseDirectory", {
                        CountryCode: OS.DataConversion.ServerDataConverter.asString(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityDetailsAttr.countryCodeAttr, OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yhXTH8uD7UO992bZqrGT9A", callContext.id);
            }

        };
        Controller.prototype._handler_OnClick_Bookmark$Action = function(isBookmarkedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClick_Bookmark");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_OnClick_Bookmark$vars"))());
            vars.value.isBookmarkedInLocal = isBookmarkedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8BLiH6PFLUmIWBcF3F_yxg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.8BLiH6PFLUmIWBcF3F_yxg:008bEScJktHXg0f2oSj6xg", "UBTConnect", "Handler_OnClick_Bookmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mYVQCQGmEU+HUXRaAuneYQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5S8f464wvkyntpTwZSEbKg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8BLiH6PFLUmIWBcF3F_yxg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_OnClick_Bookmark$vars", [{
            name: "IsBookmarked",
            attrName: "isBookmarkedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            var getSample_FilterTagsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSample_FilterTagsVar = getSample_FilterTagsVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ghtoWE5z9kCNRdukJcULbQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.ghtoWE5z9kCNRdukJcULbQ:h+T42fdNEYTYoH4+XoIxkg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b7mP8BEdrkuieozOPhBSmg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oFPJccvEg0GcVvtVTQfl_A", callContext.id) && (model.variables.localityLabelVar === ""))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:556uehSZTEWziCldfxXJxA", callContext.id);
                    // LocalityLabel = PreloadedLocalityLabel
                    model.variables.localityLabelVar = model.variables.preloadedLocalityLabelIn;
                }

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Phk+jwrYnU+ElEUHDec1xw", callContext.id) && model.variables.tagsListVar.isEmpty)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HTXNX78PRECn+Im_k5Kb3A", callContext.id);
                    // Execute Action: GetSample_FilterTags
                    getSample_FilterTagsVar.value = UBTConnectController.default.getSample_FilterTags$Action(model.variables.isUserLocalityVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U3H9MX4In0yfd8CSyCPpCw", callContext.id);
                    // TagsList = GetSample_FilterTags.TagToggleList
                    model.variables.tagsListVar = getSample_FilterTagsVar.value.tagToggleListOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F5efQBwaXkW2HGMGyQMOsg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F5efQBwaXkW2HGMGyQMOsg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ghtoWE5z9kCNRdukJcULbQ", callContext.id);
            }

        };
        Controller.prototype._handler_OnHeaderScrolled$Action = function(event_IsHeaderScrolledIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnHeaderScrolled");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_OnHeaderScrolled$vars"))());
            vars.value.event_IsHeaderScrolledInLocal = event_IsHeaderScrolledIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AEuWXF5PjUyp+2an3ob2JQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.AEuWXF5PjUyp+2an3ob2JQ:M9APqGFCd0M7CwJD2z90Sg", "UBTConnect", "Handler_OnHeaderScrolled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZuelqFr2rEOUNDelXP7Ouw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FSd06jZDwE6fQHWoEToKEQ", callContext.id);
                // HeaderIsScrolled = Event_IsHeaderScrolled
                model.variables.headerIsScrolledVar = vars.value.event_IsHeaderScrolledInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZyauUX9590W6EQ6U079vMA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AEuWXF5PjUyp+2an3ob2JQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_OnHeaderScrolled$vars", [{
            name: "Event_IsHeaderScrolled",
            attrName: "event_IsHeaderScrolledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onAfterFetch_Get_LocalityDetails$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_Get_LocalityDetails");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OLBDYp7eeEiHajgAWM2aYw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.OLBDYp7eeEiHajgAWM2aYw:47vyoIh7iArzpZ7wZ9VIRw", "UBTConnect", "OnAfterFetch_Get_LocalityDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MKjqnPFRCEKUynSGk3o_ww", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UxGJq3f1yEuBHQudR8iodw", callContext.id);
                // Execute Action: Action_SetLocalityLabel
                controller._action_SetLocalityLabel$Action(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityDetailsAttr.nameAttr, model.variables.get_LocalityDetailsDataAct.localityDetailsOut.uI_LocalityDetailsAttr.countryNameAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5X1a65wsf0y3Ti+0J_Ujtg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OLBDYp7eeEiHajgAWM2aYw", callContext.id);
            }

        };
        Controller.prototype._action_SetLocalityLabel$Action = function(localityNameIn, countryNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetLocalityLabel");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Action_SetLocalityLabel$vars"))());
            vars.value.localityNameInLocal = localityNameIn;
            vars.value.countryNameInLocal = countryNameIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JyNPZRQWokG3irHXXhpqYg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.JyNPZRQWokG3irHXXhpqYg:oybGXsye3RIs1lr7Z0OqoA", "UBTConnect", "Action_SetLocalityLabel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9eKs4nquSUW+DMVdt1cTSA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A4peNOCbR0ql0Yx6Tq8jMg", callContext.id);
                // LocalityLabel = LocalityName + ", " + CountryName
                model.variables.localityLabelVar = ((vars.value.localityNameInLocal + ", ") + vars.value.countryNameInLocal);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lf79EAxaYEWNtPtsjOhBxg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JyNPZRQWokG3irHXXhpqYg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Action_SetLocalityLabel$vars", [{
            name: "LocalityName",
            attrName: "localityNameInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "CountryName",
            attrName: "countryNameInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_InitializeScreen$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_InitializeScreen");
            callContext = controller.callContext(callContext);
            var getSample_FilterTagsVar = new OS.DataTypes.VariableHolder();
            var loggedUserInfoVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSample_FilterTagsVar = getSample_FilterTagsVar;
            varBag.loggedUserInfoVar = loggedUserInfoVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ZhmCZqujjkif2xyHSmt6SA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.ZhmCZqujjkif2xyHSmt6SA:T0iU1Lz50geelfpfUUlkOA", "UBTConnect", "Action_InitializeScreen", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eP25eXQN0EiUvEJGbshp+Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ncpl_QvReEicGTUb4tbdtQ", callContext.id);
                // Execute Action: LoggedUserInfo
                model.flush();
                return UBTConnectController.default.getUserInformation_Wrapper$Action(callContext).then(function(value) {
                    loggedUserInfoVar.value = value;
                }).then(function() {
                    // Logged_User
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mOobNr+AqUew8G2yw_zBaQ", callContext.id);
                    // Logged_User.HouseholdId = LoggedUserInfo.UserInformation.Directory_UserCurrent_Member.HouseholderId
                    model.variables.logged_UserVar.householdIdAttr = loggedUserInfoVar.value.userInformationOut.directory_UserCurrent_MemberAttr.householderIdAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mOobNr+AqUew8G2yw_zBaQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Logged_User.LocalityId = LoggedUserInfo.UserInformation.Directory_UserCurrent_Geography.Locality_Id
                    model.variables.logged_UserVar.localityIdAttr = loggedUserInfoVar.value.userInformationOut.directory_UserCurrent_GeographyAttr.locality_IdAttr;
                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8hZgowx6nkuV20mhTN4RWw", callContext.id) && model.variables.localityIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(0)))) {
                        // Locality
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ov4G8QJOTUaRQrL7fmfbpg", callContext.id);
                        // LocalityId = Logged_User.LocalityId
                        model.variables.localityIdIn = model.variables.logged_UserVar.localityIdAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sHGliVe62Ei16vRPlgYN5Q", callContext.id);
                        // Execute Action: Action_SetLocalityLabel
                        controller._action_SetLocalityLabel$Action(loggedUserInfoVar.value.userInformationOut.directory_UserCurrent_GeographyAttr.locality_NameAttr, loggedUserInfoVar.value.userInformationOut.directory_UserCurrent_GeographyAttr.country_NameAttr, callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E37iZF8ZVUGLHe87GvJkeA", callContext.id);
                    // IsUserLocality = LocalityId = Logged_User.LocalityId
                    model.variables.isUserLocalityVar = model.variables.localityIdIn.equals(model.variables.logged_UserVar.localityIdAttr);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QUf97fXSREuOX6SZKB19Fg", callContext.id);
                    // Execute Action: ListClear
                    OS.SystemActions.listClear(model.variables.tagsListVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8jkvBpecA0GXFYi7s+11cg", callContext.id);
                    // Execute Action: GetSample_FilterTags
                    getSample_FilterTagsVar.value = UBTConnectController.default.getSample_FilterTags$Action(model.variables.isUserLocalityVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zgCqDl+e90iuP6Uorrbimw", callContext.id);
                    // TagsList = GetSample_FilterTags.TagToggleList
                    model.variables.tagsListVar = getSample_FilterTagsVar.value.tagToggleListOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dRag+knlzUSnIEt19XKkGg", callContext.id);
                    // TagsList_SelectedTag = GetLocalityMenu().Households
                    model.variables.tagsList_SelectedTagVar = OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptionsOut;
                    }, OS.DataTypes.DataTypes.Record, callContext.id).householdsAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aLi_vxVxoE+w9aENL5mh4A", callContext.id);
                    // IsScreenInitialized = True
                    model.variables.isScreenInitializedVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H3rWVZIQqkikE+TzOmHMZA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZhmCZqujjkif2xyHSmt6SA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZhmCZqujjkif2xyHSmt6SA", callContext.id);
                throw ex;

            });
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
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gDVacOLtuUGYWG4dR7W7mQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.gDVacOLtuUGYWG4dR7W7mQ:NUOyOPfPZRuOR1Z1wz_Vcg", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+hMcrGU1VU6p5E9_HpgInw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3DFCSrw_+kmAtkKDIOIuQg", callContext.id) && model.variables.isScreenInitializedVar)) {
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BPdqiiuM_UOFNu99VTn3Fw", callContext.id) && (model.variables.get_LocalityDetailsDataAct.isDataFetchedAttr && !(model.variables.get_LocalityDetailsDataAct.hasFetchErrorAttr)))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pgCDJbt1Y0utFpAAvmaybA", callContext.id);
                            return OS.Flow.returnAsync();

                        }

                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JmwLtDGjT0qLk+w9ojO0eA", callContext.id);
                        // Execute Action: Action_InitializeScreen
                        return controller._action_InitializeScreen$Action(callContext);
                    }

                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LGrw0NtygUiRdw09wktUOQ", callContext.id);
                    // Refresh Query: Get_LocalityDetails
                    var result = controller.get_LocalityDetails$DataActRefresh(callContext);
                    model.flush();
                    return result.then(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pgCDJbt1Y0utFpAAvmaybA", callContext.id);
                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gDVacOLtuUGYWG4dR7W7mQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gDVacOLtuUGYWG4dR7W7mQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClick_Search$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Search");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4vW4cwbzHE2AxlNDs1A6Yg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.4vW4cwbzHE2AxlNDs1A6Yg:nZPf6R9dHeKlmN398uOe_w", "UBTConnect", "OnClick_Search", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6Ro9KZPMNE2wTbIb40M_rw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bVjC91wJG0CJhB7PH2T8Pg", callContext.id);
                // Destination: /UBTConnect/Search
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Search", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4vW4cwbzHE2AxlNDs1A6Yg", callContext.id);
            }

        };
        Controller.prototype._handler_HorizontalTagListChanged$Action = function(updatedTagListIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_HorizontalTagListChanged");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_HorizontalTagListChanged$vars"))());
            vars.value.updatedTagListInLocal = updatedTagListIn.clone();
            var listIndexOf_IsSelectedVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOf_IsSelectedVar = listIndexOf_IsSelectedVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xceNdHwRxUWwOciT4P+uHA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.xceNdHwRxUWwOciT4P+uHA:Po9R5KihNUv8G0ocd+e59w", "UBTConnect", "Handler_HorizontalTagListChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gAfcOUKGakONu6jCR1mUMg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:06P1lX5qwESyZ+nLZJagfw", callContext.id);
                // TagsList = UpdatedTagList
                model.variables.tagsListVar = vars.value.updatedTagListInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o1KWN3ojZk6BThQHvzcKZw", callContext.id);
                // Execute Action: ListIndexOf_IsSelected
                listIndexOf_IsSelectedVar.value = OS.SystemActions.listIndexOf(model.variables.tagsListVar, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bLcAPjstf0aCuBXCm2GY6g", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_Directory_Locality_Locality_Details_mvc_controller_Handler_HorizontalTagListChanged_ScrollTopJS, "ScrollTop", "Handler_HorizontalTagListChanged", null, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zMDP+B24QEmPBTc3c2SFLw", callContext.id);
                // TagsList_SelectedTag = TagsList[ListIndexOf_IsSelected.Position].Identifier
                model.variables.tagsList_SelectedTagVar = model.variables.tagsListVar.getItem(listIndexOf_IsSelectedVar.value.positionOut).identifierAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SCaNrtZ+kkynjrrRJwOVwQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xceNdHwRxUWwOciT4P+uHA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_HorizontalTagListChanged$vars", [{
            name: "UpdatedTagList",
            attrName: "updatedTagListInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new UBTConnectModel.TagList();
            },
            complexType: UBTConnectModel.TagList
        }]);
        Controller.prototype._handler_NavigateTo_OneschoolGlobalDetails$Action = function(event_OneSchoolGlobalIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_OneschoolGlobalDetails");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_NavigateTo_OneschoolGlobalDetails$vars"))());
            vars.value.event_OneSchoolGlobalIdInLocal = event_OneSchoolGlobalIdIn;
            var stopPropagationHelper_CheckVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.stopPropagationHelper_CheckVar = stopPropagationHelper_CheckVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:q6oedff0Ik2xZOLWZzcfig:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.q6oedff0Ik2xZOLWZzcfig:FoGKqImoQZZXL6gctH6VKQ", "UBTConnect", "Handler_NavigateTo_OneschoolGlobalDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XbYV2uBT2E2iwK_Ae+6_yQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Guuyu2nrv0yxGXsSCIHr0g", callContext.id);
                // Execute Action: StopPropagationHelper_Check
                stopPropagationHelper_CheckVar.value = UBTConnectLibraryController.default.stopPropagationHelper_Check$Action(callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1f67B+Ea+Uulpl4Y4qrjQQ", callContext.id) && stopPropagationHelper_CheckVar.value.isToStopOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NEr64_un40CBdM99lZ04+g", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LFHibxxAZUieMHr9Ve7N3g", callContext.id);
                    // Destination: /UBTConnect/OneSchoolGlobalDetails
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalDetails", {
                        In_OneSchoolGlobalId: OS.DataConversion.ServerDataConverter.asString(vars.value.event_OneSchoolGlobalIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:q6oedff0Ik2xZOLWZzcfig", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_NavigateTo_OneschoolGlobalDetails$vars", [{
            name: "Event_OneSchoolGlobalId",
            attrName: "event_OneSchoolGlobalIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onClick_Maps$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Maps");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OxmCiWoKrkiqRUxrJGlx7A:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.OxmCiWoKrkiqRUxrJGlx7A:2dBhWOMmU+UmzLtD39l6MA", "UBTConnect", "OnClick_Maps", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7stxR5KbF0eknJ_JS2FwbA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v3vC5zaU40WiTtWqo0HW9Q", callContext.id);
                // Destination: /UBTConnect/Map
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Map", {
                    In_InitialLongitude: OS.DataConversion.ServerDataConverter.asString(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.mainHallLongitudeAttr, OS.DataTypes.DataTypes.Decimal),
                    In_InitialLatitude: OS.DataConversion.ServerDataConverter.asString(model.variables.get_LocalityDetailsDataAct.localityDetailsOut.maiinHallLatitudeAttr, OS.DataTypes.DataTypes.Decimal)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OxmCiWoKrkiqRUxrJGlx7A", callContext.id);
            }

        };
        Controller.prototype._handler_NavigateTo_HouseholdDetails$Action = function(householdIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_HouseholdDetails");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_NavigateTo_HouseholdDetails$vars"))());
            vars.value.householdIdInLocal = householdIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nZWy9B8ri0qfhYZnqUfnlA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw/ClientActions.nZWy9B8ri0qfhYZnqUfnlA:OYaLkq6QnAJLm3isYi4Zew", "UBTConnect", "Handler_NavigateTo_HouseholdDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CWBfiSg3wEmD8CQArdEZCQ", callContext.id);
                // Household Details Loading?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8EXP3s1W0U6f2t+OsbAvsw", callContext.id) && vars.value.householdIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0)))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:grjOzKd0I0isoBfP6MmXTA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AiM7bsaWeky8IMzRS9RUxg", callContext.id);
                    // Destination: /UBTConnect/HouseholdDetails
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
                        HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.householdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nZWy9B8ri0qfhYZnqUfnlA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Details.Handler_NavigateTo_HouseholdDetails$vars", [{
            name: "HouseholdId",
            attrName: "householdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);

        Controller.prototype.handler_NavigateTo_BrowsebyLocation$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_BrowsebyLocation$Action, callContext);

        };
        Controller.prototype.handler_OnClick_Bookmark$Action = function(isBookmarkedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClick_Bookmark$Action, callContext, isBookmarkedIn);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.handler_OnHeaderScrolled$Action = function(event_IsHeaderScrolledIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnHeaderScrolled$Action, callContext, event_IsHeaderScrolledIn);

        };
        Controller.prototype.onAfterFetch_Get_LocalityDetails$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_Get_LocalityDetails$Action, callContext);

        };
        Controller.prototype.action_SetLocalityLabel$Action = function(localityNameIn, countryNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetLocalityLabel$Action, callContext, localityNameIn, countryNameIn);

        };
        Controller.prototype.action_InitializeScreen$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_InitializeScreen$Action, callContext);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.onClick_Search$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Search$Action, callContext);

        };
        Controller.prototype.handler_HorizontalTagListChanged$Action = function(updatedTagListIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_HorizontalTagListChanged$Action, callContext, updatedTagListIn);

        };
        Controller.prototype.handler_NavigateTo_OneschoolGlobalDetails$Action = function(event_OneSchoolGlobalIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_OneschoolGlobalDetails$Action, callContext, event_OneSchoolGlobalIdIn);

        };
        Controller.prototype.onClick_Maps$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Maps$Action, callContext);

        };
        Controller.prototype.handler_NavigateTo_HouseholdDetails$Action = function(householdIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_HouseholdDetails$Action, callContext, householdIdIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HPErImJ3LEuq_Vcb4UR+hw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.HPErImJ3LEuq_Vcb4UR+hw:YJarwwC+_0YumPMYr6+u0g", "UBTConnect", "Locality_Details", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HPErImJ3LEuq_Vcb4UR+hw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Details On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Details On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Directory_LocalityController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Locality.Locality_Details.mvc$controller.Handler_HorizontalTagListChanged.ScrollTopJS", [], function() {
    return function($actions, $roles, $public) {
        $public.View.render().then(
            () => {
                let contentEl = document.querySelector(".active-screen");
                if (contentEl) {
                    contentEl.scrollTop = 0;
                }
            }
        );


    };
});

define("UBTConnect.Directory_Locality.Locality_Details.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "BqJeQzG6IkqfJCbgLjwX0Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isBookmarkedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "HTXNX78PRECn+Im_k5Kb3A": {
            getter: function(varBag, idService) {
                return varBag.getSample_FilterTagsVar.value;
            }
        },
        "n3dQxniHTkSXnaE+_b892Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IsHeaderScrolledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "W1jEDYZwPEaAT_dC5cEPSw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localityNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "8wpHItlPCEOPIgjGNdg4IA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.countryNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "8jkvBpecA0GXFYi7s+11cg": {
            getter: function(varBag, idService) {
                return varBag.getSample_FilterTagsVar.value;
            }
        },
        "Ncpl_QvReEicGTUb4tbdtQ": {
            getter: function(varBag, idService) {
                return varBag.loggedUserInfoVar.value;
            }
        },
        "T6KHTlxs9kme448vBkkQ9w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updatedTagListInLocal;
            }
        },
        "o1KWN3ojZk6BThQHvzcKZw": {
            getter: function(varBag, idService) {
                return varBag.listIndexOf_IsSelectedVar.value;
            }
        },
        "bLcAPjstf0aCuBXCm2GY6g": {
            getter: function(varBag, idService) {
                return varBag.scrollTopJSResult.value;
            }
        },
        "FcR+C+6ef0eFZLCek_1vEQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_OneSchoolGlobalIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Guuyu2nrv0yxGXsSCIHr0g": {
            getter: function(varBag, idService) {
                return varBag.stopPropagationHelper_CheckVar.value;
            }
        },
        "_YQle3e1yEOVP9MKoPrscw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "nqTxPHUnd0CpidKPXCLbHw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tagsListVar;
            }
        },
        "5tw1I9KxREW5Tw0qCU4YIw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.headerIsScrolledVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "DJJGF5sOEEuCbr_l0lKbmw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tagsList_SelectedTagVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "CmZloNLoF0+iDZdHF_75nQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.logged_UserVar;
            }
        },
        "zWrKtC5dM0Wpx8EHsqzRnQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isUserLocalityVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cNsGSBYj3ki6VLl0OSpugA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localityLabelVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "DSBSvylee0yw9svJXg7mng": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isScreenInitializedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZOD8LyJ0dkubySAxViW+hQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localityIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "O39yTUPrhkO4UQ9UB5Izwg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.preloadedLocalityLabelIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zRD_rdL_rUSlwxTVbO9h0w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_LocalityDetailsDataAct;
            }
        },
        "9dFOLjZKA0SNvfuzWRY35Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "FmMJqnThv0KKNvGm61Ax_g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "lFkVVFVhKUiYeRumEZL2UQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input"));
                })(varBag.model, idService);
            }
        },
        "hlq7QPddBUW60VBf8z11xQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
                })(varBag.model, idService);
            }
        },
        "8Tw5ashIEk2vu4BpLMgNJw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("EnableMaps"));
                })(varBag.model, idService);
            }
        },
        "2mHbyPrdhkyjvrTwM4mmkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "UMTciNlOO0ubsX5X5mniCA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Title"));
                })(varBag.model, idService);
            }
        },
        "KeC6BdgTzUago1wufe9j9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "TlGPmnmpekeGxq7jUz7gcg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "TnurHFtVa0OdY4E5R41Wrw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "+xk+3ANCP0mT6fgj3HWK6Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsLoadingLocalityLabel"));
                })(varBag.model, idService);
            }
        },
        "aVHMX7v9tkuePsUF2lC0aA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "ZL6DMz_iRkmTa0DM0poLOw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "qOvHGzQfjEKCiBwK_yIAlQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "KjHGENbMhEKQ_1LF7DI+Ag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "0NrsDsLgi0eO1II5KKCX6g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsLoadingLocalityLabel2"));
                })(varBag.model, idService);
            }
        },
        "JuI9fHzFH0yzg1wYOgAuGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Icons"));
                })(varBag.model, idService);
            }
        },
        "4Cd9Zuxe0E2gqe3wL+ijPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("EnableMaps2"));
                })(varBag.model, idService);
            }
        },
        "xUu3j5HqCUWX+KT6J+V9Qg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "HtD0ujrJg0WE9QAOTjHjvg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "eVfkS5a3EkybM+Ig9MpPCQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "skOUJqT9I0iNf3ixv6RrQQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Showhouseholds"));
                })(varBag.model, idService);
            }
        },
        "0Tmru0snzkuGnBMFzBcu3A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowMyHousehold"));
                })(varBag.model, idService);
            }
        },
        "cfHMF_WsL0mauIUQfXduGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
                })(varBag.model, idService);
            }
        },
        "4K8ALr93GkiX+i_nZCHbQw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowSubdivisions"));
                })(varBag.model, idService);
            }
        },
        "sEI6xyCE60Cw6xa7FByDPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowInterchange"));
                })(varBag.model, idService);
            }
        },
        "I3995_qj6Eehu9iwBjAImQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowOneSchoolGlobal"));
                })(varBag.model, idService);
            }
        },
        "F5PtcFe3Q0eQo0Toxz27Hg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Block_OneSchoolGlobal_List"));
                })(varBag.model, idService);
            }
        },
        "TB1XPlCizkmFJ7fJsQC_cw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowLocalityContacts"));
                })(varBag.model, idService);
            }
        },
        "Zcmgv_qC6UeFB0Ck6FFfjA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ComingSoon"));
                })(varBag.model, idService);
            }
        },
        "63YxWcTHB06KMXcBaQyc7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "BReZ8wYpO0OQGwdB3z9KqA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});