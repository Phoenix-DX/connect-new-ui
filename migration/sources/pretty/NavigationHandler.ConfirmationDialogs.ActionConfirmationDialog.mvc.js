define("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "NavigationHandler.controller$CopyClassesAcrossPortal"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ShowDialog", "showDialogVar", "ShowDialog", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ResolveCallback", "resolveCallbackVar", "ResolveCallback", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
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
                    Model._hasValidationWidgetsValue = NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConfirmationDialogs.ActionConfirmationDialog");
});
define("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "NavigationHandler.controller$CopyClassesAcrossPortal"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_model, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_controller, OSWidgets, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "ConfirmationDialogs.ActionConfirmationDialog";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_controller;
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
                extendedEvents: {
                    "componentDidUpdate": function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog/Root componentDidUpdate");
                            controller.popupComponentDidUpdate$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                style: "dx-confirmation-dialog",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Root"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Popup, {
                showPopup: model.variables.showDialogVar,
                style: "popup-dialog",
                _idProps: {
                    service: idService,
                    name: "Popup"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.dialogHeader,
                style: "dx-dialog-header",
                _idProps: {
                    service: idService,
                    name: "DialogHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.dialogBody,
                style: "dx-dialog-body",
                _idProps: {
                    service: idService,
                    name: "DialogBody"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "dx-dialog-footer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog/Button OnClick");
                            return controller.yes$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                    });;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.buttonLabel_Confirm,
                _idProps: {
                    service: idService,
                    name: "ButtonLabel_Confirm"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog/Button OnClick");
                        controller.no$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                style: "btn",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.buttonLabel_Dismiss,
                _idProps: {
                    service: idService,
                    name: "ButtonLabel_Dismiss"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        "data-dx-event-hub": "True"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "EventHub"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), $if(model.variables.showDialogVar, false, this, function() {
                    return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
                        inputs: {},
                        events: {
                            _handleError: function(ex) {
                                controller.handleError(ex);
                            },
                            backNavigationPrevented$Action: function(backNavigationEventIn) {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
                                    controller.no$Action(controller.callContext(eventHandlerContext));
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
                            uuid: "11",
                            alias: "1"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: []
                    })];
                }, function() {
                    return [];
                })];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.languageResources", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$debugger", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.OnReady.OnShowJS", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.Resolve.ResolveJS", "NavigationHandler.controller$CopyClassesAcrossPortal"], function(OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandlerLanguageResources, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_Debugger, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_controller_OnReady_OnShowJS, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_controller_Resolve_ResolveJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                show$Action: function(callbackIn) {
                    callbackIn = (callbackIn === undefined) ? null : callbackIn;
                    return controller.executeActionInsideJSNode(controller._show$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Show");
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
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:hL_JFhY5NES2BEZuMAyh8Q:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ/ClientActions.hL_JFhY5NES2BEZuMAyh8Q:ZQi8rNBnY0Lhnwo29x3mWg", "NavigationHandler", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:yDxZTTR5mEuPqjwuB5bcEQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:JxM1FVoTO0C1ZlNhfgm4Ug", callContext.id);
                // ShowDialog = False
                model.variables.showDialogVar = false;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:JxM1FVoTO0C1ZlNhfgm4Ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ResolveCallback = NullObject
                model.variables.resolveCallbackVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:2JynGT3Q8k+I3nbXFdZ1fA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:hL_JFhY5NES2BEZuMAyh8Q", callContext.id);
            }

        };
        Controller.prototype._show$Action = function(callbackIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Show");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.Show$vars"))());
            vars.value.callbackInLocal = callbackIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:iuJHO8p_p0KFgLdpJa9FNQ:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ/ClientActions.iuJHO8p_p0KFgLdpJa9FNQ:wF0qv4Eff2q5PBJ0qu31Jg", "NavigationHandler", "Show", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:6XK_x973U0i1TeSv2vAM3Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Rd7sp6ySh0u4_vtwv9WsGA", callContext.id);
                // ShowDialog = True
                model.variables.showDialogVar = true;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Rd7sp6ySh0u4_vtwv9WsGA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ResolveCallback = Callback
                model.variables.resolveCallbackVar = vars.value.callbackInLocal;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:tjHJ8_hm9UWY04VLdbWgrg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:iuJHO8p_p0KFgLdpJa9FNQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.Show$vars", [{
            name: "Callback",
            attrName: "callbackInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._yes$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Yes");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:3T1pci3Fy0utMVUj1ipGQw:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ/ClientActions.3T1pci3Fy0utMVUj1ipGQw:nFsf1T7hcgcHSwlXbrjPnQ", "NavigationHandler", "Yes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:CtORCe1H3keX3jk+OO+M2Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:IJ5YOxe9nESo7rWmp5_q1Q", callContext.id);
                // ShowDialog = False
                model.variables.showDialogVar = false;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:EWc9eyrXmE6BMPQHYWehrA", callContext.id);
                // Trigger Event: Confirmed
                return controller.confirmed$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:461wl665OUe7I12rqrUzvw", callContext.id);
                    // Execute Action: Resolve
                    controller._resolve$Action(true, callContext);
                    OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:+RirU7YEHUKklHRh2aQzyw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:3T1pci3Fy0utMVUj1ipGQw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:3T1pci3Fy0utMVUj1ipGQw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._no$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("No");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:ME2Mpn9nZ0yKial+1hKjnw:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ/ClientActions.ME2Mpn9nZ0yKial+1hKjnw:4KcoyaP+4l6XMLE6AP8t8Q", "NavigationHandler", "No", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:+Ks81ml6UkK312rdi6fKIg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:6w6OVv6vdUaJM2IuyTTzTQ", callContext.id);
                // Execute Action: Resolve
                controller._resolve$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:L8MAOEmrbkO5iINOZ3z7yw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:ME2Mpn9nZ0yKial+1hKjnw", callContext.id);
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
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:Koo7r3H7GUaUQj5EKE+qIQ:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ/ClientActions.Koo7r3H7GUaUQj5EKE+qIQ:69gtYvlKmlK0ZQIrnPKrtQ", "NavigationHandler", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:MvkDmCqnjUCqb2AftMlNdQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:UMvCAQP_m0Oub75fPm3q9g", callContext.id);
                controller.safeExecuteJSNode(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_controller_OnReady_OnShowJS, "OnShow", "OnReady", {
                    EventHubId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("EventHub"), OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    Show: controller.clientActionProxies.show$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:JOwySbsEr0aKDImxgq9ODA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:Koo7r3H7GUaUQj5EKE+qIQ", callContext.id);
            }

        };
        Controller.prototype._popupComponentDidUpdate$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("PopupComponentDidUpdate");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:IfSG0i6kiUurqc8btpDZQw:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ/ClientActions.IfSG0i6kiUurqc8btpDZQw:thItbGEKqbqtWq0Zb4v89w", "NavigationHandler", "PopupComponentDidUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:b4NxaXWyfkuNBBnlhYu94w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:InNXvesNe0SuhQrOJylonw", callContext.id);
                // Execute Action: CopyClassesAcrossPortal
                NavigationHandlerController.default.copyClassesAcrossPortal$Action(idService.getId("Root"), idService.getId("Popup"), callContext);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:dSsCY828K0i1PZLGvMIOpg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:IfSG0i6kiUurqc8btpDZQw", callContext.id);
            }

        };
        Controller.prototype._resolve$Action = function(resultIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Resolve");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.Resolve$vars"))());
            vars.value.resultInLocal = resultIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:MIie_1cHT0SxxjHnvyesiA:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ/ClientActions.MIie_1cHT0SxxjHnvyesiA:zqoRhC5s5hgSdF81N2sQDQ", "NavigationHandler", "Resolve", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:7Y_v1tz_wkWaVvGDexqdow", callContext.id);
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Rz4L0NWRiEeer8UOl0pMrg", callContext.id);
                // ShowDialog = False
                model.variables.showDialogVar = false;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Rz4L0NWRiEeer8UOl0pMrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Callback = ResolveCallback
                vars.value.callbackVar = model.variables.resolveCallbackVar;
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Rz4L0NWRiEeer8UOl0pMrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // ResolveCallback = NullObject
                model.variables.resolveCallbackVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:m69giUfYcUu3ubR2OD0msg", callContext.id);
                controller.safeExecuteJSNode(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_controller_Resolve_ResolveJS, "Resolve", "Resolve", {
                    ResolveCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackVar, OS.DataTypes.DataTypes.Object),
                    Result: OS.DataConversion.JSNodeParamConverter.to(vars.value.resultInLocal, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:aVFJjtHTuEq8Dd+1o00T_g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:MIie_1cHT0SxxjHnvyesiA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.Resolve$vars", [{
            name: "Result",
            attrName: "resultInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "Callback",
            attrName: "callbackVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.show$Action = function(callbackIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._show$Action, callContext, callbackIn);

        };
        Controller.prototype.yes$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._yes$Action, callContext);

        };
        Controller.prototype.no$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._no$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.popupComponentDidUpdate$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._popupComponentDidUpdate$Action, callContext);

        };
        Controller.prototype.resolve$Action = function(resultIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._resolve$Action, callContext, resultIn);

        };
        Controller.prototype.confirmed$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:pyNnvFMhr0mjQR26hR5vUg:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg:WKV33Qdm+EcHl2F3R1PHZg", "NavigationHandler", "ConfirmationDialogs", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:1WpI6qMr8EueXrljR_3etQ:/NRWebFlows.pyNnvFMhr0mjQR26hR5vUg/NodesShownInESpaceTree.1WpI6qMr8EueXrljR_3etQ:We56Gdm4imoe6QaJq8gFUw", "NavigationHandler", "ActionConfirmationDialog", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:1WpI6qMr8EueXrljR_3etQ", callContext.id);
            OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:pyNnvFMhr0mjQR26hR5vUg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConfirmationDialogs/ActionConfirmationDialog On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConfirmationDialogs/ActionConfirmationDialog On Ready");
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
            return NavigationHandlerController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, NavigationHandlerLanguageResources);
});
define("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.OnReady.OnShowJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var eventHub = document.getElementById($parameters.EventHubId);

        eventHub.addEventListener("dx-show", function(evt) {
            $actions.Show(evt.detail.resolve);
        });
    };
});
define("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$controller.Resolve.ResolveJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.ResolveCallback) {
            $parameters.ResolveCallback($parameters.Result);
        }
    };
});

