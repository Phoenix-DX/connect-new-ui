define("UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.controller$GetClasses_UBTSkeletonSection", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_ToggleAttribute", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsActiveWhileLoading", "in_IsActiveWhileLoadingIn", "In_IsActiveWhileLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsActiveWhileLoadingInDataFetchStatus", "_in_IsActiveWhileLoadingInDataFetchStatus", "_in_IsActiveWhileLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("In_IsLoading" in inputs) {
                this.variables.in_IsLoadingIn = inputs.In_IsLoading;
                if ("_in_IsLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
                }

            }

            if ("In_ExtendedClass" in inputs) {
                this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
                if ("_in_ExtendedClassInDataFetchStatus" in inputs) {
                    this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
                }

            }

            if ("In_IsActiveWhileLoading" in inputs) {
                this.variables.in_IsActiveWhileLoadingIn = inputs.In_IsActiveWhileLoading;
                if ("_in_IsActiveWhileLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_IsActiveWhileLoadingInDataFetchStatus = inputs._in_IsActiveWhileLoadingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.SkeletonSection");
});
define("UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$GetClasses_UBTSkeletonSection", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_ToggleAttribute", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, React, OSView, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_model, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.SkeletonSection";
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
                return UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_controller;
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
                content: _this.props.placeholders.placeholder_LoadingSection,
                style: model.getCachedValue(idService.getId("Placeholder_LoadingSection.Style"), function() {
                    return ((model.variables.in_ExtendedClassIn + " ") + ((model.variables.in_IsLoadingIn) ? (OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnectLibraryController.default.getClasses_UBTSkeletonSection$Action(callContext).classesOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id)) : ("")));
                }, function() {
                    return model.variables.in_ExtendedClassIn;
                }, function() {
                    return model.variables.in_IsLoadingIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Placeholder_LoadingSection"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus, model.variables._in_IsLoadingInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS", "UBTConnectLibrary.controller$GetClasses_UBTSkeletonSection", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_ToggleAttribute", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_controller_ScreenEvent_OnParametersChanged_Delayed_SetInertJS) {
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:ObPsI0EUX0uzyE_vEKJ_tw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.3dNgOIAiDEi_36iHgs+SOA/ClientActions.ObPsI0EUX0uzyE_vEKJ_tw:gH0o+au7z95chzZFRolh4w", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:77fGi8eA5Eeb4iV9_lfxTw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:S0UQn21epE2nh644oJLwhQ", callContext.id);
                // Execute Action: ScreenEvent_OnParametersChanged
                controller._screenEvent_OnParametersChanged$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_W4ZHKCCF06o0kM8QVfcZQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:ObPsI0EUX0uzyE_vEKJ_tw", callContext.id);
            }

        };
        Controller.prototype._screenEvent_OnParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:axstZnBeYk6+IFMHOhGPHw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.3dNgOIAiDEi_36iHgs+SOA/ClientActions.axstZnBeYk6+IFMHOhGPHw:LDhmsepktX9DvCx4nLWYJA", "UBTConnectLibrary", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KnqDOtPT5UeKNoBDrawTAQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yw22m0Ii2k6+o6Wcf32aCg", callContext.id) && model.variables.in_IsActiveWhileLoadingIn)) {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UBV9JYvj3UeTjCBTOzAkYw", callContext.id);
                } else {
                    if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jy89Zs7lWEuN79VVCf4uuw", callContext.id) && model.variables.in_IsLoadingIn)) {
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yXi70+hm00qSHgbVyhXVxg", callContext.id);
                        // Execute Action: JSUtils_Element_Operations_ToggleAttribute2
                        UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_ToggleAttribute$Action(model.variables.in_IsLoadingIn, "inert", idService.getId("Placeholder_LoadingSection"), "", callContext);
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zdhnd0HaOkiXkMYOz_6Hgg", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7NSMcWCigkywg_bkA3MR4w", callContext.id);
                        controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_controller_ScreenEvent_OnParametersChanged_Delayed_SetInertJS, "Delayed_SetInert", "ScreenEvent_OnParametersChanged", {
                            ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Placeholder_LoadingSection"), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {
                            JSUtils_Element_Operations_ToggleAttribute: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Element_Operations_ToggleAttribute$Action
                        }, {});
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zdhnd0HaOkiXkMYOz_6Hgg", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:axstZnBeYk6+IFMHOhGPHw", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.screenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:3dNgOIAiDEi_36iHgs+SOA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.3dNgOIAiDEi_36iHgs+SOA:YxM_8UWwiE5MetCBT4jdxw", "UBTConnectLibrary", "SkeletonSection", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:3dNgOIAiDEi_36iHgs+SOA", callContext.id);
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/SkeletonSection On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/SkeletonSection On Parameters Changed");
                return controller.screenEvent_OnParametersChanged$Action(callContext);

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
define("UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$controller.ScreenEvent_OnParametersChanged.Delayed_SetInertJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $public.View.render().then(() => $actions.JSUtils_Element_Operations_ToggleAttribute(false, "inert", $parameters.ElementId, ""))
    };
});

define("UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "7NSMcWCigkywg_bkA3MR4w": {
            getter: function(varBag, idService) {
                return varBag.delayed_SetInertJSResult.value;
            }
        },
        "VvSnlOWqMU2CFVlYcAcXeQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9Lm2XkXXM02U8JQTHt5S8w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ExtendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "u+RDirHAl066S8qthOTglQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsActiveWhileLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cb3qBOVBB0eSSCw+lxxHVQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});