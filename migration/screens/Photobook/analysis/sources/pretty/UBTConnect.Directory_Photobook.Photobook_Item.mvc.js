define("UBTConnect.Directory_Photobook.Photobook_Item.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "PanZoom.PanZoom.PanZoom.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, PanZoom_PanZoom_PanZoom_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsZoomedIn", "isZoomedInVar", "IsZoomedIn", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_Household", "in_HouseholdIn", "In_Household", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_PhotobookHouseholdRec());
                }, false, Connect_Household_CSModel.UI_PhotobookHouseholdRec),
                this.attr("_in_HouseholdInDataFetchStatus", "_in_HouseholdInDataFetchStatus", "_in_HouseholdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MainContainerClass", "in_MainContainerClassIn", "In_MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || PanZoom_PanZoom_PanZoom_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Household" in inputs) {
                this.variables.in_HouseholdIn = inputs.In_Household;
                if ("_in_HouseholdInDataFetchStatus" in inputs) {
                    this.variables._in_HouseholdInDataFetchStatus = inputs._in_HouseholdInDataFetchStatus;
                }

            }

            if ("In_MainContainerClass" in inputs) {
                this.variables.in_MainContainerClassIn = inputs.In_MainContainerClass;
                if ("_in_MainContainerClassInDataFetchStatus" in inputs) {
                    this.variables._in_MainContainerClassInDataFetchStatus = inputs._in_MainContainerClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook_Item");
});
define("UBTConnect.Directory_Photobook.Photobook_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook_Item.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Item.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "PanZoom.PanZoom.PanZoom.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Photobook_Photobook_Item_mvc_model, UBTConnect_Directory_Photobook_Photobook_Item_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, PanZoom_PanZoom_PanZoom_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, PanZoom_PanZoom_PanZoom_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Item_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("CarouselItem.Options"), function() {
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
                            return rec;
                        }();
                    }),
                    ExtendedClasses: (model.variables.in_MainContainerClassIn + "-item"),
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
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
                    name: "CarouselItem",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: (model.variables.in_MainContainerClassIn + "-item-cont"),
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DIV_BackgroundImage"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
                        }, React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                            inputs: {
                                EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_HouseholdIn.householdIdAttr),
                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdInDataFetchStatus),
                                EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
                                ImageSize: model.getCachedValue(idService.getId("Background_Image.ImageSize"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                        rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
                                        return rec;
                                    }();
                                }),
                                ExtendedClass: (model.variables.in_MainContainerClassIn + "-background-image"),
                                _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
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
                                name: "Background_Image",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: (model.variables.in_MainContainerClassIn + "-item-cont"),
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DIV_ForegroundImage"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
                        }, React.createElement(PanZoom_PanZoom_PanZoom_mvc_view, {
                            inputs: {},
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                zoomIn$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PanZoom/PanZoom ZoomIn");
                                            return controller.handler_ZoomIn$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                minZoomReached$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PanZoom/PanZoom MinZoomReached");
                                            return controller.handler_MinZoomReached$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                image: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                        inputs: {
                                            ExtendedClass: (model.variables.in_MainContainerClassIn + "-foreground-image"),
                                            _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus),
                                            EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_HouseholdIn.householdIdAttr),
                                            _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdInDataFetchStatus),
                                            EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
                                            ImageSize: model.getCachedValue(idService.getId("Foreground_Image.ImageSize"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                    rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxHeight_100vh;
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
                                            name: "Foreground_Image",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.in_HouseholdIn.householdIdAttr), asPrimitiveValue(model.variables._in_HouseholdInDataFetchStatus), asPrimitiveValue(model.variables._in_MainContainerClassInDataFetchStatus), asPrimitiveValue(model.variables.in_MainContainerClassIn)]
                        })), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Title_Cont.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.displayOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                            rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                            rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                            rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
                                            rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
                                            return rec;
                                        }();
                                        rec.visibilityAttr = ((model.variables.isZoomedInVar) ? (UBTConnectModel.staticEntities.uBT_Visibility.hidden) : (UBTConnectModel.staticEntities.uBT_Visibility.visible));
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.isZoomedInVar;
                                }),
                                ExtendedClasses: (model.variables.in_MainContainerClassIn + "-title-cont"),
                                _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
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
                                name: "Title_Cont",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            ExtendedClasses: (model.variables.in_MainContainerClassIn + "-title-background"),
                                            _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus),
                                            Options: model.getCachedValue(idService.getId("Title_Background.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.backgroundAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                        rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
                                                        rec.opacityAttr = (new OS.DataTypes.Decimal("0.25"));
                                                        return rec;
                                                    }();
                                                    rec.paddingSizeAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                                        rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.doubleExtraLarge;
                                                        return rec;
                                                    }();
                                                    rec.borderOptionsAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                        rec.radiusAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.rounded;
                                                            return rec;
                                                        }();
                                                        return rec;
                                                    }();
                                                    rec.displayOptionsAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                        rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                        rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                                        rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
                                                        rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
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
                                            name: "Title_Background",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                    inputs: {
                                                        In_Text: model.variables.in_HouseholdIn.householdNameAttr,
                                                        _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdInDataFetchStatus),
                                                        In_TextOptions: model.getCachedValue(idService.getId("Title_FamilyName.In_TextOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading6;
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
                                                        name: "Title_FamilyName",
                                                        alias: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                    inputs: {
                                                        In_Text: model.variables.in_HouseholdIn.localityAttr,
                                                        _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdInDataFetchStatus),
                                                        In_TextOptions: model.getCachedValue(idService.getId("Title_Locality.In_TextOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
                                                        name: "Title_Locality",
                                                        alias: "8"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables._in_HouseholdInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdIn.localityAttr), asPrimitiveValue(model.variables.in_HouseholdIn.householdNameAttr)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.in_HouseholdIn.localityAttr), asPrimitiveValue(model.variables.in_HouseholdIn.householdNameAttr), asPrimitiveValue(model.variables._in_HouseholdInDataFetchStatus), asPrimitiveValue(model.variables._in_MainContainerClassInDataFetchStatus), asPrimitiveValue(model.variables.in_MainContainerClassIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isZoomedInVar), asPrimitiveValue(model.variables.in_HouseholdIn.localityAttr), asPrimitiveValue(model.variables.in_HouseholdIn.householdNameAttr), asPrimitiveValue(model.variables.in_HouseholdIn.householdIdAttr), asPrimitiveValue(model.variables._in_HouseholdInDataFetchStatus), asPrimitiveValue(model.variables._in_MainContainerClassInDataFetchStatus), asPrimitiveValue(model.variables.in_MainContainerClassIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Photobook.Photobook_Item.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook_Item.mvc$debugger", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_Item_mvc_Debugger) {
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
        Controller.prototype._handler_ZoomIn$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ZoomIn");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:N8MXu3UAZkKEaktP_edcCQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.OgvvlY3940SJvjl8fuRPKg/ClientActions.N8MXu3UAZkKEaktP_edcCQ:IIiLtMQHdrOX7_sxCk4+oA", "UBTConnect", "Handler_ZoomIn", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qA+FuTF8O02FVD2MVrCVcA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_x3tUwRa9kaZ90J58i7SGw", callContext.id);
                // IsZoomedIn = True
                model.variables.isZoomedInVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aL4HwFbIf0iqWzdF2MWBXQ", callContext.id);
                // Trigger Event: ZoomIn
                return controller.zoomIn$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1a_dmIY2+UeZbEganJTUrQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:N8MXu3UAZkKEaktP_edcCQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:N8MXu3UAZkKEaktP_edcCQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_MinZoomReached$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MinZoomReached");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sh8F+NQkgUyYZc+upy0RHw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.OgvvlY3940SJvjl8fuRPKg/ClientActions.sh8F+NQkgUyYZc+upy0RHw:UblkIvF5akgpj6Bf5jqaGw", "UBTConnect", "Handler_MinZoomReached", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g_gG5JQJH0ePWGg4OjN6sw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A7v4Otz7S0CfUR7NLbW0Zg", callContext.id);
                // IsZoomedIn = False
                model.variables.isZoomedInVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I_WtxHs5FEuduVaMS6Dc+w", callContext.id);
                // Trigger Event: MinZoomReached
                return controller.minZoomReached$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1Nxat4zYK0GQhOgVvhfwsw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sh8F+NQkgUyYZc+upy0RHw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sh8F+NQkgUyYZc+upy0RHw", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.handler_ZoomIn$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ZoomIn$Action, callContext);

        };
        Controller.prototype.handler_MinZoomReached$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MinZoomReached$Action, callContext);

        };
        Controller.prototype.zoomIn$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.minZoomReached$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OgvvlY3940SJvjl8fuRPKg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.OgvvlY3940SJvjl8fuRPKg:6aj1lFh+_7ZHV_g3Ihe4tA", "UBTConnect", "Photobook_Item", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OgvvlY3940SJvjl8fuRPKg", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ", callContext.id);
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

