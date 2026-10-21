define("UBTConnect.Directory_Updates.SectionHeader.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.Directory_Updates.UpdateItem_Header.mvc$model", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_Directory_Updates_UpdateItem_Header_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("UpdateItem_Breakpoint", "updateItem_BreakpointVar", "UpdateItem_Breakpoint", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointRec());
                }, false, UBTConnectModel.UI_UpdateItem_BreakpointRec),
                this.attr("IntersectionObserver", "intersectionObserverVar", "IntersectionObserver", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("In_Breakpoints", "in_BreakpointsIn", "In_Breakpoints", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointList());
                }, false, UBTConnectModel.UI_UpdateItem_BreakpointList),
                this.attr("_in_BreakpointsInDataFetchStatus", "_in_BreakpointsInDataFetchStatus", "_in_BreakpointsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_CurrentUpdateDate", "in_CurrentUpdateDateIn", "In_CurrentUpdateDate", true, false, OS.DataTypes.DataTypes.Date, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("_in_CurrentUpdateDateInDataFetchStatus", "_in_CurrentUpdateDateInDataFetchStatus", "_in_CurrentUpdateDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_PreviousUpdateDate", "in_PreviousUpdateDateIn", "In_PreviousUpdateDate", true, false, OS.DataTypes.DataTypes.Date, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("_in_PreviousUpdateDateInDataFetchStatus", "_in_PreviousUpdateDateInDataFetchStatus", "_in_PreviousUpdateDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_SiblingId", "in_SiblingIdIn", "In_SiblingId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_SiblingIdInDataFetchStatus", "_in_SiblingIdInDataFetchStatus", "_in_SiblingIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsAscending", "in_IsAscendingIn", "In_IsAscending", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsAscendingInDataFetchStatus", "_in_IsAscendingInDataFetchStatus", "_in_IsAscendingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = UBTConnect_Directory_Updates_UpdateItem_Header_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Breakpoints" in inputs) {
                this.variables.in_BreakpointsIn = inputs.In_Breakpoints;
                if ("_in_BreakpointsInDataFetchStatus" in inputs) {
                    this.variables._in_BreakpointsInDataFetchStatus = inputs._in_BreakpointsInDataFetchStatus;
                }

            }

            if ("In_CurrentUpdateDate" in inputs) {
                this.variables.in_CurrentUpdateDateIn = inputs.In_CurrentUpdateDate;
                if ("_in_CurrentUpdateDateInDataFetchStatus" in inputs) {
                    this.variables._in_CurrentUpdateDateInDataFetchStatus = inputs._in_CurrentUpdateDateInDataFetchStatus;
                }

            }

            if ("In_PreviousUpdateDate" in inputs) {
                this.variables.in_PreviousUpdateDateIn = inputs.In_PreviousUpdateDate;
                if ("_in_PreviousUpdateDateInDataFetchStatus" in inputs) {
                    this.variables._in_PreviousUpdateDateInDataFetchStatus = inputs._in_PreviousUpdateDateInDataFetchStatus;
                }

            }

            if ("In_IsLoading" in inputs) {
                this.variables.in_IsLoadingIn = inputs.In_IsLoading;
                if ("_in_IsLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
                }

            }

            if ("In_SiblingId" in inputs) {
                this.variables.in_SiblingIdIn = inputs.In_SiblingId;
                if ("_in_SiblingIdInDataFetchStatus" in inputs) {
                    this.variables._in_SiblingIdInDataFetchStatus = inputs._in_SiblingIdInDataFetchStatus;
                }

            }

            if ("In_IsAscending" in inputs) {
                this.variables.in_IsAscendingIn = inputs.In_IsAscending;
                if ("_in_IsAscendingInDataFetchStatus" in inputs) {
                    this.variables._in_IsAscendingInDataFetchStatus = inputs._in_IsAscendingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Updates.SectionHeader");
});
define("UBTConnect.Directory_Updates.SectionHeader.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Updates.SectionHeader.mvc$model", "UBTConnect.Directory_Updates.SectionHeader.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Updates.UpdateItem_Header.mvc$view", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Updates_SectionHeader_mvc_model, UBTConnect_Directory_Updates_SectionHeader_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_Directory_Updates_UpdateItem_Header_mvc_view) {
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
        View.displayName = "Directory_Updates.SectionHeader";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Updates_UpdateItem_Header_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Updates_SectionHeader_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Updates_SectionHeader_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((((model.variables.updateItem_BreakpointVar.sectionNameAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())) && !(model.variables.in_IsLoadingIn)), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "updates-list__list-section-header",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(UBTConnect_Directory_Updates_UpdateItem_Header_mvc_view, {
                    inputs: {
                        isLoading: model.variables.in_IsLoadingIn,
                        _isLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLoadingInDataFetchStatus),
                        Title: model.variables.updateItem_BreakpointVar.sectionNameAttr,
                        ShowMarkAll: false,
                        BadgeNumber: model.variables.updateItem_BreakpointVar.badgeCountAttr
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        click_MarkAll$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Updates/UpdateItem_Header Click_MarkAll");
                                controller.event_MarkAllAsRead$Action(model.variables.updateItem_BreakpointVar.sectionNameAttr, controller.callContext(eventHandlerContext));
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
                        name: "ListSectionHeader",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }))];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Updates.SectionHeader.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Updates.SectionHeader.mvc$debugger", "UBTConnect.Directory_Updates.SectionHeader.mvc$controller.ScreenEvent_OnReady.InitializeIntersectionObserverJS", "UBTConnect.Directory_Updates.SectionHeader.mvc$controller.ScreenEvent_OnDestroy.DisconnectObserverJS", "UBTConnect.Directory_Updates.SectionHeader.mvc$controller.Action_SetObserver.InitializeIntersectionObserverJS", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Updates_SectionHeader_mvc_Debugger, UBTConnect_Directory_Updates_SectionHeader_mvc_controller_ScreenEvent_OnReady_InitializeIntersectionObserverJS, UBTConnect_Directory_Updates_SectionHeader_mvc_controller_ScreenEvent_OnDestroy_DisconnectObserverJS, UBTConnect_Directory_Updates_SectionHeader_mvc_controller_Action_SetObserver_InitializeIntersectionObserverJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                action_SetObserver$Action: function() {
                    return controller.executeActionInsideJSNode(controller._action_SetObserver$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_SetObserver");
                },
                action_UpdateHeader$Action: function(in_IsCurrentIn) {
                    in_IsCurrentIn = (in_IsCurrentIn === undefined) ? false : in_IsCurrentIn;
                    return controller.executeActionInsideJSNode(controller._action_UpdateHeader$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsCurrentIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_UpdateHeader");
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
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            var directory_Updates_GetListBreakpointVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.directory_Updates_GetListBreakpointVar = directory_Updates_GetListBreakpointVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PiHrFydL+Uy1vEH9F2TMsQ:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.GQ1DArnOn0eU9gLK1UYy9w/ClientActions.PiHrFydL+Uy1vEH9F2TMsQ:RLIhjz3kCapGhbn4fj4HvA", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HO6XV0Zn90ORXdJuQLBzLg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F7P7FydBN0agXZTy1LIjJA", callContext.id);
                // Execute Action: Directory_Updates_GetListBreakpoint
                directory_Updates_GetListBreakpointVar.value = UBTConnectController.default.directory_Updates_GetListBreakpoint$Action(model.variables.in_BreakpointsIn, model.variables.in_CurrentUpdateDateIn, model.variables.in_PreviousUpdateDateIn, model.variables.in_IsAscendingIn, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kc7xjp2Ke0mwONAWpaa7cw", callContext.id) && !((((directory_Updates_GetListBreakpointVar.value.out_ListBreakpointOut.sectionNameAttr === UBTConnectModel.staticEntities.updates_DateRanges.today) && !(model.variables.in_IsAscendingIn)) || ((directory_Updates_GetListBreakpointVar.value.out_ListBreakpointOut.sectionNameAttr === UBTConnectModel.staticEntities.updates_DateRanges.older) && model.variables.in_IsAscendingIn))))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zAYFstb0y0iLdN1d_hWevw", callContext.id);
                    // UpdateItem_Breakpoint = Directory_Updates_GetListBreakpoint.Out_ListBreakpoint
                    model.variables.updateItem_BreakpointVar = directory_Updates_GetListBreakpointVar.value.out_ListBreakpointOut;
                }

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tn+CjYS7nUafGMva+ZHhAw", callContext.id) && (((model.variables.updateItem_BreakpointVar.sectionNameAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())) && (model.variables.intersectionObserverVar === OS.BuiltinFunctions.nullObject())))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dYBsowb_3U+wiv13p89yQA", callContext.id);
                    controller.safeExecuteJSNode(UBTConnect_Directory_Updates_SectionHeader_mvc_controller_ScreenEvent_OnReady_InitializeIntersectionObserverJS, "InitializeIntersectionObserver", "ScreenEvent_OnReady", null, function($parameters) {}, {
                        Action_SetObserver: controller.clientActionProxies.action_SetObserver$Action
                    }, {});
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fXeBKI+aPk+f+0cN2WfdoA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fXeBKI+aPk+f+0cN2WfdoA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PiHrFydL+Uy1vEH9F2TMsQ", callContext.id);
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ed1hGF1TMU+FEtaxlLNb6g:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.GQ1DArnOn0eU9gLK1UYy9w/ClientActions.Ed1hGF1TMU+FEtaxlLNb6g:q4sHZ9dwMHWbqLEirfUHyg", "UBTConnect", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2gTq8Dcox0+buOeqHm2whQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EQ6grR9eSUu6NRNtAUQKcQ", callContext.id) && (model.variables.intersectionObserverVar === OS.BuiltinFunctions.nullObject()))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FAq_eHZ3CU2ScK8PGfYDjg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dqr+rTRszUSTVMx_9J2YLw", callContext.id);
                    // Execute Action: ScreenEvent_OnReady
                    controller._screenEvent_OnReady$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FAq_eHZ3CU2ScK8PGfYDjg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ed1hGF1TMU+FEtaxlLNb6g", callContext.id);
            }

        };
        Controller.prototype._screenEvent_OnDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AuieK39wPkKjGnL92k+REQ:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.GQ1DArnOn0eU9gLK1UYy9w/ClientActions.AuieK39wPkKjGnL92k+REQ:ONVXW_lKRop6ohdBanSrSw", "UBTConnect", "ScreenEvent_OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:msDFvy8ubkCSo8qNYH5eOQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cPkXTGRyiUGTQPvFKJsRPA", callContext.id) && ((model.variables.intersectionObserverVar) !== (OS.BuiltinFunctions.nullObject())))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HJoJAjFXRkyNU+HSDOVaCQ", callContext.id);
                    controller.safeExecuteJSNode(UBTConnect_Directory_Updates_SectionHeader_mvc_controller_ScreenEvent_OnDestroy_DisconnectObserverJS, "DisconnectObserver", "ScreenEvent_OnDestroy", {
                        Observer: OS.DataConversion.JSNodeParamConverter.to(model.variables.intersectionObserverVar, OS.DataTypes.DataTypes.Object)
                    }, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aZWYuNevjUKcpDKDodyfow", callContext.id);
                    // IntersectionObserver = NullObject
                    model.variables.intersectionObserverVar = OS.BuiltinFunctions.nullObject();
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d4AT5q7LMkaf89xZkQiV3g", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d4AT5q7LMkaf89xZkQiV3g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AuieK39wPkKjGnL92k+REQ", callContext.id);
            }

        };
        Controller.prototype._action_UpdateHeader$Action = function(in_IsCurrentIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_UpdateHeader");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.SectionHeader.Action_UpdateHeader$vars"))());
            vars.value.in_IsCurrentInLocal = in_IsCurrentIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8Iz1e2W3okKAM_uDxOt6IA:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.GQ1DArnOn0eU9gLK1UYy9w/ClientActions.8Iz1e2W3okKAM_uDxOt6IA:53VoBUwFJIIFK_NQslUIoA", "UBTConnect", "Action_UpdateHeader", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ytV2IBBim06oaGjSHW4+hg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5wTkbJbz5kK_jDEMPSL_Jw", callContext.id);
                // UpdatedBreakpoint = UpdateItem_Breakpoint
                vars.value.updatedBreakpointVar = model.variables.updateItem_BreakpointVar;
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k00PVkDfPk6vMuGdTmSqqw", callContext.id) && !(vars.value.in_IsCurrentInLocal))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4jr+Dxq+WUa17IdOyEEKOw", callContext.id);
                    // Execute Action: ListIndexOf
                    listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.in_BreakpointsIn, function(p) {
                        return (p.sectionNameAttr === vars.value.updatedBreakpointVar.sectionNameAttr);
                    }, callContext);

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NEu_jlM5k0GrJC9CkRBG5g", callContext.id) && (((listIndexOfVar.value.positionOut) !== (-1)) && (listIndexOfVar.value.positionOut > 0)))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j4QgW69+kEy1TCULAPfGSw", callContext.id);
                        // UpdatedBreakpoint = In_Breakpoints[ListIndexOf.Position - 1]
                        vars.value.updatedBreakpointVar = model.variables.in_BreakpointsIn.getItem((listIndexOfVar.value.positionOut - 1));
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1EJjpp59_UOUAY5r+gtEQQ", callContext.id);
                        return OS.Flow.returnAsync();

                    }

                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YKaWJMLePkWEX11CqKMwUQ", callContext.id);
                // Trigger Event: Event_UpdateListHeader
                return controller.event_UpdateListHeader$Action(vars.value.updatedBreakpointVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XbNqABPaZEmFwYHOkQ+cjw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8Iz1e2W3okKAM_uDxOt6IA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8Iz1e2W3okKAM_uDxOt6IA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Updates.SectionHeader.Action_UpdateHeader$vars", [{
            name: "In_IsCurrent",
            attrName: "in_IsCurrentInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "UpdatedBreakpoint",
            attrName: "updatedBreakpointVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_UpdateItem_BreakpointRec();
            },
            complexType: UBTConnectModel.UI_UpdateItem_BreakpointRec
        }]);
        Controller.prototype._action_SetObserver$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetObserver");
            callContext = controller.callContext(callContext);
            var initializeIntersectionObserverJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.initializeIntersectionObserverJSResult = initializeIntersectionObserverJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:o6FR6m88ekybbxuYwk3ntg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.GQ1DArnOn0eU9gLK1UYy9w/ClientActions.o6FR6m88ekybbxuYwk3ntg:OTUlp9Y2JVJ2FnfWTnZ6Gw", "UBTConnect", "Action_SetObserver", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LF0nA8nzcEugGcXYZIIreg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L69wppZxhkms3ADe6vggKQ", callContext.id);
                initializeIntersectionObserverJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Updates_SectionHeader_mvc_controller_Action_SetObserver_InitializeIntersectionObserverJS, "InitializeIntersectionObserver", "Action_SetObserver", {
                    In_BreakpointId: OS.DataConversion.JSNodeParamConverter.to(model.variables.updateItem_BreakpointVar.sectionNameAttr, OS.DataTypes.DataTypes.Text),
                    In_SiblingElementId: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_SiblingIdIn, OS.DataTypes.DataTypes.Text),
                    In_CurrentHeaderId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ListSectionHeader"), OS.DataTypes.DataTypes.Text),
                    Out_IntersectionObserver: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Updates.SectionHeader.Action_SetObserver$initializeIntersectionObserverJSResult"))();
                    jsNodeResult.out_IntersectionObserverOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_IntersectionObserver, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    Action_UpdateHeader: controller.clientActionProxies.action_UpdateHeader$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2kaBN7r5Ee4Z9DGfcZDPQ", callContext.id);
                // IntersectionObserver = InitializeIntersectionObserver.Out_IntersectionObserver
                model.variables.intersectionObserverVar = initializeIntersectionObserverJSResult.value.out_IntersectionObserverOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ewD4tVdI5kiWYq5LgMOAeA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o6FR6m88ekybbxuYwk3ntg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Updates.SectionHeader.Action_SetObserver$initializeIntersectionObserverJSResult", [{
            name: "Out_IntersectionObserver",
            attrName: "out_IntersectionObserverOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.screenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

        };
        Controller.prototype.screenEvent_OnDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnDestroy$Action, callContext);

        };
        Controller.prototype.action_UpdateHeader$Action = function(in_IsCurrentIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_UpdateHeader$Action, callContext, in_IsCurrentIn);

        };
        Controller.prototype.action_SetObserver$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetObserver$Action, callContext);

        };
        Controller.prototype.event_MarkAllAsRead$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_UpdateListHeader$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg:C9xuQgCNB04qKzk88z0W5Q", "UBTConnect", "Directory_Updates", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GQ1DArnOn0eU9gLK1UYy9w:/NRWebFlows.lBBSjop9vkeTAxiPAbypRg/NodesShownInESpaceTree.GQ1DArnOn0eU9gLK1UYy9w:Ny8kCKVTp33ZV+HjteJ8sA", "UBTConnect", "SectionHeader", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GQ1DArnOn0eU9gLK1UYy9w", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lBBSjop9vkeTAxiPAbypRg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/SectionHeader On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/SectionHeader On Destroy");
                return controller.screenEvent_OnDestroy$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Updates/SectionHeader On Parameters Changed");
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Updates.SectionHeader.mvc$controller.ScreenEvent_OnReady.InitializeIntersectionObserverJS", [], function() {
    return function($actions, $roles, $public) {
        $public.View.render().then($actions.Action_SetObserver)
    };
});
define("UBTConnect.Directory_Updates.SectionHeader.mvc$controller.ScreenEvent_OnDestroy.DisconnectObserverJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window._activeObserverCount = Math.max(0, (window._activeObserverCount || 0) - 1);

        if (window._stickyDebug) {
            console.log('%c OBSERVER DESTROYED', 'background: gray; color: white; padding: 2px 6px;', 'Total active:', window._activeObserverCount);
        }

        $parameters.Observer.disconnect();
    };
});
define("UBTConnect.Directory_Updates.SectionHeader.mvc$controller.Action_SetObserver.InitializeIntersectionObserverJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function watchStickyOverlap(scrollContainerSelector) {
            if (typeof window._stickyDebug === 'undefined') {
                window._stickyDebug = false;
            }

            const scrollContainer = document.querySelector(scrollContainerSelector);

            if (!scrollContainer) {
                console.warn('Scroll container not found:', scrollContainerSelector);
                return;
            }

            const topOffsetRaw = getComputedStyle(scrollContainer).getPropertyValue('--sticky-top-offset').trim();
            const topOffsetPx = parseFloat(topOffsetRaw);

            if (!topOffsetPx || isNaN(topOffsetPx)) {
                console.warn('--sticky-top-offset not found or invalid:', topOffsetRaw);
                return;
            }

            const incomingEl = document.getElementById($parameters.In_CurrentHeaderId)?.closest(".updates-list__list-section-header");
            const nextSectionEl = document.getElementById($parameters.In_SiblingElementId);

            if (!incomingEl || !nextSectionEl) {
                console.warn('Missing element(s):', {
                    incomingEl,
                    nextSectionEl
                });
                return;
            }

            if (window._stickyDebug) {
                console.log('Watching:', {
                    incomingEl,
                    nextSectionEl
                });
                console.log('Using root:', scrollContainer, '| offset:', topOffsetPx);
            }

            const HIGH_Z = '10';
            const LOW_Z = '9';
            incomingEl.style.zIndex = HIGH_Z;

            // extend the bottom edge past the FULL scrollable content, not a guessed constant,
            // so items never "exit" the observable region from the bottom, however long the list grows
            const BOTTOM_EXTENSION = scrollContainer.scrollHeight + 1000;

            if (window._stickyDebug) {
                console.log('scrollHeight:', scrollContainer.scrollHeight, '| BOTTOM_EXTENSION:', BOTTOM_EXTENSION);
            }

            let isLowered = false;
            let isFirstCallback = true;

            if (window._stickyDebug) {
                console.log(
                    `%c${$parameters.In_BreakpointId}`,
                    'color: red; background: yellow; padding: 2px 6px; border-radius: 3px;'
                );
            }

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        // still intersecting (nextSectionEl below the offset line) -> stay HIGH
                        // no longer intersecting (nextSectionEl crossed above the offset line) -> go LOW
                        const shouldLower = !entry.isIntersecting;

                        if (isFirstCallback) {
                            isFirstCallback = false;
                            isLowered = shouldLower; // sync internal state silently, no swap/log/action on initial read
                            if (window._stickyDebug) {
                                console.log('Initial state synced (ignored):', {
                                    isLowered
                                });
                            }
                            return;
                        }

                        if (shouldLower !== isLowered) {
                            if (window._stickyDebug) {
                                console.log(
                                    shouldLower ? '%c LOWER Z-INDEX' : '%c RESTORE Z-INDEX',
                                    `color: white; background: ${shouldLower ? 'crimson' : 'seagreen'}; padding: 2px 6px; border-radius: 3px;`
                                );
                                console.log('intersectionRatio:', entry.intersectionRatio, '| rect:', entry.boundingClientRect);
                            }
                            $actions.Action_UpdateHeader(shouldLower);
                            isLowered = shouldLower;
                        }
                    });
                }, {
                    root: scrollContainer,
                    rootMargin: `-${topOffsetPx}px 0px ${BOTTOM_EXTENSION}px 0px`,
                    threshold: 0,
                }
            );

            observer.observe(nextSectionEl);
            window._activeObserverCount = (window._activeObserverCount || 0) + 1;

            if (window._stickyDebug) {
                console.log('%c OBSERVER CREATED', 'background: purple; color: white; padding: 2px 6px;', 'Total active:', window._activeObserverCount);
            }

            $parameters.Out_IntersectionObserver = observer;
        }

        watchStickyOverlap('.active-screen.screen-container');
    };
});

