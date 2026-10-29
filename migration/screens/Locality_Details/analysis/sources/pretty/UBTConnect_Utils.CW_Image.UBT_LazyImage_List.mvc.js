define("UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$FormatClasses", "UBTConnect_Utils.model$LazyImageIntegerRecordList", "UBTConnect_Utils.model$LazyImageList", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.model$LazyImageRec", "UBTConnect_Utils.model$LazyImageIntegerRecord"], function(OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-avatar-image-list";
                }, false),
                this.attr("LocalItems", "localItemsVar", "LocalItems", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.LazyImageIntegerRecordList());
                }, false, UBTConnect_UtilsModel.LazyImageIntegerRecordList),
                this.attr("HitLimit", "hitLimitVar", "HitLimit", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Items", "itemsIn", "Items", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.LazyImageList());
                }, false, UBTConnect_UtilsModel.LazyImageList),
                this.attr("_itemsInDataFetchStatus", "_itemsInDataFetchStatus", "_itemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ImageSize", "imageSizeIn", "ImageSize", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec());
                }, false, UBTConnectLibraryModel.LazyImageSizeRec),
                this.attr("_imageSizeInDataFetchStatus", "_imageSizeInDataFetchStatus", "_imageSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("InvertOrder", "invertOrderIn", "InvertOrder", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_invertOrderInDataFetchStatus", "_invertOrderInDataFetchStatus", "_invertOrderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MaxLimit", "maxLimitIn", "MaxLimit", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 5;
                }, false),
                this.attr("_maxLimitInDataFetchStatus", "_maxLimitInDataFetchStatus", "_maxLimitInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("Items" in inputs) {
                this.variables.itemsIn = inputs.Items;
                if ("_itemsInDataFetchStatus" in inputs) {
                    this.variables._itemsInDataFetchStatus = inputs._itemsInDataFetchStatus;
                }

            }

            if ("ImageSize" in inputs) {
                this.variables.imageSizeIn = inputs.ImageSize;
                if ("_imageSizeInDataFetchStatus" in inputs) {
                    this.variables._imageSizeInDataFetchStatus = inputs._imageSizeInDataFetchStatus;
                }

            }

            if ("InvertOrder" in inputs) {
                this.variables.invertOrderIn = inputs.InvertOrder;
                if ("_invertOrderInDataFetchStatus" in inputs) {
                    this.variables._invertOrderInDataFetchStatus = inputs._invertOrderInDataFetchStatus;
                }

            }

            if ("MaxLimit" in inputs) {
                this.variables.maxLimitIn = inputs.MaxLimit;
                if ("_maxLimitInDataFetchStatus" in inputs) {
                    this.variables._maxLimitInDataFetchStatus = inputs._maxLimitInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_Image.UBT_LazyImage_List");
});
define("UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$controller", "UBTConnect_Utils.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$FormatClasses", "UBTConnect_Utils.model$LazyImageIntegerRecordList", "UBTConnect_Utils.model$LazyImageList", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.model$LazyImageRec", "UBTConnect_Utils.model$LazyImageIntegerRecord"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryController, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_model, UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_controller, UBTConnect_UtilsClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view) {
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
        View.displayName = "CW_Image.UBT_LazyImage_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
                animateItems: true,
                extendedProperties: {
                    "disable-virtualization": "True"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Custom*/ 1,
                source: model.variables.localItemsVar,
                style: model.getCachedValue(idService.getId("KjO_XHzaDEGVljcDrH0GXg.Style"), function() {
                    return ("list list-group " + OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(OS.BuiltinFunctions.textToIdentifier(model.variables.imageSizeIn.heightAttr), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id));
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.imageSizeIn.heightAttr;
                }),
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imageSizeInDataFetchStatus),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: model.getCachedValue(idService.getId("UVG2j1AEi0+6jg0ijDBj4A.style"), function() {
                                    return ((model.variables.invertOrderIn) ? (("z-index: " + ((model.variables.localItemsVar.length - model.variables.localItemsVar.getCurrentRowNumber(callContext.iterationContext))).toString())) : (""));
                                }, function() {
                                    return model.variables.invertOrderIn;
                                }, function() {
                                    return model.variables.localItemsVar.length;
                                }, function() {
                                    return model.variables.localItemsVar.getCurrentRowNumber(callContext.iterationContext);
                                })
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "auto"
                            },
                            style: model.getCachedValue(idService.getId("UVG2j1AEi0+6jg0ijDBj4A.Style"), function() {
                                return ("position-relative" + (((model.variables.hitLimitVar && (model.variables.localItemsVar.getCurrentRowNumber(callContext.iterationContext) === (model.variables.localItemsVar.length - 1)))) ? (((" " + model.variables.mainContainerClassVar) + "__counter")) : ("")));
                            }, function() {
                                return model.variables.hitLimitVar;
                            }, function() {
                                return model.variables.localItemsVar.getCurrentRowNumber(callContext.iterationContext);
                            }, function() {
                                return model.variables.localItemsVar.length;
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: [asPrimitiveValue(model.variables._imageSizeInDataFetchStatus), asPrimitiveValue(model.variables.imageSizeIn.heightAttr), asPrimitiveValue(model.variables.localItemsVar.getCurrent(callContext.iterationContext).lazyImageAttr.entityIdAttr), asPrimitiveValue(model.variables.localItemsVar.getCurrent(callContext.iterationContext).lazyImageAttr.entityTypeAttr), asPrimitiveValue(model.variables.localItemsVar.getCurrent(callContext.iterationContext).lazyImageAttr.imageURLAttr), asPrimitiveValue(model.variables.localItemsVar.getCurrent(callContext.iterationContext).extraNumberAttr)]
                        }, $if((model.variables.localItemsVar.getCurrent(callContext.iterationContext).extraNumberAttr > 0), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
                                inputs: {
                                    In_AvatarImage: model.getCachedValue(idService.getId("xRUXW8i6sU6aN3iO3CEKBg.In_AvatarImage"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.AvatarImageRec();
                                            rec.fallbackOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
                                                rec.initialsAttr = ("+" + (model.variables.localItemsVar.getCurrent(callContext.iterationContext).extraNumberAttr).toString());
                                                rec.fontColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0;
                                                rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                    }, function() {
                                        return model.variables.localItemsVar.getCurrent(callContext.iterationContext).extraNumberAttr;
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
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                inputs: {
                                    ImageURL: model.variables.localItemsVar.getCurrent(callContext.iterationContext).lazyImageAttr.imageURLAttr,
                                    EntityType: model.variables.localItemsVar.getCurrent(callContext.iterationContext).lazyImageAttr.entityTypeAttr,
                                    ImageSize: model.getCachedValue(idService.getId("LLzRTOvSLES3vCwBj86SLg.ImageSize"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                            rec.heightAttr = model.variables.imageSizeIn.heightAttr;
                                            rec.widthAttr = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.square;
                                            return rec;
                                        }();
                                    }, function() {
                                        return model.variables.imageSizeIn.heightAttr;
                                    }),
                                    _imageSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imageSizeInDataFetchStatus),
                                    EntityId: model.variables.localItemsVar.getCurrent(callContext.iterationContext).lazyImageAttr.entityIdAttr
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
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }))];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.imageSizeIn.heightAttr), asPrimitiveValue(model.variables._imageSizeInDataFetchStatus), asPrimitiveValue(model.variables._invertOrderInDataFetchStatus), asPrimitiveValue(model.variables.invertOrderIn), asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables.hitLimitVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$debugger", "UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$FormatClasses", "UBTConnect_Utils.model$LazyImageIntegerRecordList", "UBTConnect_Utils.model$LazyImageList", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.model$LazyImageRec", "UBTConnect_Utils.model$LazyImageIntegerRecord"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_Debugger, UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS) {
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
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:siLeChp5Xk+PdgyKrM6c1Q:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.TNmGquvEQ0GaPxELcU_aUg/ClientActions.siLeChp5Xk+PdgyKrM6c1Q:BbRCc6yZ2YlJASFKA0cvAw", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mXGgx7Hi_0Skn5RcgT_WNg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:f+lckXNPxk+uwX_M1e+OMQ", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnInitialize", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Image.UBT_LazyImage_List.OnInitialize$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dTh46H0vQEWz+9Fd6ya39A", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ECVxPEMbbkqVcR_IRXzbVg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DkjS_AJUG0qf7mmVXRwJSA", callContext.id);
                    // Execute Action: RefreshList
                    controller._refreshList$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ik+goqa7m0S9ev6U9NFcTA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:siLeChp5Xk+PdgyKrM6c1Q", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Image.UBT_LazyImage_List.OnInitialize$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._refreshList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RefreshList");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:EA+GEAfvjUO9SrxthW9pSQ:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.TNmGquvEQ0GaPxELcU_aUg/ClientActions.EA+GEAfvjUO9SrxthW9pSQ:BJOKAJQtRHLpxMthujF9sw", "UBTConnect_Utils", "RefreshList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:imue5Tbqm0Kpo9YurGOJmQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2H21IYKy60isC7oUlRozYA", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.localItemsVar, callContext);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9Y35tKAebUKYAwebYwblsQ", callContext.id) && ((model.variables.maxLimitIn > 0) && (model.variables.itemsIn.length > model.variables.maxLimitIn)))) {
                    // Foreach Items
                    callContext.iterationContext.registerIterationStart(model.variables.itemsIn);
                    try {
                        var itemsIterator = callContext.iterationContext.getIterator(model.variables.itemsIn);
                        var itemsIndexMax = model.variables.maxLimitIn;
                        var itemsIndex = 0;
                        while (((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sF+tbvAwXUOu6enGuXONRg", callContext.id) && (itemsIndex < model.variables.itemsIn.length)) && (itemsIndexMax > 0))) {
                            itemsIterator.currentRowNumber = itemsIndex;
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AyAtPtOjKUOY9BrCSQD5dg", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(model.variables.localItemsVar, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.itemsIn.getItem(itemsIndex.valueOf()), new UBTConnect_UtilsModel.LazyImageIntegerRecord(), function(source, target) {
                                target.lazyImageAttr.imageURLAttr = source.imageURLAttr;
                                target.lazyImageAttr.entityIdAttr = source.entityIdAttr;
                                target.lazyImageAttr.entityTypeAttr = source.entityTypeAttr;
                                return target;
                            }), callContext);
                            itemsIndexMax--;
                            itemsIndex++;
                        }

                    } finally {
                        callContext.iterationContext.registerIterationEnd(model.variables.itemsIn);
                    }

                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VC29aq7ysEG09Zkv4DhQbw", callContext.id);
                    // Execute Action: ListAppend2
                    OS.SystemActions.listAppend(model.variables.localItemsVar, function() {
                        var rec = new UBTConnect_UtilsModel.LazyImageIntegerRecord();
                        rec.extraNumberAttr = (model.variables.itemsIn.length - model.variables.maxLimitIn);
                        return rec;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QF4DGxELZE+BkfxLvV7IBg", callContext.id);
                    // HitLimit = True
                    model.variables.hitLimitVar = true;
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FVzfp2taAESRPawffE7MzQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EGdPqEC45kSppwE_VF+4iw", callContext.id);
                    // LocalItems = Items
                    model.variables.localItemsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.itemsIn, new UBTConnect_UtilsModel.LazyImageIntegerRecordList(), function(source, target) {
                        target.lazyImageAttr.imageURLAttr = source.imageURLAttr;
                        target.lazyImageAttr.entityIdAttr = source.entityIdAttr;
                        target.lazyImageAttr.entityTypeAttr = source.entityTypeAttr;
                        return target;
                    });
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YivReauLQkS1v+E9hHGQsA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:EA+GEAfvjUO9SrxthW9pSQ", callContext.id);
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
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:XYZplAFQ80y6yK67i7FbWg:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.TNmGquvEQ0GaPxELcU_aUg/ClientActions.XYZplAFQ80y6yK67i7FbWg:FbaRwBK_JZY7m5LoTJAUqQ", "UBTConnect_Utils", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LsnZPFD5T0KoHa76o19TQg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eWrMHXdV8UqSx6ibcuLyzQ", callContext.id);
                // Execute Action: RefreshList
                controller._refreshList$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:E4ke_yD+bEuvsofQy3atTA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:XYZplAFQ80y6yK67i7FbWg", callContext.id);
            }

        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.refreshList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refreshList$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:c4TUUTDcd0OByIhYz8oDyw:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw:Ub72qwAB8vI9fSZPWMJBzg", "UBTConnect_Utils", "CW_Image", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:TNmGquvEQ0GaPxELcU_aUg:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.TNmGquvEQ0GaPxELcU_aUg:RQwNi9NEi9SP0s7vWWQeqw", "UBTConnect_Utils", "UBT_LazyImage_List", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TNmGquvEQ0GaPxELcU_aUg", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:c4TUUTDcd0OByIhYz8oDyw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Image/UBT_LazyImage_List On Initialize");
                return controller.onInitialize$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Image/UBT_LazyImage_List On Parameters Changed");
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
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});
define("UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "f+lckXNPxk+uwX_M1e+OMQ": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "Pj5tWwll7kCnCJ7WD_0YvQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4FZisuuXK0m2rC8ffAe_Pw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localItemsVar;
            }
        },
        "skA9flU2vUyK4KKWN0uPBA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hitLimitVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ViIk5aTBNUitlGOnUVM6zg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.itemsIn;
            }
        },
        "3WaA0QY8ZkGHMgvMrUvxOw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.imageSizeIn;
            }
        },
        "GGNT3EO0JE2iXOZZPmIUAQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.invertOrderIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "w20WnblOm0KOw8sh++WUwA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxLimitIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});