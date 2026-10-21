define("UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "OutSystemsUI_2_23.model", "Connect_Household_CS.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "UBTConnect.controller", "OutSystemsUI_2_23.Interaction.Carousel.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Item.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$model", "UBTConnect.model$AutoplaySettingsRec", "OutSystemsUI_2_23.model$SplideConfigsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_PhotobookHouseholdList", "UBTConnect.model$SelectedHouseholdRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$CarouselToggleDrag", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.controller$SetSplideConfigs", "OutSystemsUI_2_23.controller$CarouselGoTo", "OutSystemsUI_2_23.controller$SetSplideEvent", "UBTConnect.controller$Carousel_SetCurrentPosition", "UBTConnect.model$LongIntegerIntegerRecord"], function(OutSystems, UBTConnectModel, OutSystemsUI_2_23Model, Connect_Household_CSModel, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, UBTConnectController, OutSystemsUI_2_23_Interaction_Carousel_mvcModel, UBTConnect_Directory_Photobook_Photobook_Item_mvcModel, UBTConnect_Directory_Photobook_Photobook_Options_Left_mvcModel, UBTConnect_Directory_Photobook_Photobook_Options_Right_mvcModel, UBTConnect_Directory_Photobook_Photobook_Options_Player_mvcModel, UBTConnect_Directory_Photobook_Photobook_Gallery_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("StartingPosition", "startingPositionVar", "StartingPosition", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("IsZoomedIn", "isZoomedInVar", "IsZoomedIn", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "photobook-carousel";
                }, false),
                this.attr("AutoplaySettings", "autoplaySettingsVar", "AutoplaySettings", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.AutoplaySettingsRec());
                }, false, UBTConnectModel.AutoplaySettingsRec),
                this.attr("CarouselConfigs", "carouselConfigsVar", "CarouselConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SplideConfigsRec());
                }, false, OutSystemsUI_2_23Model.SplideConfigsRec),
                this.attr("CurrentPosition", "currentPositionVar", "CurrentPosition", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("CurrentHousehold", "currentHouseholdVar", "CurrentHousehold", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_PhotobookHouseholdRec());
                }, false, Connect_Household_CSModel.UI_PhotobookHouseholdRec),
                this.attr("IsShow", "isShowVar", "IsShow", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("TimerDuration", "timerDurationVar", "TimerDuration", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 5000;
                }, false),
                this.attr("CurrentTimer", "currentTimerVar", "CurrentTimer", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("IsReplaying", "isReplayingVar", "IsReplaying", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_Households", "in_HouseholdsIn", "In_Households", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_PhotobookHouseholdList());
                }, false, UBTConnectModel.UI_PhotobookHouseholdList),
                this.attr("_in_HouseholdsInDataFetchStatus", "_in_HouseholdsInDataFetchStatus", "_in_HouseholdsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_SelectedHousehold", "in_SelectedHouseholdIn", "In_SelectedHousehold", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SelectedHouseholdRec());
                }, false, UBTConnectModel.SelectedHouseholdRec),
                this.attr("_in_SelectedHouseholdInDataFetchStatus", "_in_SelectedHouseholdInDataFetchStatus", "_in_SelectedHouseholdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((OutSystemsUI_2_23_Interaction_Carousel_mvcModel.hasValidationWidgets || UBTConnect_Directory_Photobook_Photobook_Item_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Photobook_Photobook_Options_Left_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Photobook_Photobook_Options_Right_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Photobook_Photobook_Options_Player_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Photobook_Photobook_Gallery_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Households" in inputs) {
                this.variables.in_HouseholdsIn = inputs.In_Households;
                if ("_in_HouseholdsInDataFetchStatus" in inputs) {
                    this.variables._in_HouseholdsInDataFetchStatus = inputs._in_HouseholdsInDataFetchStatus;
                }

            }

            if ("In_SelectedHousehold" in inputs) {
                this.variables.in_SelectedHouseholdIn = inputs.In_SelectedHousehold;
                if ("_in_SelectedHouseholdInDataFetchStatus" in inputs) {
                    this.variables._in_SelectedHouseholdInDataFetchStatus = inputs._in_SelectedHouseholdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook_Carousel");
});
define("UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "Connect_Household_CS.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.Carousel.mvc$view", "UBTConnect.Directory_Photobook.Photobook_Item.mvc$view", "UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$view", "UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$view", "UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$view", "UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$view", "UBTConnect.model$AutoplaySettingsRec", "OutSystemsUI_2_23.model$SplideConfigsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_PhotobookHouseholdList", "UBTConnect.model$SelectedHouseholdRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$CarouselToggleDrag", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.controller$SetSplideConfigs", "OutSystemsUI_2_23.controller$CarouselGoTo", "OutSystemsUI_2_23.controller$SetSplideEvent", "UBTConnect.controller$Carousel_SetCurrentPosition", "UBTConnect.model$LongIntegerIntegerRecord"], function(OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, Connect_Household_CSModel, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, React, OSView, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_model, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller, UBTConnectClientVariables, OSWidgets, OutSystemsUI_2_23_Interaction_Carousel_mvc_view, UBTConnect_Directory_Photobook_Photobook_Item_mvc_view, UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_view, UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_view, UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_view, UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook_Carousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_Carousel_mvc_view, UBTConnect_Directory_Photobook_Photobook_Item_mvc_view, UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_view, UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_view, UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_view, UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.variables.mainContainerClassVar,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Carousel_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Carousel/Carousel_Touch_Cont onclick");
                            controller.handler_ScreenClick$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                style: (model.variables.mainContainerClassVar + "--touch"),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Carousel_Touch_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_2_23_Interaction_Carousel_mvc_view, {
                inputs: {
                    ExtendedClass: (model.variables.mainContainerClassVar + "--carousel"),
                    Navigation: UBTConnectModel.staticEntities.carouselNavigation.none,
                    OptionalConfigs: model.getCachedValue(idService.getId("Carousel_Photobook.OptionalConfigs"), function() {
                        return function() {
                            var rec = new OutSystemsUI_2_23Model.CarouselOptionalConfigsRec();
                            rec.autoPlayAttr = model.variables.autoplaySettingsVar.isEnabledAttr;
                            rec.loopAttr = false;
                            rec.startingPositionAttr = model.variables.startingPositionVar;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.autoplaySettingsVar.isEnabledAttr;
                    }, function() {
                        return model.variables.startingPositionVar;
                    })
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onSlideMoved$Action: function(carouselIdIn, itemIndexIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/Carousel OnSlideMoved");
                            controller.carousel_OnSlideMoved$Action(carouselIdIn, itemIndexIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    initialized$Action: function(carouselIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/Carousel Initialized");
                            controller.onInitialize_Carousel$Action(carouselIdIn, controller.callContext(eventHandlerContext));
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
                    name: "Carousel_Photobook",
                    alias: "1"
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
                            source: model.variables.in_HouseholdsIn,
                            style: (("list list-group " + model.variables.mainContainerClassVar) + "--list"),
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdsInDataFetchStatus),
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(UBTConnect_Directory_Photobook_Photobook_Item_mvc_view, {
                                        inputs: {
                                            In_MainContainerClass: model.variables.mainContainerClassVar,
                                            In_Household: model.variables.in_HouseholdsIn.getCurrent(callContext.iterationContext),
                                            _in_HouseholdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdsInDataFetchStatus)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            zoomIn$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Item ZoomIn");
                                                    controller.handler_ZoomIn$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });

                                                ;
                                            },
                                            minZoomReached$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Item MinZoomReached");
                                                    controller.handler_MinZoomReached$Action(controller.callContext(eventHandlerContext));
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
                                            uuid: "4",
                                            alias: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(model.variables._in_HouseholdsInDataFetchStatus), asPrimitiveValue(model.variables.mainContainerClassVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables._in_HouseholdsInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdsIn)]
            })), React.createElement(UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_view, {
                inputs: {
                    In_MainContainerClass: model.variables.mainContainerClassVar,
                    In_IsShow: model.variables.isShowVar,
                    In_CurrentHousehold: model.variables.currentHouseholdVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    sheetIsOpen$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Left SheetIsOpen");
                            controller.handler_SheetIsOpen$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    closed$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Left Closed");
                            controller.handler_SheetIsClosed$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "5",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_view, {
                inputs: {
                    In_CurrentSpeed: model.variables.autoplaySettingsVar.speedAttr,
                    In_MainContainerClass: model.variables.mainContainerClassVar,
                    In_IsShow: model.variables.isShowVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    closed$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Right Closed");
                            controller.handler_SheetIsClosed$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    closePhotobook$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Right ClosePhotobook");
                                return controller.handler_ClosePhotobook$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    setSpeed$Action: function(event_SelectedSpeedIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Right SetSpeed");
                            controller.handler_ChangeSpeed$Action(event_SelectedSpeedIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    sheetIsOpen$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Right SheetIsOpen");
                            controller.handler_SheetIsOpen$Action(controller.callContext(eventHandlerContext));
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
                    alias: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_view, {
                inputs: {
                    In_MainContainerClass: model.variables.mainContainerClassVar,
                    In_IsShow: model.variables.isShowVar,
                    In_IsFinalItem: ((model.variables.currentPositionVar + 1) === model.variables.in_HouseholdsIn.length),
                    _in_IsFinalItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdsInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function(event_IsPlayIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Player Clicked");
                            controller.handler_PlayerClicked$Action(event_IsPlayIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    replay$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Options_Player Replay");
                            controller.handler_ReplayCarousel$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "7",
                    alias: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_view, {
                inputs: {
                    In_IsShow: model.variables.isShowVar,
                    In_SelectedPosition: model.variables.currentPositionVar,
                    In_LocalityHouseholdIds: model.getCachedValue(idService.getId("vqkS03XZeUuXTxE0wBSBKw.In_LocalityHouseholdIds"), function() {
                        return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.in_HouseholdsIn, new OS.DataTypes.LongIntegerList(), function(source, target) {
                            target = source.householdIdAttr;
                            return target;
                        });
                    }, function() {
                        return model.variables.in_HouseholdsIn;
                    }),
                    _in_LocalityHouseholdIdsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdsInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function(event_SelectedHouseholdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Gallery Clicked");
                            controller.handler_ClickedGalleryItem$Action(OS.DataConversion.JSConversions.typeConvertRecord(event_SelectedHouseholdIn, new UBTConnectModel.LongIntegerIntegerRecord(), function(source, target) {
                                target.idAttr = source.idAttr;
                                target.positionAttr = source.positionAttr;
                                return target;
                            }), controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    listTouchStart$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Gallery ListTouchStart");
                            controller.stopInactivityTimer$Action(false, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    listTouchEnd$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Gallery ListTouchEnd");
                            controller.startInactivityTimer$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "8",
                    alias: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "Connect_Household_CS.model", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$debugger", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller.StopInactivityTimer.ClearTimerJS", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller.StartInactivityTimer.StartTimerJS", "UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller.OnInitialize_Carousel.GetSplideCallbacksJS", "UBTConnect.model$AutoplaySettingsRec", "OutSystemsUI_2_23.model$SplideConfigsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_PhotobookHouseholdList", "UBTConnect.model$SelectedHouseholdRec", "OutSystemsUI_2_23.model$CarouselItemsRec", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$CarouselToggleDrag", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.controller$SetSplideConfigs", "OutSystemsUI_2_23.controller$CarouselGoTo", "OutSystemsUI_2_23.controller$SetSplideEvent", "UBTConnect.controller$Carousel_SetCurrentPosition", "UBTConnect.model$LongIntegerIntegerRecord"], function(OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, Connect_Household_CSModel, OutSystemsUI_2_23Controller, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_Debugger, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller_StopInactivityTimer_ClearTimerJS, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller_StartInactivityTimer_StartTimerJS, UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller_OnInitialize_Carousel_GetSplideCallbacksJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                setShowOptions$Action: function(isToShowIn) {
                    isToShowIn = (isToShowIn === undefined) ? false : isToShowIn;
                    return controller.executeActionInsideJSNode(controller._setShowOptions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isToShowIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "SetShowOptions");
                },
                splideEvent_Moved$Action: function(newIndexIn, previousIndexIn, destinationIndexIn) {
                    newIndexIn = (newIndexIn === undefined) ? 0 : newIndexIn;
                    previousIndexIn = (previousIndexIn === undefined) ? 0 : previousIndexIn;
                    destinationIndexIn = (destinationIndexIn === undefined) ? 0 : destinationIndexIn;
                    return controller.executeActionInsideJSNode(controller._splideEvent_Moved$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(newIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(previousIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(destinationIndexIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "SplideEvent_Moved");
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
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VoxgCaNpiE6RE7VVbB75FQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.VoxgCaNpiE6RE7VVbB75FQ:LIOcXrpFzyIC0A7tgOC4Cw", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:82Z5z0IooUGfa4ytXYeFEw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YfgutBze0E667oXfKi+Frw", callContext.id);
                // Execute Action: StartInactivityTimer
                controller._startInactivityTimer$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wrELfu1tWU2KAaFKb_3eMQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VoxgCaNpiE6RE7VVbB75FQ", callContext.id);
            }

        };
        Controller.prototype._handler_ZoomIn$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ZoomIn");
            callContext = controller.callContext(callContext);
            var carouselToggleDragVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.carouselToggleDragVar = carouselToggleDragVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ocuHD9oCcki_c5ANRZap4w:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.ocuHD9oCcki_c5ANRZap4w:b+eU03jDnCZtfI9fMBGkIg", "UBTConnect", "Handler_ZoomIn", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TP3ekVnCA06uxNMktv7wDQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ML+i3wAenE+Yy9bE8ten+Q", callContext.id);
                // IsZoomedIn = True
                model.variables.isZoomedInVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cjSXQ3sYkkiYV3nKk+yDFA", callContext.id);
                // Execute Action: CarouselToggleDrag
                carouselToggleDragVar.value = OutSystemsUI_2_23Controller.default.carouselToggleDrag$Action(idService.getId("Carousel_Photobook"), false, callContext);

                // Success?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R6__LqjWZk6D__scWxJ+Mg", callContext.id) && carouselToggleDragVar.value.successOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_R1g0et8p0atJiVoLcQU7w", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F_fo1z2YCEaD6VMs4Dv09Q", callContext.id);
                    // Execute Action: JSUtils_Console_Log
                    UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action(((("Carousel Toggle Drag Error - Code: " + carouselToggleDragVar.value.errorMessageOut.codeAttr) + " | Message: ") + carouselToggleDragVar.value.errorMessageOut.messageAttr), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_R1g0et8p0atJiVoLcQU7w", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ocuHD9oCcki_c5ANRZap4w", callContext.id);
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CDaqHcHaFEmNuQ6ZhWCaMA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.CDaqHcHaFEmNuQ6ZhWCaMA:ULCeqSU7qcyBv6Kmyckurg", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:43hUb3Yh3EqKiyigf7s+pw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_HeGkzpWMEiSWVo1LVaI6g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CDaqHcHaFEmNuQ6ZhWCaMA", callContext.id);
            }

        };
        Controller.prototype._setCarouselConfigs$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetCarouselConfigs");
            callContext = controller.callContext(callContext);
            var setSplideConfigsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.setSplideConfigsVar = setSplideConfigsVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8p1DKg4M5UuqLb7BtLYiXw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.8p1DKg4M5UuqLb7BtLYiXw:KFmtFuLigAI7zqvKYDK5vw", "UBTConnect", "SetCarouselConfigs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_wpXTguHT0i7P_zTPSbyJw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e9PKvVqDvEabqGm6LmDGMQ", callContext.id);
                // Execute Action: SetSplideConfigs
                setSplideConfigsVar.value = OutSystemsUI_2_23Controller.default.setSplideConfigs$Action(idService.getId("Carousel_Photobook"), model.variables.carouselConfigsVar, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l5KeZQCQQEuquEswYxxsEA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8p1DKg4M5UuqLb7BtLYiXw", callContext.id);
            }

        };
        Controller.prototype._handler_ClosePhotobook$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ClosePhotobook");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LmOTL+_nQ0SeYyPMfNFoDg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.LmOTL+_nQ0SeYyPMfNFoDg:lqL4j56quPoLzjXXd5xocw", "UBTConnect", "Handler_ClosePhotobook", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cImMeBQPf0GwRyZRS+704g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IhNJHWOhUEShPIfMdqVJ_A", callContext.id);
                // Execute Action: StopInactivityTimer
                controller._stopInactivityTimer$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:seRs3EbAQ02vqAyYZHsKVg", callContext.id);
                // Trigger Event: ClosePhotobook
                return controller.closePhotobook$Action(model.variables.currentHouseholdVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Czyj+Z1sKEKZL9wIRW9OHQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LmOTL+_nQ0SeYyPMfNFoDg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LmOTL+_nQ0SeYyPMfNFoDg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_ReplayCarousel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ReplayCarousel");
            callContext = controller.callContext(callContext);
            var carouselGoToVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.carouselGoToVar = carouselGoToVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eeA+MxaNN0y7ecWHJJADdA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.eeA+MxaNN0y7ecWHJJADdA:OajucOQGrSyKaWaeg9trzA", "UBTConnect", "Handler_ReplayCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KLwdDJfIG0OoOAeBuEul8g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sup7yDNVPUKxeTwcBd5X2Q", callContext.id);
                // Execute Action: StopInactivityTimer
                controller._stopInactivityTimer$Action(true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Yft4HO5IM0uQnCrRBWkZaw", callContext.id);
                // IsReplaying = True
                model.variables.isReplayingVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XodOAO9nEEenbK4cNOunmg", callContext.id);
                // Execute Action: CarouselGoTo
                carouselGoToVar.value = OutSystemsUI_2_23Controller.default.carouselGoTo$Action(idService.getId("Carousel_Photobook"), 0, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DaXYMyrqjU2+WoXKhEOvhg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eeA+MxaNN0y7ecWHJJADdA", callContext.id);
            }

        };
        Controller.prototype._checkForAutoplayRestart$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CheckForAutoplayRestart");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Dug5PAC9SUOztnF1pzjVXA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.Dug5PAC9SUOztnF1pzjVXA:HzYmIDU9JtcQGRHT6c2mIQ", "UBTConnect", "CheckForAutoplayRestart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KtaYw+CwiEC4RtBEZoCOuw", callContext.id);
                // Is Autoplay?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sd0k3YPDrUCI2d0XofdoHg", callContext.id) && model.variables.autoplaySettingsVar.isEnabledAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UzY_HNEYDUequ6u9Ngj6sQ", callContext.id);
                } else {
                    // Is Temporarily Paused?
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ihSxEZ7Di0KlKFuKRHj92g", callContext.id) && model.variables.autoplaySettingsVar.isTemporarilyPausedAttr)) {
                        // Restart Autoplay
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3ntaxg8pJ0Oi8M2+2lKSNQ", callContext.id);
                        // AutoplaySettings.IsEnabled = True
                        model.variables.autoplaySettingsVar.isEnabledAttr = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3ntaxg8pJ0Oi8M2+2lKSNQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // AutoplaySettings.IsTemporarilyPaused = False
                        model.variables.autoplaySettingsVar.isTemporarilyPausedAttr = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S6i_0nAu7E6lrsyvduK3VA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UzY_HNEYDUequ6u9Ngj6sQ", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Dug5PAC9SUOztnF1pzjVXA", callContext.id);
            }

        };
        Controller.prototype._stopInactivityTimer$Action = function(startNewIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("StopInactivityTimer");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.StopInactivityTimer$vars"))());
            vars.value.startNewInLocal = startNewIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ojc5Pr0U20uemtFEgMV6xw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.ojc5Pr0U20uemtFEgMV6xw:Ii3UtzmnaKl1URAsyNUD8w", "UBTConnect", "StopInactivityTimer", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wmwmgw9Q+ki0WBb7pRx2Mw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ToV0Q4s+9EeQGSEo9vox9Q", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller_StopInactivityTimer_ClearTimerJS, "ClearTimer", "StopInactivityTimer", {
                    TimerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.currentTimerVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t0xaXC16P0aGvPgRDZH7vg", callContext.id);
                // CurrentTimer = NullObject
                model.variables.currentTimerVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tc7p_kMHHEmxIv0V2qd1jw", callContext.id);
                // Execute Action: SetShowOptions
                controller._setShowOptions$Action(true, callContext);
                // Is Start New?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bvCBnVc4rEuiK_Gijq6l+Q", callContext.id) && vars.value.startNewInLocal)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KkLRrFQGQkyjzweeYW1yUQ", callContext.id);
                    // Execute Action: StartInactivityTimer
                    controller._startInactivityTimer$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1mEZ6Dp7s0aQzONOrbD4sg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jEytTr5Ap0C5qEuL_8B1Eg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ojc5Pr0U20uemtFEgMV6xw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.StopInactivityTimer$vars", [{
            name: "StartNew",
            attrName: "startNewInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._startInactivityTimer$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("StartInactivityTimer");
            callContext = controller.callContext(callContext);
            var startTimerJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.startTimerJSResult = startTimerJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AdV2QElqCkS2FiW16iiNWw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.AdV2QElqCkS2FiW16iiNWw:EML_KaCCrnzE1Y34voeqpQ", "UBTConnect", "StartInactivityTimer", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DLxQUW1fhEGNWeEW3kwe1Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yt1NfibmzUq8L+hcIhjjpw", callContext.id);
                startTimerJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller_StartInactivityTimer_StartTimerJS, "StartTimer", "StartInactivityTimer", {
                    Duration: OS.DataConversion.JSNodeParamConverter.to(model.variables.timerDurationVar, OS.DataTypes.DataTypes.Integer),
                    TimerObj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.StartInactivityTimer$startTimerJSResult"))();
                    jsNodeResult.timerObjOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TimerObj, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    SetShowOptions: controller.clientActionProxies.setShowOptions$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZDYy2gpetkOyARRR2WtKgg", callContext.id);
                // CurrentTimer = StartTimer.TimerObj
                model.variables.currentTimerVar = startTimerJSResult.value.timerObjOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6U0ictofj0uye6YRmvzxPQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AdV2QElqCkS2FiW16iiNWw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.StartInactivityTimer$startTimerJSResult", [{
            name: "TimerObj",
            attrName: "timerObjOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._setShowOptions$Action = function(isToShowIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetShowOptions");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.SetShowOptions$vars"))());
            vars.value.isToShowInLocal = isToShowIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:F8XaZa8mn0OnSufCz24R4g:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.F8XaZa8mn0OnSufCz24R4g:6Wp+kgLK1eRkiHrg9edt4w", "UBTConnect", "SetShowOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G5FjdSDuU0ure5SIZlUrew", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ki8wvFrIG0Gt03Ttkkw+Bw", callContext.id);
                // IsShow = IsToShow
                model.variables.isShowVar = vars.value.isToShowInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MeC5SJjzcE+ssNGaQD26Hg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:F8XaZa8mn0OnSufCz24R4g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.SetShowOptions$vars", [{
            name: "IsToShow",
            attrName: "isToShowInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onInitialize_Carousel$Action = function(carouselIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize_Carousel");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.OnInitialize_Carousel$vars"))());
            vars.value.carouselIdInLocal = carouselIdIn;
            var movedVar = new OS.DataTypes.VariableHolder();
            var getSplideCallbacksJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.movedVar = movedVar;
            varBag.getSplideCallbacksJSResult = getSplideCallbacksJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:N5u7exmakEWZVbgXOYaYfA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.N5u7exmakEWZVbgXOYaYfA:23jbMvuR1pbymfl4F9uvRg", "UBTConnect", "OnInitialize_Carousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mH6N1A5rU0WQ85tAdukvoA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MLOX8jMjXEysvxs3NgTwVg", callContext.id);
                getSplideCallbacksJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Photobook_Photobook_Carousel_mvc_controller_OnInitialize_Carousel_GetSplideCallbacksJS, "GetSplideCallbacks", "OnInitialize_Carousel", {
                    Moved: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.OnInitialize_Carousel$getSplideCallbacksJSResult"))();
                    jsNodeResult.movedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Moved, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    SplideEvent_Moved: controller.clientActionProxies.splideEvent_Moved$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rb3bQnDSPUyvxluzv_UveQ", callContext.id);
                // Execute Action: Moved
                movedVar.value = OutSystemsUI_2_23Controller.default.setSplideEvent$Action(idService.getId("Carousel_Photobook"), "moved", getSplideCallbacksJSResult.value.movedOut, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O664rx9rC0apWcG5hsmhYQ", callContext.id);
                // Execute Action: SetCarouselConfigs
                controller._setCarouselConfigs$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MWSta1GxxU+t85n2x+F4YQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:N5u7exmakEWZVbgXOYaYfA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.OnInitialize_Carousel$vars", [{
            name: "CarouselId",
            attrName: "carouselIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.OnInitialize_Carousel$getSplideCallbacksJSResult", [{
            name: "Moved",
            attrName: "movedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._handler_ScreenClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ScreenClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hNnlnJ+hykmOAc5XflW4hQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.hNnlnJ+hykmOAc5XflW4hQ:twfbaOq1YqY9OuhQpfOy7A", "UBTConnect", "Handler_ScreenClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fQ_UMQhxUkOXmg2VMCPztg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1kh3F_RCEUOPNYT_yBOkbA", callContext.id);
                // Execute Action: StopInactivityTimer
                controller._stopInactivityTimer$Action(true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wSV8I21e0UOk64KkVO7ZHA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hNnlnJ+hykmOAc5XflW4hQ", callContext.id);
            }

        };
        Controller.prototype._toggleAutoplay$Action = function(in_IsPlayIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleAutoplay");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.ToggleAutoplay$vars"))());
            vars.value.in_IsPlayInLocal = in_IsPlayIn;
            var carouselToggleDrag_DisableVar = new OS.DataTypes.VariableHolder();
            var carouselToggleDrag_EnableVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.carouselToggleDrag_DisableVar = carouselToggleDrag_DisableVar;
            varBag.carouselToggleDrag_EnableVar = carouselToggleDrag_EnableVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dYBhnhTNm0uWuktevwuJ_Q:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.dYBhnhTNm0uWuktevwuJ_Q:C1ocQPZFOLIUiEB7B9BPKQ", "UBTConnect", "ToggleAutoplay", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+qAR8Qwii0utQFZiD81QWw", callContext.id);
                // Set Autoplay Settings
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_S11UT3zEkus3+rVBfTcgg", callContext.id);
                // AutoplaySettings.IsEnabled = In_IsPlay
                model.variables.autoplaySettingsVar.isEnabledAttr = vars.value.in_IsPlayInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_S11UT3zEkus3+rVBfTcgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // AutoplaySettings.IsTemporarilyPaused = False
                model.variables.autoplaySettingsVar.isTemporarilyPausedAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2izdMAi0dEWiOgVDElmD7w", callContext.id);
                // Execute Action: SetCarouselConfigs
                controller._setCarouselConfigs$Action(callContext);
                // Is Autoplay?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aXvT_ndYz0qc8vqDzz_BKw", callContext.id) && model.variables.autoplaySettingsVar.isEnabledAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9hpAfxfDVUep4QXR5+8xuw", callContext.id);
                    // Execute Action: CarouselToggleDrag_Disable
                    carouselToggleDrag_DisableVar.value = OutSystemsUI_2_23Controller.default.carouselToggleDrag$Action(idService.getId("Carousel_Photobook"), false, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qgDg+eXG2E2Q+MhkiiZs0Q", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sAlXwHQvIU2LEwqKOCAbNQ", callContext.id);
                    // Execute Action: CarouselToggleDrag_Enable
                    carouselToggleDrag_EnableVar.value = OutSystemsUI_2_23Controller.default.carouselToggleDrag$Action(idService.getId("Carousel_Photobook"), true, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qgDg+eXG2E2Q+MhkiiZs0Q", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dYBhnhTNm0uWuktevwuJ_Q", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.ToggleAutoplay$vars", [{
            name: "In_IsPlay",
            attrName: "in_IsPlayInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_MinZoomReached$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MinZoomReached");
            callContext = controller.callContext(callContext);
            var carouselToggleDragVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.carouselToggleDragVar = carouselToggleDragVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UixFtrNww0e1UbEWqyDrgg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.UixFtrNww0e1UbEWqyDrgg:gEnjPWJO_jADMth3bIAEtg", "UBTConnect", "Handler_MinZoomReached", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L388Dsr2IUK9Ch1Y+vJZ_g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vqWJCVimaU6fneBhmd2anw", callContext.id);
                // Execute Action: CarouselToggleDrag
                carouselToggleDragVar.value = OutSystemsUI_2_23Controller.default.carouselToggleDrag$Action(idService.getId("Carousel_Photobook"), true, callContext);

                // Success?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EuMmtETW0k2Bi5iF6kc3Gw", callContext.id) && carouselToggleDragVar.value.successOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Eak79YloskydkK2UdxoXWA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fiKJQOHxgUqOwAZYkJmWiw", callContext.id);
                    // Execute Action: JSUtils_Console_Log
                    UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action(((("Carousel Toggle Drag Error - Code: " + carouselToggleDragVar.value.errorMessageOut.codeAttr) + " | Message: ") + carouselToggleDragVar.value.errorMessageOut.messageAttr), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Eak79YloskydkK2UdxoXWA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UixFtrNww0e1UbEWqyDrgg", callContext.id);
            }

        };
        Controller.prototype._carousel_OnSlideMoved$Action = function(carouselIdIn, itemIndexIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Carousel_OnSlideMoved");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Carousel_OnSlideMoved$vars"))());
            vars.value.carouselIdInLocal = carouselIdIn;
            vars.value.itemIndexInLocal = itemIndexIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oaCuP_Ph06wnqHSqvEe1w:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.8oaCuP_Ph06wnqHSqvEe1w:OkQvlKFm_gBk2U2hXeYWHw", "UBTConnect", "Carousel_OnSlideMoved", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y5rNAPabY0+w3aH+xzsJ2A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CVWvLniPCE2psG6yUeLafA", callContext.id);
                // CurrentPosition = ItemIndex
                model.variables.currentPositionVar = vars.value.itemIndexInLocal;
                // CurrentHousehold
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r6xYTTFsF0CB2BgXZa4yTw", callContext.id);
                // CurrentHousehold.HouseholdId = In_Households[CurrentPosition].HouseholdId
                model.variables.currentHouseholdVar.householdIdAttr = model.variables.in_HouseholdsIn.getItem(model.variables.currentPositionVar).householdIdAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r6xYTTFsF0CB2BgXZa4yTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CurrentHousehold.HouseholdName = In_Households[CurrentPosition].HouseholdName
                model.variables.currentHouseholdVar.householdNameAttr = model.variables.in_HouseholdsIn.getItem(model.variables.currentPositionVar).householdNameAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r6xYTTFsF0CB2BgXZa4yTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // CurrentHousehold.Locality = In_Households[CurrentPosition].Locality
                model.variables.currentHouseholdVar.localityAttr = model.variables.in_HouseholdsIn.getItem(model.variables.currentPositionVar).localityAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4hUlpaJ3ck60QUL+7NIa5g", callContext.id);
                // Execute Action: Carousel_SetCurrentPosition
                UBTConnectController.default.carousel_SetCurrentPosition$Action(idService.getId("Carousel_Photobook"), model.variables.currentPositionVar, callContext);
                // Is Replaying?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2kcmC0gMCUy5AGLPPg1+hQ", callContext.id) && (model.variables.isReplayingVar && (model.variables.currentPositionVar === 0)))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3hnxHmKO2US5O+XwzH4SVQ", callContext.id);
                    // IsReplaying = False
                    model.variables.isReplayingVar = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SlflEYVmYEy+xEKLo3JKqQ", callContext.id);
                    // Execute Action: StartAutoplay
                    controller._toggleAutoplay$Action(true, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8pK91JrBgkyau4zJMYXOKg", callContext.id);
                } else {
                    // Is last position?
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fbeNT7ZZG0eQ8efvgNg8EQ", callContext.id) && ((model.variables.currentPositionVar + 1) === model.variables.in_HouseholdsIn.length))) {
                        // Is Autoplay?
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tqzQoAxLKkumpkFrwpgJPw", callContext.id) && model.variables.autoplaySettingsVar.isEnabledAttr)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MHQG1vPpvEepMg9P3qhqgg", callContext.id);
                            // Execute Action: StopAutoplay
                            controller._toggleAutoplay$Action(false, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gydpIgdM1k+E0qkrIP_prQ", callContext.id);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gydpIgdM1k+E0qkrIP_prQ", callContext.id);
                        }

                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gydpIgdM1k+E0qkrIP_prQ", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oaCuP_Ph06wnqHSqvEe1w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Carousel_OnSlideMoved$vars", [{
            name: "CarouselId",
            attrName: "carouselIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ItemIndex",
            attrName: "itemIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:bAuZxPUy_UiMcqzYHGLR5A:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.bAuZxPUy_UiMcqzYHGLR5A:kjeHzDBA6HMPd+EXF8UD3w", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cVnLGTBGcU2it6PjZwxcIw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zv_9CM0Ib02msi4qK+5ELg", callContext.id) && (UBTConnectClientVariables.getPhotobookCarousel_SelectedSpeed() === OS.BuiltinFunctions.nullIdentifier()))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aBNdJshX_UeaPYnBgRpsQg", callContext.id);
                    // PhotobookCarousel_SelectedSpeed = EightSeconds
                    UBTConnectClientVariables.setPhotobookCarousel_SelectedSpeed(UBTConnectModel.staticEntities.photobook_Speed.eightSeconds);
                }

                // Set Autoplay settings
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S7fDFypoeUmtLWcPzGe7Sg", callContext.id);
                // AutoplaySettings.Speed = PhotobookCarousel_SelectedSpeed
                model.variables.autoplaySettingsVar.speedAttr = UBTConnectClientVariables.getPhotobookCarousel_SelectedSpeed();
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S7fDFypoeUmtLWcPzGe7Sg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // AutoplaySettings.IsEnabled = False
                model.variables.autoplaySettingsVar.isEnabledAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S7fDFypoeUmtLWcPzGe7Sg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // AutoplaySettings.IsTemporarilyPaused = False
                model.variables.autoplaySettingsVar.isTemporarilyPausedAttr = false;
                // Set Splide Configs
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id);
                // CarouselConfigs.speed = 500
                model.variables.carouselConfigsVar.speedAttr = 500;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CarouselConfigs.paginationDirection = "ltr"
                model.variables.carouselConfigsVar.paginationDirectionAttr = "ltr";
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // CarouselConfigs.waitForTransition = Unset
                model.variables.carouselConfigsVar.waitForTransitionAttr = UBTConnectModel.staticEntities.booleanTypes.unset;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // CarouselConfigs.interval = IdentifierToInteger
                model.variables.carouselConfigsVar.intervalAttr = OS.BuiltinFunctions.identifierToInteger(model.variables.autoplaySettingsVar.speedAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // CarouselConfigs.wheel = False
                model.variables.carouselConfigsVar.wheelAttr = UBTConnectModel.staticEntities.booleanTypes.false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                // CarouselConfigs.flickPower = 400
                model.variables.carouselConfigsVar.flickPowerAttr = 400;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                // CarouselConfigs.flickMaxPages = 1
                model.variables.carouselConfigsVar.flickMaxPagesAttr = 1;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
                // CarouselConfigs.resetProgress = False
                model.variables.carouselConfigsVar.resetProgressAttr = UBTConnectModel.staticEntities.booleanTypes.false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
                // CarouselConfigs.updateOnMove = True
                model.variables.carouselConfigsVar.updateOnMoveAttr = UBTConnectModel.staticEntities.booleanTypes.true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
                // CarouselConfigs.pauseOnFocus = False
                model.variables.carouselConfigsVar.pauseOnFocusAttr = UBTConnectModel.staticEntities.booleanTypes.false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JKk2+j4+BUCILy42P4v3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
                // CarouselConfigs.pauseOnHover = False
                model.variables.carouselConfigsVar.pauseOnHoverAttr = UBTConnectModel.staticEntities.booleanTypes.false;
                // Initialize Household Vars
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sAK8eiUFi0eErfPT2O8l5w", callContext.id);
                // StartingPosition = In_SelectedHousehold.Position
                model.variables.startingPositionVar = model.variables.in_SelectedHouseholdIn.positionAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sAK8eiUFi0eErfPT2O8l5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CurrentPosition = StartingPosition
                model.variables.currentPositionVar = model.variables.startingPositionVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sAK8eiUFi0eErfPT2O8l5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // CurrentHousehold.HouseholdId = In_Households[CurrentPosition].HouseholdId
                model.variables.currentHouseholdVar.householdIdAttr = model.variables.in_HouseholdsIn.getItem(model.variables.currentPositionVar).householdIdAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sAK8eiUFi0eErfPT2O8l5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // CurrentHousehold.HouseholdName = In_Households[CurrentPosition].HouseholdName
                model.variables.currentHouseholdVar.householdNameAttr = model.variables.in_HouseholdsIn.getItem(model.variables.currentPositionVar).householdNameAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sAK8eiUFi0eErfPT2O8l5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // CurrentHousehold.Locality = In_Households[CurrentPosition].Locality
                model.variables.currentHouseholdVar.localityAttr = model.variables.in_HouseholdsIn.getItem(model.variables.currentPositionVar).localityAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j4esFrDMEEWavQZrurcd_Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bAuZxPUy_UiMcqzYHGLR5A", callContext.id);
            }

        };
        Controller.prototype._handler_SheetIsOpen$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SheetIsOpen");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KJkkz1YWOUC27LMWnu23cw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.KJkkz1YWOUC27LMWnu23cw:qU+Ndsk6Kejc85CGWQSwjA", "UBTConnect", "Handler_SheetIsOpen", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8swrJ2XzNEiGTS+doPuiSQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KziJDeVFP06u_8RExO+xTg", callContext.id);
                // Execute Action: StopInactivityTimer
                controller._stopInactivityTimer$Action(false, callContext);
                // Is Autoplay?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vREF_a0l4Ee7jvGB8LDqfg", callContext.id) && model.variables.autoplaySettingsVar.isEnabledAttr)) {
                    // Set Temporary Pause
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cW2QM+XrIkihP7HV5x_MZA", callContext.id);
                    // AutoplaySettings.IsEnabled = False
                    model.variables.autoplaySettingsVar.isEnabledAttr = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cW2QM+XrIkihP7HV5x_MZA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // AutoplaySettings.IsTemporarilyPaused = True
                    model.variables.autoplaySettingsVar.isTemporarilyPausedAttr = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K_i5hrcKs0Sf8csCh3WL8Q", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SUnbFLSG7UKlBbfVFk4oAQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KJkkz1YWOUC27LMWnu23cw", callContext.id);
            }

        };
        Controller.prototype._splideEvent_Moved$Action = function(newIndexIn, previousIndexIn, destinationIndexIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SplideEvent_Moved");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.SplideEvent_Moved$vars"))());
            vars.value.newIndexInLocal = newIndexIn;
            vars.value.previousIndexInLocal = previousIndexIn;
            vars.value.destinationIndexInLocal = destinationIndexIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QymS1MJdBkSuACTugJvvhA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.QymS1MJdBkSuACTugJvvhA:swaobNe5cD7UpXY0ulLgmg", "UBTConnect", "SplideEvent_Moved", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vxr9Fv58q0qsDah4JJWN2Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7cYwyFeY4U2ewVuxtf9vEw", callContext.id);
                // Execute Action: JSUtils_Console_Log
                UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action(((((("New/Current: " + (vars.value.newIndexInLocal).toString()) + " | Previous:") + (vars.value.previousIndexInLocal).toString()) + " | Destination: ") + (vars.value.destinationIndexInLocal).toString()), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H0bG2ApQ5k6KsFJFPv3r9w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QymS1MJdBkSuACTugJvvhA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.SplideEvent_Moved$vars", [{
            name: "newIndex",
            attrName: "newIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "previousIndex",
            attrName: "previousIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "destinationIndex",
            attrName: "destinationIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._handler_ChangeSpeed$Action = function(selectedSpeedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ChangeSpeed");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Handler_ChangeSpeed$vars"))());
            vars.value.selectedSpeedInLocal = selectedSpeedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+06X2MgMEE+UsnmMu6i9HQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.+06X2MgMEE+UsnmMu6i9HQ:03q7MqajqrjEvxibHfBfWQ", "UBTConnect", "Handler_ChangeSpeed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bm9ODG0C+0OgYdr3USSdwA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+iGniHtB+E+TEcKL1emmdQ", callContext.id);
                // Execute Action: StartInactivityTimer
                controller._startInactivityTimer$Action(callContext);
                // Different Speed?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y1vW9u7L4UGm5ONvFHNZmg", callContext.id) && ((OS.BuiltinFunctions.integerToIdentifier(model.variables.carouselConfigsVar.intervalAttr)) !== (vars.value.selectedSpeedInLocal)))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m+cvrFoYZ0WATi+d4VZO4g", callContext.id);
                    // Execute Action: SetNewSpeed
                    controller._setNewSpeed$Action(vars.value.selectedSpeedInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cyB2Aa4WVESJ7eZVcJG70Q", callContext.id);
                    // Execute Action: CheckForAutoplayRestart
                    controller._checkForAutoplayRestart$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dVGjx44PmkOuH0n+Y5w8Nw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VdDzJxZO0Euo8ZbH_4CmtA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+06X2MgMEE+UsnmMu6i9HQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Handler_ChangeSpeed$vars", [{
            name: "SelectedSpeed",
            attrName: "selectedSpeedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._setNewSpeed$Action = function(selectedSpeedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetNewSpeed");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.SetNewSpeed$vars"))());
            vars.value.selectedSpeedInLocal = selectedSpeedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:c3iw4s2nWEGCx8B3sSWG5g:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.c3iw4s2nWEGCx8B3sSWG5g:dqK8Bno1V_Pm3nwq5PWGhA", "UBTConnect", "SetNewSpeed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tBYZQ_MEpkabbP0Ve2D93A", callContext.id);
                // Set new Speed
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+bGUbnPNJkaDND1bsfOmpg", callContext.id);
                // PhotobookCarousel_SelectedSpeed = SelectedSpeed
                UBTConnectClientVariables.setPhotobookCarousel_SelectedSpeed(vars.value.selectedSpeedInLocal);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+bGUbnPNJkaDND1bsfOmpg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // AutoplaySettings.Speed = PhotobookCarousel_SelectedSpeed
                model.variables.autoplaySettingsVar.speedAttr = UBTConnectClientVariables.getPhotobookCarousel_SelectedSpeed();
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+bGUbnPNJkaDND1bsfOmpg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // CarouselConfigs.interval = IdentifierToInteger
                model.variables.carouselConfigsVar.intervalAttr = OS.BuiltinFunctions.identifierToInteger(model.variables.autoplaySettingsVar.speedAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MFwvPeeoQUSREOO3z37mng", callContext.id);
                // Execute Action: SetCarouselConfigs
                controller._setCarouselConfigs$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:62xCX3QvLUOs2E9xp62uqQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:c3iw4s2nWEGCx8B3sSWG5g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.SetNewSpeed$vars", [{
            name: "SelectedSpeed",
            attrName: "selectedSpeedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._handler_PlayerClicked$Action = function(event_IsPlayIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_PlayerClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Handler_PlayerClicked$vars"))());
            vars.value.event_IsPlayInLocal = event_IsPlayIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sXsp6IM8TESAUlqfKZ74WQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.sXsp6IM8TESAUlqfKZ74WQ:6zpoxVWnLB8WTeZF7j9naw", "UBTConnect", "Handler_PlayerClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tz45c592NU+WcfcCAa+1JA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oSYXgAi5rUGuY+VYsrzaxA", callContext.id);
                // Execute Action: ToggleAutoplay
                controller._toggleAutoplay$Action(vars.value.event_IsPlayInLocal, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gTmgytjmdE60G6g0MMEgrw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sXsp6IM8TESAUlqfKZ74WQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Handler_PlayerClicked$vars", [{
            name: "Event_IsPlay",
            attrName: "event_IsPlayInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_ClickedGalleryItem$Action = function(event_SelectedHouseholdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ClickedGalleryItem");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Handler_ClickedGalleryItem$vars"))());
            vars.value.event_SelectedHouseholdInLocal = event_SelectedHouseholdIn.clone();
            var carouselGoToVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.carouselGoToVar = carouselGoToVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+gh47qEgeEqZ3xm1aLbmFQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.+gh47qEgeEqZ3xm1aLbmFQ:PvHhdCg3FCa5PC0zay+_JQ", "UBTConnect", "Handler_ClickedGalleryItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wZZ7EkmCWkuimrS_Dk8Qmw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kLf0bwKWhU+upFGGGiSBFg", callContext.id);
                // Execute Action: StopInactivityTimer
                controller._stopInactivityTimer$Action(true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PpwLWbxxVEatRv9gDY7U+A", callContext.id);
                // Execute Action: CarouselGoTo
                carouselGoToVar.value = OutSystemsUI_2_23Controller.default.carouselGoTo$Action(idService.getId("Carousel_Photobook"), vars.value.event_SelectedHouseholdInLocal.positionAttr, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UnKv3OCI8EuVKrujd99nuw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+gh47qEgeEqZ3xm1aLbmFQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Carousel.Handler_ClickedGalleryItem$vars", [{
            name: "Event_SelectedHousehold",
            attrName: "event_SelectedHouseholdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.LongIntegerIntegerRecord();
            },
            complexType: UBTConnectModel.LongIntegerIntegerRecord
        }]);
        Controller.prototype._handler_SheetIsClosed$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SheetIsClosed");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gBSK+nA3A0Ww1g75IeBShw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA/ClientActions.gBSK+nA3A0Ww1g75IeBShw:RmQAskF_7bgKamp5ERN5sQ", "UBTConnect", "Handler_SheetIsClosed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vlCxvj7mF0qvONnZxMP+2A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g7VDdlMs_U6yAItqiLsxvA", callContext.id);
                // Execute Action: StartInactivityTimer
                controller._startInactivityTimer$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QfOqtnaVz0migqBYlFtfyw", callContext.id);
                // Execute Action: CheckForAutoplayRestart
                controller._checkForAutoplayRestart$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MNSpxgDrE0+6Z1Q_LtCnRw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gBSK+nA3A0Ww1g75IeBShw", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.handler_ZoomIn$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ZoomIn$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.setCarouselConfigs$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setCarouselConfigs$Action, callContext);

        };
        Controller.prototype.handler_ClosePhotobook$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ClosePhotobook$Action, callContext);

        };
        Controller.prototype.handler_ReplayCarousel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ReplayCarousel$Action, callContext);

        };
        Controller.prototype.checkForAutoplayRestart$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._checkForAutoplayRestart$Action, callContext);

        };
        Controller.prototype.stopInactivityTimer$Action = function(startNewIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._stopInactivityTimer$Action, callContext, startNewIn);

        };
        Controller.prototype.startInactivityTimer$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._startInactivityTimer$Action, callContext);

        };
        Controller.prototype.setShowOptions$Action = function(isToShowIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setShowOptions$Action, callContext, isToShowIn);

        };
        Controller.prototype.onInitialize_Carousel$Action = function(carouselIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize_Carousel$Action, callContext, carouselIdIn);

        };
        Controller.prototype.handler_ScreenClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ScreenClick$Action, callContext);

        };
        Controller.prototype.toggleAutoplay$Action = function(in_IsPlayIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleAutoplay$Action, callContext, in_IsPlayIn);

        };
        Controller.prototype.handler_MinZoomReached$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MinZoomReached$Action, callContext);

        };
        Controller.prototype.carousel_OnSlideMoved$Action = function(carouselIdIn, itemIndexIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._carousel_OnSlideMoved$Action, callContext, carouselIdIn, itemIndexIn);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.handler_SheetIsOpen$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SheetIsOpen$Action, callContext);

        };
        Controller.prototype.splideEvent_Moved$Action = function(newIndexIn, previousIndexIn, destinationIndexIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._splideEvent_Moved$Action, callContext, newIndexIn, previousIndexIn, destinationIndexIn);

        };
        Controller.prototype.handler_ChangeSpeed$Action = function(selectedSpeedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ChangeSpeed$Action, callContext, selectedSpeedIn);

        };
        Controller.prototype.setNewSpeed$Action = function(selectedSpeedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setNewSpeed$Action, callContext, selectedSpeedIn);

        };
        Controller.prototype.handler_PlayerClicked$Action = function(event_IsPlayIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_PlayerClicked$Action, callContext, event_IsPlayIn);

        };
        Controller.prototype.handler_ClickedGalleryItem$Action = function(event_SelectedHouseholdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ClickedGalleryItem$Action, callContext, event_SelectedHouseholdIn);

        };
        Controller.prototype.handler_SheetIsClosed$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SheetIsClosed$Action, callContext);

        };
        Controller.prototype.closePhotobook$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:m2ITgd9jj06y6qMmoaVDMA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.m2ITgd9jj06y6qMmoaVDMA:JFcOwTAdGIn3Dk2_mSWyVQ", "UBTConnect", "Photobook_Carousel", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m2ITgd9jj06y6qMmoaVDMA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Carousel On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Carousel On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Carousel On Destroy");
                return controller.stopInactivityTimer$Action(false, callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Carousel On Parameters Changed");
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller.StopInactivityTimer.ClearTimerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.TimerObj) {
            window.clearTimeout($parameters.TimerObj);
        }
    };
});
define("UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller.StartInactivityTimer.StartTimerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.TimerObj = window.setTimeout(() => {
            $actions.SetShowOptions(false)
        }, $parameters.Duration)
    };
});
define("UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$controller.OnInitialize_Carousel.GetSplideCallbacksJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Moved = $actions.SplideEvent_Moved;
    };
});

