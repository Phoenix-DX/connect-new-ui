define("UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$model", "UBTConnectLibrary.model$LookupActionsRec", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetLookupActions"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-actions-menu";
                }, false),
                this.attr("LookupActions", "lookupActionsVar", "LookupActions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupActionsRec());
                }, false, UBTConnectLibraryModel.LookupActionsRec),
                this.attr("In_ActionsMenuOptions", "in_ActionsMenuOptionsIn", "In_ActionsMenuOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuOptionsRec());
                }, false, UBTConnectLibraryModel.ActionsMenuOptionsRec),
                this.attr("_in_ActionsMenuOptionsInDataFetchStatus", "_in_ActionsMenuOptionsInDataFetchStatus", "_in_ActionsMenuOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ActionsEnableOptions", "in_ActionsEnableOptionsIn", "In_ActionsEnableOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec());
                }, false, UBTConnectLibraryModel.ActionsMenuEnableOptionsRec),
                this.attr("_in_ActionsEnableOptionsInDataFetchStatus", "_in_ActionsEnableOptionsInDataFetchStatus", "_in_ActionsEnableOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsEnabled", "isEnabledIn", "IsEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("InShowLabels", "inShowLabelsIn", "InShowLabels", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_inShowLabelsInDataFetchStatus", "_inShowLabelsInDataFetchStatus", "_inShowLabelsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ActionsMenuOptions" in inputs) {
                this.variables.in_ActionsMenuOptionsIn = inputs.In_ActionsMenuOptions;
                if ("_in_ActionsMenuOptionsInDataFetchStatus" in inputs) {
                    this.variables._in_ActionsMenuOptionsInDataFetchStatus = inputs._in_ActionsMenuOptionsInDataFetchStatus;
                }

            }

            if ("In_ActionsEnableOptions" in inputs) {
                this.variables.in_ActionsEnableOptionsIn = inputs.In_ActionsEnableOptions;
                if ("_in_ActionsEnableOptionsInDataFetchStatus" in inputs) {
                    this.variables._in_ActionsEnableOptionsInDataFetchStatus = inputs._in_ActionsEnableOptionsInDataFetchStatus;
                }

            }

            if ("IsEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.IsEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("InShowLabels" in inputs) {
                this.variables.inShowLabelsIn = inputs.InShowLabels;
                if ("_inShowLabelsInDataFetchStatus" in inputs) {
                    this.variables._inShowLabelsInDataFetchStatus = inputs._inShowLabelsInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.ActionsMenu");
});
define("UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$view", "UBTConnectLibrary.model$LookupActionsRec", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetLookupActions"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_model, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.ActionsMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("AuNRFty9YUWD5eJtQ991ew.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                return rec;
                            }();
                            rec.displayOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
                                rec.justifyContentAttr = UBTConnectLibraryModel.staticEntities.uBT_JustifyContent.spaceBetween;
                                return rec;
                            }();
                            return rec;
                        }();
                    }),
                    ExtendedClasses: model.variables.mainContainerClassVar
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
                        return [$if(model.variables.in_ActionsMenuOptionsIn.hasBookmarkAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableBookmarkAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.bookmarkAttr.iconAttr,
                                    Text: model.getCachedValue(idService.getId("sDLz5k_0J0WRGgkNVEVpow.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.bookmarkAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.bookmarkAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_Bookmark$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasUnbookmarkAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableBookmarkAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.unbookmarkAttr.iconAttr,
                                    Text: model.getCachedValue(idService.getId("EyQcaKWxuUOGJZPGKnD0NQ.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.unbookmarkAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.unbookmarkAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_Unbookmark$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasCallAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    Text: model.getCachedValue(idService.getId("7y_njGvoEEuj5u_N6uxh8A.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.callAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.callAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus),
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableCallAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.callAttr.iconAttr
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_Call$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "3",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasEmailAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    Text: model.getCachedValue(idService.getId("eHjIh5bYyEeaCpDpwy09ZQ.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.emailAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.emailAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus),
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableEmailAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.emailAttr.iconAttr
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_Email$Action(controller.callContext(eventHandlerContext));
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
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasNotesAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableNotesAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    Text: model.getCachedValue(idService.getId("Mz5yBjCa_k61XkvbEg+sEw.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.notesAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.notesAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.notesAttr.iconAttr
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_Notes$Action(controller.callContext(eventHandlerContext));
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
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasGiftAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    Text: model.getCachedValue(idService.getId("CU1arFIhPkiOKYSC3a1jpA.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.giftAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.giftAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.giftAttr.iconAttr,
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableGiftAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_Gift$Action(controller.callContext(eventHandlerContext));
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
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasShareAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    IconId: model.variables.lookupActionsVar.shareAttr.iconAttr,
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableShareAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    Text: model.getCachedValue(idService.getId("tglsaBPn20m0K45iLrHJEg.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.shareAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.shareAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_Share$Action(controller.callContext(eventHandlerContext));
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
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasViewDetailsAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableViewDetailsAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.viewDetailsAttr.iconAttr,
                                    Text: model.getCachedValue(idService.getId("GUa0IBUBGkiCguHbyu68Uw.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.viewDetailsAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.viewDetailsAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
                                            controller.event_Click_ViewDetails$Action(controller.callContext(eventHandlerContext));
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
                                    alias: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.inShowLabelsIn), asPrimitiveValue(model.variables.lookupActionsVar.viewDetailsAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.viewDetailsAttr.iconAttr), asPrimitiveValue(model.variables.lookupActionsVar.shareAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.shareAttr.iconAttr), asPrimitiveValue(model.variables.lookupActionsVar.giftAttr.iconAttr), asPrimitiveValue(model.variables.lookupActionsVar.giftAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.notesAttr.iconAttr), asPrimitiveValue(model.variables.lookupActionsVar.notesAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.emailAttr.iconAttr), asPrimitiveValue(model.variables.lookupActionsVar.emailAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.callAttr.iconAttr), asPrimitiveValue(model.variables.lookupActionsVar.callAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.unbookmarkAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.unbookmarkAttr.iconAttr), asPrimitiveValue(model.variables.lookupActionsVar.bookmarkAttr.singularAttr), asPrimitiveValue(model.variables.lookupActionsVar.bookmarkAttr.iconAttr), asPrimitiveValue(model.variables.in_ActionsEnableOptionsIn.enableViewDetailsAttr), asPrimitiveValue(model.variables.in_ActionsEnableOptionsIn.enableShareAttr), asPrimitiveValue(model.variables.in_ActionsEnableOptionsIn.enableGiftAttr), asPrimitiveValue(model.variables.in_ActionsEnableOptionsIn.enableNotesAttr), asPrimitiveValue(model.variables.in_ActionsEnableOptionsIn.enableEmailAttr), asPrimitiveValue(model.variables.in_ActionsEnableOptionsIn.enableCallAttr), asPrimitiveValue(model.variables.in_ActionsEnableOptionsIn.enableBookmarkAttr), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._inShowLabelsInDataFetchStatus), asPrimitiveValue(model.variables._in_ActionsEnableOptionsInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_ActionsMenuOptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasViewDetailsAttr), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasShareAttr), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasGiftAttr), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasNotesAttr), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasEmailAttr), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasCallAttr), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasUnbookmarkAttr), asPrimitiveValue(model.variables.in_ActionsMenuOptionsIn.hasBookmarkAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$debugger", "UBTConnectLibrary.model$LookupActionsRec", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetLookupActions"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_Debugger) {
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
            var getLookupActionsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getLookupActionsVar = getLookupActionsVar;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:5sqACAUKVEaX9ufAjdUyEA:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.YdVJ6A8qAkyxj3thhBfq8w/ClientActions.5sqACAUKVEaX9ufAjdUyEA:hn+1Msb7MI5BuxhmIp_zJQ", "UBTConnectLibrary", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9J5Yv7yHckmuIP_kw8Wguw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:q7RFjowU3kKBACuhedRf6Q", callContext.id);
                // Execute Action: GetLookupActions
                getLookupActionsVar.value = UBTConnectLibraryController.default.getLookupActions$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Wz7GH+REcEKIIKuv_nirzg", callContext.id);
                // LookupActions = GetLookupActions.LookupActions
                model.variables.lookupActionsVar = getLookupActionsVar.value.lookupActionsOut;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bg2shPM_t0+3i4Gi+8cspA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:5sqACAUKVEaX9ufAjdUyEA", callContext.id);
            }

        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.event_Click_Email$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Click_Gift$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Click_Unbookmark$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Click_ViewDetails$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Click_Share$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Click_Notes$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Click_Bookmark$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Click_Call$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:YdVJ6A8qAkyxj3thhBfq8w:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.YdVJ6A8qAkyxj3thhBfq8w:oI1Ku0tW4k+yE_ZH7AbCIw", "UBTConnectLibrary", "ActionsMenu", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:YdVJ6A8qAkyxj3thhBfq8w", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectCorePatterns/ActionsMenu On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
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

define("UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "q7RFjowU3kKBACuhedRf6Q": {
            getter: function(varBag, idService) {
                return varBag.getLookupActionsVar.value;
            }
        },
        "quHSXgOz2UG0oiOjKPkfqw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7lWMoYQq2U+anthJD4SDdg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.lookupActionsVar;
            }
        },
        "P20QyQOtGEqpB6_GL7xUyA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ActionsMenuOptionsIn;
            }
        },
        "RARHBSwXSkWXKWM6EZsZrQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ActionsEnableOptionsIn;
            }
        },
        "GRI7nb06X0K7LChL2Nt6tw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "idrHCxQlUEepPtNyU4PGcg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.inShowLabelsIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "jsrCmwU560unlwHMNuhjyw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "6rV1AH9Z2UeyVMS+d_92Fw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasBookmark"));
                })(varBag.model, idService);
            }
        },
        "Cz5l9osYRUSizkNfiHP4kg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasUnbookmark"));
                })(varBag.model, idService);
            }
        },
        "DF54CA2DwEW7LnS9rFNSFA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasCall"));
                })(varBag.model, idService);
            }
        },
        "cS7X+k7a60mfTYWP83PQig": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasEmail"));
                })(varBag.model, idService);
            }
        },
        "G0_5kqTt00KIALJKgOb7OQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasNotes"));
                })(varBag.model, idService);
            }
        },
        "QJV6zjOC+0iWQm51A_9fcA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasGift"));
                })(varBag.model, idService);
            }
        },
        "hupEbY_YF0KFy+KX_iyISw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasShare"));
                })(varBag.model, idService);
            }
        },
        "JzDQfOiDkkK1NSJJaBJLtw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasViewDetails"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});