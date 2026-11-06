define("Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, Connect2_LegacySharedModel, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-avatar-image";
                }, false),
                this.attr("In_AvatarImage", "in_AvatarImageIn", "In_AvatarImage", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
                }, false, UBTConnectLibraryModel.AvatarImageRec),
                this.attr("_in_AvatarImageInDataFetchStatus", "_in_AvatarImageInDataFetchStatus", "_in_AvatarImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_SizeId", "in_SizeIdIn", "In_SizeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_BorderRadius", "in_BorderRadiusIn", "In_BorderRadius", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return Connect2_LegacySharedModel.staticEntities.uBT_Shape.circle;
                }, false),
                this.attr("_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_AvatarImage" in inputs) {
                this.variables.in_AvatarImageIn = inputs.In_AvatarImage;
                if ("_in_AvatarImageInDataFetchStatus" in inputs) {
                    this.variables._in_AvatarImageInDataFetchStatus = inputs._in_AvatarImageInDataFetchStatus;
                }

            }

            if ("In_SizeId" in inputs) {
                this.variables.in_SizeIdIn = inputs.In_SizeId;
                if ("_in_SizeIdInDataFetchStatus" in inputs) {
                    this.variables._in_SizeIdInDataFetchStatus = inputs._in_SizeIdInDataFetchStatus;
                }

            }

            if ("In_BorderRadius" in inputs) {
                this.variables.in_BorderRadiusIn = inputs.In_BorderRadius;
                if ("_in_BorderRadiusInDataFetchStatus" in inputs) {
                    this.variables._in_BorderRadiusInDataFetchStatus = inputs._in_BorderRadiusInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyNotifications.AvatarImage");
});
define("Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$model", "Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$controller", "Connect2_LegacyShared.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnectLibraryController, UBTConnectLibraryModel, React, OSView, Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_model, Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_controller, Connect2_LegacySharedClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "MyNotifications.AvatarImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(((model.variables.in_AvatarImageIn.uRLAttr) !== ("")), false, this, function() {
                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                    inputs: {
                        ExtendedClasses: model.getCachedValue(idService.getId("VtdwcNjKJkSXqhkW5NIY0g.ExtendedClasses"), function() {
                            return OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.mainContainerClassVar;
                        }, function() {
                            return model.variables.in_SizeIdIn;
                        }),
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus),
                        Options: model.getCachedValue(idService.getId("VtdwcNjKJkSXqhkW5NIY0g.Options"), function() {
                            return function() {
                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                rec.borderOptionsAttr = function() {
                                    var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                    rec.colorAttr = Connect2_LegacySharedModel.staticEntities.uBT_Color.neutral5;
                                    rec.sizeAttr = function() {
                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                        rec.generalSizeIdAttr = Connect2_LegacySharedModel.staticEntities.uBT_Size.small;
                                        return rec;
                                    }();
                                    rec.radiusAttr = function() {
                                        var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                        rec.generalSizeIdAttr = model.variables.in_BorderRadiusIn;
                                        return rec;
                                    }();
                                    return rec;
                                }();
                                rec.isSkeletonElementAttr = true;
                                return rec;
                            }();
                        }, function() {
                            return model.variables.in_BorderRadiusIn;
                        }),
                        _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BorderRadiusInDataFetchStatus)
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
                            return [React.createElement(OSWidgets.Image, {
                                type: /*External*/ 1,
                                url: model.variables.in_AvatarImageIn.uRLAttr,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables._in_AvatarImageInDataFetchStatus), asPrimitiveValue(model.variables.in_AvatarImageIn.uRLAttr)]
                })];
            }, function() {
                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                    inputs: {
                        ExtendedClasses: model.getCachedValue(idService.getId("xBiCJOHln0+GcdsakDa0UQ.ExtendedClasses"), function() {
                            return OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.mainContainerClassVar;
                        }, function() {
                            return model.variables.in_SizeIdIn;
                        }),
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus),
                        Options: model.getCachedValue(idService.getId("xBiCJOHln0+GcdsakDa0UQ.Options"), function() {
                            return function() {
                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                rec.backgroundAttr = function() {
                                    var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                    rec.backgroundColorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.backgroundColorAttr;
                                    return rec;
                                }();
                                rec.borderOptionsAttr = function() {
                                    var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                    rec.colorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderColorAttr;
                                    rec.sizeAttr = function() {
                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                        rec.generalSizeIdAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderSizeAttr;
                                        return rec;
                                    }();
                                    rec.radiusAttr = function() {
                                        var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                        rec.generalSizeIdAttr = model.variables.in_BorderRadiusIn;
                                        return rec;
                                    }();
                                    return rec;
                                }();
                                rec.textOptionsAttr = function() {
                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                    rec.colorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr;
                                    rec.fontSizeAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontSizeAttr;
                                    rec.fontWeightAttr = Connect2_LegacySharedModel.staticEntities.uBT_FontWeight.semiBold;
                                    return rec;
                                }();
                                rec.isSkeletonElementAttr = true;
                                return rec;
                            }();
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.backgroundColorAttr;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderColorAttr;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderSizeAttr;
                        }, function() {
                            return model.variables.in_BorderRadiusIn;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontSizeAttr;
                        }),
                        _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus, model.variables._in_BorderRadiusInDataFetchStatus)
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
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new PlaceholderContent(function() {
                            return [$if(((model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr) !== ("")), false, this, function() {
                                return [React.createElement(OSWidgets.Expression, {
                                    style: (model.variables.mainContainerClassVar + "__initials"),
                                    value: model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr,
                                    _idProps: {
                                        service: idService,
                                        uuid: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
                                })];
                            }, function() {
                                return [$if(((model.variables.in_AvatarImageIn.fallbackOptionsAttr.sVGAttr) !== ("")), false, this, function() {
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
                                            uuid: "4",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_SizeId: model.variables.in_AvatarImageIn.fallbackOptionsAttr.iconSizeIdAttr,
                                            _in_SizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus),
                                            In_ColorId: model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr,
                                            _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus),
                                            In_IconId: model.variables.in_AvatarImageIn.fallbackOptionsAttr.iconIdAttr,
                                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
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
                                        _dependencies: []
                                    })];
                                })];
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables._in_AvatarImageInDataFetchStatus), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.iconIdAttr), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.iconSizeIdAttr), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.sVGAttr), asPrimitiveValue(model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr)]
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnectLibraryController, UBTConnectLibraryModel, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_Debugger) {
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
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:onAHT9qiHrNmY0cVEPYIJg", "Connect2_LegacyShared", "MyNotifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:FeMEQ8CFT0Wv4_m+i4ejSw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.FeMEQ8CFT0Wv4_m+i4ejSw:XpfHKwaWaN5AQPUl1ZvARg", "Connect2_LegacyShared", "AvatarImage", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:FeMEQ8CFT0Wv4_m+i4ejSw", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA", callContext.id);
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
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "9GiHwA+hwka7E6UEMJwU2w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "QhF7iiopVUGvqxF4YFZAPA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_AvatarImageIn;
            }
        },
        "kTtMvW0Msk2YmeqFNQd0Aw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "e03onGsdfkaKHQYKA2WOvQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_BorderRadiusIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "9mLxMLZaCkCmY3qRN9lu4w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasImageURL"));
                })(varBag.model, idService);
            }
        },
        "KAkXkYuB+kWFYbfI5kXNrA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "wyv+ONHPeEuZlsd8lSAiyw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "4zP7jzWW7U+Fn6o1_OvVsA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasInitials"));
                })(varBag.model, idService);
            }
        },
        "P+UEROQkaEKry3cqUOBMAA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasSVG"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});