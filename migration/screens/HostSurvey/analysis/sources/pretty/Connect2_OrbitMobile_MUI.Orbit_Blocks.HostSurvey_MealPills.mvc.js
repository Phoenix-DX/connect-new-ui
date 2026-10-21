define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_IsDisabled", "in_IsDisabledIn", "In_IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HostSurvey_Meal", "in_HostSurvey_MealIn", "In_HostSurvey_Meal", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec());
                }, false, Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec),
                this.attr("_in_HostSurvey_MealInDataFetchStatus", "_in_HostSurvey_MealInDataFetchStatus", "_in_HostSurvey_MealInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_IsDisabled" in inputs) {
                this.variables.in_IsDisabledIn = inputs.In_IsDisabled;
                if ("_in_IsDisabledInDataFetchStatus" in inputs) {
                    this.variables._in_IsDisabledInDataFetchStatus = inputs._in_IsDisabledInDataFetchStatus;
                }

            }

            if ("In_HostSurvey_Meal" in inputs) {
                this.variables.in_HostSurvey_MealIn = inputs.In_HostSurvey_Meal;
                if ("_in_HostSurvey_MealInDataFetchStatus" in inputs) {
                    this.variables._in_HostSurvey_MealInDataFetchStatus = inputs._in_HostSurvey_MealInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_MealPills");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_MealPills";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_controller;
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
                style: "orbit-host-survey-pill-cont",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(!(model.variables.in_HostSurvey_MealIn.eventDateAttr.equals(OS.BuiltinFunctions.nullDate())), false, this, function() {
                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
                    inputs: {
                        In_IsDisabled: model.variables.in_IsDisabledIn,
                        _in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
                        In_IconClass: "orbit-icon-meeting",
                        In_PillText: model.getCachedValue(idService.getId("Tsn8N1dHPUuMCePfLQFn+g.In_PillText"), function() {
                            return OutSystemsDebugger.handleFunctionCall(function() {
                                return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Survey$Action(model.variables.in_HostSurvey_MealIn.eventDateAttr, callContext).out_FormattedDateTimeOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.in_HostSurvey_MealIn.eventDateAttr;
                        }),
                        _in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_MealInDataFetchStatus)
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
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), $if((((model.variables.in_HostSurvey_MealIn.comfortableCapacityAttr) !== ("")) && ((model.variables.in_HostSurvey_MealIn.stretchCapacityAttr) !== (""))), false, this, function() {
                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
                    inputs: {
                        In_IconClass: "orbit-icon-capacity",
                        In_IsDisabled: model.variables.in_IsDisabledIn,
                        _in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
                        In_PillText: ((("CP " + model.variables.in_HostSurvey_MealIn.comfortableCapacityAttr) + ", SCP ") + model.variables.in_HostSurvey_MealIn.stretchCapacityAttr),
                        _in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostSurvey_MealInDataFetchStatus)
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
                    _dependencies: []
                })];
            }, function() {
                return [];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Survey", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_Debugger) {
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:T2D1k9MwSUaASy6G_GhMqg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.T2D1k9MwSUaASy6G_GhMqg:EjvLu2tjkZomqIFfkYq58A", "Connect2_OrbitMobile_MUI", "HostSurvey_MealPills", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:T2D1k9MwSUaASy6G_GhMqg", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
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
            return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "qc494igwl0OGEgkmZ8CJrg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsDisabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "mjnzM1g1f0KA6n5hoUntxg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HostSurvey_MealIn;
            }
        },
        "_JL27qQca0WPjeibX4Pj6g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasDate"));
                })(varBag.model, idService);
            }
        },
        "MAjdJDZ0gUOfNaBDdh66sQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasCapacity"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});