define("OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRec", "OutSystemsUI_2_23.controller$ButtonLoadingDestroy", "OutSystemsUI_2_23.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI_2_23.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI_2_23.controller$ButtonLoadingRegisterCallback", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$ButtonLoadingCreate", "OutSystemsUI_2_23.controller$ButtonLoadingInitialize"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec());
                }, false, OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec),
                this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShowLabelOnLoading", "showLabelOnLoadingIn", "ShowLabelOnLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("IsLoading" in inputs) {
                this.variables.isLoadingIn = inputs.IsLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

            if ("ShowLabelOnLoading" in inputs) {
                this.variables.showLabelOnLoadingIn = inputs.ShowLabelOnLoading;
                if ("_showLabelOnLoadingInDataFetchStatus" in inputs) {
                    this.variables._showLabelOnLoadingInDataFetchStatus = inputs._showLabelOnLoadingInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "Utilities.ButtonLoading");
});
define("OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$model", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRec", "OutSystemsUI_2_23.controller$ButtonLoadingDestroy", "OutSystemsUI_2_23.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI_2_23.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI_2_23.controller$ButtonLoadingRegisterCallback", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$ButtonLoadingCreate", "OutSystemsUI_2_23.controller$ButtonLoadingInitialize"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_model, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_controller, OSWidgets) {
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
        View.displayName = "Utilities.ButtonLoading";
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
                return OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.button,
                extendedProperties: {
                    name: model.variables.internal_ConfigsVar.uniqueIdAttr
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "osui-btn-loading",
                _idProps: {
                    service: idService,
                    name: "Button"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$translationsResources", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$debugger", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRec", "OutSystemsUI_2_23.controller$ButtonLoadingDestroy", "OutSystemsUI_2_23.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI_2_23.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI_2_23.controller$ButtonLoadingRegisterCallback", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$ButtonLoadingCreate", "OutSystemsUI_2_23.controller$ButtonLoadingInitialize"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_TranslationsResources, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_Debugger, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: function(buttonLoadingIdIn) {
                    buttonLoadingIdIn = (buttonLoadingIdIn === undefined) ? "" : buttonLoadingIdIn;
                    return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(buttonLoadingIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "InitializedHandler");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        Controller.prototype.translationResources = OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_TranslationsResources;
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._initializedHandler$Action = function(buttonLoadingIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("InitializedHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.ButtonLoading.InitializedHandler$vars"))());
            vars.value.buttonLoadingIdInLocal = buttonLoadingIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:JtLfDgq3r0qP8sDJcpUqrA:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.JtLfDgq3r0qP8sDJcpUqrA:JurpwwP6Gw3J0SBptPxlUQ", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:cKAfBEbSw0epCJWAu7Cn8Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iy1OD37kBEiL+LWR8majuA", callContext.id);
                // Trigger Event: Initialized
                return controller.initialized$Action(vars.value.buttonLoadingIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KnMvZcWHlUSo7POBl_9b9w", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:JtLfDgq3r0qP8sDJcpUqrA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:JtLfDgq3r0qP8sDJcpUqrA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.ButtonLoading.InitializedHandler$vars", [{
            name: "ButtonLoadingId",
            attrName: "buttonLoadingIdInLocal",
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:fT6WgLmJKkefa8HPqYKo4A:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.fT6WgLmJKkefa8HPqYKo4A:J8+N7eC63j+q1GliJDQYjA", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:IWWNn6HBzEWIBIG1uR5k9A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:gzuvU6xuP0m0lVFUWo+DzQ", callContext.id);
                // Execute Action: ButtonLoadingDestroy
                OutSystemsUI_2_23Controller.default.buttonLoadingDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4vISs363ZUiquonZDfxNTA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:fT6WgLmJKkefa8HPqYKo4A", callContext.id);
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:ua+K2+arW0CnrKdgSPygkQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.ua+K2+arW0CnrKdgSPygkQ:fD6QCAMnaDQa1VGai8W8zQ", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EAHrP7ogeUmwGJw2FQr64g", callContext.id);
                // IsLoading?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:1hM+HTrPBEKfZrFYzQHnSw", callContext.id) && ((model.variables.isLoadingIn) !== (model.variables.internal_ConfigsVar.isLoadingAttr)))) {
                    // Set IsLoading
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Xemsk3r7dE+4olDlfNLh_g", callContext.id);
                    // Internal_Configs.IsLoading = IsLoading
                    model.variables.internal_ConfigsVar.isLoadingAttr = model.variables.isLoadingIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VXRkxavf3kq7IX1gWLykHg", callContext.id);
                    // Execute Action: Update_IsLoading
                    OutSystemsUI_2_23Controller.default.buttonLoadingChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "IsLoading", model.variables.isLoadingIn, callContext);
                }

                // ShowLoadingAndLabel?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:K0FFpts5WEylML2bQxJfgA", callContext.id) && ((model.variables.showLabelOnLoadingIn) !== (model.variables.internal_ConfigsVar.showLoadingAndLabelAttr)))) {
                    // Set ShowLoadingAndLabel
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Vh1eKmUF6kiE721IkjCqDg", callContext.id);
                    // Internal_Configs.ShowLoadingAndLabel = ShowLabelOnLoading
                    model.variables.internal_ConfigsVar.showLoadingAndLabelAttr = model.variables.showLabelOnLoadingIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XP9a7auM0EyoGI6D+oALMA", callContext.id);
                    // Execute Action: Update_IsVisible
                    OutSystemsUI_2_23Controller.default.buttonLoadingChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ShowLoadingAndLabel", model.variables.internal_ConfigsVar.showLoadingAndLabelAttr, callContext);
                }

                // ExtendedClass?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:W39tJ3jg3Uu8zCkvJk8WJg", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
                    // Set ExtendedClass
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:yqSLuX104E6vkysxgBggww", callContext.id);
                    // Internal_Configs.ExtendedClass = ExtendedClass
                    model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:gI8c6U7y4U256pOsXvR2Eg", callContext.id);
                    // Execute Action: Update_ExtendedClass
                    OutSystemsUI_2_23Controller.default.buttonLoadingChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GtogxBUKzUaPbjRltGzdTQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GtogxBUKzUaPbjRltGzdTQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:ua+K2+arW0CnrKdgSPygkQ", callContext.id);
            }

        };
        Controller.prototype._registerCallbacks$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RegisterCallbacks");
            callContext = controller.callContext(callContext);
            var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCallbackHandlersJSResult = getCallbackHandlersJSResult;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:_C+v6Z3eAEexuKPwrQ+ZQw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions._C+v6Z3eAEexuKPwrQ+ZQw:Y99SsTNIL+QzVXRdkGXMmw", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Umxt_61UvUyQltOjiQDqlQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:AOBsPPiuLEWs1Bvf3PqMeg", callContext.id);
                getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
                    Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult"))();
                    jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    InitializedHandler: controller.clientActionProxies.initializedHandler$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:N_44F1d43EaVWTHSRFLZuw", callContext.id);
                // Execute Action: RegisterOnInitialize
                OutSystemsUI_2_23Controller.default.buttonLoadingRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:TlwPDioEc0y4qb1tSv53xw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:_C+v6Z3eAEexuKPwrQ+ZQw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult", [{
            name: "Initialized",
            attrName: "initializedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
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
            var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.generateUniqueIdVar = generateUniqueIdVar;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:iwKO69LgDUqZp_l2GKHq2g:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.iwKO69LgDUqZp_l2GKHq2g:l8kBAI775SNDCU5QrK3rhw", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aVBmr4KzmUKvizM9g5FLJA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:EnKOKIoHpEOj0yXkzE72EA", callContext.id);
                // Execute Action: LogStart
                OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create ButtonLoading", callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:N9mIyzb4eUSkHyfk5NvMzQ", callContext.id);
                // Execute Action: GenerateUniqueId
                generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

                // Set Internal Configs
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id);
                // Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
                model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Internal_Configs.IsLoading = IsLoading
                model.variables.internal_ConfigsVar.isLoadingAttr = model.variables.isLoadingIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // Internal_Configs.ShowLoadingAndLabel = ShowLabelOnLoading
                model.variables.internal_ConfigsVar.showLoadingAndLabelAttr = model.variables.showLabelOnLoadingIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // Internal_Configs.ExtendedClass = ExtendedClass
                model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:gzXIy2Xa_UWDF4p4vIF1wQ", callContext.id);
                // Execute Action: ButtonLoadingCreate
                OutSystemsUI_2_23Controller.default.buttonLoadingCreate$Action(model.variables.internal_ConfigsVar, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Wh2JinH_MUeazHVbkAtOlw", callContext.id);
                // Execute Action: RegisterCallbacks
                controller._registerCallbacks$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2DGHUP+ofEaKnZY0kw2lKQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:iwKO69LgDUqZp_l2GKHq2g", callContext.id);
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:PD4m_82_6keguZb7EmT65Q:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.PD4m_82_6keguZb7EmT65Q:gbnfATcd13lPnbeV7Rb4Xw", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:CmYKRuirOU2Ld6OSpOW67Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:abKcSFaMyESXi5dqcLBgfg", callContext.id);
                // Execute Action: ButtonLoadingInitialize
                OutSystemsUI_2_23Controller.default.buttonLoadingInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:7DwyRZsX_0mNXao7j+wldQ", callContext.id);
                // Execute Action: LogEnd
                OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "ButtonLoading created", callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BBI1NP4iD0Slgotf7qt3qg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:PD4m_82_6keguZb7EmT65Q", callContext.id);
            }

        };

        Controller.prototype.initializedHandler$Action = function(buttonLoadingIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, buttonLoadingIdIn);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.registerCallbacks$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.initialized$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:_sU6Z6zEdfa0yPg51D1SZg", "OutSystemsUI_2_23", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:sSn7tkVXQ0+4h+mLel610Q:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q:K5mVE92RTEPe7pUDcZhS_w", "OutSystemsUI_2_23", "ButtonLoading", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:sSn7tkVXQ0+4h+mLel610Q", callContext.id);
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Destroy");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Parameters Changed");
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
define("OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Initialized = $actions.InitializedHandler;
    };
});

define("OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "eS3Gcup44k2YTqBxIet5sQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.buttonLoadingIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "AOBsPPiuLEWs1Bvf3PqMeg": {
            getter: function(varBag, idService) {
                return varBag.getCallbackHandlersJSResult.value;
            }
        },
        "N9mIyzb4eUSkHyfk5NvMzQ": {
            getter: function(varBag, idService) {
                return varBag.generateUniqueIdVar.value;
            }
        },
        "BqZXklpcOUGbzg_lRcKwew": {
            getter: function(varBag, idService) {
                return varBag.model.variables.internal_ConfigsVar;
            }
        },
        "5vwk7_knKEOeJsCNs8sgTw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "_2vyWllrYEay2VDyvPRbZw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showLabelOnLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "bqiZP3Ect0aiJXrwX31a0A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "CVl6ZCZWOUClYIFkomzQQg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Button"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});