define("UBTConnect.Directory_Photobook.Photobook_Item.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "wQcvKa9de0C8DSL2ZizKxA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isZoomedInVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "MKSbLrm7DkSWzVAWHZgcnA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HouseholdIn;
            }
        },
        "AWYwl_MHr0m_z40JggkGhg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MainContainerClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JWHhn7fI4kqsWz8nGJMynQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CarouselItem"));
                })(varBag.model, idService);
            }
        },
        "0I0_KernOEeQLFJ2dYv+jg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "+iAE20qkiUi7oHFwq4viHA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_BackgroundImage"));
                })(varBag.model, idService);
            }
        },
        "96X6G5ZuckeFLws+btv0zw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Background_Image"));
                })(varBag.model, idService);
            }
        },
        "_pWRQ0Tyf0adoMzOMxQRxg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_ForegroundImage"));
                })(varBag.model, idService);
            }
        },
        "weBpeR1pDkWNKQTasMFb_A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Image"));
                })(varBag.model, idService);
            }
        },
        "+BLadk8qK0GH8E_xituUNg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Foreground_Image"));
                })(varBag.model, idService);
            }
        },
        "XRaYoDKl00CNFj1oP0aibA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Cont"));
                })(varBag.model, idService);
            }
        },
        "HZGX7eJTYEWGNYD8tSCrww": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "jkZ4cPlg50SOB_PP14XuCg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Background"));
                })(varBag.model, idService);
            }
        },
        "LddbFS64gUKw8r5eTWgHog": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "1AjKJRgVmk6cI3WspMrO9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_FamilyName"));
                })(varBag.model, idService);
            }
        },
        "5+S_dYJwMEmhi2rCb8rF5A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Locality"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});