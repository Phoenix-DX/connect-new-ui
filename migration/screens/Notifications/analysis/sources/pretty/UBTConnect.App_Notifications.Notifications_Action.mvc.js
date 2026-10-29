define("UBTConnect.App_Notifications.Notifications_Action.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsOnlyShowUnRead", "isOnlyShowUnReadVar", "IsOnlyShowUnRead", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("HaveFiltersApplied", "haveFiltersAppliedIn", "HaveFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_haveFiltersAppliedInDataFetchStatus", "_haveFiltersAppliedInDataFetchStatus", "_haveFiltersAppliedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("BottomSheetId", "bottomSheetIdIn", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_bottomSheetIdInDataFetchStatus", "_bottomSheetIdInDataFetchStatus", "_bottomSheetIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isLoaded", "isLoadedIn", "isLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isLoadedInDataFetchStatus", "_isLoadedInDataFetchStatus", "_isLoadedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShowSubscriptionOnClick", "showSubscriptionOnClickIn", "ShowSubscriptionOnClick", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_showSubscriptionOnClickInDataFetchStatus", "_showSubscriptionOnClickInDataFetchStatus", "_showSubscriptionOnClickInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return {
                Switch_IsOnlyShowUnRead: OS.Model.ValidationWidgetRecord
            };
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return true;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("HaveFiltersApplied" in inputs) {
                this.variables.haveFiltersAppliedIn = inputs.HaveFiltersApplied;
                if ("_haveFiltersAppliedInDataFetchStatus" in inputs) {
                    this.variables._haveFiltersAppliedInDataFetchStatus = inputs._haveFiltersAppliedInDataFetchStatus;
                }

            }

            if ("BottomSheetId" in inputs) {
                this.variables.bottomSheetIdIn = inputs.BottomSheetId;
                if ("_bottomSheetIdInDataFetchStatus" in inputs) {
                    this.variables._bottomSheetIdInDataFetchStatus = inputs._bottomSheetIdInDataFetchStatus;
                }

            }

            if ("isLoaded" in inputs) {
                this.variables.isLoadedIn = inputs.isLoaded;
                if ("_isLoadedInDataFetchStatus" in inputs) {
                    this.variables._isLoadedInDataFetchStatus = inputs._isLoadedInDataFetchStatus;
                }

            }

            if ("ShowSubscriptionOnClick" in inputs) {
                this.variables.showSubscriptionOnClickIn = inputs.ShowSubscriptionOnClick;
                if ("_showSubscriptionOnClickInDataFetchStatus" in inputs) {
                    this.variables._showSubscriptionOnClickInDataFetchStatus = inputs._showSubscriptionOnClickInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Notifications.Notifications_Action");
});
define("UBTConnect.App_Notifications.Notifications_Action.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.Notifications_Action.mvc$model", "UBTConnect.App_Notifications.Notifications_Action.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, React, OSView, UBTConnect_App_Notifications_Notifications_Action_mvc_model, UBTConnect_App_Notifications_Notifications_Action_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view) {
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
        View.displayName = "App_Notifications.Notifications_Action";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Notifications_Notifications_Action_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Notifications_Notifications_Action_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("ajZXFr3jO0C4Gs1F8LLROg.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                                ColumnOptions: model.getCachedValue(idService.getId("gg8yAQrF80aw6qJkqJLBOg.ColumnOptions"), function() {
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
                                            In_IsLoading: !(model.variables.isLoadedIn),
                                            _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadedInDataFetchStatus)
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
                                                return [$if(model.variables.haveFiltersAppliedIn, false, this, function() {
                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                        inputs: {
                                                            In_ExtendedClasses: "header-filter-enabled",
                                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.errorFill,
                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14,
                                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.red
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
                                                    })];
                                                }, function() {
                                                    return [];
                                                }), React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "display-flex",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                    inputs: {
                                                        TextOptions: model.getCachedValue(idService.getId("njMytjYet0OlR29x+EvU2A.TextOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
                                                                return rec;
                                                            }();
                                                        }),
                                                        Text: "Sort"
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        clicked$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
                                                                    return controller.iconClick$Action(controller.callContext(eventHandlerContext));
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
                                                        uuid: "5",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        icon: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                inputs: {
                                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.tune,
                                                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary,
                                                                    In_Visible: true
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    click$Action: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                                return controller.iconClick$Action(controller.callContext(eventHandlerContext));
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
                                                                    uuid: "6",
                                                                    alias: "6"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: []
                                                }), React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                    inputs: {
                                                        In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                        In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.expandMore,
                                                        In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary,
                                                        In_Visible: true
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        click$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                    return controller.iconClick$Action(controller.callContext(eventHandlerContext));
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
                                                        uuid: "7",
                                                        alias: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }))];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables._haveFiltersAppliedInDataFetchStatus), asPrimitiveValue(model.variables.haveFiltersAppliedIn)]
                                    })];
                                }),
                                right: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                        inputs: {
                                            In_IsLoading: !(model.variables.isLoadedIn),
                                            _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadedInDataFetchStatus)
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
                                            placeholder_LoadingSection: new PlaceholderContent(function() {
                                                return [$if(model.variables.haveFiltersAppliedIn, false, this, function() {
                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                        inputs: {
                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14,
                                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.red,
                                                            In_ExtendedClasses: "header-filter-enabled",
                                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.errorFill
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
                                                            uuid: "9",
                                                            alias: "9"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, function() {
                                                    return [];
                                                }), React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "display-flex",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "10"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Label, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    style: "margin-right-s",
                                                    targetWidget: "Switch_IsOnlyShowUnRead",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "11"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, "Only show unread"), React.createElement(OSWidgets.Switch, {
                                                    _validationProps: {
                                                        validationService: validationService
                                                    },
                                                    enabled: true,
                                                    onChange: function() {
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_Action/Switch_IsOnlyShowUnRead OnChange");
                                                                return controller.switch_IsOnlyShowUnReadOnChange$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });
                                                        });;
                                                    },
                                                    style: "switch",
                                                    variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.isOnlyShowUnReadVar, function(value) {
                                                        model.variables.isOnlyShowUnReadVar = value;
                                                    }),
                                                    _idProps: {
                                                        service: idService,
                                                        name: "Switch_IsOnlyShowUnRead"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }))];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isOnlyShowUnReadVar), asPrimitiveValue(model.variables._haveFiltersAppliedInDataFetchStatus), asPrimitiveValue(model.variables.haveFiltersAppliedIn)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isOnlyShowUnReadVar), asPrimitiveValue(model.variables.haveFiltersAppliedIn), asPrimitiveValue(model.variables._haveFiltersAppliedInDataFetchStatus), asPrimitiveValue(model.variables._isLoadedInDataFetchStatus), asPrimitiveValue(model.variables.isLoadedIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isOnlyShowUnReadVar), asPrimitiveValue(model.variables.haveFiltersAppliedIn), asPrimitiveValue(model.variables._haveFiltersAppliedInDataFetchStatus), asPrimitiveValue(model.variables._isLoadedInDataFetchStatus), asPrimitiveValue(model.variables.isLoadedIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Notifications.Notifications_Action.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.Notifications_Action.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_Notifications_Action_mvc_Debugger) {
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
        Controller.prototype._switch_IsOnlyShowUnReadOnChange$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Switch_IsOnlyShowUnReadOnChange");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NxjMQeg4bkyHbZHNIMPDeg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.GXj19dftHUWJ27tmruXUkg/ClientActions.NxjMQeg4bkyHbZHNIMPDeg:Lqcmlld2skv+y6poArZ8Bw", "UBTConnect", "Switch_IsOnlyShowUnReadOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7IxkB3O4B06UIN4pfeBiMA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Kcs26omCUkGSewE4rALTJw", callContext.id);
                // Trigger Event: OnlyShowUnread
                return controller.onlyShowUnread$Action(model.variables.isOnlyShowUnReadVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:euIhXFkcyU+rgkkfUFTkNg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NxjMQeg4bkyHbZHNIMPDeg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NxjMQeg4bkyHbZHNIMPDeg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._iconClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("IconClick");
            callContext = controller.callContext(callContext);
            var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.bottomSheetOpenVar = bottomSheetOpenVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3l7UZrEpZ0STjVSq+5odRA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.GXj19dftHUWJ27tmruXUkg/ClientActions.3l7UZrEpZ0STjVSq+5odRA:mNHNOe6yYrXR0Mr0aFRT8g", "UBTConnect", "IconClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YxVsbmUPqku40iWbpGmp2g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:spu3NRY64UCGueD1PXMc7A", callContext.id) && model.variables.isLoadedIn)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jAf8qViwskuby8VYS7UhKA", callContext.id) && model.variables.showSubscriptionOnClickIn)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E1wu05vsm0KzHJeboeaMig", callContext.id);
                                // Execute Action: App_Subscription_ShowUpgradePopUp
                                model.flush();
                                return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ga_4NMNl7kKhwKBAAAXciQ", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VDl_wSlUe0CZ+QoAOFTaqw", callContext.id);
                                // Execute Action: BottomSheetOpen
                                bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.bottomSheetIdIn, callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZnmhBBIwrkKMl2Ox3rKkoQ", callContext.id);
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r9F586vOU0+PguqvFynSgw", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3l7UZrEpZ0STjVSq+5odRA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3l7UZrEpZ0STjVSq+5odRA", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.switch_IsOnlyShowUnReadOnChange$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._switch_IsOnlyShowUnReadOnChange$Action, callContext);

        };
        Controller.prototype.iconClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._iconClick$Action, callContext);

        };
        Controller.prototype.onlyShowUnread$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:sMKFKooX6A1nm6D_Lsn4Wg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GXj19dftHUWJ27tmruXUkg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.GXj19dftHUWJ27tmruXUkg:v1xq4NASuxg9ZAToa4mY1g", "UBTConnect", "Notifications_Action", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GXj19dftHUWJ27tmruXUkg", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
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