define("UBTConnect.Directory_Photobook.Photobook_Carousel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "cjSXQ3sYkkiYV3nKk+yDFA": {
            getter: function(varBag, idService) {
                return varBag.carouselToggleDragVar.value;
            }
        },
        "e9PKvVqDvEabqGm6LmDGMQ": {
            getter: function(varBag, idService) {
                return varBag.setSplideConfigsVar.value;
            }
        },
        "XodOAO9nEEenbK4cNOunmg": {
            getter: function(varBag, idService) {
                return varBag.carouselGoToVar.value;
            }
        },
        "SUjw+NPAmUWlkDJiEJbr5g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.startNewInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ToV0Q4s+9EeQGSEo9vox9Q": {
            getter: function(varBag, idService) {
                return varBag.clearTimerJSResult.value;
            }
        },
        "yt1NfibmzUq8L+hcIhjjpw": {
            getter: function(varBag, idService) {
                return varBag.startTimerJSResult.value;
            }
        },
        "2mCXGJjS9Ey58GgNksaGHA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isToShowInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8RvLwd7QNEK4sy20HI5rCw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.carouselIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rb3bQnDSPUyvxluzv_UveQ": {
            getter: function(varBag, idService) {
                return varBag.movedVar.value;
            }
        },
        "MLOX8jMjXEysvxs3NgTwVg": {
            getter: function(varBag, idService) {
                return varBag.getSplideCallbacksJSResult.value;
            }
        },
        "8XzVlxDtLEmjpjv37deJAQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsPlayInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9hpAfxfDVUep4QXR5+8xuw": {
            getter: function(varBag, idService) {
                return varBag.carouselToggleDrag_DisableVar.value;
            }
        },
        "sAlXwHQvIU2LEwqKOCAbNQ": {
            getter: function(varBag, idService) {
                return varBag.carouselToggleDrag_EnableVar.value;
            }
        },
        "vqWJCVimaU6fneBhmd2anw": {
            getter: function(varBag, idService) {
                return varBag.carouselToggleDragVar.value;
            }
        },
        "2FEDYVk8HU6p6K7Rcm3gcw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.carouselIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "LQFX7pXu_UilAGL5Mo1fKA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "N0ABawACTUWhhhczIXTtDA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.newIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "7w8fMncKc0GHLzns9Ft+Ag": {
            getter: function(varBag, idService) {
                return varBag.vars.value.previousIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "EiCAaaFQ+kKRBsRkvjh5xw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.destinationIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "LwA7EjI3wUusy3crXm3mOA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedSpeedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "_XWK3EWAhUuJmXsWCnqo1g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedSpeedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "3v8Z5qY4KEqaItE+wA2Euw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IsPlayInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Doq0qzkyLU23dXCmgtXetg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_SelectedHouseholdInLocal;
            }
        },
        "PpwLWbxxVEatRv9gDY7U+A": {
            getter: function(varBag, idService) {
                return varBag.carouselGoToVar.value;
            }
        },
        "FVYo1fujvke1WQ3xDm+qdw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.startingPositionVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "id4Oqs8PfUqhutqtpGpGJQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isZoomedInVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "EHYvBAXLC0eSx44uWNFP+w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "27MCWOP_hUuzfbtRoENBLQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.autoplaySettingsVar;
            }
        },
        "v5Dbust50kucihmf0UDtbQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.carouselConfigsVar;
            }
        },
        "iwtURjutCkmmNJuI9766lw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentPositionVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "YmYYbCP4_E6plxX6SS3P9Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentHouseholdVar;
            }
        },
        "jhd7AGD6YkK0Mm4DNwFcEA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isShowVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZBQlKuKdb06EA5PTPlMUBQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.timerDurationVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "aIXEcj8ooEiOrTdEs9ePuw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentTimerVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "1WlJpcp5V06A1cvyJY7dvg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isReplayingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "z9DCo6bcc0SxM4izItiVQA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HouseholdsIn;
            }
        },
        "141GhIN2EEiRTuRWp320ig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SelectedHouseholdIn;
            }
        },
        "r8rcaEKVwkK2uhi0Khxm+Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Carousel_Cont"));
                })(varBag.model, idService);
            }
        },
        "EWgZMEOO_kyWGbpaqdDuXg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Carousel_Touch_Cont"));
                })(varBag.model, idService);
            }
        },
        "iWDDPyv73EyQmwhCCJ1e+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Carousel_Photobook"));
                })(varBag.model, idService);
            }
        },
        "jtdxb+9TkU+ZnfVrx6hkQQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CarouselItems"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});