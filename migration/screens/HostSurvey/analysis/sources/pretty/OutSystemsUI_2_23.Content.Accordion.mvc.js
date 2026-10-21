define("OutSystemsUI_2_23.Content.Accordion.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$Accordion_InternalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$AccordionInitialize", "OutSystemsUI_2_23.controller$AccordionRegisterCallback", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionCreate", "OutSystemsUI_2_23.controller$AccordionChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionDestroy"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Accordion_InternalConfigsRec());
                }, false, OutSystemsUI_2_23Model.Accordion_InternalConfigsRec),
                this.attr("MultipleItems", "multipleItemsIn", "MultipleItems", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_multipleItemsInDataFetchStatus", "_multipleItemsInDataFetchStatus", "_multipleItemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("MultipleItems" in inputs) {
                this.variables.multipleItemsIn = inputs.MultipleItems;
                if ("_multipleItemsInDataFetchStatus" in inputs) {
                    this.variables._multipleItemsInDataFetchStatus = inputs._multipleItemsInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "Content.Accordion");
});
define("OutSystemsUI_2_23.Content.Accordion.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.Accordion.mvc$model", "OutSystemsUI_2_23.Content.Accordion.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$Accordion_InternalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$AccordionInitialize", "OutSystemsUI_2_23.controller$AccordionRegisterCallback", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionCreate", "OutSystemsUI_2_23.controller$AccordionChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionDestroy"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_Accordion_mvc_model, OutSystemsUI_2_23_Content_Accordion_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.Accordion";
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
                return OutSystemsUI_2_23_Content_Accordion_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_Accordion_mvc_controller;
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
                content: _this.props.placeholders.content,
                extendedProperties: {
                    name: model.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "osui-accordion",
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("OutSystemsUI_2_23.Content.Accordion.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Content.Accordion.mvc$translationsResources", "OutSystemsUI_2_23.Content.Accordion.mvc$debugger", "OutSystemsUI_2_23.Content.Accordion.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$Accordion_InternalConfigsRec", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$AccordionInitialize", "OutSystemsUI_2_23.controller$AccordionRegisterCallback", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionCreate", "OutSystemsUI_2_23.controller$AccordionChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionDestroy"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Content_Accordion_mvc_TranslationsResources, OutSystemsUI_2_23_Content_Accordion_mvc_Debugger, OutSystemsUI_2_23_Content_Accordion_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: function(accordionIdIn) {
                    accordionIdIn = (accordionIdIn === undefined) ? "" : accordionIdIn;
                    return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(accordionIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
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
        Controller.prototype.translationResources = OutSystemsUI_2_23_Content_Accordion_mvc_TranslationsResources;
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:+LoUB3R4ykaL+wVsmgzU+w:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.+LoUB3R4ykaL+wVsmgzU+w:xEFwszEzQa1nmxpRIAj_4w", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:OgLd7a7IiUa9l9_DiMGyeg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UsQ7rBdB8Eq81Z+f5Kob4w", callContext.id);
                // Execute Action: AccordionInitialize
                OutSystemsUI_2_23Controller.default.accordionInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XGsyHCA2R02_gLYo16Cvcw", callContext.id);
                // Execute Action: LogEnd
                OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Accordion created", callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2IjZ7qQPg0KEJ2DD496NUg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:+LoUB3R4ykaL+wVsmgzU+w", callContext.id);
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:PT7PDKOXx0m_8sj20PFnrA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.PT7PDKOXx0m_8sj20PFnrA:y54rQu_tsBZSG9dO_xdsrA", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:1CJMSd7rVUq+zJWtRNeBUA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:a7OoLCqqg0OAbai2Kf9sEA", callContext.id);
                getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_Accordion_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
                    Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.Accordion.RegisterCallbacks$getCallbackHandlersJSResult"))();
                    jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    InitializedHandler: controller.clientActionProxies.initializedHandler$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Eftn3cg5xUaE2BsrQNxVPg", callContext.id);
                // Execute Action: RegisterOnInitialize
                OutSystemsUI_2_23Controller.default.accordionRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:X259srZupE6e+E8+I+sQ7A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:PT7PDKOXx0m_8sj20PFnrA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.Accordion.RegisterCallbacks$getCallbackHandlersJSResult", [{
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:eQvTRO_d90qVhcYzJz5FOA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.eQvTRO_d90qVhcYzJz5FOA:qbLQjja1BcZSHsCFYiQl2A", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:6Rl02AFKFEuMYIODHLvhJA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:GRcAqSjXGEaKxQ_KPElEiA", callContext.id);
                // Execute Action: LogStart
                OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create Accordion", callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:av4JHLeOgEWTYmb8TyhMcg", callContext.id);
                // Execute Action: GenerateUniqueId
                generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

                // Set Internal Configs
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XYMN6DzloEOLaxe1HhBd0Q", callContext.id);
                // InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
                model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XYMN6DzloEOLaxe1HhBd0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // InternalConfigs.MultipleItems = MultipleItems
                model.variables.internalConfigsVar.multipleItemsAttr = model.variables.multipleItemsIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:XYMN6DzloEOLaxe1HhBd0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // InternalConfigs.ExtendedClass = ExtendedClass
                model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lr7Oas5rmkOkekhEihUlqg", callContext.id);
                // Execute Action: AccordionCreate
                OutSystemsUI_2_23Controller.default.accordionCreate$Action(model.variables.internalConfigsVar, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3lkUzGEILkSCfQwwdjqf7g", callContext.id);
                // Execute Action: RegisterCallbacks
                controller._registerCallbacks$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:sHdXV7Zl1E6+dtgjEcuelg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:eQvTRO_d90qVhcYzJz5FOA", callContext.id);
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:VGn1cJuVwE+ElHfi63Y4xQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.VGn1cJuVwE+ElHfi63Y4xQ:K_p7YzRAcp+QXS8KiugKjQ", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:myzVltfLF0OftizRBx7v0g", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ooC1lv1SkkqiPVWNVg00Rg", callContext.id) && ((model.variables.multipleItemsIn) !== (model.variables.internalConfigsVar.multipleItemsAttr)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:oyylVIdK5Ui_uTNR8O+SAw", callContext.id);
                    // InternalConfigs.MultipleItems = MultipleItems
                    model.variables.internalConfigsVar.multipleItemsAttr = model.variables.multipleItemsIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:tzxZr+vjYk2kLDpRQvn7Ew", callContext.id);
                    // Execute Action: Update_MultipleItems
                    OutSystemsUI_2_23Controller.default.accordionChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "MultipleItems", model.variables.multipleItemsIn, callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BBv9AvblGkmnj_COHwpfzw", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internalConfigsVar.extendedClassAttr)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:jG8sjCZk40y0fzgjfnO4vg", callContext.id);
                    // InternalConfigs.ExtendedClass = ExtendedClass
                    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:wgxKL0TGNE6T68thKlQHtg", callContext.id);
                    // Execute Action: Update_ExtendedClass
                    OutSystemsUI_2_23Controller.default.accordionChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QjyuX_tzlU6stOAXv9v0BQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:QjyuX_tzlU6stOAXv9v0BQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:VGn1cJuVwE+ElHfi63Y4xQ", callContext.id);
            }

        };
        Controller.prototype._initializedHandler$Action = function(accordionIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("InitializedHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.Accordion.InitializedHandler$vars"))());
            vars.value.accordionIdInLocal = accordionIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:WshygoiNc0uSW0nbpSj2nw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.WshygoiNc0uSW0nbpSj2nw:d8CsfpGjvm8QufOUViF6Mg", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:oLRqAh8_70GbhFDGdwyC+Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:xj_VdZ0kJkubq1ZXxKRsqQ", callContext.id);
                // Trigger Event: Initialized
                return controller.initialized$Action(vars.value.accordionIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8BsHF3Y9EUykCxbfIjDuqQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:WshygoiNc0uSW0nbpSj2nw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:WshygoiNc0uSW0nbpSj2nw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.Accordion.InitializedHandler$vars", [{
            name: "AccordionId",
            attrName: "accordionIdInLocal",
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
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:J4kK0Pz0Y0KNV1MdhSzahA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw/ClientActions.J4kK0Pz0Y0KNV1MdhSzahA:6iC0c1qnhPaABfonQ09SUQ", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:l1E0ZsrIx0uEr35LT5+2tw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:iQmkAsZuu0idqmFIgy20Gg", callContext.id);
                // Execute Action: AccordionDestroy
                OutSystemsUI_2_23Controller.default.accordionDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qg3OBX7ydUS1iIr8BlELNg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:J4kK0Pz0Y0KNV1MdhSzahA", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.registerCallbacks$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.initializedHandler$Action = function(accordionIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, accordionIdIn);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.initialized$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:AUjgzFQezVYFy+ax1Bu5WA", "OutSystemsUI_2_23", "Content", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:xzXesAZvmEyUJEpGSiqtcw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.xzXesAZvmEyUJEpGSiqtcw:e5EQo8rAqZq9TDDAAR7LPg", "OutSystemsUI_2_23", "Accordion", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:xzXesAZvmEyUJEpGSiqtcw", callContext.id);
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Destroy");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/Accordion On Parameters Changed");
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
define("OutSystemsUI_2_23.Content.Accordion.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Initialized = $actions.InitializedHandler;
    };
});

define("OutSystemsUI_2_23.Content.Accordion.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "a7OoLCqqg0OAbai2Kf9sEA": {
            getter: function(varBag, idService) {
                return varBag.getCallbackHandlersJSResult.value;
            }
        },
        "av4JHLeOgEWTYmb8TyhMcg": {
            getter: function(varBag, idService) {
                return varBag.generateUniqueIdVar.value;
            }
        },
        "zWNZMSpVTUihKJfwOeezbg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.accordionIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ijJ_F025kUKeMvSL1ov9oA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.internalConfigsVar;
            }
        },
        "t3+q3gl8m069OLXIhPd7vg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.multipleItemsIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "lFn3HwBbS0+YoLTUkXwRFg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "jug+1GoTyUykYNjTagSTRQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Content.Accordion.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});