define("UBTConnect_Utils.CacheControl.CacheControl.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "MemoryClientCache.model", "MemoryClientCache.controller", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject"], function(OutSystems, UBTConnect_UtilsModel, MemoryClientCacheModel, MemoryClientCacheController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("CacheTypeId", "cacheTypeIdIn", "CacheTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_cacheTypeIdInDataFetchStatus", "_cacheTypeIdInDataFetchStatus", "_cacheTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("CacheKey", "cacheKeyIn", "CacheKey", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_cacheKeyInDataFetchStatus", "_cacheKeyInDataFetchStatus", "_cacheKeyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("TimeToLiveSeconds", "timeToLiveSecondsIn", "TimeToLiveSeconds", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 7200;
                }, false),
                this.attr("_timeToLiveSecondsInDataFetchStatus", "_timeToLiveSecondsInDataFetchStatus", "_timeToLiveSecondsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Timeout", "timeoutIn", "Timeout", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 10;
                }, false),
                this.attr("_timeoutInDataFetchStatus", "_timeoutInDataFetchStatus", "_timeoutInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("CacheTypeId" in inputs) {
                this.variables.cacheTypeIdIn = inputs.CacheTypeId;
                if ("_cacheTypeIdInDataFetchStatus" in inputs) {
                    this.variables._cacheTypeIdInDataFetchStatus = inputs._cacheTypeIdInDataFetchStatus;
                }

            }

            if ("CacheKey" in inputs) {
                this.variables.cacheKeyIn = inputs.CacheKey;
                if ("_cacheKeyInDataFetchStatus" in inputs) {
                    this.variables._cacheKeyInDataFetchStatus = inputs._cacheKeyInDataFetchStatus;
                }

            }

            if ("TimeToLiveSeconds" in inputs) {
                this.variables.timeToLiveSecondsIn = inputs.TimeToLiveSeconds;
                if ("_timeToLiveSecondsInDataFetchStatus" in inputs) {
                    this.variables._timeToLiveSecondsInDataFetchStatus = inputs._timeToLiveSecondsInDataFetchStatus;
                }

            }

            if ("Timeout" in inputs) {
                this.variables.timeoutIn = inputs.Timeout;
                if ("_timeoutInDataFetchStatus" in inputs) {
                    this.variables._timeoutInDataFetchStatus = inputs._timeoutInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CacheControl.CacheControl");
});
define("UBTConnect_Utils.CacheControl.CacheControl.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CacheControl.CacheControl.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl.mvc$controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, MemoryClientCacheController, React, OSView, UBTConnect_Utils_CacheControl_CacheControl_mvc_model, UBTConnect_Utils_CacheControl_CacheControl_mvc_controller, UBTConnect_UtilsClientVariables) {
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
        View.displayName = "CacheControl.CacheControl";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CacheControl_CacheControl_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CacheControl_CacheControl_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CacheControl.CacheControl.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CacheControl.CacheControl.mvc$debugger", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, MemoryClientCacheController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CacheControl_CacheControl_mvc_Debugger) {
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
            var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCacheableObjectVar = getCacheableObjectVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Yy8L6JRyXEaKTksy4jC2Tg:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.WkfyRsf2Z0+1wQBJErq8Dw/ClientActions.Yy8L6JRyXEaKTksy4jC2Tg:fDbxMnIu956voMAUjoOTxg", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:j_XxnkNx7EWPLiR7jjcYWw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bWg+xagjM0OaOf5n5a+iqA", callContext.id);
                // Execute Action: GetCacheableObject
                model.flush();
                return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(model.variables.cacheTypeIdIn), model.variables.cacheKeyIn, model.variables.timeToLiveSecondsIn, model.variables.timeoutIn, OS.BuiltinFunctions.nullObject(), null, OS.BuiltinFunctions.integerToLongInteger(0), callContext).then(function(value) {
                    getCacheableObjectVar.value = value;
                }).then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sBE_0+s3I0C1fTgSvO9z9Q", callContext.id) && getCacheableObjectVar.value.cacheResultOut.cacheHitAttr)) {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_Kx6QsOt8k6aoC42xhtg+Q", callContext.id);
                            // Trigger Event: OnCacheHit
                            return controller.onCacheHit$Action(getCacheableObjectVar.value.objectOut, callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:a5jLcH86FEWAcUC6srIkQA", callContext.id);
                            });
                        } else {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JefY_lLa+E6Svj8ZefudPw", callContext.id);
                            // Trigger Event: OnNonCacheHit
                            return controller.onNonCacheHit$Action(callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cbmHcUiz_0+L+INi2HiCHQ", callContext.id);
                            });
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Yy8L6JRyXEaKTksy4jC2Tg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Yy8L6JRyXEaKTksy4jC2Tg", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onCacheHit$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onNonCacheHit$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:+IAQu1iBIk+vg5Uun_aR_Q:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q:uEIoJ3whQP9DL3PVmvCYLA", "UBTConnect_Utils", "CacheControl", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:WkfyRsf2Z0+1wQBJErq8Dw:/NRWebFlows.+IAQu1iBIk+vg5Uun_aR_Q/NodesShownInESpaceTree.WkfyRsf2Z0+1wQBJErq8Dw:bruJJfyhZNaEuCw0A5jQpw", "UBTConnect_Utils", "CacheControl", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:WkfyRsf2Z0+1wQBJErq8Dw", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:+IAQu1iBIk+vg5Uun_aR_Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CacheControl/CacheControl On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CacheControl.CacheControl.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "bWg+xagjM0OaOf5n5a+iqA": {
            getter: function(varBag, idService) {
                return varBag.getCacheableObjectVar.value;
            }
        },
        "DvAD5YlzGE+QHVLIlFB1kw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.cacheTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "MGg_aDXN2UibPtSyMmGvHQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.cacheKeyIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "IZzARVjDP0ipamUpgrztfg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.timeToLiveSecondsIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "DmY_uYHSLkOFqIASoXoLag": {
            getter: function(varBag, idService) {
                return varBag.model.variables.timeoutIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});