define("UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Directory_Locality.Statistics_Icons.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.model$UI_TypedStatisticsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Directory_Locality_Statistics_Icons_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("UI_CountryStatistics", "uI_CountryStatisticsIn", "UI_CountryStatistics", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_TypedStatisticsRec());
                }, false, UBTConnectModel.UI_TypedStatisticsRec),
                this.attr("_uI_CountryStatisticsInDataFetchStatus", "_uI_CountryStatisticsInDataFetchStatus", "_uI_CountryStatisticsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HideNavigation", "in_HideNavigationIn", "In_HideNavigation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_HideNavigationInDataFetchStatus", "_in_HideNavigationInDataFetchStatus", "_in_HideNavigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HideBorder", "in_HideBorderIn", "In_HideBorder", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_HideBorderInDataFetchStatus", "_in_HideBorderInDataFetchStatus", "_in_HideBorderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ImageEntityTypeId", "in_ImageEntityTypeIdIn", "In_ImageEntityTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnectModel.staticEntities.connect_Entity.locality;
                }, false),
                this.attr("_in_ImageEntityTypeIdInDataFetchStatus", "_in_ImageEntityTypeIdInDataFetchStatus", "_in_ImageEntityTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ImageEntityId", "in_ImageEntityIdIn", "In_ImageEntityId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ImageEntityIdInDataFetchStatus", "_in_ImageEntityIdInDataFetchStatus", "_in_ImageEntityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HasImage", "in_HasImageIn", "In_HasImage", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_HasImageInDataFetchStatus", "_in_HasImageInDataFetchStatus", "_in_HasImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Statistics_Icons_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("UI_CountryStatistics" in inputs) {
                this.variables.uI_CountryStatisticsIn = inputs.UI_CountryStatistics;
                if ("_uI_CountryStatisticsInDataFetchStatus" in inputs) {
                    this.variables._uI_CountryStatisticsInDataFetchStatus = inputs._uI_CountryStatisticsInDataFetchStatus;
                }

            }

            if ("In_HideNavigation" in inputs) {
                this.variables.in_HideNavigationIn = inputs.In_HideNavigation;
                if ("_in_HideNavigationInDataFetchStatus" in inputs) {
                    this.variables._in_HideNavigationInDataFetchStatus = inputs._in_HideNavigationInDataFetchStatus;
                }

            }

            if ("In_HideBorder" in inputs) {
                this.variables.in_HideBorderIn = inputs.In_HideBorder;
                if ("_in_HideBorderInDataFetchStatus" in inputs) {
                    this.variables._in_HideBorderInDataFetchStatus = inputs._in_HideBorderInDataFetchStatus;
                }

            }

            if ("In_ImageEntityTypeId" in inputs) {
                this.variables.in_ImageEntityTypeIdIn = inputs.In_ImageEntityTypeId;
                if ("_in_ImageEntityTypeIdInDataFetchStatus" in inputs) {
                    this.variables._in_ImageEntityTypeIdInDataFetchStatus = inputs._in_ImageEntityTypeIdInDataFetchStatus;
                }

            }

            if ("In_ImageEntityId" in inputs) {
                this.variables.in_ImageEntityIdIn = inputs.In_ImageEntityId;
                if ("_in_ImageEntityIdInDataFetchStatus" in inputs) {
                    this.variables._in_ImageEntityIdInDataFetchStatus = inputs._in_ImageEntityIdInDataFetchStatus;
                }

            }

            if ("In_HasImage" in inputs) {
                this.variables.in_HasImageIn = inputs.In_HasImage;
                if ("_in_HasImageInDataFetchStatus" in inputs) {
                    this.variables._in_HasImageInDataFetchStatus = inputs._in_HasImageInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.Statistics_TypedItem");
});
define("UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$model", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Locality.Statistics_Icons.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.model$UI_TypedStatisticsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Geography_CSModel, React, OSView, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_model, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Locality_Statistics_Icons_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Directory_Locality.Statistics_TypedItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Locality_Statistics_Icons_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("1lyXNtG9qkix0XiE6bqPwg.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral4;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = ((model.variables.in_HideBorderIn) ? (UBTConnectModel.staticEntities.uBT_Size.none) : (UBTConnectModel.staticEntities.uBT_Size.small));
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.medium;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.displayOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_HideBorderIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HideBorderInDataFetchStatus)
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                            inputs: {
                                ColumnOptions: model.getCachedValue(idService.getId("OqO9T8K83UC1U7DQiWACyA.ColumnOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
                                        rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                                    return [$if((((model.variables.uI_CountryStatisticsIn.imageURLAttr) !== ("")) || model.variables.in_HasImageIn), false, this, function() {
                                        return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                            inputs: {
                                                ExtendedClass: "country-flag",
                                                ImageSize: model.getCachedValue(idService.getId("XZjYVUF3QEyFQTzQV7v2Fg.ImageSize"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                        rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.small_40;
                                                        rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
                                                        return rec;
                                                    }();
                                                }),
                                                In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.circle,
                                                EntityType: model.variables.in_ImageEntityTypeIdIn,
                                                _entityTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageEntityTypeIdInDataFetchStatus),
                                                EntityId: model.variables.in_ImageEntityIdIn,
                                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageEntityIdInDataFetchStatus),
                                                ImageURL: model.variables.uI_CountryStatisticsIn.imageURLAttr,
                                                _imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_CountryStatisticsInDataFetchStatus)
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
                                    }, function() {
                                        return [];
                                    })];
                                }),
                                middle: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                        inputs: {
                                            In_TextOptions: model.getCachedValue(idService.getId("4bFXwwDkgkijTSH0Vf7HDw.In_TextOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                    return rec;
                                                }();
                                            }),
                                            In_Text: model.variables.uI_CountryStatisticsIn.nameAttr,
                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_CountryStatisticsInDataFetchStatus)
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
                                    }), React.createElement(UBTConnect_Directory_Locality_Statistics_Icons_mvc_view, {
                                        inputs: {
                                            UI_StatisticsTexts: model.variables.uI_CountryStatisticsIn.uI_StatisticsTextsAttr,
                                            _uI_StatisticsTextsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._uI_CountryStatisticsInDataFetchStatus)
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
                                right: new PlaceholderContent(function() {
                                    return [$if(model.variables.in_HideNavigationIn, false, this, function() {
                                        return [];
                                    }, function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                            inputs: {
                                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight,
                                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral6
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
                                            _dependencies: []
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.in_HideNavigationIn), asPrimitiveValue(model.variables.in_ImageEntityIdIn), asPrimitiveValue(model.variables.in_ImageEntityTypeIdIn), asPrimitiveValue(model.variables._in_HideNavigationInDataFetchStatus), asPrimitiveValue(model.variables._in_ImageEntityIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ImageEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_HasImageInDataFetchStatus), asPrimitiveValue(model.variables._uI_CountryStatisticsInDataFetchStatus), asPrimitiveValue(model.variables.in_HasImageIn), asPrimitiveValue(model.variables.uI_CountryStatisticsIn.uI_StatisticsTextsAttr), asPrimitiveValue(model.variables.uI_CountryStatisticsIn.nameAttr), asPrimitiveValue(model.variables.uI_CountryStatisticsIn.imageURLAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_HideNavigationIn), asPrimitiveValue(model.variables.in_ImageEntityIdIn), asPrimitiveValue(model.variables.in_ImageEntityTypeIdIn), asPrimitiveValue(model.variables._in_HideNavigationInDataFetchStatus), asPrimitiveValue(model.variables._in_ImageEntityIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ImageEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_HasImageInDataFetchStatus), asPrimitiveValue(model.variables._uI_CountryStatisticsInDataFetchStatus), asPrimitiveValue(model.variables.in_HasImageIn), asPrimitiveValue(model.variables.uI_CountryStatisticsIn.uI_StatisticsTextsAttr), asPrimitiveValue(model.variables.uI_CountryStatisticsIn.nameAttr), asPrimitiveValue(model.variables.uI_CountryStatisticsIn.imageURLAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$debugger", "UBTConnect.model$UI_TypedStatisticsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_Debugger) {
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


        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WtBA2aTjgE2gUBvRVhJ0og:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.WtBA2aTjgE2gUBvRVhJ0og:wI3p1YCHT+SIEi4WlYr_MA", "UBTConnect", "Statistics_TypedItem", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WtBA2aTjgE2gUBvRVhJ0og", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
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

define("UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "a9Wkrq4EcUqpSXZiiBSUKA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.uI_CountryStatisticsIn;
            }
        },
        "h5L9g8tBAEW5KGVk0Sd2mg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HideNavigationIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "bN_VsaTqP0GxwNuM2wU+lw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HideBorderIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "J09Ngi_4iUGgze6trGEDFw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ImageEntityTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "0WUXUk367UWxXpa8Tg6o9w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ImageEntityIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "z2iWityqcESDfaiQ7qRNyA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HasImageIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Ok8H7_Ga00mCsEfy8cpbWg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Uiurwcw9tU62pkIfQD_B6g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "xxHJ12TgD0qyZKon27dJwg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Middle"));
                })(varBag.model, idService);
            }
        },
        "V8m0ZM4lnk6BiTJ3vafrBw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "iPPDfXpvU0aYPk2YGcH4dQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideNavigation"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});