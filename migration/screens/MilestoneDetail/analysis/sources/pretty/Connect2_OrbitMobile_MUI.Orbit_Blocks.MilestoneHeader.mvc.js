define("Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("OrbitMilestoneType", "orbitMilestoneTypeVar", "OrbitMilestoneType", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRec());
                }, false, Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRec),
                this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MilestoneName", "in_MilestoneNameIn", "In_MilestoneName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_OrbitMilestoneTypeId", "in_OrbitMilestoneTypeIdIn", "In_OrbitMilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return false;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_EventName" in inputs) {
                this.variables.in_EventNameIn = inputs.In_EventName;
                if ("_in_EventNameInDataFetchStatus" in inputs) {
                    this.variables._in_EventNameInDataFetchStatus = inputs._in_EventNameInDataFetchStatus;
                }

            }

            if ("In_MilestoneName" in inputs) {
                this.variables.in_MilestoneNameIn = inputs.In_MilestoneName;
                if ("_in_MilestoneNameInDataFetchStatus" in inputs) {
                    this.variables._in_MilestoneNameInDataFetchStatus = inputs._in_MilestoneNameInDataFetchStatus;
                }

            }

            if ("In_OrbitMilestoneTypeId" in inputs) {
                this.variables.in_OrbitMilestoneTypeIdIn = inputs.In_OrbitMilestoneTypeId;
                if ("_in_OrbitMilestoneTypeIdInDataFetchStatus" in inputs) {
                    this.variables._in_OrbitMilestoneTypeIdInDataFetchStatus = inputs._in_OrbitMilestoneTypeIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_Blocks.MilestoneHeader");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.MilestoneHeader";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_controller;
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
                style: "orbit-milestone-header",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "full-width margin-bottom-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.variables.in_EventNameIn,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "orbit-milestone-sub-header",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    className: ("icon " + model.variables.orbitMilestoneTypeVar.mainIconAttr)
                },
                icon: "flag",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                style: "font-size-0-9rem margin-left-s",
                value: (((model.variables.in_MilestoneNameIn + " (") + model.variables.orbitMilestoneTypeVar.typeAttr) + ")"),
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneNameInDataFetchStatus)
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$debugger", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_Debugger) {
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
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var getLocalOrbitMilestoneTypeByIdVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getLocalOrbitMilestoneTypeByIdVar = getLocalOrbitMilestoneTypeByIdVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Hr_ZPf_zp0a7iJUI7TvimA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.MBbNF9ULj0+gMSMQ+XCI_g/ClientActions.Hr_ZPf_zp0a7iJUI7TvimA:V4aPYnUZeWwaFyIM+3szQQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uxRfuOOP9UWKTA3rGTg4qA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sqshNRaGNUebT4Zae6wDwg", callContext.id);
                // Execute Action: GetLocalOrbitMilestoneTypeById
                model.flush();
                return Connect2_OrbitMobile_MUIController.default.getLocalOrbitMilestoneTypeById$Action(model.variables.in_OrbitMilestoneTypeIdIn, callContext).then(function(value) {
                    getLocalOrbitMilestoneTypeByIdVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T8F6nTNa3Ui_edL_jvg8NQ", callContext.id);
                    // OrbitMilestoneType = GetLocalOrbitMilestoneTypeById.LocalOrbitMilestoneType
                    model.variables.orbitMilestoneTypeVar = getLocalOrbitMilestoneTypeByIdVar.value.localOrbitMilestoneTypeOut;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z6kf_UGIGEq4zXZSF2LJdw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Hr_ZPf_zp0a7iJUI7TvimA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Hr_ZPf_zp0a7iJUI7TvimA", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MBbNF9ULj0+gMSMQ+XCI_g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.MBbNF9ULj0+gMSMQ+XCI_g:i92BYMaifXNsnEHMljSsVg", "Connect2_OrbitMobile_MUI", "MilestoneHeader", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MBbNF9ULj0+gMSMQ+XCI_g", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/MilestoneHeader On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "sqshNRaGNUebT4Zae6wDwg": {
            getter: function(varBag, idService) {
                return varBag.getLocalOrbitMilestoneTypeByIdVar.value;
            }
        },
        "gjq74uMH2EmQdSsXpTuzpA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.orbitMilestoneTypeVar;
            }
        },
        "oDWpaXD16EKnanohW+SflQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "6toF+w2kZkG6TwYqdpUV+Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MilestoneNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "P9nb+IzbX0q_0ckEMN2SNg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});