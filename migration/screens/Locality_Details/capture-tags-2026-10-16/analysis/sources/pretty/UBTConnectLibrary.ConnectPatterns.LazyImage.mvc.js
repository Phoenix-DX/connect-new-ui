define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_LazyImageSize_Dev", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Local_ImageURL", "local_ImageURLVar", "Local_ImageURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Local_HasImage", "local_HasImageVar", "Local_HasImage", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-lazy-image";
                }, false),
                this.attr("isError", "isErrorVar", "isError", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("DestroyCallback", "destroyCallbackVar", "DestroyCallback", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("ImageURL", "imageURLIn", "ImageURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_imageURLInDataFetchStatus", "_imageURLInDataFetchStatus", "_imageURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ImageSize", "in_ImageSizeIn", "In_ImageSize", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec());
                }, false, UBTConnectLibraryModel.LazyImageSizeRec),
                this.attr("_in_ImageSizeInDataFetchStatus", "_in_ImageSizeInDataFetchStatus", "_in_ImageSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("FallbackOptions", "fallbackOptionsIn", "FallbackOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec());
                }, false, UBTConnectLibraryModel.AvatarImageFallbackoptionsRec),
                this.attr("_fallbackOptionsInDataFetchStatus", "_fallbackOptionsInDataFetchStatus", "_fallbackOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("FallbackPadding", "fallbackPaddingIn", "FallbackPadding", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
                }, false, UBTConnectLibraryModel.SpacingOptionsRec),
                this.attr("_fallbackPaddingInDataFetchStatus", "_fallbackPaddingInDataFetchStatus", "_fallbackPaddingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_BorderOptions", "in_BorderOptionsIn", "In_BorderOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ImageBorderOptionsRec());
                }, false, UBTConnectLibraryModel.ImageBorderOptionsRec),
                this.attr("_in_BorderOptionsInDataFetchStatus", "_in_BorderOptionsInDataFetchStatus", "_in_BorderOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("HasErrorMessage", "hasErrorMessageIn", "HasErrorMessage", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_hasErrorMessageInDataFetchStatus", "_hasErrorMessageInDataFetchStatus", "_hasErrorMessageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ImageURL" in inputs) {
                this.variables.imageURLIn = inputs.ImageURL;
                if ("_imageURLInDataFetchStatus" in inputs) {
                    this.variables._imageURLInDataFetchStatus = inputs._imageURLInDataFetchStatus;
                }

            }

            if ("In_ImageSize" in inputs) {
                this.variables.in_ImageSizeIn = inputs.In_ImageSize;
                if ("_in_ImageSizeInDataFetchStatus" in inputs) {
                    this.variables._in_ImageSizeInDataFetchStatus = inputs._in_ImageSizeInDataFetchStatus;
                }

            }

            if ("FallbackOptions" in inputs) {
                this.variables.fallbackOptionsIn = inputs.FallbackOptions;
                if ("_fallbackOptionsInDataFetchStatus" in inputs) {
                    this.variables._fallbackOptionsInDataFetchStatus = inputs._fallbackOptionsInDataFetchStatus;
                }

            }

            if ("FallbackPadding" in inputs) {
                this.variables.fallbackPaddingIn = inputs.FallbackPadding;
                if ("_fallbackPaddingInDataFetchStatus" in inputs) {
                    this.variables._fallbackPaddingInDataFetchStatus = inputs._fallbackPaddingInDataFetchStatus;
                }

            }

            if ("In_BorderOptions" in inputs) {
                this.variables.in_BorderOptionsIn = inputs.In_BorderOptions;
                if ("_in_BorderOptionsInDataFetchStatus" in inputs) {
                    this.variables._in_BorderOptionsInDataFetchStatus = inputs._in_BorderOptionsInDataFetchStatus;
                }

            }

            if ("HasErrorMessage" in inputs) {
                this.variables.hasErrorMessageIn = inputs.HasErrorMessage;
                if ("_hasErrorMessageInDataFetchStatus" in inputs) {
                    this.variables._hasErrorMessageInDataFetchStatus = inputs._hasErrorMessageInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.LazyImage");
});
define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_LazyImageSize_Dev", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_model, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.LazyImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller;
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
                    In_IsLoading: model.variables.isLoadingVar
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
                                ExtendedClasses: model.getCachedValue(idService.getId("U5DpCjmiyUuhwGah6krioA.ExtendedClasses"), function() {
                                    return (((((!(model.variables.local_HasImageVar) || model.variables.isLoadingVar) || model.variables.isErrorVar)) ? ("hidden ") : ("")) + OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassIn, callContext).classesOutOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnectLibraryController.default.getClasses_LazyImageSize_Dev$Action(model.variables.in_ImageSizeIn.heightAttr, model.variables.in_ImageSizeIn.widthAttr, false, callContext).classesOutOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id));
                                }, function() {
                                    return model.variables.local_HasImageVar;
                                }, function() {
                                    return model.variables.isLoadingVar;
                                }, function() {
                                    return model.variables.isErrorVar;
                                }, function() {
                                    return model.variables.mainContainerClassVar;
                                }, function() {
                                    return model.variables.extendedClassIn;
                                }, function() {
                                    return model.variables.in_ImageSizeIn.heightAttr;
                                }, function() {
                                    return model.variables.in_ImageSizeIn.widthAttr;
                                }),
                                _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._in_ImageSizeInDataFetchStatus),
                                Options: model.getCachedValue(idService.getId("U5DpCjmiyUuhwGah6krioA.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.borderOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                            rec.colorAttr = model.variables.in_BorderOptionsIn.borderColorIdAttr;
                                            rec.sizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.generalSizeIdAttr = model.variables.in_BorderOptionsIn.borderSizeIdAttr;
                                                return rec;
                                            }();
                                            rec.radiusAttr = function() {
                                                var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                rec.generalSizeIdAttr = model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.in_BorderOptionsIn.borderColorIdAttr;
                                }, function() {
                                    return model.variables.in_BorderOptionsIn.borderSizeIdAttr;
                                }, function() {
                                    return model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                }),
                                _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BorderOptionsInDataFetchStatus)
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
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Image, {
                                        type: /*External*/ 1,
                                        url: model.variables.local_ImageURLVar,
                                        _idProps: {
                                            service: idService,
                                            name: "Image"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.local_ImageURLVar)]
                        }), $if(((!(model.variables.local_HasImageVar) || model.variables.isLoadingVar) || model.variables.isErrorVar), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("TairbGoO6ESEf6vskhpOUA.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = model.variables.fallbackOptionsIn.backgroundColorAttr;
                                                return rec;
                                            }();
                                            rec.paddingSizeAttr = model.variables.fallbackPaddingIn;
                                            rec.borderOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                rec.colorAttr = model.variables.fallbackOptionsIn.borderColorAttr;
                                                rec.sizeAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                    rec.generalSizeIdAttr = model.variables.fallbackOptionsIn.borderSizeAttr;
                                                    return rec;
                                                }();
                                                rec.radiusAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                    rec.generalSizeIdAttr = model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                                    return rec;
                                                }();
                                                return rec;
                                            }();
                                            rec.textOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                rec.colorAttr = model.variables.fallbackOptionsIn.fontColorAttr;
                                                rec.fontSizeAttr = model.variables.fallbackOptionsIn.fontSizeAttr;
                                                rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                                return rec;
                                            }();
                                            rec.isSkeletonElementAttr = true;
                                            return rec;
                                        }();
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.backgroundColorAttr;
                                    }, function() {
                                        return model.variables.fallbackPaddingIn;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.borderColorAttr;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.borderSizeAttr;
                                    }, function() {
                                        return model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.fontColorAttr;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.fontSizeAttr;
                                    }),
                                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus, model.variables._fallbackPaddingInDataFetchStatus, model.variables._in_BorderOptionsInDataFetchStatus),
                                    ExtendedClasses: model.getCachedValue(idService.getId("TairbGoO6ESEf6vskhpOUA.ExtendedClasses"), function() {
                                        return OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassIn, callContext).classesOutOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                                    return UBTConnectLibraryController.default.getClasses_LazyImageSize_Dev$Action(model.variables.in_ImageSizeIn.heightAttr, model.variables.in_ImageSizeIn.widthAttr, true, callContext).classesOutOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                            }, OS.DataTypes.DataTypes.Text, callContext.id), (model.variables.mainContainerClassVar + "--no-image"), callContext).classesOutOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                                    }, function() {
                                        return model.variables.mainContainerClassVar;
                                    }, function() {
                                        return model.variables.extendedClassIn;
                                    }, function() {
                                        return model.variables.in_ImageSizeIn.heightAttr;
                                    }, function() {
                                        return model.variables.in_ImageSizeIn.widthAttr;
                                    }),
                                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._in_ImageSizeInDataFetchStatus)
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
                                        return [$if(((model.variables.fallbackOptionsIn.initialsAttr) !== ("")), false, this, function() {
                                            return [React.createElement(OSWidgets.Expression, {
                                                value: model.variables.fallbackOptionsIn.initialsAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "4"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus)
                                            })];
                                        }, function() {
                                            return [$if(((model.variables.fallbackOptionsIn.sVGAttr) !== ("")), false, this, function() {
                                                return [React.createElement(OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, {
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
                                                        uuid: "5",
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            }, function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                    inputs: {
                                                        In_ColorId: model.variables.fallbackOptionsIn.fontColorAttr,
                                                        _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus),
                                                        In_IconId: model.variables.fallbackOptionsIn.iconIdAttr,
                                                        _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus),
                                                        In_SizeId: model.variables.fallbackOptionsIn.iconSizeIdAttr,
                                                        _in_SizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus)
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
                                                    _dependencies: []
                                                }), $if((model.variables.hasErrorMessageIn && ((model.variables.fallbackOptionsIn.messageAttr) !== (""))), false, this, function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_Text: model.variables.fallbackOptionsIn.messageAttr,
                                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus),
                                                            In_TextOptions: model.getCachedValue(idService.getId("ascMvAW9ikysC0MZZGt+Sg.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
                                                                    rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
                                                                    rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.regular;
                                                                    rec.isItalicAttr = false;
                                                                    return rec;
                                                                }();
                                                            }),
                                                            In_PaddingOptions: model.getCachedValue(idService.getId("ascMvAW9ikysC0MZZGt+Sg.In_PaddingOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                    rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
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
                                                            uuid: "7",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, function() {
                                                    return [];
                                                })];
                                            })];
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.hasErrorMessageIn), asPrimitiveValue(model.variables._hasErrorMessageInDataFetchStatus), asPrimitiveValue(model.variables._fallbackOptionsInDataFetchStatus), asPrimitiveValue(model.variables.fallbackOptionsIn.messageAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.iconSizeIdAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.iconIdAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.fontColorAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.sVGAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.initialsAttr)]
                            })];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.hasErrorMessageIn), asPrimitiveValue(model.variables.fallbackPaddingIn), asPrimitiveValue(model.variables.fallbackOptionsIn.messageAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.iconSizeIdAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.iconIdAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.sVGAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.initialsAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.fontSizeAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.fontColorAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.borderSizeAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.borderColorAttr), asPrimitiveValue(model.variables.fallbackOptionsIn.backgroundColorAttr), asPrimitiveValue(model.variables.local_ImageURLVar), asPrimitiveValue(model.variables.in_BorderOptionsIn.borderRadiusAttr), asPrimitiveValue(model.variables.in_BorderOptionsIn.borderSizeIdAttr), asPrimitiveValue(model.variables.in_BorderOptionsIn.borderColorIdAttr), asPrimitiveValue(model.variables._hasErrorMessageInDataFetchStatus), asPrimitiveValue(model.variables._fallbackPaddingInDataFetchStatus), asPrimitiveValue(model.variables._fallbackOptionsInDataFetchStatus), asPrimitiveValue(model.variables._in_BorderOptionsInDataFetchStatus), asPrimitiveValue(model.variables._in_ImageSizeInDataFetchStatus), asPrimitiveValue(model.variables._extendedClassInDataFetchStatus), asPrimitiveValue(model.variables.in_ImageSizeIn.widthAttr), asPrimitiveValue(model.variables.in_ImageSizeIn.heightAttr), asPrimitiveValue(model.variables.extendedClassIn), asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables.isErrorVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.local_HasImageVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnReady.SetupOnLoadJS", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnDestroy.JavaScript1JS", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_LazyImageSize_Dev", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller_OnReady_SetupOnLoadJS, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller_OnDestroy_JavaScript1JS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                onLoad$Action: function() {
                    return controller.executeActionInsideJSNode(controller._onLoad$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "OnLoad");
                },
                onError$Action: function() {
                    return controller.executeActionInsideJSNode(controller._onError$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "OnError");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._actionDefineHasImage$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ActionDefineHasImage");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:+094AqOXGUiKsP2C_LernQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw/ClientActions.+094AqOXGUiKsP2C_LernQ:U7aPPjXX6ZH9fbFMStU0jQ", "UBTConnectLibrary", "ActionDefineHasImage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pEO5DhrCjECet_KQfDCrgw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sYKcErqlJEa6Y6eInQ6gXw", callContext.id);
                // Local_HasImage = ImageURL <> "" and notisError
                model.variables.local_HasImageVar = (((model.variables.imageURLIn) !== ("")) && !(model.variables.isErrorVar));
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_q5Il1y+E0GqC14DCgfzqw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:+094AqOXGUiKsP2C_LernQ", callContext.id);
            }

        };
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:c_9xEG_5FkeSoP7iH3s8Lw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw/ClientActions.c_9xEG_5FkeSoP7iH3s8Lw:+BsenKFKTjAsJZt3obRczw", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5J86Kp_yAUK+dPJt_S6nKQ", callContext.id);
                // New Image?
                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:gJ3pNoHakEeug37YYhDLcQ", callContext.id) && ((model.variables.imageURLIn) !== (model.variables.local_ImageURLVar)))) {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tIeDSUL5s0WZOykdj91PCw", callContext.id);
                    // Execute Action: OnReady
                    controller._onReady$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nqwtJrV4kUmtZE5jlYhe3A", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nqwtJrV4kUmtZE5jlYhe3A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:c_9xEG_5FkeSoP7iH3s8Lw", callContext.id);
            }

        };
        Controller.prototype._onLoad$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnLoad");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:0yx5GI0YYEGCkKjHAzwiPQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw/ClientActions.0yx5GI0YYEGCkKjHAzwiPQ:G6OP8oK29I17OgD8IO6bVw", "UBTConnectLibrary", "OnLoad", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_6jU2lnK_0uXKQBxIke1cQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LyNxKWs3cEG2CqqBiq2qwg", callContext.id);
                // Execute Action: ActionDefineHasImage
                controller._actionDefineHasImage$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GHOSxykKD0SywTKa874V1Q", callContext.id);
                // isLoading = False
                model.variables.isLoadingVar = false;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3OOzWsVKiEKQt2GvSGcqhw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:0yx5GI0YYEGCkKjHAzwiPQ", callContext.id);
            }

        };
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var setupOnLoadJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.setupOnLoadJSResult = setupOnLoadJSResult;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:wBnvI3qyhkqO61vszNEh+w:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw/ClientActions.wBnvI3qyhkqO61vszNEh+w:ykjhZRgIiQRuMIXi8RHtKQ", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bsvhLRV9kkOqleIaxPLFew", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4G5tLSDW2Eudw46oJjfcFQ", callContext.id);
                // isError = False
                model.variables.isErrorVar = false;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:he2R9Drh_ESusKLgQJz96Q", callContext.id);
                // Execute Action: ActionDefineHasImage
                controller._actionDefineHasImage$Action(callContext);
                // No image?
                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fEN0+ubF_Eq5C+bAiIPKQA", callContext.id) && (model.variables.imageURLIn === ""))) {
                    // Setup Vars
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JO8GJ14cpE26xuimx6Zhug", callContext.id);
                    // Local_ImageURL = ImageURL
                    model.variables.local_ImageURLVar = model.variables.imageURLIn;
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JO8GJ14cpE26xuimx6Zhug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // isLoading = False
                    model.variables.isLoadingVar = false;
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6Gj_KAKXOECgbpJrb9Wa0w", callContext.id);
                } else {
                    // Setup Vars
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SnLxLbXsE0KB1fKONmyo2g", callContext.id);
                    // Local_ImageURL = ImageURL
                    model.variables.local_ImageURLVar = model.variables.imageURLIn;
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SnLxLbXsE0KB1fKONmyo2g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // isLoading = True
                    model.variables.isLoadingVar = true;
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VoPv40Fvy0isZuG4+bizOw", callContext.id);
                    setupOnLoadJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller_OnReady_SetupOnLoadJS, "SetupOnLoad", "OnReady", {
                        HasImage: OS.DataConversion.JSNodeParamConverter.to(model.variables.local_HasImageVar, OS.DataTypes.DataTypes.Boolean),
                        ImageId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Image"), OS.DataTypes.DataTypes.Text),
                        RemoveCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                    }, function($parameters) {
                        var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.LazyImage.OnReady$setupOnLoadJSResult"))();
                        jsNodeResult.removeCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RemoveCallback, OS.DataTypes.DataTypes.Object);
                        return jsNodeResult;
                    }, {
                        OnLoad: controller.clientActionProxies.onLoad$Action,
                        OnError: controller.clientActionProxies.onError$Action
                    }, {});
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:De1nsjYn6kav84k3tiTWIA", callContext.id);
                    // DestroyCallback = SetupOnLoad.RemoveCallback
                    model.variables.destroyCallbackVar = setupOnLoadJSResult.value.removeCallbackOut;
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Vi9igJgQc0u71f8qpPGUzQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:wBnvI3qyhkqO61vszNEh+w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.LazyImage.OnReady$setupOnLoadJSResult", [{
            name: "RemoveCallback",
            attrName: "removeCallbackOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._onError$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnError");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:WvEkt1Crr0GJ65cr9RTqQg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw/ClientActions.WvEkt1Crr0GJ65cr9RTqQg:234m7eMzwxNEl8qG9ty5eQ", "UBTConnectLibrary", "OnError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:j4hq_q5jjEKTyOnWp3R5Iw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XbDEUt4_wUSQxXFk2qPU1w", callContext.id);
                // Execute Action: ActionDefineHasImage
                controller._actionDefineHasImage$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rTvTfC+2k0u_dCmbbSwuZw", callContext.id);
                // isLoading = False
                model.variables.isLoadingVar = false;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rTvTfC+2k0u_dCmbbSwuZw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // isError = True
                model.variables.isErrorVar = true;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:F4e0l3WF70uMfKehl5NfdQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:WvEkt1Crr0GJ65cr9RTqQg", callContext.id);
            }

        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:mSn4u8nc3kORjVe5_IY0bg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw/ClientActions.mSn4u8nc3kORjVe5_IY0bg:Hlo5RFJb7LL+HB4Nl8Tklg", "UBTConnectLibrary", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sgU48xP3jU2nlbr0cE0w9Q", callContext.id);
                // Set Main Class
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9rzI_Wq2OEWJ4zZOSZTRBg", callContext.id);
                // MainContainerClass = MainContainerClass
                model.variables.mainContainerClassVar = model.variables.mainContainerClassVar;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:L1ua8_+SREub5SURHv_PUg", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnInitialize", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.LazyImage.OnInitialize$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N7iCtfnGh0WJrJGab4yKlQ", callContext.id);
                // isLoading = notIsViewRestoredFromCache.IsRestoredFromCache
                model.variables.isLoadingVar = !(isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LA1ZgJ00wkqOLeYwOToJAQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:mSn4u8nc3kORjVe5_IY0bg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.LazyImage.OnInitialize$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:G9B0465EEUK3TcnL2rQzzA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw/ClientActions.G9B0465EEUK3TcnL2rQzzA:jf982vi9zcgv_2rmkCVRHg", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rnJKGERlm0OdXbyor+GkWg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LJJFZScdbkmOc0PavWznAA", callContext.id) && ((model.variables.destroyCallbackVar) !== (OS.BuiltinFunctions.nullObject())))) {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hFdBY18YM0O+L9DEdXlYkQ", callContext.id);
                    controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller_OnDestroy_JavaScript1JS, "JavaScript1", "OnDestroy", {
                        DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
                    }, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PEUO1ci_tkudOH9UISBI1g", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:v3pvre+hdE+vBTms0FrWEw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:G9B0465EEUK3TcnL2rQzzA", callContext.id);
            }

        };

        Controller.prototype.actionDefineHasImage$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._actionDefineHasImage$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onLoad$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onLoad$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onError$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onError$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:HQrHi0+5qbWvCjIx1QgARg", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:28wRm77okkyJuLk95oMeUw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.28wRm77okkyJuLk95oMeUw:HRSLURmyFXpI5B+2TaklIw", "UBTConnectLibrary", "LazyImage", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:28wRm77okkyJuLk95oMeUw", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/LazyImage On Initialize");
                return controller.onInitialize$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/LazyImage On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/LazyImage On Destroy");
                return controller.onDestroy$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/LazyImage On Parameters Changed");
                return controller.onParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnReady.SetupOnLoadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {

        var img = document.getElementById($parameters.ImageId);

        function cleanup() {
            if (!img) return;
            img.removeEventListener("load", onImageReady);
            img.removeEventListener("error", onImageError);
        }

        function onImageReady() {
            cleanup();
            $actions.OnLoad();
        }

        function onImageError() {
            if (img.getAttribute("src")) {
                cleanup();
                $actions.OnError();
            }

        }

        if (img) {

            // Cached success
            if (img.complete && img.naturalWidth > 0 && $parameters.HasImage && img.getAttribute("src")) {
                onImageReady();
            }
            // Cached error (broken image)
            else if (img.complete && img.naturalWidth === 0 && $parameters.HasImage && img.getAttribute("src")) {
                onImageError();
            }
            // Normal async load
            else {
                img.addEventListener("load", onImageReady);
                img.addEventListener("error", onImageError);
            }
        }



        $parameters.RemoveCallback = cleanup;

        /*var img = document.getElementById($parameters.ImageId);

        function onImageReady() {
            $actions.OnLoad();
        }

        if(img) {
            // If already loaded (cached case)
            if (img.complete && img.getAttribute("src")) {
                onImageReady();
            } 
            // Otherwise wait for load
            else {
                img.addEventListener("load", onImageReady);
        }
        }*/

    };
});
define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});
define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller.OnDestroy.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.DestroyCallback()
    };
});