define("NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "ov4E47fz1kW+LvUCNt8Tzg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.callbackInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "UMvCAQP_m0Oub75fPm3q9g": {
            getter: function(varBag, idService) {
                return varBag.onShowJSResult.value;
            }
        },
        "_OD827b3yUuSkfYkzMgEzw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.callbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "BkoTXa6nDUiczjz87QJIDg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.resultInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "m69giUfYcUu3ubR2OD0msg": {
            getter: function(varBag, idService) {
                return varBag.resolveJSResult.value;
            }
        },
        "P5HQLGwtR0y6bBQrjfHrlw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showDialogVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "bL04bdjV1EWm7j5MKYc9sw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.resolveCallbackVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "sM_lxZDDLE2fRdGlFRBIOQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Root"));
                })(varBag.model, idService);
            }
        },
        "2cCBbMGot0q2vu9KaVbUqg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Popup"));
                })(varBag.model, idService);
            }
        },
        "mOKmhdQETkiRtnYN+oHVpQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogHeader"));
                })(varBag.model, idService);
            }
        },
        "Yh2OK4xt1Em1B7ygfaGMcQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogBody"));
                })(varBag.model, idService);
            }
        },
        "6kLVz41gtUKurT9T2HiTQQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
                })(varBag.model, idService);
            }
        },
        "kF1MWlAhlEG2jPiPmvbFNg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
                })(varBag.model, idService);
            }
        },
        "KAhWacNFtEmo9y6cPULvfw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("EventHub"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});