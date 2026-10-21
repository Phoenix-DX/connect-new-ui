define("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$model"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_InputCounter_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("InputId", "inputIdVar", "InputId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-input-with-counter";
                }, false),
                this.attr("In_InitialLength", "in_InitialLengthIn", "In_InitialLength", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("_in_InitialLengthInDataFetchStatus", "_in_InitialLengthInDataFetchStatus", "_in_InitialLengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = UBTConnectLibrary_ConnectPatterns_InputCounter_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_InitialLength" in inputs) {
                this.variables.in_InitialLengthIn = inputs.In_InitialLength;
                if ("_in_InitialLengthInDataFetchStatus" in inputs) {
                    this.variables._in_InitialLengthInDataFetchStatus = inputs._in_InitialLengthInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.TextArea_WithCounter");
});
define("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$model", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$view"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_model, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view) {
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
        View.displayName = "ConnectPatterns.TextArea_WithCounter";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_controller;
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
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Input,
                _idProps: {
                    service: idService,
                    name: "Placeholder_Input"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $if(((model.variables.inputIdVar) !== ("")), false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, {
                    inputs: {
                        In_InputId: model.variables.inputIdVar,
                        In_InitialLength: model.variables.in_InitialLengthIn,
                        _in_InitialLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_InitialLengthInDataFetchStatus)
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
                return [];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$controller.OnReady.GetInputIdJS"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_controller_OnReady_GetInputIdJS) {
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
            var getInputIdJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getInputIdJSResult = getInputIdJSResult;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Be4t9imDtke3N8unIZuf2A:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._smZP+5gTE2Qb1CrHE1crw/ClientActions.Be4t9imDtke3N8unIZuf2A:0Vkzhvix7ma23Q7gpn+Ggg", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DU4bEFqMGU2VrXC71n5h2A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hC0x+ffVCk+Q0O7vZ8Gtyg", callContext.id);
                getInputIdJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_controller_OnReady_GetInputIdJS, "GetInputId", "OnReady", {
                    PlaceholderId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Placeholder_Input"), OS.DataTypes.DataTypes.Text),
                    InputId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.OnReady$getInputIdJSResult"))();
                    jsNodeResult.inputIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.InputId, OS.DataTypes.DataTypes.Text);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fOT5Cwf9oEOJRitlT_uccg", callContext.id);
                // InputId = GetInputId.InputId
                model.variables.inputIdVar = getInputIdJSResult.value.inputIdOut;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:S0Ig111ni0SEITvmcbqH2Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Be4t9imDtke3N8unIZuf2A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.OnReady$getInputIdJSResult", [{
            name: "InputId",
            attrName: "inputIdOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_smZP+5gTE2Qb1CrHE1crw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._smZP+5gTE2Qb1CrHE1crw:M53GRvwafiUeIqOUdIRtZg", "UBTConnectLibrary", "TextArea_WithCounter", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_smZP+5gTE2Qb1CrHE1crw", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/TextArea_WithCounter On Ready");
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
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$controller.OnReady.GetInputIdJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const placeholder = document.getElementById($parameters.PlaceholderId);
        const input = placeholder && placeholder.querySelector('textarea');
        $parameters.InputId = input.id;
    };
});

define("UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "hC0x+ffVCk+Q0O7vZ8Gtyg": {
            getter: function(varBag, idService) {
                return varBag.getInputIdJSResult.value;
            }
        },
        "63bMzjxuLk6QUKCu1856hQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.inputIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "1+t8duLRAk+I9LAjsyfhFg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "9z19HeUh60yLeyr+zRTJng": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_InitialLengthIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "8WUein9iXUigLDJBRILiYQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Input"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});