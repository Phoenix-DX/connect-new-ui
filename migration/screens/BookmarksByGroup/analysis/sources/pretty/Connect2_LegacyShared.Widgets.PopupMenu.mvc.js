define("Connect2_LegacyShared.Widgets.PopupMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function(OutSystems, Connect2_LegacySharedModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("HasOpened", "hasOpenedVar", "HasOpened", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ComponentUpdate", "componentUpdateVar", "ComponentUpdate", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("ComponentDestroy", "componentDestroyVar", "ComponentDestroy", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("Position", "positionIn", "Position", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_positionInDataFetchStatus", "_positionInDataFetchStatus", "_positionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsOpen", "isOpenIn", "IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Position" in inputs) {
                this.variables.positionIn = inputs.Position;
                if ("_positionInDataFetchStatus" in inputs) {
                    this.variables._positionInDataFetchStatus = inputs._positionInDataFetchStatus;
                }

            }

            if ("IsOpen" in inputs) {
                this.variables.isOpenIn = inputs.IsOpen;
                if ("_isOpenInDataFetchStatus" in inputs) {
                    this.variables._isOpenInDataFetchStatus = inputs._isOpenInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "Widgets.PopupMenu");
});
define("Connect2_LegacyShared.Widgets.PopupMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$model", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Widgets_PopupMenu_mvc_model, Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Widgets.PopupMenu";
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
                return Connect2_LegacyShared_Widgets_PopupMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller;
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
                style: model.getCachedValue(idService.getId("Root.Style"), function() {
                    return ((("dx-popup-menu dx-popup-menu-position-" + model.variables.positionIn) + ((model.variables.isOpenIn) ? (" dx-popup-menu-open") : (""))) + ((((model.variables.extendedClassIn) !== (""))) ? ((" " + model.variables.extendedClassIn)) : ("")));
                }, function() {
                    return model.variables.positionIn;
                }, function() {
                    return model.variables.isOpenIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Root"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._positionInDataFetchStatus, model.variables._isOpenInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.anchor,
                style: "dx-popup-menu-anchor",
                _idProps: {
                    service: idService,
                    name: "Anchor"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("FInxHLsAE0Gtdp23Q1t0HQ.Style"), function() {
                    return ((("dx-popup-menu-container dx-popup-menu-position-" + model.variables.positionIn) + ((model.variables.isOpenIn) ? (" dx-popup-menu-open") : (""))) + ((((model.variables.extendedClassIn) !== (""))) ? ((" " + model.variables.extendedClassIn)) : ("")));
                }, function() {
                    return model.variables.positionIn;
                }, function() {
                    return model.variables.isOpenIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._positionInDataFetchStatus, model.variables._isOpenInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, $if((model.variables.isOpenIn || model.variables.hasOpenedVar), false, this, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.popupMenu,
                    style: "dx-popup-menu-content",
                    _idProps: {
                        service: idService,
                        name: "PopupMenu"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "dx-popup-menu-backdrop",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$debugger", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnDestroy.DestroyJS", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnParametersChanged.UpdateJS", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnReady.AddEventHandlersJS"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Widgets_PopupMenu_mvc_Debugger, Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller_OnDestroy_DestroyJS, Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller_OnParametersChanged_UpdateJS, Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller_OnReady_AddEventHandlersJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                triggerOnOpen$Action: function() {
                    return controller.executeActionInsideJSNode(controller._triggerOnOpen$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "TriggerOnOpen");
                },
                triggerOnClose$Action: function() {
                    return controller.executeActionInsideJSNode(controller._triggerOnClose$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "TriggerOnClose");
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
        Controller.prototype._triggerOnOpen$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TriggerOnOpen");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:40ZaYO9Bx0+ibtMzB8yCJA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.fAJdRJQ7NEKpWz3mDhqSkw/ClientActions.40ZaYO9Bx0+ibtMzB8yCJA:+bl0wU9NuAlvJLLGMHVgSg", "Connect2_LegacyShared", "TriggerOnOpen", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gMLTnzqYlUazXTsLB51ITA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lwmynupiX0egQEj8BX6TIQ", callContext.id);
                // HasOpened = True
                model.variables.hasOpenedVar = true;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XAe0Lt0XDkqFZBJhhvzaRA", callContext.id);
                // Trigger Event: OnOpen
                return controller.onOpen$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:a9R0E44iS06NKSsxODxEXQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:40ZaYO9Bx0+ibtMzB8yCJA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:40ZaYO9Bx0+ibtMzB8yCJA", callContext.id);
                throw ex;

            });
        };
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
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:JdqrcZ5uiEOJhkvwk87L5Q:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.fAJdRJQ7NEKpWz3mDhqSkw/ClientActions.JdqrcZ5uiEOJhkvwk87L5Q:SXe24eC8Juul2CcWFZ8qzQ", "Connect2_LegacyShared", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BJ1vE323OU+fLXj7PKPLzg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MUEMwCHJxE6zRbyQGg5t6w", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
                    ComponentDestroy: OS.DataConversion.JSNodeParamConverter.to(model.variables.componentDestroyVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hQeBsgXu+0aZGOaseZPZPQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:JdqrcZ5uiEOJhkvwk87L5Q", callContext.id);
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
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:I7J7oL6y_0CkP_jchPcBGg:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.fAJdRJQ7NEKpWz3mDhqSkw/ClientActions.I7J7oL6y_0CkP_jchPcBGg:OktTaUZ3FP61WYCvD+gh8Q", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dKg0Q1n9VEi6Azo0uVITPA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Zox24UNzxEWd3rfRpMdrmA", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller_OnParametersChanged_UpdateJS, "Update", "OnParametersChanged", {
                    Position: OS.DataConversion.JSNodeParamConverter.to(model.variables.positionIn, OS.DataTypes.DataTypes.Text),
                    ComponentUpdate: OS.DataConversion.JSNodeParamConverter.to(model.variables.componentUpdateVar, OS.DataTypes.DataTypes.Object),
                    IsOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isOpenIn, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CWoauvXSfEO8sp+ZN9supg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:I7J7oL6y_0CkP_jchPcBGg", callContext.id);
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
            var addEventHandlersJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.addEventHandlersJSResult = addEventHandlersJSResult;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:JNoxqVMfJUOFfSkyM7WW_g:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.fAJdRJQ7NEKpWz3mDhqSkw/ClientActions.JNoxqVMfJUOFfSkyM7WW_g:kGiwqi64_mKouVE1BQJGDQ", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Zmg4bMLfJ0+CwjcWCxjB1A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:skTJ+Wp8wkGQy+PWvjBxfA", callContext.id);
                addEventHandlersJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_Widgets_PopupMenu_mvc_controller_OnReady_AddEventHandlersJS, "AddEventHandlers", "OnReady", {
                    Position: OS.DataConversion.JSNodeParamConverter.to(model.variables.positionIn, OS.DataTypes.DataTypes.Text),
                    RootId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Root"), OS.DataTypes.DataTypes.Text),
                    IsOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isOpenIn, OS.DataTypes.DataTypes.Boolean),
                    DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
                    UpdateCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Widgets.PopupMenu.OnReady$addEventHandlersJSResult"))();
                    jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
                    jsNodeResult.updateCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UpdateCallback, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    TriggerOnOpen: controller.clientActionProxies.triggerOnOpen$Action,
                    TriggerOnClose: controller.clientActionProxies.triggerOnClose$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:438q0rzojkyJibv888y4Ug", callContext.id);
                // ComponentUpdate = AddEventHandlers.UpdateCallback
                model.variables.componentUpdateVar = addEventHandlersJSResult.value.updateCallbackOut;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:438q0rzojkyJibv888y4Ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ComponentDestroy = AddEventHandlers.DestroyCallback
                model.variables.componentDestroyVar = addEventHandlersJSResult.value.destroyCallbackOut;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eAtnSSqc6kKgZRwsAPsC3g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:JNoxqVMfJUOFfSkyM7WW_g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Widgets.PopupMenu.OnReady$addEventHandlersJSResult", [{
            name: "DestroyCallback",
            attrName: "destroyCallbackOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }, {
            name: "UpdateCallback",
            attrName: "updateCallbackOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._triggerOnClose$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TriggerOnClose");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:k5hWzxQDtEC3NOEFfq7BiA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.fAJdRJQ7NEKpWz3mDhqSkw/ClientActions.k5hWzxQDtEC3NOEFfq7BiA:yQE0vyPV354SFUiHbAtihQ", "Connect2_LegacyShared", "TriggerOnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iBe0yGycYEGhoiXXgWYKCQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:anpBwVPmJkyWkZO7OnCKEQ", callContext.id);
                // Trigger Event: OnClose
                return controller.onClose$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ucuuGFVOiESNxCF2KLMEwg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:k5hWzxQDtEC3NOEFfq7BiA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:k5hWzxQDtEC3NOEFfq7BiA", callContext.id);
                throw ex;

            });
        };
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
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Aos42CRBykKXdoFJ0rYd0w:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.fAJdRJQ7NEKpWz3mDhqSkw/ClientActions.Aos42CRBykKXdoFJ0rYd0w:rJN9MJEZgJXG6xSQzALJVA", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:J1pAX8NM0kaKNV87g43Awg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gwi5MWGbskeVyCSMGV_U2w", callContext.id);
                // HasOpened = IsOpen
                model.variables.hasOpenedVar = model.variables.isOpenIn;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:n8iUXD8sz0WOWaOxlMNe2g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Aos42CRBykKXdoFJ0rYd0w", callContext.id);
            }

        };

        Controller.prototype.triggerOnOpen$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._triggerOnOpen$Action, callContext);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.triggerOnClose$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._triggerOnClose$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onClose$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onOpen$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ:hPUCrJAnBlRVqA2UZwyBjg", "Connect2_LegacyShared", "Widgets", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:fAJdRJQ7NEKpWz3mDhqSkw:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.fAJdRJQ7NEKpWz3mDhqSkw:nB4zIuLIqKe4ylsCusyoHw", "Connect2_LegacyShared", "PopupMenu", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:fAJdRJQ7NEKpWz3mDhqSkw", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/PopupMenu On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/PopupMenu On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/PopupMenu On Destroy");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/PopupMenu On Parameters Changed");
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
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnDestroy.DestroyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.ComponentDestroy) {
            $parameters.ComponentDestroy();
        }
    };
});
define("Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnParametersChanged.UpdateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.ComponentUpdate) {
            $parameters.ComponentUpdate($parameters.Position, $parameters.IsOpen);
        }
    };
});
define("Connect2_LegacyShared.Widgets.PopupMenu.mvc$controller.OnReady.AddEventHandlersJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var root = window.document.getElementById($parameters.RootId);
        var anchor = root.querySelector(".dx-popup-menu-anchor");
        var container = root.querySelector(".dx-popup-menu-container");


        /* Bounding box for the anchor container */
        var anchorBox;
        /* Bounding box for the menu container */
        var containerBox;
        /* Bounding box for the viewport window */
        var windowBox;

        /* Request id from requestAnimationFrame() for updating the popup position */
        var updatePopupRequestId;


        /* Checks if the popup is currently open */
        var isOpen = function() {
            return root.classList.contains("dx-popup-menu-open");
        };


        var stopReactClickBubbling = function(element) {
            var reactHandlerKey = Object.keys(element).find(function(key) {
                return key.startsWith("__reactEventHandlers");
            });
            var reactHandler = element[reactHandlerKey];

            reactHandler.onClick = function(evt) {
                evt.stopPropagation();
            };
        };


        /* Opens the popup */
        var openPopup = function() {
            stopReactClickBubbling(root);

            var wasOpen = isOpen();
            if (wasOpen) {
                closePopup();
            } else {
                $actions.TriggerOnOpen();
                window.requestAnimationFrame(function() {
                    root.classList.add("dx-popup-menu-open");

                    window.document.body.appendChild(container);
                    container.classList.add("dx-popup-menu-open");
                    container.style.position = "fixed";

                    window.document.body.addEventListener("click", closePopup);
                    window.document.body.addEventListener("touchmove", closePopup);
                    window.document.addEventListener("backbutton", closePopup);
                    window.addEventListener("dx-before-navigation", closePopup);


                    updatePopup();
                });
            }
        };


        /* Closes the popup */
        var closePopup = function() {
            var wasOpen = isOpen();

            root.classList.remove("dx-popup-menu-open");
            container.classList.remove("dx-popup-menu-open");

            window.cancelAnimationFrame(updatePopupRequestId);
            window.document.body.removeEventListener("touchmove", closePopup);
            window.document.body.removeEventListener("click", closePopup);
            window.removeEventListener("dx-before-navigation", closePopup);
            window.document.removeEventListener("backbutton", closePopup);
            if (wasOpen) {
                $actions.TriggerOnClose();
            }
        };



        /* Checks if two bounding boxes are equal */
        var boxEquals = function(box, newBox) {
            return box && newBox &&
                box.x == newBox.x && box.y == newBox.y &&
                box.width == newBox.width && box.height == newBox.height;
        };


        /* Updates the popup positioning, if needed, on every frame */
        var updatePopup = function() {
            var containerBoundingBox = container.getBoundingClientRect();

            var newAnchorBox = anchor.getBoundingClientRect();
            var newContainerBox = {
                x: 0,
                y: 0,
                width: containerBoundingBox.width,
                height: containerBoundingBox.height
            };
            var newWindowBox = {
                x: 0,
                y: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };

            if (!boxEquals(anchorBox, newAnchorBox) || !boxEquals(containerBox, newContainerBox) || !boxEquals(windowBox, newWindowBox)) {
                updatePosition(newAnchorBox, newContainerBox, newWindowBox);
                anchorBox = newAnchorBox;
                containerBox = newContainerBox;
                windowBox = newWindowBox;
            }

            window.cancelAnimationFrame(updatePopupRequestId);
            updatePopupRequestId = window.requestAnimationFrame(updatePopup);
        };



        /*
         * Calculates all possible alignment points on a bounding box:
         *
         *   TL------TC------TR
         *   |                |
         *   |                |
         *   CL      CC      CR
         *   |                |
         *   |                |
         *   BL------BC------BR
         *
         */
        var alignmentPoints = function(box) {
            return {
                TL: {
                    x: box.x,
                    y: box.y
                },
                /* top-left      */
                TC: {
                    x: box.x + box.width / 2,
                    y: box.y
                },
                /* top-center    */
                TR: {
                    x: box.x + box.width,
                    y: box.y
                },
                /* top-right     */
                CL: {
                    x: box.x,
                    y: box.y + box.height / 2
                },
                /* center-left   */
                CC: {
                    x: box.x + box.width / 2,
                    y: box.y + box.height / 2
                },
                /* center-center */
                CR: {
                    x: box.x + box.width,
                    y: box.y + box.height / 2
                },
                /* center-right  */
                BL: {
                    x: box.x,
                    y: box.y + box.height
                },
                /* bottom-left   */
                BC: {
                    x: box.x + box.width / 2,
                    y: box.y + box.height
                },
                /* bottom-center */
                BR: {
                    x: box.x + box.width,
                    y: box.y + box.height
                } /* bottom-right  */
            };
        };


        /* Updates the position of the popup, based on the anchor's position and the viewport limits */
        var updatePosition = function(anchorBox, containerBox, windowBox) {
            var anchorPoints = alignmentPoints(anchorBox);
            var containerStyle = window.getComputedStyle(container);

            /* Calculate the positionBox of the popup relative to the anchor */
            var positionBox = {
                x: 0,
                y: 0,
                width: containerBox.width,
                height: containerBox.height
            };
            var popupPoints = alignmentPoints(positionBox);

            if ($parameters.Position == "top-left") {
                positionBox.y = anchorPoints.TR.y - popupPoints.BR.y;
                positionBox.x = anchorPoints.TR.x - popupPoints.BR.x;
            } else if ($parameters.Position == "top") {
                positionBox.y = anchorPoints.TC.y - popupPoints.BC.y;
                positionBox.x = anchorPoints.TC.x - popupPoints.BC.x;
            } else if ($parameters.Position == "top-right") {
                positionBox.y = anchorPoints.TL.y - popupPoints.BL.y;
                positionBox.x = anchorPoints.TL.x - popupPoints.BL.x;
            } else if ($parameters.Position == "left") {
                positionBox.y = anchorPoints.CR.y - popupPoints.CR.y;
                positionBox.x = anchorPoints.CR.x - popupPoints.CR.x;
            } else if ($parameters.Position == "center") {
                positionBox.y = anchorPoints.CC.y - popupPoints.CC.y;
                positionBox.x = anchorPoints.CC.x - popupPoints.CC.x;
            } else if ($parameters.Position == "right") {
                positionBox.y = anchorPoints.CL.y - popupPoints.CL.y;
                positionBox.x = anchorPoints.CL.x - popupPoints.CL.x;
            } else if ($parameters.Position == "bottom-left") {
                positionBox.y = anchorPoints.BR.y - popupPoints.TR.y;
                positionBox.x = anchorPoints.BR.x - popupPoints.TR.x;
            } else if ($parameters.Position == "bottom") {
                positionBox.y = anchorPoints.BC.y - popupPoints.TC.y;
                positionBox.x = anchorPoints.BC.x - popupPoints.TC.x;
            } else {
                positionBox.y = anchorPoints.BL.y - popupPoints.TL.y;
                positionBox.x = anchorPoints.BL.x - popupPoints.TL.x;
            }


            /* Calculate the bounding box of the popup, including any margins */
            var marginBox = {
                x: positionBox.x - parseFloat(containerStyle.marginLeft),
                y: positionBox.y - parseFloat(containerStyle.marginTop),
                width: positionBox.width + parseFloat(containerStyle.marginLeft) + parseFloat(containerStyle.marginRight),
                height: positionBox.height + parseFloat(containerStyle.marginTop) + parseFloat(containerStyle.marginBottom)
            };


            /* Change the positionBox if it overflows the window */
            marginBox.y = Math.min(Math.max(marginBox.y, windowBox.y), windowBox.height - marginBox.height);
            marginBox.x = Math.min(Math.max(marginBox.x, windowBox.x), windowBox.width - marginBox.width);

            /* Apply the styles to position the popup */
            container.style.top = marginBox.y + "px";
            container.style.left = marginBox.x + "px";
        };



        var componentUpdate = function(position, isOpen) {
            $parameters.Position = position;
            $parameters.IsOpen = isOpen;

            if ($parameters.IsOpen) {
                openPopup();
            } else {
                closePopup();
            }
        };

        var componentDestroy = function() {
            if (container.parentNode == window.document.body) {
                closePopup();
                container.remove();
            }
        };


        anchor.addEventListener("click", openPopup);
        componentUpdate($parameters.Position, $parameters.IsOpen);


        $parameters.UpdateCallback = componentUpdate;
        $parameters.DestroyCallback = componentDestroy;
    };
});

