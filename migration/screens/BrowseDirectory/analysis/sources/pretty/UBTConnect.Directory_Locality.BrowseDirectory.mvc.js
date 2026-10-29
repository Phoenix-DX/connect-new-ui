define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "Leaflet.model", "Connect_Geography_CS.model", "Leaflet.controller", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.SubLayout.SubLayout_Browse_Section.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "Leaflet.Leaflet.LeafletMap.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.Directory_Locality.StatisticsList.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.controller$GetClass_Color", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnectLibrary.controller$GetLookupConcepts", "Leaflet.model$MarkerWithWindowRec", "UBTConnect.referencesHealth$Leaflet", "UBTConnect.model$MarkerWithWindowList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "Leaflet.model$MapOptionsRec", "Leaflet.model$MaxBoundsRec", "Leaflet.model$MarkerRec", "Leaflet.model$MarkerOptionsRec", "Leaflet.model$IconRec", "Leaflet.model$TooltipRec", "Leaflet.model$TooltipOptionsRec", "Leaflet.model$PopUpRec", "Leaflet.model$OffsetRec", "Leaflet.model$TileLayerRec", "Leaflet.model$TileLayerOptionsRec", "Leaflet.model$GeoJSONFeatureRec", "UBTConnect.model$GeoJSONFeatureList", "Leaflet.model$PathOptionsRec", "Leaflet.model$ZoomControlOptionsRec", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "Connect_Geography_CS.model$UI_LocalityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_LocalityStatisticsList", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$Map_FitBoundsAuto", "UBTConnect.controller$GetSkeletonList_UI_LocalityStatistics", "Leaflet.controller$Map_SetPopupBindingCallback", "UBTConnect.controller$Directory_BrowseByCountry_TooltipBuilder", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$HasAccessToRegion", "UBTConnect.controller$GetLocalityLabel", "Leaflet.controller$Map_Marker_OpenPopUp"], function(OutSystems, UBTConnectModel, UBTConnectLibraryController, UBTConnectLibraryModel, LeafletModel, Connect_Geography_CSModel, LeafletController, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_SubLayout_SubLayout_Browse_Section_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, Leaflet_Leaflet_LeafletMap_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Directory_Locality_StatisticsList_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;

    var GetLocalityStatisticsDataActRec = (function(_super) {
        __extends(GetLocalityStatisticsDataActRec, _super);

        function GetLocalityStatisticsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetLocalityStatisticsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_LocalitiesStatistics", "out_LocalitiesStatisticsOut", "Out_LocalitiesStatistics", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_LocalityStatisticsList());
                }, true, UBTConnectModel.UI_LocalityStatisticsList),
                this.attr("CountryName", "countryNameOut", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetLocalityStatisticsDataActRec.init();
        return GetLocalityStatisticsDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MarkersList", "markersListVar", "MarkersList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MarkerWithWindowList());
                }, false, UBTConnectModel.MarkerWithWindowList),
                this.attr("Center", "centerVar", "Center", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
                }, false, OS.DataTypes.DecimalList),
                this.attr("Local_MapId", "local_MapIdVar", "Local_MapId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("CountryCode", "countryCodeIn", "CountryCode", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_countryCodeInDataFetchStatus", "_countryCodeInDataFetchStatus", "_countryCodeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetLocalityStatistics", "getLocalityStatisticsDataAct", "getLocalityStatisticsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetLocalityStatisticsDataActRec());
                }, true, GetLocalityStatisticsDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((((((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_SubLayout_SubLayout_Browse_Section_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || Leaflet_Leaflet_LeafletMap_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_StatisticsList_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("CountryCode" in inputs) {
                this.variables.countryCodeIn = OS.DataConversion.ServerDataConverter.from(inputs.CountryCode, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.BrowseDirectory");
});
define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "Leaflet.model", "Connect_Geography_CS.model", "Leaflet.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.BrowseDirectory.mvc$model", "UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.SubLayout.SubLayout_Browse_Section.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Leaflet.Leaflet.LeafletMap.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect.Directory_Locality.StatisticsList.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.controller$GetClass_Color", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnectLibrary.controller$GetLookupConcepts", "Leaflet.model$MarkerWithWindowRec", "UBTConnect.referencesHealth$Leaflet", "UBTConnect.model$MarkerWithWindowList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "Leaflet.model$MapOptionsRec", "Leaflet.model$MaxBoundsRec", "Leaflet.model$MarkerRec", "Leaflet.model$MarkerOptionsRec", "Leaflet.model$IconRec", "Leaflet.model$TooltipRec", "Leaflet.model$TooltipOptionsRec", "Leaflet.model$PopUpRec", "Leaflet.model$OffsetRec", "Leaflet.model$TileLayerRec", "Leaflet.model$TileLayerOptionsRec", "Leaflet.model$GeoJSONFeatureRec", "UBTConnect.model$GeoJSONFeatureList", "Leaflet.model$PathOptionsRec", "Leaflet.model$ZoomControlOptionsRec", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "Connect_Geography_CS.model$UI_LocalityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_LocalityStatisticsList", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$Map_FitBoundsAuto", "UBTConnect.controller$GetSkeletonList_UI_LocalityStatistics", "Leaflet.controller$Map_SetPopupBindingCallback", "UBTConnect.controller$Directory_BrowseByCountry_TooltipBuilder", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$HasAccessToRegion", "UBTConnect.controller$GetLocalityLabel", "Leaflet.controller$Map_Marker_OpenPopUp"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, UBTConnectLibraryModel, LeafletModel, Connect_Geography_CSModel, LeafletController, UBTConnect_UtilsController, React, OSView, UBTConnect_Directory_Locality_BrowseDirectory_mvc_model, UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, Leaflet_Leaflet_LeafletMap_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Locality_StatisticsList_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_Locality.BrowseDirectory";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/UBTConnect.Directory_Locality.BrowseDirectory.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, Leaflet_Leaflet_LeafletMap_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_Locality_StatisticsList_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_BrowseDirectory_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "BrowseDirectory";
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
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.getCachedValue(idService.getId("CH+YipWF10SD5Lxk9ZP+8Q.Value"), function() {
                                return (((model.variables.getLocalityStatisticsDataAct.countryNameOut === "")) ? ("Browse Directory") : (model.variables.getLocalityStatisticsDataAct.countryNameOut));
                            }, function() {
                                return model.variables.getLocalityStatisticsDataAct.countryNameOut;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr)
                        })];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_view, {
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
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_TopSection: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("ezLgADRrKEqhV20iPC+V1Q.Options"), function() {
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
                                                    extendedEvents: {
                                                        onClick: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/BrowseDirectory/Container onclick");
                                                                controller.handler_BrowseCountries$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        }
                                                    },
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                    inputs: {
                                                        ColumnOptions: model.getCachedValue(idService.getId("ILlG4QZj40iPpmZBsk0fpQ.ColumnOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                                                                return rec;
                                                            }();
                                                        }),
                                                        ExtendedClasses: "margin-left-base"
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
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        left: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                inputs: {
                                                                    Text: "Select another country to view",
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
                                                                    uuid: "6",
                                                                    alias: "5"
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
                                                                                uuid: "7",
                                                                                alias: "6"
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
                                                                    uuid: "8",
                                                                    alias: "7"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: []
                                                }))];
                                            })
                                        },
                                        _dependencies: []
                                    })];
                                }),
                                placeholder_BottomSection: new PlaceholderContent(function() {
                                    return [$if(!(model.variables.centerVar.isEmpty), false, this, function() {
                                        return [React.createElement(Leaflet_Leaflet_LeafletMap_mvc_view, {
                                            inputs: {
                                                TileLayer: model.getCachedValue(idService.getId("LeafletMap.TileLayer"), function() {
                                                    return function() {
                                                        var rec = new LeafletModel.TileLayerRec();
                                                        rec.urlAttr = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
                                                        rec.optionsAttr = function() {
                                                            var rec = new LeafletModel.TileLayerOptionsRec();
                                                            rec.minZoomAttr = OS.BuiltinFunctions.integerToLongInteger(2);
                                                            rec.maxZoomAttr = OS.BuiltinFunctions.integerToLongInteger(20);
                                                            rec.subdomainsAttr = function() {
                                                                var list = new OS.DataTypes.TextList();
                                                                list.pushAll(["a", "b", "c", "d"]);
                                                                return list;
                                                            }();
                                                            return rec;
                                                        }();
                                                        return rec;
                                                    }();
                                                }),
                                                MarkersList: model.variables.markersListVar,
                                                useClustering: true,
                                                MapOptions: model.getCachedValue(idService.getId("LeafletMap.MapOptions"), function() {
                                                    return function() {
                                                        var rec = new LeafletModel.MapOptionsRec();
                                                        rec.centerAttr = model.variables.centerVar;
                                                        rec.zoomAttr = OS.BuiltinFunctions.integerToLongInteger(5);
                                                        rec.minZoomAttr = OS.BuiltinFunctions.integerToLongInteger(2);
                                                        rec.maxZoomAttr = OS.BuiltinFunctions.integerToLongInteger(20);
                                                        rec.maxBoundsAttr = function() {
                                                            var rec = new LeafletModel.MaxBoundsRec();
                                                            rec.max_LatAttr = 100;
                                                            rec.min_LatAttr = -100;
                                                            rec.max_LongAttr = 190;
                                                            rec.min_LongAttr = -190;
                                                            return rec;
                                                        }();
                                                        rec.attributionControlAttr = false;
                                                        rec.maxBoundsViscosityAttr = OS.DataTypes.LongInteger.defaultValue;
                                                        return rec;
                                                    }();
                                                }, function() {
                                                    return model.variables.centerVar;
                                                }),
                                                ZoomControlOptions: model.getCachedValue(idService.getId("LeafletMap.ZoomControlOptions"), function() {
                                                    return function() {
                                                        var rec = new LeafletModel.ZoomControlOptionsRec();
                                                        rec.positionAttr = "bottomright";
                                                        rec.zoomInTitleAttr = "Zoom in";
                                                        rec.zoomInClassAttr = ((("ubt-icon " + UBTConnectModel.staticEntities.uBT_Icons2.add) + " ") + OutSystemsDebugger.handleFunctionCall(function() {
                                                            return UBTConnectLibraryController.default.getClass_Color$Action(UBTConnectModel.staticEntities.uBT_Color.neutral8, callContext).out_ColorClassOut;
                                                        }, OS.DataTypes.DataTypes.Text, callContext.id));
                                                        rec.zoomOutTitleAttr = "Zoom out";
                                                        rec.zoomOutClassAttr = ((("ubt-icon " + UBTConnectModel.staticEntities.uBT_Icons2.remove) + " ") + OutSystemsDebugger.handleFunctionCall(function() {
                                                            return UBTConnectLibraryController.default.getClass_Color$Action(UBTConnectModel.staticEntities.uBT_Color.neutral8, callContext).out_ColorClassOut;
                                                        }, OS.DataTypes.DataTypes.Text, callContext.id));
                                                        rec.isAddGoToMyLocationButtonAttr = false;
                                                        rec.myLocationButtonClassAttr = ((("ubt-icon " + UBTConnectModel.staticEntities.uBT_Icons2.myLocationFill) + " ") + OutSystemsDebugger.handleFunctionCall(function() {
                                                            return UBTConnectLibraryController.default.getClass_Color$Action(UBTConnectModel.staticEntities.uBT_Color.primary, callContext).out_ColorClassOut;
                                                        }, OS.DataTypes.DataTypes.Text, callContext.id));
                                                        rec.myLocationButtonTitleAttr = "Your location";
                                                        rec.useCustomZoomControlAttr = true;
                                                        return rec;
                                                    }();
                                                })
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onInitialized$Action: function(mapIdIn) {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Leaflet/LeafletMap OnInitialized");
                                                        controller.handler_LeafletMapOnInitialized$Action(mapIdIn, controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });

                                                    ;
                                                },
                                                setCallbacks$Action: function(mapIdIn) {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Leaflet/LeafletMap SetCallbacks");
                                                        controller.leafletMapSetCallbacks$Action(mapIdIn, controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });

                                                    ;
                                                },
                                                onMarker_Clicked$Action: function(markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn) {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Leaflet/LeafletMap OnMarker_Clicked");
                                                        controller.handler_LeafletMapOnMarker_Clicked$Action(markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, controller.callContext(eventHandlerContext));
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
                                                name: "LeafletMap",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                            inputs: {
                                                In_IsLoading: true
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
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        style: "leaflet-container",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                })
                                            },
                                            _dependencies: []
                                        })];
                                    }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("dynOTtSTEEeaB3qfsP7ilA.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.backgroundAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                        rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
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
                                            uuid: "12",
                                            alias: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnect_Directory_Locality_StatisticsList_mvc_view, {
                                                    inputs: {
                                                        In_SearchPrompt: model.getCachedValue(idService.getId("jko2ENFVRUCqpmi_3eFtNQ.In_SearchPrompt"), function() {
                                                            return ("Search " + OutSystemsDebugger.handleFunctionCall(function() {
                                                                return UBTConnectLibraryController.default.getLookupConcepts$Action(true, callContext).out_LookupOut;
                                                            }, OS.DataTypes.DataTypes.Record, callContext.id).localityAttr.singularAttr);
                                                        }),
                                                        In_ShowSubtitle: true,
                                                        In_IsLoading: !(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr),
                                                        In_Statistics: model.getCachedValue(idService.getId("jko2ENFVRUCqpmi_3eFtNQ.In_Statistics"), function() {
                                                            return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut, new UBTConnectModel.TextStatisticsOptionsRecordList(), function(source, target) {
                                                                target.idAttr = OS.BuiltinFunctions.longIntegerToText(source.localityIdAttr);
                                                                target.statisticsOptionsAttr = source.statisticsAttr;
                                                                return target;
                                                            });
                                                        }, function() {
                                                            return model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut;
                                                        }),
                                                        _in_StatisticsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr)
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        event_Clicked$Action: function(event_IdIn) {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/StatisticsList Event_Clicked");
                                                                    return controller.handler_StatisticsList_Clicked$Action(event_IdIn, controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });
                                                            });;
                                                        },
                                                        onParametersChangedEv$Action: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/StatisticsList OnParametersChangedEv");
                                                                controller.statisticsListOnParametersChhanged$Action(controller.callContext(eventHandlerContext));
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
                                                        uuid: "13",
                                                        alias: "11"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.markersListVar), asPrimitiveValue(model.variables.centerVar)]
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
                                uuid: "14",
                                alias: "12"
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
                                uuid: "15",
                                alias: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.markersListVar), asPrimitiveValue(model.variables.centerVar), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.countryNameOut)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "Leaflet.model", "Connect_Geography_CS.model", "Leaflet.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.BrowseDirectory.mvc$debugger", "UBTConnect.Directory_Locality.controller", "UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.Handler_LeafletMapOnInitialized.AsyncInvalidateJS", "UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.OnAfterFetch_GetLocalityStatistics.GetCallbackJS", "UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.LeafletMapSetCallbacks.JavaScript1JS", "UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnectLibrary.controller$GetClass_Color", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnectLibrary.controller$GetLookupConcepts", "Leaflet.model$MarkerWithWindowRec", "UBTConnect.referencesHealth$Leaflet", "UBTConnect.model$MarkerWithWindowList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "Leaflet.model$MapOptionsRec", "Leaflet.model$MaxBoundsRec", "Leaflet.model$MarkerRec", "Leaflet.model$MarkerOptionsRec", "Leaflet.model$IconRec", "Leaflet.model$TooltipRec", "Leaflet.model$TooltipOptionsRec", "Leaflet.model$PopUpRec", "Leaflet.model$OffsetRec", "Leaflet.model$TileLayerRec", "Leaflet.model$TileLayerOptionsRec", "Leaflet.model$GeoJSONFeatureRec", "UBTConnect.model$GeoJSONFeatureList", "Leaflet.model$PathOptionsRec", "Leaflet.model$ZoomControlOptionsRec", "UBTConnect.model$TextStatisticsOptionsRecordList", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList", "Connect_Geography_CS.model$UI_LocalityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_LocalityStatisticsList", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$Map_FitBoundsAuto", "UBTConnect.controller$GetSkeletonList_UI_LocalityStatistics", "Leaflet.controller$Map_SetPopupBindingCallback", "UBTConnect.controller$Directory_BrowseByCountry_TooltipBuilder", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$HasAccessToRegion", "UBTConnect.controller$GetLocalityLabel", "Leaflet.controller$Map_Marker_OpenPopUp"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, UBTConnectLibraryModel, LeafletModel, Connect_Geography_CSModel, LeafletController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_BrowseDirectory_mvc_Debugger, _flow_UBTConnect_Directory_LocalityController, UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_Handler_LeafletMapOnInitialized_AsyncInvalidateJS, UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_OnAfterFetch_GetLocalityStatistics_GetCallbackJS, UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_LeafletMapSetCallbacks_JavaScript1JS, UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                action_InvalidateMapSize$Action: function() {
                    return controller.executeActionInsideJSNode(controller._action_InvalidateMapSize$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_InvalidateMapSize");
                },
                handler_StatisticsList_Clicked$Action: function(event_IdIn) {
                    event_IdIn = (event_IdIn === undefined) ? "" : event_IdIn;
                    return controller.executeActionInsideJSNode(controller._handler_StatisticsList_Clicked$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(event_IdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Handler_StatisticsList_Clicked");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getLocalityStatistics$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getLocalityStatistics$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getLocalityStatistics$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IrvEcURlYE6ysMsbE26f5g:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/DataActions.IrvEcURlYE6ysMsbE26f5g:nV5KipeCP9QikPVl5t20xg", "UBTConnect", "GetLocalityStatistics", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/BrowseDirectory/GetLocalityStatistics");
                return controller.callDataAction("DataActionGetLocalityStatistics", "screenservices/UBTConnect/Directory_Locality/BrowseDirectory/DataActionGetLocalityStatistics", "avevDySAI8vIT+Te4_4bkg", function(b) {
                    model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getLocalityStatisticsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLocalityStatisticsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/BrowseDirectory/GetLocalityStatistics On After Fetch");
                    controller._onAfterFetch_GetLocalityStatistics$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IrvEcURlYE6ysMsbE26f5g", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getLocalityStatistics$DataActRefresh"];
        // Client Actions
        Controller.prototype._handler_LeafletMapOnInitialized$Action = function(mapIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_LeafletMapOnInitialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.Handler_LeafletMapOnInitialized$vars"))());
            vars.value.mapIdInLocal = mapIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ykwFEABLvUe9WIJNA5BsfA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.ykwFEABLvUe9WIJNA5BsfA:X0NiVwfkDvlZpWNidrFJvw", "UBTConnect", "Handler_LeafletMapOnInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aFJNGTo7TEGk2R6HM2tZjQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pFnDp7XW1EG6cSABsULNKA", callContext.id);
                // Local_MapId = MapId
                model.variables.local_MapIdVar = vars.value.mapIdInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9k8Eg+DfnU2hiOhq36WJmw", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_Handler_LeafletMapOnInitialized_AsyncInvalidateJS, "AsyncInvalidate", "Handler_LeafletMapOnInitialized", null, function($parameters) {}, {
                    Action_InvalidateMapSize: controller.clientActionProxies.action_InvalidateMapSize$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HaGRDKeW+UazVQ5XPBqiCA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ykwFEABLvUe9WIJNA5BsfA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.Handler_LeafletMapOnInitialized$vars", [{
            name: "MapId",
            attrName: "mapIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onAfterFetch_GetLocalityStatistics$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetLocalityStatistics");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.OnAfterFetch_GetLocalityStatistics$vars"))());
            var getCallbackJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getCallbackJSResult = getCallbackJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KpduJhmK0Ua8TZttliDVSA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.KpduJhmK0Ua8TZttliDVSA:25xjfxvGek9KuYNcYYsi4w", "UBTConnect", "OnAfterFetch_GetLocalityStatistics", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nvJ0W3U1gUii_S91E0stiQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:w5NvOgccC0mQIHvbBCiROg", callContext.id);
                // Execute Action: CenterClear
                OS.SystemActions.listClear(model.variables.centerVar, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ULMcZ3SM7E6ddqV7MkrGIw", callContext.id);
                // Execute Action: CenterLat
                OS.SystemActions.listAppend(model.variables.centerVar, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getCurrent(callContext.iterationContext).latitudeAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q8cbt+94Kke_3pBYZPGZbg", callContext.id);
                // Execute Action: CenterLong
                OS.SystemActions.listAppend(model.variables.centerVar, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getCurrent(callContext.iterationContext).longitudeAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TL_Umxu2KE2+uJ2NOoN5aA", callContext.id);
                getCallbackJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_OnAfterFetch_GetLocalityStatistics_GetCallbackJS, "GetCallback", "OnAfterFetch_GetLocalityStatistics", {
                    Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.OnAfterFetch_GetLocalityStatistics$getCallbackJSResult"))();
                    jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    Handler_StatisticsList_Clicked: controller.clientActionProxies.handler_StatisticsList_Clicked$Action
                }, {});
                // Foreach GetLocalityStatistics.Out_LocalitiesStatistics
                callContext.iterationContext.registerIterationStart(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut);
                try {
                    var out_LocalitiesStatisticsIterator = callContext.iterationContext.getIterator(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut);
                    var out_LocalitiesStatisticsIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4xy6eW4wEkCD2Hf20tK_HA", callContext.id) && (out_LocalitiesStatisticsIndex < model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length))) {
                        out_LocalitiesStatisticsIterator.currentRowNumber = out_LocalitiesStatisticsIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6zB5X5OgLUOhvYmdat4TpA", callContext.id);
                        // Execute Action: MarkerClear
                        OS.SystemActions.listClear(vars.value.local_MarkerWithTooltipVar.markerAttr.latlngAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LGENMUmWcUSw558K3qhC9w", callContext.id);
                        // Local_MarkerWithTooltip = GetLocalityStatistics.Out_LocalitiesStatistics.Current
                        vars.value.local_MarkerWithTooltipVar = OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(out_LocalitiesStatisticsIndex.valueOf()), new LeafletModel.MarkerWithWindowRec(), function(source, target) {
                            target.markerAttr.idAttr = OS.BuiltinFunctions.longIntegerToText(source.localityIdAttr);
                            target.markerAttr.typeAttr = UBTConnectModel.staticEntities.connect_Entity.locality;
                            target.markerAttr.extraDataAttr = source.statisticsAttr.titleAttr;
                            target.markerAttr.optionsAttr = function() {
                                var rec = new LeafletModel.MarkerOptionsRec();
                                rec.iconAttr = function() {
                                    var rec = new LeafletModel.IconRec();
                                    rec.iconUrlAttr = "/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg";
                                    rec.iconSizeAttr = function() {
                                        var list = new OS.DataTypes.DecimalList();
                                        list.pushAll([OS.BuiltinFunctions.integerToDecimal(20), OS.BuiltinFunctions.integerToDecimal(24)]);
                                        return list;
                                    }();
                                    rec.iconAnchorAttr = function() {
                                        var list = new OS.DataTypes.DecimalList();
                                        list.pushAll([OS.BuiltinFunctions.integerToDecimal(10), OS.BuiltinFunctions.integerToDecimal(24)]);
                                        return list;
                                    }();
                                    rec.popupAnchorAttr = function() {
                                        var list = new OS.DataTypes.DecimalList();
                                        list.pushAll([OS.BuiltinFunctions.integerToDecimal(0), OS.BuiltinFunctions.integerToDecimal(-24)]);
                                        return list;
                                    }();
                                    return rec;
                                }();
                                return rec;
                            }();
                            target.popupAttr.closeButtonAttr = true;
                            target.popupAttr.autoCloseAttr = false;
                            target.popupAttr.interactiveAttr = true;
                            target.popupAttr.contentAttr = "Dummy";
                            return target;
                        });
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lyTR_IeJU0mg5r563tGGtg", callContext.id);
                        // Execute Action: MarkerLat
                        OS.SystemActions.listAppend(vars.value.local_MarkerWithTooltipVar.markerAttr.latlngAttr, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(out_LocalitiesStatisticsIndex.valueOf()).latitudeAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u2EY7WdjKUSDs6s9uSyYfg", callContext.id);
                        // Execute Action: MarkerLong
                        OS.SystemActions.listAppend(vars.value.local_MarkerWithTooltipVar.markerAttr.latlngAttr, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(out_LocalitiesStatisticsIndex.valueOf()).longitudeAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a3Iubrt50EqnNdMWDW+WQg", callContext.id);
                        // Execute Action: AddMarker
                        OS.SystemActions.listAppend(model.variables.markersListVar, vars.value.local_MarkerWithTooltipVar, callContext);
                        out_LocalitiesStatisticsIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:64qpZkwuc02fusnILkmh+Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KpduJhmK0Ua8TZttliDVSA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.OnAfterFetch_GetLocalityStatistics$vars", [{
            name: "Local_MarkerWithTooltip",
            attrName: "local_MarkerWithTooltipVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new LeafletModel.MarkerWithWindowRec();
            },
            complexType: LeafletModel.MarkerWithWindowRec
        }]);
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.OnAfterFetch_GetLocalityStatistics$getCallbackJSResult", [{
            name: "Object",
            attrName: "objectOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._handler_BrowseCountries$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_BrowseCountries");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:abM5M20kr0e1m6_w6mu9aA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.abM5M20kr0e1m6_w6mu9aA:pnghKdNjXHV5WgIyTQ_nMw", "UBTConnect", "Handler_BrowseCountries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N4kspRdh0U6mhRYgMW1n8g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XV8NwmmExUuNDqF6Mas3Yw", callContext.id);
                // Destination: /UBTConnect/BrowseCountries
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/BrowseCountries", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:abM5M20kr0e1m6_w6mu9aA", callContext.id);
            }

        };
        Controller.prototype._action_InvalidateMapSize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_InvalidateMapSize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cZ9mRXO8ZEGRrFlUhEcKNA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.cZ9mRXO8ZEGRrFlUhEcKNA:Gyn3OYr_V5T_XyBBd8r3Ig", "UBTConnect", "Action_InvalidateMapSize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x8l3kaRAzkuesIJ05D4Pkw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yFqUSZp44U+RLTFfxuGnOg", callContext.id) && ((model.variables.local_MapIdVar) !== ("")))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JNsHBa3sU0+ZvtwsNGsTgQ", callContext.id);
                    // Execute Action: Map_InvalidateSize
                    LeafletController.default.map_InvalidateSize$Action(model.variables.local_MapIdVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jOvQkAc_ZEWvTcso611qmg", callContext.id);
                    // Execute Action: Map_FitBoundsAuto
                    LeafletController.default.map_FitBoundsAuto$Action(model.variables.local_MapIdVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Zn90N+9wFU60jZ_Eoa+ryA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Zn90N+9wFU60jZ_Eoa+ryA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cZ9mRXO8ZEGRrFlUhEcKNA", callContext.id);
            }

        };
        Controller.prototype._action_RefreshData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_RefreshData");
            callContext = controller.callContext(callContext);
            var getSkeletonList_UI_LocalityStatisticsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSkeletonList_UI_LocalityStatisticsVar = getSkeletonList_UI_LocalityStatisticsVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:b9YSUbRE2kqMXVnBMg5q1w:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.b9YSUbRE2kqMXVnBMg5q1w:sre+PN5hPFxhfXDBDU8jsw", "UBTConnect", "Action_RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vn1SS6kGWU2bY3l+VKLnEw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5KU501tu+kuP6xVrHOHzhw", callContext.id);
                // Execute Action: GetSkeletonList_UI_LocalityStatistics
                getSkeletonList_UI_LocalityStatisticsVar.value = UBTConnectController.default.getSkeletonList_UI_LocalityStatistics$Action(10, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GYRORJ8ZHUWCMFcA6N+A9Q", callContext.id);
                // GetLocalityStatistics.Out_LocalitiesStatistics = GetSkeletonList_UI_LocalityStatistics.UI_LocalityStatistics
                model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut = getSkeletonList_UI_LocalityStatisticsVar.value.uI_LocalityStatisticsOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4JFLAS3yqEKFAxVG0aQF4Q", callContext.id);
                // Refresh Query: GetLocalityStatistics
                var result = controller.getLocalityStatistics$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h+edjBpfHE2VgjrYks3KEA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:b9YSUbRE2kqMXVnBMg5q1w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:b9YSUbRE2kqMXVnBMg5q1w", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._statisticsListOnParametersChhanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("StatisticsListOnParametersChhanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IGOHjn6V_EO_r409pQsv8A:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.IGOHjn6V_EO_r409pQsv8A:Hhe_SZ+GHH0gfFAgRp1lDg", "UBTConnect", "StatisticsListOnParametersChhanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ieXLkmgaY06ZRxAjgoXUiw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oTnfmG89n0ih+8BkLNlXAw", callContext.id) && ((model.variables.local_MapIdVar) !== ("")))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hj08CYQcU0ak1_TEAGUYjQ", callContext.id);
                    // Execute Action: Map_InvalidateSize
                    LeafletController.default.map_InvalidateSize$Action(model.variables.local_MapIdVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DzWk2JFRlUenarBuKQVj6g", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DzWk2JFRlUenarBuKQVj6g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IGOHjn6V_EO_r409pQsv8A", callContext.id);
            }

        };
        Controller.prototype._leafletMapSetCallbacks$Action = function(mapIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("LeafletMapSetCallbacks");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.LeafletMapSetCallbacks$vars"))());
            vars.value.mapIdInLocal = mapIdIn;
            var javaScript1JSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.javaScript1JSResult = javaScript1JSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mYjPk5dmdUKkv4mpGVPSBQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.mYjPk5dmdUKkv4mpGVPSBQ:bh+cClHR+ahJxjGdF9W0Rw", "UBTConnect", "LeafletMapSetCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CjhVG_emh0S2O1TxDqb5hw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZkdpTAbMUE6+5xUDg3yuSw", callContext.id);
                javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_LeafletMapSetCallbacks_JavaScript1JS, "JavaScript1", "LeafletMapSetCallbacks", {
                    PopupBindingCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.LeafletMapSetCallbacks$javaScript1JSResult"))();
                    jsNodeResult.popupBindingCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PopupBindingCallback, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    Directory_BrowseByCountry_TooltipBuilder: UBTConnectController.default.getClientActionProxies(controller).directory_BrowseByCountry_TooltipBuilder$Action,
                    Handler_StatisticsList_Clicked: controller.clientActionProxies.handler_StatisticsList_Clicked$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bzjNSmv0O0S+oZVRvnkkFg", callContext.id);
                // Execute Action: Map_SetPopupBindingCallback
                LeafletController.default.map_SetPopupBindingCallback$Action(vars.value.mapIdInLocal, javaScript1JSResult.value.popupBindingCallbackOut, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FvsYCczuXU6TE8UZt8GUPA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mYjPk5dmdUKkv4mpGVPSBQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.LeafletMapSetCallbacks$vars", [{
            name: "MapId",
            attrName: "mapIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.LeafletMapSetCallbacks$javaScript1JSResult", [{
            name: "PopupBindingCallback",
            attrName: "popupBindingCallbackOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.Handler_StatisticsList_Clicked$vars"))());
            vars.value.event_IdInLocal = event_IdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.hasAccessToRegionVar = hasAccessToRegionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+b+oqAIRZ0aKNsjtQef8cw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.+b+oqAIRZ0aKNsjtQef8cw:359Vwp4c4x+eUm0RHhsJKg", "UBTConnect", "Handler_StatisticsList_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ibl0Y9ZE8UWuRKjb7iLoBg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jMHlSlGODE6EQqljhULfNQ", callContext.id) && ((vars.value.event_IdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ef4S5kwOgU2t+bj0dZla0A", callContext.id);
                        // Execute Action: HasAccessToRegion
                        model.flush();
                        return UBTConnectController.default.hasAccessToRegion$Action(OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.textToLongInteger(vars.value.event_IdInLocal)), model.variables.countryCodeIn, callContext).then(function(value) {
                            hasAccessToRegionVar.value = value;
                        }).then(function() {
                            return OS.Flow.executeSequence(function() {
                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:knJyoSKLXUiwzfjK4qbqpQ", callContext.id) && hasAccessToRegionVar.value.hasAccessOut)) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u9TLKido7ECtO+dMuB+gpg", callContext.id);
                                    // Execute Action: ListIndexOf
                                    listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut, function(p) {
                                        return (OS.BuiltinFunctions.longIntegerToText(p.localityIdAttr) === vars.value.event_IdInLocal);
                                    }, callContext);

                                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:exiy1+B+D0+RWdlbBXwfSA", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m7hdt5V250+Np43HS8ROug", callContext.id);
                                        // LocalityLabel = GetLocalityLabel(GetLocalityStatistics.Out_LocalitiesStatistics[ListIndexOf.Position].Name, GetLocalityStatistics.CountryName)
                                        vars.value.localityLabelVar = OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnectController.default.getLocalityLabel$Action(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(listIndexOfVar.value.positionOut).nameAttr, model.variables.getLocalityStatisticsDataAct.countryNameOut, callContext).out_LabelOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                                    }

                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:buoPLnjcjEirBfMwTnhNRQ", callContext.id);
                                    // Destination: /UBTConnect/Locality_Details
                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {
                                        LocalityId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.event_IdInLocal), OS.DataTypes.DataTypes.LongInteger),
                                        PreloadedLocalityLabel: OS.DataConversion.ServerDataConverter.asString(vars.value.localityLabelVar, OS.DataTypes.DataTypes.Text)
                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jtB+Wot_g0ixj6UYuxtc7Q", callContext.id);
                                    // Execute Action: App_Subscription_ShowUpgradePopUp
                                    model.flush();
                                    return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZWvydEmuzUC5eqg+sehOYA", callContext.id);
                                    });
                                }

                            });
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UJmlyEC05USY9gRnwoh+nQ", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+b+oqAIRZ0aKNsjtQef8cw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+b+oqAIRZ0aKNsjtQef8cw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.Handler_StatisticsList_Clicked$vars", [{
            name: "Event_Id",
            attrName: "event_IdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "LocalityLabel",
            attrName: "localityLabelVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_LeafletMapOnMarker_Clicked$Action = function(markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_LeafletMapOnMarker_Clicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.Handler_LeafletMapOnMarker_Clicked$vars"))());
            vars.value.markerIdInLocal = markerIdIn;
            vars.value.mapIdInLocal = mapIdIn;
            vars.value.typeInLocal = typeIn;
            vars.value.extraDataInLocal = extraDataIn;
            vars.value.latInLocal = latIn;
            vars.value.longInLocal = longIn;
            vars.value.markerObjInLocal = markerObjIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RV632+Oa10igRCvGVeStjA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.RV632+Oa10igRCvGVeStjA:BOB_VcycdPIIAwvthc2Dug", "UBTConnect", "Handler_LeafletMapOnMarker_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKlSXNFyd0KLEc2BnU1WeQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rG+OfAb1SUmYFwztSuuRpw", callContext.id);
                // Execute Action: Map_Marker_OpenPopUp
                LeafletController.default.map_Marker_OpenPopUp$Action(vars.value.markerObjInLocal, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6dHeFAMbT0eWXpiitmNliA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RV632+Oa10igRCvGVeStjA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.Handler_LeafletMapOnMarker_Clicked$vars", [{
            name: "MarkerId",
            attrName: "markerIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "MapId",
            attrName: "mapIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Type",
            attrName: "typeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ExtraData",
            attrName: "extraDataInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Lat",
            attrName: "latInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Decimal,
            defaultValue: function() {
                return OS.DataTypes.Decimal.defaultValue;
            }
        }, {
            name: "Long",
            attrName: "longInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Decimal,
            defaultValue: function() {
                return OS.DataTypes.Decimal.defaultValue;
            }
        }, {
            name: "MarkerObj",
            attrName: "markerObjInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
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
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5Z396hcTQEmYe3lESXE3aQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ/ClientActions.5Z396hcTQEmYe3lESXE3aQ:iuoDgjo0PDbPlJucHSnB6Q", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X15fQgR0bk+tDuBe4DuKQg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E2d3YFXGyUmLWGK6Ogq0yw", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_BrowseDirectory_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2jYY_7tSnUW+JJeIl2Apsw", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut && model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b50UJAYoQUG70chwMkvehw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:urocViOBdUGMhcS3AyY+8w", callContext.id);
                        // Execute Action: Action_RefreshData
                        return controller._action_RefreshData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1tk8ygqGgk6u6vnF5oHlqg", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5Z396hcTQEmYe3lESXE3aQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5Z396hcTQEmYe3lESXE3aQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.BrowseDirectory.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        Controller.prototype.handler_LeafletMapOnInitialized$Action = function(mapIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_LeafletMapOnInitialized$Action, callContext, mapIdIn);

        };
        Controller.prototype.onAfterFetch_GetLocalityStatistics$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalityStatistics$Action, callContext);

        };
        Controller.prototype.handler_BrowseCountries$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BrowseCountries$Action, callContext);

        };
        Controller.prototype.action_InvalidateMapSize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_InvalidateMapSize$Action, callContext);

        };
        Controller.prototype.action_RefreshData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_RefreshData$Action, callContext);

        };
        Controller.prototype.statisticsListOnParametersChhanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._statisticsListOnParametersChhanged$Action, callContext);

        };
        Controller.prototype.leafletMapSetCallbacks$Action = function(mapIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._leafletMapSetCallbacks$Action, callContext, mapIdIn);

        };
        Controller.prototype.handler_StatisticsList_Clicked$Action = function(event_IdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_StatisticsList_Clicked$Action, callContext, event_IdIn);

        };
        Controller.prototype.handler_LeafletMapOnMarker_Clicked$Action = function(markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_LeafletMapOnMarker_Clicked$Action, callContext, markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:46jWav2JB0qHaum9ANSCsQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.46jWav2JB0qHaum9ANSCsQ:U6vc+MjaE11OidedEhvNvw", "UBTConnect", "BrowseDirectory", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:46jWav2JB0qHaum9ANSCsQ", callContext.id);
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/BrowseDirectory On Ready");
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
define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.Handler_LeafletMapOnInitialized.AsyncInvalidateJS", [], function() {
    return function($actions, $roles, $public) {
        setTimeout($actions.Action_InvalidateMapSize, 0)
    };
});
define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.OnAfterFetch_GetLocalityStatistics.GetCallbackJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Object = $actions.Handler_StatisticsList_Clicked;
    };
});
define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.LeafletMapSetCallbacks.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.PopupBindingCallback = function(marker) {
            var object = $actions.Directory_BrowseByCountry_TooltipBuilder(marker, $actions.Handler_StatisticsList_Clicked).Object;
            return object;
        };
    };
});
define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.Directory_Locality.BrowseDirectory.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "qUW8XI5FX0qbQxdedzx7cg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.mapIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "9k8Eg+DfnU2hiOhq36WJmw": {
            getter: function(varBag, idService) {
                return varBag.asyncInvalidateJSResult.value;
            }
        },
        "avVazcgGcEO5d6VlNAetWw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.local_MarkerWithTooltipVar;
            }
        },
        "TL_Umxu2KE2+uJ2NOoN5aA": {
            getter: function(varBag, idService) {
                return varBag.getCallbackJSResult.value;
            }
        },
        "5KU501tu+kuP6xVrHOHzhw": {
            getter: function(varBag, idService) {
                return varBag.getSkeletonList_UI_LocalityStatisticsVar.value;
            }
        },
        "fYtwe6Hvg0OVK+u4YfFvmg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.mapIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ZkdpTAbMUE6+5xUDg3yuSw": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "xOUOOXK5w0a+XxG5TpypLQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localityLabelVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "y3qZSJbWe0GX0gB3g+rDCQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "u9TLKido7ECtO+dMuB+gpg": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "ef4S5kwOgU2t+bj0dZla0A": {
            getter: function(varBag, idService) {
                return varBag.hasAccessToRegionVar.value;
            }
        },
        "O90ESVeoUE+bBGvVwPVhUQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.markerIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "xjcbHgeRxkq3KsVaJvVFig": {
            getter: function(varBag, idService) {
                return varBag.vars.value.mapIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "cTb72qKxn0mrVv8sbKkqGg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.typeInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "mSmWX3WMOEy_uBOk7JSLlw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.extraDataInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KktUotCVjUOCebuWKIj8zg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.latInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Decimal
        },
        "Oe_c2VyKq0qYeLSO1thE2w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.longInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Decimal
        },
        "7IWmXEP1mEeXCnqMZwLZvQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.markerObjInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "E2d3YFXGyUmLWGK6Ogq0yw": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "LAAO7vN3i0ySAOBJoqnLYA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.markersListVar;
            }
        },
        "5V4B8yIZrUOehwH1Qq_huA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.centerVar;
            }
        },
        "QIkx5Jnhukikx7utu3+_Sg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_MapIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "_+yYFUe75EeXBjD5mKxOSw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.countryCodeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "IrvEcURlYE6ysMsbE26f5g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getLocalityStatisticsDataAct;
            }
        },
        "Z+Hf8ydbLEG1IaK_ZxMQUw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "_xdOqyw6bkSb9qsbq9Fa8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "wEdlV0LbuE2NYiAUxcyiTg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "VgTVF7V4iESbyYa8jbNfXQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "qYUtwd5bSU+OuhrSrGrIzQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_TopSection"));
                })(varBag.model, idService);
            }
        },
        "NGybJSnJmE2oVdZVf5hJqw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "EXNTL5rr60a4Pu3OCqR4Ew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "o0lEBHziK0mRkHMfbXrlSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "MBl0auzKY0K0dtQ_iQ2fDw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "4k8VkYzCDUSyIaCni3rjfg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_BottomSection"));
                })(varBag.model, idService);
            }
        },
        "YC5ddBhmikqJY5LDsEa8eg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LeafletMap"));
                })(varBag.model, idService);
            }
        },
        "AbXHpNxCkUeCmEaq9OSxaQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "ngCVxMaysEargnNkqzuPnA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Sbr+NxOr0kCgCm5d7v+wfw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "PgNupEVQ10a7a8ynS3CDjA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});