define("OutSystemsUI_2_23.Interaction.BottomSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$BottomSheet_InternalConfigRec", "OutSystemsUI_2_23.controller$BottomSheetCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$BottomSheetRegisterCallback", "OutSystemsUI_2_23.controller$BottomSheetDestroy", "OutSystemsUI_2_23.controller$BottomSheetInitialize", "OutSystemsUI_2_23.controller$BottomSheetChangeTextProperty", "OutSystemsUI_2_23.controller$BottomSheetChangeBooleanProperty"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.BottomSheet_InternalConfigRec());
                }, false, OutSystemsUI_2_23Model.BottomSheet_InternalConfigRec),
                this.attr("Shape", "shapeIn", "Shape", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return OutSystemsUI_2_23Model.staticEntities.shape.softRounded;
                }, false),
                this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShowHandler", "showHandlerIn", "ShowHandler", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Shape" in inputs) {
                this.variables.shapeIn = inputs.Shape;
                if ("_shapeInDataFetchStatus" in inputs) {
                    this.variables._shapeInDataFetchStatus = inputs._shapeInDataFetchStatus;
                }

            }

            if ("ShowHandler" in inputs) {
                this.variables.showHandlerIn = inputs.ShowHandler;
                if ("_showHandlerInDataFetchStatus" in inputs) {
                    this.variables._showHandlerInDataFetchStatus = inputs._showHandlerInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Interaction.BottomSheet");
});
define("OutSystemsUI_2_23.Interaction.BottomSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$model", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$BottomSheet_InternalConfigRec", "OutSystemsUI_2_23.controller$BottomSheetCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$BottomSheetRegisterCallback", "OutSystemsUI_2_23.controller$BottomSheetDestroy", "OutSystemsUI_2_23.controller$BottomSheetInitialize", "OutSystemsUI_2_23.controller$BottomSheetChangeTextProperty", "OutSystemsUI_2_23.controller$BottomSheetChangeBooleanProperty"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_model, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_controller, OSWidgets) {
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
        View.displayName = "Interaction.BottomSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Interaction_BottomSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Interaction_BottomSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        name: model.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-bottom-sheet",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "BottomSheet"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.AdvancedHtml, {
                    extendedProperties: {
                        className: "osui-bottom-sheet__header"
                    },
                    tag: "header",
                    _idProps: {
                        service: idService,
                        name: "Header"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.topBar,
                    style: "osui-bottom-sheet__header__top-bar",
                    _idProps: {
                        service: idService,
                        name: "TopBar"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.content,
                    style: "osui-bottom-sheet__content",
                    _idProps: {
                        service: idService,
                        name: "Content"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "osui-bottom-sheet-overlay",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("OutSystemsUI_2_23.Interaction.BottomSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$translationsResources", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$debugger", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$controller.RegisterCallback.GetCallbackHandlerJS", "OutSystemsUI_2_23.model$BottomSheet_InternalConfigRec", "OutSystemsUI_2_23.controller$BottomSheetCreate", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$BottomSheetRegisterCallback", "OutSystemsUI_2_23.controller$BottomSheetDestroy", "OutSystemsUI_2_23.controller$BottomSheetInitialize", "OutSystemsUI_2_23.controller$BottomSheetChangeTextProperty", "OutSystemsUI_2_23.controller$BottomSheetChangeBooleanProperty"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_TranslationsResources, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_Debugger, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_controller_RegisterCallback_GetCallbackHandlerJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: function(bottomSheetIdIn) {
                    bottomSheetIdIn = (bottomSheetIdIn === undefined) ? "" : bottomSheetIdIn;
                    return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bottomSheetIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "InitializedHandler");
                },
                onToggleHandler$Action: function(bottomSheetIdIn, isBottomSheetOpenIn) {
                    bottomSheetIdIn = (bottomSheetIdIn === undefined) ? "" : bottomSheetIdIn;
                    isBottomSheetOpenIn = (isBottomSheetOpenIn === undefined) ? false : isBottomSheetOpenIn;
                    return controller.executeActionInsideJSNode(controller._onToggleHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bottomSheetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isBottomSheetOpenIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "OnToggleHandler");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        Controller.prototype.translationResources = OutSystemsUI_2_23_Interaction_BottomSheet_mvc_TranslationsResources;
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
            var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
            var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
            varBag.callContext = callContext;
            varBag.generateUniqueIdVar = generateUniqueIdVar;
            varBag.serialize_configsVar = serialize_configsVar;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:uqskJf_5HU+ar9dQOVimcQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw/ClientActions.uqskJf_5HU+ar9dQOVimcQ:en1zFJjQJ3q4FELkDqaw0g", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cASWDYGbaEubuAW58OLQ2Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8M+Aj4Mg3k2IJ4c2BRfIRQ", callContext.id);
                // Execute Action: GenerateUniqueId
                generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

                // Set Initial Configs
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:K5saLwR2IUWiK6_moCmY1g", callContext.id);
                // InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
                model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:K5saLwR2IUWiK6_moCmY1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // InternalConfigs.ExtendedClass = ExtendedClass
                model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:K5saLwR2IUWiK6_moCmY1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // InternalConfigs.Shape = Shape
                model.variables.internalConfigsVar.shapeAttr = model.variables.shapeIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:K5saLwR2IUWiK6_moCmY1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // InternalConfigs.ShowHandler = ShowHandler
                model.variables.internalConfigsVar.showHandlerAttr = model.variables.showHandlerIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Ilar7a0AGkCS0FpVAwfCnw", callContext.id);
                // JSON Serialize: Serialize_configs
                serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:t2u0OH8Jqk+CV_VXfJlysg", callContext.id);
                // Execute Action: BottomSheetCreate
                OutSystemsUI_2_23Controller.default.bottomSheetCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:x9SL7UeES0OUhdPpHlNMqA", callContext.id);
                // Execute Action: RegisterCallback
                controller._registerCallback$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2jJ5fTiT60apf8nPZUvv5w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:uqskJf_5HU+ar9dQOVimcQ", callContext.id);
            }

        };
        Controller.prototype._registerCallback$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RegisterCallback");
            callContext = controller.callContext(callContext);
            var getCallbackHandlerJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCallbackHandlerJSResult = getCallbackHandlerJSResult;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:TcH3QZyiYEW7150QPMlLew:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw/ClientActions.TcH3QZyiYEW7150QPMlLew:qLxotYnCuA2MpuMVkiEHBw", "OutSystemsUI_2_23", "RegisterCallback", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jrUo59JE+kKgUhcEYA0NSA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:d7NS4TN2R02hf2nSF4IuCA", callContext.id);
                getCallbackHandlerJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Interaction_BottomSheet_mvc_controller_RegisterCallback_GetCallbackHandlerJS, "GetCallbackHandler", "RegisterCallback", {
                    OnInitializedHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
                    OnToggleHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult"))();
                    jsNodeResult.onInitializedHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnInitializedHandler, OS.DataTypes.DataTypes.Object);
                    jsNodeResult.onToggleHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnToggleHandler, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
                    OnToggleHandler: controller.clientActionProxies.onToggleHandler$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:5kmjowFP50afNlwRxsIagg", callContext.id);
                // Execute Action: BottomSheetRegisterOnInitializedCallback
                OutSystemsUI_2_23Controller.default.bottomSheetRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlerJSResult.value.onInitializedHandlerOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WVbpBzwCV0OZNii27GtEIg", callContext.id);
                // Execute Action: BottomSheetRegisterOnToggleCallback
                OutSystemsUI_2_23Controller.default.bottomSheetRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.onToggle, getCallbackHandlerJSResult.value.onToggleHandlerOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lExIScFKpEuBsh+XP5wwOA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:TcH3QZyiYEW7150QPMlLew", callContext.id);
            }

        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult", [{
            name: "OnInitializedHandler",
            attrName: "onInitializedHandlerOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }, {
            name: "OnToggleHandler",
            attrName: "onToggleHandlerOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._onToggleHandler$Action = function(bottomSheetIdIn, isBottomSheetOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnToggleHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.BottomSheet.OnToggleHandler$vars"))());
            vars.value.bottomSheetIdInLocal = bottomSheetIdIn;
            vars.value.isBottomSheetOpenInLocal = isBottomSheetOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:XVsQhseBBUazR8xNowLpCQ:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw/ClientActions.XVsQhseBBUazR8xNowLpCQ:UEaJe0fq2BbUWN8C2sFHGw", "OutSystemsUI_2_23", "OnToggleHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Q9ggytnEtESw0cKyih6DOQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:mZWJYDZww0CTI7guSwcEXg", callContext.id);
                // Trigger Event: OnToggle
                return controller.onToggle$Action(vars.value.bottomSheetIdInLocal, vars.value.isBottomSheetOpenInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VxmgtxLdhUKUDvAxFOsyzg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:XVsQhseBBUazR8xNowLpCQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:XVsQhseBBUazR8xNowLpCQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.BottomSheet.OnToggleHandler$vars", [{
            name: "BottomSheetId",
            attrName: "bottomSheetIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "IsBottomSheetOpen",
            attrName: "isBottomSheetOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._initializedHandler$Action = function(bottomSheetIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("InitializedHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Interaction.BottomSheet.InitializedHandler$vars"))());
            vars.value.bottomSheetIdInLocal = bottomSheetIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:XYm_lzAwLkG+rCYqxybkEA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw/ClientActions.XYm_lzAwLkG+rCYqxybkEA:qNNGGlS3Dt5QitDrNgAQiw", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:5fGniRtTb0OZMTdDkZvqLQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:HTVOcIsoREWH7CSDQaPwtg", callContext.id);
                // Trigger Event: Initialized
                return controller.initialized$Action(vars.value.bottomSheetIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EmnSd7WUv0yiKbE3+RXdKw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:XYm_lzAwLkG+rCYqxybkEA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:XYm_lzAwLkG+rCYqxybkEA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Interaction.BottomSheet.InitializedHandler$vars", [{
            name: "BottomSheetId",
            attrName: "bottomSheetIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qVISsEVneEqMFA6igZn21w:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw/ClientActions.qVISsEVneEqMFA6igZn21w:4Ahk5vVs_Fkxgv+S1L6B0g", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:_lpEpH0yE0+qnbB4LAAVmA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SfUlyo6gQkGN50qpVjR+rw", callContext.id);
                // Execute Action: BottomSheetDestroy
                OutSystemsUI_2_23Controller.default.bottomSheetDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ZBC9+pEuNE6FOCZIAniaBA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qVISsEVneEqMFA6igZn21w", callContext.id);
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:mJMw13fe6EyhZWqqCfnSmg:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw/ClientActions.mJMw13fe6EyhZWqqCfnSmg:n8NOuVmYe2_xOKsGMNK8AQ", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qHbxFc1OuUmfgmnXaCVJkw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Y6lSU3WwVUaIPbVHZqcKvw", callContext.id);
                // Execute Action: BottomSheetInitialize
                OutSystemsUI_2_23Controller.default.bottomSheetInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Q3XxyOKrBke6K5570wJ8Jg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:mJMw13fe6EyhZWqqCfnSmg", callContext.id);
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:O_dW9iNmU0Kr+mKtMG4r8Q:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw/ClientActions.O_dW9iNmU0Kr+mKtMG4r8Q:iukF2Nbe0cZkeQTQ1ldUYg", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:757YfhQuika1jcfHw5GHFQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:tO5IOJd5mUyXsTLGBE_MsQ", callContext.id) && ((model.variables.internalConfigsVar.shapeAttr) !== (model.variables.shapeIn)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cHRa1Q+IS0ekmnDU6pLz8Q", callContext.id);
                    // InternalConfigs.Shape = Shape
                    model.variables.internalConfigsVar.shapeAttr = model.variables.shapeIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:oFU3NVDn5UiPXOEMLC6D8w", callContext.id);
                    // Execute Action: Update_Shape
                    OutSystemsUI_2_23Controller.default.bottomSheetChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Shape", model.variables.internalConfigsVar.shapeAttr, callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:q64H+Uhz7UWM3HyuhatqFg", callContext.id) && ((model.variables.internalConfigsVar.showHandlerAttr) !== (model.variables.showHandlerIn)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qrAYlwtxt0GGtV4O4udhJg", callContext.id);
                    // InternalConfigs.ShowHandler = ShowHandler
                    model.variables.internalConfigsVar.showHandlerAttr = model.variables.showHandlerIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:H0JHNUs0TEewi2xnpi1Npw", callContext.id);
                    // Execute Action: Update_ShowHandler
                    OutSystemsUI_2_23Controller.default.bottomSheetChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ShowHandler", model.variables.internalConfigsVar.showHandlerAttr, callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:i3679vkNfUOp_XkiFsVpmA", callContext.id) && ((model.variables.internalConfigsVar.extendedClassAttr) !== (model.variables.extendedClassIn)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+HC0rd2dmUaTh+KJsoPtXg", callContext.id);
                    // InternalConfigs.ExtendedClass = ExtendedClass
                    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:fDkBgUm9jUitni_VoGsnMw", callContext.id);
                    // Execute Action: Update_ExtendedClass
                    OutSystemsUI_2_23Controller.default.bottomSheetChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DQpioEbSVUWYNppD3urFcQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DQpioEbSVUWYNppD3urFcQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:O_dW9iNmU0Kr+mKtMG4r8Q", callContext.id);
            }

        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.registerCallback$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._registerCallback$Action, callContext);

        };
        Controller.prototype.onToggleHandler$Action = function(bottomSheetIdIn, isBottomSheetOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onToggleHandler$Action, callContext, bottomSheetIdIn, isBottomSheetOpenIn);

        };
        Controller.prototype.initializedHandler$Action = function(bottomSheetIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, bottomSheetIdIn);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.initialized$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onToggle$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:lqPcl3zEGn9YSs1SWHw12A", "OutSystemsUI_2_23", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:YUy2T0GJvkS4VNoLYIpiWw:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.YUy2T0GJvkS4VNoLYIpiWw:IXOajqu1y0NETFqs3PkGYw", "OutSystemsUI_2_23", "BottomSheet", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:YUy2T0GJvkS4VNoLYIpiWw", callContext.id);
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/BottomSheet On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/BottomSheet On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/BottomSheet On Destroy");
                return controller.onDestroy$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Interaction/BottomSheet On Parameters Changed");
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
            return OutSystemsUI_2_23Controller.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Interaction.BottomSheet.mvc$controller.RegisterCallback.GetCallbackHandlerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.OnInitializedHandler = $actions.InitializedHandler;
        $parameters.OnToggleHandler = $actions.OnToggleHandler;
    };
});

