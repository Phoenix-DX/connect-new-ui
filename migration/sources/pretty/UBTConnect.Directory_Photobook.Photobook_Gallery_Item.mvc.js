define("UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_HouseholdId", "in_HouseholdIdIn", "In_HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_HouseholdIdInDataFetchStatus", "_in_HouseholdIdInDataFetchStatus", "_in_HouseholdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsActive", "in_IsActiveIn", "In_IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsActiveInDataFetchStatus", "_in_IsActiveInDataFetchStatus", "_in_IsActiveInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_TargetSubClass", "in_TargetSubClassIn", "In_TargetSubClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_TargetSubClassInDataFetchStatus", "_in_TargetSubClassInDataFetchStatus", "_in_TargetSubClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_HouseholdId" in inputs) {
                this.variables.in_HouseholdIdIn = inputs.In_HouseholdId;
                if ("_in_HouseholdIdInDataFetchStatus" in inputs) {
                    this.variables._in_HouseholdIdInDataFetchStatus = inputs._in_HouseholdIdInDataFetchStatus;
                }

            }

            if ("In_IsActive" in inputs) {
                this.variables.in_IsActiveIn = inputs.In_IsActive;
                if ("_in_IsActiveInDataFetchStatus" in inputs) {
                    this.variables._in_IsActiveInDataFetchStatus = inputs._in_IsActiveInDataFetchStatus;
                }

            }

            if ("In_TargetSubClass" in inputs) {
                this.variables.in_TargetSubClassIn = inputs.In_TargetSubClass;
                if ("_in_TargetSubClassInDataFetchStatus" in inputs) {
                    this.variables._in_TargetSubClassInDataFetchStatus = inputs._in_TargetSubClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook_Gallery_Item");
});
define("UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_model, UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook_Gallery_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("Household_Gallery_Item.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = ((model.variables.in_IsActiveIn) ? (UBTConnectModel.staticEntities.uBT_Color.neutral0) : (OS.BuiltinFunctions.nullTextIdentifier()));
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = ((model.variables.in_IsActiveIn) ? (UBTConnectModel.staticEntities.uBT_Size.small) : (OS.BuiltinFunctions.nullTextIdentifier()));
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.heightOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                return rec;
                            }();
                            rec.widthOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_IsActiveIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsActiveInDataFetchStatus),
                    ExtendedClasses: model.variables.in_TargetSubClassIn,
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TargetSubClassInDataFetchStatus)
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
                            controller.clicked$Action(model.variables.in_HouseholdIdIn, controller.callContext(eventHandlerContext));
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
                    name: "Household_Gallery_Item",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                            inputs: {
                                EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
                                In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.soft,
                                ImageSize: model.getCachedValue(idService.getId("s8025CIFk0mOGPtlWRkfMw.ImageSize"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                        rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.small_40;
                                        return rec;
                                    }();
                                }),
                                EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_HouseholdIdIn),
                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdIdInDataFetchStatus)
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
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._in_HouseholdIdInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdIdIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_Debugger) {
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

        Controller.prototype.clicked$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zS0fxEC3F0yAw4w4Cj_1hw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.zS0fxEC3F0yAw4w4Cj_1hw:E7a0F9BsyEwKnIgcDoYmMg", "UBTConnect", "Photobook_Gallery_Item", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zS0fxEC3F0yAw4w4Cj_1hw", callContext.id);
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

define("UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "WuP8JhQNGUCu3ouTofthFw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HouseholdIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "wTFFypUuuEafEw66gZ+ykg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsActiveIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "5lRWMa5Yp0ywKQ0C1XrqzQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_TargetSubClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4tKeB1gDs06Cf6curV3saw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Gallery_Item"));
                })(varBag.model, idService);
            }
        },
        "pXjqs3_DmUW1KacRYGz64g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});