define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "VoPv40Fvy0isZuG4+bizOw": {
            getter: function(varBag, idService) {
                return varBag.setupOnLoadJSResult.value;
            }
        },
        "L1ua8_+SREub5SURHv_PUg": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "hFdBY18YM0O+L9DEdXlYkQ": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "QiomT_c14Ee1Ez7ioUyYOQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Me+ssOqMZ0Siprrw0oqFQQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_ImageURLVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "FYkg2MCigEegjxGNkG6r8A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_HasImageVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "CFG3aHVvR0+fVxA2QF63Tg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "R4XwWgI760WhWE+6Wh2iqw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isErrorVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ViKeGbxHEk69J6xDAPeTbg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.destroyCallbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "kqxuH+CXHkOQPT4nvR4EIA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.imageURLIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "1LcP5z7StEyhBaaOTtGNmw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ImageSizeIn;
            }
        },
        "+jMYzGoZU0Sok7eP9p67Ew": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fallbackOptionsIn;
            }
        },
        "WQvKgbv5QkOGbmVtiZ3sUA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fallbackPaddingIn;
            }
        },
        "OHqYUZ9vGUev5LiDisNlsQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_BorderOptionsIn;
            }
        },
        "rCfxI2hwokaxJ0NR5Z2oxg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasErrorMessageIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "mkceCk9htE2bnFQl8EIClA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "NCwTYQ3usk+4NijWtyCp7Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "cFVOG0HRYkuIjRFPBVD8bw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Lo398UqoyEqafivl3Q9g8A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Image"));
                })(varBag.model, idService);
            }
        },
        "DtINgklWikG2jCWV6_Z8LA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowFallback"));
                })(varBag.model, idService);
            }
        },
        "W+t8SOrws0mAEuSlWVyFkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "f+KqPwTudk23n8M8+nZPvg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasInitials"));
                })(varBag.model, idService);
            }
        },
        "qcjXjIPOIESqpTXMNeivyw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasSVG"));
                })(varBag.model, idService);
            }
        },
        "XSn6AFPElESH6c+eqRTJzw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasMessage"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});