define("UBTConnect.Directory_Updates.SectionHeader.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "F7P7FydBN0agXZTy1LIjJA": {
            getter: function(varBag, idService) {
                return varBag.directory_Updates_GetListBreakpointVar.value;
            }
        },
        "dYBsowb_3U+wiv13p89yQA": {
            getter: function(varBag, idService) {
                return varBag.initializeIntersectionObserverJSResult.value;
            }
        },
        "HJoJAjFXRkyNU+HSDOVaCQ": {
            getter: function(varBag, idService) {
                return varBag.disconnectObserverJSResult.value;
            }
        },
        "CEbSOTH8dUCmfQilZSCyyg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updatedBreakpointVar;
            }
        },
        "2eNESrgMjkW0r+baOLBnnw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsCurrentInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "4jr+Dxq+WUa17IdOyEEKOw": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "L69wppZxhkms3ADe6vggKQ": {
            getter: function(varBag, idService) {
                return varBag.initializeIntersectionObserverJSResult.value;
            }
        },
        "mzTIJRwTd0C9qHc8MWVMnQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.updateItem_BreakpointVar;
            }
        },
        "uPTZurEolEOO7xeLtiz1Mg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.intersectionObserverVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "NbFXrLaAw0m_LGALuHG+3Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_BreakpointsIn;
            }
        },
        "O6vv2BAKtUKng8zn2FtZ_w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_CurrentUpdateDateIn;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "Hf3V0tsZDU6T5j0pTQYgCA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_PreviousUpdateDateIn;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "5_4FYdU+_0yT75cCFmPHew": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "mTqENpqKwkug7QC9niYxyw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SiblingIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zAdfAmjyhU+NIqdgSWBVuA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsAscendingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "eoaDNXezfUmw4Z7PE9doQA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListSectionHeader"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});