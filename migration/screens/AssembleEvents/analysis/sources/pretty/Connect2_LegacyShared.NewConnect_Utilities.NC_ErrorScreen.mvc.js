define("Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function(OutSystems, Connect2_LegacySharedModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Height", "heightVar", "Height", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("In_ErrorMessage", "in_ErrorMessageIn", "In_ErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "No information available.";
                }, false),
                this.attr("_in_ErrorMessageInDataFetchStatus", "_in_ErrorMessageInDataFetchStatus", "_in_ErrorMessageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MatchMainContentHeight", "in_MatchMainContentHeightIn", "In_MatchMainContentHeight", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_MatchMainContentHeightInDataFetchStatus", "_in_MatchMainContentHeightInDataFetchStatus", "_in_MatchMainContentHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("In_ErrorMessage" in inputs) {
                this.variables.in_ErrorMessageIn = inputs.In_ErrorMessage;
                if ("_in_ErrorMessageInDataFetchStatus" in inputs) {
                    this.variables._in_ErrorMessageInDataFetchStatus = inputs._in_ErrorMessageInDataFetchStatus;
                }

            }

            if ("In_MatchMainContentHeight" in inputs) {
                this.variables.in_MatchMainContentHeightIn = inputs.In_MatchMainContentHeight;
                if ("_in_MatchMainContentHeightInDataFetchStatus" in inputs) {
                    this.variables._in_MatchMainContentHeightInDataFetchStatus = inputs._in_MatchMainContentHeightInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "NewConnect_Utilities.NC_ErrorScreen");
});
define("Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_model, Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect_Utilities.NC_ErrorScreen";
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
                return Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_controller;
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
                extendedProperties: {
                    style: model.getCachedValue(idService.getId("4rEhLFLgS0+BrtE0OCG1dg.style"), function() {
                        return ((model.variables.in_MatchMainContentHeightIn) ? ((("height: " + (model.variables.heightVar).toString()) + "px;")) : (""));
                    }, function() {
                        return model.variables.in_MatchMainContentHeightIn;
                    }, function() {
                        return model.variables.heightVar;
                    })
                },
                style: "nc-error-screen-info",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "text-align-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Icon,
                style: "margin-bottom-m text-neutral-4 font-size-h5",
                _idProps: {
                    service: idService,
                    name: "Placeholder_Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                value: model.variables.in_ErrorMessageIn,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ErrorMessageInDataFetchStatus)
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$debugger", "Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$controller.OnReady.SetHeightJS"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_Debugger, Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_controller_OnReady_SetHeightJS) {
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
            var setHeightJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.setHeightJSResult = setHeightJSResult;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:B1mBEzdMHE2_ATvvUOkaEg:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q/NodesShownInESpaceTree.3NdOuESRBECCp5+lOKQ_3w/ClientActions.B1mBEzdMHE2_ATvvUOkaEg:rxShPWtEYEeNcgtPRYZunw", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2YRmycO6ZUyuoWMW7Pf4dA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OhdusclRT06XBs6Acd5fTA", callContext.id) && model.variables.in_MatchMainContentHeightIn)) {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8+0F9YyXAEuLNhzsu5TaWw", callContext.id);
                    setHeightJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_controller_OnReady_SetHeightJS, "SetHeight", "OnReady", {
                        In_MainContentClass: OS.DataConversion.JSNodeParamConverter.to(".main-content", OS.DataTypes.DataTypes.Text),
                        Out_Height: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                    }, function($parameters) {
                        var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.OnReady$setHeightJSResult"))();
                        jsNodeResult.out_HeightOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_Height, OS.DataTypes.DataTypes.Integer);
                        return jsNodeResult;
                    }, {}, {});
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HrNdIQYpgkmSmomV3Dbh5Q", callContext.id);
                    // Height = SetHeight.Out_Height
                    model.variables.heightVar = setHeightJSResult.value.out_HeightOut;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:48rkdRE_pE+mCv28LKoBoA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Nqr2ERb+1kW1cDHSATiwBA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:B1mBEzdMHE2_ATvvUOkaEg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.OnReady$setHeightJSResult", [{
            name: "Out_Height",
            attrName: "out_HeightOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wx5XeNqAakmtpZYvs3tr_Q:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q:L7MzDwd4oJkt5Vso1m_eUg", "Connect2_LegacyShared", "NewConnect_Utilities", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:3NdOuESRBECCp5+lOKQ_3w:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q/NodesShownInESpaceTree.3NdOuESRBECCp5+lOKQ_3w:5l0iHtnEiH29jx9ocoZqYA", "Connect2_LegacyShared", "NC_ErrorScreen", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:3NdOuESRBECCp5+lOKQ_3w", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wx5XeNqAakmtpZYvs3tr_Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "NewConnect_Utilities/NC_ErrorScreen On Ready");
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
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$controller.OnReady.SetHeightJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.In_MainContentClass !== "") {
            $parameters.Out_Height = document.querySelector($parameters.In_MainContentClass).clientHeight;
        }
    };
});

define("Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "8+0F9YyXAEuLNhzsu5TaWw": {
            getter: function(varBag, idService) {
                return varBag.setHeightJSResult.value;
            }
        },
        "qllpdF7neUaWRbSJRjYlJg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.heightVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "YvL8PqR4R02kGjasPvKsiQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ErrorMessageIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "3X0pSAFM70aq5grqtR+eTA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MatchMainContentHeightIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "LiXl3qKgqkmF2GpdJ47_0w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Icon"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});