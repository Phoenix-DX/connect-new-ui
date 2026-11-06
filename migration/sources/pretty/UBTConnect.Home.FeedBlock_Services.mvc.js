define("UBTConnect.Home.FeedBlock_Services.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "Connect_Services_CS.model", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "OutSystemsUI_2_23.Interaction.Carousel.mvc$model", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$model", "UBTConnect_Utils.controller$GetHasCustomEvents", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_ServicesPageList", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect.model$UI_ServicesPageRec", "UBTConnect.model$UI_ServiceItemList", "UBTConnect.model$UI_ServiceItemRec", "Connect_Services_CS.model$Connect_ServicesRec", "UBTConnect.referencesHealth$Connect_Services_CS", "UBTConnect.model$Connect_ServicesList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetHasNewLDM", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnect_UtilsModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, Connect_Services_CSModel, UBTJavaScriptUtilsController, NavigationHandlerController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, OutSystemsUI_2_23_Interaction_Carousel_mvcModel, OutSystemsUI_2_23_Adaptive_Gallery_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvcModel) {
    var OS = OutSystems.Internal;

    var GetServicesDataActRec = (function(_super) {
        __extends(GetServicesDataActRec, _super);

        function GetServicesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetServicesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("List", "listOut", "List", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Connect_ServicesList());
                }, true, UBTConnectModel.Connect_ServicesList),
                this.attr("ExternalLinks_ElGusto", "externalLinks_ElGustoOut", "ExternalLinks_ElGusto", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("ExterrnalPackages_CommunityTradelink", "exterrnalPackages_CommunityTradelinkOut", "ExterrnalPackages_CommunityTradelink", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "xyz.appmaker.bufeqe";
                }, true),
                this.attr("ExterrnalPackages_HR100", "exterrnalPackages_HR100Out", "ExterrnalPackages_HR100", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "com.ubtconnectglobal.ubtm.HR100Mobile";
                }, true),
                this.attr("ExterrnalPackages_Trove", "exterrnalPackages_TroveOut", "ExterrnalPackages_Trove", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "com.ubtconnectglobal.ubtm.TroveMobile";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetServicesDataActRec.init();
        return GetServicesDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainElementClass", "mainElementClassVar", "MainElementClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-services-carousel";
                }, false),
                this.attr("Local_ServicesPerPage", "local_ServicesPerPageVar", "Local_ServicesPerPage", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_ServicesPageList());
                }, false, UBTConnectModel.UI_ServicesPageList),
                this.attr("ExternalAppPopUp_Id", "externalAppPopUp_IdVar", "ExternalAppPopUp_Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Local_ExternalApp_PopUpInfo", "local_ExternalApp_PopUpInfoVar", "Local_ExternalApp_PopUpInfo", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec());
                }, false, UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec),
                this.attr("ItemPerPage", "itemPerPageIn", "ItemPerPage", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 6;
                }, false),
                this.attr("_itemPerPageInDataFetchStatus", "_itemPerPageInDataFetchStatus", "_itemPerPageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ForceAddService", "forceAddServiceIn", "ForceAddService", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_forceAddServiceInDataFetchStatus", "_forceAddServiceInDataFetchStatus", "_forceAddServiceInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetServices", "getServicesDataAct", "getServicesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetServicesDataActRec());
                }, true, GetServicesDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Interaction_Carousel_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Adaptive_Gallery_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ItemPerPage" in inputs) {
                this.variables.itemPerPageIn = inputs.ItemPerPage;
                if ("_itemPerPageInDataFetchStatus" in inputs) {
                    this.variables._itemPerPageInDataFetchStatus = inputs._itemPerPageInDataFetchStatus;
                }

            }

            if ("ForceAddService" in inputs) {
                this.variables.forceAddServiceIn = inputs.ForceAddService;
                if ("_forceAddServiceInDataFetchStatus" in inputs) {
                    this.variables._forceAddServiceInDataFetchStatus = inputs._forceAddServiceInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Home.FeedBlock_Services");
});
define("UBTConnect.Home.FeedBlock_Services.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "Connect_Services_CS.model", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.FeedBlock_Services.mvc$model", "UBTConnect.Home.FeedBlock_Services.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "OutSystemsUI_2_23.Interaction.Carousel.mvc$view", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$view", "UBTConnect_Utils.controller$GetHasCustomEvents", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_ServicesPageList", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect.model$UI_ServicesPageRec", "UBTConnect.model$UI_ServiceItemList", "UBTConnect.model$UI_ServiceItemRec", "Connect_Services_CS.model$Connect_ServicesRec", "UBTConnect.referencesHealth$Connect_Services_CS", "UBTConnect.model$Connect_ServicesList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetHasNewLDM", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnect_UtilsModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, Connect_Services_CSModel, UBTJavaScriptUtilsController, NavigationHandlerController, React, OSView, UBTConnect_Home_FeedBlock_Services_mvc_model, UBTConnect_Home_FeedBlock_Services_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Interaction_Carousel_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_view) {
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
        View.displayName = "Home.FeedBlock_Services";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Interaction_Carousel_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Home_FeedBlock_Services_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Home_FeedBlock_Services_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("DIV_Services.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                rec.opacityAttr = (new OS.DataTypes.Decimal("0.87"));
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.large;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.displayOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                return rec;
                            }();
                            rec.shadowIdAttr = UBTConnectModel.staticEntities.uBT_Shadow.small;
                            return rec;
                        }();
                    }),
                    ExtendedClasses: model.variables.mainElementClassVar
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
                    name: "DIV_Services",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                            inputs: {
                                ExtendedClasses: "padding-x-s",
                                ColumnOptions: model.getCachedValue(idService.getId("UG7SON3g1E+YdFyJqusb9A.ColumnOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                                        rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                left: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                        inputs: {
                                            ExtendedClasses: "margin-left-s",
                                            In_TextOptions: model.getCachedValue(idService.getId("hY_XFk8jt0qGGjHfXEEeow.In_TextOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                    return rec;
                                                }();
                                            }),
                                            In_Text: "Services"
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
                                        _dependencies: []
                                    })];
                                }),
                                right: new PlaceholderContent(function() {
                                    return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnect_UtilsController.default.getHasCustomEvents$Action(callContext).hasCustomEventsOut;
                                    }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, {
                                            inputs: {
                                                SizeId: UBTConnectModel.staticEntities.uBT_AvatarSize.extraSmall_32,
                                                BorderColorId: UBTConnectModel.staticEntities.uBT_Color.neutral3,
                                                BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
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

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton OnClick");
                                                        controller.onClick_ServiceSettings$Action(controller.callContext(eventHandlerContext));
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
                                                uuid: "3",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                icon: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                        inputs: {
                                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7,
                                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.settings,
                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
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
                                                            uuid: "4",
                                                            alias: "5"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }),
                                                badge: PlaceholderContent.Empty
                                            },
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("d2ONBsDGaEufQDIFVLJV_g.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.marginSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
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
                                uuid: "5",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OutSystemsUI_2_23_Interaction_Carousel_mvc_view, {
                                        inputs: {
                                            ExtendedClass: model.variables.mainElementClassVar,
                                            Navigation: UBTConnectModel.staticEntities.carouselNavigation.dots,
                                            ItemsPerSlide: model.getCachedValue(idService.getId("Carousel_Services.ItemsPerSlide"), function() {
                                                return function() {
                                                    var rec = new OutSystemsUI_2_23Model.CarouselItemsRec();
                                                    rec.desktopAttr = 1;
                                                    rec.tabletAttr = 1;
                                                    rec.phoneAttr = 1;
                                                    return rec;
                                                }();
                                            }),
                                            OptionalConfigs: model.getCachedValue(idService.getId("Carousel_Services.OptionalConfigs"), function() {
                                                return function() {
                                                    var rec = new OutSystemsUI_2_23Model.CarouselOptionalConfigsRec();
                                                    rec.autoPlayAttr = false;
                                                    rec.loopAttr = false;
                                                    rec.paddingAttr = "var(--space-s)";
                                                    rec.startingPositionAttr = 0;
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
                                            name: "Carousel_Services",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            carouselItems: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.List, {
                                                    animateItems: false,
                                                    extendedProperties: {
                                                        "disable-virtualization": "True"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: /*Default*/ 0,
                                                    source: model.variables.local_ServicesPerPageVar,
                                                    style: (("list list-group " + model.variables.mainElementClassVar) + "__list"),
                                                    tag: "div",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                            return [React.createElement(OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, {
                                                                inputs: {
                                                                    RowItemsTablet: 3,
                                                                    RowItemsPhone: 3,
                                                                    ExtendedClass: (model.variables.mainElementClassVar + "__gallery"),
                                                                    RowItemsDesktop: 3
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
                                                                placeholders: {
                                                                    content: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.List, {
                                                                            animateItems: false,
                                                                            extendedProperties: {
                                                                                "disable-virtualization": "True"
                                                                            },
                                                                            gridProperties: {
                                                                                classes: "OSFillParent"
                                                                            },
                                                                            mode: /*Default*/ 0,
                                                                            source: model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr,
                                                                            style: (("list list-group " + model.variables.mainElementClassVar) + "__list-items"),
                                                                            tag: "div",
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "9"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            placeholders: {
                                                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                                                                        inputs: {
                                                                                            In_IsLoading: (!(model.variables.getServicesDataAct.isDataFetchedAttr) || model.variables.getServicesDataAct.hasFetchErrorAttr)
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
                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, {
                                                                                                    inputs: {
                                                                                                        BorderColorId: UBTConnectModel.staticEntities.uBT_Color.neutral3,
                                                                                                        SizeId: UBTConnectModel.staticEntities.uBT_AvatarSize.large_65,
                                                                                                        BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                                                                                                        PaddingSize: model.getCachedValue(idService.getId("1cs4oNbaW028kwQc7ePpYg.PaddingSize"), function() {
                                                                                                            return ((((OS.BuiltinFunctions.index(model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).iconIdAttr, "SVG_", 0, false, false)) !== (-1))) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (UBTConnectModel.staticEntities.uBT_Size.small));
                                                                                                        }, function() {
                                                                                                            return model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).iconIdAttr;
                                                                                                        })
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
                                                                                                                    return controller.onClick_Service$Action(model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
                                                                                                        uuid: "11",
                                                                                                        alias: "10"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                    placeholders: {
                                                                                                        icon: new PlaceholderContent(function() {
                                                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                inputs: {
                                                                                                                    In_IconId: model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).iconIdAttr,
                                                                                                                    In_SizeId: model.getCachedValue(idService.getId("K3g7UbGV2EOQ1PpUZr9H7A.In_SizeId"), function() {
                                                                                                                        return ((((OS.BuiltinFunctions.index(model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).iconIdAttr, "SVG_", 0, false, false)) !== (-1))) ? (UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_64) : (UBTConnectModel.staticEntities.uBT_IconsSize.display_36));
                                                                                                                    }, function() {
                                                                                                                        return model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).iconIdAttr;
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
                                                                                                                    alias: "11"
                                                                                                                },
                                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                _dependencies: []
                                                                                                            })];
                                                                                                        }),
                                                                                                        badge: PlaceholderContent.Empty,
                                                                                                        text: new PlaceholderContent(function() {
                                                                                                            return [React.createElement(OSWidgets.Expression, {
                                                                                                                value: model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).nameAttr,
                                                                                                                _idProps: {
                                                                                                                    service: idService,
                                                                                                                    uuid: "13"
                                                                                                                },
                                                                                                                _widgetRecordProvider: widgetsRecordProvider
                                                                                                            })];
                                                                                                        })
                                                                                                    },
                                                                                                    _dependencies: [asPrimitiveValue(model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext).iconIdAttr)]
                                                                                                })];
                                                                                            })
                                                                                        },
                                                                                        _dependencies: [asPrimitiveValue(model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr.getCurrent(callContext.iterationContext))]
                                                                                    })];
                                                                                }, callContext, idService, "2")
                                                                            },
                                                                            _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getServicesDataAct.isDataFetchedAttr)]
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getServicesDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.mainElementClassVar), asPrimitiveValue(model.variables.local_ServicesPerPageVar.getCurrent(callContext.iterationContext).serviceItemAttr)]
                                                            })];
                                                        }, callContext, idService, "2")
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getServicesDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.mainElementClassVar)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getServicesDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.mainElementClassVar), asPrimitiveValue(model.variables.local_ServicesPerPageVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getServicesDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.local_ServicesPerPageVar), asPrimitiveValue(model.variables.mainElementClassVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getServicesDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.local_ServicesPerPageVar), asPrimitiveValue(model.variables.mainElementClassVar)]
            }), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_view, {
                inputs: {
                    ExternalApp_PopUpInfo: model.variables.local_ExternalApp_PopUpInfoVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onPopUpReady$Action: function(popUpIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_App_Common_Blocks_PopupDialogs/Dialog_GoExternalApp OnPopUpReady");
                            controller.handler_Dialog_ExternalAppPopUpReady$Action(popUpIdIn, controller.callContext(eventHandlerContext));
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
                    uuid: "14",
                    alias: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Home.FeedBlock_Services.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "Connect_Services_CS.model", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Home.FeedBlock_Services.mvc$debugger", "UBTConnect_Utils.controller$GetHasCustomEvents", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_ServicesPageList", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect.model$UI_ServicesPageRec", "UBTConnect.model$UI_ServiceItemList", "UBTConnect.model$UI_ServiceItemRec", "Connect_Services_CS.model$Connect_ServicesRec", "UBTConnect.referencesHealth$Connect_Services_CS", "UBTConnect.model$Connect_ServicesList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetHasNewLDM", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnect_UtilsModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, Connect_Services_CSModel, UBTJavaScriptUtilsController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Home_FeedBlock_Services_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getServices$DataActRefresh: 0
            };
            this.dataFetchDependentsGraph = {
                getServices$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getServices$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fwzQlO8dhECUYxUkIhMceg:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.lMTJiBcTjk6PIYOWT5AFEA/DataActions.fwzQlO8dhECUYxUkIhMceg:p6n+dfYbstmwqF5c2kXHHg", "UBTConnect", "GetServices", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_Services/GetServices");
                return controller.callDataAction("DataActionGetServices", "screenservices/UBTConnect/Home/FeedBlock_Services/DataActionGetServices", "NqrknAYQ_P0IL7hneYn6Pg", function(b) {
                    model.variables.getServicesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getServicesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getServicesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_Services/GetServices On After Fetch");
                    controller._onAfterFetch_GetServices$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fwzQlO8dhECUYxUkIhMceg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getServices$DataActRefresh"];
        // Client Actions
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Services.OnInitialize$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:s3t2Ow9KtEuBidPIOR83pQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.lMTJiBcTjk6PIYOWT5AFEA/ClientActions.s3t2Ow9KtEuBidPIOR83pQ:yeS59QtOmz5+mxomDCcncQ", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jjCZ9fPU0k2NSvO1fooygg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:loYMJjS2B0OCY8D7nV5Q0A", callContext.id);
                // Execute Action: ListAppend
                OS.SystemActions.listAppend(model.variables.local_ServicesPerPageVar, function() {
                    var rec = new UBTConnectModel.UI_ServicesPageRec();
                    rec.pageNumberAttr = 1;
                    rec.serviceItemAttr = function() {
                        var list = new UBTConnectModel.UI_ServiceItemList();
                        list.pushAll([vars.value.empty_UI_ServiceItemVar, vars.value.empty_UI_ServiceItemVar, vars.value.empty_UI_ServiceItemVar, vars.value.empty_UI_ServiceItemVar, vars.value.empty_UI_ServiceItemVar]);
                        return list;
                    }();
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KGxZ6lGme02xI24P8m80Yg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:s3t2Ow9KtEuBidPIOR83pQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Services.OnInitialize$vars", [{
            name: "Empty_UI_ServiceItem",
            attrName: "empty_UI_ServiceItemVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_ServiceItemRec();
            },
            complexType: UBTConnectModel.UI_ServiceItemRec
        }]);
        Controller.prototype._handler_Dialog_ExternalAppPopUpReady$Action = function(popUpIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_Dialog_ExternalAppPopUpReady");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Services.Handler_Dialog_ExternalAppPopUpReady$vars"))());
            vars.value.popUpIdInLocal = popUpIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JDa8Pn9NaECempF1+_VNPA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.lMTJiBcTjk6PIYOWT5AFEA/ClientActions.JDa8Pn9NaECempF1+_VNPA:p1ICaAuXiVuVQTh4WGkd2A", "UBTConnect", "Handler_Dialog_ExternalAppPopUpReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ePZY7bT0Ukq+k4poaJMYnQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9jlUZUqKQUCYNV53gIfHQw", callContext.id);
                // ExternalAppPopUp_Id = PopUpId
                model.variables.externalAppPopUp_IdVar = vars.value.popUpIdInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V6ITUmifXE27OW5Gr9lP6Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JDa8Pn9NaECempF1+_VNPA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Services.Handler_Dialog_ExternalAppPopUpReady$vars", [{
            name: "PopUpId",
            attrName: "popUpIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onAfterFetch_GetServices$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetServices");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Services.OnAfterFetch_GetServices$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:M2bRYJy0JEqQuOSbkHR+eA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.lMTJiBcTjk6PIYOWT5AFEA/ClientActions.M2bRYJy0JEqQuOSbkHR+eA:C9ISz+IUs2kgVgwvDMadLQ", "UBTConnect", "OnAfterFetch_GetServices", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0Ep+J_e2MkSmPDrFmaY4SA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q62GgkSQSUG30GSivGIKBw", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.local_ServicesPerPageVar, callContext);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C7CP_NA+okSvH9tivZVcHQ", callContext.id) && model.variables.forceAddServiceIn)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qMaiePuikEe53c0xmk9U2Q", callContext.id);
                    // Execute Action: ListAppend3
                    OS.SystemActions.listAppend(model.variables.getServicesDataAct.listOut, function() {
                        var rec = new Connect_Services_CSModel.Connect_ServicesRec();
                        rec.idAttr = OS.BuiltinFunctions.nullTextIdentifier();
                        rec.labelAttr = "Add Service";
                        rec.orderAttr = (model.variables.getServicesDataAct.listOut.length + 1);
                        rec.is_ActiveAttr = true;
                        rec.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.addCircle;
                        rec.isMandatoryAttr = true;
                        return rec;
                    }(), callContext);
                }

                // StillHasServices?
                while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+oDQM7GoK0K_YhviQjq8vw", callContext.id) && (vars.value.currentItemVar < model.variables.getServicesDataAct.listOut.length))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oyg56roJOECiYJ0xHr7qig", callContext.id);
                    // Current_ServicesPage = Empty_ServicesPage
                    vars.value.current_ServicesPageVar = vars.value.empty_ServicesPageVar;
                    // Foreach GetServices.List
                    callContext.iterationContext.registerIterationStart(model.variables.getServicesDataAct.listOut);
                    try {
                        var listIterator = callContext.iterationContext.getIterator(model.variables.getServicesDataAct.listOut);
                        var listIndexMax = model.variables.itemPerPageIn;
                        var listIndex = vars.value.currentItemVar;
                        while (((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FVP5cOgFc0Czey9yoAoIMg", callContext.id) && (listIndex < model.variables.getServicesDataAct.listOut.length)) && (listIndexMax > 0))) {
                            listIterator.currentRowNumber = listIndex;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NZ2AHKqHzU2CQ6y88W7yVw", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(vars.value.current_ServicesPageVar.serviceItemAttr, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getServicesDataAct.listOut.getItem(listIndex.valueOf()), new UBTConnectModel.UI_ServiceItemRec(), function(source, target) {
                                target.idAttr = source.idAttr;
                                target.iconIdAttr = source.iconIdAttr;
                                target.nameAttr = source.labelAttr;
                                target.orderAttr = source.orderAttr;
                                return target;
                            }), callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dOe+1Vbx3EO+pa8t2b3vQw", callContext.id);
                            // CurrentItem = CurrentItem + 1
                            vars.value.currentItemVar = (vars.value.currentItemVar + 1);
                            listIndexMax--;
                            listIndex++;
                        }

                    } finally {
                        callContext.iterationContext.registerIterationEnd(model.variables.getServicesDataAct.listOut);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EY10YazhtU6u6gdPJFVmAg", callContext.id);
                    // Current_ServicesPage.PageNumber = CurrentPage
                    vars.value.current_ServicesPageVar.pageNumberAttr = vars.value.currentPageVar;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EY10YazhtU6u6gdPJFVmAg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // CurrentPage = CurrentPage + 1
                    vars.value.currentPageVar = (vars.value.currentPageVar + 1);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3Ld6hN8bIEiA8ZxzR+FF_g", callContext.id);
                    // Execute Action: ListAppend2
                    OS.SystemActions.listAppend(model.variables.local_ServicesPerPageVar, vars.value.current_ServicesPageVar, callContext);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d976wIlTtkGFtLxMO3+qAw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:M2bRYJy0JEqQuOSbkHR+eA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Services.OnAfterFetch_GetServices$vars", [{
            name: "CurrentPage",
            attrName: "currentPageVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 1;
            }
        }, {
            name: "CurrentItem",
            attrName: "currentItemVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "Current_ServicesPage",
            attrName: "current_ServicesPageVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_ServicesPageRec();
            },
            complexType: UBTConnectModel.UI_ServicesPageRec
        }, {
            name: "Empty_ServicesPage",
            attrName: "empty_ServicesPageVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_ServicesPageRec();
            },
            complexType: UBTConnectModel.UI_ServicesPageRec
        }]);
        Controller.prototype._onClick_Service$Action = function(selectedServiceIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Service");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Services.OnClick_Service$vars"))());
            vars.value.selectedServiceInLocal = selectedServiceIn.clone();
            var getHasNewLDMVar = new OS.DataTypes.VariableHolder();
            var confirmActionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasNewLDMVar = getHasNewLDMVar;
            varBag.confirmActionVar = confirmActionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OIPKxZhCxkW_SnHKWQOmfg:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.lMTJiBcTjk6PIYOWT5AFEA/ClientActions.OIPKxZhCxkW_SnHKWQOmfg:ocoPVzj_S6e1BugVVRY8xw", "UBTConnect", "OnClick_Service", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RpgPX31DvEesOJ+c9Vyk4Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Cj+7cPNi0qFru4vUDNrkg", callContext.id) && (vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.orbit))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L4yWjPfTpUyWKeKLX8SThA", callContext.id);
                        // Destination: /UBTConnect/OrbitLanding
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OrbitLanding", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    } else {
                        return OS.Flow.executeSequence(function() {
                            if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.lDM)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jehZoVtqrkmX6o4hO6DXUA", callContext.id);
                                // Execute Action: GetHasNewLDM
                                getHasNewLDMVar.value = UBTConnect_UtilsController.default.getHasNewLDM$Action(callContext);

                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WuW2cLoq40aOflMspavm8w", callContext.id) && getHasNewLDMVar.value.out_HasNewLDMOut)) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cMVyu3UbO06LHJxdKbeReA", callContext.id);
                                    // Destination: /UBTConnect/LDM_MyEvents_V2
                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_MyEvents_V2", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_NamSTHkyUC4EfLLgT3P6A", callContext.id);
                                    // Destination: /UBTConnect/LDM_MyEvents
                                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LDM_MyEvents", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                }

                            } else {
                                return OS.Flow.executeSequence(function() {
                                    if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.myCalendar)) {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b+1RXGYzaEy15Mf9l0sPOQ", callContext.id);
                                        // Destination: /UBTConnect/MyEntertaining
                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MyEntertaining", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                    } else {
                                        return OS.Flow.executeSequence(function() {
                                            if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.assemble)) {
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:THIw358Etkeq8q9E2hAeMQ", callContext.id);
                                                // Destination: /UBTConnect/AssembleEvents
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/AssembleEvents", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            } else {
                                                return OS.Flow.executeSequence(function() {
                                                    if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.orbitAdmin)) {
                                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DpVfktOOn0anj5yvnnn+og", callContext.id);
                                                        // Destination: /UBTConnect/OrbitAdminLanding
                                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OrbitAdminLanding", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                    } else {
                                                        return OS.Flow.executeSequence(function() {
                                                            if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.myNotes)) {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ThtOmzWYDUiicXJWYgmuvQ", callContext.id);
                                                                // Destination: /UBTConnect/Notes
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Notes", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                            } else {
                                                                // ExternalApps
                                                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jhvvcVitz0qLVXxclOusFg", callContext.id) && (vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.trove))) {
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x5KRAyuAB0aE_YiXijUQbQ", callContext.id);
                                                                    // Local_ExternalApp_PopUpInfo.AppName = "Trove"
                                                                    model.variables.local_ExternalApp_PopUpInfoVar.appNameAttr = "Trove";
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x5KRAyuAB0aE_YiXijUQbQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                                                    // Local_ExternalApp_PopUpInfo.PackageName = GetServices.ExterrnalPackages_Trove
                                                                    model.variables.local_ExternalApp_PopUpInfoVar.packageNameAttr = model.variables.getServicesDataAct.exterrnalPackages_TroveOut;
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x5KRAyuAB0aE_YiXijUQbQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                                                    // Local_ExternalApp_PopUpInfo.IconId = Trove
                                                                    model.variables.local_ExternalApp_PopUpInfoVar.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.trove;
                                                                } else {
                                                                    if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.hR100)) {
                                                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XVUcgShTDkCj52dqrWKO_A", callContext.id);
                                                                        // Local_ExternalApp_PopUpInfo.AppName = "HR100"
                                                                        model.variables.local_ExternalApp_PopUpInfoVar.appNameAttr = "HR100";
                                                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XVUcgShTDkCj52dqrWKO_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                                                        // Local_ExternalApp_PopUpInfo.PackageName = GetServices.ExterrnalPackages_HR100
                                                                        model.variables.local_ExternalApp_PopUpInfoVar.packageNameAttr = model.variables.getServicesDataAct.exterrnalPackages_HR100Out;
                                                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XVUcgShTDkCj52dqrWKO_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                                                        // Local_ExternalApp_PopUpInfo.IconId = SVG_HR100
                                                                        model.variables.local_ExternalApp_PopUpInfoVar.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.sVG_HR100;
                                                                    } else {
                                                                        if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.communityTradelink)) {
                                                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kk3w+UkT6E6Ak95fmgEssA", callContext.id);
                                                                            // Local_ExternalApp_PopUpInfo.AppName = "Community Tradelink"
                                                                            model.variables.local_ExternalApp_PopUpInfoVar.appNameAttr = "Community Tradelink";
                                                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kk3w+UkT6E6Ak95fmgEssA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                                                            // Local_ExternalApp_PopUpInfo.PackageName = GetServices.ExterrnalPackages_CommunityTradelink
                                                                            model.variables.local_ExternalApp_PopUpInfoVar.packageNameAttr = model.variables.getServicesDataAct.exterrnalPackages_CommunityTradelinkOut;
                                                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kk3w+UkT6E6Ak95fmgEssA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                                                            // Local_ExternalApp_PopUpInfo.IconId = SVG_CommunityTradelink
                                                                            model.variables.local_ExternalApp_PopUpInfoVar.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.sVG_CommunityTradelink;
                                                                        } else {
                                                                            if ((vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.elGusto)) {
                                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6TPtm_nzbUSVv2V0vih84Q", callContext.id);
                                                                                // Local_ExternalApp_PopUpInfo.AppName = "El Gusto"
                                                                                model.variables.local_ExternalApp_PopUpInfoVar.appNameAttr = "El Gusto";
                                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6TPtm_nzbUSVv2V0vih84Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                                                                // Local_ExternalApp_PopUpInfo.IconId = SVG_ElGusto
                                                                                model.variables.local_ExternalApp_PopUpInfoVar.iconIdAttr = UBTConnectModel.staticEntities.uBT_Icons2.sVG_ElGusto;
                                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6TPtm_nzbUSVv2V0vih84Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                                                                // Local_ExternalApp_PopUpInfo.URL = GetServices.ExternalLinks_ElGusto
                                                                                model.variables.local_ExternalApp_PopUpInfoVar.uRLAttr = model.variables.getServicesDataAct.externalLinks_ElGustoOut;
                                                                            } else {
                                                                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eqXfUB19j0OMnwUSodCywA", callContext.id) && (vars.value.selectedServiceInLocal.idAttr === UBTConnectModel.staticEntities.connect_Services.oneSchoolGlobal))) {
                                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dSMgfdgt0kCwM6pXSYYsTQ", callContext.id);
                                                                                    // Execute Action: FeedbackMessage_AutoClose
                                                                                    UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("Coming soon", "This feature will be coming soon.", UBTConnectModel.staticEntities.uBT_MessageType.info, true, "", 0, false, callContext);
                                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8bYgmlZ83EKjOBHXaNlwzw", callContext.id);
                                                                                    return OS.Flow.returnAsync();

                                                                                } else {
                                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SUsxH_Pc4kqtmK8oAXdecA", callContext.id);
                                                                                    return OS.Flow.returnAsync();

                                                                                }

                                                                            }

                                                                        }

                                                                    }

                                                                }

                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qXn+op4bsUiI6pVvMRBKiQ", callContext.id);
                                                                // Execute Action: ConfirmAction
                                                                model.flush();
                                                                return NavigationHandlerController.default.confirmAction$Action(model.variables.externalAppPopUp_IdVar, callContext).then(function(value) {
                                                                    confirmActionVar.value = value;
                                                                }).then(function() {
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:woMwS1Xmo0ucEDrZhag24Q", callContext.id);
                                                                });
                                                            }

                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OIPKxZhCxkW_SnHKWQOmfg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OIPKxZhCxkW_SnHKWQOmfg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Services.OnClick_Service$vars", [{
            name: "SelectedService",
            attrName: "selectedServiceInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_ServiceItemRec();
            },
            complexType: UBTConnectModel.UI_ServiceItemRec
        }, {
            name: "ExternalLink",
            attrName: "externalLinkVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onClick_ServiceSettings$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_ServiceSettings");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fDlhyFaYTkqvlf3N7YZ_Xw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.lMTJiBcTjk6PIYOWT5AFEA/ClientActions.fDlhyFaYTkqvlf3N7YZ_Xw:k3wUL9eHweVUGxBzwq2QXg", "UBTConnect", "OnClick_ServiceSettings", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0E0ITAP5cE2P7538WX44zQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_5HqSQrl8Um+vuaZn1UvxQ", callContext.id);
                // Destination: /UBTConnect/Services
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Services", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fDlhyFaYTkqvlf3N7YZ_Xw", callContext.id);
            }

        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.handler_Dialog_ExternalAppPopUpReady$Action = function(popUpIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_Dialog_ExternalAppPopUpReady$Action, callContext, popUpIdIn);

        };
        Controller.prototype.onAfterFetch_GetServices$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetServices$Action, callContext);

        };
        Controller.prototype.onClick_Service$Action = function(selectedServiceIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Service$Action, callContext, selectedServiceIn);

        };
        Controller.prototype.onClick_ServiceSettings$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_ServiceSettings$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw:9fwzOG+yQfV_SOU4v_xngw", "UBTConnect", "Home", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lMTJiBcTjk6PIYOWT5AFEA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.lMTJiBcTjk6PIYOWT5AFEA:EirVSlsTPMOVBIlX8cOXUg", "UBTConnect", "FeedBlock_Services", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lMTJiBcTjk6PIYOWT5AFEA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_Services On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
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

