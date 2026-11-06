define("UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Path", "pathVar", "Path", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("In_Path", "in_PathIn", "In_Path", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_PathInDataFetchStatus", "_in_PathInDataFetchStatus", "_in_PathInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HeightPercentage", "in_HeightPercentageIn", "In_HeightPercentage", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                    return OS.BuiltinFunctions.integerToDecimal(100);
                }, false),
                this.attr("_in_HeightPercentageInDataFetchStatus", "_in_HeightPercentageInDataFetchStatus", "_in_HeightPercentageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_CurvaturePercentage", "in_CurvaturePercentageIn", "In_CurvaturePercentage", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                    return OS.BuiltinFunctions.integerToDecimal(100);
                }, false),
                this.attr("_in_CurvaturePercentageInDataFetchStatus", "_in_CurvaturePercentageInDataFetchStatus", "_in_CurvaturePercentageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Utilities_InlineSVG_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Path" in inputs) {
                this.variables.in_PathIn = inputs.In_Path;
                if ("_in_PathInDataFetchStatus" in inputs) {
                    this.variables._in_PathInDataFetchStatus = inputs._in_PathInDataFetchStatus;
                }

            }

            if ("In_HeightPercentage" in inputs) {
                this.variables.in_HeightPercentageIn = inputs.In_HeightPercentage;
                if ("_in_HeightPercentageInDataFetchStatus" in inputs) {
                    this.variables._in_HeightPercentageInDataFetchStatus = inputs._in_HeightPercentageInDataFetchStatus;
                }

            }

            if ("In_CurvaturePercentage" in inputs) {
                this.variables.in_CurvaturePercentageIn = inputs.In_CurvaturePercentage;
                if ("_in_CurvaturePercentageInDataFetchStatus" in inputs) {
                    this.variables._in_CurvaturePercentageInDataFetchStatus = inputs._in_CurvaturePercentageInDataFetchStatus;
                }

            }

            if ("In_ExtendedClass" in inputs) {
                this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
                if ("_in_ExtendedClassInDataFetchStatus" in inputs) {
                    this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Layouts.SVG_Background_Custom");
});
define("UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$model", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_model, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view) {
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
        View.displayName = "Layouts.SVG_Background_Custom";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_controller;
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
                style: "ubt-svg-container ubt-svg-container-full-height",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(((model.variables.pathVar) !== ("")), false, this, function() {
                return [React.createElement(OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, {
                    inputs: {
                        SVGCode: (("<svg viewBox=\"0 0 100 200\" preserveAspectRatio=\"none\">\r\n<defs>\r\n    <linearGradient id=\'primaryGradient\' x1=\'0%\' x2=\'100%\'  y1=\'0%\' y2=\'0%\'>\r\n        <stop offset=\'0%\' stop-color=\'var(--color-primary,#00819C)\'/>\r\n        <stop offset=\'100%\' stop-color=\'var(--color-cyan,#4EAEC2)\'/>\r\n    </linearGradient>\r\n</defs>\r\n<path d=\'" + model.variables.pathVar) + "\' fill=\'url(#primaryGradient)\'/>\r\n</svg>"),
                        ExtendedClass: model.getCachedValue(idService.getId("Bo6D_mNX70Of766v1u7BJw.ExtendedClass"), function() {
                            return OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action("ubt-header-svg", model.variables.in_ExtendedClassIn, callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.in_ExtendedClassIn;
                        }),
                        _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        initialized$Action: function(inlineSVGIdIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/InlineSVG Initialized");
                                controller.onPathCalculated$Action(controller.callContext(eventHandlerContext));
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
define("UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_SVG_Background_Custom_mvc_Debugger) {
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:zT9jkFmxGkK5qbftv+K5IA:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.bl0UV4c_5UqLBcohV7Ouig/ClientActions.zT9jkFmxGkK5qbftv+K5IA:Ns5oMgkW2A_KoBNWb2IYqA", "UBTConnectLibrary", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:QOS7CmWbvEG9B9vO29yFdQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+_7JM6bZ0EGtLu3SmHMX7Q", callContext.id);
                // Execute Action: CalculatePath
                controller._calculatePath$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6gDDKuuOcUqGBGbEh8+kQA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:zT9jkFmxGkK5qbftv+K5IA", callContext.id);
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
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:CCYwwJlDMUuVWC+h03Kc1w:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.bl0UV4c_5UqLBcohV7Ouig/ClientActions.CCYwwJlDMUuVWC+h03Kc1w:hswAQnyuppy4MRVsoazqkQ", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4JcAlElZ0k6kdkfn_K3aFA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+CVDqsTJxkid74uXkXjc3A", callContext.id);
                // Execute Action: CalculatePath
                controller._calculatePath$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FLv2do5ZeUipH5Mvsr5bsA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:CCYwwJlDMUuVWC+h03Kc1w", callContext.id);
            }

        };
        Controller.prototype._calculatePath$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CalculatePath");
            callContext = controller.callContext(callContext);
            var sVGHeader_GetPathVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.sVGHeader_GetPathVar = sVGHeader_GetPathVar;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Rs1d2vr12E2lsEg3KGg_MQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.bl0UV4c_5UqLBcohV7Ouig/ClientActions.Rs1d2vr12E2lsEg3KGg_MQ:wDpUrKo3ty1C2Yr+FxJ7tw", "UBTConnectLibrary", "CalculatePath", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sl0O4a3F2UOPTe_96VBZdg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5oP39El8N0mYdcQM24EwwQ", callContext.id) && ((model.variables.in_PathIn) !== ("")))) {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:enb7Jbm2kEarfa8CeN9MKQ", callContext.id);
                    // Path = In_Path
                    model.variables.pathVar = model.variables.in_PathIn;
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:myRJDe4eLEONRs93Dfh8bA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_Z03K1q9GESx1IFJV0hTbA", callContext.id);
                    // Execute Action: SVGHeader_GetPath
                    sVGHeader_GetPathVar.value = UBTConnectLibraryController.default.sVGHeader_GetPath$Action(model.variables.in_HeightPercentageIn, model.variables.in_CurvaturePercentageIn, 0, callContext);

                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:laqeNlUH2UGCuw3L910ulQ", callContext.id);
                    // Path = SVGHeader_GetPath.Out_Path
                    model.variables.pathVar = sVGHeader_GetPathVar.value.out_PathOut;
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TWwmJcA0FU+huKCMZi9USQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Rs1d2vr12E2lsEg3KGg_MQ", callContext.id);
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
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:SQfG24OC0ESR_nopvMoOLw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.bl0UV4c_5UqLBcohV7Ouig/ClientActions.SQfG24OC0ESR_nopvMoOLw:l++FavY6lBVG1kCdOu3HwQ", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eBawZI08IkWQOBxgVFiErg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CDFCz3w88kCBtMW2h+Fk9A", callContext.id);
                // Execute Action: CalculatePath
                controller._calculatePath$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5gvb+PWUFEybu4_ZXWfVdA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:SQfG24OC0ESR_nopvMoOLw", callContext.id);
            }

        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.calculatePath$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._calculatePath$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onPathCalculated$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ:LSOi3iQzjd8avvO2ZKIsMw", "UBTConnectLibrary", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:bl0UV4c_5UqLBcohV7Ouig:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.bl0UV4c_5UqLBcohV7Ouig:egAiKAUj_yrPvjPQeAEpTg", "UBTConnectLibrary", "SVG_Background_Custom", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:bl0UV4c_5UqLBcohV7Ouig", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/SVG_Background_Custom On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/SVG_Background_Custom On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/SVG_Background_Custom On Parameters Changed");
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

define("UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "_Z03K1q9GESx1IFJV0hTbA": {
            getter: function(varBag, idService) {
                return varBag.sVGHeader_GetPathVar.value;
            }
        },
        "1A1pGKhB4k2ob1PDhnMXcg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pathVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7c1ZpqqfM0ulpzDV_wkMcw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_PathIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dAVKgAO2y0C2VEU2i0dG6Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HeightPercentageIn;
            },
            dataType: OS.DataTypes.DataTypes.Decimal
        },
        "Puv7SplJ4kGdgEQCB64V6w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_CurvaturePercentageIn;
            },
            dataType: OS.DataTypes.DataTypes.Decimal
        },
        "Fgeq0snZ1kOjHguE55NFNQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ExtendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});