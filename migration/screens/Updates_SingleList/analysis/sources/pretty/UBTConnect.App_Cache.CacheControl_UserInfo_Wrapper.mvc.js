define("UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.model", "UBTConnect.controller", "APIDomain_Directory_IS.model", "UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc$model", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$GetUserInformation_Wrapper_Assign", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsModel, UBTConnectController, APIDomain_Directory_ISModel, UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [].concat(_super.attributesToDeclare.call(this));
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
                    Model._hasValidationWidgetsValue = UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "App_Cache.CacheControl_UserInfo_Wrapper");
});
define("UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$controller", "UBTConnect.clientVariables", "UBTConnect_Utils.CacheControl.CacheControl_UserInfo.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$GetUserInformation_Wrapper_Assign", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_model, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_controller, UBTConnectClientVariables, UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvc_view, OSWidgets) {
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
        View.displayName = "App_Cache.CacheControl_UserInfo_Wrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CacheControl_CacheControl_UserInfo_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    result$Action: function(cacheControl_ResponseIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl_UserInfo Result");
                                return controller.cacheControl_UserInfoResult$Action(cacheControl_ResponseIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
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
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$debugger", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$GetUserInformation_Wrapper_Assign", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_Debugger) {
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
        Controller.prototype._cacheControl_UserInfoResult$Action = function(cacheControl_ResponseIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CacheControl_UserInfoResult");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.CacheControl_UserInfoResult$vars"))());
            vars.value.cacheControl_ResponseInLocal = cacheControl_ResponseIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Y6qy2V10Ik+fHppZZSKxMw:/NRWebFlows.rxCU2LrVTU+eCM6sJAlmTQ/NodesShownInESpaceTree.7WIl6cgbjESpiTzuSmD3dg/ClientActions.Y6qy2V10Ik+fHppZZSKxMw:CWKMWcB2NhEMxh7rq3y_Ww", "UBTConnect", "CacheControl_UserInfoResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2_c6DnDnA0OH4R2mhAvmpA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v7aAkH_p5kG2z54lGh_ZEw", callContext.id);
                // Execute Action: GetUserInformation_Wrapper_Assign
                UBTConnectController.default.getUserInformation_Wrapper_Assign$Action(vars.value.cacheControl_ResponseInLocal, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8U_SqMKWc0aEXwlPmEcpTw", callContext.id);
                // Trigger Event: Result
                return controller.result$Action(vars.value.cacheControl_ResponseInLocal.directory_UserCurrentAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eClgwLsQok2_LzkxG4pbIA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Y6qy2V10Ik+fHppZZSKxMw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Y6qy2V10Ik+fHppZZSKxMw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.CacheControl_UserInfoResult$vars", [{
            name: "CacheControl_Response",
            attrName: "cacheControl_ResponseInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.CacheControl_UserInformationRec();
            },
            complexType: UBTConnect_UtilsModel.CacheControl_UserInformationRec
        }]);

        Controller.prototype.cacheControl_UserInfoResult$Action = function(cacheControl_ResponseIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._cacheControl_UserInfoResult$Action, callContext, cacheControl_ResponseIn);

        };
        Controller.prototype.result$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rxCU2LrVTU+eCM6sJAlmTQ:/NRWebFlows.rxCU2LrVTU+eCM6sJAlmTQ:j7RibBgcz9P6MmpWquiJgg", "UBTConnect", "App_Cache", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7WIl6cgbjESpiTzuSmD3dg:/NRWebFlows.rxCU2LrVTU+eCM6sJAlmTQ/NodesShownInESpaceTree.7WIl6cgbjESpiTzuSmD3dg:1iS62FHsC4iyfU8p0kX+HA", "UBTConnect", "CacheControl_UserInfo_Wrapper", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7WIl6cgbjESpiTzuSmD3dg", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rxCU2LrVTU+eCM6sJAlmTQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "aATCPUC7ZkagAZWLsWN6SA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.cacheControl_ResponseInLocal;
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});