define("OutSystemsUI_2_23.Interaction.BottomSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "8M+Aj4Mg3k2IJ4c2BRfIRQ": {
            getter: function(varBag, idService) {
                return varBag.generateUniqueIdVar.value;
            }
        },
        "Ilar7a0AGkCS0FpVAwfCnw": {
            getter: function(varBag, idService) {
                return varBag.serialize_configsVar.value;
            }
        },
        "d7NS4TN2R02hf2nSF4IuCA": {
            getter: function(varBag, idService) {
                return varBag.getCallbackHandlerJSResult.value;
            }
        },
        "BDySwndBLU+005w9f6r3ug": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bottomSheetIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "6qQo8DTlz0yZDmFAWeIQvw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isBottomSheetOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9PwfoQN0JUGwBAPJLsIkkA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bottomSheetIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "hAuYcaktxk6wRGfHNGLwUQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.internalConfigsVar;
            }
        },
        "RUD4BIN06ECAraMgcH8Lyw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shapeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "SQYRIqAiN06LXGvSAtwFOw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showHandlerIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "1tRRMbc3WkadmLmtp1KMdw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rYs7wE24ykqZgcYpDPibOQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TogglePreview"));
                })(varBag.model, idService);
            }
        },
        "677t20gDzES0YVcQCgi4Ig": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomSheet"));
                })(varBag.model, idService);
            }
        },
        "fHvuwk9dQkm_ug1_aj9VFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Header"));
                })(varBag.model, idService);
            }
        },
        "+2FnA5kcfEyom+aWimZHfQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TopBar"));
                })(varBag.model, idService);
            }
        },
        "GQQsVaLQq0WzCTs7YlkC_A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Interaction.BottomSheet.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});