define("Connect2_LegacyShared.Widgets.PopupMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "MUEMwCHJxE6zRbyQGg5t6w": {
            getter: function(varBag, idService) {
                return varBag.destroyJSResult.value;
            }
        },
        "Zox24UNzxEWd3rfRpMdrmA": {
            getter: function(varBag, idService) {
                return varBag.updateJSResult.value;
            }
        },
        "skTJ+Wp8wkGQy+PWvjBxfA": {
            getter: function(varBag, idService) {
                return varBag.addEventHandlersJSResult.value;
            }
        },
        "ba9gPhusrEKNqzBraLncqQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasOpenedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "SMipcQ6ShEm0t0m4y5uy1Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.componentUpdateVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "x0hQYH1TVU2rwHSlrHjoxg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.componentDestroyVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "EuWdzi2fMEGwtagoAU0iVQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.positionIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Fe8YlGlO0EuU7BGmrGw2hA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isOpenIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8LxtQHSYuEOfl2z_VsXiCg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uoL1x_Cwn06_U5p42aRCpQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Root"));
                })(varBag.model, idService);
            }
        },
        "yye9pbi4kEqs+HM1Vj7_Og": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Anchor"));
                })(varBag.model, idService);
            }
        },
        "lfmHn2xMqk2BQl_QsFkD3g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsOpenOrHasOpened"));
                })(varBag.model, idService);
            }
        },
        "Qz2ARc+5A0ufD4oF1bk2Ow": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("PopupMenu"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});