define("UBTConnect.Home.FeedBlock_Services.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "wL0QqP84tk27SY0TxFrdUQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.empty_UI_ServiceItemVar;
            }
        },
        "YDRTFSxxPUaHSv5DcbD4pg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.popUpIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Wlp91kcy6U608OSgoLWy7g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentPageVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "CnEDCXabfkyxAIVg+0mmsw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentItemVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "otV1zrR5qUKhF8sMTxWLng": {
            getter: function(varBag, idService) {
                return varBag.vars.value.current_ServicesPageVar;
            }
        },
        "xg0RuZEbLESQeWz4jHFG_g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.empty_ServicesPageVar;
            }
        },
        "vN+FnwQ3_0umjsqhIDNmbg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.externalLinkVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "V4_cV1ABFEm_ZFgVdUJqKg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedServiceInLocal;
            }
        },
        "jehZoVtqrkmX6o4hO6DXUA": {
            getter: function(varBag, idService) {
                return varBag.getHasNewLDMVar.value;
            }
        },
        "qXn+op4bsUiI6pVvMRBKiQ": {
            getter: function(varBag, idService) {
                return varBag.confirmActionVar.value;
            }
        },
        "kTzeugnqHkurVSF5gVi5vg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainElementClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "IlOF8diw4U+j09UPKBzWjQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_ServicesPerPageVar;
            }
        },
        "uJyt2egrqkWp2SThtWkQVQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.externalAppPopUp_IdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "d4WyrZFimkmKzWyynDWt+Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_ExternalApp_PopUpInfoVar;
            }
        },
        "BvOzq3CNK02E7VDyz1UjBg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.itemPerPageIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "ARTEw6hpD0ipu7XTpjKb0A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.forceAddServiceIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "fwzQlO8dhECUYxUkIhMceg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getServicesDataAct;
            }
        },
        "NkGx+keOfUmNexPgn4Yvtg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_Services"));
                })(varBag.model, idService);
            }
        },
        "HbZ4AtbeVkK14lTq5+UfNw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "fPFGsxusBkicxxBDIUYZ+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "PiuolJnnVUmxGUJBYx2R6g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "CM82rWlZQUSxY+AnWwmkPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HidingForH1"));
                })(varBag.model, idService);
            }
        },
        "0Iw4vfzLYkyndPrrtMJBMQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "XXJVk+r6fEmEA4c1QZkHTw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "kABlUf3Yb0iK+YuF9pjROw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "ZsBPXby7HEmpvpiYTzCg8g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Carousel_Services"));
                })(varBag.model, idService);
            }
        },
        "gJppCZqjC0WEHzhkfD_S0Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CarouselItems"));
                })(varBag.model, idService);
            }
        },
        "6BlBhXQ2nUaMXYYS6zr7_w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "TpZzuFY4VkOaV59TMnIqEg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "JYdgK2skT02+_8EVEM4nDQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "LzwV8DeEREC4l37WWW3AYQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "1cLqbvM0CUKF2VYu58301g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Text"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});