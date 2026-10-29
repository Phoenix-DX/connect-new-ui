define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.controller$GetTargetTimeLabel", "UBTConnect_Utils.model$ContactPopupButtonRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_Button_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("SkeletonButtonList", "skeletonButtonListVar", "SkeletonButtonList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonList());
                }, false, UBTConnect_UtilsModel.ContactPopupButtonList),
                this.attr("TargetTimeLabel", "targetTimeLabelVar", "TargetTimeLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("In_ContactPopupData", "in_ContactPopupDataIn", "In_ContactPopupData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactPopupDataRec),
                this.attr("_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ContactPopupButtons", "in_ContactPopupButtonsIn", "In_ContactPopupButtons", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonList());
                }, false, UBTConnect_UtilsModel.ContactPopupButtonList),
                this.attr("_in_ContactPopupButtonsInDataFetchStatus", "_in_ContactPopupButtonsInDataFetchStatus", "_in_ContactPopupButtonsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ImageSizeId", "in_ImageSizeIdIn", "In_ImageSizeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100;
                }, false),
                this.attr("_in_ImageSizeIdInDataFetchStatus", "_in_ImageSizeIdInDataFetchStatus", "_in_ImageSizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Button_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ContactPopupData" in inputs) {
                this.variables.in_ContactPopupDataIn = inputs.In_ContactPopupData;
                if ("_in_ContactPopupDataInDataFetchStatus" in inputs) {
                    this.variables._in_ContactPopupDataInDataFetchStatus = inputs._in_ContactPopupDataInDataFetchStatus;
                }

            }

            if ("In_ContactPopupButtons" in inputs) {
                this.variables.in_ContactPopupButtonsIn = inputs.In_ContactPopupButtons;
                if ("_in_ContactPopupButtonsInDataFetchStatus" in inputs) {
                    this.variables._in_ContactPopupButtonsInDataFetchStatus = inputs._in_ContactPopupButtonsInDataFetchStatus;
                }

            }

            if ("In_ImageSizeId" in inputs) {
                this.variables.in_ImageSizeIdIn = inputs.In_ImageSizeId;
                if ("_in_ImageSizeIdInDataFetchStatus" in inputs) {
                    this.variables._in_ImageSizeIdInDataFetchStatus = inputs._in_ImageSizeIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_CTA_PopUps.ContactPopup");
});
define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$controller", "UBTConnect_Utils.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.controller$GetTargetTimeLabel", "UBTConnect_Utils.model$ContactPopupButtonRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_controller, UBTConnect_UtilsClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "CW_CTA_PopUps.ContactPopup";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                showPopup: model.variables.in_ContactPopupDataIn.showPopupAttr,
                style: "popup-dialog ubt-contact-by-phone-popup connect-legacy-compatibily-containter",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "text-align-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("FXfQFlg5M0euvu0Ehg7dmw.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
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
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Bock_Title.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                            rec.bottomSizeIdAttr = ((model.variables.in_ContactPopupDataIn.showTimezoneAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (UBTConnect_UtilsModel.staticEntities.uBT_Size.base));
                                            return rec;
                                        }();
                                        rec.textOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral10;
                                            rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading6;
                                            rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.in_ContactPopupDataIn.showTimezoneAttr;
                                }),
                                _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
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
                                name: "Bock_Title",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Expression, {
                                        gridProperties: {
                                            marginLeft: "Adaptive"
                                        },
                                        value: model.getCachedValue(idService.getId("znfdjg+wrkSztEkHj3Nl0Q.Value"), function() {
                                            return (((model.variables.in_ContactPopupDataIn.actionNameAttr + ((((model.variables.in_ContactPopupDataIn.actionNameAttr) !== (""))) ? (" ") : (""))) + model.variables.in_ContactPopupDataIn.nameAttr) + model.variables.in_ContactPopupDataIn.titleTerminatorAttr);
                                        }, function() {
                                            return model.variables.in_ContactPopupDataIn.actionNameAttr;
                                        }, function() {
                                            return model.variables.in_ContactPopupDataIn.nameAttr;
                                        }, function() {
                                            return model.variables.in_ContactPopupDataIn.titleTerminatorAttr;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupDataInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupDataIn.titleTerminatorAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.nameAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.actionNameAttr)]
                        }), $if(model.variables.in_ContactPopupDataIn.showTimezoneAttr, false, this, function() {
                            return [$if(model.variables.in_ContactPopupDataIn.isFetchingTimezoneAttr, false, this, function() {
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
                                        uuid: "6",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        placeholder_LoadingSection: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Expression, {
                                                value: "Fetching the user Timezone",
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })
                                    },
                                    _dependencies: []
                                })];
                            }, function() {
                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                    inputs: {
                                        Options: model.getCachedValue(idService.getId("Block_TimeAndTimezone.Options"), function() {
                                            return function() {
                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                rec.paddingSizeAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                    rec.bottomSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                                    return rec;
                                                }();
                                                rec.textOptionsAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
                                                    rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.doubleExtraSmall;
                                                    rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
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
                                        name: "Block_TimeAndTimezone",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        content: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Expression, {
                                                value: model.variables.targetTimeLabelVar,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })
                                    },
                                    _dependencies: [asPrimitiveValue(model.variables.targetTimeLabelVar)]
                                })];
                            })];
                        }, function() {
                            return [];
                        })), $if(model.variables.in_ContactPopupDataIn.showImageAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                inputs: {
                                    In_IsLoading: (model.variables.in_ContactPopupDataIn.isLoadingAttr && (model.variables.in_ContactPopupDataIn.imageURLAttr === "")),
                                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
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
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    placeholder_LoadingSection: new PlaceholderContent(function() {
                                        return [$if(model.variables.in_ContactPopupDataIn.isAvatarImageAttr, false, this, function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "ubt-object-fit-avatar-img",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                inputs: {
                                                    ImageSize: model.getCachedValue(idService.getId("orQQAEUx9UCqTTVCISwu_A.ImageSize"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                            rec.heightAttr = model.variables.in_ImageSizeIdIn;
                                                            rec.widthAttr = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.square;
                                                            return rec;
                                                        }();
                                                    }, function() {
                                                        return model.variables.in_ImageSizeIdIn;
                                                    }),
                                                    _imageSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageSizeIdInDataFetchStatus),
                                                    ImageURL: model.variables.in_ContactPopupDataIn.imageURLAttr,
                                                    _imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus),
                                                    In_BorderRadius: UBTConnect_UtilsModel.staticEntities.uBT_Shape.circle,
                                                    EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_ContactPopupDataIn.entityIdAttr),
                                                    _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus),
                                                    EntityType: model.variables.in_ContactPopupDataIn.entityTypeIdAttr,
                                                    _entityTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
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
                                                    alias: "6"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            }))];
                                        }, function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                gridProperties: {
                                                    classes: "OSInline"
                                                },
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, {
                                                inputs: {
                                                    FallbackOptions: model.getCachedValue(idService.getId("3Pw1IykHvUm3dDvGC_SFLQ.FallbackOptions"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
                                                            rec.iconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.imageGallery;
                                                            return rec;
                                                        }();
                                                    }),
                                                    In_BorderOptions: model.getCachedValue(idService.getId("3Pw1IykHvUm3dDvGC_SFLQ.In_BorderOptions"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.ImageBorderOptionsRec();
                                                            rec.borderRadiusAttr = UBTConnect_UtilsModel.staticEntities.uBT_Shape.none;
                                                            return rec;
                                                        }();
                                                    }),
                                                    In_ImageSize: model.getCachedValue(idService.getId("3Pw1IykHvUm3dDvGC_SFLQ.In_ImageSize"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                            rec.heightAttr = model.variables.in_ImageSizeIdIn;
                                                            return rec;
                                                        }();
                                                    }, function() {
                                                        return model.variables.in_ImageSizeIdIn;
                                                    }),
                                                    _in_ImageSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageSizeIdInDataFetchStatus),
                                                    ImageURL: model.variables.in_ContactPopupDataIn.imageURLAttr,
                                                    _imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
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
                                                    alias: "7"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })))];
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.in_ImageSizeIdIn), asPrimitiveValue(model.variables._in_ImageSizeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ContactPopupDataInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupDataIn.entityTypeIdAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.entityIdAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.imageURLAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.isAvatarImageAttr)]
                            })];
                        }, function() {
                            return [];
                        }), $if(((model.variables.in_ContactPopupDataIn.displayContactNumberAttr) !== ("")), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("5mJ+jvXc7UCivdmkvL_hIA.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.paddingSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                                return rec;
                                            }();
                                            rec.textOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading6;
                                                rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
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
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            gridProperties: {
                                                marginLeft: "Adaptive"
                                            },
                                            value: model.variables.in_ContactPopupDataIn.displayContactNumberAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupDataInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupDataIn.displayContactNumberAttr)]
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: model.variables.in_ContactPopupDataIn.isLoadingAttr,
                                _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
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
                                alias: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("Block_Actions.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.paddingSizeAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.medium;
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
                                            name: "Block_Actions",
                                            alias: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.List, {
                                                    animateItems: true,
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: /*Default*/ 0,
                                                    source: model.getCachedValue(idService.getId("Ti2csCThikqGNdXVsIug4g.Source"), function() {
                                                        return ((model.variables.in_ContactPopupDataIn.isLoadingAttr) ? (model.variables.skeletonButtonListVar) : (model.variables.in_ContactPopupButtonsIn));
                                                    }, function() {
                                                        return model.variables.in_ContactPopupDataIn.isLoadingAttr;
                                                    }, function() {
                                                        return model.variables.skeletonButtonListVar;
                                                    }, function() {
                                                        return model.variables.in_ContactPopupButtonsIn;
                                                    }),
                                                    style: "list list-group list--gap-s",
                                                    tag: "div",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "20"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus, model.variables._in_ContactPopupButtonsInDataFetchStatus),
                                                    placeholders: {
                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                                                                inputs: {
                                                                    In_ExtendedClass: "ubt-skeleton-section__element",
                                                                    In_ButtonOptions: model.getCachedValue(idService.getId("kNJ0DgIJ6EO9vhFTRLFU5g.In_ButtonOptions"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
                                                                            rec.uBT_ButtonSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize.medium;
                                                                            rec.uBT_ButtonTypeIdAttr = (((model.variables.in_ContactPopupButtonsIn.getCurrentRowNumber(callContext.iterationContext) === 0)) ? (UBTConnect_UtilsModel.staticEntities.uBT_ButtonType.primary) : (UBTConnect_UtilsModel.staticEntities.uBT_ButtonType.scondary));
                                                                            rec.uBT_FlexBehaviorAttr = UBTConnect_UtilsModel.staticEntities.uBT_FlexBehavior.grow;
                                                                            return rec;
                                                                        }();
                                                                    }, function() {
                                                                        return model.variables.in_ContactPopupButtonsIn.getCurrentRowNumber(callContext.iterationContext);
                                                                    }),
                                                                    _in_ButtonOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupButtonsInDataFetchStatus)
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    event_OnClick$Action: function() {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
                                                                            controller.event_Clicked$Action(model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).idAttr, model.variables.in_ContactPopupButtonsIn.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
                                                                    uuid: "21",
                                                                    alias: "11"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    content: new PlaceholderContent(function() {
                                                                        return [$if(((model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).uBT_IconIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                                inputs: {
                                                                                    SpacingSize: UBTConnect_UtilsModel.staticEntities.uBT_Size.small,
                                                                                    Text: model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).labelAttr,
                                                                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupButtonsInDataFetchStatus),
                                                                                    TextOptions: model.getCachedValue(idService.getId("VjzJ_Dyb8kajT_Vq0nj+jg.TextOptions"), function() {
                                                                                        return function() {
                                                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
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
                                                                                    uuid: "22",
                                                                                    alias: "12"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                placeholders: {
                                                                                    icon: new PlaceholderContent(function() {
                                                                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                            inputs: {
                                                                                                In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.medium_20,
                                                                                                In_IconId: model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).uBT_IconIdAttr,
                                                                                                _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupButtonsInDataFetchStatus)
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
                                                                                                uuid: "23",
                                                                                                alias: "13"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            _dependencies: []
                                                                                        })];
                                                                                    })
                                                                                },
                                                                                _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupButtonsInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).uBT_IconIdAttr)]
                                                                            })];
                                                                        }, function() {
                                                                            return [React.createElement(OSWidgets.Expression, {
                                                                                gridProperties: {
                                                                                    marginLeft: "Adaptive"
                                                                                },
                                                                                value: model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).labelAttr,
                                                                                _idProps: {
                                                                                    service: idService,
                                                                                    uuid: "24"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupButtonsInDataFetchStatus)
                                                                            })];
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupButtonsInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).uBT_IconIdAttr)]
                                                            })];
                                                        }, callContext, idService, "1")
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupButtonsInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).uBT_IconIdAttr), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn.getCurrentRowNumber(callContext.iterationContext))]
                                                }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                    inputs: {
                                                        Options: model.getCachedValue(idService.getId("a3PzqLK6ckyprVDTTz9IrA.Options"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                rec.paddingSizeAttr = function() {
                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                    rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
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
                                                        alias: "14"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                                                                inputs: {
                                                                    In_ButtonOptions: model.getCachedValue(idService.getId("Button_Cancel.In_ButtonOptions"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
                                                                            rec.uBT_ButtonSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize.medium;
                                                                            rec.uBT_ButtonTypeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_ButtonType.tertiary;
                                                                            rec.uBT_FlexBehaviorAttr = UBTConnect_UtilsModel.staticEntities.uBT_FlexBehavior.grow;
                                                                            return rec;
                                                                        }();
                                                                    })
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    event_OnClick$Action: function() {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
                                                                            controller.event_Cancel$Action(controller.callContext(eventHandlerContext));
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
                                                                    name: "Button_Cancel",
                                                                    alias: "15"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    content: new PlaceholderContent(function() {
                                                                        return ["Cancel"];
                                                                    })
                                                                },
                                                                _dependencies: []
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupButtonsInDataFetchStatus), asPrimitiveValue(model.variables._in_ContactPopupDataInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn), asPrimitiveValue(model.variables.skeletonButtonListVar), asPrimitiveValue(model.variables.in_ContactPopupDataIn.isLoadingAttr)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupButtonsInDataFetchStatus), asPrimitiveValue(model.variables._in_ContactPopupDataInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupButtonsIn), asPrimitiveValue(model.variables.skeletonButtonListVar), asPrimitiveValue(model.variables.in_ContactPopupDataIn.isLoadingAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_ContactPopupButtonsIn), asPrimitiveValue(model.variables.skeletonButtonListVar), asPrimitiveValue(model.variables.in_ImageSizeIdIn), asPrimitiveValue(model.variables.targetTimeLabelVar), asPrimitiveValue(model.variables._in_ContactPopupButtonsInDataFetchStatus), asPrimitiveValue(model.variables._in_ImageSizeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ContactPopupDataInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupDataIn.displayContactNumberAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.entityTypeIdAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.entityIdAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.isAvatarImageAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.imageURLAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.isLoadingAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.showImageAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.isFetchingTimezoneAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.titleTerminatorAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.nameAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.actionNameAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.showTimezoneAttr)]
            }))), $if(model.variables.in_ContactPopupDataIn.showPopupAttr, false, this, function() {
                return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        backNavigationPrevented$Action: function(backNavigationEventIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
                                controller.event_Cancel$Action(controller.callContext(eventHandlerContext));
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
                        uuid: "27",
                        alias: "16"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$debugger", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.controller$GetTargetTimeLabel", "UBTConnect_Utils.model$ContactPopupButtonRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_Debugger) {
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
        Controller.prototype._action_UpdateTargetTimeLabel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_UpdateTargetTimeLabel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:OLKOwH7hhUqV4moLNG9mzA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.8eELrS_FwkqxJnTT7ft8Ww/ClientActions.OLKOwH7hhUqV4moLNG9mzA:IYzL6dbQdLmPzbz5eWWxVw", "UBTConnect_Utils", "Action_UpdateTargetTimeLabel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bwB16GX06ka2PGpUzN7CAQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+0UIOpP3Akuo6VbE6IMPcw", callContext.id);
                // TargetTimeLabel = GetTargetTimeLabel(In_ContactPopupData.TimezoneName, In_ContactPopupData.TimezoneOffset, If)
                model.variables.targetTimeLabelVar = OutSystemsDebugger.handleFunctionCall(function() {
                    return UBTConnectLibraryController.default.getTargetTimeLabel$Action(model.variables.in_ContactPopupDataIn.timezoneNameAttr, model.variables.in_ContactPopupDataIn.timezoneOffsetAttr, ((((model.variables.in_ContactPopupDataIn.countryNameAttr) !== (""))) ? (model.variables.in_ContactPopupDataIn.countryNameAttr) : (model.variables.in_ContactPopupDataIn.localityAttr)), callContext).targetTimeLabelOut;
                }, OS.DataTypes.DataTypes.Text, callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZSj2rozrykeheD6SFTN+2w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:OLKOwH7hhUqV4moLNG9mzA", callContext.id);
            }

        };
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
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:i0Wy4U3Ma06osmf3uu23SA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.8eELrS_FwkqxJnTT7ft8Ww/ClientActions.i0Wy4U3Ma06osmf3uu23SA:NlBO0c96NED8pg_8tATC2w", "UBTConnect_Utils", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VolrxN8vMUqnMTgagW3W9w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uV+BeZvPrk2OuKnBRJZl+w", callContext.id);
                // Execute Action: Action_UpdateTargetTimeLabel
                controller._action_UpdateTargetTimeLabel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:OdA0G6bGPEWENGJqzz0b+A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:i0Wy4U3Ma06osmf3uu23SA", callContext.id);
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
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:sYig6_B8BUGM_xdwJJxJYw:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.8eELrS_FwkqxJnTT7ft8Ww/ClientActions.sYig6_B8BUGM_xdwJJxJYw:oO52+pRI8TnZgZT5awhIng", "UBTConnect_Utils", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mBPPnRoiAE60snshJeHxdw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hHWKGaqw8USmPreXi9ZSTg", callContext.id) && model.variables.skeletonButtonListVar.isEmpty)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FMsOZ0mNW0GZxxctBRC9bQ", callContext.id);
                    // Execute Action: ListAppendAll
                    OS.SystemActions.listAppendAll(model.variables.skeletonButtonListVar, function() {
                        var list = new UBTConnect_UtilsModel.ContactPopupButtonList();
                        list.pushAll([function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                            rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.callFill;
                            rec.labelAttr = "Loading";
                            return rec;
                        }(), function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                            rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.callFill;
                            rec.labelAttr = "Loading";
                            return rec;
                        }()]);
                        return list;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4Nkx6Hb9XEWFqfrnD63_zg", callContext.id);
                    // Execute Action: Action_UpdateTargetTimeLabel
                    controller._action_UpdateTargetTimeLabel$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:itx5NdGSM0iuZ9kJH0JH_A", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fI5B6DivJ0mVVRY01W3qkg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:sYig6_B8BUGM_xdwJJxJYw", callContext.id);
            }

        };

        Controller.prototype.action_UpdateTargetTimeLabel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_UpdateTargetTimeLabel$Action, callContext);

        };
        Controller.prototype.screenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.event_Clicked$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Cancel$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg:9C3kcfT08imn_yT0sR8WzQ", "UBTConnect_Utils", "CW_CTA_PopUps", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:8eELrS_FwkqxJnTT7ft8Ww:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.8eELrS_FwkqxJnTT7ft8Ww:GlYWM4nsdFZcXxSP0kbELQ", "UBTConnect_Utils", "ContactPopup", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:8eELrS_FwkqxJnTT7ft8Ww", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/ContactPopup On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/ContactPopup On Parameters Changed");
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
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "61HtwcPxAEu_xP17A0BZNw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.skeletonButtonListVar;
            }
        },
        "JCEsHDsoKUGVID6_Xbjtmg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.targetTimeLabelVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "_heB9gz8pU+PSf7GT6fnww": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ContactPopupDataIn;
            }
        },
        "ubn_of7Ro0WJlhtI7gxz5A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ContactPopupButtonsIn;
            }
        },
        "ZJQR6PtiDkKytoAkWwJz3w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ImageSizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "22f9llXsxkajYhTG2oyZ_g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "HZ0mJYdAtky8Rkfu8hiCqA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bock_Title"));
                })(varBag.model, idService);
            }
        },
        "_bqkjmEDYkSVmQfh3XryqQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "ZFLlNZGHUUCfYRoYkp15mw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowTimezone"));
                })(varBag.model, idService);
            }
        },
        "uDI3DbnJPE2u27gmoVSp+w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "qOSTrEHN7kegosUdEXkEjQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Block_TimeAndTimezone"));
                })(varBag.model, idService);
            }
        },
        "l9WM18P+UE+azD1peFNf2Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "C58TRNxn60izPeo8j2J3Gw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "KHLwdbUwpkWmrhLj5tfUzg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "CqzUoFZyYEONlKwe4FDYxg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "2nzi6desIEKxL5Oqa385EA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Block_Actions"));
                })(varBag.model, idService);
            }
        },
        "6lcJV9K7NE6AkV7nB7EgQw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "7xHw_4EMj06_1nS3HJ4qeg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "9+cn5NOev02QALTIX_HE3g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "ZubbYoqkeU27Hd2PU9VtHQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "qyOY7Qjt30yeEN1xIfj3lg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Button_Cancel"));
                })(varBag.model, idService);
            }
        },
        "CjHFkZazvUSXc8TPZiQf2g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Vn9a4XOW80ademBpSsNS6A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsVisible"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});