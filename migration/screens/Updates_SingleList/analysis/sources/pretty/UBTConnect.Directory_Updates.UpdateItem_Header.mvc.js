define("UBTConnect.Directory_Updates.UpdateItem_Header.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ShowMarkAll", "showMarkAllIn", "ShowMarkAll", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_showMarkAllInDataFetchStatus", "_showMarkAllInDataFetchStatus", "_showMarkAllInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("BadgeNumber", "badgeNumberIn", "BadgeNumber", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("_badgeNumberInDataFetchStatus", "_badgeNumberInDataFetchStatus", "_badgeNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isLoading", "isLoadingIn", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ShowMarkAll" in inputs) {
                this.variables.showMarkAllIn = inputs.ShowMarkAll;
                if ("_showMarkAllInDataFetchStatus" in inputs) {
                    this.variables._showMarkAllInDataFetchStatus = inputs._showMarkAllInDataFetchStatus;
                }

            }

            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("BadgeNumber" in inputs) {
                this.variables.badgeNumberIn = inputs.BadgeNumber;
                if ("_badgeNumberInDataFetchStatus" in inputs) {
                    this.variables._badgeNumberInDataFetchStatus = inputs._badgeNumberInDataFetchStatus;
                }

            }

            if ("isLoading" in inputs) {
                this.variables.isLoadingIn = inputs.isLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Updates.UpdateItem_Header");
});
define("UBTConnect.Directory_Updates.UpdateItem_Header.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Updates.UpdateItem_Header.mvc$model", "UBTConnect.Directory_Updates.UpdateItem_Header.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Updates_UpdateItem_Header_mvc_model, UBTConnect_Directory_Updates_UpdateItem_Header_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "Directory_Updates.UpdateItem_Header";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Updates_UpdateItem_Header_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Updates_UpdateItem_Header_mvc_controller;
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
                    ExtendedClasses: "updates-list__header",
                    Options: model.getCachedValue(idService.getId("X310FqMCikyDhxukES_m3Q.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                return rec;
                            }();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral4;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.large;
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
                        return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                            inputs: {
                                ColumnOptions: model.getCachedValue(idService.getId("4APaylJbyUahnfjvHbSY4Q.ColumnOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
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
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                        inputs: {
                                            In_IsLoading: model.variables.isLoadingIn,
                                            _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus)
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
                                        placeholders: {
                                            placeholder_LoadingSection: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                    inputs: {
                                                        IsIconOnRight: true,
                                                        TextOptions: model.getCachedValue(idService.getId("WGMTx7gczUCLwJn4JqflfA.TextOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                                rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                return rec;
                                                            }();
                                                        }),
                                                        Text: model.variables.titleIn,
                                                        _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus),
                                                        SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall
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
                                                    placeholders: {
                                                        icon: new PlaceholderContent(function() {
                                                            return [$if((model.variables.badgeNumberIn > 0), false, this, function() {
                                                                return [React.createElement(UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, {
                                                                    inputs: {
                                                                        Color: UBTConnectModel.staticEntities.uBT_Color.redDark,
                                                                        Number: OS.BuiltinFunctions.integerToLongInteger(model.variables.badgeNumberIn),
                                                                        _numberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._badgeNumberInDataFetchStatus),
                                                                        MaxNumber: 9,
                                                                        Size: UBTConnectModel.staticEntities.uBT_Size.extraSmall
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
                                                            }, function() {
                                                                return [];
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables._badgeNumberInDataFetchStatus), asPrimitiveValue(model.variables.badgeNumberIn)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.badgeNumberIn), asPrimitiveValue(model.variables._badgeNumberInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn)]
                                    })];
                                }),
                                right: new PlaceholderContent(function() {
                                    return [$if(model.variables.showMarkAllIn, false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "text-align: right;"
                                            },
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                            inputs: {
                                                In_Text: "Mark All as Read",
                                                In_TextOptions: model.getCachedValue(idService.getId("48wlrfvYCkW8Iy2WgzDDdQ.In_TextOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomText Clicked");
                                                        controller.click_MarkAll$Action(controller.callContext(eventHandlerContext));
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
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }))];
                                    }, function() {
                                        return [];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.showMarkAllIn), asPrimitiveValue(model.variables.badgeNumberIn), asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables._showMarkAllInDataFetchStatus), asPrimitiveValue(model.variables._badgeNumberInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.showMarkAllIn), asPrimitiveValue(model.variables.badgeNumberIn), asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables._showMarkAllInDataFetchStatus), asPrimitiveValue(model.variables._badgeNumberInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Updates.UpdateItem_Header.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Updates.UpdateItem_Header.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Updates_UpdateItem_Header_mvc_Debugger) {
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

        Controller.prototype.click_MarkAll$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg:C9xuQgCNB04qKzk88z0W5Q", "UBTConnect", "Directory_Updates", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uE1yrDx7zESD3EFsppEsyw:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.uE1yrDx7zESD3EFsppEsyw:62xmEbf4uKGPk820r4bpcQ", "UBTConnect", "UpdateItem_Header", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uE1yrDx7zESD3EFsppEsyw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg", callContext.id);
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

define("UBTConnect.Directory_Updates.UpdateItem_Header.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "xz2zFg7C4U2vBPFXMcbM4g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showMarkAllIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "iG52728v9kW6mFcb1+2p3A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.titleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "8Syl8GmwPUyg9TLoS+unfA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.badgeNumberIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "zAmaXMnEz0if+lOKI1AKJQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "F7P8UW6YLUuLp_8EcXK3Rw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "IyDntbrK7EuECK7sT87lMg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "gZWAN0XcWkKmx2KQmDkT7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "UCaDZ7bjPUuy3mHkLYOKxg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "Gpr+ovPfv0ip1YLcc+TefA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasBadge"));
                })(varBag.model, idService);
            }
        },
        "hdTFUpIaSEaBUvRcj2eqVA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "JyYepxGzxE2zfacIeWTqXg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_ShowMarkAll"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});