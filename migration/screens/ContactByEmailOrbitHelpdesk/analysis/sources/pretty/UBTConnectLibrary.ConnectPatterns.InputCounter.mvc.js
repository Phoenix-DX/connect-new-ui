define("UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MaxLength", "maxLengthVar", "MaxLength", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("CurrentLength", "currentLengthVar", "CurrentLength", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("In_InputId", "in_InputIdIn", "In_InputId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_InputIdInDataFetchStatus", "_in_InputIdInDataFetchStatus", "_in_InputIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
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
                    Model._hasValidationWidgetsValue = UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_InputId" in inputs) {
                this.variables.in_InputIdIn = inputs.In_InputId;
                if ("_in_InputIdInDataFetchStatus" in inputs) {
                    this.variables._in_InputIdInDataFetchStatus = inputs._in_InputIdInDataFetchStatus;
                }

            }

            if ("In_InitialLength" in inputs) {
                this.variables.in_InitialLengthIn = inputs.In_InitialLength;
                if ("_in_InitialLengthInDataFetchStatus" in inputs) {
                    this.variables._in_InitialLengthInDataFetchStatus = inputs._in_InitialLengthInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.InputCounter");
});
define("UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$model", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_model, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets) {
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
        View.displayName = "ConnectPatterns.InputCounter";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("AOV_xkDV1USJBofTRXjB3A.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.textOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
                                rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
                                rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                return rec;
                            }();
                            return rec;
                        }();
                    }),
                    ExtendedClasses: "text-align-right"
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
                        return [React.createElement(OSWidgets.Expression, {
                            value: (((model.variables.currentLengthVar).toString() + "/") + (model.variables.maxLengthVar).toString()),
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.maxLengthVar), asPrimitiveValue(model.variables.currentLengthVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$controller.OnReady.LimitMaxLenthJS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_controller_OnReady_LimitMaxLenthJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                setCurrentLength$Action: function(lengthIn) {
                    lengthIn = (lengthIn === undefined) ? 0 : lengthIn;
                    return controller.executeActionInsideJSNode(controller._setCurrentLength$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(lengthIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "SetCurrentLength");
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
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:0FN9FVwTXEWmfKs7j7zLAQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.cBducvcq+U2ftGMx8ZL60g/ClientActions.0FN9FVwTXEWmfKs7j7zLAQ:rjOB6ANO+DMVxU9aZ4NvKw", "UBTConnectLibrary", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CtGXD1hYtky4tnoqfLvKow", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YSp+UUHF3ES6I9gdMJvNRA", callContext.id) && ((model.variables.in_InitialLengthIn) !== (0)))) {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IRNlIun2SEC1NWSi6u83_A", callContext.id);
                    // Execute Action: SetCurrentLength
                    controller._setCurrentLength$Action(model.variables.in_InitialLengthIn, callContext);
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2NZ_5WO5OEOMoUjeKR1+Dw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yGp5o6D36kOProlSq4ChuQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:0FN9FVwTXEWmfKs7j7zLAQ", callContext.id);
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
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:jiwd5LuYikik6MlXxlq7Sw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.cBducvcq+U2ftGMx8ZL60g/ClientActions.jiwd5LuYikik6MlXxlq7Sw:51bEc2RIeZoUoMbBldlUKg", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZQltzc6HnE2E91ldTs8OxQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:njW3fmsoUkSWXhW4SQMZ+w", callContext.id);
                // Execute Action: SetCurrentLength
                controller._setCurrentLength$Action(model.variables.in_InitialLengthIn, callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:i2_gtYx1BEeCY70s5AvTww", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:jiwd5LuYikik6MlXxlq7Sw", callContext.id);
            }

        };
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var limitMaxLenthJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.limitMaxLenthJSResult = limitMaxLenthJSResult;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:W0qR5_8sOEGcylFcWFy3PQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.cBducvcq+U2ftGMx8ZL60g/ClientActions.W0qR5_8sOEGcylFcWFy3PQ:E6vgPond+tD3_tOp7K4XEg", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MPd_MiAI9kunwvOJDeZ3fg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FsEqVpUjNUSo3YxHduHx7w", callContext.id);
                limitMaxLenthJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_controller_OnReady_LimitMaxLenthJS, "LimitMaxLenth", "OnReady", {
                    InputId: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_InputIdIn, OS.DataTypes.DataTypes.Text),
                    MaxLen: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.InputCounter.OnReady$limitMaxLenthJSResult"))();
                    jsNodeResult.maxLenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MaxLen, OS.DataTypes.DataTypes.Integer);
                    return jsNodeResult;
                }, {
                    SetCurrentLength: controller.clientActionProxies.setCurrentLength$Action
                }, {});
                // MaxValue
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WBJ7kRq100uurn81ljc6_g", callContext.id);
                // MaxLength = LimitMaxLenth.MaxLen
                model.variables.maxLengthVar = limitMaxLenthJSResult.value.maxLenOut;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:K9XKJpe+ZUWmDChZwJjK9w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:W0qR5_8sOEGcylFcWFy3PQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.InputCounter.OnReady$limitMaxLenthJSResult", [{
            name: "MaxLen",
            attrName: "maxLenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._setCurrentLength$Action = function(lengthIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetCurrentLength");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.InputCounter.SetCurrentLength$vars"))());
            vars.value.lengthInLocal = lengthIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:orUh9_nkQ0+Z9gKvy5Yt7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.cBducvcq+U2ftGMx8ZL60g/ClientActions.orUh9_nkQ0+Z9gKvy5Yt7g:cyOIBtoXfH8c232lK2S1Eg", "UBTConnectLibrary", "SetCurrentLength", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lM4Nqv6Qh06f76X51_Z0FA", callContext.id);
                // CurrLength
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fLekIfId3Eqzz5Taos_aJw", callContext.id);
                // CurrentLength = Length
                model.variables.currentLengthVar = vars.value.lengthInLocal;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mDU5_7wKT0uM10lqtaPhIg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:orUh9_nkQ0+Z9gKvy5Yt7g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.InputCounter.SetCurrentLength$vars", [{
            name: "Length",
            attrName: "lengthInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.setCurrentLength$Action = function(lengthIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setCurrentLength$Action, callContext, lengthIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:HQrHi0+5qbWvCjIx1QgARg", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:cBducvcq+U2ftGMx8ZL60g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.cBducvcq+U2ftGMx8ZL60g:zKA548wrk0g0_5qgHTmqXQ", "UBTConnectLibrary", "InputCounter", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:cBducvcq+U2ftGMx8ZL60g", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/InputCounter On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/InputCounter On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/InputCounter On Parameters Changed");
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
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$controller.OnReady.LimitMaxLenthJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var limitField = function(evt) {
            var maxlength = evt.target.getAttribute("maxlength");
            if (evt.target.value.length > maxlength) {
                evt.target.value = evt.target.value.substr(0, maxlength);
            }
            $actions.SetCurrentLength(parseInt(evt.target.value.length));
        }
        document.getElementById($parameters.InputId).addEventListener('input', limitField);
        $parameters.MaxLen = parseInt(document.getElementById($parameters.InputId).getAttribute("maxlength"));

    };
});

define("UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "FsEqVpUjNUSo3YxHduHx7w": {
            getter: function(varBag, idService) {
                return varBag.limitMaxLenthJSResult.value;
            }
        },
        "N5AZP1hU_EmVSord26s6CQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.lengthInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "g_5JQ++jnky4CddrNnioww": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxLengthVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "PxyWbG74d0KJe5IlATPhZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentLengthVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "kZb6fjR5HUm8cpUmg5_iNA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_InputIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "p_bq2xfgAkOcBDjXjFDTeA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_InitialLengthIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "HCSUAa4Z7E6mcit7zKCu5A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});