define("UBTConnect.App_Notifications.Notifications_Action.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "VDl_wSlUe0CZ+QoAOFTaqw": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetOpenVar.value;
            }
        },
        "3FovpFAkJkCMod316Nl+_w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isOnlyShowUnReadVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "5Tcp2hE8tEGr34lkbKHbWg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.haveFiltersAppliedIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "LP0g3_1PsEeyA18DrT5ylQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "h6XEA8j2LEKPrJOLypIDzQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadedIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "7jYqIH6ewUOE3N5q6mL9bg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showSubscriptionOnClickIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "xdz491T6iUi1u5B3juQuPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "tmA6Ul32Ik6_M3Rxs7zzmw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "KMdOQJlV+0SNgP6bdwgjZg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "_U4apyuQhESoxSaY51iL4w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HaveFiltersApplied"));
                })(varBag.model, idService);
            }
        },
        "ewBoUpYI5ESaJbdTN7T+BQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "s8CBxp4gqUq_ynBubc2hvw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "tv+eiqo1rU2f66Qn+VxSkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "i_D2rCJZekq19XtIXr1Gpg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HaveFiltersApplied2"));
                })(varBag.model, idService);
            }
        },
        "+T_olw1jk0qLqazUbBFNGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Switch_IsOnlyShowUnRead"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});