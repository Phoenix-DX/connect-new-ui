define("UBTConnect.Directory_Locality.CountryList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", "UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$model", "UBTConnectLibrary.controller$GetFlagURLByCountryCode", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_TypedStatisticsRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "Connect_Geography_CS.model$UI_CountryStatisticsRec", "UBTConnect.model$UI_CountryStatisticsList", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$GetSkeletonList_UI_CountryStatistics", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function(OutSystems, UBTConnectModel, UBTConnectLibraryController, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnectController, UBTConnect_UtilsController, APIDomain_Directory_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibrary_Layouts_Layout_MainPages_mvcModel, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel, UBTConnectLibrary_ConnectPatterns_StaticInput_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Home_FeedBlock_CommunityPopulation_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_Directory_Locality_Statistics_TypedItem_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvcModel) {
    var OS = OutSystems.Internal;

    var GetCountriesStatisticsDataActRec = (function(_super) {
        __extends(GetCountriesStatisticsDataActRec, _super);

        function GetCountriesStatisticsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetCountriesStatisticsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_CountriesStatistics", "out_CountriesStatisticsOut", "Out_CountriesStatistics", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_CountryStatisticsList());
                }, true, UBTConnectModel.UI_CountryStatisticsList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetCountriesStatisticsDataActRec.fromStructure = function(str) {
            return new GetCountriesStatisticsDataActRec(new GetCountriesStatisticsDataActRec.RecordClass({
                out_CountriesStatisticsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetCountriesStatisticsDataActRec.init();
        return GetCountriesStatisticsDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalCacheControl_UserInformation", "localCacheControl_UserInformationVar", "LocalCacheControl_UserInformation", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BooleanDirectory_UserCurrentRecord());
                }, false, UBTConnectModel.BooleanDirectory_UserCurrentRecord),
                this.attr("BottomSheetId", "bottomSheetIdVar", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("GetCountriesStatistics", "getCountriesStatisticsDataAct", "getCountriesStatisticsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetCountriesStatisticsDataActRec());
                }, true, GetCountriesStatisticsDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((((((((((((UBTConnectLibrary_Layouts_Layout_MainPages_mvcModel.hasValidationWidgets || UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_StaticInput_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Home_FeedBlock_CommunityPopulation_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Statistics_TypedItem_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.CountryList");
});
define("UBTConnect.Directory_Locality.CountryList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.CountryList.mvc$model", "UBTConnect.Directory_Locality.CountryList.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$view", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$view", "UBTConnectLibrary.controller$GetFlagURLByCountryCode", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_TypedStatisticsRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "Connect_Geography_CS.model$UI_CountryStatisticsRec", "UBTConnect.model$UI_CountryStatisticsList", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$GetSkeletonList_UI_CountryStatistics", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnect_UtilsController, APIDomain_Directory_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Directory_Locality_CountryList_mvc_model, UBTConnect_Directory_Locality_CountryList_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, OSWidgets, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_view) {
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
        View.displayName = "Directory_Locality.CountryList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_CountryList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_CountryList_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "CountryList";
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
                inputs: {
                    AddHeaderGap: false,
                    isGrayBackground: true
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
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return ["Directory"];
                    }),
                    placeholder_Header_Right: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, {
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_Header_Input: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, {
                            inputs: {
                                In_Prompt: "Search any member or location"
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
                                        controller.staticInputClick_Input$Action(controller.callContext(eventHandlerContext));
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
                    }),
                    placeholder_Header_Input_Icon: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Content.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                                name: "Content",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                        inputs: {
                                            In_IsLoading: !(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)
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
                                            name: "HeaderLoading",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder_LoadingSection: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                    inputs: {
                                                        ColumnOptions: model.getCachedValue(idService.getId("HeaderColumns.ColumnOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
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
                                                        name: "HeaderColumns",
                                                        alias: "6"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        left: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                inputs: {
                                                                    Options: model.getCachedValue(idService.getId("96Dtc3OQh069nOro0GiUtw.Options"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                            rec.backgroundAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                                                return rec;
                                                                            }();
                                                                            rec.paddingSizeAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                                                return rec;
                                                                            }();
                                                                            rec.borderOptionsAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                                rec.radiusAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.medium;
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
                                                                    },
                                                                    clicked$Action: function() {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                                                                            controller.onClick_MyLocality$Action(controller.callContext(eventHandlerContext));
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
                                                                    uuid: "6",
                                                                    alias: "7"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    content: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Container, {
                                                                            align: /*Default*/ 0,
                                                                            animate: false,
                                                                            extendedProperties: {
                                                                                style: "text-align: center;"
                                                                            },
                                                                            visible: true,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "7"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        }, React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                                            inputs: {
                                                                                In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.circle,
                                                                                EntityType: UBTConnectModel.staticEntities.connect_Entity.locality,
                                                                                EntityId: model.getCachedValue(idService.getId("qUB3OQ+z70Wh6dl8Deco5g.EntityId"), function() {
                                                                                    return (OS.BuiltinFunctions.nullIdentifier()).toString();
                                                                                }),
                                                                                ImageSize: model.getCachedValue(idService.getId("qUB3OQ+z70Wh6dl8Deco5g.ImageSize"), function() {
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
                                                                                uuid: "8",
                                                                                alias: "8"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                            inputs: {
                                                                                In_TextOptions: model.getCachedValue(idService.getId("H8+RVW2uFEuy7Kd6Q+fmCg.In_TextOptions"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral6;
                                                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                        return rec;
                                                                                    }();
                                                                                }),
                                                                                In_Text: "MY LOCALITY"
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
                                                                                alias: "9"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                            inputs: {
                                                                                In_Text: model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_NameAttr,
                                                                                In_TextOptions: model.getCachedValue(idService.getId("DSjKnrO60kWn+TeuDc8HMw.In_TextOptions"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
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
                                                                                uuid: "10",
                                                                                alias: "10"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                            inputs: {
                                                                                In_TextOptions: model.getCachedValue(idService.getId("rDlSUSibdE+spV3F3Lnexw.In_TextOptions"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
                                                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                        return rec;
                                                                                    }();
                                                                                }),
                                                                                In_Text: model.getCachedValue(idService.getId("rDlSUSibdE+spV3F3Lnexw.In_Text"), function() {
                                                                                    return (OS.BuiltinFunctions.longIntegerToText(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr) + ((model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" Supper Meeting") : (" Supper Meetings")));
                                                                                }, function() {
                                                                                    return model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr;
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
                                                                                alias: "11"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }))];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_NameAttr)]
                                                            })];
                                                        }),
                                                        right: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                inputs: {
                                                                    Options: model.getCachedValue(idService.getId("IQRHxI7nW0GuHUQNiBOh4w.Options"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                            rec.backgroundAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                                                return rec;
                                                                            }();
                                                                            rec.paddingSizeAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                                                return rec;
                                                                            }();
                                                                            rec.borderOptionsAttr = function() {
                                                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                                rec.radiusAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.medium;
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
                                                                    },
                                                                    clicked$Action: function() {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                                                                            controller.onClick_MyCountry$Action(controller.callContext(eventHandlerContext));
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
                                                                    uuid: "12",
                                                                    alias: "12"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    content: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Container, {
                                                                            align: /*Default*/ 0,
                                                                            animate: false,
                                                                            extendedProperties: {
                                                                                style: "text-align: center;"
                                                                            },
                                                                            visible: true,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "13"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        }, React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                                            inputs: {
                                                                                ImageURL: model.getCachedValue(idService.getId("jgSy9CdS5U+tZKMVWiLR+Q.ImageURL"), function() {
                                                                                    return OutSystemsDebugger.handleFunctionCall(function() {
                                                                                        return UBTConnectLibraryController.default.getFlagURLByCountryCode$Action(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr, callContext).out_CountryFlagURLOut;
                                                                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                                                                }, function() {
                                                                                    return model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr;
                                                                                }),
                                                                                In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.circle,
                                                                                ExtendedClass: "country-flag",
                                                                                ImageSize: model.getCachedValue(idService.getId("jgSy9CdS5U+tZKMVWiLR+Q.ImageSize"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                                        rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
                                                                                        rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
                                                                                        return rec;
                                                                                    }();
                                                                                }),
                                                                                EntityId: model.getCachedValue(idService.getId("jgSy9CdS5U+tZKMVWiLR+Q.EntityId"), function() {
                                                                                    return (OS.BuiltinFunctions.nullIdentifier()).toString();
                                                                                }),
                                                                                EntityType: UBTConnectModel.staticEntities.connect_Entity.locality
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
                                                                                alias: "13"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                            inputs: {
                                                                                In_TextOptions: model.getCachedValue(idService.getId("doL_A99jVECOEkFJluSu9w.In_TextOptions"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral6;
                                                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                        return rec;
                                                                                    }();
                                                                                }),
                                                                                In_Text: "MY COUNTRY"
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
                                                                                alias: "14"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                            inputs: {
                                                                                In_Text: model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_NameAttr,
                                                                                In_TextOptions: model.getCachedValue(idService.getId("hZ7Z7HrgAEOSHRtFwqgQ7Q.In_TextOptions"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
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
                                                                                uuid: "16",
                                                                                alias: "15"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                            inputs: {
                                                                                In_TextOptions: model.getCachedValue(idService.getId("VJ31EeV3PUqUKqNTKEsVsw.In_TextOptions"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
                                                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                        return rec;
                                                                                    }();
                                                                                }),
                                                                                In_Text: model.getCachedValue(idService.getId("VJ31EeV3PUqUKqNTKEsVsw.In_Text"), function() {
                                                                                    return (OS.BuiltinFunctions.longIntegerToText(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr) + ((model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" Locality") : (" Localities")));
                                                                                }, function() {
                                                                                    return model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr;
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
                                                                                alias: "16"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        }))];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_NameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr)]
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_NameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_NameAttr)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_NameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_NameAttr)]
                                    }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("Population.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.paddingSizeAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                                            name: "Population",
                                            alias: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_view, {
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
                                                        uuid: "19",
                                                        alias: "18"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: []
                                    }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("Legend.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.paddingSizeAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                                            name: "Legend",
                                            alias: "19"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                    inputs: {
                                                        ColumnOptions: model.getCachedValue(idService.getId("Title.ColumnOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                                                                rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
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
                                                        name: "Title",
                                                        alias: "20"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        left: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                inputs: {
                                                                    In_TextOptions: model.getCachedValue(idService.getId("sp+_xyKzlEmKIWiVx5UYiA.In_TextOptions"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                            return rec;
                                                                        }();
                                                                    }),
                                                                    In_Text: "Browse by Country"
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
                                                                    alias: "21"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            })];
                                                        }),
                                                        right: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                inputs: {
                                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary,
                                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.info,
                                                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16
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
                                                                            controller.onClick_LegendInfo$Action(controller.callContext(eventHandlerContext));
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
                                                                    alias: "22"
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
                                    }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                        inputs: {
                                            In_IsLoading: !((model.variables.getCountriesStatisticsDataAct.isDataFetchedAttr || model.variables.getCountriesStatisticsDataAct.hasFetchErrorAttr))
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
                                            alias: "23"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder_LoadingSection: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.List, {
                                                    animateItems: true,
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: /*Default*/ 0,
                                                    source: model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut,
                                                    style: "list list-group",
                                                    tag: "div",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "25"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr),
                                                    placeholders: {
                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                            return [React.createElement(OSWidgets.Container, {
                                                                align: /*Default*/ 0,
                                                                animate: false,
                                                                extendedEvents: {
                                                                    onClick: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/CountryList/Container onclick");
                                                                                return controller.handler_StatisticsList_Clicked$Action(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getCurrent(callContext.iterationContext).countryCodeAttr, controller.callContext(eventHandlerContext));
                                                                            }, function() {
                                                                                controller.popDebuggerContext(eventHandlerContext);
                                                                            });
                                                                        });;
                                                                    }
                                                                },
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "26"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: [asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getCurrent(callContext.iterationContext))]
                                                            }, React.createElement(UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, {
                                                                inputs: {
                                                                    In_HasImage: ((model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getCurrent(callContext.iterationContext).statisticsAttr.avatarURLAttr) !== ("")),
                                                                    _in_HasImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr),
                                                                    UI_CountryStatistics: model.getCachedValue(idService.getId("+Vum49WYZ0GJ_xszXXyA1g.UI_CountryStatistics"), function() {
                                                                        return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getCurrent(callContext.iterationContext), new UBTConnectModel.UI_TypedStatisticsRec(), function(source, target) {
                                                                            target.uI_StatisticsTextsAttr = source.uI_TypedStatisticsTextsAttr;
                                                                            target.nameAttr = source.statisticsAttr.titleAttr;
                                                                            target.imageURLAttr = source.statisticsAttr.avatarURLAttr;
                                                                            return target;
                                                                        });
                                                                    }, function() {
                                                                        return model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getCurrent(callContext.iterationContext);
                                                                    }),
                                                                    _uI_CountryStatisticsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr)
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
                                                                    alias: "24"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            }))];
                                                        }, callContext, idService, "1")
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_NameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_NameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)]
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
                            inputs: {
                                ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.directory,
                                isRootPage: true
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
                                alias: "25"
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
                                uuid: "29",
                                alias: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getCountriesStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_LocalityCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_NameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_SubdivisionCountAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_NameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)]
            }), React.createElement(UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    result$Action: function(userInformationIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Cache/CacheControl_UserInfo_Wrapper Result");
                            controller.cacheControl_UserInfo_WrapperResult$Action(userInformationIn, controller.callContext(eventHandlerContext));
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
                    uuid: "30",
                    alias: "27"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        sheetInitialized$Action: function(sheetIdIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/Directory_LegendBottomSheet SheetInitialized");
                                controller.directory_LegendBottomSheetSheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
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
                        uuid: "31",
                        alias: "28"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Directory_Locality.CountryList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.CountryList.mvc$debugger", "UBTConnect.Directory_Locality.controller", "UBTConnect.Directory_Locality.CountryList.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnectLibrary.controller$GetFlagURLByCountryCode", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_TypedStatisticsRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "Connect_Geography_CS.model$UI_CountryStatisticsRec", "UBTConnect.model$UI_CountryStatisticsList", "UBTConnect.controller$HasAccessToRegion", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$GetSkeletonList_UI_CountryStatistics", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnect_UtilsController, APIDomain_Directory_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_CountryList_mvc_Debugger, _flow_UBTConnect_Directory_LocalityController, UBTConnect_Directory_Locality_CountryList_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getCountriesStatistics$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getCountriesStatistics$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getCountriesStatistics$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QFZMxcb1xEuO73oR4yGItw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/DataActions.QFZMxcb1xEuO73oR4yGItw:mHmEDVy6i4FChHHra3qVUQ", "UBTConnect", "GetCountriesStatistics", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/CountryList/GetCountriesStatistics");
                return controller.callDataAction("DataActionGetCountriesStatistics", "screenservices/UBTConnect/Directory_Locality/CountryList/DataActionGetCountriesStatistics", "0t4vWiySkT6WQWfCWdpmhQ", function(b) {
                    model.variables.getCountriesStatisticsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getCountriesStatisticsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCountriesStatisticsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/CountryList/GetCountriesStatistics On After Fetch");
                    controller._onAfterFetch_GetCountriesStatistics$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QFZMxcb1xEuO73oR4yGItw", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getCountriesStatistics$DataActRefresh"];
        // Client Actions
        Controller.prototype._onAfterFetch_GetCountriesStatistics$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetCountriesStatistics");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Z9dWDjSi1EyL3cqw1SAKXA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.Z9dWDjSi1EyL3cqw1SAKXA:a47fA2KM+DQpdpXmWd8oqg", "UBTConnect", "OnAfterFetch_GetCountriesStatistics", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ibgm84pstUel2_TfFOHBjA", callContext.id);
                // Foreach GetCountriesStatistics.Out_CountriesStatistics
                callContext.iterationContext.registerIterationStart(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut);
                try {
                    var out_CountriesStatisticsIterator = callContext.iterationContext.getIterator(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut);
                    var out_CountriesStatisticsIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hjmcGdZIcUu58wzavgq9cQ", callContext.id) && (out_CountriesStatisticsIndex < model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.length))) {
                        out_CountriesStatisticsIterator.currentRowNumber = out_CountriesStatisticsIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y1j1cJWGakON14qSajY79Q", callContext.id);
                        // GetCountriesStatistics.Out_CountriesStatistics.Current.Statistics.AvatarURL = GetFlagURLByCountryCode(GetCountriesStatistics.Out_CountriesStatistics.Current.CountryCode)
                        model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getItem(out_CountriesStatisticsIndex.valueOf()).statisticsAttr.avatarURLAttr = OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.getFlagURLByCountryCode$Action(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut.getItem(out_CountriesStatisticsIndex.valueOf()).countryCodeAttr, callContext).out_CountryFlagURLOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                        out_CountriesStatisticsIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gZTkPmNDv06S5wntHacyzA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Z9dWDjSi1EyL3cqw1SAKXA", callContext.id);
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
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SXOrFWZffkGPfkbSrpI_RA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.SXOrFWZffkGPfkbSrpI_RA:TcZfrd+eUrjZO3yanrqcnQ", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F75q07QvYki0le3JX5ATlA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jsSNI+n2VkeIc_J+J18sBg", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_CountryList_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryList.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ur6aK0nwtk2dtzUUOTCTDA", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut && model.variables.getCountriesStatisticsDataAct.isDataFetchedAttr))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3y_XUo3rak2nRjA14J_DMw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YPAe0+daqEiauhfnSn_5Ww", callContext.id);
                        // Execute Action: Action_RefreshData
                        return controller._action_RefreshData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VMsyiUigSkKuDfFqDdNKhw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SXOrFWZffkGPfkbSrpI_RA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SXOrFWZffkGPfkbSrpI_RA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryList.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_StatisticsList_Clicked$Action = function(event_IdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_StatisticsList_Clicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryList.Handler_StatisticsList_Clicked$vars"))());
            vars.value.event_IdInLocal = event_IdIn;
            var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.hasAccessToRegionVar = hasAccessToRegionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vskuICbWH0S7fhKrmJtVzA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.vskuICbWH0S7fhKrmJtVzA:DaZ1hwjJMl9gkZBN89AHeQ", "UBTConnect", "Handler_StatisticsList_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mhR2HaH+T0Kl1VqI_scbEg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:432qOugdBkW9FVT3SQrXQA", callContext.id) && ((vars.value.event_IdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FrpfdU4Y4kynnYNK9Zg_SQ", callContext.id);
                        // Execute Action: HasAccessToRegion
                        model.flush();
                        return UBTConnectController.default.hasAccessToRegion$Action(OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.textToLongInteger(vars.value.event_IdInLocal)), vars.value.event_IdInLocal, callContext).then(function(value) {
                            hasAccessToRegionVar.value = value;
                        }).then(function() {
                            return OS.Flow.executeSequence(function() {
                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bXBa9SiCb0in3XytWI9xFQ", callContext.id) && hasAccessToRegionVar.value.hasAccessOut)) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9+j0JCQQiE2JxUgbWnwzfA", callContext.id);
                                    // Destination: /UBTConnect/CountryDetails
                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/CountryDetails", {
                                        CountryCode: OS.DataConversion.ServerDataConverter.asString(vars.value.event_IdInLocal, OS.DataTypes.DataTypes.Text)
                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hKIp2ygZtUa+6Mp5uKJR2A", callContext.id);
                                    // Execute Action: App_Subscription_ShowUpgradePopUp
                                    model.flush();
                                    return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8QWygmE__U6wRI_HxCHOFw", callContext.id);
                                    });
                                }

                            });
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:unHwp387rk+6Hf90ehsLPg", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vskuICbWH0S7fhKrmJtVzA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vskuICbWH0S7fhKrmJtVzA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryList.Handler_StatisticsList_Clicked$vars", [{
            name: "Event_Id",
            attrName: "event_IdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_RefreshData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_RefreshData");
            callContext = controller.callContext(callContext);
            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var getSkeletonList_UI_CountryStatisticsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.communicationExceptionVar = communicationExceptionVar;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.notRegisteredVar = notRegisteredVar;
            varBag.getSkeletonList_UI_CountryStatisticsVar = getSkeletonList_UI_CountryStatisticsVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uZSAMJqgTkegHtoNQvG4Jw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.uZSAMJqgTkegHtoNQvG4Jw:7pVvfEiQhxyrC2Fc40yoow", "UBTConnect", "Action_RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7pcHsm_ydkeyL7U8kUsnCw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8xwRFhyns0yaGNPP9zAwqg", callContext.id);
                // Execute Action: GetSkeletonList_UI_CountryStatistics
                getSkeletonList_UI_CountryStatisticsVar.value = UBTConnectController.default.getSkeletonList_UI_CountryStatistics$Action(10, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ahM8AXT6lkuXozNLLF9E8w", callContext.id);
                // GetCountriesStatistics.Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics.UI_CountryStatistics
                model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut = getSkeletonList_UI_CountryStatisticsVar.value.uI_CountryStatisticsOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vx86Od_n2ka4ck0vrK6Ctg", callContext.id);
                // Refresh Query: GetCountriesStatistics
                var result = controller.getCountriesStatistics$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U8RJxSpZdkSoXOdZWDetsg", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("CountryList.Action_RefreshData", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: CommunicationException
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                    OS.Logger.error(null, ex);
                    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zCtYE8mb1kO23YsJC2iTSg", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QpO1ykW27k6gv7JXNsEZfA", callContext.id);
                        // Execute Action: ListClear2
                        OS.SystemActions.listClear(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jrl4571qMki9aZ7JAp1cdQ", callContext.id);
                        // Raise Error: BubbleCommunicationException
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleCommunicationException", communicationExceptionVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: NotRegistered
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                    OS.Logger.error(null, ex);
                    notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vg80mUtYiEmd_TzUvqEG9w", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4Xo3Ep3kR0W3FD8E2s4z7w", callContext.id);
                        // Raise Error: NotRegistered
                        throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WmnkTbSkkE+PxZjR5aMeYQ", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sut8EzW5akyXU71GhF60EA", callContext.id);
                        // Execute Action: ListClear
                        OS.SystemActions.listClear(model.variables.getCountriesStatisticsDataAct.out_CountriesStatisticsOut, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZclmwpToNEmXVbisDaJigw", callContext.id);
                        // Raise Error: BubbleGenericException
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uZSAMJqgTkegHtoNQvG4Jw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uZSAMJqgTkegHtoNQvG4Jw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClick_MyCountry$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_MyCountry");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:N070TtLG5U2BVkARy7cFJw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.N070TtLG5U2BVkARy7cFJw:cbevpjbG9zmqmEBRUkvq4g", "UBTConnect", "OnClick_MyCountry", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pw5vAFg5JECCk7IYWLYdWw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T36R6VIF2Em+mzsfkj04ng", callContext.id);
                // Destination: /UBTConnect/CountryDetails
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/CountryDetails", {
                    CountryCode: OS.DataConversion.ServerDataConverter.asString(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.country_CodeAttr, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:N070TtLG5U2BVkARy7cFJw", callContext.id);
            }

        };
        Controller.prototype._onClick_MyLocality$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_MyLocality");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:H7gObhN4akaEfIgJyROziw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.H7gObhN4akaEfIgJyROziw:yugPN1+6J_o+Nn2674Wg8A", "UBTConnect", "OnClick_MyLocality", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pOI1rpf4DkWluu7pGIyfEA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kORnsZ7pckStUUUj26XHcQ", callContext.id);
                // Destination: /UBTConnect/Locality_Details
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {
                    LocalityId: OS.DataConversion.ServerDataConverter.asString(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_IdAttr, OS.DataTypes.DataTypes.LongInteger),
                    PreloadedLocalityLabel: OS.DataConversion.ServerDataConverter.asString(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_GeographyAttr.locality_NameAttr, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:H7gObhN4akaEfIgJyROziw", callContext.id);
            }

        };
        Controller.prototype._staticInputClick_Input$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("StaticInputClick_Input");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jkfTlfrlQEunrScmvmygUw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.jkfTlfrlQEunrScmvmygUw:ULPjbVsig2I_sbDtElHbiQ", "UBTConnect", "StaticInputClick_Input", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PKewfOZVmEyUNixbCF9t1w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3YetTPHTn0amLfYkYjlW+Q", callContext.id);
                // Destination: /UBTConnect/Search
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Search", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jkfTlfrlQEunrScmvmygUw", callContext.id);
            }

        };
        Controller.prototype._cacheControl_UserInfo_WrapperResult$Action = function(userInformationIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CacheControl_UserInfo_WrapperResult");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryList.CacheControl_UserInfo_WrapperResult$vars"))());
            vars.value.userInformationInLocal = userInformationIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1aiPuH8lCkWFhIlBKR5jjw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.1aiPuH8lCkWFhIlBKR5jjw:pOWHUSGPbdIV0x3tZLoGKw", "UBTConnect", "CacheControl_UserInfo_WrapperResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X633sFSG7kC+TBuHK03dZA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hyoc8KR2qkW1GEsl5+Tu8g", callContext.id);
                // LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation
                model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr = vars.value.userInformationInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hyoc8KR2qkW1GEsl5+Tu8g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // LocalCacheControl_UserInformation.isFetched = True
                model.variables.localCacheControl_UserInformationVar.isFetchedAttr = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vh9TV0eqO0+RKm4YsBfNbA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1aiPuH8lCkWFhIlBKR5jjw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryList.CacheControl_UserInfo_WrapperResult$vars", [{
            name: "UserInformation",
            attrName: "userInformationInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new APIDomain_Directory_ISModel.Directory_UserCurrentRec();
            },
            complexType: APIDomain_Directory_ISModel.Directory_UserCurrentRec
        }]);
        Controller.prototype._onClick_LegendInfo$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_LegendInfo");
            callContext = controller.callContext(callContext);
            var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.bottomSheetOpenVar = bottomSheetOpenVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YQV2y2SqbUu3iq2DlL45PQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.YQV2y2SqbUu3iq2DlL45PQ:wesPkSt+tz81kRvZbDC6dQ", "UBTConnect", "OnClick_LegendInfo", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U4E7cMteX023k4A++IvyWA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Qj3wstvIOEqDJDpEboBEBg", callContext.id);
                // Execute Action: BottomSheetOpen
                bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.bottomSheetIdVar, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uOpnczqeuUGsLzQO+90RFg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YQV2y2SqbUu3iq2DlL45PQ", callContext.id);
            }

        };
        Controller.prototype._directory_LegendBottomSheetSheetInitialized$Action = function(sheetIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Directory_LegendBottomSheetSheetInitialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryList.Directory_LegendBottomSheetSheetInitialized$vars"))());
            vars.value.sheetIdInLocal = sheetIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yIls308_RUi0v4Jk_a9VzA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ/ClientActions.yIls308_RUi0v4Jk_a9VzA:yXfXKCuIg+sX9bZLLcT1Ag", "UBTConnect", "Directory_LegendBottomSheetSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:feboGy0edEWFelGJfdDxjw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mVRJKsHOxUyz13XXs3vp1g", callContext.id);
                // BottomSheetId = SheetId
                model.variables.bottomSheetIdVar = vars.value.sheetIdInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rt949zfP50a0Y44Xc3ySbQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yIls308_RUi0v4Jk_a9VzA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryList.Directory_LegendBottomSheetSheetInitialized$vars", [{
            name: "SheetId",
            attrName: "sheetIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onAfterFetch_GetCountriesStatistics$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetCountriesStatistics$Action, callContext);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.handler_StatisticsList_Clicked$Action = function(event_IdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_StatisticsList_Clicked$Action, callContext, event_IdIn);

        };
        Controller.prototype.action_RefreshData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_RefreshData$Action, callContext);

        };
        Controller.prototype.onClick_MyCountry$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_MyCountry$Action, callContext);

        };
        Controller.prototype.onClick_MyLocality$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_MyLocality$Action, callContext);

        };
        Controller.prototype.staticInputClick_Input$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._staticInputClick_Input$Action, callContext);

        };
        Controller.prototype.cacheControl_UserInfo_WrapperResult$Action = function(userInformationIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._cacheControl_UserInfo_WrapperResult$Action, callContext, userInformationIn);

        };
        Controller.prototype.onClick_LegendInfo$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_LegendInfo$Action, callContext);

        };
        Controller.prototype.directory_LegendBottomSheetSheetInitialized$Action = function(sheetIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._directory_LegendBottomSheetSheetInitialized$Action, callContext, sheetIdIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UT2tMtWQW06Fg1vg6YNqxQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.UT2tMtWQW06Fg1vg6YNqxQ:CVeAVPOH896++aLZGXC4yQ", "UBTConnect", "CountryList", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UT2tMtWQW06Fg1vg6YNqxQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/CountryList On Ready");
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
        Controller.checkPermissions = function() {
            OS.RolesInfo.checkRegistered();
        };
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Locality.CountryList.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.Directory_Locality.CountryList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "jsSNI+n2VkeIc_J+J18sBg": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "dKGcNTdBe0SZ4Jik23RiUQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "FrpfdU4Y4kynnYNK9Zg_SQ": {
            getter: function(varBag, idService) {
                return varBag.hasAccessToRegionVar.value;
            }
        },
        "zCtYE8mb1kO23YsJC2iTSg": {
            getter: function(varBag, idService) {
                return varBag.communicationExceptionVar.value;
            }
        },
        "WmnkTbSkkE+PxZjR5aMeYQ": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "Vg80mUtYiEmd_TzUvqEG9w": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "8xwRFhyns0yaGNPP9zAwqg": {
            getter: function(varBag, idService) {
                return varBag.getSkeletonList_UI_CountryStatisticsVar.value;
            }
        },
        "VYSKJWOmBkKATtK7NuTyvQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.userInformationInLocal;
            }
        },
        "Qj3wstvIOEqDJDpEboBEBg": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetOpenVar.value;
            }
        },
        "JERWoUYmMU+j4i6BHE8_6Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.sheetIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "b7XYjig1U06sPSZmDEnwFg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_UserInformationVar;
            }
        },
        "5bJm94h4H0uTMTKtU2F_ag": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "QFZMxcb1xEuO73oR4yGItw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getCountriesStatisticsDataAct;
            }
        },
        "58IwP3QHcEiVeiiRPpW1Xg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "JVgyaizVrUCEwNpOo98Nzw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "r8hVdI1Br0iVDZxNoy38HQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input"));
                })(varBag.model, idService);
            }
        },
        "2ztXiInz5kGVJj6ats_RXA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
                })(varBag.model, idService);
            }
        },
        "H0MtWLQeC0uNHGa1FaPx4w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "J3qkxhnxX0qiGW9rotrE3Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "aO_bfmOUjEmgwcF7WsHuBA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "YcHSja04RUCvnRqHk1RYkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "cu77BFYt3UapUojbhvKgew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLoading"));
                })(varBag.model, idService);
            }
        },
        "G6iHoapN7E+4K5xQWs1lzw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "MEZ+LAs4Uk2O_+RX0P_wRw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderColumns"));
                })(varBag.model, idService);
            }
        },
        "VWDpSISkXkWF_fxSsGzWEg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "tCah3C5SlkGfCeptm3y3jg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "59f3EtSfNUm7zgNLs6oJvw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "Udl+LxKU3k6z_GVk4BcwpA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "4PMQia02gUq4vC6iJiL8ug": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Population"));
                })(varBag.model, idService);
            }
        },
        "xyIHudVSwUCaozfEbopV4A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "p29twV2yjkKRnqvNqn200g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Legend"));
                })(varBag.model, idService);
            }
        },
        "L99JIw6CxUKIShSp8S4ZCg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "LMen8jkNxE2iQPzQoUsslA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "DO_6MsLNtUiXc6Z1xBUAyw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "MbCZJgyT0EahIniU5JmFDg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "lztAHROPnEerxvTPgKisPg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "+fOoAMmAtE+OunGdYkRhNg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "E9NGAiNV8ESwUDUtnjqBXg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        },
        "49j26qsIr0aW5vx77TMnjA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});